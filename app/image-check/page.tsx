"use client";

import { useState } from "react";
import { dealCharacters } from "../lib/dealData";

type ImageStatus = "loading" | "loaded" | "error";

type Category = {
  id: string;
  name: string;
  characters: string[];
};

const categoryInfo = [
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
  {
  id: "schauspielerinnen",
  name: "💃 Schauspielerinnen",
},
{
  id: "schauspieler",
  name: "🎬 Schauspieler",
},
];

const categories: Category[] = categoryInfo.map(
  (category) => ({
    id: category.id,
    name: category.name,
    characters: dealCharacters
      .filter(
        (character) =>
          character.category === category.id
      )
      .map((character) => character.name),
  })
);

function getCharacterImage(
  character: string,
  category: string
) {
  const fileName = character
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `/characters/${category}/${fileName}.webp`;
}

function ImageCard({
  character,
  category,
  onStatus,
}: {
  character: string;
  category: string;
  onStatus: (
    key: string,
    status: ImageStatus
  ) => void;
}) {
  const [status, setStatus] =
    useState<ImageStatus>("loading");

  const imagePath = getCharacterImage(
    character,
    category
  );

  const key = `${category}-${character}`;

  function changeStatus(newStatus: ImageStatus) {
    setStatus(newStatus);
    onStatus(key, newStatus);
  }

  return (
    <div
      className={`overflow-hidden rounded-2xl border p-4 ${
        status === "loaded"
          ? "border-emerald-500/50 bg-emerald-950/20"
          : status === "error"
            ? "border-red-500/50 bg-red-950/20"
            : "border-slate-800 bg-slate-900"
      }`}
    >
      <div className="flex h-48 items-center justify-center overflow-hidden rounded-xl bg-slate-950">
        <img
          src={imagePath}
          alt={character}
          onLoad={() => changeStatus("loaded")}
          onError={() => changeStatus("error")}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="mt-4">
        <p className="font-bold text-white">
          {character}
        </p>

        <p
          className={`mt-2 text-sm font-bold ${
            status === "loaded"
              ? "text-emerald-400"
              : status === "error"
                ? "text-red-400"
                : "text-yellow-400"
          }`}
        >
          {status === "loaded" && "✅ Bild gefunden"}
          {status === "error" && "❌ Bild fehlt"}
          {status === "loading" && "⏳ Wird geprüft..."}
        </p>

        <p className="mt-2 break-all text-xs text-slate-500">
          {imagePath}
        </p>
      </div>
    </div>
  );
}

export default function ImageCheckPage() {
  const [statuses, setStatuses] = useState<
    Record<string, ImageStatus>
  >({});

  function handleStatus(
    key: string,
    status: ImageStatus
  ) {
    setStatuses((current) => ({
      ...current,
      [key]: status,
    }));
  }

  const total = categories.reduce(
    (sum, category) =>
      sum + category.characters.length,
    0
  );

  const loaded = Object.values(statuses).filter(
    (status) => status === "loaded"
  ).length;

  const missing = Object.values(statuses).filter(
    (status) => status === "error"
  ).length;

  const checked = loaded + missing;
  const waiting = total - checked;

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div className="text-6xl">🖼️</div>

          <h1 className="mt-5 text-4xl font-black">
            Bilder prüfen
          </h1>

          <p className="mt-3 text-slate-400">
            Hier werden alle Charakterbilder automatisch
            überprüft.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-center">
            <p className="text-2xl font-black">
              {total}
            </p>
            <p className="text-sm text-slate-400">
              Gesamt
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-900 bg-emerald-950/30 p-4 text-center">
            <p className="text-2xl font-black text-emerald-400">
              {loaded}
            </p>
            <p className="text-sm text-slate-400">
              Gefunden
            </p>
          </div>

          <div className="rounded-2xl border border-red-900 bg-red-950/30 p-4 text-center">
            <p className="text-2xl font-black text-red-400">
              {missing}
            </p>
            <p className="text-sm text-slate-400">
              Fehlen
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-center">
            <p className="text-2xl font-black text-yellow-400">
              {waiting}
            </p>
            <p className="text-sm text-slate-400">
              Offen
            </p>
          </div>
        </div>

        {categories.map((category) => (
          <section
            key={category.id}
            className="mt-14"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-black">
                {category.name}
              </h2>

              <span className="rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-400">
                {category.characters.length} Figuren
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {category.characters.map(
                (character) => (
                  <ImageCard
                    key={character}
                    character={character}
                    category={category.id}
                    onStatus={handleStatus}
                  />
                )
              )}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}