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
    id: "fussballer",
    name: "Fußballer",
    emoji: "⚽"
  }
];

type Character = {
  name: string;
  tip: string;
};

const characters: Record<string, Character[]> = {
  "star-wars": [
    { name: "Luke Skywalker", tip: "Wirkt oft neugierig." },
    { name: "Darth Vader", tip: "Wirkt eher entschlossen." },
    { name: "Yoda", tip: "Wirkt geduldig." },
    { name: "Obi-Wan Kenobi", tip: "Wirkt meistens ruhig." },
    { name: "Leia Organa", tip: "Wirkt selbstbewusst." },
    { name: "Han Solo", tip: "Wirkt oft selbstsicher." },
    { name: "Chewbacca", tip: "Wirkt loyal." },
    { name: "Anakin Skywalker", tip: "Wirkt ehrgeizig." },
    { name: "R2-D2", tip: "Wirkt ziemlich neugierig." },
    { name: "C-3PO", tip: "Wirkt oft nervös." },
    { name: "Palpatine", tip: "Wirkt geduldig." },
    { name: "Boba Fett", tip: "Wirkt eher ruhig." },
    { name: "Mandalorian", tip: "Wirkt eher zurückhaltend." },
    { name: "Grogu", tip: "Wirkt neugierig." },
    { name: "Ahsoka Tano", tip: "Wirkt selbstbewusst." },
    { name: "Mace Windu", tip: "Wirkt sehr ruhig." },
    { name: "Kylo Ren", tip: "Wirkt oft unsicher." },
    { name: "Rey", tip: "Wirkt neugierig." },
    { name: "Finn", tip: "Wirkt ziemlich freundlich." },
    { name: "Jabba the Hutt", tip: "Wirkt ziemlich selbstsicher." },
    { name: "Count Dooku", tip: "Wirkt sehr kontrolliert." },
    { name: "General Grievous", tip: "Wirkt entschlossen." },
    { name: "Padmé Amidala", tip: "Wirkt selbstbewusst." },
    { name: "Qui-Gon Jinn", tip: "Wirkt geduldig." },
    { name: "Lando Calrissian", tip: "Wirkt ziemlich locker." },
  ],

  marvel: [
    { name: "Spider-Man", tip: "Wirkt oft locker." },
    { name: "Iron Man", tip: "Wirkt selbstsicher." },
    { name: "Thor", tip: "Wirkt selbstbewusst." },
    { name: "Hulk", tip: "Wirkt eher ruhig." },
    { name: "Captain America", tip: "Wirkt zuverlässig." },
    { name: "Black Widow", tip: "Wirkt kontrolliert." },
    { name: "Hawkeye", tip: "Wirkt eher ruhig." },
    { name: "Doctor Strange", tip: "Wirkt selbstsicher." },
    { name: "Black Panther", tip: "Wirkt ruhig." },
    { name: "Scarlet Witch", tip: "Wirkt eher ruhig." },
    { name: "Vision", tip: "Wirkt bedacht." },
    { name: "Ant-Man", tip: "Wirkt locker." },
    { name: "Captain Marvel", tip: "Wirkt selbstbewusst." },
    { name: "Deadpool", tip: "Wirkt verspielt." },
    { name: "Wolverine", tip: "Wirkt eher grimmig." },
    { name: "Loki", tip: "Wirkt selbstsicher." },
    { name: "Thanos", tip: "Wirkt sehr ruhig." },
    { name: "Star-Lord", tip: "Wirkt locker." },
    { name: "Groot", tip: "Wirkt ruhig." },
    { name: "Rocket", tip: "Wirkt selbstsicher." },
    { name: "Gamora", tip: "Wirkt ernst." },
    { name: "Drax", tip: "Wirkt sehr direkt." },
    { name: "Venom", tip: "Wirkt selbstsicher." },
    { name: "Moon Knight", tip: "Wirkt eher ruhig." },
    { name: "Daredevil", tip: "Wirkt ernst." },
  ],

  "harry-potter": [
    { name: "Harry Potter", tip: "Wirkt neugierig." },
    { name: "Hermine Granger", tip: "Wirkt vorbereitet." },
    { name: "Ron Weasley", tip: "Wirkt locker." },
    { name: "Albus Dumbledore", tip: "Wirkt geduldig." },
    { name: "Severus Snape", tip: "Wirkt ernst." },
    { name: "Lord Voldemort", tip: "Wirkt entschlossen." },
    { name: "Draco Malfoy", tip: "Wirkt selbstsicher." },
    { name: "Rubeus Hagrid", tip: "Wirkt freundlich." },
    { name: "Sirius Black", tip: "Wirkt selbstsicher." },
    { name: "Remus Lupin", tip: "Wirkt ruhig." },
    { name: "Minerva McGonagall", tip: "Wirkt ernst." },
    { name: "Dobby", tip: "Wirkt neugierig." },
    { name: "Neville Longbottom", tip: "Wirkt eher ruhig." },
    { name: "Luna Lovegood", tip: "Wirkt neugierig." },
    { name: "Ginny Weasley", tip: "Wirkt selbstbewusst." },
    { name: "Fred Weasley", tip: "Wirkt verspielt." },
    { name: "George Weasley", tip: "Wirkt verspielt." },
    { name: "Bellatrix Lestrange", tip: "Wirkt impulsiv." },
    { name: "Cedric Diggory", tip: "Wirkt selbstbewusst." },
    { name: "Peter Pettigrew", tip: "Wirkt unsicher." },
    { name: "Dolores Umbridge", tip: "Wirkt kontrolliert." },
    { name: "Lucius Malfoy", tip: "Wirkt selbstsicher." },
    { name: "Arthur Weasley", tip: "Wirkt neugierig." },
    { name: "Molly Weasley", tip: "Wirkt fürsorglich." },
    { name: "Viktor Krum", tip: "Wirkt eher ruhig." },
  ],

  dc: [
    { name: "Batman", tip: "Wirkt eher zurückhaltend." },
    { name: "Superman", tip: "Wirkt selbstbewusst." },
    { name: "Wonder Woman", tip: "Wirkt entschlossen." },
    { name: "Joker", tip: "Wirkt verspielt." },
    { name: "The Flash", tip: "Wirkt locker." },
    { name: "Aquaman", tip: "Wirkt selbstbewusst." },
    { name: "Green Lantern", tip: "Wirkt selbstsicher." },
    { name: "Cyborg", tip: "Wirkt eher ruhig." },
    { name: "Harley Quinn", tip: "Wirkt verspielt." },
    { name: "Catwoman", tip: "Wirkt selbstsicher." },
    { name: "Supergirl", tip: "Wirkt selbstbewusst." },
    { name: "Robin", tip: "Wirkt neugierig." },
    { name: "Nightwing", tip: "Wirkt locker." },
    { name: "Batgirl", tip: "Wirkt selbstbewusst." },
    { name: "Lex Luthor", tip: "Wirkt selbstsicher." },
    { name: "The Riddler", tip: "Wirkt verspielt." },
    { name: "Penguin", tip: "Wirkt selbstsicher." },
    { name: "Poison Ivy", tip: "Wirkt selbstbewusst." },
    { name: "Shazam", tip: "Wirkt locker." },
    { name: "Darkseid", tip: "Wirkt sehr ruhig." },
    { name: "Green Arrow", tip: "Wirkt selbstbewusst." },
    { name: "Black Canary", tip: "Wirkt selbstbewusst." },
    { name: "Deathstroke", tip: "Wirkt kontrolliert." },
    { name: "Bane", tip: "Wirkt selbstsicher." },
    { name: "Mr. Freeze", tip: "Wirkt ruhig." },
  ],

  "fluch-der-karibik": [
    { name: "Jack Sparrow", tip: "Wirkt selbstsicher." },
    { name: "Will Turner", tip: "Wirkt eher ernst." },
    { name: "Elizabeth Swann", tip: "Wirkt selbstbewusst." },
    { name: "Barbossa", tip: "Wirkt selbstsicher." },
    { name: "Davy Jones", tip: "Wirkt eher ruhig." },
    { name: "Bootstrap Bill", tip: "Wirkt eher ernst." },
    { name: "James Norrington", tip: "Wirkt kontrolliert." },
    { name: "Joshamee Gibbs", tip: "Wirkt locker." },
    { name: "Cutler Beckett", tip: "Wirkt selbstsicher." },
    { name: "Tia Dalma", tip: "Wirkt ruhig." },
    { name: "Weatherby Swann", tip: "Wirkt eher ernst." },
    { name: "Blackbeard", tip: "Wirkt selbstsicher." },
    { name: "Angelica", tip: "Wirkt selbstbewusst." },
    { name: "Philip Swift", tip: "Wirkt ruhig." },
    { name: "Syrena", tip: "Wirkt eher ruhig." },
    { name: "Marty", tip: "Wirkt locker." },
    { name: "Cotton", tip: "Wirkt ruhig." },
    { name: "Pintel", tip: "Wirkt locker." },
    { name: "Ragetti", tip: "Wirkt etwas unsicher." },
    { name: "Giselle", tip: "Wirkt selbstbewusst." },
    { name: "Ian Mercer", tip: "Wirkt kontrolliert." },
    { name: "Lieutenant Theodore Groves", tip: "Wirkt pflichtbewusst." },
    { name: "Captain Teague", tip: "Wirkt selbstsicher." },
    { name: "Scrum", tip: "Wirkt locker." },
    { name: "Tamara", tip: "Wirkt ruhig." },
  ],

  "game-of-thrones": [
    { name: "Jon Snow", tip: "Wirkt pflichtbewusst." },
    { name: "Daenerys Targaryen", tip: "Wirkt entschlossen." },
    { name: "Tyrion Lannister", tip: "Wirkt clever." },
    { name: "Arya Stark", tip: "Wirkt eher ruhig." },
    { name: "Sansa Stark", tip: "Wirkt selbstbewusst." },
    { name: "Bran Stark", tip: "Wirkt ruhig." },
    { name: "Cersei Lannister", tip: "Wirkt selbstbewusst." },
    { name: "Jaime Lannister", tip: "Wirkt selbstsicher." },
    { name: "Ned Stark", tip: "Wirkt ernst." },
    { name: "Robb Stark", tip: "Wirkt selbstbewusst." },
    { name: "Catelyn Stark", tip: "Wirkt ernst." },
    { name: "Theon Greyjoy", tip: "Wirkt selbstbewusst." },
    { name: "Brienne von Tarth", tip: "Wirkt ernst." },
    { name: "Samwell Tarly", tip: "Wirkt eher ruhig." },
    { name: "Davos Seaworth", tip: "Wirkt ruhig." },
    { name: "Petyr Baelish", tip: "Wirkt selbstsicher." },
    { name: "Varys", tip: "Wirkt ruhig." },
    { name: "Sandor Clegane", tip: "Wirkt eher grimmig." },
    { name: "Gregor Clegane", tip: "Wirkt sehr ruhig." },
    { name: "Jorah Mormont", tip: "Wirkt ernst." },
    { name: "Margaery Tyrell", tip: "Wirkt selbstbewusst." },
    { name: "Olenna Tyrell", tip: "Wirkt selbstsicher." },
    { name: "Melisandre", tip: "Wirkt ruhig." },
    { name: "Tormund", tip: "Wirkt locker." },
    { name: "Gendry", tip: "Wirkt eher ruhig." },
  ],
};

