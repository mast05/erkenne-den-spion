"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Player = {
  id: string;
  name: string;
  is_host: boolean;
};

export default function LobbyPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [roomCode, setRoomCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [leaving, setLeaving] = useState(false);

  const [kickingPlayerId, setKickingPlayerId] = useState<
    string | null
  >(null);

  useEffect(() => {
    let mounted = true;
    let checking = false;
    let navigating = false;

    let interval: ReturnType<typeof setInterval> | null = null;

    async function loadLobby() {
      if (checking || navigating || !mounted) return;

      checking = true;

      try {
        const roomId = sessionStorage.getItem("roomId");
        const currentPlayerId =
          sessionStorage.getItem("playerId");

        if (!roomId || !currentPlayerId) {
          navigating = true;

          if (interval) {
            clearInterval(interval);
          }

          window.location.href = "/spy";
          return;
        }

        if (mounted) {
          setPlayerId(currentPlayerId);
        }

        // Raum laden
        const { data: room, error: roomError } =
          await supabase
            .from("rooms")
            .select("id, room_code")
            .eq("id", roomId)
            .single();

        if (!mounted || navigating) return;

        if (roomError || !room) {
          console.error("ROOM ERROR:", roomError);

          setError(
            "Der Raum konnte nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        setRoomCode(room.room_code);

        // Spieler laden
        const { data: playerData, error: playersError } =
          await supabase
            .from("players")
            .select("id, name, is_host")
            .eq("room_id", roomId)
            .order("created_at", {
              ascending: true,
            });

        if (!mounted || navigating) return;

        if (playersError) {
          console.error(
            "PLAYERS ERROR:",
            playersError
          );

          setError(
            "Die Spieler konnten nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        const loadedPlayers = playerData ?? [];

        setPlayers(loadedPlayers);

        // Prüfen, ob dieser Tab noch zu einem Spieler
        // in diesem Raum gehört.
        const ownPlayer = loadedPlayers.find(
          (player) =>
            player.id === currentPlayerId
        );

        // Wurde der Spieler gekickt, geht es zurück.
        if (!ownPlayer) {
          sessionStorage.removeItem("playerId");
          sessionStorage.removeItem("roomId");
          sessionStorage.removeItem("roundId");

          navigating = true;

          if (interval) {
            clearInterval(interval);
          }

          window.location.href = "/spy";
          return;
        }

        // Aktive Runde prüfen
        const { data: round, error: roundError } =
          await supabase
            .from("rounds")
            .select("id")
            .eq("room_id", roomId)
            .eq("status", "active")
            .order("created_at", {
              ascending: false,
            })
            .limit(1)
            .maybeSingle();

        if (!mounted || navigating) return;

        if (roundError) {
          console.error(
            "ROUND ERROR:",
            roundError
          );

          setError(
            "Die Runde konnte nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        // Sobald der Host eine Runde startet,
        // gehen alle automatisch ins Spiel.
        if (round) {
          navigating = true;

          sessionStorage.setItem(
            "roundId",
            round.id
          );

          if (interval) {
            clearInterval(interval);
          }

          window.location.href = "/game";
          return;
        }

        setError("");
        setLoading(false);
      } catch (err) {
        console.error(
          "LOBBY ERROR:",
          err
        );

        if (mounted) {
          setError(
            "Beim Laden der Lobby ist ein Fehler aufgetreten."
          );

          setLoading(false);
        }
      } finally {
        checking = false;
      }
    }

    loadLobby();

    interval = setInterval(() => {
      loadLobby();
    }, 2000);

    return () => {
      mounted = false;

      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  const currentPlayer = players.find(
    (player) => player.id === playerId
  );

  const isHost =
    currentPlayer?.is_host === true;

  async function kickPlayer(player: Player) {
    if (!isHost) return;
    if (player.id === playerId) return;
    if (kickingPlayerId) return;

    const confirmed = window.confirm(
      `${player.name} wirklich aus dem Raum entfernen?`
    );

    if (!confirmed) return;

    const roomId =
      sessionStorage.getItem("roomId");

    if (!roomId) {
      setError(
        "Der Raum wurde nicht gefunden."
      );

      return;
    }

    setKickingPlayerId(player.id);
    setError("");

    try {
      const { error: kickError } =
        await supabase
          .from("players")
          .delete()
          .eq("id", player.id)
          .eq("room_id", roomId);

      if (kickError) {
        console.error(
          "KICK PLAYER ERROR:",
          kickError
        );

        setError(
          `${player.name} konnte nicht entfernt werden.`
        );

        return;
      }

      setPlayers((currentPlayers) =>
        currentPlayers.filter(
          (current) =>
            current.id !== player.id
        )
      );
    } catch (err) {
      console.error(
        "KICK PLAYER ERROR:",
        err
      );

      setError(
        `${player.name} konnte nicht entfernt werden.`
      );
    } finally {
      setKickingPlayerId(null);
    }
  }

  async function leaveRoom() {
    if (leaving) return;

    const roomId =
      sessionStorage.getItem("roomId");

    const currentPlayerId =
      sessionStorage.getItem("playerId");

    if (!roomId || !currentPlayerId) {
      sessionStorage.removeItem("playerId");
      sessionStorage.removeItem("roomId");
      sessionStorage.removeItem("roundId");

      window.location.href = "/spy";
      return;
    }

    setLeaving(true);
    setError("");

    try {
      const leavingPlayer = players.find(
        (player) =>
          player.id === currentPlayerId
      );

      let promotedPlayerId: string | null =
        null;

      // Falls der Host geht:
      // anderen Spieler zum Host machen.
      if (leavingPlayer?.is_host) {
        const nextHost = players.find(
          (player) =>
            player.id !== currentPlayerId
        );

        if (nextHost) {
          const { error: promoteError } =
            await supabase
              .from("players")
              .update({
                is_host: true,
              })
              .eq("id", nextHost.id);

          if (promoteError) {
            console.error(
              "HOST PROMOTE ERROR:",
              promoteError
            );

            setError(
              "Der Host konnte nicht gewechselt werden."
            );

            setLeaving(false);
            return;
          }

          promotedPlayerId =
            nextHost.id;
        }
      }

      const { error: deleteError } =
        await supabase
          .from("players")
          .delete()
          .eq("id", currentPlayerId)
          .eq("room_id", roomId);

      if (deleteError) {
        console.error(
          "LEAVE ROOM ERROR:",
          deleteError
        );

        // Host-Wechsel zurücknehmen,
        // wenn Löschen fehlgeschlagen ist.
        if (promotedPlayerId) {
          await supabase
            .from("players")
            .update({
              is_host: false,
            })
            .eq(
              "id",
              promotedPlayerId
            );
        }

        setError(
          "Du konntest den Raum nicht verlassen."
        );

        setLeaving(false);
        return;
      }

      sessionStorage.removeItem("playerId");
      sessionStorage.removeItem("roomId");
      sessionStorage.removeItem("roundId");

      window.location.href = "/spy";
    } catch (err) {
      console.error(
        "LEAVE ROOM ERROR:",
        err
      );

      setError(
        "Beim Verlassen des Raums ist ein Fehler aufgetreten."
      );

      setLeaving(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <div className="text-5xl">
            🕵️
          </div>

          <p className="mt-5 font-semibold text-slate-400">
            Lobby wird geladen...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-md px-6 py-10">

        {/* KOPF */}
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 text-5xl">
            🕵️
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
            Lobby
          </p>

          <h1 className="mt-3 text-3xl font-black">
            Erkenne den Spion
          </h1>

          <p className="mt-3 text-slate-400">
            Warte auf deine Mitspieler
          </p>
        </div>

        {/* RAUMCODE */}
        <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900 p-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
            Raumcode
          </p>

          <p className="mt-3 text-4xl font-black tracking-[0.2em] text-white">
            {roomCode}
          </p>

          <p className="mt-3 text-xs text-slate-500">
            Teile diesen Code mit deinen Mitspielern
          </p>
        </div>

        {/* FEHLER */}
        {error && (
          <div className="mt-5 rounded-2xl border border-red-900 bg-red-950/30 p-4 text-center">
            <p className="text-sm text-red-300">
              {error}
            </p>
          </div>
        )}

        {/* SPIELER */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-black">
              Spieler
            </h2>

            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                players.length === 3
                  ? "bg-emerald-950 text-emerald-400"
                  : "bg-slate-900 text-slate-400"
              }`}
            >
              {players.length} / 3
            </span>
          </div>

          <div className="space-y-3">
            {players.map((player, index) => (
              <div
                key={player.id}
                className={`flex items-center justify-between rounded-2xl border p-4 ${
                  player.id === playerId
                    ? "border-emerald-900 bg-emerald-950/20"
                    : "border-slate-800 bg-slate-900"
                }`}
              >
                <div className="flex items-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 font-black text-slate-400">
                    {index + 1}
                  </div>

                  <div className="ml-3">
                    <div className="flex items-center">
                      <p className="font-bold">
                        {player.name}
                      </p>

                      {player.id ===
                        playerId && (
                        <span className="ml-2 rounded-full bg-emerald-950 px-2 py-1 text-[10px] font-bold uppercase text-emerald-400">
                          Du
                        </span>
                      )}
                    </div>

                    {player.is_host ? (
                      <p className="mt-1 text-xs font-semibold text-yellow-400">
                        👑 Host
                      </p>
                    ) : (
                      <p className="mt-1 text-xs text-slate-500">
                        Spieler
                      </p>
                    )}
                  </div>
                </div>

                {isHost &&
                  player.id !== playerId && (
                    <button
                      onClick={() =>
                        kickPlayer(player)
                      }
                      disabled={
                        kickingPlayerId !==
                        null
                      }
                      className="rounded-xl border border-red-900 bg-red-950/30 px-3 py-2 text-xs font-bold text-red-400 transition hover:bg-red-950/60 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {kickingPlayerId ===
                      player.id
                        ? "..."
                        : "✕"}
                    </button>
                  )}
              </div>
            ))}

            {/* LEERE SPIELERPLÄTZE */}
            {Array.from({
              length: Math.max(
                0,
                3 - players.length
              ),
            }).map((_, index) => (
              <div
                key={`empty-${index}`}
                className="flex items-center rounded-2xl border border-dashed border-slate-800 bg-slate-950/40 p-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-dashed border-slate-800 text-slate-700">
                  ?
                </div>

                <p className="ml-3 text-sm text-slate-600">
                  Warte auf Spieler...
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* STATUS */}
        {players.length < 3 && (
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-4 text-center">
            <p className="text-sm text-slate-400">
              Noch{" "}
              <span className="font-bold text-white">
                {3 - players.length}
              </span>{" "}
              {3 - players.length === 1
                ? "Spieler"
                : "Spieler"}{" "}
              benötigt
            </p>
          </div>
        )}

        {players.length === 3 && (
          <div className="mt-6 rounded-2xl border border-emerald-900 bg-emerald-950/20 p-4 text-center">
            <p className="font-bold text-emerald-400">
              ✅ Alle Spieler sind bereit
            </p>
          </div>
        )}

        {/* HOST START */}
        {isHost && (
          <button
            disabled={
              players.length !== 3 ||
              leaving ||
              kickingPlayerId !== null
            }
            onClick={() => {
              window.location.href =
                "/category";
            }}
            className="mt-5 w-full rounded-2xl bg-emerald-500 px-6 py-5 font-black text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
          >
            🎮 Spiel starten
          </button>
        )}

        {/* NICHT-HOST */}
        {!isHost &&
          players.length === 3 && (
            <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-4 text-center">
              <p className="text-sm text-slate-400">
                Warte, bis der Host das Spiel startet...
              </p>
            </div>
          )}

        {/* VERLASSEN */}
        <button
          onClick={leaveRoom}
          disabled={
            leaving ||
            kickingPlayerId !== null
          }
          className="mt-5 w-full rounded-2xl border border-red-900 bg-red-950/20 px-6 py-4 font-bold text-red-400 transition hover:bg-red-950/50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {leaving
            ? "Raum wird verlassen..."
            : "🚪 Raum verlassen"}
        </button>

        <p className="mt-6 text-center text-xs text-slate-700">
          Genau 3 Spieler · 1 zufälliger Spion
        </p>
      </div>
    </main>
  );
}