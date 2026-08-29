"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import {
  dealCharacters,
  dealGameModes,
  DealGameMode,
} from "../../lib/dealData";

type Player = {
  id: string;
  name: string;
  is_host: boolean;
};

type Room = {
  room_code: string;
};

export default function DealLobbyPage() {
  const [room, setRoom] = useState<Room | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [playerId, setPlayerId] = useState("");

  const [selectedMode, setSelectedMode] =
    useState<DealGameMode>("kills");

  const [loading, setLoading] = useState(true);
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState("");

  const currentPlayer = players.find(
    (player) => player.id === playerId
  );

  const isHost = currentPlayer?.is_host === true;

  useEffect(() => {
    const roomId = sessionStorage.getItem("roomId");
    const currentPlayerId =
      sessionStorage.getItem("playerId");

    if (!roomId || !currentPlayerId) {
      window.location.href = "/deal";
      return;
    }

    setPlayerId(currentPlayerId);

    async function loadLobby() {
      const { data: roomData, error: roomError } =
        await supabase
          .from("rooms")
          .select("room_code")
          .eq("id", roomId)
          .eq("game", "deal")
          .maybeSingle();

      if (roomError || !roomData) {
        console.error(roomError);
        setError("Der Raum konnte nicht geladen werden.");
        setLoading(false);
        return;
      }

      setRoom(roomData);

      const { data: playerData, error: playerError } =
        await supabase
          .from("players")
          .select("id, name, is_host")
          .eq("room_id", roomId)
          .order("created_at");

      if (playerError) {
        console.error(playerError);
        setError("Die Spieler konnten nicht geladen werden.");
        setLoading(false);
        return;
      }

      const loadedPlayers = playerData ?? [];

      const me = loadedPlayers.find(
        (player) => player.id === currentPlayerId
      );

      // Falls man vom Host gekickt wurde
      if (!me) {
        sessionStorage.removeItem("roomId");
        sessionStorage.removeItem("playerId");
        sessionStorage.removeItem("dealGameId");

        window.location.href = "/deal";
        return;
      }

      setPlayers(loadedPlayers);

      // Prüfen, ob der Host bereits ein Spiel gestartet hat
      const { data: activeGame, error: gameError } =
        await supabase
          .from("deal_games")
          .select("id")
          .eq("room_id", roomId)
          .eq("status", "playing")
          .order("created_at", {
            ascending: false,
          })
          .limit(1)
          .maybeSingle();

      if (gameError) {
        console.error(gameError);
      }

      if (activeGame) {
        sessionStorage.setItem(
          "dealGameId",
          activeGame.id
        );

        window.location.href = "/deal/game";
        return;
      }

      setLoading(false);
    }

    loadLobby();

    const interval = setInterval(loadLobby, 2000);

    return () => clearInterval(interval);
  }, []);

  async function startGame() {
    const roomId = sessionStorage.getItem("roomId");

    if (!roomId || !isHost || starting) {
      return;
    }

    if (players.length !== 2 && players.length !== 3) {
      setError(
        "Für Deal or No Deal müssen 2 oder 3 Spieler im Raum sein."
      );
      return;
    }

    setStarting(true);
    setError("");

    const characterPool = dealCharacters.map(
      (character) => ({
        name: character.name,
        category: character.category,
        value: character[selectedMode],
      })
    );

    const { data: gameId, error: gameError } =
      await supabase.rpc("create_deal_game", {
        check_room_id: roomId,
        check_mode: selectedMode,
        character_pool: characterPool,
      });

    if (gameError || !gameId) {
      console.error(gameError);

      setError(
        gameError?.message ||
          "Das Spiel konnte nicht gestartet werden."
      );

      setStarting(false);
      return;
    }

    sessionStorage.setItem("dealGameId", gameId);

    window.location.href = "/deal/game";
  }

  async function leaveRoom() {
    const roomId = sessionStorage.getItem("roomId");

    if (!roomId || !playerId) {
      return;
    }

    const leavingPlayer = players.find(
      (player) => player.id === playerId
    );

    // Wenn der Host geht, bekommt der nächste Spieler Host
    if (leavingPlayer?.is_host) {
      const nextHost = players.find(
        (player) => player.id !== playerId
      );

      if (nextHost) {
        const { error: hostError } = await supabase
          .from("players")
          .update({
            is_host: true,
          })
          .eq("id", nextHost.id);

        if (hostError) {
          console.error(hostError);
          setError(
            "Der Host konnte nicht übertragen werden."
          );
          return;
        }
      }
    }

    const { error: deleteError } = await supabase
      .from("players")
      .delete()
      .eq("id", playerId);

    if (deleteError) {
      console.error(deleteError);
      setError("Du konntest den Raum nicht verlassen.");
      return;
    }

    sessionStorage.removeItem("roomId");
    sessionStorage.removeItem("playerId");
    sessionStorage.removeItem("dealGameId");

    window.location.href = "/deal";
  }

  async function kickPlayer(targetPlayerId: string) {
    if (!isHost) {
      return;
    }

    const target = players.find(
      (player) => player.id === targetPlayerId
    );

    if (!target) {
      return;
    }

    const confirmed = window.confirm(
      `${target.name} wirklich aus dem Raum werfen?`
    );

    if (!confirmed) {
      return;
    }

    const { error: kickError } = await supabase
      .from("players")
      .delete()
      .eq("id", targetPlayerId);

    if (kickError) {
      console.error(kickError);
      setError("Der Spieler konnte nicht entfernt werden.");
      return;
    }

    setPlayers((current) =>
      current.filter(
        (player) => player.id !== targetPlayerId
      )
    );
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
      <div className="mx-auto max-w-md px-6 py-10">
        <div className="text-center">
          <div className="text-6xl">💼</div>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
            Deal or No Deal
          </p>

          <h1 className="mt-2 text-3xl font-black">
            Lobby
          </h1>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900 p-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
            Raumcode
          </p>

          <p className="mt-3 text-4xl font-black tracking-[0.2em] text-amber-400">
            {room?.room_code}
          </p>

          <p className="mt-3 text-sm text-slate-400">
            Teile diesen Code mit deinen Mitspielern.
          </p>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="font-black">
              Spieler
            </h2>

            <span className="text-sm text-slate-400">
              {players.length}/3
            </span>
          </div>

          <div className="mt-3 space-y-3">
            {[0, 1, 2].map((index) => {
              const player = players[index];

              if (!player) {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-dashed border-slate-800 px-5 py-4 text-slate-600"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900">
                      ?
                    </div>

                    <span>Warte auf Spieler...</span>
                  </div>
                );
              }

              const isMe = player.id === playerId;

              return (
                <div
                  key={player.id}
                  className={`flex items-center justify-between rounded-2xl border px-5 py-4 ${
                    isMe
                      ? "border-amber-500/50 bg-amber-500/10"
                      : "border-slate-800 bg-slate-900"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold">
                        {player.name}
                      </p>

                      {isMe && (
                        <span className="text-xs font-bold text-amber-400">
                          Du
                        </span>
                      )}
                    </div>

                    {player.is_host && (
                      <p className="mt-1 text-xs text-slate-400">
                        👑 Host
                      </p>
                    )}
                  </div>

                  {isHost && !isMe && (
                    <button
                      onClick={() =>
                        kickPlayer(player.id)
                      }
                      className="rounded-xl px-3 py-2 text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
                    >
                      ✕
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {isHost ? (
          <div className="mt-8">
            <div>
              <h2 className="font-black">
                Wertung auswählen
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Diese Wertung gilt für alle drei Runden.
              </p>
            </div>

            <div className="mt-4 space-y-2">
              {dealGameModes.map((gameMode) => {
                const selected =
                  selectedMode === gameMode.id;

                return (
                  <button
                    key={gameMode.id}
                    onClick={() =>
                      setSelectedMode(gameMode.id)
                    }
                    className={`w-full rounded-2xl border px-5 py-4 text-left font-bold transition ${
                      selected
                        ? "border-amber-400 bg-amber-500/15 text-amber-300"
                        : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-600"
                    }`}
                  >
                    {gameMode.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-900 p-5">
              <p className="text-sm text-slate-400">
                Spielregeln
              </p>

              <div className="mt-3 space-y-1 text-sm font-semibold text-slate-300">
                <p>🎲 3 zufällige Welten</p>
                <p>💼 Gemeinsame Koffer</p>
                <p>
                  ⏭️{" "}
                  {players.length === 2
                    ? "3 Skips pro Spieler"
                    : players.length === 3
                      ? "2 Skips pro Spieler"
                      : "Skips abhängig von Spielerzahl"}
                </p>
              </div>
            </div>

            {error && (
              <p className="mt-4 text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              onClick={startGame}
              disabled={
                starting ||
                (players.length !== 2 &&
                  players.length !== 3)
              }
              className="mt-6 w-full rounded-2xl bg-amber-500 px-6 py-5 font-black text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {starting
                ? "🎲 Spiel wird vorbereitet..."
                : players.length < 2
                  ? "Warte auf mindestens 2 Spieler..."
                  : "💼 Deal or No Deal starten"}
            </button>
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
            <div className="text-3xl">⏳</div>

            <p className="mt-3 font-bold">
              Warte auf den Host
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Der Host wählt die Wertung und startet das Spiel.
            </p>
          </div>
        )}

        {!isHost && error && (
          <p className="mt-4 text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          onClick={leaveRoom}
          className="mt-8 w-full rounded-2xl border border-slate-800 px-6 py-4 font-semibold text-slate-400 transition hover:border-red-500/40 hover:text-red-400"
        >
          🚪 Raum verlassen
        </button>
      </div>
    </main>
  );
}