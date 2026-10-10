// Ersatzhinweise für Einträge ohne individuell geschriebene Hinweise.
export function getNameTips(name: string, category: string): string[] {
  const subject = category === "filme" ? "Der Filmtitel" : "Der Name";
  const words = name.trim().split(/\s+/).filter(Boolean);
  const length = name.replace(/\s/g, "").length;
  const first = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toUpperCase().match(/[A-Z]/)?.[0];

  const hints = [
    `${subject} besteht ${words.length === 1 ? "aus einem Wort" : "aus mehreren Wörtern"}.`,
    `${subject} ist ${length <= 8 ? "kurz" : length >= 18 ? "lang" : "mittellang"}.`,
  ];

  if (first) {
    const range = first <= "I" ? "A bis I" : first <= "R" ? "J bis R" : "S bis Z";
    hints.push(`${subject} beginnt mit einem Buchstaben von ${range}.`);
  }
  if (/\d/.test(name)) hints.push(`${subject} enthält mindestens eine Ziffer.`);
  if (name.includes("-")) hints.push(`${subject} enthält einen Bindestrich.`);
  return hints;
}
