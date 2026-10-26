export function normalizeCharacterSearch(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/ß/g, "ss").replace(/[^a-z0-9]/g, "");
}

export function filterCharacterNames(characters: readonly string[], query: string) {
  const search = normalizeCharacterSearch(query);
  return [...new Set(characters)].filter(name =>
    normalizeCharacterSearch(name).includes(search)
  ).sort((a, b) => a.localeCompare(b, "de"));
}

export function resolveCharacterName(characters: readonly string[], query: string) {
  const search = normalizeCharacterSearch(query);
  if (!search) return "";
  const matches = [...new Set(characters)].filter(name =>
    normalizeCharacterSearch(name) === search
  );
  return matches.length === 1 ? matches[0] : "";
}
