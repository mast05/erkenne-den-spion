"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

type Player = {
  id: string;
  name: string;
  is_host: boolean;
};

function clearQuizSession() {
  ["roomId", "playerId", "quizGameId"].forEach((key) =>
    sessionStorage.removeItem(key)
  );
}

export default function QuizLobbyPage() {
  const router = useRouter();

  const [roomCode, setRoomCode] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [playerId, setPlayerId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lobbyError, setLobbyError] = useState("");
  const [busy, setBusy] = useState<string | null>(null);

  const leavingLobbyRef = useRef(false);
  const actionRunningRef = useRef(false);

  const currentPlayer = players.find(
    (player) => player.id === playerId
  );

  const isHost = currentPlayer?.is_host === true;

  useEffect(() => {
    const roomId = sessionStorage.getItem("roomId");
    const currentPlayerId = sessionStorage.getItem("playerId");

    if (!roomId || !currentPlayerId) {
      router.replace("/quiz");
      return;
    }

    const sessionPlayerId = currentPlayerId;

    let mounted = true;
    let fetching = false;

    function canUpdate() {
      return (
        mounted &&
        !leavingLobbyRef.current &&
        !actionRunningRef.current
      );
    }

    async function loadLobby() {
      if (!canUpdate() || fetching) return;

      fetching = true;

      try {
        const { data: room, error: roomError } = await supabase
          .from("rooms")
          .select("room_code")
          .eq("id", roomId)
          .eq("game", "quiz")
          .maybeSingle();

        if (!canUpdate()) return;

        if (roomError || !room) {
          throw new Error(
            "Der Raum konnte nicht geladen werden."
          );
        }

        const { data: playerData, error: playersError } =
          await supabase
            .from("players")
            .select("id, name, is_host")
            .eq("room_id", roomId)
            .order("created_at", { ascending: true });

        if (!canUpdate()) return;

        if (playersError) {
          throw new Error(
            "Die Spieler konnten nicht geladen werden."
          );
        }

        const loadedPlayers: Player[] = playerData ?? [];
        setPlayerId(sessionPlayerId);

        const stillInRoom = loadedPlayers.some(
          (player) => player.id === currentPlayerId
        );

        if (!stillInRoom) {
          leavingLobbyRef.current = true;
          clearQuizSession();
          router.replace("/quiz");
          return;
        }

        setRoomCode(room.room_code ?? "");
        setPlayers(loadedPlayers);

        const { data: quizGame, error: gameError } =
          await supabase
            .from("quiz_games")
            .select("id, status")
            .eq("room_id", roomId)
            .eq("status", "playing")
            .order("created_at", { ascending: false })
            .limit(1)
            .maybeSingle();

        if (!canUpdate()) return;

        if (gameError) {
          throw new Error(
            "Der Spielstart konnte nicht geprüft werden."
          );
        }

        if (quizGame) {
          leavingLobbyRef.current = true;
          sessionStorage.setItem("quizGameId", quizGame.id);

          router.push("/quiz/game");
          return;
        }

        setLobbyError("");
      } catch (err) {
        if (!canUpdate()) return;

        console.error("QUIZ LOBBY ERROR:", err);
        setLobbyError(
          err instanceof Error
            ? err.message
            : "Die Lobby konnte nicht geladen werden."
        );
      } finally {
        fetching = false;

        if (canUpdate()) {
          setLoading(false);
        }
      }
    }

    void loadLobby();

    const interval = window.setInterval(() => {
      void loadLobby();
    }, 1000);

    return () => {
      mounted = false;
      window.clearInterval(interval);
    };
  }, [router]);

  async function kickPlayer(targetPlayerId: string) {
    const roomId = sessionStorage.getItem("roomId");

    if (
      !isHost ||
      !roomId ||
      actionRunningRef.current ||
      leavingLobbyRef.current ||
      targetPlayerId === playerId
    ) {
      return;
    }

    const target = players.find(
      (player) => player.id === targetPlayerId
    );

    if (!target || target.is_host) return;

    if (
      !window.confirm(
        `${target.name} wirklich aus dem Raum werfen?`
      )
    ) {
      return;
    }

    actionRunningRef.current = true;
    setBusy(targetPlayerId);
    setError("");

    try {
      const { data: deletedPlayers, error: kickError } =
        await supabase
          .from("players")
          .delete()
          .eq("id", targetPlayerId)
          .eq("room_id", roomId)
          .eq("is_host", false)
          .select("id");

      if (kickError || !deletedPlayers?.length) {
        throw new Error(
          "Der Spieler konnte nicht entfernt werden."
        );
      }

      setPlayers((current) =>
        current.filter(
          (player) => player.id !== targetPlayerId
        )
      );
    } catch (err) {
      console.error("QUIZ KICK ERROR:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Der Spieler konnte nicht entfernt werden."
      );
    } finally {
      actionRunningRef.current = false;
      setBusy(null);
    }
  }

  async function leaveRoom() {
    if (
      actionRunningRef.current ||
      leavingLobbyRef.current
    ) {
      return;
    }

    actionRunningRef.current = true;
    leavingLobbyRef.current = true;
    setBusy("leave");
    setError("");

    const roomId = sessionStorage.getItem("roomId");
    let promotedPlayerId: string | null = null;

    try {
      if (roomId && playerId) {
        const { data: roomPlayers, error: playersError } =
          await supabase
            .from("players")
            .select("id, name, is_host")
            .eq("room_id", roomId)
            .order("created_at", { ascending: true });

        if (playersError) {
          throw new Error(
            "Die Spieler konnten nicht geprüft werden."
          );
        }

        const currentPlayers: Player[] = roomPlayers ?? [];
        const me = currentPlayers.find(
          (player) => player.id === playerId
        );

        if (me) {
          const otherPlayers = currentPlayers.filter(
            (player) => player.id !== playerId
          );

          if (
            me.is_host &&
            !otherPlayers.some((player) => player.is_host)
          ) {
            const nextHost = otherPlayers[0];

            if (nextHost) {
              const {
                data: updatedPlayers,
                error: hostError,
              } = await supabase
                .from("players")
                .update({ is_host: true })
                .eq("id", nextHost.id)
                .eq("room_id", roomId)
                .eq("is_host", false)
                .select("id");

              if (hostError || !updatedPlayers?.length) {
                throw new Error(
                  "Der Host konnte nicht übertragen werden."
                );
              }

              promotedPlayerId = nextHost.id;
            }
          }

          const {
            data: deletedPlayers,
            error: deleteError,
          } = await supabase
            .from("players")
            .delete()
            .eq("id", playerId)
            .eq("room_id", roomId)
            .select("id");

          if (deleteError || !deletedPlayers?.length) {
            throw new Error(
              "Du konntest den Raum nicht verlassen."
            );
          }
        }
      }

      clearQuizSession();
      router.replace("/");
    } catch (err) {
      console.error("QUIZ LEAVE ERROR:", err);

      let message =
        err instanceof Error
          ? err.message
          : "Der Raum konnte nicht verlassen werden.";

      if (roomId && promotedPlayerId) {
        try {
          const {
            data: restoredPlayers,
            error: restoreError,
          } = await supabase
            .from("players")
            .update({ is_host: false })
            .eq("id", promotedPlayerId)
            .eq("room_id", roomId)
            .select("id");

          if (restoreError || !restoredPlayers?.length) {
            message =
              "Der Host-Wechsel konnte nicht zurückgesetzt werden. Bitte die Lobby neu laden.";
          }
        } catch {
          message =
            "Der Host-Wechsel konnte nicht zurückgesetzt werden. Bitte die Lobby neu laden.";
        }
      }

      actionRunningRef.current = false;
      leavingLobbyRef.current = false;
      setBusy(null);
      setError(message);
    }
  }

  function prepareGame() {
    if (
      !isHost ||
      players.length < 2 ||
      actionRunningRef.current ||
      leavingLobbyRef.current
    ) {
      return;
    }

    leavingLobbyRef.current = true;
    setBusy("prepare");

    router.push("/quiz/setup");
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-slate-400">
          Lobby wird geladen...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
        <button
          type="button"
          onClick={() => void leaveRoom()}
          disabled={busy !== null}
          className="mb-6 self-start rounded-xl px-3 py-2 font-bold text-slate-400 transition hover:bg-slate-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          {busy === "leave"
            ? "Raum wird verlassen..."
            : "← Hauptmenü"}
        </button>

        <div className="text-center">
          <div className="text-6xl">🎓</div>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
            Fandom Quiz
          </p>

          <h1 className="mt-2 text-3xl font-black">
            Lobby
          </h1>

          <p className="mt-3 text-slate-400">
            2–3 Spieler können mitspielen.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
            Raumcode
          </p>

          <p className="mt-3 text-4xl font-black tracking-[0.2em]">
            {roomCode}
          </p>

          <p className="mt-3 text-sm text-slate-400">
            Teile diesen Code mit deinen Mitspielern.
          </p>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <div className="flex items-center justify-between">
            <p className="font-black">Spieler</p>

            <span className="text-sm font-bold text-slate-400">
              {players.length}/3
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {players.map((player) => (
              <div
                key={player.id}
                className="flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-4"
              >
                <div>
                  <p className="font-bold">
                    {player.name}
                    {player.id === playerId ? " (Du)" : ""}
                  </p>

                  {player.is_host && (
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Host
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    {player.is_host ? "👑" : "🎓"}
                  </span>

                  {isHost &&
                    player.id !== playerId &&
                    !player.is_host && (
                      <button
                        type="button"
                        onClick={() =>
                          void kickPlayer(player.id)
                        }
                        disabled={busy !== null}
                        aria-label={`${player.name} entfernen`}
                        className="rounded-xl bg-red-500/10 px-3 py-2 text-sm font-bold text-red-400 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {busy === player.id ? "..." : "Kick"}
                      </button>
                    )}
                </div>
              </div>
            ))}

            {players.length < 3 && (
              <div className="rounded-2xl border border-dashed border-slate-700 px-4 py-4 text-center text-sm text-slate-500">
                Warte auf weitere Spieler...
              </div>
            )}
          </div>
        </div>

        {isHost ? (
          <button
            type="button"
            onClick={prepareGame}
            disabled={players.length < 2 || busy !== null}
            className="mt-6 w-full rounded-2xl bg-emerald-500 px-6 py-5 font-black text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            🎓 Quiz vorbereiten
          </button>
        ) : (
          <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-center text-sm text-slate-400">
            Der Host bereitet das Quiz vor.
          </div>
        )}

        {players.length === 1 && (
          <p className="mt-3 text-center text-sm text-slate-500">
            Mindestens 2 Spieler werden benötigt.
          </p>
        )}

        {(error || lobbyError) && (
          <p
            role="alert"
            className="mt-5 text-center text-sm text-red-400"
          >
            {error || lobbyError}
          </p>
        )}
      </div>
    </main>
  );
}