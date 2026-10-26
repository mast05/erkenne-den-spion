import { dealCharacters, dealGameModes, type DealGameMode } from "../lib/dealData";
import { categories, getMissingModes, spyCategories } from "../lib/catalog";
import { getCharacterTips } from "../lib/spyHints";

const labels: Partial<Record<DealGameMode, string>> = {
  runes: "Runen (NG)", bossDifficulty: "Boss-Schwierigkeit", magicPower: "Magische Macht",
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
        Hier siehst du fehlende oder ungültige Spielwerte. „Fertig“ bezeichnet die abgeschlossene
        Charakterauswahl und bedeutet nicht, dass alle Werte vorhanden sind.
      </p>
      <p className="mt-2 text-sm text-slate-400">
        Ein gespeichertes null ist nicht automatisch ein Datenfehler. Nicht
        anwendbare Felder werden getrennt aufgeführt. 0 Kills sind gültig; Attraktivität 0 ist eine fehlende Bewertung.
        Bei Deal or No Deal sind Schauspieler und Schauspielerinnen nur für
        Attraktivität freigegeben.
      </p>
      <p className="mt-2 text-xs text-slate-500">
        Geprüft werden Vollständigkeit und Zahlenskalen, keine Kanonrichtigkeit. Spielbewertungen wie Stärke,
        Intelligenz und Bekanntheit sind keine belegten Messwerte. Bei Elden Ring sind
        Kills Schätzungen und die Ratings subjektiv. Alter und Größe werden dort
        nicht gewertet; Runen und Boss-Schwierigkeit gelten nur für Bossprofile.
      </p>
      <p className="mt-2 text-xs text-slate-500">
        Resident Evil verwendet pro Figur ein Spielprofil. Kills und Ratings sind
        Spielschätzungen; unsichere Größen und Altersangaben sind in den Daten
        als Schätzwerte markiert. Kinderfiguren werden nicht nach Attraktivität gewertet.
      </p>
      <p className="mt-2 text-xs text-slate-500">
        Animationsfilme: Zahlen sind geschätzte Spielwerte, keine bestätigten
        Kanonangaben. Größe bei Vierbeinern meint die Körperhöhe.
        Hicks und seine Freunde verwenden Erwachsenenprofile aus Film 3;
        Fiona ihre Ogerform. Artie und Pinocchio haben keine Attraktivitätswertung.
      </p>
      <div className="mt-5 space-y-3">
        {categories.map(category => {
          const entries = dealCharacters.filter(entry => entry.category === category.id);
          const unknown = entries.map(entry => ({ entry, modes: getMissingModes(entry) }))
            .filter(item => item.modes.length > 0);
          const excludedCounts = dealGameModes.flatMap(mode => {
            const count = entries.filter(entry =>
              entry[mode.id] === null && !getMissingModes(entry).includes(mode.id)
            ).length;
            return count ? [{ mode: mode.id, count }] : [];
          });
          const missingTips = spyCategories.some(c => c.id === category.id)
            ? entries.filter(entry => getCharacterTips(entry.name, entry.category).length < 3)
            : null;
          const counts = new Map<DealGameMode, number>();
          for (const item of unknown) for (const mode of item.modes) {
            counts.set(mode, (counts.get(mode) ?? 0) + 1);
          }
          return (
            <details key={category.id} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
              <summary className="cursor-pointer font-bold">
                {category.emoji} {category.name} · {entries.length} Einträge
                <span className={`ml-2 text-sm ${unknown.length ? "text-amber-300" : "text-emerald-400"}`}>
                  {unknown.length ? `${unknown.length} mit fehlenden Werten` : "Pflichtfelder befüllt"}
                </span>
              </summary>
              {excludedCounts.length > 0 && (
                <p className="mt-3 text-sm text-slate-400">
                  Nicht anwendbare Felder (kein fehlender Spielwert): {excludedCounts
                    .map(({ mode, count }) => `${labels[mode] ?? mode}: ${count}`)
                    .join(" · ")}
                </p>
              )}
              {entries.some(entry => entry.attractivenessNotApplicable) && (
                <p className="mt-3 text-sm text-slate-400">
                  Keine Attraktivitätswertung: {entries.filter(entry => entry.attractivenessNotApplicable).map(entry => entry.name).join(", ")}
                </p>
              )}
              {missingTips !== null && (
                <p className={`mt-3 text-sm ${missingTips.length ? "text-amber-300" : "text-emerald-400"}`}>
                  Spion-Tipps: {entries.length - missingTips.length}/{entries.length} Einträge mit je 3 Tipps
                  {missingTips.length > 0 && <span className="block">Fehlen bei: {missingTips.map(entry => entry.name).join(", ")}</span>}
                </p>
              )}
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
              ) : <p className="mt-3 text-sm text-slate-400">Für alle anwendbaren Wertungen sind gültige Zahlen eingetragen. Das bestätigt keine Kanonwerte.</p>}
            </details>
          );
        })}
      </div>
    </section>
  );
}
