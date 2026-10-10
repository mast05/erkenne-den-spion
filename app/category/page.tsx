"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import { dealCharacters } from "../lib/dealData";

const categories = [
  { id: "star-wars", name: "Star Wars", emoji: "⭐" },
  { id: "marvel", name: "Marvel", emoji: "🦸" },
  { id: "harry-potter", name: "Harry Potter", emoji: "🪄" },
  { id: "dc", name: "DC", emoji: "🦇" },
  {
    id: "fluch-der-karibik",
    name: "Fluch der Karibik",
    emoji: "🏴‍☠️",
  },
  {
    id: "game-of-thrones",
    name: "Game of Thrones",
    emoji: "⚔️",
  },
  {
    id: "herr-der-ringe",
    name: "Herr der Ringe",
    emoji: "💍",
  },
  {
    id: "hobbit",
    name: "Der Hobbit",
    emoji: "🏔️",
  },
  {
    id: "the-boys",
    name: "The Boys",
    emoji: "🩸",
  },
  {
    id: "the-walking-dead",
    name: "The Walking Dead",
    emoji: "🧟",
  },
  {
    id: "jurassic",
    name: "Jurassic Park / World",
    emoji: "🦖",
  },
  {
    id: "filme",
    name: "Filme",
    emoji: "🎞️",
  },
  {
    id: "fussballer",
    name: "Fußballer",
    emoji: "⚽",
  },
];

const completedCategoryIds = new Set([
  "game-of-thrones",
  "dc",
  "harry-potter",
  "fluch-der-karibik",
  "herr-der-ringe",
  "hobbit",
  "the-boys",
]);

type Character = {
  name: string;
  tip: string;
};

const characters: Record<string, Character[]> = {};

for (const category of categories) {
  characters[category.id] = dealCharacters
    .filter((character) => character.category === category.id)
    .map((character) => ({
      name: character.name,
      tip: "",
    }));
}

export default function CategoryPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function selectCategory(categoryId: string) {
    if (loading) return;

    const roomId = sessionStorage.getItem("roomId");
    const currentPlayerId = sessionStorage.getItem("playerId");

    if (!roomId || !currentPlayerId) {
      setError("Deine Spielsitzung wurde nicht gefunden.");
      return;
    }

    const categoryCharacters = characters[categoryId];

    if (!categoryCharacters || categoryCharacters.length === 0) {
      setError("Ungültige Kategorie.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data: players, error: playersError } = await supabase
        .from("players")
        .select("id, is_host")
        .eq("room_id", roomId)
        .order("created_at", {
          ascending: true,
        });

      if (playersError) {
        console.error("PLAYERS ERROR:", playersError);
        setError("Die Spieler konnten nicht geladen werden.");
        setLoading(false);
        return;
      }

      if (!players || players.length !== 3) {
        setError(
          `Es müssen genau 3 Spieler im Raum sein. Aktuell: ${
            players?.length ?? 0
          }`
        );
        setLoading(false);
        return;
      }

      const currentPlayer = players.find(
        (player) => player.id === currentPlayerId
      );

      if (!currentPlayer) {
        setError("Du gehörst nicht zu diesem Raum.");
        setLoading(false);
        return;
      }

      if (!currentPlayer.is_host) {
        setError("Nur der Host darf das Spiel starten.");
        setLoading(false);
        return;
      }

      sessionStorage.removeItem("roundId");

      const { error: finishOldRoundsError } = await supabase
        .from("rounds")
        .update({
          status: "finished",
        })
        .eq("room_id", roomId)
        .eq("status", "active");

      if (finishOldRoundsError) {
        console.error(
          "FINISH OLD ROUND ERROR:",
          finishOldRoundsError
        );

        setError("Eine alte Runde konnte nicht beendet werden.");
        setLoading(false);
        return;
      }

      const randomSpyIndex = Math.floor(
        Math.random() * players.length
      );

      const spyPlayerId = players[randomSpyIndex].id;

      const randomCharacterIndex = Math.floor(
        Math.random() * categoryCharacters.length
      );

      const secretCharacter =
        categoryCharacters[randomCharacterIndex];

      const { error: roomError } = await supabase
        .from("rooms")
        .update({
          category: categoryId,
        })
        .eq("id", roomId);

      if (roomError) {
        console.error("ROOM UPDATE ERROR:", roomError);
        setError("Die Kategorie konnte nicht gespeichert werden.");
        setLoading(false);
        return;
      }

      const { data: round, error: roundError } = await supabase
        .from("rounds")
        .insert({
          room_id: roomId,
          category: categoryId,
          secret_word: secretCharacter.name,
          spy_player_id: spyPlayerId,
          status: "active",
        })
        .select("id")
        .single();

      if (roundError || !round) {
        console.error("ROUND CREATE ERROR:", roundError);
        setError("Die Runde konnte nicht erstellt werden.");
        setLoading(false);
        return;
      }

      sessionStorage.setItem("roundId", round.id);

      router.push("/game");
    } catch (err) {
      console.error("START GAME ERROR:", err);
      setError("Beim Starten des Spiels ist ein Fehler aufgetreten.");
      setLoading(false);
    }
  }

  const totalCharacters = Object.values(characters).reduce(
    (sum, list) => sum + list.length,
    0
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-md px-6 py-10">
        <button
          disabled={loading}
          onClick={() => router.push("/lobby")}
          className="text-sm font-semibold text-slate-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Zur Lobby
        </button>

        <div className="mt-10 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 text-5xl">
            🎭
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">
            Neue Runde
          </p>

          <h1 className="mt-3 text-3xl font-black">
            Kategorie wählen
          </h1>

          <p className="mx-auto mt-3 max-w-xs text-slate-400">
            Wähle die Kategorie für diese Runde.
          </p>
        </div>

        {error && (
          <div className="mt-7 rounded-2xl border border-red-900 bg-red-950/30 p-4 text-center">
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}

        <div className="mt-10 space-y-3">
          {categories.map((category) => {
            const count = characters[category.id]?.length ?? 0;

            return (
              <button
                key={category.id}
                disabled={loading || count === 0}
                onClick={() => selectCategory(category.id)}
                className="group flex w-full items-center justify-between rounded-3xl border border-slate-800 bg-slate-900 p-5 text-left transition hover:scale-[1.02] hover:border-slate-600 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <div className="flex items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-3xl">
                    {category.emoji}
                  </div>

                  <div className="ml-4">
                    <div className="flex flex-wrap items-center gap-2 text-lg font-black">
                      <span>{category.name}</span>

                      {completedCategoryIds.has(category.id) && (
                        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                          Fertig
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-xs text-slate-500">
                      {count}{" "}
                      {category.id === "filme"
                        ? "Filme"
                        : "mögliche Figuren"}
                    </p>
                  </div>
                </div>

                <span className="text-xl text-slate-600 transition group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </button>
            );
          })}
        </div>

        {loading && (
          <div className="mt-7 rounded-2xl border border-emerald-900 bg-emerald-950/20 p-4 text-center">
            <p className="font-bold text-emerald-400">
              🎲 Runde wird vorbereitet...
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Eintrag und Imposter werden zufällig ausgewählt.
            </p>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-600">
            {categories.length} Kategorien · {totalCharacters} Einträge
          </p>
        </div>
      </div>
    </main>
  );
}