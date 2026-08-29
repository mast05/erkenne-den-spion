"use client";

import { useState } from "react";
import {
  supabase,
  ensureAnonymousAuth,
} from "../lib/supabase";

export default function BidPage() {
  const [mode, setMode] = useState<
    "menu" | "create" | "join"
  >("menu");

  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function generateRoomCode() {
    const chars =
      "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "";

    for (let i = 0; i < 6; i++) {
      code += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    return code;
  }

  function clearBidSession() {
    sessionStorage.removeItem("roomId");
    sessionStorage.removeItem("playerId");
    sessionStorage.removeItem("bidGameId");
  }

  async function createRoom() {
    if (!name.trim()) {
      setError("Bitte gib einen Namen ein.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      clearBidSession();

      await ensureAnonymousAuth();

      const code = generateRoomCode();

      const { data: room, error: roomError } =
        await supabase
          .from("rooms")
          .insert({
            room_code: code,
            game: "bid",
          })
          .select("id")
          .single();

      if (roomError || !room) {
        console.error(roomError);
        setError(
          "Der Raum konnte nicht erstellt werden."
        );
        setLoading(false);
        return;
      }

      const { data: player, error: playerError } =
        await supabase
          .from("players")
          .insert({
            room_id: room.id,
            name: name.trim(),
            is_host: true,
          })
          .select("id")
          .single();

      if (playerError || !player) {
        console.error(playerError);
        setError(
          "Der Spieler konnte nicht erstellt werden."
        );
        setLoading(false);
        return;
      }

      sessionStorage.setItem("roomId", room.id);
      sessionStorage.setItem("playerId", player.id);

      window.location.href = "/bid/lobby";
    } catch (err) {
      console.error(err);
      setError("Etwas ist schiefgelaufen.");
      setLoading(false);
    }
  }

  async function joinRoom() {
    if (!name.trim()) {
      setError("Bitte gib einen Namen ein.");
      return;
    }

    const code = roomCode.trim().toUpperCase();

    if (code.length !== 6) {
      setError(
        "Bitte gib einen gültigen Raumcode ein."
      );
      return;
    }

    setLoading(true);
    setError("");

    try {
      clearBidSession();

      await ensureAnonymousAuth();

      const { data: room, error: roomError } =
        await supabase
          .from("rooms")
          .select("id")
          .eq("room_code", code)
          .eq("game", "bid")
          .maybeSingle();

      if (roomError) {
        console.error(roomError);
        setError(
          "Der Raum konnte nicht geladen werden."
        );
        setLoading(false);
        return;
      }

      if (!room) {
        setError("Dieser Raum wurde nicht gefunden.");
        setLoading(false);
        return;
      }

      const { count, error: countError } =
        await supabase
          .from("players")
          .select("id", {
            count: "exact",
            head: true,
          })
          .eq("room_id", room.id);

      if (countError) {
        console.error(countError);
        setError(
          "Der Raum konnte nicht geprüft werden."
        );
        setLoading(false);
        return;
      }

      if ((count ?? 0) >= 3) {
        setError("Dieser Raum ist bereits voll.");
        setLoading(false);
        return;
      }

      const { data: player, error: playerError } =
        await supabase
          .from("players")
          .insert({
            room_id: room.id,
            name: name.trim(),
            is_host: false,
          })
          .select("id")
          .single();

      if (playerError || !player) {
        console.error(playerError);
        setError(
          "Du konntest dem Raum nicht beitreten."
        );
        setLoading(false);
        return;
      }

      sessionStorage.setItem("roomId", room.id);
      sessionStorage.setItem(
        "playerId",
        player.id
      );

      window.location.href = "/bid/lobby";
    } catch (err) {
      console.error(err);
      setError("Etwas ist schiefgelaufen.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
        {mode === "menu" && (
          <>
            <button
              onClick={() => {
                window.location.href = "/";
              }}
              className="mb-8 w-fit text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              ← Alle Spiele
            </button>

            <div className="text-center">
              <div className="text-7xl">💰</div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
                Character Auction
              </p>

              <h1 className="mt-3 text-4xl font-black">
                Bieterkrieg
              </h1>

              <p className="mt-4 text-slate-400">
                Biete gegen deine Gegner, verwalte dein
                Budget und stelle dein bestes Team
                zusammen.
              </p>

              <div className="mt-6 flex justify-center gap-3 text-sm">
                <span className="rounded-full bg-slate-900 px-4 py-2 text-slate-300">
                  👥 2–3 Spieler
                </span>

                <span className="rounded-full bg-slate-900 px-4 py-2 text-slate-300">
                  👤 5 Charaktere
                </span>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <button
                onClick={() => {
                  setError("");
                  setMode("create");
                }}
                className="w-full rounded-3xl border border-violet-500/30 bg-violet-500/10 p-6 text-left transition hover:border-violet-400 hover:bg-violet-500/15"
              >
                <div className="text-3xl">✨</div>

                <h2 className="mt-3 text-xl font-black">
                  Raum erstellen
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Starte einen neuen Bieterkrieg.
                </p>
              </button>

              <button
                onClick={() => {
                  setError("");
                  setMode("join");
                }}
                className="w-full rounded-3xl border border-slate-700 bg-slate-900 p-6 text-left transition hover:border-slate-500"
              >
                <div className="text-3xl">🚪</div>

                <h2 className="mt-3 text-xl font-black">
                  Raum beitreten
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Mit Raumcode einem Spiel beitreten.
                </p>
              </button>
            </div>
          </>
        )}

        {mode === "create" && (
          <>
            <button
              onClick={() => {
                setError("");
                setMode("menu");
              }}
              className="mb-8 w-fit text-sm font-semibold text-slate-400 hover:text-white"
            >
              ← Zurück
            </button>

            <div>
              <div className="text-5xl">💰</div>

              <h1 className="mt-5 text-3xl font-black">
                Raum erstellen
              </h1>

              <p className="mt-2 text-slate-400">
                Du wirst automatisch der Host.
              </p>
            </div>

            <input
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" &&
                  !loading
                ) {
                  createRoom();
                }
              }}
              placeholder="Dein Name"
              maxLength={20}
              className="mt-8 w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none transition focus:border-violet-400"
            />

            {error && (
              <p className="mt-4 text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              onClick={createRoom}
              disabled={loading}
              className="mt-6 w-full rounded-2xl bg-violet-500 px-6 py-5 font-black text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Raum wird erstellt..."
                : "💰 Raum erstellen"}
            </button>
          </>
        )}

        {mode === "join" && (
          <>
            <button
              onClick={() => {
                setError("");
                setMode("menu");
              }}
              className="mb-8 w-fit text-sm font-semibold text-slate-400 hover:text-white"
            >
              ← Zurück
            </button>

            <div>
              <div className="text-5xl">🚪</div>

              <h1 className="mt-5 text-3xl font-black">
                Raum beitreten
              </h1>
            </div>

            <input
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Dein Name"
              maxLength={20}
              className="mt-8 w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none transition focus:border-violet-400"
            />

            <input
              value={roomCode}
              onChange={(event) =>
                setRoomCode(
                  event.target.value.toUpperCase()
                )
              }
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" &&
                  !loading
                ) {
                  joinRoom();
                }
              }}
              placeholder="RAUMCODE"
              maxLength={6}
              className="mt-3 w-full rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 text-center text-xl font-black uppercase tracking-[0.25em] outline-none transition focus:border-violet-400"
            />

            {error && (
              <p className="mt-4 text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              onClick={joinRoom}
              disabled={loading}
              className="mt-6 w-full rounded-2xl bg-violet-500 px-6 py-5 font-black text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Beitritt..."
                : "🚪 Beitreten"}
            </button>
          </>
        )}
      </div>
    </main>
  );
}