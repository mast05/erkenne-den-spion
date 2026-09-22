"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";

function createRoomCode() {
  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  return Array.from({ length: 6 }, () =>
    chars.charAt(
      Math.floor(Math.random() * chars.length)
    )
  ).join("");
}

async function ensureAnonymousSession() {
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) {
    throw sessionError;
  }

  if (session?.user) {
    return session.user.id;
  }

  const {
    data,
    error: signInError,
  } = await supabase.auth.signInAnonymously();

  if (signInError || !data.user) {
    throw (
      signInError ??
      new Error("Anmeldung fehlgeschlagen.")
    );
  }

  return data.user.id;
}

export default function WhoPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [roomCode, setRoomCode] =
    useState("");
  const [loading, setLoading] =
    useState(false);
  const [error, setError] = useState("");

  async function createRoom() {
    const cleanName = name.trim();

    if (!cleanName || loading) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const authUserId =
        await ensureAnonymousSession();

      const code = createRoomCode();

      const {
        data: room,
        error: roomError,
      } = await supabase
        .from("rooms")
        .insert({
          room_code: code,
          game: "who",
        })
        .select("id")
        .single();

      if (roomError || !room) {
        console.error(
          "WHO ROOM CREATE ERROR:",
          roomError
        );

        setError(
          "Der Raum konnte nicht erstellt werden."
        );

        return;
      }

      const {
        data: player,
        error: playerError,
      } = await supabase
        .from("players")
        .insert({
          room_id: room.id,
          name: cleanName,
          is_host: true,
          auth_user_id: authUserId,
        })
        .select("id")
        .single();

      if (playerError || !player) {
        console.error(
          "WHO PLAYER CREATE ERROR:",
          playerError
        );

        setError(
          "Der Spieler konnte nicht erstellt werden."
        );

        return;
      }

      sessionStorage.setItem(
        "roomId",
        room.id
      );

      sessionStorage.setItem(
        "playerId",
        player.id
      );

      sessionStorage.removeItem(
        "whoGameId"
      );

      router.push("/who/lobby");
    } catch (err) {
      console.error(
        "WHO CREATE ERROR:",
        err
      );

      setError(
        "Beim Erstellen des Raums ist ein Fehler aufgetreten."
      );
    } finally {
      setLoading(false);
    }
  }

  async function joinRoom() {
    const cleanName = name.trim();

    const cleanCode = roomCode
      .trim()
      .toUpperCase();

    if (
      !cleanName ||
      !cleanCode ||
      loading
    ) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const authUserId =
        await ensureAnonymousSession();

      const {
        data: room,
        error: roomError,
      } = await supabase
        .from("rooms")
        .select("id")
        .eq("room_code", cleanCode)
        .eq("game", "who")
        .maybeSingle();

      if (roomError) {
        console.error(
          "WHO ROOM LOAD ERROR:",
          roomError
        );

        setError(
          "Der Raum konnte nicht geladen werden."
        );

        return;
      }

      if (!room) {
        setError("Raum nicht gefunden.");
        return;
      }

      const {
        count,
        error: countError,
      } = await supabase
        .from("players")
        .select("id", {
          count: "exact",
          head: true,
        })
        .eq("room_id", room.id);

      if (countError) {
        console.error(
          "WHO PLAYER COUNT ERROR:",
          countError
        );

        setError(
          "Der Raum konnte nicht geprüft werden."
        );

        return;
      }

      if ((count ?? 0) >= 3) {
        setError(
          "Der Raum ist bereits voll."
        );

        return;
      }

      const {
        data: player,
        error: playerError,
      } = await supabase
        .from("players")
        .insert({
          room_id: room.id,
          name: cleanName,
          is_host: false,
          auth_user_id: authUserId,
        })
        .select("id")
        .single();

      if (playerError || !player) {
        console.error(
          "WHO JOIN ERROR:",
          playerError
        );

        setError(
          "Du konntest dem Raum nicht beitreten."
        );

        return;
      }

      sessionStorage.setItem(
        "roomId",
        room.id
      );

      sessionStorage.setItem(
        "playerId",
        player.id
      );

      sessionStorage.removeItem(
        "whoGameId"
      );

      router.push("/who/lobby");
    } catch (err) {
      console.error(
        "WHO JOIN ERROR:",
        err
      );

      setError(
        "Beim Beitreten ist ein Fehler aufgetreten."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
        <div className="text-center">
          <div className="text-7xl">
            🤔
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Ratespiel
          </p>

          <h1 className="mt-2 text-4xl font-black">
            Wer bin ich?
          </h1>

          <p className="mt-3 text-slate-400">
            Gib einem anderen Spieler
            heimlich eine Figur und finde
            heraus, wer du selbst bist.
          </p>
        </div>

        <div className="mt-10">
          <label className="text-sm font-bold text-slate-300">
            Dein Name
          </label>

          <input
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            maxLength={20}
            placeholder="Name eingeben..."
            className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 outline-none transition focus:border-cyan-500"
          />
        </div>

        <button
          onClick={createRoom}
          disabled={
            !name.trim() || loading
          }
          className="mt-5 w-full rounded-2xl bg-cyan-500 px-6 py-5 font-black text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading
            ? "Wird geladen..."
            : "🤔 Raum erstellen"}
        </button>

        <div className="my-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-800" />

          <span className="text-sm font-bold text-slate-600">
            ODER
          </span>

          <div className="h-px flex-1 bg-slate-800" />
        </div>

        <label className="text-sm font-bold text-slate-300">
          Raumcode
        </label>

        <input
          value={roomCode}
          onChange={(event) =>
            setRoomCode(
              event.target.value.toUpperCase()
            )
          }
          maxLength={6}
          placeholder="ABC123"
          className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-center text-2xl font-black uppercase tracking-[0.2em] outline-none transition focus:border-cyan-500"
        />

        <button
          onClick={joinRoom}
          disabled={
            !name.trim() ||
            roomCode.trim().length !== 6 ||
            loading
          }
          className="mt-4 w-full rounded-2xl border border-cyan-500/50 bg-cyan-500/10 px-6 py-5 font-black text-cyan-300 transition hover:bg-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-40"
        >
          🚪 Raum beitreten
        </button>

        {error && (
          <p className="mt-5 text-center text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}