const allSpyCategories = [
  "star-wars",
  "marvel",
  "harry-potter",
  "dc",
  "fluch-der-karibik",
  "game-of-thrones",
  "herr-der-ringe",
  "hobbit",
  "the-boys",
  "the-walking-dead",
  "jurassic",
] as const;

allSpyCategories.forEach((categoryId) => {
  characters[categoryId] = dealCharacters
    .filter((character) => character.category === categoryId)
    .map((character) => ({
      name: character.name,
      tip: "",
    }));
});

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
      // Alle Spieler des Raums laden
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

      // Prüfen, ob dieser Tab wirklich der Host ist
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

      // Alte gespeicherte Rundennummer dieses Tabs entfernen
      sessionStorage.removeItem("roundId");

      // Falls noch eine alte aktive Runde existiert:
      // sauber beenden.
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

      // EXAKT EINEN der drei Spieler als Imposter auswählen
      const randomSpyIndex = Math.floor(
        Math.random() * players.length
      );

      const spyPlayerId = players[randomSpyIndex].id;

      // Eine zufällige Figur auswählen
      const randomCharacterIndex = Math.floor(
        Math.random() * categoryCharacters.length
      );

      const secretCharacter =
        categoryCharacters[randomCharacterIndex];

      // Kategorie im Raum speichern
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

      // Genau EINE neue Runde erstellen
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

      // Die neue Runde nur für diesen Tab speichern
      sessionStorage.setItem("roundId", round.id);

      console.log("NEUE RUNDE:", round.id);
      console.log("IMPOSTER ID:", spyPlayerId);
      console.log("FIGUR:", secretCharacter.name);

      // Host ins Spiel schicken.
      // Die anderen Spieler werden von der Lobby automatisch weitergeleitet.
      router.push("/game");
    } catch (err) {
      console.error("START GAME ERROR:", err);
      setError("Beim Starten des Spiels ist ein Fehler aufgetreten.");
      setLoading(false);
    }
  }

  return (
  <main className="min-h-screen bg-slate-950 text-white">
    <div className="mx-auto max-w-md px-6 py-10">
      <button
        disabled={loading}
        onClick={() => {
  router.push("/lobby");
}}
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
          Wähle die Welt, aus der die geheime Figur
          für diese Runde stammen soll.
        </p>
      </div>

      {error && (
        <div className="mt-7 rounded-2xl border border-red-900 bg-red-950/30 p-4 text-center">
          <p className="text-sm text-red-300">
            {error}
          </p>
        </div>
      )}

      <div className="mt-10 space-y-3">
        {categories.map((category) => (
          <button
            key={category.id}
            disabled={loading}
            onClick={() =>
              selectCategory(category.id)
            }
            className="group flex w-full items-center justify-between rounded-3xl border border-slate-800 bg-slate-900 p-5 text-left transition hover:scale-[1.02] hover:border-slate-600 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <div className="flex items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-3xl">
                {category.emoji}
              </div>

              <div className="ml-4">
                <div className="flex items-center gap-2 text-lg font-black">
  <span>{category.name}</span>

  {(
  category.id === "fluch-der-karibik" ||
  category.id === "herr-der-ringe" ||
  category.id === "hobbit" ||
  category.id === "the-boys"
) && (
    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
      Fertig
    </span>
  )}
</div>

                <p className="mt-1 text-xs text-slate-500">
  {characters[category.id]?.length ?? 0} mögliche Figuren
</p>
              </div>
            </div>

            <span className="text-xl text-slate-600 transition group-hover:translate-x-1 group-hover:text-white">
              →
            </span>
          </button>
        ))}
      </div>

      {loading && (
        <div className="mt-7 rounded-2xl border border-emerald-900 bg-emerald-950/20 p-4 text-center">
          <p className="font-bold text-emerald-400">
            🎲 Runde wird vorbereitet...
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Figur und Imposter werden zufällig ausgewählt.
          </p>
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-xs text-slate-600">
          11 Kategorien · {Object.values(characters).reduce((sum, list) => sum + list.length, 0)} Figuren
        </p>
      </div>
    </div>
  </main>
);
}