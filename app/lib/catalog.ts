import {
  dealCharacters,
  dealGameModes,
  type DealCharacter,
  type DealGameMode,
} from "./dealData";

export const categories = [
  { id: "star-wars", name: "Star Wars", emoji: "⭐" },
  { id: "marvel", name: "Marvel", emoji: "🦸" },
  { id: "harry-potter", name: "Harry Potter", emoji: "🪄" },
  { id: "dc", name: "DC", emoji: "🦇" },
  { id: "fluch-der-karibik", name: "Fluch der Karibik", emoji: "🏴‍☠️" },
  { id: "game-of-thrones", name: "Game of Thrones", emoji: "⚔️" },
  { id: "herr-der-ringe", name: "Herr der Ringe", emoji: "💍" },
  { id: "hobbit", name: "Der Hobbit", emoji: "🏔️" },
  { id: "the-boys", name: "The Boys", emoji: "🩸" },
  { id: "the-walking-dead", name: "The Walking Dead", emoji: "🧟" },
  { id: "jurassic", name: "Jurassic Park / World", emoji: "🦖" },
  { id: "schauspielerinnen", name: "Schauspielerinnen", emoji: "💃" },
  { id: "schauspieler", name: "Schauspieler", emoji: "🎬" },
  { id: "fussballer", name: "Fußballer", emoji: "⚽" },
  { id: "filme", name: "Filme", emoji: "🎞️" },
] as const;

export const fictionCategories = categories.slice(0, 11);
export const spyCategories = categories.filter(category =>
  !["schauspieler", "schauspielerinnen"].includes(category.id)
);

// „Fertig“ bezeichnet die abgeschlossene Charakterauswahl.
// Filme bleibt ausdrücklich offen.
export const completedCategoryIds = new Set<string>([
  "game-of-thrones", "dc", "harry-potter", "fluch-der-karibik",
  "herr-der-ringe", "hobbit", "the-boys",
]);

export const categoryNames: Record<string, string> = Object.fromEntries(
  categories.map(category => [category.id, `${category.emoji} ${category.name}`])
);

const characterModes: DealGameMode[] = [
  "kills", "height", "age", "strength", "intelligence", "fame", "attractiveness",
];
const footballModes: DealGameMode[] = [
  "goals", "assists", "titles", "awards", "clAppearances", "internationalCaps",
];
const filmModes: DealGameMode[] = ["boxOffice", "imdb", "watchRate", "fame"];
export const arenaModes: DealGameMode[] = [
  "kills", "strength", "intelligence", "fame", "attractiveness",
];

export function getApplicableModes(category: string): DealGameMode[] {
  if (category === "filme") return filmModes;
  if (category === "fussballer") return footballModes;
  if (category === "schauspieler" || category === "schauspielerinnen") {
    return characterModes.filter(mode => mode !== "kills");
  }
  return fictionCategories.some(entry => entry.id === category) ? characterModes : [];
}

export function getCharacterValue(character: DealCharacter, mode: string): number | null {
  if (!getApplicableModes(character.category).includes(mode as DealGameMode)) return null;
  const value = character[mode as DealGameMode];
  return typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : null;
}

export function getPlayablePool(mode: DealGameMode, category?: string) {
  return dealCharacters.flatMap(character => {
    if (category && character.category !== category) return [];
    const value = getCharacterValue(character, mode);
    return value === null ? [] : [{ name: character.name, category: character.category, value }];
  });
}

export function getDealPool(mode: DealGameMode) {
  const pool = getPlayablePool(mode);
  const counts = new Map<string, number>();
  for (const entry of pool) counts.set(entry.category, (counts.get(entry.category) ?? 0) + 1);
  return pool.filter(entry => (counts.get(entry.category) ?? 0) >= 20);
}

export function getDealCategoryCount(mode: DealGameMode) {
  return new Set(getDealPool(mode).map(entry => entry.category)).size;
}

export function getAvailableBidModes(category: string, playerCount: number) {
  const minimum = Math.max(2, playerCount) * 5;
  return dealGameModes.filter(mode => getPlayablePool(mode.id, category).length >= minimum);
}

export function getArenaCharacters(category: string) {
  return dealCharacters.filter(character => character.category === category &&
    arenaModes.every(mode => getCharacterValue(character, mode) !== null)
  );
}

export function getMissingModes(character: DealCharacter) {
  return getApplicableModes(character.category).filter(mode => getCharacterValue(character, mode) === null);
}

export function getCharacterImage(character: string, category: string) {
  const slug = character.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/ß/g, "ss").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return `/characters/${category}/${slug}.webp`;
}

export function formatValue(mode: DealGameMode, value: number) {
  const units: Partial<Record<DealGameMode, string>> = {
    kills: "Kills", height: "cm", age: "Jahre", goals: "Tore", assists: "Assists",
    titles: "Titel", awards: "Auszeichnungen", clAppearances: "CL-Einsätze",
    internationalCaps: "Länderspiele", boxOffice: "Mio. $", watchRate: "%",
  };
  if (mode === "imdb") return `${value.toLocaleString("de-DE")} / 10`;
  if (["strength", "intelligence", "fame", "attractiveness"].includes(mode)) return `${value}/100`;
  return `${value.toLocaleString("de-DE")} ${units[mode] ?? ""}`.trim();
}
