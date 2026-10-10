"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { dealCharacters } from "../lib/dealData";
import {
  categories as categoryInfo,
  completedCategoryIds,
  getCharacterImage,
} from "../lib/catalog";
import CatalogAudit from "../components/CatalogAudit";

type ImageStatus = "loading" | "loaded" | "error";

const categories = categoryInfo.map(category => ({
  id: category.id,
  name: `${category.emoji} ${category.name}`,
  characters: dealCharacters
    .filter(character => character.category === category.id)
    .map(character => character.name),
}));

function ImageCard({
  character, category, onStatus,
}: {
  character: string;
  category: string;
  onStatus: (key: string, status: ImageStatus) => void;
}) {
  const [status, setStatus] = useState<ImageStatus>("loading");
  const imagePath = getCharacterImage(character, category);
  const key = `${category}-${character}`;

  function changeStatus(nextStatus: ImageStatus) {
    setStatus(nextStatus);
    onStatus(key, nextStatus);
  }

  return (
    <div className={`overflow-hidden rounded-2xl border p-4 ${
      status === "loaded" ? "border-emerald-500/50 bg-emerald-950/20"
        : status === "error" ? "border-red-500/50 bg-red-950/20"
          : "border-slate-800 bg-slate-900"
    }`}>
      <div className="flex h-48 items-center justify-center overflow-hidden rounded-xl bg-slate-950">
        <Image unoptimized width={720} height={720} loading="eager"
          src={imagePath} alt={character}
          onLoad={() => changeStatus("loaded")}
          onError={() => changeStatus("error")}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="mt-4">
        <p className="font-bold">{character}</p>
        <p className={`mt-2 text-sm font-bold ${
          status === "loaded" ? "text-emerald-400"
            : status === "error" ? "text-red-400" : "text-yellow-400"
        }`}>
          {status === "loaded" && "✅ Bild gefunden"}
          {status === "error" && "❌ Bild fehlt oder lädt nicht"}
          {status === "loading" && "⏳ Wird geprüft..."}
        </p>
        <p className="mt-2 break-all text-xs text-slate-500">{imagePath}</p>
      </div>
    </div>
  );
}

export default function ImageCheckPage() {
  const [statuses, setStatuses] = useState<Record<string, ImageStatus>>({});

  function handleStatus(key: string, status: ImageStatus) {
    setStatuses(current => ({ ...current, [key]: status }));
  }

  const total = categories.reduce((sum, category) => sum + category.characters.length, 0);
  const loaded = Object.values(statuses).filter(status => status === "loaded").length;
  const missing = Object.values(statuses).filter(status => status === "error").length;
  const waiting = total - loaded - missing;

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="mb-8 inline-block rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-bold hover:bg-slate-800">
          ← Hauptmenü
        </Link>
        <div className="text-center">
          <div className="text-6xl">🖼️</div>
          <h1 className="mt-5 text-4xl font-black">Bilder und Werte prüfen</h1>
          <p className="mt-3 text-slate-400">Alle Kategorien, Bilder und fehlenden Werte.</p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Gesamt", value: total, color: "text-white" },
            { label: "Gefunden", value: loaded, color: "text-emerald-400" },
            { label: "Bildfehler", value: missing, color: "text-red-400" },
            { label: "Offen", value: waiting, color: "text-yellow-400" },
          ].map(item => (
            <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-center">
              <p className={`text-2xl font-black ${item.color}`}>{item.value}</p>
              <p className="text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
        <CatalogAudit />
        {categories.map(category => (
          <section key={category.id} className="mt-14">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-black">{category.name}</h2>
                {completedCategoryIds.has(category.id) && (
                  <span title="Charakterauswahl abgeschlossen. Fehlende Werte stehen oben."
                    className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-400">
                    ✅ Fertig
                  </span>
                )}
              </div>
              <span className="rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-400">
                {category.characters.length} {category.id === "filme" ? "Filme" : "Figuren"}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {category.characters.map(character => (
                <ImageCard key={character} character={character}
                  category={category.id} onStatus={handleStatus} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
