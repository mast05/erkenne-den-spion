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

export default function WhoSetupPage() {
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
    if (!selectedCategory || loading) {
      return;
    }

    const roomId =
      sessionStorage.getItem("roomId");

    const playerId =
      sessionStorage.getItem("playerId");

    if (!roomId || !playerId) {
      router.push("/who");
      return;
    }

    setLoading(true);
    setError("");

    try {
      /*
       * Prüfen, ob wirklich der Host
       * diese Seite startet.
       */
      const {
        data: player,
        error: playerError,
      } = await supabase
        .from("players")
        .select("id, is_host")
        .eq("id", playerId)
        .eq("room_id", roomId)
        .maybeSingle();

      if (
        playerError ||
        !player ||
        !player.is_host
      ) {
        console.error(
          "WHO HOST CHECK ERROR:",
          playerError
        );

        setError(
          "Nur der Host kann das Spiel starten."
        );

        return;
      }

      /*
       * Prüfen, ob 2–3 Spieler
       * im Raum sind.
       */
      const {
        count,
        error: countError,
      } = await supabase
        .from("players")
        .select("id", {
          count: "exact",
          head: true,
        })
        .eq("room_id", roomId);

      if (countError) {
        console.error(
          "WHO PLAYER COUNT ERROR:",
          countError
        );

        setError(
          "Die Spieler konnten nicht geprüft werden."
        );

        return;
      }

      if (
        (count ?? 0) < 2 ||
        (count ?? 0) > 3
      ) {
        setError(
          "Wer bin ich benötigt 2 oder 3 Spieler."
        );

        return;
      }

      /*
       * Spiel erstellen.
       */
      const {
        data: game,
        error: gameError,
      } = await supabase
        .from("who_games")
        .insert({
          room_id: roomId,
          category: selectedCategory,
          status: "assigning",
        })
        .select("id")
        .single();

      if (gameError || !game) {
        console.error(
          "WHO GAME CREATE ERROR:",
          gameError
        );

        setError(
          "Das Spiel konnte nicht erstellt werden."
        );

        return;
      }

      sessionStorage.setItem(
        "whoGameId",
        game.id
      );

      /*
       * Zufällige Zuordnung erzeugen:
       * Jeder bekommt genau einen
       * anderen Spieler.
       */
      const {
        error: assignmentError,
      } = await supabase.rpc(
        "ensure_who_assignments",
        {
          p_game_id: game.id,
        }
      );

      if (assignmentError) {
        console.error(
          "WHO ASSIGNMENT ERROR:",
          assignmentError
        );

        setError(
          "Die Spieler konnten nicht zufällig zugeordnet werden."
        );

        return;
      }

      router.push("/who/assign");
    } catch (err) {
      console.error(
        "WHO START ERROR:",
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
            🤔
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Wer bin ich?
          </p>

          <h1 className="mt-2 text-3xl font-black">
            Welt auswählen
          </h1>

          <p className="mt-3 text-slate-400">
            Jeder Spieler wählt anschließend
            heimlich eine Figur aus dieser Welt
            für einen anderen Spieler.
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
                  key={category.id}
                  onClick={() =>
                    setSelectedCategory(
                      category.id
                    )
                  }
                  className={`w-full rounded-2xl border px-5 py-4 text-left font-bold transition ${
                    selected
                      ? "border-cyan-500 bg-cyan-500/20 text-cyan-300"
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
            }
          )}
        </div>

        <button
          onClick={startGame}
          disabled={
            !selectedCategory ||
            loading
          }
          className="mt-8 w-full rounded-2xl bg-cyan-500 px-6 py-5 font-black text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading
            ? "Spiel wird vorbereitet..."
            : "🎭 Figuren verteilen →"}
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