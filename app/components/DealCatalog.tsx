import { dealGameModes, type DealGameMode } from "../lib/dealData";
import { getDealCategories } from "../lib/catalog";

const catalog = dealGameModes.map(mode => ({
  ...mode, worlds: getDealCategories(mode.id),
}));

export default function DealCatalog({ mode }: { mode: DealGameMode }) {
  const selected = catalog.find(entry => entry.id === mode);
  return (
    <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-sm">
      <p className="font-black text-amber-300">Diese Welten können gezogen werden</p>
      <p className="mt-2 text-slate-300">
        {selected?.worlds.map(world => `${world.emoji} ${world.name} (${world.count})`).join(" · ") || "Keine passende Welt vorhanden."}
      </p>
      <p className="mt-3 text-xs text-slate-400">
        Pro Welt werden mindestens 20 gültige Werte benötigt. Schauspieler und
        Schauspielerinnen sind ausschließlich bei Attraktivität dabei.
      </p>
      <details className="mt-4 border-t border-slate-800 pt-3">
        <summary className="cursor-pointer font-bold">Alle Wertungen und Welten</summary>
        <div className="mt-3 space-y-4">
          {catalog.map(entry => (
            <div key={entry.id}>
              <p className="font-bold">{entry.label}</p>
              <p className={entry.worlds.length >= 3 ? "text-emerald-400" : "text-amber-300"}>
                {entry.worlds.length >= 3 ? "Verfügbar" : "Gesperrt: weniger als 3 passende Welten"}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {entry.worlds.map(world => `${world.name} (${world.count})`).join(" · ") || "Keine passende Welt"}
              </p>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}
