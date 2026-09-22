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

export default function SilhouetteSetupPage() {
  const router = useRouter();

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function startGame() {
    if (
      !selectedCategory ||
      loading
    ) {
      return;
    }

    const roomId =
      sessionStorage.getItem(
        "roomId"
      );

    if (!roomId) {
      router.push(
        "/silhouette"
      );

      return;
    }

    setLoading(true);
    setError("");

    try {
      const {
        data: gameId,
        error: gameError,
      } = await supabase.rpc(
        "create_silhouette_game",
        {
          p_room_id:
            roomId,
          p_category:
            selectedCategory,
        }
      );

      if (
        gameError ||
        !gameId
      ) {
        console.error(
          "SILHOUETTE GAME CREATE ERROR:",
          gameError
        );

        setError(
          gameError?.message ??
            "Das Spiel konnte nicht erstellt werden."
        );

        return;
      }

      sessionStorage.setItem(
        "silhouetteGameId",
        gameId
      );

      router.push(
        "/silhouette/game"
      );
    } catch (err) {
      console.error(
        "SILHOUETTE START ERROR:",
        err
      );

      setError(
        "Beim Starten des Spiels ist ein Fehler aufgetreten."
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
            👤
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            Silhouette
          </p>

          <h1 className="mt-2 text-3xl font-black">
            Welt auswählen
          </h1>

          <p className="mt-3 text-slate-400">
            Aus dieser Welt werden
            zufällig 10 Charaktere für
            das Spiel ausgewählt.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {categories.map(
            (category) => {
              const selected =
                selectedCategory ===
                category.id;

              return (
                <button
                  key={
                    category.id
                  }
                  onClick={() =>
                    setSelectedCategory(
                      category.id
                    )
                  }
                  disabled={
                    loading
                  }
                  className={`w-full rounded-2xl border px-5 py-4 text-left font-bold transition ${
                    selected
                      ? "border-violet-500 bg-violet-500/20 text-violet-300"
                      : "border-slate-800 bg-slate-900 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span>
                      {
                        category.name
                      }
                    </span>

                    <span className="text-xl">
                      {selected
                        ? "✅"
                        : "›"}
                    </span>
                  </div>
                </button>
              );
            }
          )}
        </div>

        <div className="mt-8 rounded-3xl border border-violet-500/20 bg-violet-500/5 p-5">
          <p className="font-black">
            👀 So funktioniert&apos;s
          </p>

          <div className="mt-3 space-y-2 text-sm text-slate-400">
            <p>
              👤 Stufe 1 – schwer –
              5 Punkte
            </p>

            <p>
              🔍 Stufe 2 – mittel –
              3 Punkte
            </p>

            <p>
              👀 Stufe 3 – leicht –
              1 Punkt
            </p>

            <p className="pt-2 text-slate-500">
              Insgesamt werden 10
              Charaktere gespielt.
            </p>
          </div>
        </div>

        <button
          onClick={
            startGame
          }
          disabled={
            !selectedCategory ||
            loading
          }
          className="mt-8 w-full rounded-2xl bg-violet-500 px-6 py-5 font-black text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading
            ? "Spiel wird vorbereitet..."
            : "👤 Silhouette starten →"}
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