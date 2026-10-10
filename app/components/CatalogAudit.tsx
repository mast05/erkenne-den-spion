import { dealCharacters, type DealGameMode } from "../lib/dealData";
import { categories, getMissingModes } from "../lib/catalog";

const labels: Partial<Record<DealGameMode, string>> = {
  kills: "Kills", height: "Größe", age: "Alter", strength: "Stärke",
  intelligence: "Intelligenz", fame: "Bekanntheit", attractiveness: "Attraktivität",
  goals: "Tore", assists: "Assists", titles: "Titel", awards: "Auszeichnungen",
  clAppearances: "CL-Einsätze", internationalCaps: "Länderspiele",
  boxOffice: "Einspielergebnis", imdb: "IMDb", watchRate: "Geschätzte Bekanntheit des Films",
};

export default function CatalogAudit() {
  return (
    <section className="mt-8 rounded-3xl border border-slate-700 bg-slate-900/90 p-5">
      <h2 className="text-xl font-black">Werte aller Kategorien</h2>
      <p className="mt-2 text-sm text-slate-400">
        Hier siehst du alle fehlenden Werte. „Fertig“ bezeichnet die abgeschlossene
        Charakterauswahl und bedeutet nicht, dass alle Werte vorhanden sind.
      </p>
      <p className="mt-2 text-xs text-slate-500">
        Geprüft wird die Datenvollständigkeit. Spielbewertungen wie Stärke,
        Intelligenz und Bekanntheit sind keine belegten Messwerte.
      </p>
      <div className="mt-5 space-y-3">
        {categories.map(category => {
          const entries = dealCharacters.filter(entry => entry.category === category.id);
          const unknown = entries.map(entry => ({ entry, modes: getMissingModes(entry) }))
            .filter(item => item.modes.length > 0);
          const counts = new Map<DealGameMode, number>();
          for (const item of unknown) for (const mode of item.modes) {
            counts.set(mode, (counts.get(mode) ?? 0) + 1);
          }
          return (
            <details key={category.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
              <summary className="cursor-pointer font-bold">
                {category.emoji} {category.name} · {entries.length} Einträge
                <span className={`ml-2 text-sm ${unknown.length ? "text-amber-300" : "text-emerald-400"}`}>
                  {unknown.length ? `${unknown.length} mit fehlenden Werten` : "Alle Spielwerte vorhanden"}
                </span>
              </summary>
              {unknown.length > 0 ? (
                <>
                  <p className="mt-3 text-sm text-amber-200">
                    {[...counts].map(([mode, count]) => `${labels[mode] ?? mode}: ${count}`).join(" · ")}
                  </p>
                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead><tr className="border-b border-slate-700 text-slate-400">
                        <th className="py-2 pr-4">Eintrag</th><th className="py-2">Fehlende Werte</th>
                      </tr></thead>
                      <tbody>{unknown.map(({ entry, modes }) => (
                        <tr key={entry.name} className="border-b border-slate-800">
                          <td className="py-2 pr-4 font-semibold">{entry.name}</td>
                          <td className="py-2 text-slate-400">{modes.map(mode => labels[mode] ?? mode).join(", ")}</td>
                        </tr>
                      ))}</tbody>
                    </table>
                  </div>
                </>
              ) : <p className="mt-3 text-sm text-slate-400">Für alle anwendbaren Wertungen sind Zahlen eingetragen.</p>}
            </details>
          );
        })}
      </div>
    </section>
  );
}
