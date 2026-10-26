"use client";

import { useId, useState } from "react";
import { filterCharacterNames, resolveCharacterName } from "../lib/characterSearch";

type Props = {
  characters: readonly string[];
  value: string;
  onChange: (name: string) => void;
  disabled?: boolean;
  className?: string;
};

// Der Aufrufer setzt key auf die Runde, niemals auf die Bildstufe oder den Timer.
export default function CharacterPicker({
  characters, value, onChange, disabled = false, className = "",
}: Props) {
  const id = useId();
  const [query, setQuery] = useState(value);
  const matches = filterCharacterNames(characters, query);
  const options = value && !matches.includes(value) ? [value, ...matches] : matches;

  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={`${id}-search`} className="block text-sm font-bold text-slate-300">
        Figur suchen oder aus der Liste wählen
      </label>
      <input
        id={`${id}-search`}
        type="search"
        value={query}
        onChange={event => {
          const text = event.target.value;
          setQuery(text);
          onChange(resolveCharacterName(characters, text));
        }}
        disabled={disabled}
        autoComplete="off"
        placeholder="Name tippen, z. B. Jack Sparrow …"
        aria-describedby={`${id}-hint`}
        className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 text-base text-white outline-none focus:border-slate-400 disabled:opacity-40"
      />
      <select
        value={value}
        onChange={event => {
          const name = event.target.value;
          setQuery(name);
          onChange(name);
        }}
        disabled={disabled}
        aria-label="Passende Figur auswählen"
        className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 text-base text-white outline-none focus:border-slate-400 disabled:opacity-40"
      >
        <option value="">{matches.length ? `Figur auswählen (${matches.length}) …` : "Keine passende Figur"}</option>
        {options.map(name => <option key={name} value={name}>{name}</option>)}
      </select>
      <p id={`${id}-hint`} className="text-xs text-slate-400" aria-live="polite">
        {value ? `Ausgewählt: ${value}` : query && matches.length === 0
          ? "Keine Figur gefunden. Ändere oder lösche den Suchtext."
          : "Ein vollständiger Name wird automatisch ausgewählt. Sonst wähle einen Vorschlag aus der Liste."}
      </p>
    </div>
  );
}
