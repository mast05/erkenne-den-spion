"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

type Player = {
  id: string;
  name: string;
  is_host: boolean;
};

type WhoGame = {
  id: string;
  status: string;
};

export default function WhoLobbyPage() {
  const router = useRouter();

  const [roomCode, setRoomCode] =
    useState("");

  const [players, setPlayers] =
    useState<Player[]>([]);

  const [playerId, setPlayerId] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const roomId =
      sessionStorage.getItem(
        "roomId"
      );

    const currentPlayerId =
      sessionStorage.getItem(
        "playerId"
      );

    if (
      !roomId ||
      !currentPlayerId
    ) {
      router.push("/who");
      return;
    }

    setPlayerId(
      currentPlayerId
    );

    let mounted = true;

    async function loadLobby() {
      const {
        data: room,
        error: roomError,
      } = await supabase
        .from("rooms")
        .select("room_code")
        .eq("id", roomId)
        .eq("game", "who")
        .maybeSingle();

      if (!mounted) {
        return;
      }

      if (
        roomError ||
        !room
      ) {
        console.error(
          "WHO ROOM LOAD ERROR:",
          roomError
        );

        setError(
          "Der Raum konnte nicht geladen werden."
        );

        setLoading(false);
        return;
      }

      const {
        data: playerData,
        error: playersError,
      } = await supabase
        .from("players")
        .select(
          "id, name, is_host"
        )
        .eq(
          "room_id",
          roomId
        )
        .order(
          "created_at",
          {
            ascending: true,
          }
        );

      if (!mounted) {
        return;
      }

      if (playersError) {
        console.error(
          "WHO PLAYERS LOAD ERROR:",
          playersError
        );

        setError(
          "Die Spieler konnten nicht geladen werden."
        );

        setLoading(false);
        return;
      }

      /*
       * Prüfen, ob der Host das
       * Spiel bereits vorbereitet hat.
       */
      const {
        data: whoGame,
        error: whoGameError,
      } = await supabase
        .from("who_games")
        .select("id, status")
        .eq(
          "room_id",
          roomId
        )
        .in(
          "status",
          [
            "assigning",
            "playing",
          ]
        )
        .order(
          "created_at",
          {
            ascending: false,
          }
        )
        .limit(1)
        .maybeSingle();

      if (!mounted) {
        return;
      }

      if (whoGameError) {
        console.error(
          "WHO GAME CHECK ERROR:",
          whoGameError
        );
      }

      if (whoGame) {
        const game =
          whoGame as WhoGame;

        sessionStorage.setItem(
          "whoGameId",
          game.id
        );

        if (
          game.status ===
          "assigning"
        ) {
          router.push(
            "/who/assign"
          );

          return;
        }

        if (
          game.status ===
          "playing"
        ) {
          router.push(
            "/who/game"
          );

          return;
        }
      }

      setRoomCode(
        room.room_code ?? ""
      );

      setPlayers(
        (playerData ??
          []) as Player[]
      );

      setError("");
      setLoading(false);
    }

    void loadLobby();

    const interval =
      window.setInterval(
        () => {
          void loadLobby();
        },
        1000
      );

    return () => {
      mounted = false;

      window.clearInterval(
        interval
      );
    };
  }, [router]);

  const currentPlayer =
    players.find(
      (player) =>
        player.id ===
        playerId
    );

  const isHost =
    currentPlayer?.is_host ===
    true;

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
        <div className="text-center">
          <div className="text-6xl">
            🤔
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Wer bin ich?
          </p>

          <h1 className="mt-2 text-3xl font-black">
            Lobby
          </h1>

          <p className="mt-3 text-slate-400">
            2–3 Spieler können
            mitspielen.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-300">
            Raumcode
          </p>

          <p className="mt-3 text-4xl font-black tracking-[0.2em]">
            {roomCode}
          </p>

          <p className="mt-3 text-sm text-slate-400">
            Teile diesen Code mit
            deinen Mitspielern.
          </p>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <div className="flex items-center justify-between">
            <p className="font-black">
              Spieler
            </p>

            <span className="text-sm font-bold text-slate-400">
              {players.length}/3
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {players.map(
              (player) => (
                <div
                  key={
                    player.id
                  }
                  className="flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-4"
                >
                  <div>
                    <p className="font-bold">
                      {
                        player.name
                      }

                      {player.id ===
                      playerId
                        ? " (Du)"
                        : ""}
                    </p>

                    {player.is_host && (
                      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-cyan-400">
                        Host
                      </p>
                    )}
                  </div>

                  <div className="text-2xl">
                    {player.is_host
                      ? "👑"
                      : "🤔"}
                  </div>
                </div>
              )
            )}

            {players.length <
              3 && (
              <div className="rounded-2xl border border-dashed border-slate-700 px-4 py-4 text-center text-sm text-slate-500">
                Warte auf weitere
                Spieler...
              </div>
            )}
          </div>
        </div>

        {isHost ? (
          <button
            onClick={() =>
              router.push(
                "/who/setup"
              )
            }
            disabled={
              players.length < 2
            }
            className="mt-6 w-full rounded-2xl bg-cyan-500 px-6 py-5 font-black text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            🎭 Spiel vorbereiten
          </button>
        ) : (
          <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-center text-sm text-slate-400">
            Der Host bereitet das
            Spiel vor.
          </div>
        )}

        {players.length ===
          1 && (
          <p className="mt-3 text-center text-sm text-slate-500">
            Mindestens 2 Spieler
            werden benötigt.
          </p>
        )}

        {error && (
          <p className="mt-5 text-center text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}