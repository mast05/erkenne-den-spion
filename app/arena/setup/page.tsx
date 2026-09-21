"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

const categories = [
  {
    id: "star-wars",
    name: "⭐ Star Wars",
  },
  {
    id: "marvel",
    name: "🦸 Marvel",
  },
  {
    id: "harry-potter",
    name: "🪄 Harry Potter",
  },
  {
    id: "dc",
    name: "🦇 DC",
  },
  {
    id: "fluch-der-karibik",
    name: "🏴‍☠️ Fluch der Karibik",
  },
  {
    id: "game-of-thrones",
    name: "⚔️ Game of Thrones",
  },
  {
    id: "herr-der-ringe",
    name: "💍 Herr der Ringe",
  },
  {
    id: "hobbit",
    name: "🏔️ Der Hobbit",
  },
  {
    id: "the-boys",
    name: "🩸 The Boys",
  },
  {
    id: "the-walking-dead",
    name: "🧟 The Walking Dead",
  },
  {
    id: "jurassic",
    name: "🦖 Jurassic Park / World",
  },
];

export default function ArenaSetupPage() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function startDraft() {
    if (!selectedCategory || loading) {
      return;
    }

    const roomId =
      sessionStorage.getItem("roomId");

    if (!roomId) {
      setError("Raum wurde nicht gefunden.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const {
        data: game,
        error: gameError,
      } = await supabase
        .from("arena_games")
        .insert({
          room_id: roomId,
          category: selectedCategory,
          status: "draft",
          current_pick: 0,
        })
        .select("id")
        .single();

      if (gameError || !game) {
        console.error(
          "ARENA GAME CREATE ERROR:",
          gameError
        );

        setError(
          "Das Arena-Spiel konnte nicht erstellt werden."
        );

        return;
      }

      sessionStorage.setItem(
        "arenaGameId",
        game.id
      );

      router.push("/arena/draft");
    } catch (err) {
      console.error(
        "ARENA START ERROR:",
        err
      );

      setError(
        "Beim Starten ist ein Fehler aufgetreten."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-md px-6 py-10">
        <div className="text-center">
          <div className="text-7xl">
            ⚔️
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
            Character Arena
          </p>

          <h1 className="mt-2 text-3xl font-black">
            Welt auswählen
          </h1>

          <p className="mt-3 text-slate-400">
            Aus dieser Welt werden die Charaktere
            für den Draft gezogen.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {categories.map((category) => {
            const selected =
              selectedCategory ===
              category.id;

            return (
              <button
                key={category.id}
                onClick={() =>
                  setSelectedCategory(
                    category.id
                  )
                }
                className={`w-full rounded-2xl border px-5 py-4 text-left font-bold transition ${
                  selected
                    ? "border-orange-500 bg-orange-500/20 text-orange-300"
                    : "border-slate-800 bg-slate-900 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span>
                    {category.name}
                  </span>

                  <span className="text-xl">
                    {selected
                      ? "✅"
                      : "›"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <button
          onClick={startDraft}
          disabled={
            !selectedCategory ||
            loading
          }
          className="mt-8 w-full rounded-2xl bg-orange-500 px-6 py-5 font-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading
            ? "Draft wird vorbereitet..."
            : "Weiter zum Draft →"}
        </button>

        {error && (
          <p className="mt-4 text-center text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}