"use client";

import {
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

type Category = {
  id: string;
  name: string;
};

const categories: Category[] = [
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

export default function QuizSetupPage() {
  const router = useRouter();

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("");

  const [
    questionCounts,
    setQuestionCounts,
  ] = useState<Record<string, number>>(
    {}
  );

  const [loading, setLoading] =
    useState(true);

  const [starting, setStarting] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadQuestions() {
      const roomId =
        sessionStorage.getItem(
          "roomId"
        );

      const playerId =
        sessionStorage.getItem(
          "playerId"
        );

      if (
        !roomId ||
        !playerId
      ) {
        router.push("/quiz");
        return;
      }

      const {
        data: player,
        error: playerError,
      } = await supabase
        .from("players")
        .select("is_host")
        .eq("id", playerId)
        .eq("room_id", roomId)
        .maybeSingle();

      if (
        playerError ||
        !player
      ) {
        console.error(
          "QUIZ HOST CHECK ERROR:",
          playerError
        );

        setError(
          "Spieler konnte nicht geprüft werden."
        );

        setLoading(false);
        return;
      }

      if (!player.is_host) {
        router.push(
          "/quiz/lobby"
        );

        return;
      }

      const {
        data,
        error: questionsError,
      } = await supabase
        .from("quiz_questions")
        .select("category")
        .eq("is_active", true);

      if (questionsError) {
        console.error(
          "QUIZ QUESTIONS LOAD ERROR:",
          questionsError
        );

        setError(
          "Die Quizfragen konnten nicht geladen werden."
        );

        setLoading(false);
        return;
      }

      const counts: Record<
        string,
        number
      > = {};

      for (const question of
        data ?? []) {
        counts[
          question.category
        ] =
          (counts[
            question.category
          ] ?? 0) + 1;
      }

      setQuestionCounts(
        counts
      );

      setLoading(false);
    }

    void loadQuestions();
  }, [router]);

  async function startGame() {
    if (
      !selectedCategory ||
      starting
    ) {
      return;
    }

    const roomId =
      sessionStorage.getItem(
        "roomId"
      );

    if (!roomId) {
      router.push("/quiz");
      return;
    }

    setStarting(true);
    setError("");

    try {
      const {
        data: gameId,
        error: gameError,
      } = await supabase.rpc(
        "create_quiz_game",
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
          "QUIZ GAME CREATE ERROR:",
          gameError
        );

        setError(
          gameError?.message ??
            "Das Quiz konnte nicht gestartet werden."
        );

        return;
      }

      sessionStorage.setItem(
        "quizGameId",
        gameId
      );

      const {
        error: roundError,
      } = await supabase.rpc(
        "ensure_quiz_round",
        {
          p_game_id:
            gameId,
        }
      );

      if (roundError) {
        console.error(
          "QUIZ FIRST ROUND ERROR:",
          roundError
        );

        setError(
          roundError.message
        );

        return;
      }

      router.push(
        "/quiz/game"
      );
    } catch (err) {
      console.error(
        "QUIZ START ERROR:",
        err
      );

      setError(
        "Beim Starten des Quiz ist ein Fehler aufgetreten."
      );
    } finally {
      setStarting(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-slate-400">
          Welten werden geladen...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-md px-6 py-10">

        <div className="text-center">
          <div className="text-7xl">
            🎓
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
            Fandom Quiz
          </p>

          <h1 className="mt-2 text-3xl font-black">
            Welt auswählen
          </h1>

          <p className="mt-3 text-slate-400">
  5 Runden – jeder
  Fragetyp kommt genau einmal.
</p>
        </div>

        <div className="mt-8 space-y-3">
          {categories.map(
            (category) => {
              const count =
                questionCounts[
                  category.id
                ] ?? 0;

              const available =
                count > 0;

              const selected =
                selectedCategory ===
                category.id;

              return (
                <button
                  key={
                    category.id
                  }
                  onClick={() => {
                    if (
                      available &&
                      !starting
                    ) {
                      setSelectedCategory(
                        category.id
                      );
                    }
                  }}
                  disabled={
                    !available ||
                    starting
                  }
                  className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
                    selected
                      ? "border-emerald-500 bg-emerald-500/20"
                      : available
                        ? "border-slate-800 bg-slate-900 hover:border-slate-700"
                        : "cursor-not-allowed border-slate-900 bg-slate-900/40 opacity-40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">

                    <div>
                      <p className="font-bold">
                        {
                          category.name
                        }
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {available
                          ? `${count} ${
                              count === 1
                                ? "Frage"
                                : "Fragen"
                            }`
                          : "Noch keine Fragen"}
                      </p>
                    </div>

                    <span className="text-xl">
                      {selected
                        ? "✅"
                        : available
                          ? "›"
                          : "🔒"}
                    </span>
                  </div>
                </button>
              );
            }
          )}
        </div>

        <div className="mt-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <p className="font-black">
            🎮 Rundentypen
          </p>

          <div className="mt-3 space-y-2 text-sm text-slate-400">
            <p>
              😀 Emoji-Rätsel
            </p>

            <p>
              ⚡ Schnellfeuer
            </p>

            <p>
              ✅ Wahr oder Falsch
            </p>

            <p>
              🕰️ Timeline
            </p>

            <p>
              🎬 Was kommt als Nächstes?
            </p>
          </div>
        </div>

        <button
          onClick={startGame}
          disabled={
            !selectedCategory ||
            starting
          }
          className="mt-8 w-full rounded-2xl bg-emerald-500 px-6 py-5 font-black text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {starting
            ? "Quiz wird vorbereitet..."
            : "🎓 Quiz starten →"}
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