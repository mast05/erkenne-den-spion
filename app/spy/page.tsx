"use client";

import { useState } from "react";
import {
  supabase,
  ensureAnonymousAuth,
} from "../lib/supabase";

type Mode = "menu" | "create" | "join";

export default function SpyPage() {
  const [mode, setMode] = useState<Mode>("menu");
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function generateRoomCode() {
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";

    for (let i = 0; i < 6; i++) {
      code += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return code;
  }

  function clearGameSession() {
    sessionStorage.removeItem("playerId");
    sessionStorage.removeItem("roomId");
    sessionStorage.removeItem("roundId");
  }

  async function createRoom() {
    if (!name.trim()) {
      setError("Bitte gib deinen Namen ein.");
      return;
    }

    if (loading) return;

    setLoading(true);
    setError("");

    try {
      clearGameSession();

      await ensureAnonymousAuth();

      const code = generateRoomCode();

      const { data: room, error: roomError } = await supabase
        .from("rooms")
        .insert({
          room_code: code,
          game: "spy",
        })
        .select("id, room_code")
        .single();

      if (roomError || !room) {
        console.error("ROOM CREATE ERROR:", roomError);
        setError("Der Raum konnte nicht erstellt werden.");
        setLoading(false);
        return;
      }

      const { data: player, error: playerError } = await supabase
        .from("players")
        .insert({
          room_id: room.id,
          name: name.trim(),
          is_host: true,
        })
        .select("id")
        .single();

      if (playerError || !player) {
        console.error("PLAYER CREATE ERROR:", playerError);

        setError(
          "Du konntest nicht als Spieler hinzugefügt werden."
        );

        setLoading(false);
        return;
      }

      sessionStorage.setItem("playerId", player.id);
      sessionStorage.setItem("roomId", room.id);

      window.location.href = "/lobby";
    } catch (err) {
      console.error("CREATE ROOM ERROR:", err);

      setError(
        "Beim Erstellen des Raums ist ein Fehler aufgetreten."
      );

      setLoading(false);
    }
  }

  async function joinRoom() {
    if (!name.trim()) {
      setError("Bitte gib deinen Namen ein.");
      return;
    }

    if (roomCode.trim().length !== 6) {
      setError("Der Raumcode muss 6 Zeichen haben.");
      return;
    }

    if (loading) return;

    setLoading(true);
    setError("");

    try {
      clearGameSession();
      
      await ensureAnonymousAuth();

      const code = roomCode.trim().toUpperCase();

      const { data: room, error: roomError } = await supabase
        .from("rooms")
        .select("id, room_code")
        .eq("room_code", code)
        .eq("game", "spy")
        .single();

      if (roomError || !room) {
        console.error("ROOM JOIN ERROR:", roomError);

        setError("Dieser Raum wurde nicht gefunden.");
        setLoading(false);
        return;
      }

      const { data: players, error: playersError } = await supabase
        .from("players")
        .select("id")
        .eq("room_id", room.id);

      if (playersError) {
        console.error("PLAYERS LOAD ERROR:", playersError);

        setError("Die Spieler konnten nicht geladen werden.");
        setLoading(false);
        return;
      }

      if ((players?.length ?? 0) >= 3) {
        setError("Dieser Raum ist bereits voll.");
        setLoading(false);
        return;
      }

      const { data: player, error: playerError } = await supabase
        .from("players")
        .insert({
          room_id: room.id,
          name: name.trim(),
          is_host: false,
        })
        .select("id")
        .single();

      if (playerError || !player) {
        console.error("PLAYER JOIN ERROR:", playerError);

        setError("Du konntest dem Raum nicht beitreten.");
        setLoading(false);
        return;
      }

      sessionStorage.setItem("playerId", player.id);
      sessionStorage.setItem("roomId", room.id);

      window.location.href = "/lobby";
    } catch (err) {
      console.error("JOIN ROOM ERROR:", err);

      setError(
        "Beim Beitreten zum Raum ist ein Fehler aufgetreten."
      );

      setLoading(false);
    }
  }

  function goBack() {
    if (loading) return;

    setMode("menu");
    setError("");
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
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 text-6xl shadow-2xl">
                🕵️
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.35em] text-emerald-400">
                Social Deduction
              </p>

              <h1 className="mt-3 text-4xl font-black">
                Erkenne den Spion
              </h1>

              <p className="mx-auto mt-4 max-w-xs text-slate-400">
                Drei Spieler. Eine geheime Figur.
                Einer von euch ist der Spion.
              </p>
            </div>

            <div className="mt-7 flex justify-center gap-2">
              <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-bold text-slate-400">
                👥 3 Spieler
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-bold text-slate-400">
                🎭 6 Kategorien
              </span>
            </div>

            <div className="mt-10 space-y-4">
              <button
                onClick={() => {
                  setMode("create");
                  setError("");
                }}
                className="group w-full rounded-3xl border border-slate-700 bg-white p-5 text-left text-slate-950 transition hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-black">
                      Raum erstellen
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Starte eine neue Runde als Host
                    </p>
                  </div>

                  <div className="text-3xl">
                    🎮
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  setMode("join");
                  setError("");
                }}
                className="group w-full rounded-3xl border border-slate-700 bg-slate-900 p-5 text-left transition hover:border-slate-500 hover:bg-slate-800"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-black">
                      Raum beitreten
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Du hast bereits einen Raumcode
                    </p>
                  </div>

                  <div className="text-3xl">
                    🔑
                  </div>
                </div>
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-slate-600">
                Star Wars · Marvel · Harry Potter · DC ·
                Fluch der Karibik · Game of Thrones
              </p>
            </div>
          </>
        )}

        {mode === "create" && (
          <>
            <button
              onClick={goBack}
              disabled={loading}
              className="mb-8 w-fit text-sm font-semibold text-slate-400 transition hover:text-white disabled:opacity-40"
            >
              ← Zurück
            </button>

            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 text-5xl">
                🎮
              </div>

              <h1 className="mt-6 text-3xl font-black">
                Raum erstellen
              </h1>

              <p className="mt-3 text-slate-400">
                Du wirst Host und erhältst einen
                6-stelligen Raumcode.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Dein Name
              </label>

              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);

                  if (error) {
                    setError("");
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    createRoom();
                  }
                }}
                placeholder="z. B. Max"
                maxLength={20}
                autoFocus
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition placeholder:text-slate-600 focus:border-slate-400"
              />

              {error && (
                <div className="mt-4 rounded-xl border border-red-900 bg-red-950/30 px-4 py-3 text-sm text-red-300">
                  {error}
                </div>
              )}

              <button
                onClick={createRoom}
                disabled={loading}
                className="mt-5 w-full rounded-2xl bg-emerald-500 px-6 py-5 font-black text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {loading
                  ? "Raum wird erstellt..."
                  : "🎮 Raum erstellen"}
              </button>
            </div>

            <p className="mt-5 text-center text-xs text-slate-600">
              Nach dem Erstellen kannst du den Raumcode
              an deine Mitspieler schicken.
            </p>
          </>
        )}

        {mode === "join" && (
          <>
            <button
              onClick={goBack}
              disabled={loading}
              className="mb-8 w-fit text-sm font-semibold text-slate-400 transition hover:text-white disabled:opacity-40"
            >
              ← Zurück
            </button>

            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 text-5xl">
                🔑
              </div>

              <h1 className="mt-6 text-3xl font-black">
                Raum beitreten
              </h1>

              <p className="mt-3 text-slate-400">
                Gib deinen Namen und den Raumcode
                des Hosts ein.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Dein Name
                </label>

                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);

                    if (error) {
                      setError("");
                    }
                  }}
                  placeholder="z. B. Max"
                  maxLength={20}
                  autoFocus
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none transition placeholder:text-slate-600 focus:border-slate-400"
                />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Raumcode
                </label>

                <input
                  value={roomCode}
                  onChange={(e) => {
                    setRoomCode(
                      e.target.value
                        .toUpperCase()
                        .replace(/[^A-Z0-9]/g, "")
                    );

                    if (error) {
                      setError("");
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      joinRoom();
                    }
                  }}
                  placeholder="ABC123"
                  maxLength={6}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-center text-2xl font-black tracking-[0.25em] uppercase outline-none transition placeholder:text-slate-700 focus:border-slate-400"
                />
              </div>

              {error && (
                <div className="mt-4 rounded-xl border border-red-900 bg-red-950/30 px-4 py-3 text-sm text-red-300">
                  {error}
                </div>
              )}

              <button
                onClick={joinRoom}
                disabled={loading}
                className="mt-5 w-full rounded-2xl bg-emerald-500 px-6 py-5 font-black text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {loading
                  ? "Raum wird betreten..."
                  : "🔑 Raum beitreten"}
              </button>
            </div>

            <p className="mt-5 text-center text-xs text-slate-600">
              Der Raumcode besteht aus 6 Zeichen.
            </p>
          </>
        )}
      </div>
    </main>
  );
}