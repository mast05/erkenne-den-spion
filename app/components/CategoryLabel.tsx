import { dealCharacters } from "../lib/dealData";
import { completedCategoryIds, categoryNames, getArenaCharacters } from "../lib/catalog";

export default function CategoryLabel({
  categoryId, arena = false,
}: {
  categoryId: string;
  arena?: boolean;
}) {
  const total = dealCharacters.filter(character => character.category === categoryId).length;
  const playable = arena ? getArenaCharacters(categoryId).length : total;
  return (
    <span className="min-w-0">
      <span className="flex flex-wrap items-center gap-2">
        <span>{categoryNames[categoryId] ?? categoryId}</span>
        {completedCategoryIds.has(categoryId) && (
          <span title="Charakterauswahl abgeschlossen. Fehlende Werte werden separat angezeigt."
            className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
            Fertig
          </span>
        )}
      </span>
      <span className="mt-1 block text-xs font-normal text-slate-400">
        {total} {categoryId === "filme" ? "Filme" : "Figuren"}
        {arena && playable < total ? ` · ${playable} für alle Arena-Wertungen spielbar` : ""}
      </span>
    </span>
  );
}
