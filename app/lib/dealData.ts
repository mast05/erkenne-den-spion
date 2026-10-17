export type DealCharacter = {
  name: string;
  category:
  | "star-wars"
  | "marvel"
  | "harry-potter"
  | "dc"
  | "fluch-der-karibik"
  | "game-of-thrones"
  | "herr-der-ringe"
  | "hobbit"
  | "the-boys"
  | "the-walking-dead"
  | "jurassic"
  | "elden-ring"
  | "resident-evil"
  | "animationsfilme"
  | "schauspielerinnen"
  | "schauspieler"
  | "fussballer"
  | "filme";

  isBoss?: boolean;
  attractivenessNotApplicable?: boolean;
  runes?: number | null;
  bossDifficulty?: number | null;
  magicPower?: number | null;
  kills: number | null;
  height: number | null;
  age: number | null;

  strength: number;
intelligence: number;
skill?: number;
goals?: number;
assists?: number;
titles?: number;
awards?: number;
clAppearances?: number;
internationalCaps?: number;
boxOffice?: number;
imdb?: number;
watchRate?: number;
fame: number;
attractiveness: number | null;
};

export type DealGameMode =
  | "runes"
  | "bossDifficulty"
  | "magicPower"
  | "kills"
  | "height"
  | "age"
  | "strength"
  | "goals"
| "assists"
| "titles"
| "awards"
| "clAppearances"
| "internationalCaps"
| "boxOffice"
| "imdb"
| "watchRate"
  | "intelligence"
  | "fame"
  | "attractiveness";

export const dealGameModes: {
  id: DealGameMode;
  label: string;
}[] = [
  {
    id: "kills",
    label: "☠️ Wer hat die meisten Kills?",
  },
  {
    id: "height",
    label: "📏 Wer ist am größten?",
  },
  {
    id: "age",
    label: "🎂 Wer ist am ältesten?",
  },
  {
  id: "strength",
  label: "💪 Wer ist am stärksten?",
},
{
  id: "goals",
  label: "⚽ Wer hat die meisten Karrieretore?",
},
{
  id: "assists",
  label: "🎯 Wer hat die meisten Assists?",
},
{
  id: "titles",
  label: "🏆 Wer hat die meisten Titel gewonnen?",
},
{
  id: "awards",
  label: "🥇 Wer hat die meisten individuellen Auszeichnungen?",
},
{
  id: "clAppearances",
  label: "⭐ Wer hat die meisten Champions-League-Einsätze?",
},
{
  id: "internationalCaps",
  label: "🌍 Wer hat die meisten Länderspiel-Einsätze?",
},
{
  id: "intelligence",
  label: "🧠 Wer ist am intelligentesten?",
},
{
  id: "boxOffice",
  label: "💰 Welcher Film hat mehr eingespielt?",
},
{
  id: "imdb",
  label: "⭐ Welcher Film hat die höhere IMDb-Wertung?",
},
{
  id: "watchRate",
  label: "👀 Welcher Film hat die höhere Schaurate?",
},
  {
    id: "fame",
    label: "🌟 Wer ist am bekanntesten?",
  },
  {
    id: "attractiveness",
    label: "❤️ Wer ist am attraktivsten?",
  },
  {
    "id": "runes",
    "label": "✨ Wer gibt die meisten Runen? (NG)"
  },
  {
    "id": "bossDifficulty",
    "label": "⚔️ Welcher Boss ist schwieriger? (Spielwertung)"
  },
  {
    "id": "magicPower",
    "label": "🔮 Wer hat mehr magische Macht? (Spielwertung)"
  },
];

function defineDealCharacters(characters: DealCharacter[]): DealCharacter[] {
  return characters;
}

export const dealCharacters: DealCharacter[] = [
  ...defineDealCharacters([
  // =========================
  // STAR WARS
  // =========================
  {
    name: "Ahsoka Tano",
    category: "star-wars",
    kills: 40,
    height: 179,
    age: 45, // [ABLEITUNG] Geburt 36 BBY plus Referenzjahr 9 ABY; Jahresalter; https://starwars.fandom.com/wiki/Ahsoka_Tano
    strength: 91,
    intelligence: 88,
    fame: 92,
    attractiveness: 88,
  },
  {
    name: "Anakin Skywalker",
    category: "star-wars",
    kills: 80,
    height: 188,
    age: 22, // Episode III; Kanon-Geburtsjahr 41 BBY.
    strength: 97,
    intelligence: 86,
    fame: 98,
    attractiveness: 92,
  },
  {
    name: "Boba Fett",
    category: "star-wars",
    kills: 20,
    height: 183,
    age: 41, // [ABLEITUNG] Geburt 32 BBY plus Referenzjahr 9 ABY; Jahresalter; https://starwars.fandom.com/wiki/Boba_Fett
    strength: 83,
    intelligence: 84,
    fame: 94,
    attractiveness: 78,
  },
  {
    name: "C-3PO",
    category: "star-wars",
    kills: 0,
    height: 177,
    age: 67, // [SCHAETZUNG] Episode IX; seit Anakins Wiederaufbau, nicht gesichertes Gesamtalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 18,
    intelligence: 87,
    fame: 95,
    attractiveness: 55,
  },
  {
    name: "Chewbacca",
    category: "star-wars",
    kills: 30,
    height: 228,
    age: 190, // [BELEGT] Solo: A Star Wars Story; https://www.starwars.com/databank/chewbacca/
    strength: 88,
    intelligence: 76,
    fame: 97,
    attractiveness: 62,
  },
  {
    name: "Count Dooku",
    category: "star-wars",
    kills: 20,
    height: 193,
    age: 83, // Episode III; Kanon-Geburtsjahr 102 BBY.
    strength: 93,
    intelligence: 94,
    fame: 85,
    attractiveness: 76,
  },
  {
    name: "Darth Vader",
    category: "star-wars",
    kills: 100,
    height: 203,
    age: 45, // Episode VI; Kanon-Geburtsjahr 41 BBY.
    strength: 98,
    intelligence: 90,
    fame: 100,
    attractiveness: 81,
  },
  {
    name: "Finn",
    category: "star-wars",
    kills: 15,
    height: 178,
    age: 24, // [ABLEITUNG] Episode IX; berechnet: 35 ABY minus 11 ABY; https://starwars.fandom.com/wiki/Finn
    strength: 69,
    intelligence: 72,
    fame: 83,
    attractiveness: 87,
  },
  {
    name: "General Grievous",
    category: "star-wars",
    kills: 40,
    height: 216,
    age: 50, // [SCHAETZUNG] Episode III; organisches Lebensalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 89,
    intelligence: 83,
    fame: 88,
    attractiveness: 30,
  },
  {
    name: "Grogu",
    category: "star-wars",
    kills: 3,
    height: 34,
    age: 50, // The Mandalorian, Staffel 1.
    strength: 74,
    intelligence: 60,
    fame: 97,
    attractiveness: 90,
  },
  {
    name: "Han Solo",
    category: "star-wars",
    kills: 35,
    height: 180,
    age: 66, // Episode VII; Kanon-Geburtsjahr 32 BBY.
    strength: 73,
    intelligence: 85,
    fame: 98,
    attractiveness: 91,
  },
  {
    name: "Jabba the Hutt",
    category: "star-wars",
    kills: 0,
    height: 175, // [SCHAETZUNG] Episode VI; Hoehe im Sitzen, nicht Koerperlaenge; angenaeherte Bildschirmgestalt in cm
    age: 604, // [BELEGT] StarWars.com: 604 Jahre bei seinem Tod in Episode VI; https://www.starwars.com/news/hutt-history
    strength: 52,
    intelligence: 82,
    fame: 89,
    attractiveness: 12,
  },
  {
    name: "Kylo Ren",
    category: "star-wars",
    kills: 20,
    height: 189, // [BELEGT] DK Character Encyclopedia; Groesse in cm; DK: Star Wars Character Encyclopedia, Updated and Expanded
    age: 30, // Episode IX; Kanon-Geburtsjahr 5 ABY.
    strength: 92,
    intelligence: 80,
    fame: 94,
    attractiveness: 91,
  },
  {
    name: "Lando Calrissian",
    category: "star-wars",
    kills: 10,
    height: 178,
    age: 78, // Ungefährer Wert in Episode IX; The Rise of Skywalker: The Visual Dictionary.
    strength: 65,
    intelligence: 86,
    fame: 87,
    attractiveness: 92,
  },
  {
    name: "Leia Organa",
    category: "star-wars",
    kills: 15,
    height: 150,
    age: 54, // Episode IX; Kanon-Geburtsjahr 19 BBY.
    strength: 72,
    intelligence: 92,
    fame: 98,
    attractiveness: 91,
  },
  {
    name: "Luke Skywalker",
    category: "star-wars",
    kills: 35,
    height: 172,
    age: 53, // Episode VIII; Kanon-Geburtsjahr 19 BBY.
    strength: 97,
    intelligence: 88,
    fame: 100,
    attractiveness: 88,
  },
  {
    name: "Mace Windu",
    category: "star-wars",
    kills: 25,
    height: 192,
    age: 53, // [ABLEITUNG] Episode III; berechnet: 72 BBY minus 19 BBY; https://starwars.fandom.com/wiki/Mace_Windu
    strength: 96,
    intelligence: 90,
    fame: 89,
    attractiveness: 82,
  },
  {
    name: "Mandalorian",
    category: "star-wars",
    kills: 50,
    height: 180,
    age: 40, // [SCHAETZUNG] The Mandalorian, Staffel 1; Jahre, kein gesicherter exakter Kanonwert
    strength: 85,
    intelligence: 80,
    fame: 92,
    attractiveness: 90,
  },
  {
    name: "Obi-Wan Kenobi",
    category: "star-wars",
    kills: 35,
    height: 182,
    age: 56, // Episode IV; Kanon-Zeitlinie mit Handlung in 1 BBY und Geburt in 57 BBY.
    strength: 94,
    intelligence: 92,
    fame: 98,
    attractiveness: 91,
  },
  {
    name: "Padmé Amidala",
    category: "star-wars",
    kills: 10,
    height: 165,
    age: 27, // Episode III; Kanon-Geburtsjahr 46 BBY.
    strength: 61,
    intelligence: 91,
    fame: 90,
    attractiveness: 94,
  },
  {
    name: "Palpatine",
    category: "star-wars",
    kills: 15,
    height: 173,
    age: 88, // [ABLEITUNG] Kanon-Geburt 84 BBY plus Episode VI 4 ABY; Jahresalter; https://starwars.fandom.com/wiki/Darth_Sidious
    strength: 99,
    intelligence: 100,
    fame: 98,
    attractiveness: 35,
  },
  {
    name: "Qui-Gon Jinn",
    category: "star-wars",
    kills: 10,
    height: 193,
    age: 48, // Ungefährer Wert in Episode I; Kanon-Geburtsjahr circa 80 BBY.
    strength: 91,
    intelligence: 91,
    fame: 88,
    attractiveness: 90,
  },
  {
    name: "R2-D2",
    category: "star-wars",
    kills: 2,
    height: 109,
    age: 80, // [SCHAETZUNG] Episode IX; Zeit seit Herstellung; Jahre, kein gesicherter exakter Kanonwert
    strength: 30,
    intelligence: 93,
    fame: 97,
    attractiveness: 80,
  },
  {
    name: "Rey",
    category: "star-wars",
    kills: 10,
    height: 170,
    age: 20, // Episode IX; Kanon-Geburtsjahr 15 ABY.
    strength: 93,
    intelligence: 82,
    fame: 93,
    attractiveness: 91,
  },
  {
    name: "Yoda",
    category: "star-wars",
    kills: 10,
    height: 66,
    age: 900, // Episode VI; Alter bei seinem Tod.
    strength: 99,
    intelligence: 98,
    fame: 100,
    attractiveness: 35,
  },
    {
    name: "Darth Maul",
    category: "star-wars",
    kills: 35,
    height: 184,
    age: 52, // [ABLEITUNG] Rebels, bei seinem Tod; 54 BBY minus 2 BBY; https://starwars.fandom.com/wiki/Maul
    strength: 95,
    intelligence: 88,
    fame: 97,
    attractiveness: 90,
  },
  {
    name: "Jango Fett",
    category: "star-wars",
    kills: 30,
    height: 183,
    age: 44, // [ABLEITUNG] Episode II, bei seinem Tod; 66 BBY minus 22 BBY; https://starwars.fandom.com/wiki/Jango_Fett
    strength: 86,
    intelligence: 87,
    fame: 93,
    attractiveness: 88,
  },
  {
    name: "Cad Bane",
    category: "star-wars",
    kills: 40,
    height: 185,
    age: 71, // [SCHAETZUNG] The Book of Boba Fett; Jahre, kein gesicherter exakter Kanonwert
    strength: 81,
    intelligence: 93,
    fame: 89,
    attractiveness: 74,
  },
  {
    name: "Bo-Katan Kryze",
    category: "star-wars",
    kills: 35,
    height: 180,
    age: 50, // [SCHAETZUNG] The Mandalorian, Staffel 3; Jahre, kein gesicherter exakter Kanonwert
    strength: 84,
    intelligence: 88,
    fame: 90,
    attractiveness: 92,
  },
  {
    name: "Poe Dameron",
    category: "star-wars",
    kills: 20,
    height: 172,
    age: 33, // [ABLEITUNG] Episode IX; berechnet: 35 ABY minus 2 ABY; https://starwars.fandom.com/wiki/Poe_Dameron
    strength: 67,
    intelligence: 86,
    fame: 90,
    attractiveness: 92,
  },
  {
    name: "Captain Phasma",
    category: "star-wars",
    kills: 20,
    height: 200,
    age: 40, // [SCHAETZUNG] Episode VIII; Jahre, kein gesicherter exakter Kanonwert
    strength: 88,
    intelligence: 82,
    fame: 86,
    attractiveness: 80,
  },
  {
    name: "Grand Moff Tarkin",
    category: "star-wars",
    kills: 5,
    height: 185,
    age: 64, // [SCHAETZUNG] Episode IV; Jahre, kein gesicherter exakter Kanonwert
    strength: 45,
    intelligence: 97,
    fame: 92,
    attractiveness: 72,
  },
  {
    name: "Admiral Ackbar",
    category: "star-wars",
    kills: 5,
    height: 180,
    age: 90, // [SCHAETZUNG] Episode VIII; Jahre, kein gesicherter exakter Kanonwert
    strength: 52,
    intelligence: 94,
    fame: 92,
    attractiveness: 35,
  },
  {
    name: "Asajj Ventress",
    category: "star-wars",
    kills: 45,
    height: 179,
    age: 30, // [SCHAETZUNG] Spaete Clone-Wars-Zeit; Jahre, kein gesicherter exakter Kanonwert
    strength: 93,
    intelligence: 89,
    fame: 89,
    attractiveness: 91,
  },
  {
    name: "Kit Fisto",
    category: "star-wars",
    kills: 20,
    height: 196,
    age: 40, // [SCHAETZUNG] Episode III; Jahre, kein gesicherter exakter Kanonwert
    strength: 91,
    intelligence: 88,
    fame: 85,
    attractiveness: 78,
  },
    {
    name: "Captain Rex",
    category: "star-wars",
    kills: 55,
    height: 183,
    age: 13, // [ABLEITUNG] Geburt 32 BBY minus Ende Clone Wars 19 BBY; chronologisches Jahresalter; https://starwars.fandom.com/wiki/Rex
    strength: 86,
    intelligence: 91,
    fame: 92,
    attractiveness: 88,
  },
  {
    name: "Commander Cody",
    category: "star-wars",
    kills: 45,
    height: 183,
    age: 13, // [ABLEITUNG] Geburt 32 BBY minus Episode III 19 BBY; chronologisches Jahresalter; https://starwars.fandom.com/wiki/Cody
    strength: 85,
    intelligence: 89,
    fame: 88,
    attractiveness: 86,
  },
  {
    name: "Grand Admiral Thrawn",
    category: "star-wars",
    kills: 15,
    height: 193,
    age: 68, // [SCHAETZUNG] Ahsoka, 9 ABY; Jahre, kein gesicherter exakter Kanonwert
    strength: 74,
    intelligence: 100,
    fame: 93,
    attractiveness: 89,
  },
  {
    name: "Moff Gideon",
    category: "star-wars",
    kills: 25,
    height: 183,
    age: 55, // [SCHAETZUNG] The Mandalorian; Jahre, kein gesicherter exakter Kanonwert
    strength: 79,
    intelligence: 94,
    fame: 90,
    attractiveness: 82,
  },
  {
    name: "Fennec Shand",
    category: "star-wars",
    kills: 35,
    height: 163, // [SCHAETZUNG] The Book of Boba Fett; angenaeherte Bildschirmgestalt in cm
    age: 50, // [SCHAETZUNG] The Book of Boba Fett; Jahre, kein gesicherter exakter Kanonwert
    strength: 80,
    intelligence: 91,
    fame: 87,
    attractiveness: 91,
  },
  {
    name: "Kanan Jarrus",
    category: "star-wars",
    kills: 30,
    height: 191,
    age: 32, // [ABLEITUNG] Geburt 33 BBY minus Tod 1 BBY; Jahresalter; https://starwars.fandom.com/wiki/Kanan_Jarrus
    strength: 91,
    intelligence: 89,
    fame: 89,
    attractiveness: 92,
  },
  {
    name: "Ezra Bridger",
    category: "star-wars",
    kills: 20,
    height: 182,
    age: 28, // [ABLEITUNG] Geburt 19 BBY plus Ahsoka-Referenzjahr 9 ABY; Jahresalter; https://starwars.fandom.com/wiki/Ezra_Bridger
    strength: 88,
    intelligence: 86,
    fame: 90,
    attractiveness: 89,
  },
  {
    name: "Sabine Wren",
    category: "star-wars",
    kills: 30,
    height: 171,
    age: 30, // [ABLEITUNG] Geburt 21 BBY plus Ahsoka-Referenzjahr 9 ABY; Jahresalter; https://starwars.fandom.com/wiki/Sabine_Wren
    strength: 82,
    intelligence: 91,
    fame: 89,
    attractiveness: 94,
  },
  {
    name: "Hera Syndulla",
    category: "star-wars",
    kills: 15,
    height: 173,
    age: 38, // [ABLEITUNG] Geburt 29 BBY plus Ahsoka-Referenzjahr 9 ABY; Jahresalter; https://starwars.fandom.com/wiki/Hera_Syndulla
    strength: 70,
    intelligence: 96,
    fame: 88,
    attractiveness: 92,
  },
  {
    name: "Plo Koon",
    category: "star-wars",
    kills: 25,
    height: 188,
    age: 300, // [SPIELWERT] Episode III; grober Spielwert fuer langlebigen Kel Dor; Jahre, kein gesicherter exakter Kanonwert
    strength: 94,
    intelligence: 93,
    fame: 87,
    attractiveness: 73,
  },
  {
    name: "Aayla Secura",
    category: "star-wars",
    kills: 25,
    height: 170,
    age: 30, // [SCHAETZUNG] Episode III; Jahre, kein gesicherter exakter Kanonwert
    strength: 91,
    intelligence: 88,
    fame: 88,
    attractiveness: 95,
  },
  {
    name: "Savage Opress",
    category: "star-wars",
    kills: 40,
    height: 189,
    age: 35, // [SCHAETZUNG] The Clone Wars; Jahre, kein gesicherter exakter Kanonwert
    strength: 98,
    intelligence: 72,
    fame: 87,
    attractiveness: 65,
  },
  {
    name: "Pre Vizsla",
    category: "star-wars",
    kills: 30,
    height: 184,
    age: 40, // [SCHAETZUNG] The Clone Wars; Jahre, kein gesicherter exakter Kanonwert
    strength: 88,
    intelligence: 89,
    fame: 85,
    attractiveness: 88,
  },
  {
    name: "Nute Gunray",
    category: "star-wars",
    kills: 0,
    height: 191,
    age: 60, // [SCHAETZUNG] Episode III; Jahre, kein gesicherter exakter Kanonwert
    strength: 35,
    intelligence: 85,
    fame: 86,
    attractiveness: 38,
  },
  {
    name: "Wedge Antilles",
    category: "star-wars",
    kills: 20,
    height: 170,
    age: 56, // [SCHAETZUNG] Episode IX; Jahre, kein gesicherter exakter Kanonwert
    strength: 64,
    intelligence: 91,
    fame: 86,
    attractiveness: 87,
  },

  // =========================
  // Weitere Star-Wars-Figuren aus dem aktuellen Kanon.
  // Kills und die Bewertungen von 0 bis 100 sind Spielschätzungen.
  // Unbekannte Angaben bleiben null; Alter bezieht sich auf den angegebenen Auftritt.
  {
    name: "Jar Jar Binks",
    category: "star-wars",
    kills: 5,
    height: 196,
    age: 33, // [SCHAETZUNG] Episode III; Jahre, kein gesicherter exakter Kanonwert
    strength: 42,
    intelligence: 35,
    fame: 94,
    attractiveness: 25,
  },
  {
    name: "BB-8",
    category: "star-wars",
    kills: 5,
    height: 67,
    age: 6, // [ABLEITUNG] Episode IX; seit Herstellung 29 ABY; https://starwars.fandom.com/wiki/BB-8
    strength: 22,
    intelligence: 86,
    fame: 93,
    attractiveness: 0,
  },
  {
    name: "Snoke",
    category: "star-wars",
    kills: 10,
    height: 218,
    age: 80, // [SCHAETZUNG] Episode VIII; angenaehertes Erscheinungsalter, Klonalter unbekannt; Jahre, kein gesicherter exakter Kanonwert
    strength: 95,
    intelligence: 91,
    fame: 90,
    attractiveness: 12,
  },
  {
    name: "Cassian Andor",
    category: "star-wars",
    kills: 25,
    height: 178,
    age: 27, // [BELEGT] Dawn of Rebellion Visual Guide laut Kanon-Wiki: 27 in Andor Staffel 1; widerspricht altem Rogue-One-Guide; https://starwars.fandom.com/wiki/Cassian_Jeron_Andor
    strength: 76,
    intelligence: 92,
    fame: 90,
    attractiveness: 88,
  },
  {
    name: "Jyn Erso",
    category: "star-wars",
    kills: 15,
    height: 160,
    age: 21, // Rogue One; Altersangabe aus Kanon-Referenzliteratur.
    strength: 72,
    intelligence: 87,
    fame: 89,
    attractiveness: 90,
  },
  {
    name: "K-2SO",
    category: "star-wars",
    kills: 30,
    height: 216,
    age: 15, // [SCHAETZUNG] Rogue One; Zeit seit Herstellung; Jahre, kein gesicherter exakter Kanonwert
    strength: 83,
    intelligence: 93,
    fame: 88,
    attractiveness: 0,
  },
  {
    name: "General Hux",
    category: "star-wars",
    kills: 5,
    height: 185,
    age: 35, // Ungefährer Wert in Episode VII; Kanon-Geburtsjahr 1 BBY.
    strength: 53,
    intelligence: 85,
    fame: 87,
    attractiveness: 76,
  },
  {
    name: "Maz Kanata",
    category: "star-wars",
    kills: 5,
    height: 124,
    age: 1007, // [BELEGT] Rise of Skywalker Visual Dictionary laut Kanon-Wiki: geboren 1007 Jahre vor Starkiller-Vorfall in Episode VII; https://starwars.fandom.com/wiki/Maz_Kanata
    strength: 58,
    intelligence: 96,
    fame: 86,
    attractiveness: 24,
  },
  {
    name: "Greedo",
    category: "star-wars",
    kills: 5,
    height: 174,
    age: 40, // [SCHAETZUNG] Episode IV; Jahre, kein gesicherter exakter Kanonwert
    strength: 57,
    intelligence: 52,
    fame: 86,
    attractiveness: 23,
  },
  {
    name: "Wicket",
    category: "star-wars",
    kills: 5,
    height: 80,
    age: 11, // Ungefährer Wert in Episode VI; Kanon-Geburtsjahr 7 BBY.
    strength: 38,
    intelligence: 70,
    fame: 85,
    attractiveness: 15,
  },
  {
    name: "Watto",
    category: "star-wars",
    kills: 0,
    height: 137,
    age: 50, // [SCHAETZUNG] Episode I; Jahre, kein gesicherter exakter Kanonwert
    strength: 31,
    intelligence: 77,
    fame: 84,
    attractiveness: 12,
  },
  {
    name: "Mon Mothma",
    category: "star-wars",
    kills: 0,
    height: 150,
    age: 48, // Ungefährer Wert um Rogue One; Kanon-Geburtsjahr circa 48 BBY.
    strength: 35,
    intelligence: 96,
    fame: 84,
    attractiveness: 83,
  },
  {
    name: "Orson Krennic",
    category: "star-wars",
    kills: 5,
    height: 180,
    age: 51, // Rogue One; The Ultimate Visual Guide nennt 51 Jahre.
    strength: 58,
    intelligence: 94,
    fame: 83,
    attractiveness: 75,
  },
  {
    name: "Rose Tico",
    category: "star-wars",
    kills: 5,
    height: 157,
    age: 23, // Ungefährer Wert in Episode VIII; Kanon-Geburtsjahr circa 11 ABY.
    strength: 54,
    intelligence: 86,
    fame: 82,
    attractiveness: 80,
  },
  {
    name: "Owen Lars",
    category: "star-wars",
    kills: 0,
    height: 178,
    age: 50, // [SCHAETZUNG] Episode IV; Jahre, kein gesicherter exakter Kanonwert
    strength: 48,
    intelligence: 76,
    fame: 82,
    attractiveness: 61,
  },
  {
    name: "Bail Organa",
    category: "star-wars",
    kills: 0,
    height: 199,
    age: 65, // [SCHAETZUNG] Episode IV; Jahre, kein gesicherter exakter Kanonwert
    strength: 45,
    intelligence: 93,
    fame: 82,
    attractiveness: 85,
  },
  {
    name: "Shmi Skywalker",
    category: "star-wars",
    kills: 0,
    height: 163,
    age: 50, // [SCHAETZUNG] Episode II; Jahre, kein gesicherter exakter Kanonwert
    strength: 31,
    intelligence: 78,
    fame: 81,
    attractiveness: 71,
  },
  {
    name: "Greef Karga",
    category: "star-wars",
    kills: 5,
    height: 188,
    age: 65, // [SCHAETZUNG] The Mandalorian; Jahre, kein gesicherter exakter Kanonwert
    strength: 63,
    intelligence: 87,
    fame: 80,
    attractiveness: 72,
  },
  {
    name: "IG-11",
    category: "star-wars",
    kills: 45,
    height: 193, // The Secrets of the Bounty Hunters (2022); andere Quelle nennt 219 cm.
    age: 10, // [SCHAETZUNG] The Mandalorian, Staffel 1; Zeit seit Herstellung; Jahre, kein gesicherter exakter Kanonwert
    strength: 86,
    intelligence: 84,
    fame: 80,
    attractiveness: 0,
  },
  {
    name: "Saw Gerrera",
    category: "star-wars",
    kills: 30,
    height: 187,
    age: 50, // [SCHAETZUNG] Rogue One; Jahre, kein gesicherter exakter Kanonwert
    strength: 74,
    intelligence: 88,
    fame: 79,
    attractiveness: 53,
  },
  {
    name: "Chopper",
    category: "star-wars",
    kills: 45,
    height: 104,
    age: 20, // [SCHAETZUNG] Spaete Rebels-Zeit; Droide bereits waehrend Clone Wars aktiv; Jahre, kein gesicherter exakter Kanonwert
    strength: 38,
    intelligence: 89,
    fame: 79,
    attractiveness: 0,
  },
  {
    name: "Hondo Ohnaka",
    category: "star-wars",
    kills: 20,
    height: 185,
    age: 65, // [SCHAETZUNG] Rebels; Jahre, kein gesicherter exakter Kanonwert
    strength: 67,
    intelligence: 91,
    fame: 78,
    attractiveness: 40,
  },
  {
    name: "Chirrut Îmwe",
    category: "star-wars",
    kills: 20,
    height: 173,
    age: 52, // [BELEGT] Rogue One Ultimate Visual Guide laut Kanon-Wiki: 52 bei der Mission; https://starwars.fandom.com/wiki/Chirrut_%C3%8Emwe
    strength: 78,
    intelligence: 88,
    fame: 78,
    attractiveness: 85,
  },
  {
    name: "Shaak Ti",
    category: "star-wars",
    kills: 25,
    height: 187,
    age: 50, // [SCHAETZUNG] Episode III; Jahre, kein gesicherter exakter Kanonwert
    strength: 92,
    intelligence: 92,
    fame: 77,
    attractiveness: 84,
  },
  {
    name: "Sebulba",
    category: "star-wars",
    kills: 5,
    height: 112,
    age: 45, // [SCHAETZUNG] Episode I; Jahre, kein gesicherter exakter Kanonwert
    strength: 43,
    intelligence: 68,
    fame: 76,
    attractiveness: 10,
  },

  // Weitere 25 Kanon-Figuren. Bewertungen und Kills sind Spielschätzungen.
  {
    name: "Ki-Adi-Mundi",
    category: "star-wars",
    kills: 25,
    height: 198,
    age: 150, // [SCHAETZUNG] Episode III; beruecksichtigt sein Auftreten in The Acolyte, kein Legends-Alter; Jahre, kein gesicherter exakter Kanonwert
    strength: 92,
    intelligence: 90,
    fame: 88,
    attractiveness: 60,
  },
  {
    name: "Bossk",
    category: "star-wars",
    kills: 35,
    height: 206,
    age: 60, // [SCHAETZUNG] Episode V; Jahre, kein gesicherter exakter Kanonwert
    strength: 81,
    intelligence: 76,
    fame: 87,
    attractiveness: 25,
  },
  {
    name: "Dengar",
    category: "star-wars",
    kills: 25,
    height: 187,
    age: 60, // [SCHAETZUNG] Episode V; Jahre, kein gesicherter exakter Kanonwert
    strength: 72,
    intelligence: 77,
    fame: 82,
    attractiveness: 38,
  },
  {
    name: "IG-88",
    category: "star-wars",
    kills: 40,
    height: 196,
    age: 15, // [SCHAETZUNG] Episode V; Zeit seit Herstellung; Jahre, kein gesicherter exakter Kanonwert
    strength: 85,
    intelligence: 91,
    fame: 86,
    attractiveness: 0,
  },
  {
    name: "Nien Nunb",
    category: "star-wars",
    kills: 15,
    height: 160,
    age: 45, // [SCHAETZUNG] Episode VI; Jahre, kein gesicherter exakter Kanonwert
    strength: 56,
    intelligence: 84,
    fame: 84,
    attractiveness: 30,
  },
  {
    name: "Luthen Rael",
    category: "star-wars",
    kills: 15,
    height: 190, // [SCHAETZUNG] Andor, Staffel 1; angenaeherte Bildschirmgestalt in cm
    age: 60, // [SCHAETZUNG] Andor, Staffel 1; Jahre, kein gesicherter exakter Kanonwert
    strength: 66,
    intelligence: 98,
    fame: 87,
    attractiveness: 72,
  },
  {
    name: "Großinquisitor",
    category: "star-wars",
    kills: 30,
    height: 198, // [BELEGT] Rebels: Head-to-Head; laut Jedipedia; https://www.jedipedia.net/wiki/Gro%C3%9Finquisitor_%28Pau%E2%80%99aner%29
    age: 50, // [SCHAETZUNG] Rebels, Staffel 1; Jahre, kein gesicherter exakter Kanonwert
    strength: 90,
    intelligence: 92,
    fame: 86,
    attractiveness: 35,
  },
  {
    name: "Reva",
    category: "star-wars",
    kills: 20,
    height: 165, // [SCHAETZUNG] Obi-Wan Kenobi; ungefaehr zehn Jahre nach Order 66; angenaeherte Bildschirmgestalt in cm
    age: 20, // [SCHAETZUNG] Obi-Wan Kenobi; ungefaehr zehn Jahre nach Order 66; Jahre, kein gesicherter exakter Kanonwert
    strength: 84,
    intelligence: 82,
    fame: 82,
    attractiveness: 83,
  },
  {
    name: "Baylan Skoll",
    category: "star-wars",
    kills: 35,
    height: 190, // [SCHAETZUNG] Ahsoka; angenaeherte Bildschirmgestalt in cm
    age: 60, // [SCHAETZUNG] Ahsoka; Jahre, kein gesicherter exakter Kanonwert
    strength: 94,
    intelligence: 94,
    fame: 83,
    attractiveness: 78,
  },
  {
    name: "Shin Hati",
    category: "star-wars",
    kills: 15,
    height: 170, // [SCHAETZUNG] Ahsoka; angenaeherte Bildschirmgestalt in cm
    age: 25, // [SCHAETZUNG] Ahsoka; Jahre, kein gesicherter exakter Kanonwert
    strength: 87,
    intelligence: 80,
    fame: 80,
    attractiveness: 88,
  },
  {
    name: "Hunter",
    category: "star-wars",
    kills: 40,
    height: 180,
    age: 15, // [SCHAETZUNG] The Bad Batch, spaete Handlung; chronologisches Klonalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 85,
    intelligence: 91,
    fame: 85,
    attractiveness: 83,
  },
  {
    name: "Crosshair",
    category: "star-wars",
    kills: 50,
    height: 192,
    age: 15, // [SCHAETZUNG] The Bad Batch, spaete Handlung; chronologisches Klonalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 83,
    intelligence: 87,
    fame: 84,
    attractiveness: 71,
  },
  {
    name: "Wrecker",
    category: "star-wars",
    kills: 45,
    height: 210,
    age: 15, // [SCHAETZUNG] The Bad Batch, spaete Handlung; chronologisches Klonalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 94,
    intelligence: 62,
    fame: 83,
    attractiveness: 64,
  },
  {
    name: "Tech",
    category: "star-wars",
    kills: 25,
    height: 182,
    age: 14, // [SCHAETZUNG] The Bad Batch, Staffel 2; chronologisches Klonalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 74,
    intelligence: 97,
    fame: 84,
    attractiveness: 70,
  },
  {
    name: "Echo",
    category: "star-wars",
    kills: 35,
    height: 181,
    age: 15, // [SCHAETZUNG] The Bad Batch, spaete Handlung; chronologisches Klonalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 82,
    intelligence: 93,
    fame: 84,
    attractiveness: 61,
  },
  {
    name: "Omega",
    category: "star-wars",
    kills: 5,
    height: 129,
    age: 15, // [SCHAETZUNG] The Bad Batch, spaete Handlung; nicht erwachsener Epilog; Jahre, kein gesicherter exakter Kanonwert
    strength: 52,
    intelligence: 84,
    fame: 84,
    attractiveness: 0,
  },
  {
    name: "Fives",
    category: "star-wars",
    kills: 35,
    height: 183,
    age: 13, // [SCHAETZUNG] The Clone Wars; chronologisches Klonalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 85,
    intelligence: 90,
    fame: 86,
    attractiveness: 81,
  },
  {
    name: "Luminara Unduli",
    category: "star-wars",
    kills: 25,
    height: 176,
    age: 40, // [SCHAETZUNG] Ende Clone Wars; Jahre, kein gesicherter exakter Kanonwert
    strength: 91,
    intelligence: 93,
    fame: 82,
    attractiveness: 80,
  },
  {
    name: "Barriss Offee",
    category: "star-wars",
    kills: 10,
    height: 166,
    age: 20, // [SCHAETZUNG] The Clone Wars, Staffel 5; Jahre, kein gesicherter exakter Kanonwert
    strength: 86,
    intelligence: 90,
    fame: 82,
    attractiveness: 78,
  },
  {
    name: "Quinlan Vos",
    category: "star-wars",
    kills: 30,
    height: 191,
    age: 35, // [SCHAETZUNG] Spaete Clone-Wars-Zeit; Jahre, kein gesicherter exakter Kanonwert
    strength: 93,
    intelligence: 88,
    fame: 81,
    attractiveness: 86,
  },
  {
    name: "Yaddle",
    category: "star-wars",
    kills: 15,
    height: 61,
    age: 477, // [BELEGT] StarWars.com: 477 Jahre in Episode I; https://www.starwars.com/news/jedi-council
    strength: 93,
    intelligence: 96,
    fame: 83,
    attractiveness: 24,
  },
  {
    name: "Baze Malbus",
    category: "star-wars",
    kills: 35,
    height: 180, // [BELEGT] Kanon-Wiki nennt 1.80 m mit Databank-Verweis; 180 cm; https://starwars.fandom.com/wiki/Baze_Malbus
    age: 53, // [BELEGT] Rogue One Ultimate Visual Guide laut Kanon-Wiki: 53 bei der Mission; https://starwars.fandom.com/wiki/Baze_Malbus
    strength: 83,
    intelligence: 79,
    fame: 81,
    attractiveness: 59,
  },
  {
    name: "Bodhi Rook",
    category: "star-wars",
    kills: 5,
    height: 172, // [BELEGT] Kanon-Wiki nennt 1.72 m mit Databank-Verweis; 172 cm; https://starwars.fandom.com/wiki/Bodhi_Rook
    age: 25, // [SCHAETZUNG] Rogue One; Jahre, kein gesicherter exakter Kanonwert
    strength: 55,
    intelligence: 81,
    fame: 80,
    attractiveness: 76,
  },
  {
    name: "Dexter Jettster",
    category: "star-wars",
    kills: 0,
    height: 188,
    age: 60, // [SCHAETZUNG] Episode II; Jahre, kein gesicherter exakter Kanonwert
    strength: 61,
    intelligence: 85,
    fame: 82,
    attractiveness: 16,
  },
  {
    name: "Enfys Nest",
    category: "star-wars",
    kills: 20,
    height: 187,
    age: 16, // [SCHAETZUNG] Solo; junge Anfuehrerin der Cloud-Riders; Jahre, kein gesicherter exakter Kanonwert
    strength: 78,
    intelligence: 89,
    fame: 80,
    attractiveness: 76,
  },
  ]),
  ...defineDealCharacters([

  // =========================
  // MARVEL
  // =========================
  {
    name: "Ant-Man",
    category: "marvel",
    kills: 15,
    height: 183,
    age: 50,
    strength: 86,
    intelligence: 85,
    fame: 88,
    attractiveness: 86,
  },
  {
    name: "Black Panther",
    category: "marvel",
    kills: 30,
    height: 183,
    age: 38,
    strength: 88,
    intelligence: 91,
    fame: 95,
    attractiveness: 94,
  },
  {
    name: "Black Widow",
    category: "marvel",
    kills: 45,
    height: 160,
    age: 35,
    strength: 69,
    intelligence: 90,
    fame: 97,
    attractiveness: 96,
  },
  {
    name: "Captain America",
    category: "marvel",
    kills: 60,
    height: 188,
    age: 106,
    strength: 84,
    intelligence: 88,
    fame: 100,
    attractiveness: 95,
  },
  {
    name: "Captain Marvel",
    category: "marvel",
    kills: 45,
    height: 170,
    age: 60,
    strength: 99,
    intelligence: 84,
    fame: 92,
    attractiveness: 91,
  },
  {
    name: "Daredevil",
    category: "marvel",
    kills: 5,
    height: 178,
    age: 35,
    strength: 72,
    intelligence: 88,
    fame: 87,
    attractiveness: 91,
  },
  {
    name: "Deadpool",
    category: "marvel",
    kills: 100,
    height: 188,
    age: 45,
    strength: 83,
    intelligence: 76,
    fame: 97,
    attractiveness: 83,
  },
  {
    name: "Doctor Strange",
    category: "marvel",
    kills: 25,
    height: 183,
    age: 45,
    strength: 98,
    intelligence: 98,
    fame: 95,
    attractiveness: 90,
  },
  {
    name: "Drax",
    category: "marvel",
    kills: 80,
    height: 193,
    age: 50,
    strength: 88,
    intelligence: 58,
    fame: 89,
    attractiveness: 78,
  },
  {
    name: "Gamora",
    category: "marvel",
    kills: 75,
    height: 170,
    age: 30,
    strength: 87,
    intelligence: 86,
    fame: 91,
    attractiveness: 93,
  },
  {
    name: "Groot",
    category: "marvel",
    kills: 25,
    height: 230,
    age: 7, // [SCHAETZUNG] Neuer Groot in Guardians Vol. 3; biologisch, Blip-Zeit ausgenommen; Jahre, kein gesicherter exakter Kanonwert
    strength: 90,
    intelligence: 62,
    fame: 96,
    attractiveness: 75,
  },
  {
    name: "Hawkeye",
    category: "marvel",
    kills: 50,
    height: 175,
    age: 52,
    strength: 68,
    intelligence: 87,
    fame: 94,
    attractiveness: 86,
  },
  {
    name: "Hulk",
    category: "marvel",
    kills: 80,
    height: 250,
    age: 55,
    strength: 100,
    intelligence: 96,
    fame: 100,
    attractiveness: 65,
  },
  {
    name: "Iron Man",
    category: "marvel",
    kills: 70,
    height: 185,
    age: 53,
    strength: 95,
    intelligence: 100,
    fame: 100,
    attractiveness: 95,
  },
  {
    name: "Loki",
    category: "marvel",
    kills: 40,
    height: 188,
    age: 1050,
    strength: 94,
    intelligence: 96,
    fame: 100,
    attractiveness: 96,
  },
  {
    name: "Moon Knight",
    category: "marvel",
    kills: 20,
    height: 188,
    age: 40,
    strength: 80,
    intelligence: 81,
    fame: 82,
    attractiveness: 88,
  },
  {
    name: "Rocket",
    category: "marvel",
    kills: 40,
    height: 122,
    age: 15,
    strength: 75,
    intelligence: 94,
    fame: 92,
    attractiveness: 65,
  },
  {
    name: "Scarlet Witch",
    category: "marvel",
    kills: 45,
    height: 168,
    age: 30,
    strength: 100,
    intelligence: 88,
    fame: 97,
    attractiveness: 92,
  },
  {
    name: "Spider-Man",
    category: "marvel",
    kills: 30,
    height: 173,
    age: 18,
    strength: 91,
    intelligence: 96,
    fame: 100,
    attractiveness: 91,
  },
  {
    name: "Star-Lord",
    category: "marvel",
    kills: 45,
    height: 188,
    age: 43,
    strength: 76,
    intelligence: 82,
    fame: 93,
    attractiveness: 91,
  },
  {
    name: "Thanos",
    category: "marvel",
    kills: 100,
    height: 250,
    age: 1000,
    strength: 100,
    intelligence: 95,
    fame: 100,
    attractiveness: 67,
  },
  {
    name: "Thor",
    category: "marvel",
    kills: 150,
    height: 198,
    age: 1500,
    strength: 100,
    intelligence: 82,
    fame: 100,
    attractiveness: 98,
  },
  {
    name: "Venom",
    category: "marvel",
    kills: 35,
    height: 230,
    age: 100, // [SPIELWERT] Venom-Filme; Symbiont, nicht Eddie Brock; grober Spielwert; Jahre, kein gesicherter exakter Kanonwert
    strength: 94,
    intelligence: 72,
    fame: 96,
    attractiveness: 72,
  },
  {
    name: "Vision",
    category: "marvel",
    kills: 20,
    height: 190,
    age: 3,
    strength: 97,
    intelligence: 100,
    fame: 94,
    attractiveness: 83,
  },
  {
    name: "Wolverine",
    category: "marvel",
    kills: 150,
    height: 188,
    age: 200,
    strength: 90,
    intelligence: 79,
    fame: 100,
    attractiveness: 94,
  },
    {
    name: "Winter Soldier",
    category: "marvel",
    kills: 60,
    height: 183,
    age: 106,
    strength: 78,
    intelligence: 86,
    fame: 94,
    attractiveness: 94,
  },
  {
    name: "Falcon",
    category: "marvel",
    kills: 30,
    height: 183,
    age: 42,
    strength: 73,
    intelligence: 87,
    fame: 93,
    attractiveness: 92,
  },
  {
    name: "War Machine",
    category: "marvel",
    kills: 50,
    height: 185,
    age: 50,
    strength: 90,
    intelligence: 89,
    fame: 92,
    attractiveness: 88,
  },
  {
    name: "Nick Fury",
    category: "marvel",
    kills: 25,
    height: 183,
    age: 70,
    strength: 63,
    intelligence: 97,
    fame: 96,
    attractiveness: 84,
  },
  {
    name: "Mysterio",
    category: "marvel",
    kills: 10,
    height: 183,
    age: 40,
    strength: 79,
    intelligence: 94,
    fame: 91,
    attractiveness: 90,
  },
  {
    name: "Green Goblin",
    category: "marvel",
    kills: 35,
    height: 180,
    age: 55,
    strength: 86,
    intelligence: 98,
    fame: 97,
    attractiveness: 72,
  },
  {
    name: "Doctor Octopus",
    category: "marvel",
    kills: 20,
    height: 175,
    age: 55,
    strength: 84,
    intelligence: 99,
    fame: 95,
    attractiveness: 75,
  },
  {
    name: "Magneto",
    category: "marvel",
    kills: 100,
    height: 188,
    age: 90,
    strength: 99,
    intelligence: 96,
    fame: 100,
    attractiveness: 90,
  },
  {
    name: "Professor X",
    category: "marvel",
    kills: 5,
    height: 183,
    age: 70,
    strength: 96,
    intelligence: 100,
    fame: 98,
    attractiveness: 82,
  },
  {
    name: "Silver Surfer",
    category: "marvel",
    kills: 30,
    height: 193,
    age: 1000,
    strength: 100,
    intelligence: 95,
    fame: 96,
    attractiveness: 93,
  },
    {
    name: "Punisher",
    category: "marvel",
    kills: 150,
    height: 185,
    age: 45,
    strength: 68,
    intelligence: 88,
    fame: 94,
    attractiveness: 90,
  },
  {
    name: "Blade",
    category: "marvel",
    kills: 120,
    height: 188,
    age: 55,
    strength: 82,
    intelligence: 86,
    fame: 93,
    attractiveness: 91,
  },
  {
    name: "Ghost Rider",
    category: "marvel",
    kills: 180,
    height: 188,
    age: 40,
    strength: 99,
    intelligence: 82,
    fame: 97,
    attractiveness: 84,
  },
  {
    name: "Shang-Chi",
    category: "marvel",
    kills: 25,
    height: 178,
    age: 30,
    strength: 84,
    intelligence: 87,
    fame: 91,
    attractiveness: 95,
  },
  {
    name: "Wasp",
    category: "marvel",
    kills: 15,
    height: 163,
    age: 35,
    strength: 82,
    intelligence: 92,
    fame: 88,
    attractiveness: 94,
  },
  {
    name: "Nebula",
    category: "marvel",
    kills: 70,
    height: 183,
    age: 35,
    strength: 82,
    intelligence: 86,
    fame: 91,
    attractiveness: 86,
  },
  {
    name: "Ultron",
    category: "marvel",
    kills: 500,
    height: 205,
    age: 1,
    strength: 99,
    intelligence: 100,
    fame: 97,
    attractiveness: 60,
  },
  {
    name: "Red Skull",
    category: "marvel",
    kills: 80,
    height: 188,
    age: 100,
    strength: 74,
    intelligence: 94,
    fame: 93,
    attractiveness: 45,
  },
  {
    name: "Hela",
    category: "marvel",
    kills: 200,
    height: 175,
    age: 3000,
    strength: 100,
    intelligence: 92,
    fame: 96,
    attractiveness: 96,
  },
  {
    name: "Kingpin",
    category: "marvel",
    kills: 35,
    height: 201,
    age: 50,
    strength: 71,
    intelligence: 97,
    fame: 92,
    attractiveness: 72,
  },
  {
    name: "Cyclops",
    category: "marvel",
    kills: 30,
    height: 190,
    age: 35,
    strength: 92,
    intelligence: 90,
    fame: 94,
    attractiveness: 94,
  },
  {
    name: "Storm",
    category: "marvel",
    kills: 40,
    height: 180,
    age: 35,
    strength: 97,
    intelligence: 91,
    fame: 97,
    attractiveness: 98,
  },
  {
    name: "Jean Grey",
    category: "marvel",
    kills: 60,
    height: 168,
    age: 35,
    strength: 100,
    intelligence: 96,
    fame: 97,
    attractiveness: 98,
  },
  {
    name: "Beast",
    category: "marvel",
    kills: 20,
    height: 191,
    age: 40,
    strength: 80,
    intelligence: 100,
    fame: 91,
    attractiveness: 74,
  },
  {
    name: "Adam Warlock",
    category: "marvel",
    kills: 30,
    height: 188,
    age: 1,
    strength: 99,
    intelligence: 90,
    fame: 90,
    attractiveness: 94,
  },

  // Weitere 50 Figuren: ausschließlich Film- und Serienversionen.
  // Spielbewertungen sind Schätzwerte; unbelegte Größe/Alter bleiben null.
  // Reed Richards – Pedro Pascal; The Fantastic Four: First Steps (2025)
  {
    name: "Mister Fantastic",
    category: "marvel",
    kills: 5,
    height: 180, // [SCHAETZUNG] The Fantastic Four: First Steps; normale Koerpergroesse; angenaeherte Bildschirmgestalt in cm
    age: 45, // [SCHAETZUNG] The Fantastic Four: First Steps; normale Koerpergroesse; Jahre, kein gesicherter exakter Kanonwert
    strength: 82,
    intelligence: 99,
    fame: 89,
    attractiveness: 77,
  },
  // Sue Storm – Vanessa Kirby; The Fantastic Four: First Steps (2025)
  {
    name: "Invisible Woman",
    category: "marvel",
    kills: 3,
    height: 170, // [SCHAETZUNG] The Fantastic Four: First Steps; angenaeherte Bildschirmgestalt in cm
    age: 35, // [SCHAETZUNG] The Fantastic Four: First Steps; Jahre, kein gesicherter exakter Kanonwert
    strength: 94,
    intelligence: 92,
    fame: 88,
    attractiveness: 89,
  },
  // Johnny Storm – Joseph Quinn; The Fantastic Four: First Steps (2025)
  {
    name: "Human Torch",
    category: "marvel",
    kills: 8,
    height: 180, // [SCHAETZUNG] The Fantastic Four: First Steps; angenaeherte Bildschirmgestalt in cm
    age: 30, // [SCHAETZUNG] The Fantastic Four: First Steps; Jahre, kein gesicherter exakter Kanonwert
    strength: 93,
    intelligence: 74,
    fame: 88,
    attractiveness: 86,
  },
  // Ben Grimm; The Fantastic Four: First Steps (2025)
  {
    name: "The Thing",
    category: "marvel",
    kills: 10,
    height: 210, // [SCHAETZUNG] The Fantastic Four: First Steps; verwandelte Form, Ben Grimms Lebensalter; angenaeherte Bildschirmgestalt in cm
    age: 45, // [SCHAETZUNG] The Fantastic Four: First Steps; verwandelte Form, Ben Grimms Lebensalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 96,
    intelligence: 76,
    fame: 91,
    attractiveness: 45,
  },
  // Victor von Doom – Julian McMahon; Fantastic Four (2005)
  {
    name: "Doctor Doom",
    category: "marvel",
    kills: 12,
    height: 188, // [SCHAETZUNG] Fantastic Four (2005), Julian-McMahon-Fassung; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Fantastic Four (2005), Julian-McMahon-Fassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 94,
    intelligence: 94,
    fame: 93,
    attractiveness: 49,
  },
  // Raven – Jennifer Lawrence; X-Men-Filmreihe
  {
    name: "Mystique",
    category: "marvel",
    kills: 35,
    height: 175, // [SCHAETZUNG] X-Men: First Class; uebliche menschliche Erscheinung; angenaeherte Bildschirmgestalt in cm
    age: 28, // [SCHAETZUNG] X-Men: First Class; uebliche menschliche Erscheinung; Jahre, kein gesicherter exakter Kanonwert
    strength: 78,
    intelligence: 88,
    fame: 92,
    attractiveness: 87,
  },
  // Kurt Wagner – Alan Cumming; X2 (2003)
  {
    name: "Nightcrawler",
    category: "marvel",
    kills: 3,
    height: 178, // [SCHAETZUNG] X2, Alan-Cumming-Fassung; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] X2, Alan-Cumming-Fassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 80,
    intelligence: 79,
    fame: 87,
    attractiveness: 66,
  },
  // Marie – Anna Paquin; X-Men-Filmreihe
  {
    name: "Rogue",
    category: "marvel",
    kills: 2,
    height: 165, // [SCHAETZUNG] X-Men (2000); angenaeherte Bildschirmgestalt in cm
    age: 17, // [SCHAETZUNG] X-Men (2000); Jahre, kein gesicherter exakter Kanonwert
    strength: 83,
    intelligence: 78,
    fame: 87,
    attractiveness: 0,
  },
  // Remy LeBeau – Channing Tatum; Deadpool & Wolverine (2024)
  {
    name: "Gambit",
    category: "marvel",
    kills: 15,
    height: 185, // [SCHAETZUNG] Deadpool & Wolverine; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Deadpool & Wolverine; Jahre, kein gesicherter exakter Kanonwert
    strength: 85,
    intelligence: 81,
    fame: 88,
    attractiveness: 84,
  },
  // Piotr Rasputin; Deadpool-Filmreihe
  {
    name: "Colossus",
    category: "marvel",
    kills: 3,
    height: 230, // [SCHAETZUNG] Deadpool-Filme; Metallform; angenaeherte Bildschirmgestalt in cm
    age: 30, // [SCHAETZUNG] Deadpool-Filme; Metallform; Jahre, kein gesicherter exakter Kanonwert
    strength: 94,
    intelligence: 79,
    fame: 84,
    attractiveness: 62,
  },
  // Cain Marko; Deadpool 2 (2018)
  {
    name: "Juggernaut",
    category: "marvel",
    kills: 20,
    height: 280, // [SCHAETZUNG] Deadpool 2; CGI-Figur; angenaeherte Bildschirmgestalt in cm
    age: 55, // [SCHAETZUNG] Deadpool 2; CGI-Figur; Jahre, kein gesicherter exakter Kanonwert
    strength: 98,
    intelligence: 49,
    fame: 82,
    attractiveness: 28,
  },
  // Bobby Drake – Shawn Ashmore; X-Men-Filmreihe
  {
    name: "Iceman",
    category: "marvel",
    kills: 5,
    height: 180, // [SCHAETZUNG] X2; angenaeherte Bildschirmgestalt in cm
    age: 18, // [SCHAETZUNG] X2; Jahre, kein gesicherter exakter Kanonwert
    strength: 89,
    intelligence: 79,
    fame: 84,
    attractiveness: 77,
  },
  // Peter Maximoff – Evan Peters; X-Men-Filmreihe
  {
    name: "Quicksilver",
    category: "marvel",
    kills: 5,
    height: 180, // [SCHAETZUNG] X-Men: Days of Future Past; Peter, nicht MCU-Pietro; angenaeherte Bildschirmgestalt in cm
    age: 20, // [SCHAETZUNG] X-Men: Days of Future Past; Peter, nicht MCU-Pietro; Jahre, kein gesicherter exakter Kanonwert
    strength: 88,
    intelligence: 79,
    fame: 89,
    attractiveness: 78,
  },
  // En Sabah Nur – Oscar Isaac; X-Men: Apocalypse (2016)
  {
    name: "Apocalypse",
    category: "marvel",
    kills: 250,
    height: 190, // [SCHAETZUNG] X-Men: Apocalypse; grober Gesamtalters-Spielwert; angenaeherte Bildschirmgestalt in cm
    age: 5500, // [SPIELWERT] X-Men: Apocalypse; grober Gesamtalters-Spielwert; Jahre, kein gesicherter exakter Kanonwert
    strength: 99,
    intelligence: 94,
    fame: 85,
    attractiveness: 26,
  },
  // Victor Creed – Liev Schreiber; X-Men Origins: Wolverine (2009)
  {
    name: "Sabretooth",
    category: "marvel",
    kills: 120,
    height: 190, // [SCHAETZUNG] X-Men Origins: Wolverine; langlebiger Victor Creed; angenaeherte Bildschirmgestalt in cm
    age: 165, // [SCHAETZUNG] X-Men Origins: Wolverine; langlebiger Victor Creed; Jahre, kein gesicherter exakter Kanonwert
    strength: 89,
    intelligence: 70,
    fame: 84,
    attractiveness: 58,
  },
  // Nathan Summers – Josh Brolin; Deadpool 2 (2018)
  {
    name: "Cable",
    category: "marvel",
    kills: 60,
    height: 180, // [SCHAETZUNG] Deadpool 2; persoenliches Lebensalter trotz Zeitreise; angenaeherte Bildschirmgestalt in cm
    age: 50, // [SCHAETZUNG] Deadpool 2; persoenliches Lebensalter trotz Zeitreise; Jahre, kein gesicherter exakter Kanonwert
    strength: 86,
    intelligence: 89,
    fame: 85,
    attractiveness: 66,
  },
  // Neena Thurman – Zazie Beetz; Deadpool 2 (2018)
  {
    name: "Domino",
    category: "marvel",
    kills: 20,
    height: 168, // [SCHAETZUNG] Deadpool 2; angenaeherte Bildschirmgestalt in cm
    age: 30, // [SCHAETZUNG] Deadpool 2; Jahre, kein gesicherter exakter Kanonwert
    strength: 77,
    intelligence: 84,
    fame: 82,
    attractiveness: 85,
  },
  // Laura – Dafne Keen; Logan (2017) / Deadpool & Wolverine (2024)
  {
    name: "X-23",
    category: "marvel",
    kills: 45,
    height: 140, // [SCHAETZUNG] Logan; junge Laura, nicht erwachsene Deadpool-&-Wolverine-Fassung; angenaeherte Bildschirmgestalt in cm
    age: 11, // [BELEGT] Logan: Regisseur James Mangold beschreibt Laura als elfjaehrig; https://www.firstshowing.net/2017/interview-logan-director-james-mangold-on-making-unique-movies/
    strength: 85,
    intelligence: 78,
    fame: 84,
    attractiveness: 0,
  },
  // Max Dillon – Jamie Foxx; The Amazing Spider-Man 2 / No Way Home
  {
    name: "Electro",
    category: "marvel",
    kills: 15,
    height: 175, // [SCHAETZUNG] The Amazing Spider-Man 2; menschliche Grundform; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] The Amazing Spider-Man 2; menschliche Grundform; Jahre, kein gesicherter exakter Kanonwert
    strength: 94,
    intelligence: 78,
    fame: 89,
    attractiveness: 59,
  },
  // Flint Marko – Thomas Haden Church; Spider-Man 3 / No Way Home
  {
    name: "Sandman",
    category: "marvel",
    kills: 2,
    height: 185, // [SCHAETZUNG] Spider-Man 3; normale menschenfoermige Gestalt; angenaeherte Bildschirmgestalt in cm
    age: 45, // [SCHAETZUNG] Spider-Man 3; normale menschenfoermige Gestalt; Jahre, kein gesicherter exakter Kanonwert
    strength: 94,
    intelligence: 67,
    fame: 89,
    attractiveness: 52,
  },
  // Curt Connors – Rhys Ifans; The Amazing Spider-Man / No Way Home
  {
    name: "Lizard",
    category: "marvel",
    kills: 8,
    height: 260, // [SCHAETZUNG] The Amazing Spider-Man; Echsenform, Curt Connors Lebensalter; angenaeherte Bildschirmgestalt in cm
    age: 45, // [SCHAETZUNG] The Amazing Spider-Man; Echsenform, Curt Connors Lebensalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 90,
    intelligence: 94,
    fame: 85,
    attractiveness: 25,
  },
  // Adrian Toomes – Michael Keaton; Spider-Man: Homecoming (2017)
  {
    name: "Vulture",
    category: "marvel",
    kills: 4,
    height: 175, // [SCHAETZUNG] Spider-Man: Homecoming; angenaeherte Bildschirmgestalt in cm
    age: 60, // [SCHAETZUNG] Spider-Man: Homecoming; Jahre, kein gesicherter exakter Kanonwert
    strength: 79,
    intelligence: 85,
    fame: 85,
    attractiveness: 48,
  },
  // Cletus Kasady; Venom: Let There Be Carnage (2021)
  {
    name: "Carnage",
    category: "marvel",
    kills: 35,
    height: 250, // [SCHAETZUNG] Venom: Let There Be Carnage; Symbiontenform, Alter des Wirts Cletus; angenaeherte Bildschirmgestalt in cm
    age: 55, // [SCHAETZUNG] Venom: Let There Be Carnage; Symbiontenform, Alter des Wirts Cletus; Jahre, kein gesicherter exakter Kanonwert
    strength: 98,
    intelligence: 66,
    fame: 90,
    attractiveness: 18,
  },
  // Pom Klementieff; Guardians of the Galaxy-Filme
  {
    name: "Mantis",
    category: "marvel",
    kills: 2,
    height: 170, // [SCHAETZUNG] Guardians Vol. 2; angenaeherte Bildschirmgestalt in cm
    age: 25, // [SCHAETZUNG] Guardians Vol. 2; Jahre, kein gesicherter exakter Kanonwert
    strength: 72,
    intelligence: 75,
    fame: 87,
    attractiveness: 83,
  },
  // Yondu Udonta – Michael Rooker; Guardians of the Galaxy 1–2
  {
    name: "Yondu",
    category: "marvel",
    kills: 90,
    height: 178, // [SCHAETZUNG] Guardians Vol. 2; angenaeherte Bildschirmgestalt in cm
    age: 55, // [SCHAETZUNG] Guardians Vol. 2; Jahre, kein gesicherter exakter Kanonwert
    strength: 82,
    intelligence: 83,
    fame: 87,
    attractiveness: 52,
  },
  // Benedict Wong; Doctor Strange-Filme
  {
    name: "Wong",
    category: "marvel",
    kills: 5,
    height: 178, // [SCHAETZUNG] Doctor Strange in the Multiverse of Madness; angenaeherte Bildschirmgestalt in cm
    age: 50, // [SCHAETZUNG] Doctor Strange in the Multiverse of Madness; Jahre, kein gesicherter exakter Kanonwert
    strength: 86,
    intelligence: 93,
    fame: 86,
    attractiveness: 58,
  },
  // Tessa Thompson; Thor: Ragnarok / Love and Thunder
  {
    name: "Valkyrie",
    category: "marvel",
    kills: 80,
    height: 163, // [SCHAETZUNG] Thor: Ragnarok; grober Spielwert fuer langlebige Asgardierin; angenaeherte Bildschirmgestalt in cm
    age: 3000, // [SPIELWERT] Thor: Ragnarok; grober Spielwert fuer langlebige Asgardierin; Jahre, kein gesicherter exakter Kanonwert
    strength: 91,
    intelligence: 83,
    fame: 85,
    attractiveness: 86,
  },
  // Anthony Hopkins; Thor-Filmreihe
  {
    name: "Odin",
    category: "marvel",
    kills: 300,
    height: 175, // [SCHAETZUNG] Thor: Ragnarok; grober Spielwert; angenaeherte Bildschirmgestalt in cm
    age: 5000, // [SPIELWERT] Thor: Ragnarok; grober Spielwert; Jahre, kein gesicherter exakter Kanonwert
    strength: 98,
    intelligence: 97,
    fame: 88,
    attractiveness: 60,
  },
  // Idris Elba; Thor-Filmreihe
  {
    name: "Heimdall",
    category: "marvel",
    kills: 60,
    height: 190, // [SCHAETZUNG] Infinity War; grober Spielwert; angenaeherte Bildschirmgestalt in cm
    age: 2000, // [SPIELWERT] Infinity War; grober Spielwert; Jahre, kein gesicherter exakter Kanonwert
    strength: 90,
    intelligence: 88,
    fame: 84,
    attractiveness: 85,
  },
  // Mighty Thor – Natalie Portman; Thor: Love and Thunder (2022)
  {
    name: "Jane Foster",
    category: "marvel",
    kills: 20,
    height: 160, // [SCHAETZUNG] Thor: Love and Thunder; angenaehertes biologisches Alter; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Thor: Love and Thunder; angenaehertes biologisches Alter; Jahre, kein gesicherter exakter Kanonwert
    strength: 93,
    intelligence: 95,
    fame: 87,
    attractiveness: 88,
  },
  // Letitia Wright; Black Panther-Filme
  {
    name: "Shuri",
    category: "marvel",
    kills: 5,
    height: 165, // [SCHAETZUNG] Black Panther, erster Film; angenaeherte Bildschirmgestalt in cm
    age: 16, // [BELEGT] Black Panther (erster Film); Produzent Nate Moore; Produzent Nate Moore, Black-Panther-Interview: Shuri ist 16
    strength: 88,
    intelligence: 98,
    fame: 88,
    attractiveness: 0,
  },
  // Danai Gurira; Black Panther-Filme
  {
    name: "Okoye",
    category: "marvel",
    kills: 30,
    height: 170, // [SCHAETZUNG] Black Panther, erster Film; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Black Panther, erster Film; Jahre, kein gesicherter exakter Kanonwert
    strength: 79,
    intelligence: 86,
    fame: 83,
    attractiveness: 78,
  },
  // Erik Stevens – Michael B. Jordan; Black Panther (2018)
  {
    name: "Killmonger",
    category: "marvel",
    kills: 70,
    height: 183, // [SCHAETZUNG] Black Panther, erster Film; angenaeherte Bildschirmgestalt in cm
    age: 30, // [SCHAETZUNG] Black Panther, erster Film; Jahre, kein gesicherter exakter Kanonwert
    strength: 88,
    intelligence: 87,
    fame: 89,
    attractiveness: 88,
  },
  // Winston Duke; Black Panther-Filme
  {
    name: "M'Baku",
    category: "marvel",
    kills: 25,
    height: 196, // [SCHAETZUNG] Black Panther, erster Film; angenaeherte Bildschirmgestalt in cm
    age: 35, // [SCHAETZUNG] Black Panther, erster Film; Jahre, kein gesicherter exakter Kanonwert
    strength: 82,
    intelligence: 80,
    fame: 80,
    attractiveness: 76,
  },
  // Florence Pugh; Black Widow / Hawkeye / Thunderbolts*
  {
    name: "Yelena Belova",
    category: "marvel",
    kills: 45,
    height: 163, // [SCHAETZUNG] Black Widow, 2016; Geburt laut Quellen zwischen 1988 und 1989; angenaeherte Bildschirmgestalt in cm
    age: 27, // [SCHAETZUNG] Black Widow, 2016; Geburt laut Quellen zwischen 1988 und 1989; Jahre, kein gesicherter exakter Kanonwert
    strength: 76,
    intelligence: 85,
    fame: 87,
    attractiveness: 86,
  },
  // Alexei Shostakov – David Harbour; Black Widow / Thunderbolts*
  {
    name: "Red Guardian",
    category: "marvel",
    kills: 30,
    height: 190, // [SCHAETZUNG] Black Widow; angenaeherte Bildschirmgestalt in cm
    age: 55, // [SCHAETZUNG] Black Widow; Jahre, kein gesicherter exakter Kanonwert
    strength: 87,
    intelligence: 64,
    fame: 81,
    attractiveness: 53,
  },
  // Hailee Steinfeld; Hawkeye (2021)
  {
    name: "Kate Bishop",
    category: "marvel",
    kills: 0,
    height: 173, // [SCHAETZUNG] Hawkeye; angenaeherte Bildschirmgestalt in cm
    age: 22, // [BELEGT] Hawkeye; offizielle Disney-Beschreibung; https://press.disneyplus.com/news/disney-plus-marvel-studios-hawkeye-trailer-and-teaser-poster
    strength: 65,
    intelligence: 84,
    fame: 82,
    attractiveness: 86,
  },
  // Jennifer Walters – Tatiana Maslany; She-Hulk (2022)
  {
    name: "She-Hulk",
    category: "marvel",
    kills: 0,
    height: 201, // [BELEGT] Hulk-Form der Serie; 6 Fuss 7 Zoll, auf cm gerundet; https://thewaltdisneycompany.com/news/marvel-studios-she-hulk-attorney-at-law-to-debut-on-disney-august-17/
    age: 35, // [SCHAETZUNG] Eigene Serie; offiziell nur als thirty-something beschrieben; Jahre, kein gesicherter exakter Kanonwert
    strength: 96,
    intelligence: 94,
    fame: 88,
    attractiveness: 83,
  },
  // Krysten Ritter; Jessica Jones-Serie
  {
    name: "Jessica Jones",
    category: "marvel",
    kills: 5,
    height: 175, // [SCHAETZUNG] Jessica Jones, Staffel 1; aus Geburtszeitraum 1985-1986 angenaehert; angenaeherte Bildschirmgestalt in cm
    age: 29, // [SCHAETZUNG] Jessica Jones, Staffel 1; aus Geburtszeitraum 1985-1986 angenaehert; Jahre, kein gesicherter exakter Kanonwert
    strength: 86,
    intelligence: 86,
    fame: 84,
    attractiveness: 84,
  },
  // Mike Colter; Luke Cage-Serie
  {
    name: "Luke Cage",
    category: "marvel",
    kills: 8,
    height: 190, // [SCHAETZUNG] Luke Cage, Staffel 1, 2016; chronologisch vor dem Blip; angenaeherte Bildschirmgestalt in cm
    age: 36, // [SCHAETZUNG] Luke Cage, Staffel 1, 2016; chronologisch vor dem Blip; Jahre, kein gesicherter exakter Kanonwert
    strength: 90,
    intelligence: 81,
    fame: 85,
    attractiveness: 82,
  },
  // Danny Rand – Finn Jones; Iron Fist-Serie
  {
    name: "Iron Fist",
    category: "marvel",
    kills: 12,
    height: 183, // [SCHAETZUNG] Iron Fist, Anfang Staffel 1, vor April 2017; angenaeherte Bildschirmgestalt in cm
    age: 25, // [SCHAETZUNG] Iron Fist, Anfang Staffel 1, vor April 2017; Jahre, kein gesicherter exakter Kanonwert
    strength: 81,
    intelligence: 77,
    fame: 82,
    attractiveness: 76,
  },
  // Kamala Khan – Iman Vellani; Ms. Marvel / The Marvels
  {
    name: "Ms. Marvel",
    category: "marvel",
    kills: 0,
    height: 165, // [SCHAETZUNG] Eigene Serie; normale Grundform; angenaeherte Bildschirmgestalt in cm
    age: 16, // [BELEGT] Ms. Marvel, eigene Serie; Disney-Produktionsunterlagen; Disney: Ms. Marvel Production Brief
    strength: 85,
    intelligence: 83,
    fame: 85,
    attractiveness: 0,
  },
  // Kathryn Hahn; WandaVision / Agatha All Along
  {
    name: "Agatha Harkness",
    category: "marvel",
    kills: 35,
    height: 165, // [SCHAETZUNG] Agatha All Along, 2026; aus Geburtszeitraum 1674-1675 angenaehert; angenaeherte Bildschirmgestalt in cm
    age: 351, // [SCHAETZUNG] Agatha All Along, 2026; aus Geburtszeitraum 1674-1675 angenaehert; Jahre, kein gesicherter exakter Kanonwert
    strength: 93,
    intelligence: 94,
    fame: 86,
    attractiveness: 74,
  },
  // Teyonah Parris; WandaVision / The Marvels
  {
    name: "Monica Rambeau",
    category: "marvel",
    kills: 3,
    height: 165, // [SCHAETZUNG] The Marvels; angenaehertes biologisches Alter, Blip-Zeit ausgenommen; angenaeherte Bildschirmgestalt in cm
    age: 38, // [SCHAETZUNG] The Marvels; angenaehertes biologisches Alter, Blip-Zeit ausgenommen; Jahre, kein gesicherter exakter Kanonwert
    strength: 92,
    intelligence: 87,
    fame: 81,
    attractiveness: 84,
  },
  // Tenoch Huerta; Black Panther: Wakanda Forever (2022)
  {
    name: "Namor",
    category: "marvel",
    kills: 50,
    height: 173, // [SCHAETZUNG] Wakanda Forever; aus Herkunft 1571 und Handlungszeit angenaehert; angenaeherte Bildschirmgestalt in cm
    age: 454, // [SCHAETZUNG] Wakanda Forever; aus Herkunft 1571 und Handlungszeit angenaehert; Jahre, kein gesicherter exakter Kanonwert
    strength: 95,
    intelligence: 89,
    fame: 87,
    attractiveness: 79,
  },
  // Kang der Eroberer – Jonathan Majors; Ant-Man and the Wasp: Quantumania (2023)
  {
    name: "Kang",
    category: "marvel",
    kills: 200,
    height: 183, // [SCHAETZUNG] Quantumania; Erscheinungsalter, tatsaechliches Alter durch Zeitreisen unklar; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Quantumania; Erscheinungsalter, tatsaechliches Alter durch Zeitreisen unklar; Jahre, kein gesicherter exakter Kanonwert
    strength: 94,
    intelligence: 98,
    fame: 89,
    attractiveness: 66,
  },
  // Emil Blonsky – Tim Roth; The Incredible Hulk / She-Hulk
  {
    name: "Abomination",
    category: "marvel",
    kills: 15,
    height: 270, // [SCHAETZUNG] The Incredible Hulk; verwandelte Form, Emil Blonskys Lebensalter; angenaeherte Bildschirmgestalt in cm
    age: 39, // [SCHAETZUNG] The Incredible Hulk; verwandelte Form, Emil Blonskys Lebensalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 97,
    intelligence: 69,
    fame: 83,
    attractiveness: 17,
  },
  // Antonia Dreykov – Olga Kurylenko; Black Widow (2021)
  {
    name: "Taskmaster",
    category: "marvel",
    kills: 35,
    height: 175, // [SCHAETZUNG] Black Widow; Antonia Dreykov, nicht Comic-Tony-Masters; angenaeherte Bildschirmgestalt in cm
    age: 20, // [SCHAETZUNG] Black Widow; Antonia Dreykov, nicht Comic-Tony-Masters; Jahre, kein gesicherter exakter Kanonwert
    strength: 80,
    intelligence: 83,
    fame: 82,
    attractiveness: 55,
  },
  // Ava Starr – Hannah John-Kamen; Ant-Man and the Wasp / Thunderbolts*
  {
    name: "Ghost",
    category: "marvel",
    kills: 12,
    height: 168, // [SCHAETZUNG] Ant-Man and the Wasp, 2018; Ava Starr; angenaeherte Bildschirmgestalt in cm
    age: 29, // [SCHAETZUNG] Ant-Man and the Wasp, 2018; Ava Starr; Jahre, kein gesicherter exakter Kanonwert
    strength: 81,
    intelligence: 82,
    fame: 78,
    attractiveness: 77,
  },
  // Christian Bale; Thor: Love and Thunder (2022)
  {
    name: "Gorr",
    category: "marvel",
    kills: 45,
    height: 183, // [SCHAETZUNG] Thor: Love and Thunder; angenaeherte Bildschirmgestalt in cm
    age: 45, // [SCHAETZUNG] Thor: Love and Thunder; Jahre, kein gesicherter exakter Kanonwert
    strength: 97,
    intelligence: 85,
    fame: 85,
    attractiveness: 19,
  },
  ]),
  ...defineDealCharacters([

  // =========================
  // HARRY POTTER
  // =========================
  {
    name: "Albus Dumbledore",
    category: "harry-potter",
    kills: 3,
    height: 185,
    age: 115,
    strength: 100,
    intelligence: 100,
    fame: 98,
    attractiveness: 72,
  },
  {
    name: "Arthur Weasley",
    category: "harry-potter",
    kills: 1,
    height: 188,
    age: 48,
    strength: 76,
    intelligence: 84,
    fame: 77,
    attractiveness: 73,
  },
  {
    name: "Bellatrix Lestrange",
    category: "harry-potter",
    kills: 8,
    height: 170,
    age: 47,
    strength: 94,
    intelligence: 84,
    fame: 92,
    attractiveness: 89,
  },
  {
    name: "Cedric Diggory",
    category: "harry-potter",
    kills: 0,
    height: 185,
    age: 17,
    strength: 79,
    intelligence: 82,
    fame: 86,
    attractiveness: 88,
  },
  {
    name: "Dobby",
    category: "harry-potter",
    kills: 0,
    height: 106,
    age: 50, // [SPIELWERT] Bei seinem Tod; Hauselfenalter unbekannt, grober Spielwert; Jahre, kein gesicherter exakter Kanonwert
    strength: 82,
    intelligence: 79,
    fame: 94,
    attractiveness: 45,
  },
  {
    name: "Dolores Umbridge",
    category: "harry-potter",
    kills: 0,
    height: 160,
    age: 50,
    strength: 68,
    intelligence: 82,
    fame: 90,
    attractiveness: 35,
  },
  {
    name: "Draco Malfoy",
    category: "harry-potter",
    kills: 0,
    height: 183,
    age: 17,
    strength: 76,
    intelligence: 83,
    fame: 95,
    attractiveness: 82,
  },
  {
    name: "Fred Weasley",
    category: "harry-potter",
    kills: 2,
    height: 180,
    age: 20,
    strength: 78,
    intelligence: 84,
    fame: 88,
    attractiveness: 86,
  },
  {
    name: "George Weasley",
    category: "harry-potter",
    kills: 2,
    height: 180,
    age: 20,
    strength: 78,
    intelligence: 84,
    fame: 87,
    attractiveness: 86,
  },
  {
    name: "Ginny Weasley",
    category: "harry-potter",
    kills: 2,
    height: 168,
    age: 16,
    strength: 82,
    intelligence: 84,
    fame: 91,
    attractiveness: 85,
  },
  {
    name: "Harry Potter",
    category: "harry-potter",
    kills: 5,
    height: 175,
    age: 17,
    strength: 90,
    intelligence: 88,
    fame: 100,
    attractiveness: 80,
  },
  {
    name: "Hermine Granger",
    category: "harry-potter",
    kills: 2,
    height: 165,
    age: 18,
    strength: 86,
    intelligence: 97,
    fame: 98,
    attractiveness: 92,
  },
  {
    name: "Lord Voldemort",
    category: "harry-potter",
    kills: 25,
    height: 183,
    age: 71,
    strength: 100,
    intelligence: 97,
    fame: 100,
    attractiveness: 20,
  },
  {
    name: "Lucius Malfoy",
    category: "harry-potter",
    kills: 3,
    height: 183,
    age: 44,
    strength: 84,
    intelligence: 86,
    fame: 88,
    attractiveness: 86,
  },
  {
    name: "Luna Lovegood",
    category: "harry-potter",
    kills: 1,
    height: 163,
    age: 17,
    strength: 75,
    intelligence: 89,
    fame: 91,
    attractiveness: 84,
  },
  {
    name: "Minerva McGonagall",
    category: "harry-potter",
    kills: 2,
    height: 175,
    age: 70,
    strength: 95,
    intelligence: 95,
    fame: 94,
    attractiveness: 75,
  },
  {
    name: "Molly Weasley",
    category: "harry-potter",
    kills: 2,
    height: 160,
    age: 48,
    strength: 88,
    intelligence: 84,
    fame: 91,
    attractiveness: 76,
  },
  {
    name: "Neville Longbottom",
    category: "harry-potter",
    kills: 4,
    height: 180,
    age: 17,
    strength: 82,
    intelligence: 82,
    fame: 91,
    attractiveness: 72,
  },
  {
    name: "Peter Pettigrew",
    category: "harry-potter",
    kills: 13,
    height: 168,
    age: 38,
    strength: 73,
    intelligence: 78,
    fame: 87,
    attractiveness: 38,
  },
  {
    name: "Remus Lupin",
    category: "harry-potter",
    kills: 4,
    height: 188,
    age: 38,
    strength: 87,
    intelligence: 93,
    fame: 91,
    attractiveness: 87,
  },
  {
    name: "Ron Weasley",
    category: "harry-potter",
    kills: 4,
    height: 185,
    age: 18,
    strength: 71,
    intelligence: 80,
    fame: 98,
    attractiveness: 88,
  },
  {
    name: "Rubeus Hagrid",
    category: "harry-potter",
    kills: 2,
    height: 351,
    age: 69,
    strength: 83,
    intelligence: 72,
    fame: 98,
    attractiveness: 65,
  },
  {
    name: "Severus Snape",
    category: "harry-potter",
    kills: 3,
    height: 183,
    age: 38,
    strength: 96,
    intelligence: 97,
    fame: 98,
    attractiveness: 84,
  },
  {
    name: "Sirius Black",
    category: "harry-potter",
    kills: 3,
    height: 180,
    age: 36,
    strength: 89,
    intelligence: 88,
    fame: 95,
    attractiveness: 94,
  },
  {
    name: "Viktor Krum",
    category: "harry-potter",
    kills: 1,
    height: 183,
    age: 21,
    strength: 77,
    intelligence: 78,
    fame: 80,
    attractiveness: 90,
  },
  {
  name: "Alastor Moody",
  category: "harry-potter",
  kills: 12,
  height: 185,
  age: 60,
  strength: 93,
  intelligence: 94,
  fame: 90,
  attractiveness: 68,
},
{
  name: "Nymphadora Tonks",
  category: "harry-potter",
  kills: 6,
  height: 168,
  age: 25,
  strength: 86,
  intelligence: 86,
  fame: 87,
  attractiveness: 94,
},
{
  name: "Kingsley Shacklebolt",
  category: "harry-potter",
  kills: 7,
  height: 188,
  age: 45,
  strength: 92,
  intelligence: 95,
  fame: 89,
  attractiveness: 90,
},
{
  name: "Horace Slughorn",
  category: "harry-potter",
  kills: 1,
  height: 175,
  age: 70,
  strength: 83,
  intelligence: 96,
  fame: 84,
  attractiveness: 64,
},
{
  name: "Gilderoy Lockhart",
  category: "harry-potter",
  kills: 0,
  height: 183,
  age: 35,
  strength: 58,
  intelligence: 72,
  fame: 93,
  attractiveness: 95,
},
{
  name: "Fleur Delacour",
  category: "harry-potter",
  kills: 1,
  height: 170,
  age: 17,
  strength: 81,
  intelligence: 86,
  fame: 86,
  attractiveness: 92,
},
{
  name: "Cho Chang",
  category: "harry-potter",
  kills: 0,
  height: 165,
  age: 17,
  strength: 73,
  intelligence: 84,
  fame: 82,
  attractiveness: 86,
},
{
  name: "Narcissa Malfoy",
  category: "harry-potter",
  kills: 0,
  height: 170,
  age: 45,
  strength: 72,
  intelligence: 91,
  fame: 86,
  attractiveness: 94,
},
{
  name: "Barty Crouch Jr.",
  category: "harry-potter",
  kills: 3,
  height: 178,
  age: 33,
  strength: 91,
  intelligence: 96,
  fame: 89,
  attractiveness: 82,
},
{
  name: "Fenrir Greyback",
  category: "harry-potter",
  kills: 15,
  height: 188,
  age: 45,
  strength: 94,
  intelligence: 72,
  fame: 88,
  attractiveness: 48,
},

  // Weitere 25 Figuren: ausschließlich Harry-Potter-Filmversionen.
  // Spielbewertungen sind Schätzwerte; unbelegte Größe/Alter bleiben null.
  // David Bradley; Harry-Potter-Filmreihe
  {
    name: "Argus Filch",
    category: "harry-potter",
    kills: 0,
    height: 178, // [SCHAETZUNG] Heiligtuemer des Todes; angenaeherte Bildschirmgestalt in cm
    age: 65, // [SCHAETZUNG] Heiligtuemer des Todes; Jahre, kein gesicherter exakter Kanonwert
    strength: 24,
    intelligence: 65,
    fame: 84,
    attractiveness: 30,
  },
  // Emma Thompson; Der Gefangene von Askaban / Der Orden des Phönix
  {
    name: "Sybill Trelawney",
    category: "harry-potter",
    kills: 0,
    height: 173, // [SCHAETZUNG] Heiligtuemer des Todes; angenaeherte Bildschirmgestalt in cm
    age: 45, // [SCHAETZUNG] Heiligtuemer des Todes; Jahre, kein gesicherter exakter Kanonwert
    strength: 72,
    intelligence: 81,
    fame: 83,
    attractiveness: 48,
  },
  // Warwick Davis; Harry-Potter-Filmreihe
  {
    name: "Filius Flitwick",
    category: "harry-potter",
    kills: 0,
    height: 107, // [SCHAETZUNG] Heiligtuemer des Todes; kleine Filmgestalt; angenaeherte Bildschirmgestalt in cm
    age: 70, // [SCHAETZUNG] Heiligtuemer des Todes; kleine Filmgestalt; Jahre, kein gesicherter exakter Kanonwert
    strength: 89,
    intelligence: 94,
    fame: 81,
    attractiveness: 46,
  },
  // Miriam Margolyes; Die Kammer des Schreckens / Die Heiligtümer des Todes – Teil 2
  {
    name: "Pomona Sprout",
    category: "harry-potter",
    kills: 0,
    height: 155, // [SCHAETZUNG] Heiligtuemer des Todes; angenaeherte Bildschirmgestalt in cm
    age: 60, // [SCHAETZUNG] Heiligtuemer des Todes; Jahre, kein gesicherter exakter Kanonwert
    strength: 77,
    intelligence: 89,
    fame: 78,
    attractiveness: 45,
  },
  // Ian Hart; Der Stein der Weisen
  {
    name: "Quirinus Quirrell",
    category: "harry-potter",
    kills: 1,
    height: 173, // [SCHAETZUNG] Stein der Weisen; bei seinem Tod; angenaeherte Bildschirmgestalt in cm
    age: 25, // [SCHAETZUNG] Stein der Weisen; bei seinem Tod; Jahre, kein gesicherter exakter Kanonwert
    strength: 77,
    intelligence: 83,
    fame: 86,
    attractiveness: 34,
  },
  // Ciarán Hinds; Die Heiligtümer des Todes – Teil 2
  {
    name: "Aberforth Dumbledore",
    category: "harry-potter",
    kills: 0,
    height: 185, // [SCHAETZUNG] Heiligtuemer des Todes, 1998; aus Schulbeginn 1895 angenaehert; angenaeherte Bildschirmgestalt in cm
    age: 114, // [SCHAETZUNG] Heiligtuemer des Todes, 1998; aus Schulbeginn 1895 angenaehert; Jahre, kein gesicherter exakter Kanonwert
    strength: 89,
    intelligence: 88,
    fame: 79,
    attractiveness: 46,
  },
  // Robert Hardy; Harry-Potter-Filmreihe
  {
    name: "Cornelius Fudge",
    category: "harry-potter",
    kills: 0,
    height: 178, // [SCHAETZUNG] Orden des Phoenix; angenaeherte Bildschirmgestalt in cm
    age: 60, // [SCHAETZUNG] Orden des Phoenix; Jahre, kein gesicherter exakter Kanonwert
    strength: 62,
    intelligence: 71,
    fame: 80,
    attractiveness: 42,
  },
  // John Hurt; Der Stein der Weisen / Die Heiligtümer des Todes
  {
    name: "Garrick Ollivander",
    category: "harry-potter",
    kills: 0,
    height: 175, // [SCHAETZUNG] Heiligtuemer des Todes, 1998; Geburt in oder vor 1909; angenaeherte Bildschirmgestalt in cm
    age: 90, // [SCHAETZUNG] Heiligtuemer des Todes, 1998; Geburt in oder vor 1909; Jahre, kein gesicherter exakter Kanonwert
    strength: 74,
    intelligence: 97,
    fame: 84,
    attractiveness: 46,
  },
  // Verne Troyer / Warwick Davis; Der Stein der Weisen / Die Heiligtümer des Todes – Teil 1–2
  {
    name: "Griphook",
    category: "harry-potter",
    kills: 0,
    height: 100, // [SCHAETZUNG] Heiligtuemer des Todes; Goblin-Filmgestalt; angenaeherte Bildschirmgestalt in cm
    age: 60, // [SCHAETZUNG] Heiligtuemer des Todes; Goblin-Filmgestalt; Jahre, kein gesicherter exakter Kanonwert
    strength: 46,
    intelligence: 86,
    fame: 81,
    attractiveness: 0,
  },
  // Hauself; Der Orden des Phönix / Die Heiligtümer des Todes – Teil 1
  {
    name: "Kreacher",
    category: "harry-potter",
    kills: 0,
    height: 90, // [SCHAETZUNG] Heiligtuemer des Todes; grober Spielwert fuer alten Hauselfen; angenaeherte Bildschirmgestalt in cm
    age: 200, // [SPIELWERT] Heiligtuemer des Todes; grober Spielwert fuer alten Hauselfen; Jahre, kein gesicherter exakter Kanonwert
    strength: 75,
    intelligence: 73,
    fame: 81,
    attractiveness: 0,
  },
  // Shirley Henderson; Die Kammer des Schreckens / Der Feuerkelch
  {
    name: "Maulende Myrte",
    category: "harry-potter",
    kills: 0,
    height: 150, // [SCHAETZUNG] Alter bei ihrem Tod; Geisterjahre nicht addiert; angenaeherte Bildschirmgestalt in cm
    age: 14, // [BELEGT] Harry-Potter-Wiki: 14 beim Tod; kein addiertes Geisteralter; https://harrypotter.fandom.com/de/wiki/Myrte_Warren
    strength: 38,
    intelligence: 66,
    fame: 86,
    attractiveness: 0,
  },
  // Richard Griffiths; Harry-Potter-Filmreihe
  {
    name: "Vernon Dursley",
    category: "harry-potter",
    kills: 0,
    height: 175, // [SCHAETZUNG] Heiligtuemer des Todes; angenaeherte Bildschirmgestalt in cm
    age: 55, // [SCHAETZUNG] Heiligtuemer des Todes; Jahre, kein gesicherter exakter Kanonwert
    strength: 34,
    intelligence: 52,
    fame: 86,
    attractiveness: 27,
  },
  // Fiona Shaw; Harry-Potter-Filmreihe
  {
    name: "Petunia Dursley",
    category: "harry-potter",
    kills: 0,
    height: 173, // [SCHAETZUNG] Heiligtuemer des Todes; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Heiligtuemer des Todes; Jahre, kein gesicherter exakter Kanonwert
    strength: 22,
    intelligence: 71,
    fame: 80,
    attractiveness: 48,
  },
  // Harry Melling; Harry-Potter-Filmreihe
  {
    name: "Dudley Dursley",
    category: "harry-potter",
    kills: 0,
    height: 175, // [SCHAETZUNG] Heiligtuemer des Todes; angenaeherte Bildschirmgestalt in cm
    age: 17, // [ABLEITUNG] Am 2. Mai 1998; aus vom Lexicon abgeleitetem Geburtsdatum; https://www.hp-lexicon.org/character/dursley-family/dudley-dursley/
    strength: 39,
    intelligence: 43,
    fame: 83,
    attractiveness: 0,
  },
  // Domhnall Gleeson; Die Heiligtümer des Todes – Teil 1–2
  {
    name: "Bill Weasley",
    category: "harry-potter",
    kills: 0,
    height: 185, // [SCHAETZUNG] Heiligtuemer des Todes; Geburtsjahr in Nachschlagewerken widerspruechlich; angenaeherte Bildschirmgestalt in cm
    age: 27, // [SCHAETZUNG] Heiligtuemer des Todes; Geburtsjahr in Nachschlagewerken widerspruechlich; Jahre, kein gesicherter exakter Kanonwert
    strength: 82,
    intelligence: 89,
    fame: 79,
    attractiveness: 83,
  },
  // Chris Rankin; Harry-Potter-Filmreihe
  {
    name: "Percy Weasley",
    category: "harry-potter",
    kills: 0,
    height: 175, // [SCHAETZUNG] Heiligtuemer des Todes; angenaeherte Bildschirmgestalt in cm
    age: 21, // [ABLEITUNG] Am 2. Mai 1998; berechnet aus Geburtstag 22. August 1976; https://www.hp-lexicon.org/character/weasley-family/percy-weasley/
    strength: 69,
    intelligence: 84,
    fame: 78,
    attractiveness: 65,
  },
  // Devon Murray; Harry-Potter-Filmreihe
  {
    name: "Seamus Finnigan",
    category: "harry-potter",
    kills: 3,
    height: 160, // [SCHAETZUNG] Heiligtuemer des Todes; Harrys Schuljahrgang; angenaeherte Bildschirmgestalt in cm
    age: 18, // [SCHAETZUNG] Heiligtuemer des Todes; Harrys Schuljahrgang; Jahre, kein gesicherter exakter Kanonwert
    strength: 73,
    intelligence: 69,
    fame: 81,
    attractiveness: 0,
  },
  // Alfred Enoch; Harry-Potter-Filmreihe
  {
    name: "Dean Thomas",
    category: "harry-potter",
    kills: 0,
    height: 190, // [SCHAETZUNG] Heiligtuemer des Todes; Harrys Schuljahrgang; angenaeherte Bildschirmgestalt in cm
    age: 18, // [SCHAETZUNG] Heiligtuemer des Todes; Harrys Schuljahrgang; Jahre, kein gesicherter exakter Kanonwert
    strength: 71,
    intelligence: 76,
    fame: 77,
    attractiveness: 0,
  },
  // Jessie Cave; Der Halbblutprinz / Die Heiligtümer des Todes – Teil 2
  {
    name: "Lavender Brown",
    category: "harry-potter",
    kills: 0,
    height: 163, // [SCHAETZUNG] Heiligtuemer des Todes; Harrys Schuljahrgang; angenaeherte Bildschirmgestalt in cm
    age: 18, // [SCHAETZUNG] Heiligtuemer des Todes; Harrys Schuljahrgang; Jahre, kein gesicherter exakter Kanonwert
    strength: 61,
    intelligence: 66,
    fame: 79,
    attractiveness: 0,
  },
  // Rita Skeeter – Miranda Richardson; Der Feuerkelch
  {
    name: "Rita Kimmkorn",
    category: "harry-potter",
    kills: 0,
    height: 165, // [SCHAETZUNG] Feuerkelch; angenaeherte Bildschirmgestalt in cm
    age: 43, // [BELEGT] Feuerkelch; Buch, Kapitel 18; Harry Potter und der Feuerkelch, Kapitel 18
    strength: 61,
    intelligence: 86,
    fame: 82,
    attractiveness: 67,
  },
  // Rhys Ifans; Die Heiligtümer des Todes – Teil 1
  {
    name: "Xenophilius Lovegood",
    category: "harry-potter",
    kills: 0,
    height: 188, // [SCHAETZUNG] Heiligtuemer des Todes; angenaeherte Bildschirmgestalt in cm
    age: 50, // [SCHAETZUNG] Heiligtuemer des Todes; Jahre, kein gesicherter exakter Kanonwert
    strength: 66,
    intelligence: 77,
    fame: 77,
    attractiveness: 49,
  },
  // Harrys Schneeeule; Harry-Potter-Filmreihe
  {
    name: "Hedwig",
    category: "harry-potter",
    kills: 0,
    height: 45, // [SCHAETZUNG] Bei ihrem Tod; stehende Eulenhoehe, keine Fluegelspannweite; angenaeherte Bildschirmgestalt in cm
    age: 7, // [SCHAETZUNG] Bei ihrem Tod; stehende Eulenhoehe, keine Fluegelspannweite; Jahre, kein gesicherter exakter Kanonwert
    strength: 24,
    intelligence: 65,
    fame: 94,
    attractiveness: 0,
  },
  // Jamie Waylett; Harry-Potter-Filmreihe
  {
    name: "Vincent Crabbe",
    category: "harry-potter",
    kills: 0,
    height: 188, // [SCHAETZUNG] Spaete Schulzeit; Harrys Schuljahrgang; angenaeherte Bildschirmgestalt in cm
    age: 18, // [SCHAETZUNG] Spaete Schulzeit; Harrys Schuljahrgang; Jahre, kein gesicherter exakter Kanonwert
    strength: 65,
    intelligence: 35,
    fame: 78,
    attractiveness: 0,
  },
  // Buckbeak – Hippogreif; Der Gefangene von Askaban
  {
    name: "Seidenschnabel",
    category: "harry-potter",
    kills: 0,
    height: 180, // [SCHAETZUNG] Gefangene von Askaban; Schulterhoehe, Alter sehr grob; angenaeherte Bildschirmgestalt in cm
    age: 20, // [SCHAETZUNG] Gefangene von Askaban; Schulterhoehe, Alter sehr grob; Jahre, kein gesicherter exakter Kanonwert
    strength: 79,
    intelligence: 55,
    fame: 88,
    attractiveness: 0,
  },
  // Josh Herdman; Harry-Potter-Filmreihe
  {
    name: "Gregory Goyle",
    category: "harry-potter",
    kills: 0,
    height: 180, // [SCHAETZUNG] Heiligtuemer des Todes; Harrys Schuljahrgang; angenaeherte Bildschirmgestalt in cm
    age: 18, // [SCHAETZUNG] Heiligtuemer des Todes; Harrys Schuljahrgang; Jahre, kein gesicherter exakter Kanonwert
    strength: 69,
    intelligence: 39,
    fame: 79,
    attractiveness: 0,
  },

  // Weitere Harry-Potter-Filmfiguren (75 insgesamt)
  // Adrian Rawlins; Harry-Potter-Filmreihe
  {
    name: "James Potter",
    category: "harry-potter",
    kills: 0,
    height: 180, // [SCHAETZUNG] Erwachsene Filmgestalt; angenaeherte Bildschirmgestalt in cm
    age: 21, // [ABLEITUNG] Bei seinem Tod 1981; Filmskript Deathly Hallows Part 1; Filmskript Harry Potter and the Deathly Hallows Part 1: Grabinschrift
    strength: 78,
    intelligence: 83,
    fame: 83,
    attractiveness: 77,
  },
  // Geraldine Somerville; Harry-Potter-Filmreihe
  {
    name: "Lily Potter",
    category: "harry-potter",
    kills: 0,
    height: 168, // [SCHAETZUNG] Erwachsene Filmgestalt; angenaeherte Bildschirmgestalt in cm
    age: 21, // [ABLEITUNG] Bei ihrem Tod 1981; Filmskript Deathly Hallows Part 1; Filmskript Harry Potter and the Deathly Hallows Part 1: Grabinschrift
    strength: 81,
    intelligence: 90,
    fame: 84,
    attractiveness: 82,
  },
  // Gemma Jones; Harry-Potter-Filmreihe
  {
    name: "Poppy Pomfrey",
    category: "harry-potter",
    kills: 0,
    height: 168, // [SCHAETZUNG] Heiligtuemer des Todes; angenaeherte Bildschirmgestalt in cm
    age: 60, // [SCHAETZUNG] Heiligtuemer des Todes; Jahre, kein gesicherter exakter Kanonwert
    strength: 70,
    intelligence: 92,
    fame: 76,
    attractiveness: 43,
  },
  // Frances de la Tour; Der Feuerkelch
  {
    name: "Olympe Maxime",
    category: "harry-potter",
    kills: 0,
    height: 280, // [SCHAETZUNG] Feuerkelch; Halb-Riesen-Gestalt, nicht Darstellerinnengroesse; angenaeherte Bildschirmgestalt in cm
    age: 50, // [SCHAETZUNG] Feuerkelch; Halb-Riesen-Gestalt, nicht Darstellerinnengroesse; Jahre, kein gesicherter exakter Kanonwert
    strength: 89,
    intelligence: 84,
    fame: 76,
    attractiveness: 65,
  },
  // Sean Biggerstaff; Harry-Potter-Filmreihe
  {
    name: "Oliver Wood",
    category: "harry-potter",
    kills: 0,
    height: 175, // [SCHAETZUNG] Heiligtuemer des Todes, 1998; geboren etwa 1975-1976; angenaeherte Bildschirmgestalt in cm
    age: 22, // [SCHAETZUNG] Heiligtuemer des Todes, 1998; geboren etwa 1975-1976; Jahre, kein gesicherter exakter Kanonwert
    strength: 71,
    intelligence: 76,
    fame: 78,
    attractiveness: 0,
  },
  // Louis Cordice; Der Halbblutprinz / Die Heiligtümer des Todes – Teil 2
  {
    name: "Blaise Zabini",
    category: "harry-potter",
    kills: 0,
    height: 178, // [SCHAETZUNG] Heiligtuemer des Todes; Harrys Schuljahrgang; angenaeherte Bildschirmgestalt in cm
    age: 18, // [SCHAETZUNG] Heiligtuemer des Todes; Harrys Schuljahrgang; Jahre, kein gesicherter exakter Kanonwert
    strength: 67,
    intelligence: 77,
    fame: 66,
    attractiveness: 0,
  },
  // Scarlett Byrne; Der Halbblutprinz
  {
    name: "Pansy Parkinson",
    category: "harry-potter",
    kills: 0,
    height: 163, // [SCHAETZUNG] Halbblutprinz; Harrys Schuljahrgang; angenaeherte Bildschirmgestalt in cm
    age: 17, // [SCHAETZUNG] Halbblutprinz; Harrys Schuljahrgang; Jahre, kein gesicherter exakter Kanonwert
    strength: 57,
    intelligence: 65,
    fame: 69,
    attractiveness: 0,
  },
  // Luke Youngblood; Der Stein der Weisen / Die Kammer des Schreckens
  {
    name: "Lee Jordan",
    category: "harry-potter",
    kills: 0,
    height: 160, // [SCHAETZUNG] Kammer des Schreckens; junge Filmfassung; angenaeherte Bildschirmgestalt in cm
    age: 14, // [SCHAETZUNG] Kammer des Schreckens; junge Filmfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 58,
    intelligence: 73,
    fame: 71,
    attractiveness: 0,
  },
  // Hugh Mitchell; Die Kammer des Schreckens
  {
    name: "Colin Creevey",
    category: "harry-potter",
    kills: 0,
    height: 140, // [SCHAETZUNG] Kammer des Schreckens; erste Klasse, junge Filmfassung; angenaeherte Bildschirmgestalt in cm
    age: 11, // [SCHAETZUNG] Kammer des Schreckens; erste Klasse, junge Filmfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 40,
    intelligence: 64,
    fame: 73,
    attractiveness: 0,
  },
  // Tante Marge – Pam Ferris; Der Gefangene von Askaban
  {
    name: "Marjorie Dursley",
    category: "harry-potter",
    kills: 0,
    height: 170, // [SCHAETZUNG] Gefangene von Askaban; angenaeherte Bildschirmgestalt in cm
    age: 50, // [SCHAETZUNG] Gefangene von Askaban; Jahre, kein gesicherter exakter Kanonwert
    strength: 29,
    intelligence: 46,
    fame: 77,
    attractiveness: 21,
  },
  // John Cleese; Der Stein der Weisen / Die Kammer des Schreckens
  {
    name: "Fast Kopfloser Nick",
    category: "harry-potter",
    kills: 0,
    height: 195, // [SCHAETZUNG] Angenaehertes Alter beim Tod; Geisterjahre nicht addiert; angenaeherte Bildschirmgestalt in cm
    age: 50, // [SCHAETZUNG] Angenaehertes Alter beim Tod; Geisterjahre nicht addiert; Jahre, kein gesicherter exakter Kanonwert
    strength: 31,
    intelligence: 75,
    fame: 82,
    attractiveness: 0,
  },
  // Bill Nighy; Die Heiligtümer des Todes – Teil 1
  {
    name: "Rufus Scrimgeour",
    category: "harry-potter",
    kills: 0,
    height: 188, // [SCHAETZUNG] Heiligtuemer des Todes; angenaeherte Bildschirmgestalt in cm
    age: 65, // [SCHAETZUNG] Heiligtuemer des Todes; Jahre, kein gesicherter exakter Kanonwert
    strength: 85,
    intelligence: 87,
    fame: 73,
    attractiveness: 58,
  },
  // Roger Lloyd Pack; Der Feuerkelch
  {
    name: "Barty Crouch Sr.",
    category: "harry-potter",
    kills: 0,
    height: 185, // [SCHAETZUNG] Feuerkelch; angenaeherte Bildschirmgestalt in cm
    age: 60, // [SCHAETZUNG] Feuerkelch; Jahre, kein gesicherter exakter Kanonwert
    strength: 77,
    intelligence: 88,
    fame: 76,
    attractiveness: 46,
  },
  // Nick Moran; Die Heiligtümer des Todes – Teil 1–2
  {
    name: "Scabior",
    category: "harry-potter",
    kills: 0,
    height: 175, // [SCHAETZUNG] Heiligtuemer des Todes; angenaeherte Bildschirmgestalt in cm
    age: 35, // [SCHAETZUNG] Heiligtuemer des Todes; Jahre, kein gesicherter exakter Kanonwert
    strength: 71,
    intelligence: 64,
    fame: 64,
    attractiveness: 57,
  },
  // Andy Linden; Die Heiligtümer des Todes – Teil 1
  {
    name: "Mundungus Fletcher",
    category: "harry-potter",
    kills: 0,
    height: 170, // [SCHAETZUNG] Heiligtuemer des Todes; angenaeherte Bildschirmgestalt in cm
    age: 50, // [SCHAETZUNG] Heiligtuemer des Todes; Jahre, kein gesicherter exakter Kanonwert
    strength: 49,
    intelligence: 65,
    fame: 67,
    attractiveness: 27,
  },

  // =========================
  // DC
  // =========================
  {
    name: "Aquaman",
    category: "dc",
    kills: 25,
    height: 185,
    age: 40,
    strength: 96,
    intelligence: 84,
    fame: 94,
    attractiveness: 95,
  },
  {
    name: "Bane",
    category: "dc",
    kills: 15,
    height: 203,
    age: 40,
    strength: 92,
    intelligence: 90,
    fame: 91,
    attractiveness: 72,
  },
  {
    name: "Batgirl",
    category: "dc",
    kills: 2,
    height: 170,
    age: 25,
    strength: 72,
    intelligence: 92,
    fame: 88,
    attractiveness: 92,
  },
  {
    name: "Batman",
    category: "dc",
    kills: 10,
    height: 188,
    age: 40,
    strength: 86,
    intelligence: 100,
    fame: 100,
    attractiveness: 96,
  },
  {
    name: "Black Canary",
    category: "dc",
    kills: 5,
    height: 170,
    age: 30,
    strength: 75,
    intelligence: 85,
    fame: 86,
    attractiveness: 94,
  },
  {
    name: "Catwoman",
    category: "dc",
    kills: 5,
    height: 170,
    age: 35,
    strength: 71,
    intelligence: 88,
    fame: 96,
    attractiveness: 97,
  },
  {
    name: "Cyborg",
    category: "dc",
    kills: 20,
    height: 198,
    age: 25,
    strength: 94,
    intelligence: 94,
    fame: 91,
    attractiveness: 82,
  },
  {
    name: "Darkseid",
    category: "dc",
    kills: 100,
    height: 267,
    age: 5000, // [SPIELWERT] Zack Snyder's Justice League; grober Spielwert; Jahre, kein gesicherter exakter Kanonwert
    strength: 100,
    intelligence: 97,
    fame: 95,
    attractiveness: 25,
  },
  {
    name: "Deathstroke",
    category: "dc",
    kills: 100,
    height: 193,
    age: 50,
    strength: 89,
    intelligence: 94,
    fame: 89,
    attractiveness: 84,
  },
  {
    name: "Green Arrow",
    category: "dc",
    kills: 15,
    height: 185,
    age: 40,
    strength: 77,
    intelligence: 88,
    fame: 91,
    attractiveness: 93,
  },
  {
    name: "Green Lantern",
    category: "dc",
    kills: 20,
    height: 188,
    age: 35,
    strength: 72,
    intelligence: 87,
    fame: 94,
    attractiveness: 91,
  },
  {
    name: "Harley Quinn",
    category: "dc",
    kills: 30,
    height: 170,
    age: 30,
    strength: 69,
    intelligence: 82,
    fame: 98,
    attractiveness: 96,
  },
  {
    name: "Joker",
    category: "dc",
    kills: 100,
    height: 196,
    age: 40,
    strength: 62,
    intelligence: 96,
    fame: 100,
    attractiveness: 72,
  },
  {
    name: "Lex Luthor",
    category: "dc",
    kills: 15,
    height: 188,
    age: 45,
    strength: 65,
    intelligence: 100,
    fame: 96,
    attractiveness: 83,
  },
  {
    name: "Mr. Freeze",
    category: "dc",
    kills: 10,
    height: 183,
    age: 50,
    strength: 78,
    intelligence: 97,
    fame: 83,
    attractiveness: 70,
  },
  {
    name: "Nightwing",
    category: "dc",
    kills: 5,
    height: 178,
    age: 27,
    strength: 81,
    intelligence: 90,
    fame: 90,
    attractiveness: 97,
  },
  {
    name: "Penguin",
    category: "dc",
    kills: 20,
    height: 157,
    age: 50,
    strength: 43,
    intelligence: 87,
    fame: 92,
    attractiveness: 45,
  },
  {
    name: "Poison Ivy",
    category: "dc",
    kills: 25,
    height: 173,
    age: 30,
    strength: 84,
    intelligence: 93,
    fame: 91,
    attractiveness: 96,
  },
  {
    name: "Robin",
    category: "dc",
    kills: 2,
    height: 165,
    age: 16,
    strength: 68,
    intelligence: 88,
    fame: 96,
    attractiveness: 80,
  },
  {
    name: "Shazam",
    category: "dc",
    kills: 5,
    height: 190,
    age: 15,
    strength: 99,
    intelligence: 72,
    fame: 91,
    attractiveness: 78,
  },
  {
    name: "Supergirl",
    category: "dc",
    kills: 15,
    height: 165,
    age: 21,
    strength: 99,
    intelligence: 86,
    fame: 95,
    attractiveness: 94,
  },
  {
    name: "Superman",
    category: "dc",
    kills: 20,
    height: 191,
    age: 35,
    strength: 100,
    intelligence: 92,
    fame: 100,
    attractiveness: 98,
  },
  {
    name: "The Flash",
    category: "dc",
    kills: 10,
    height: 183,
    age: 30,
    strength: 98,
    intelligence: 94,
    fame: 97,
    attractiveness: 93,
  },
  {
    name: "The Riddler",
    category: "dc",
    kills: 5,
    height: 185,
    age: 40,
    strength: 50,
    intelligence: 98,
    fame: 91,
    attractiveness: 73,
  },
  {
    name: "Wonder Woman",
    category: "dc",
    kills: 50,
    height: 183,
    age: 800,
    strength: 99,
    intelligence: 92,
    fame: 100,
    attractiveness: 98,
  },
  ]),
  ...defineDealCharacters([
  {
  name: "Martian Manhunter",
  category: "dc",
  kills: 35,
  height: 201,
  age: 300,
  strength: 100,
  intelligence: 98,
  fame: 93,
  attractiveness: 88,
},
{
  name: "John Constantine",
  category: "dc",
  kills: 12,
  height: 183,
  age: 40,
  strength: 87,
  intelligence: 99,
  fame: 94,
  attractiveness: 91,
},
{
  name: "Raven",
  category: "dc",
  kills: 15,
  height: 165,
  age: 20,
  strength: 99,
  intelligence: 94,
  fame: 96,
  attractiveness: 95,
},
{
  name: "Starfire",
  category: "dc",
  kills: 25,
  height: 193,
  age: 25,
  strength: 97,
  intelligence: 85,
  fame: 94,
  attractiveness: 98,
},
{
  name: "Beast Boy",
  category: "dc",
  kills: 5,
  height: 173,
  age: 20,
  strength: 91,
  intelligence: 82,
  fame: 92,
  attractiveness: 88,
},
{
  name: "Blue Beetle",
  category: "dc",
  kills: 8,
  height: 173,
  age: 18,
  strength: 95,
  intelligence: 87,
  fame: 91,
  attractiveness: 92,
},
{
  name: "Black Adam",
  category: "dc",
  kills: 150,
  height: 191,
  age: 5000,
  strength: 100,
  intelligence: 91,
  fame: 97,
  attractiveness: 92,
},
{
  name: "Lucifer Morningstar",
  category: "dc",
  kills: 50,
  height: 191,
  age: 1000000,
  strength: 100,
  intelligence: 100,
  fame: 98,
  attractiveness: 99,
},
{
  name: "Scarecrow",
  category: "dc",
  kills: 10,
  height: 183,
  age: 45,
  strength: 75,
  intelligence: 97,
  fame: 94,
  attractiveness: 63,
},
{
  name: "Two-Face",
  category: "dc",
  kills: 25,
  height: 183,
  age: 45,
  strength: 72,
  intelligence: 92,
  fame: 96,
  attractiveness: 70,
},

  // Weitere DC-Film- und Serienfiguren (106 insgesamt)
  // Michael Caine; The-Dark-Knight-Trilogie
  {
    name: "Alfred Pennyworth",
    category: "dc",
    kills: 0,
    height: 188, // [SCHAETZUNG] The Dark Knight Rises; angenaeherte Bildschirmgestalt in cm
    age: 80, // [SCHAETZUNG] The Dark Knight Rises; Jahre, kein gesicherter exakter Kanonwert
    strength: 30,
    intelligence: 91,
    fame: 93,
    attractiveness: 58,
  },
  // Gary Oldman; The-Dark-Knight-Trilogie
  {
    name: "James Gordon",
    category: "dc",
    kills: 1,
    height: 175, // [SCHAETZUNG] The Dark Knight Rises; angenaeherte Bildschirmgestalt in cm
    age: 60, // [SCHAETZUNG] The Dark Knight Rises; Jahre, kein gesicherter exakter Kanonwert
    strength: 45,
    intelligence: 87,
    fame: 92,
    attractiveness: 66,
  },
  // Amy Adams; Man of Steel / Batman v Superman / Justice League
  {
    name: "Lois Lane",
    category: "dc",
    kills: 0,
    height: 163, // [SCHAETZUNG] Man of Steel; angenaeherte Bildschirmgestalt in cm
    age: 33, // [SCHAETZUNG] Man of Steel; Jahre, kein gesicherter exakter Kanonwert
    strength: 31,
    intelligence: 92,
    fame: 94,
    attractiveness: 90,
  },
  // Mehcad Brooks; Supergirl
  {
    name: "Jimmy Olsen",
    category: "dc",
    kills: 0,
    height: 190, // [SCHAETZUNG] Supergirl; angenaeherte Bildschirmgestalt in cm
    age: 35, // [SCHAETZUNG] Supergirl; Jahre, kein gesicherter exakter Kanonwert
    strength: 68,
    intelligence: 82,
    fame: 80,
    attractiveness: 86,
  },
  // Diane Lane; Man of Steel / Batman v Superman
  {
    name: "Martha Kent",
    category: "dc",
    kills: 0,
    height: 170, // [SCHAETZUNG] Man of Steel; angenaeherte Bildschirmgestalt in cm
    age: 60, // [SCHAETZUNG] Man of Steel; Jahre, kein gesicherter exakter Kanonwert
    strength: 23,
    intelligence: 76,
    fame: 80,
    attractiveness: 76,
  },
  // Michael Shannon; Man of Steel
  {
    name: "General Zod",
    category: "dc",
    kills: 20,
    height: 190, // [SCHAETZUNG] Man of Steel; persoenliches Lebensalter; angenaeherte Bildschirmgestalt in cm
    age: 55, // [SCHAETZUNG] Man of Steel; persoenliches Lebensalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 99,
    intelligence: 88,
    fame: 92,
    attractiveness: 62,
  },
  // Antje Traue; Man of Steel
  {
    name: "Faora",
    category: "dc",
    kills: 10,
    height: 170, // [SCHAETZUNG] Man of Steel; persoenliches Lebensalter; angenaeherte Bildschirmgestalt in cm
    age: 50, // [SCHAETZUNG] Man of Steel; persoenliches Lebensalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 97,
    intelligence: 84,
    fame: 81,
    attractiveness: 90,
  },
  // Kreatur; Batman v Superman
  {
    name: "Doomsday",
    category: "dc",
    kills: 1,
    height: 350, // [SCHAETZUNG] Batman v Superman; Tage seit Erschaffung dieser Kreatur, nicht Zods Alter; angenaeherte Bildschirmgestalt in cm
    age: 0, // [SCHAETZUNG] Batman v Superman; Tage seit Erschaffung dieser Kreatur, nicht Zods Alter; Jahre, kein gesicherter exakter Kanonwert
    strength: 100,
    intelligence: 24,
    fame: 88,
    attractiveness: 0,
  },
  // Ciarán Hinds; Zack Snyder’s Justice League
  {
    name: "Steppenwolf",
    category: "dc",
    kills: 30,
    height: 300, // [SCHAETZUNG] Zack Snyder's Justice League; CGI-Form, grober Alters-Spielwert; angenaeherte Bildschirmgestalt in cm
    age: 5000, // [SPIELWERT] Zack Snyder's Justice League; CGI-Form, grober Alters-Spielwert; Jahre, kein gesicherter exakter Kanonwert
    strength: 98,
    intelligence: 76,
    fame: 85,
    attractiveness: 0,
  },
  // Kristen Wiig; Wonder Woman 1984
  {
    name: "Cheetah",
    category: "dc",
    kills: 0,
    height: 178, // [SCHAETZUNG] Wonder Woman 1984; verwandelte Form, Barbaras Lebensalter; angenaeherte Bildschirmgestalt in cm
    age: 35, // [SCHAETZUNG] Wonder Woman 1984; verwandelte Form, Barbaras Lebensalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 93,
    intelligence: 86,
    fame: 83,
    attractiveness: 0,
  },
  // Pedro Pascal; Wonder Woman 1984
  {
    name: "Maxwell Lord",
    category: "dc",
    kills: 0,
    height: 180, // [SCHAETZUNG] Wonder Woman 1984; angenaeherte Bildschirmgestalt in cm
    age: 45, // [SCHAETZUNG] Wonder Woman 1984; Jahre, kein gesicherter exakter Kanonwert
    strength: 46,
    intelligence: 88,
    fame: 79,
    attractiveness: 82,
  },
  // David Thewlis; Wonder Woman
  {
    name: "Ares",
    category: "dc",
    kills: 20,
    height: 190, // [SCHAETZUNG] Wonder Woman; grober Spielwert fuer Gott; angenaeherte Bildschirmgestalt in cm
    age: 6000, // [SPIELWERT] Wonder Woman; grober Spielwert fuer Gott; Jahre, kein gesicherter exakter Kanonwert
    strength: 99,
    intelligence: 94,
    fame: 84,
    attractiveness: 0,
  },
  // Patrick Wilson; Aquaman / Aquaman and the Lost Kingdom
  {
    name: "Orm",
    category: "dc",
    kills: 5,
    height: 183, // [SCHAETZUNG] Aquaman, erster Film; angenaeherte Bildschirmgestalt in cm
    age: 35, // [SCHAETZUNG] Aquaman, erster Film; Jahre, kein gesicherter exakter Kanonwert
    strength: 91,
    intelligence: 81,
    fame: 83,
    attractiveness: 87,
  },
  // Yahya Abdul-Mateen II; Aquaman / Aquaman and the Lost Kingdom
  {
    name: "Black Manta",
    category: "dc",
    kills: 10,
    height: 190, // [SCHAETZUNG] Aquaman, erster Film; angenaeherte Bildschirmgestalt in cm
    age: 30, // [SCHAETZUNG] Aquaman, erster Film; Jahre, kein gesicherter exakter Kanonwert
    strength: 85,
    intelligence: 86,
    fame: 86,
    attractiveness: 82,
  },
  // Amber Heard; Aquaman
  {
    name: "Mera",
    category: "dc",
    kills: 5,
    height: 170, // [SCHAETZUNG] Aquaman, erster Film; angenaeherte Bildschirmgestalt in cm
    age: 30, // [SCHAETZUNG] Aquaman, erster Film; Jahre, kein gesicherter exakter Kanonwert
    strength: 91,
    intelligence: 83,
    fame: 88,
    attractiveness: 93,
  },
  // Connie Nielsen; Wonder Woman / Justice League
  {
    name: "Hippolyta",
    category: "dc",
    kills: 5,
    height: 178, // [SCHAETZUNG] Wonder Woman; grober Spielwert fuer langlebige Amazone; angenaeherte Bildschirmgestalt in cm
    age: 5000, // [SPIELWERT] Wonder Woman; grober Spielwert fuer langlebige Amazone; Jahre, kein gesicherter exakter Kanonwert
    strength: 85,
    intelligence: 91,
    fame: 82,
    attractiveness: 85,
  },
  // Robin Wright; Wonder Woman
  {
    name: "Antiope",
    category: "dc",
    kills: 5,
    height: 168, // [SCHAETZUNG] Wonder Woman; grober Spielwert fuer langlebige Amazone; angenaeherte Bildschirmgestalt in cm
    age: 5000, // [SPIELWERT] Wonder Woman; grober Spielwert fuer langlebige Amazone; Jahre, kein gesicherter exakter Kanonwert
    strength: 84,
    intelligence: 88,
    fame: 77,
    attractiveness: 84,
  },
  // Mark Strong; Shazam!
  {
    name: "Doctor Sivana",
    category: "dc",
    kills: 7,
    height: 188, // [SCHAETZUNG] Shazam!; aus Kindheitsrueckblende angenaehert; angenaeherte Bildschirmgestalt in cm
    age: 55, // [SCHAETZUNG] Shazam!; aus Kindheitsrueckblende angenaehert; Jahre, kein gesicherter exakter Kanonwert
    strength: 93,
    intelligence: 91,
    fame: 79,
    attractiveness: 67,
  },
  // Pierce Brosnan; Black Adam
  {
    name: "Doctor Fate",
    category: "dc",
    kills: 5,
    height: 188, // [SCHAETZUNG] Black Adam; Kent Nelson, nicht Alter des Helms; angenaeherte Bildschirmgestalt in cm
    age: 90, // [SCHAETZUNG] Black Adam; Kent Nelson, nicht Alter des Helms; Jahre, kein gesicherter exakter Kanonwert
    strength: 98,
    intelligence: 97,
    fame: 88,
    attractiveness: 86,
  },
  // Aldis Hodge; Black Adam
  {
    name: "Hawkman",
    category: "dc",
    kills: 5,
    height: 185, // [SCHAETZUNG] Black Adam; aktuelle menschliche Inkarnation; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Black Adam; aktuelle menschliche Inkarnation; Jahre, kein gesicherter exakter Kanonwert
    strength: 88,
    intelligence: 85,
    fame: 86,
    attractiveness: 90,
  },
  // John Cena; The Suicide Squad / Peacemaker
  {
    name: "Peacemaker",
    category: "dc",
    kills: 25,
    height: 185, // [SCHAETZUNG] Peacemaker, Staffel 1; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Peacemaker, Staffel 1; Jahre, kein gesicherter exakter Kanonwert
    strength: 78,
    intelligence: 65,
    fame: 91,
    attractiveness: 84,
  },
  // Idris Elba; The Suicide Squad
  {
    name: "Bloodsport",
    category: "dc",
    kills: 15,
    height: 190, // [SCHAETZUNG] The Suicide Squad; angenaeherte Bildschirmgestalt in cm
    age: 45, // [SCHAETZUNG] The Suicide Squad; Jahre, kein gesicherter exakter Kanonwert
    strength: 77,
    intelligence: 85,
    fame: 86,
    attractiveness: 88,
  },
  // Daniela Melchior; The Suicide Squad
  {
    name: "Ratcatcher II",
    category: "dc",
    kills: 1,
    height: 170, // [SCHAETZUNG] The Suicide Squad; angenaeherte Bildschirmgestalt in cm
    age: 25, // [SCHAETZUNG] The Suicide Squad; Jahre, kein gesicherter exakter Kanonwert
    strength: 73,
    intelligence: 79,
    fame: 80,
    attractiveness: 86,
  },
  // David Dastmalchian; The Suicide Squad
  {
    name: "Polka-Dot Man",
    category: "dc",
    kills: 5,
    height: 185, // [SCHAETZUNG] The Suicide Squad; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] The Suicide Squad; Jahre, kein gesicherter exakter Kanonwert
    strength: 83,
    intelligence: 69,
    fame: 75,
    attractiveness: 52,
  },
  // Nanaue; The Suicide Squad
  {
    name: "King Shark",
    category: "dc",
    kills: 15,
    height: 240, // [SCHAETZUNG] The Suicide Squad; CGI-Koerper, grober Lebensalters-Spielwert; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SPIELWERT] The Suicide Squad; CGI-Koerper, grober Lebensalters-Spielwert; Jahre, kein gesicherter exakter Kanonwert
    strength: 94,
    intelligence: 29,
    fame: 87,
    attractiveness: 0,
  },
  // Joel Kinnaman; Suicide Squad / The Suicide Squad
  {
    name: "Rick Flag",
    category: "dc",
    kills: 15,
    height: 190, // [SCHAETZUNG] The Suicide Squad; angenaeherte Bildschirmgestalt in cm
    age: 35, // [SCHAETZUNG] The Suicide Squad; Jahre, kein gesicherter exakter Kanonwert
    strength: 72,
    intelligence: 83,
    fame: 82,
    attractiveness: 88,
  },
  // Viola Davis; Suicide Squad / The Suicide Squad
  {
    name: "Amanda Waller",
    category: "dc",
    kills: 5,
    height: 165, // [SCHAETZUNG] Suicide Squad; angenaeherte Bildschirmgestalt in cm
    age: 55, // [SCHAETZUNG] Suicide Squad; Jahre, kein gesicherter exakter Kanonwert
    strength: 24,
    intelligence: 96,
    fame: 87,
    attractiveness: 66,
  },
  // Will Smith; Suicide Squad
  {
    name: "Deadshot",
    category: "dc",
    kills: 30,
    height: 188, // [SCHAETZUNG] Suicide Squad; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Suicide Squad; Jahre, kein gesicherter exakter Kanonwert
    strength: 73,
    intelligence: 86,
    fame: 90,
    attractiveness: 89,
  },
  // Jai Courtney; Suicide Squad / The Suicide Squad
  {
    name: "Captain Boomerang",
    category: "dc",
    kills: 5,
    height: 185, // [SCHAETZUNG] Suicide Squad; angenaeherte Bildschirmgestalt in cm
    age: 35, // [SCHAETZUNG] Suicide Squad; Jahre, kein gesicherter exakter Kanonwert
    strength: 65,
    intelligence: 62,
    fame: 80,
    attractiveness: 72,
  },
  // Adewale Akinnuoye-Agbaje; Suicide Squad
  {
    name: "Killer Croc",
    category: "dc",
    kills: 5,
    height: 190, // [SCHAETZUNG] Suicide Squad; Filmgestalt; angenaeherte Bildschirmgestalt in cm
    age: 35, // [SCHAETZUNG] Suicide Squad; Filmgestalt; Jahre, kein gesicherter exakter Kanonwert
    strength: 85,
    intelligence: 54,
    fame: 84,
    attractiveness: 0,
  },
  // Cara Delevingne; Suicide Squad
  {
    name: "Enchantress",
    category: "dc",
    kills: 20,
    height: 173, // [SCHAETZUNG] Suicide Squad; Alter des Hexengeistes, nicht June Moone; angenaeherte Bildschirmgestalt in cm
    age: 6313, // [BELEGT] Suicide-Squad-Filmpromo nennt 6313 Years Young; Hexengeist, nicht June Moone; https://www.popisms.com/TelevisionCommercial/127071/Suicide-Squad-Commercial-2016
    strength: 98,
    intelligence: 87,
    fame: 81,
    attractiveness: 0,
  },
  // Karen Fukuhara; Suicide Squad
  {
    name: "Katana",
    category: "dc",
    kills: 10,
    height: 160, // [SCHAETZUNG] Suicide Squad; angenaeherte Bildschirmgestalt in cm
    age: 30, // [SCHAETZUNG] Suicide Squad; Jahre, kein gesicherter exakter Kanonwert
    strength: 76,
    intelligence: 81,
    fame: 80,
    attractiveness: 88,
  },
  // Mary Elizabeth Winstead; Birds of Prey
  {
    name: "Huntress",
    category: "dc",
    kills: 8,
    height: 173, // [SCHAETZUNG] Birds of Prey; angenaeherte Bildschirmgestalt in cm
    age: 30, // [SCHAETZUNG] Birds of Prey; Jahre, kein gesicherter exakter Kanonwert
    strength: 73,
    intelligence: 82,
    fame: 81,
    attractiveness: 89,
  },
  // Ewan McGregor; Birds of Prey
  {
    name: "Black Mask",
    category: "dc",
    kills: 5,
    height: 178, // [SCHAETZUNG] Birds of Prey; angenaeherte Bildschirmgestalt in cm
    age: 45, // [SCHAETZUNG] Birds of Prey; Jahre, kein gesicherter exakter Kanonwert
    strength: 45,
    intelligence: 78,
    fame: 81,
    attractiveness: 77,
  },
  // Chris Messina; Birds of Prey
  {
    name: "Victor Zsasz",
    category: "dc",
    kills: 15,
    height: 175, // [SCHAETZUNG] Birds of Prey; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Birds of Prey; Jahre, kein gesicherter exakter Kanonwert
    strength: 63,
    intelligence: 68,
    fame: 72,
    attractiveness: 52,
  },
  // Rosie Perez; Birds of Prey
  {
    name: "Renee Montoya",
    category: "dc",
    kills: 0,
    height: 155, // [SCHAETZUNG] Birds of Prey; angenaeherte Bildschirmgestalt in cm
    age: 55, // [SCHAETZUNG] Birds of Prey; Jahre, kein gesicherter exakter Kanonwert
    strength: 52,
    intelligence: 86,
    fame: 72,
    attractiveness: 69,
  },
  // Joshua Orpin; Titans
  {
    name: "Superboy",
    category: "dc",
    kills: 5,
    height: 185, // [SCHAETZUNG] Titans; chronologisches Klonalter, nicht Koerperreife; angenaeherte Bildschirmgestalt in cm
    age: 1, // [SCHAETZUNG] Titans; chronologisches Klonalter, nicht Koerperreife; Jahre, kein gesicherter exakter Kanonwert
    strength: 97,
    intelligence: 74,
    fame: 85,
    attractiveness: 0,
  },
  // Jason Todd – Curran Walters; Titans
  {
    name: "Red Hood",
    category: "dc",
    kills: 10,
    height: 173, // [SCHAETZUNG] Titans, Staffel 3; angenaeherte Bildschirmgestalt in cm
    age: 19, // [SCHAETZUNG] Titans, Staffel 3; Jahre, kein gesicherter exakter Kanonwert
    strength: 77,
    intelligence: 78,
    fame: 88,
    attractiveness: 0,
  },
  // Conor Leslie; Titans
  {
    name: "Donna Troy",
    category: "dc",
    kills: 5,
    height: 175, // [SCHAETZUNG] Titans, Staffel 2; angenaeherte Bildschirmgestalt in cm
    age: 25, // [SCHAETZUNG] Titans, Staffel 2; Jahre, kein gesicherter exakter Kanonwert
    strength: 91,
    intelligence: 85,
    fame: 79,
    attractiveness: 91,
  },
  // Alan Ritchson; Titans
  {
    name: "Hawk",
    category: "dc",
    kills: 5,
    height: 188, // [SCHAETZUNG] Titans; angenaeherte Bildschirmgestalt in cm
    age: 30, // [SCHAETZUNG] Titans; Jahre, kein gesicherter exakter Kanonwert
    strength: 73,
    intelligence: 67,
    fame: 76,
    attractiveness: 88,
  },
  // Minka Kelly; Titans
  {
    name: "Dove",
    category: "dc",
    kills: 0,
    height: 165, // [SCHAETZUNG] Titans; angenaeherte Bildschirmgestalt in cm
    age: 30, // [SCHAETZUNG] Titans; Jahre, kein gesicherter exakter Kanonwert
    strength: 69,
    intelligence: 81,
    fame: 75,
    attractiveness: 90,
  },
  // Kate Kane – Ruby Rose; Batwoman
  {
    name: "Batwoman",
    category: "dc",
    kills: 1,
    height: 170, // [SCHAETZUNG] Batwoman, Staffel 1, 2019; angenaeherte Bildschirmgestalt in cm
    age: 29, // [ABLEITUNG] Kate Kane laut Serienwiki geboren 26.01.1990; Referenz Oktober 2019 ergibt 29; https://arrow.fandom.com/wiki/Kate_Kane
    strength: 75,
    intelligence: 86,
    fame: 85,
    attractiveness: 86,
  },
  // Sara Lance – Caity Lotz; Arrow / Legends of Tomorrow
  {
    name: "White Canary",
    category: "dc",
    kills: 15,
    height: 168, // [SCHAETZUNG] Legends of Tomorrow, Anfang Staffel 1, Januar 2016; angenaeherte Bildschirmgestalt in cm
    age: 28, // [ABLEITUNG] Sara Lance laut Serienwiki geboren 25.12.1987; Referenz Januar 2016 ergibt 28; https://arrow.fandom.com/wiki/Sara_Lance
    strength: 79,
    intelligence: 83,
    fame: 82,
    attractiveness: 90,
  },
  // Ray Palmer – Brandon Routh; Arrow / Legends of Tomorrow
  {
    name: "The Atom",
    category: "dc",
    kills: 0,
    height: 190, // [SCHAETZUNG] Legends of Tomorrow, Staffel 1; normales Koerpermass; angenaeherte Bildschirmgestalt in cm
    age: 35, // [SCHAETZUNG] Legends of Tomorrow, Staffel 1; normales Koerpermass; Jahre, kein gesicherter exakter Kanonwert
    strength: 81,
    intelligence: 98,
    fame: 82,
    attractiveness: 88,
  },
  // Jefferson Jackson / Martin Stein – Franz Drameh / Victor Garber; Legends of Tomorrow
  {
    name: "Firestorm",
    category: "dc",
    kills: 2,
    height: 178, // [SCHAETZUNG] Legends of Tomorrow, Anfang Staffel 1; Jax als Koerper, nicht Martin Stein; angenaeherte Bildschirmgestalt in cm
    age: 22, // [ABLEITUNG] Jax laut Serienwiki geboren 12.09.1993; Referenz Januar 2016 ergibt 22; https://arrow.fandom.com/wiki/Jefferson_Jackson
    strength: 94,
    intelligence: 88,
    fame: 81,
    attractiveness: 80,
  },
  // Wentworth Miller; The Flash / Legends of Tomorrow
  {
    name: "Captain Cold",
    category: "dc",
    kills: 5,
    height: 185, // [SCHAETZUNG] Legends of Tomorrow, Anfang Staffel 1, Januar 2016; angenaeherte Bildschirmgestalt in cm
    age: 43, // [ABLEITUNG] Leonard Snart laut Serienwiki geboren 02.06.1972; Referenz Januar 2016 ergibt 43; https://arrow.fandom.com/wiki/Leonard_Snart
    strength: 69,
    intelligence: 88,
    fame: 82,
    attractiveness: 84,
  },
  // Dominic Purcell; The Flash / Legends of Tomorrow
  {
    name: "Heat Wave",
    category: "dc",
    kills: 10,
    height: 185, // [SCHAETZUNG] Legends of Tomorrow, Anfang Staffel 1; angenaeherte Bildschirmgestalt in cm
    age: 42, // [SCHAETZUNG] Legends of Tomorrow, Anfang Staffel 1; Jahre, kein gesicherter exakter Kanonwert
    strength: 73,
    intelligence: 65,
    fame: 76,
    attractiveness: 71,
  },
  // Eobard Thawne – Tom Cavanagh; The Flash
  {
    name: "Reverse-Flash",
    category: "dc",
    kills: 15,
    height: 183, // [SCHAETZUNG] The Flash, Staffel 1; Erscheinungsalter im Wells-Koerper; angenaeherte Bildschirmgestalt in cm
    age: 50, // [SCHAETZUNG] The Flash, Staffel 1; Erscheinungsalter im Wells-Koerper; Jahre, kein gesicherter exakter Kanonwert
    strength: 98,
    intelligence: 99,
    fame: 88,
    attractiveness: 75,
  },
  // Hunter Zolomon – Teddy Sears; The Flash
  {
    name: "Zoom",
    category: "dc",
    kills: 15,
    height: 193, // [SCHAETZUNG] The Flash, Staffel 2; angenaeherte Bildschirmgestalt in cm
    age: 33, // [SCHAETZUNG] The Flash, Staffel 2; Jahre, kein gesicherter exakter Kanonwert
    strength: 97,
    intelligence: 86,
    fame: 82,
    attractiveness: 76,
  },
  // Danielle Panabaker; The Flash
  {
    name: "Killer Frost",
    category: "dc",
    kills: 2,
    height: 168, // [SCHAETZUNG] The Flash, Staffel 3; Koerperalter der Caitlin-Fassung; angenaeherte Bildschirmgestalt in cm
    age: 28, // [SCHAETZUNG] The Flash, Staffel 3; Koerperalter der Caitlin-Fassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 84,
    intelligence: 86,
    fame: 82,
    attractiveness: 89,
  },
  // Megalyn Echikunwoke; Arrow
  {
    name: "Vixen",
    category: "dc",
    kills: 0,
    height: 170, // [SCHAETZUNG] Arrow, Staffel 4; angenaeherte Bildschirmgestalt in cm
    age: 28, // [SCHAETZUNG] Arrow, Staffel 4; Jahre, kein gesicherter exakter Kanonwert
    strength: 81,
    intelligence: 78,
    fame: 73,
    attractiveness: 88,
  },
  // Cress Williams; Black Lightning
  {
    name: "Black Lightning",
    category: "dc",
    kills: 5,
    height: 196, // [SCHAETZUNG] Black Lightning, Anfang Staffel 1, Januar 2018; angenaeherte Bildschirmgestalt in cm
    age: 43, // [ABLEITUNG] Jefferson Pierce laut Serienwiki geboren 12.09.1974; Referenz Januar 2018 ergibt 43; https://arrow.fandom.com/wiki/Jefferson_Pierce
    strength: 88,
    intelligence: 86,
    fame: 81,
    attractiveness: 79,
  },
  // Brec Bassinger; Stargirl
  {
    name: "Stargirl",
    category: "dc",
    kills: 0,
    height: 155, // [SCHAETZUNG] Stargirl, Staffel 1; angenaeherte Bildschirmgestalt in cm
    age: 15, // [BELEGT] Stargirl, Staffel 1; Serienversion laut DC Database; DC Database: Courtney Whitmore, Stargirl TV Series
    strength: 81,
    intelligence: 72,
    fame: 77,
    attractiveness: 0,
  },
  // John Henry Irons – Wole Parks; Superman & Lois
  {
    name: "Steel",
    category: "dc",
    kills: 2,
    height: 180, // [SCHAETZUNG] Superman & Lois; ohne vergroessernde Ruestung; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Superman & Lois; ohne vergroessernde Ruestung; Jahre, kein gesicherter exakter Kanonwert
    strength: 85,
    intelligence: 91,
    fame: 73,
    attractiveness: 82,
  },
  // James Marsters; Smallville
  {
    name: "Brainiac",
    category: "dc",
    kills: 10,
    height: 178, // [SCHAETZUNG] Smallville; menschliche Erscheinung, grober KI-Alters-Spielwert; angenaeherte Bildschirmgestalt in cm
    age: 1000, // [SPIELWERT] Smallville; menschliche Erscheinung, grober KI-Alters-Spielwert; Jahre, kein gesicherter exakter Kanonwert
    strength: 95,
    intelligence: 100,
    fame: 87,
    attractiveness: 0,
  },
  // Liam Neeson; Batman Begins
  {
    name: "Ra’s al Ghul",
    category: "dc",
    kills: 10,
    height: 193, // [SCHAETZUNG] Batman Begins; sterbliche Nolan-Fassung; angenaeherte Bildschirmgestalt in cm
    age: 60, // [SCHAETZUNG] Batman Begins; sterbliche Nolan-Fassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 77,
    intelligence: 96,
    fame: 87,
    attractiveness: 76,
  },
  // Marion Cotillard; The Dark Knight Rises
  {
    name: "Talia al Ghul",
    category: "dc",
    kills: 5,
    height: 168, // [SCHAETZUNG] The Dark Knight Rises; angenaeherte Bildschirmgestalt in cm
    age: 35, // [SCHAETZUNG] The Dark Knight Rises; Jahre, kein gesicherter exakter Kanonwert
    strength: 55,
    intelligence: 92,
    fame: 81,
    attractiveness: 88,
  },
  // Derek Mears; Swamp Thing (2019)
  {
    name: "Swamp Thing",
    category: "dc",
    kills: 5,
    height: 198, // [SCHAETZUNG] Swamp Thing (2019); Zeit seit Entstehung der Kreatur; angenaeherte Bildschirmgestalt in cm
    age: 0, // [SCHAETZUNG] Swamp Thing (2019); Zeit seit Entstehung der Kreatur; Jahre, kein gesicherter exakter Kanonwert
    strength: 94,
    intelligence: 78,
    fame: 83,
    attractiveness: 0,
  },
  // Cliff Steele – Brendan Fraser / Riley Shanahan; Doom Patrol
  {
    name: "Robotman",
    category: "dc",
    kills: 5,
    height: 198, // [BELEGT] Doom-Patrol-Serienfassung laut DC Database: 6 Fuss 6 Zoll, auf 198 cm gerundet; https://dc.fandom.com/wiki/Clifford_Steele_(Doom_Patrol_TV_Series)
    age: 60, // [SCHAETZUNG] Doom Patrol; Roboterkoerper, Cliff Steeles Lebensalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 84,
    intelligence: 61,
    fame: 76,
    attractiveness: 0,
  },
  // Larry Trainor – Matt Bomer / Matthew Zuk; Doom Patrol
  {
    name: "Negative Man",
    category: "dc",
    kills: 2,
    height: 188, // [SCHAETZUNG] Doom Patrol, Staffel 1; Larrys Gesamtlebensalter; angenaeherte Bildschirmgestalt in cm
    age: 90, // [SCHAETZUNG] Doom Patrol, Staffel 1; Larrys Gesamtlebensalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 88,
    intelligence: 81,
    fame: 71,
    attractiveness: 0,
  },
  // Diane Guerrero; Doom Patrol
  {
    name: "Crazy Jane",
    category: "dc",
    kills: 5,
    height: 157, // [SCHAETZUNG] Doom Patrol, Staffel 1; Kays Gesamtlebensalter; angenaeherte Bildschirmgestalt in cm
    age: 70, // [SCHAETZUNG] Doom Patrol, Staffel 1; Kays Gesamtlebensalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 92,
    intelligence: 79,
    fame: 73,
    attractiveness: 85,
  },
  // Rita Farr – April Bowlby; Doom Patrol
  {
    name: "Elasti-Woman",
    category: "dc",
    kills: 0,
    height: 178, // [SCHAETZUNG] Doom Patrol, Staffel 1; normale Koerpergestalt, Ritas Gesamtlebensalter; angenaeherte Bildschirmgestalt in cm
    age: 100, // [SCHAETZUNG] Doom Patrol, Staffel 1; normale Koerpergestalt, Ritas Gesamtlebensalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 79,
    intelligence: 78,
    fame: 72,
    attractiveness: 90,
  },
  // Lesley-Ann Brandt; Lucifer
  {
    name: "Mazikeen",
    category: "dc",
    kills: 20,
    height: 170, // [SCHAETZUNG] Lucifer; sehr grober Spielwert fuer zeitlose Daemonin; angenaeherte Bildschirmgestalt in cm
    age: 10000, // [SPIELWERT] Lucifer; sehr grober Spielwert fuer zeitlose Daemonin; Jahre, kein gesicherter exakter Kanonwert
    strength: 88,
    intelligence: 76,
    fame: 84,
    attractiveness: 91,
  },
  // D. B. Woodside; Lucifer
  {
    name: "Amenadiel",
    category: "dc",
    kills: 5,
    height: 190, // [SCHAETZUNG] Lucifer; vor Schoepfung, pauschaler kosmischer Spielwert ohne bestaetigtes Zahlenalter; angenaeherte Bildschirmgestalt in cm
    age: 14000000000, // [SPIELWERT] Lucifer; vor Schoepfung, pauschaler kosmischer Spielwert ohne bestaetigtes Zahlenalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 99,
    intelligence: 86,
    fame: 82,
    attractiveness: 89,
  },
  // Lauren German; Lucifer
  {
    name: "Chloe Decker",
    category: "dc",
    kills: 1,
    height: 170, // [SCHAETZUNG] Lucifer, Anfang Staffel 1, Januar 2016; angenaeherte Bildschirmgestalt in cm
    age: 34, // [ABLEITUNG] Geburt laut Serienwiki 06.11.1981; Referenz Januar 2016 ergibt 34; https://lucifer.fandom.com/wiki/Chloe_Decker
    strength: 40,
    intelligence: 87,
    fame: 85,
    attractiveness: 89,
  },

  // Weitere Film- und Serienfiguren (DC: 106 insgesamt)
  // Michael Holt – Edi Gathegi; Superman (2025)
  {
    name: "Mister Terrific",
    category: "dc",
    kills: 0,
    height: 185, // [SCHAETZUNG] Superman (2025); angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Superman (2025); Jahre, kein gesicherter exakter Kanonwert
    strength: 82,
    intelligence: 100,
    fame: 82,
    attractiveness: 84,
  },

  // Kendra Saunders – Isabela Merced; Superman (2025)
  {
    name: "Hawkgirl",
    category: "dc",
    kills: 1,
    height: 155, // [SCHAETZUNG] Superman (2025); angenaeherte Bildschirmgestalt in cm
    age: 25, // [SCHAETZUNG] Superman (2025); Jahre, kein gesicherter exakter Kanonwert
    strength: 86,
    intelligence: 79,
    fame: 82,
    attractiveness: 89,
  },

  // Superhund; Superman (2025)
  {
    name: "Krypto",
    category: "dc",
    kills: 0,
    height: 50, // [SCHAETZUNG] Superman (2025); Schulterhoehe des Hundes; angenaeherte Bildschirmgestalt in cm
    age: 3, // [SCHAETZUNG] Superman (2025); Schulterhoehe des Hundes; Jahre, kein gesicherter exakter Kanonwert
    strength: 96,
    intelligence: 51,
    fame: 89,
    attractiveness: 0,
  },

  // Mark Strong; Green Lantern (2011)
  {
    name: "Sinestro",
    category: "dc",
    kills: 5,
    height: 188, // [SCHAETZUNG] Green Lantern (2011); angenaeherte Bildschirmgestalt in cm
    age: 50, // [SCHAETZUNG] Green Lantern (2011); Jahre, kein gesicherter exakter Kanonwert
    strength: 94,
    intelligence: 93,
    fame: 86,
    attractiveness: 0,
  },

  // Adrian Chase – Freddie Stroma; Peacemaker
  {
    name: "Vigilante",
    category: "dc",
    kills: 20,
    height: 185, // [SCHAETZUNG] Peacemaker, Staffel 1; angenaeherte Bildschirmgestalt in cm
    age: 30, // [SCHAETZUNG] Peacemaker, Staffel 1; Jahre, kein gesicherter exakter Kanonwert
    strength: 74,
    intelligence: 62,
    fame: 81,
    attractiveness: 83,
  },

  // Kevin Costner; Man of Steel (2013)
  {
    name: "Jonathan Kent",
    category: "dc",
    kills: 0,
    height: 185, // [SCHAETZUNG] Man of Steel; zur Zeit seines Todes in der Rueckblende; angenaeherte Bildschirmgestalt in cm
    age: 50, // [SCHAETZUNG] Man of Steel; zur Zeit seines Todes in der Rueckblende; Jahre, kein gesicherter exakter Kanonwert
    strength: 30,
    intelligence: 78,
    fame: 83,
    attractiveness: 74,
  },

  // =========================
  // FLUCH DER KARIBIK
  // =========================
  {
    name: "Angelica",
    category: "fluch-der-karibik",
    kills: 8,
    height: 168,
    age: 35,
    strength: 71,
    intelligence: 88,
    fame: 83,
    attractiveness: 95,
  },
  {
    name: "Barbossa",
    category: "fluch-der-karibik",
    kills: 35,
    height: 182,
    age: 58,
    strength: 78,
    intelligence: 94,
    fame: 96,
    attractiveness: 72,
  },
  {
    name: "Blackbeard",
    category: "fluch-der-karibik",
    kills: 50,
    height: 188,
    age: 60,
    strength: 88,
    intelligence: 90,
    fame: 88,
    attractiveness: 65,
  },
  {
    name: "Bootstrap Bill",
    category: "fluch-der-karibik",
    kills: 12,
    height: 180,
    age: 50,
    strength: 79,
    intelligence: 75,
    fame: 77,
    attractiveness: 68,
  },
  {
    name: "Captain Teague",
    category: "fluch-der-karibik",
    kills: 30,
    height: 174,
    age: 65,
    strength: 82,
    intelligence: 93,
    fame: 79,
    attractiveness: 72,
  },
  {
    name: "Cotton",
    category: "fluch-der-karibik",
    kills: 8,
    height: 175,
    age: 50,
    strength: 68,
    intelligence: 72,
    fame: 65,
    attractiveness: 60,
  },
  {
    name: "Cutler Beckett",
    category: "fluch-der-karibik",
    kills: 2,
    height: 170,
    age: 40,
    strength: 40,
    intelligence: 96,
    fame: 89,
    attractiveness: 70,
  },
  {
    name: "Davy Jones",
    category: "fluch-der-karibik",
    kills: 60,
    height: 188,
    age: 110,
    strength: 97,
    intelligence: 91,
    fame: 96,
    attractiveness: 35,
  },
  {
    name: "Elizabeth Swann",
    category: "fluch-der-karibik",
    kills: 10,
    height: 170,
    age: 25,
    strength: 69,
    intelligence: 91,
    fame: 97,
    attractiveness: 97,
  },
  {
    name: "Giselle",
    category: "fluch-der-karibik",
    kills: 1,
    height: 168,
    age: 30,
    strength: 50,
    intelligence: 72,
    fame: 62,
    attractiveness: 90,
  },
  {
    name: "Ian Mercer",
    category: "fluch-der-karibik",
    kills: 15,
    height: 180,
    age: 40,
    strength: 75,
    intelligence: 88,
    fame: 63,
    attractiveness: 69,
  },
  {
    name: "Jack Sparrow",
    category: "fluch-der-karibik",
    kills: 25,
    height: 178,
    age: 40,
    strength: 70,
    intelligence: 96,
    fame: 100,
    attractiveness: 94,
  },
  {
    name: "James Norrington",
    category: "fluch-der-karibik",
    kills: 20,
    height: 185,
    age: 35,
    strength: 82,
    intelligence: 90,
    fame: 90,
    attractiveness: 92,
  },
  {
    name: "Joshamee Gibbs",
    category: "fluch-der-karibik",
    kills: 12,
    height: 178,
    age: 50,
    strength: 72,
    intelligence: 84,
    fame: 91,
    attractiveness: 70,
  },
  {
    name: "Lieutenant Theodore Groves",
    category: "fluch-der-karibik",
    kills: 8,
    height: 183,
    age: 35,
    strength: 73,
    intelligence: 82,
    fame: 61,
    attractiveness: 78,
  },
  {
    name: "Marty",
    category: "fluch-der-karibik",
    kills: 5,
    height: 117,
    age: 35,
    strength: 55,
    intelligence: 73,
    fame: 66,
    attractiveness: 67,
  },
  {
    name: "Philip Swift",
    category: "fluch-der-karibik",
    kills: 3,
    height: 183,
    age: 30,
    strength: 72,
    intelligence: 82,
    fame: 68,
    attractiveness: 93,
  },
  {
    name: "Pintel",
    category: "fluch-der-karibik",
    kills: 15,
    height: 178,
    age: 40,
    strength: 74,
    intelligence: 70,
    fame: 81,
    attractiveness: 55,
  },
  {
    name: "Ragetti",
    category: "fluch-der-karibik",
    kills: 12,
    height: 188,
    age: 35,
    strength: 69,
    intelligence: 67,
    fame: 82,
    attractiveness: 58,
  },
  ]),
  ...defineDealCharacters([
  {
    name: "Scrum",
    category: "fluch-der-karibik",
    kills: 8,
    height: 180,
    age: 40,
    strength: 72,
    intelligence: 66,
    fame: 70,
    attractiveness: 62,
  },
  {
    name: "Syrena",
    category: "fluch-der-karibik",
    kills: 3,
    height: 170,
    age: 100, // [SPIELWERT] Fremde Gezeiten; Meerjungfrauen-Lebensalter, sehr grober Spielwert; Jahre, kein gesicherter exakter Kanonwert
    strength: 82,
    intelligence: 79,
    fame: 75,
    attractiveness: 96,
  },
  {
    name: "Tamara",
    category: "fluch-der-karibik",
    kills: 5,
    height: 168,
    age: 150, // [SPIELWERT] Fremde Gezeiten; Meerjungfrauen-Lebensalter, sehr grober Spielwert; Jahre, kein gesicherter exakter Kanonwert
    strength: 80,
    intelligence: 75,
    fame: 58,
    attractiveness: 94,
  },
  {
    name: "Tia Dalma",
    category: "fluch-der-karibik",
    kills: 2,
    height: 168,
    age: 1000, // [SPIELWERT] Calypso als Goettin; gesetzter Spielwert, kein bestaetigtes Lebensalter; Jahre, kein gesicherter exakter Kanonwert
    strength: 96,
    intelligence: 98,
    fame: 90,
    attractiveness: 87,
  },
  {
    name: "Weatherby Swann",
    category: "fluch-der-karibik",
    kills: 0,
    height: 180,
    age: 55,
    strength: 38,
    intelligence: 86,
    fame: 78,
    attractiveness: 68,
  },
  {
    name: "Will Turner",
    category: "fluch-der-karibik",
    kills: 30,
    height: 180,
    age: 30,
    strength: 84,
    intelligence: 87,
    fame: 98,
    attractiveness: 97,
  },
  {
  name: "Armando Salazar",
  category: "fluch-der-karibik",
  kills: 120,
  height: 188,
  age: 50,
  strength: 96,
  intelligence: 91,
  fame: 94,
  attractiveness: 72,
},
{
  name: "Henry Turner",
  category: "fluch-der-karibik",
  kills: 8,
  height: 180,
  age: 21,
  strength: 78,
  intelligence: 84,
  fame: 88,
  attractiveness: 93,
},
{
  name: "Carina Smyth",
  category: "fluch-der-karibik",
  kills: 1,
  height: 168,
  age: 21,
  strength: 66,
  intelligence: 97,
  fame: 87,
  attractiveness: 95,
},
{
  name: "Sao Feng",
  category: "fluch-der-karibik",
  kills: 35,
  height: 175,
  age: 45,
  strength: 84,
  intelligence: 90,
  fame: 91,
  attractiveness: 80,
},
{
  name: "Maccus",
  category: "fluch-der-karibik",
  kills: 30,
  height: 190,
  age: 45,
  strength: 91,
  intelligence: 74,
  fame: 84,
  attractiveness: 45,
},
{
  name: "Mullroy",
  category: "fluch-der-karibik",
  kills: 4,
  height: 178,
  age: 35,
  strength: 71,
  intelligence: 76,
  fame: 78,
  attractiveness: 72,
},
{
  name: "Murtogg",
  category: "fluch-der-karibik",
  kills: 4,
  height: 180,
  age: 35,
  strength: 72,
  intelligence: 75,
  fame: 78,
  attractiveness: 73,
},
{
  name: "Lieutenant Gillette",
  category: "fluch-der-karibik",
  kills: 6,
  height: 183,
  age: 35,
  strength: 76,
  intelligence: 84,
  fame: 79,
  attractiveness: 82,
},
{
  name: "Scarlett",
  category: "fluch-der-karibik",
  kills: 0,
  height: 165,
  age: 30,
  strength: 58,
  intelligence: 78,
  fame: 79,
  attractiveness: 90,
},
{
  name: "Jack the Monkey",
  category: "fluch-der-karibik",
  kills: 2,
  height: 45,
  age: 10,
  strength: 52,
  intelligence: 70,
  fame: 88,
  attractiveness: 50,
},

  // =========================
  // GAME OF THRONES
  // =========================
  {
    name: "Arya Stark",
    category: "game-of-thrones",
    kills: 25,
    height: 155,
    age: 18,
    strength: 66,
    intelligence: 91,
    fame: 98,
    attractiveness: 88,
  },
  {
    name: "Bran Stark",
    category: "game-of-thrones",
    kills: 0,
    height: 180,
    age: 17,
    strength: 35,
    intelligence: 96,
    fame: 91,
    attractiveness: 68,
  },
  {
    name: "Brienne von Tarth",
    category: "game-of-thrones",
    kills: 20,
    height: 191,
    age: 32,
    strength: 94,
    intelligence: 83,
    fame: 89,
    attractiveness: 83,
  },
  {
    name: "Catelyn Stark",
    category: "game-of-thrones",
    kills: 1,
    height: 165,
    age: 45,
    strength: 54,
    intelligence: 89,
    fame: 88,
    attractiveness: 85,
  },
  {
    name: "Cersei Lannister",
    category: "game-of-thrones",
    kills: 5,
    height: 166,
    age: 43,
    strength: 52,
    intelligence: 91,
    fame: 97,
    attractiveness: 94,
  },
  {
    name: "Daenerys Targaryen",
    category: "game-of-thrones",
    kills: 120,
    height: 157,
    age: 24,
    strength: 57,
    intelligence: 88,
    fame: 100,
    attractiveness: 97,
  },
  {
    name: "Davos Seaworth",
    category: "game-of-thrones",
    kills: 8,
    height: 185,
    age: 50,
    strength: 69,
    intelligence: 90,
    fame: 87,
    attractiveness: 77,
  },
  {
    name: "Gendry",
    category: "game-of-thrones",
    kills: 10,
    height: 182,
    age: 23,
    strength: 91,
    intelligence: 74,
    fame: 84,
    attractiveness: 93,
  },
  {
    name: "Gregor Clegane",
    category: "game-of-thrones",
    kills: 50,
    height: 206,
    age: 40,
    strength: 100,
    intelligence: 52,
    fame: 92,
    attractiveness: 45,
  },
  {
    name: "Jaime Lannister",
    category: "game-of-thrones",
    kills: 35,
    height: 188,
    age: 43,
    strength: 91,
    intelligence: 88,
    fame: 98,
    attractiveness: 97,
  },
  {
    name: "Jon Snow",
    category: "game-of-thrones",
    kills: 55,
    height: 173,
    age: 24,
    strength: 89,
    intelligence: 84,
    fame: 100,
    attractiveness: 97,
  },
  {
    name: "Jorah Mormont",
    category: "game-of-thrones",
    kills: 40,
    height: 185,
    age: 48,
    strength: 88,
    intelligence: 86,
    fame: 91,
    attractiveness: 87,
  },
  {
    name: "Margaery Tyrell",
    category: "game-of-thrones",
    kills: 0,
    height: 168,
    age: 22,
    strength: 47,
    intelligence: 94,
    fame: 91,
    attractiveness: 97,
  },
  {
    name: "Melisandre",
    category: "game-of-thrones",
    kills: 10,
    height: 168,
    age: 400,
    strength: 54,
    intelligence: 93,
    fame: 92,
    attractiveness: 95,
  },
  {
    name: "Ned Stark",
    category: "game-of-thrones",
    kills: 20,
    height: 179,
    age: 40,
    strength: 84,
    intelligence: 90,
    fame: 97,
    attractiveness: 90,
  },
  {
    name: "Olenna Tyrell",
    category: "game-of-thrones",
    kills: 1,
    height: 174,
    age: 80,
    strength: 35,
    intelligence: 98,
    fame: 89,
    attractiveness: 72,
  },
  {
    name: "Petyr Baelish",
    category: "game-of-thrones",
    kills: 2,
    height: 175,
    age: 40,
    strength: 48,
    intelligence: 99,
    fame: 93,
    attractiveness: 81,
  },
  {
    name: "Robb Stark",
    category: "game-of-thrones",
    kills: 25,
    height: 177,
    age: 20,
    strength: 87,
    intelligence: 87,
    fame: 92,
    attractiveness: 95,
  },
  {
    name: "Samwell Tarly",
    category: "game-of-thrones",
    kills: 5,
    height: 173,
    age: 23,
    strength: 48,
    intelligence: 95,
    fame: 89,
    attractiveness: 77,
  },
  {
    name: "Sandor Clegane",
    category: "game-of-thrones",
    kills: 45,
    height: 198,
    age: 40,
    strength: 96,
    intelligence: 78,
    fame: 96,
    attractiveness: 78,
  },
  {
    name: "Sansa Stark",
    category: "game-of-thrones",
    kills: 1,
    height: 175,
    age: 20,
    strength: 49,
    intelligence: 92,
    fame: 96,
    attractiveness: 97,
  },
  {
    name: "Theon Greyjoy",
    category: "game-of-thrones",
    kills: 20,
    height: 175,
    age: 25,
    strength: 77,
    intelligence: 77,
    fame: 91,
    attractiveness: 86,
  },
  {
    name: "Tormund",
    category: "game-of-thrones",
    kills: 35,
    height: 183,
    age: 40,
    strength: 93,
    intelligence: 71,
    fame: 91,
    attractiveness: 84,
  },
  {
    name: "Tyrion Lannister",
    category: "game-of-thrones",
    kills: 8,
    height: 135,
    age: 40,
    strength: 38,
    intelligence: 100,
    fame: 100,
    attractiveness: 83,
  },
  {
    name: "Varys",
    category: "game-of-thrones",
    kills: 1,
    height: 175,
    age: 50,
    strength: 42,
    intelligence: 99,
    fame: 93,
    attractiveness: 75,
    },
    {
  name: "Night King",
  category: "game-of-thrones",
  kills: 300,
  height: 185,
  age: 8000,
  strength: 100,
  intelligence: 92,
  fame: 99,
  attractiveness: 35,
},
{
  name: "Ramsay Bolton",
  category: "game-of-thrones",
  kills: 45,
  height: 183,
  age: 30,
  strength: 82,
  intelligence: 90,
  fame: 96,
  attractiveness: 74,
},
{
  name: "Tywin Lannister",
  category: "game-of-thrones",
  kills: 8,
  height: 191,
  age: 58,
  strength: 72,
  intelligence: 99,
  fame: 98,
  attractiveness: 80,
},
{
  name: "Bronn",
  category: "game-of-thrones",
  kills: 55,
  height: 183,
  age: 40,
  strength: 91,
  intelligence: 88,
  fame: 94,
  attractiveness: 85,
},
{
  name: "Stannis Baratheon",
  category: "game-of-thrones",
  kills: 20,
  height: 185,
  age: 45,
  strength: 86,
  intelligence: 91,
  fame: 94,
  attractiveness: 76,
},
{
  name: "Khal Drogo",
  category: "game-of-thrones",
  kills: 90,
  height: 193,
  age: 30,
  strength: 98,
  intelligence: 80,
  fame: 98,
  attractiveness: 94,
},
{
  name: "Missandei",
  category: "game-of-thrones",
  kills: 0,
  height: 160,
  age: 25,
  strength: 55,
  intelligence: 96,
  fame: 92,
  attractiveness: 98,
},
{
  name: "Grey Worm",
  category: "game-of-thrones",
  kills: 75,
  height: 180,
  age: 30,
  strength: 94,
  intelligence: 87,
  fame: 93,
  attractiveness: 88,
},
{
  name: "Ygritte",
  category: "game-of-thrones",
  kills: 30,
  height: 168,
  age: 24,
  strength: 87,
  intelligence: 84,
  fame: 95,
  attractiveness: 95,
},
{
  name: "Hodor",
  category: "game-of-thrones",
  kills: 2,
  height: 213,
  age: 40,
  strength: 88,
  intelligence: 45,
  fame: 97,
  attractiveness: 68,
},

  // Weitere Serienfiguren (Game of Thrones: 70 insgesamt)
  // Jack Gleeson; Game of Thrones (HBO)
  {
    name: "Joffrey Baratheon",
    category: "game-of-thrones",
    kills: 1,
    height: 170, // [SCHAETZUNG] Staffel 4; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 18, // [SCHAETZUNG] Staffel 4; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 23,
    intelligence: 40,
    fame: 98,
    attractiveness: 0,
  },

  // Mark Addy; Game of Thrones (HBO)
  {
    name: "Robert Baratheon",
    category: "game-of-thrones",
    kills: 50,
    height: 175, // [SCHAETZUNG] Staffel 1; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 45, // [SCHAETZUNG] Staffel 1; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 84,
    intelligence: 46,
    fame: 94,
    attractiveness: 52,
  },

  // Gethin Anthony; Game of Thrones (HBO)
  {
    name: "Renly Baratheon",
    category: "game-of-thrones",
    kills: 0,
    height: 180, // [SCHAETZUNG] Staffel 2; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 25, // [SCHAETZUNG] Staffel 2; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 45,
    intelligence: 67,
    fame: 79,
    attractiveness: 82,
  },

  // Dean-Charles Chapman; Game of Thrones (HBO)
  {
    name: "Tommen Baratheon",
    category: "game-of-thrones",
    kills: 0,
    height: 175, // [SCHAETZUNG] Staffel 6; Alter nach Neubesetzung widerspruechlich; angenaeherte Bildschirmgestalt in cm
    age: 17, // [SCHAETZUNG] Staffel 6; Alter nach Neubesetzung widerspruechlich; Jahre, kein gesicherter exakter Kanonwert
    strength: 20,
    intelligence: 44,
    fame: 89,
    attractiveness: 0,
  },

  // Nell Tiger Free; Game of Thrones (HBO)
  {
    name: "Myrcella Baratheon",
    category: "game-of-thrones",
    kills: 0,
    height: 170, // [SCHAETZUNG] Staffel 5; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 17, // [SCHAETZUNG] Staffel 5; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 15,
    intelligence: 58,
    fame: 77,
    attractiveness: 0,
  },

  // Kerry Ingram; Game of Thrones (HBO)
  {
    name: "Shireen Baratheon",
    category: "game-of-thrones",
    kills: 0,
    height: 155, // [SCHAETZUNG] Staffel 5; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 12, // [SCHAETZUNG] Staffel 5; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 10,
    intelligence: 77,
    fame: 84,
    attractiveness: 0,
  },

  // Finn Jones; Game of Thrones (HBO)
  {
    name: "Loras Tyrell",
    category: "game-of-thrones",
    kills: 10,
    height: 183, // [SCHAETZUNG] Staffel 6; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 25, // [SCHAETZUNG] Staffel 6; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 82,
    intelligence: 67,
    fame: 87,
    attractiveness: 88,
  },

  // Pedro Pascal; Game of Thrones (HBO)
  {
    name: "Oberyn Martell",
    category: "game-of-thrones",
    kills: 20,
    height: 180, // [SCHAETZUNG] Staffel 4; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Staffel 4; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 92,
    intelligence: 87,
    fame: 96,
    attractiveness: 94,
  },

  // Indira Varma; Game of Thrones (HBO)
  {
    name: "Ellaria Sand",
    category: "game-of-thrones",
    kills: 3,
    height: 171, // [SCHAETZUNG] Staffel 7; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Staffel 7; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 39,
    intelligence: 76,
    fame: 85,
    attractiveness: 88,
  },

  // Gemma Whelan; Game of Thrones (HBO)
  {
    name: "Yara Greyjoy",
    category: "game-of-thrones",
    kills: 20,
    height: 168, // [SCHAETZUNG] Staffel 8; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 30, // [SCHAETZUNG] Staffel 8; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 78,
    intelligence: 82,
    fame: 90,
    attractiveness: 74,
  },

  // Pilou Asbaek; Game of Thrones (HBO)
  {
    name: "Euron Greyjoy",
    category: "game-of-thrones",
    kills: 50,
    height: 183, // [SCHAETZUNG] Staffel 8; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 45, // [SCHAETZUNG] Staffel 8; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 90,
    intelligence: 76,
    fame: 89,
    attractiveness: 76,
  },

  // Michael McElhatton; Game of Thrones (HBO)
  {
    name: "Roose Bolton",
    category: "game-of-thrones",
    kills: 10,
    height: 175, // [SCHAETZUNG] Staffel 6; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 55, // [SCHAETZUNG] Staffel 6; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 54,
    intelligence: 91,
    fame: 91,
    attractiveness: 48,
  },

  // David Bradley; Game of Thrones (HBO)
  {
    name: "Walder Frey",
    category: "game-of-thrones",
    kills: 0,
    height: 178, // [SCHAETZUNG] Staffel 6; aus fast 90 Jahren in Staffel 1 angenaehert; angenaeherte Bildschirmgestalt in cm
    age: 95, // [SCHAETZUNG] Staffel 6; aus fast 90 Jahren in Staffel 1 angenaehert; Jahre, kein gesicherter exakter Kanonwert
    strength: 12,
    intelligence: 82,
    fame: 90,
    attractiveness: 8,
  },

  // Kate Dickie; Game of Thrones (HBO)
  {
    name: "Lysa Arryn",
    category: "game-of-thrones",
    kills: 1,
    height: 170, // [SCHAETZUNG] Staffel 4; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Staffel 4; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 21,
    intelligence: 45,
    fame: 82,
    attractiveness: 39,
  },

  // James Cosmo; Game of Thrones (HBO)
  {
    name: "Jeor Mormont",
    category: "game-of-thrones",
    kills: 40,
    height: 188, // [SCHAETZUNG] Staffel 3; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 70, // [SCHAETZUNG] Staffel 3; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 81,
    intelligence: 88,
    fame: 88,
    attractiveness: 39,
  },

  // Harry Lloyd; Game of Thrones (HBO)
  {
    name: "Viserys Targaryen",
    category: "game-of-thrones",
    kills: 0,
    height: 183, // [SCHAETZUNG] Staffel 1; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 23, // [SCHAETZUNG] Staffel 1; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 32,
    intelligence: 47,
    fame: 90,
    attractiveness: 80,
  },

  // Oona Chaplin; Game of Thrones (HBO)
  {
    name: "Talisa Stark",
    category: "game-of-thrones",
    kills: 0,
    height: 170, // [SCHAETZUNG] Staffel 3; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 25, // [SCHAETZUNG] Staffel 3; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 25,
    intelligence: 83,
    fame: 82,
    attractiveness: 89,
  },

  // Art Parkinson; Game of Thrones (HBO)
  {
    name: "Rickon Stark",
    category: "game-of-thrones",
    kills: 0,
    height: 155, // [SCHAETZUNG] Staffel 6; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 12, // [SCHAETZUNG] Staffel 6; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 17,
    intelligence: 35,
    fame: 81,
    attractiveness: 0,
  },

  // Natalia Tena; Game of Thrones (HBO)
  {
    name: "Osha",
    category: "game-of-thrones",
    kills: 5,
    height: 166, // [SCHAETZUNG] Staffel 6; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 30, // [SCHAETZUNG] Staffel 6; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 65,
    intelligence: 73,
    fame: 86,
    attractiveness: 76,
  },

  // Ellie Kendrick; Game of Thrones (HBO)
  {
    name: "Meera Reed",
    category: "game-of-thrones",
    kills: 3,
    height: 155, // [SCHAETZUNG] Staffel 7; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 22, // [SCHAETZUNG] Staffel 7; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 68,
    intelligence: 79,
    fame: 83,
    attractiveness: 0,
  },

  // Thomas Brodie-Sangster; Game of Thrones (HBO)
  {
    name: "Jojen Reed",
    category: "game-of-thrones",
    kills: 0,
    height: 175, // [SCHAETZUNG] Staffel 4; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 16, // [SCHAETZUNG] Staffel 4; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 14,
    intelligence: 88,
    fame: 82,
    attractiveness: 0,
  },

  // Tom Wlaschiha; Game of Thrones (HBO)
  {
    name: "Jaqen H’ghar",
    category: "game-of-thrones",
    kills: 30,
    height: 183, // [SCHAETZUNG] Staffel 2; Identitaet und tatsaechliches Alter unklar; angenaeherte Bildschirmgestalt in cm
    age: 40, // [SCHAETZUNG] Staffel 2; Identitaet und tatsaechliches Alter unklar; Jahre, kein gesicherter exakter Kanonwert
    strength: 87,
    intelligence: 96,
    fame: 94,
    attractiveness: 87,
  },

  // Sibel Kekilli; Game of Thrones (HBO)
  {
    name: "Shae",
    category: "game-of-thrones",
    kills: 0,
    height: 163, // [SCHAETZUNG] Staffel 4; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 30, // [SCHAETZUNG] Staffel 4; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 24,
    intelligence: 73,
    fame: 90,
    attractiveness: 86,
  },

  // Hannah Murray; Game of Thrones (HBO)
  {
    name: "Gilly",
    category: "game-of-thrones",
    kills: 0,
    height: 165, // [SCHAETZUNG] Staffel 8; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 25, // [SCHAETZUNG] Staffel 8; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 25,
    intelligence: 62,
    fame: 86,
    attractiveness: 78,
  },

  // Daniel Portman; Game of Thrones (HBO)
  {
    name: "Podrick Payne",
    category: "game-of-thrones",
    kills: 1,
    height: 174, // [SCHAETZUNG] Staffel 8; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 23, // [SCHAETZUNG] Staffel 8; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 65,
    intelligence: 72,
    fame: 91,
    attractiveness: 80,
  },

  // Richard Dormer; Game of Thrones (HBO)
  {
    name: "Beric Dondarrion",
    category: "game-of-thrones",
    kills: 25,
    height: 175, // [SCHAETZUNG] Staffel 8; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 45, // [SCHAETZUNG] Staffel 8; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 84,
    intelligence: 83,
    fame: 86,
    attractiveness: 72,
  },

  // Bella Ramsey; Game of Thrones (HBO)
  {
    name: "Lyanna Mormont",
    category: "game-of-thrones",
    kills: 1,
    height: 150, // [SCHAETZUNG] Staffel 6; junge Seriengestalt; angenaeherte Bildschirmgestalt in cm
    age: 10, // [BELEGT] Game of Thrones, Staffel 5; laut Serienwiki; Game of Thrones Wiki: Lyanna Mormont, Staffel 5
    strength: 38,
    intelligence: 86,
    fame: 91,
    attractiveness: 0,
  },

  // Ian McElhinney; Game of Thrones (HBO)
  {
    name: "Barristan Selmy",
    category: "game-of-thrones",
    kills: 50,
    height: 180, // [SCHAETZUNG] Staffel 5; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 70, // [SCHAETZUNG] Staffel 5; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 94,
    intelligence: 87,
    fame: 91,
    attractiveness: 50,
  },

  // Anton Lesser; Game of Thrones (HBO)
  {
    name: "Qyburn",
    category: "game-of-thrones",
    kills: 0,
    height: 166, // [SCHAETZUNG] Staffel 8; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 65, // [SCHAETZUNG] Staffel 8; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 16,
    intelligence: 98,
    fame: 88,
    attractiveness: 20,
  },

  // Jonathan Pryce; Game of Thrones (HBO)
  {
    name: "Hoher Spatz",
    category: "game-of-thrones",
    kills: 0,
    height: 183, // [SCHAETZUNG] Staffel 6; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 70, // [SCHAETZUNG] Staffel 6; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 10,
    intelligence: 91,
    fame: 89,
    attractiveness: 15,
  },

  // Julian Glover; Game of Thrones (HBO)
  {
    name: "Pycelle",
    category: "game-of-thrones",
    kills: 0,
    height: 188, // [SCHAETZUNG] Staffel 6; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 80, // [SCHAETZUNG] Staffel 6; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 8,
    intelligence: 86,
    fame: 83,
    attractiveness: 10,
  },

  // Peter Vaughan; Game of Thrones (HBO)
  {
    name: "Maester Aemon",
    category: "game-of-thrones",
    kills: 0,
    height: 183, // [SCHAETZUNG] Staffel 5; Seriengestalt; angenaeherte Bildschirmgestalt in cm
    age: 104, // [BELEGT] Game of Thrones, Staffel 5; laut Serienwiki; Game of Thrones Wiki: Aemon, Staffel 5
    strength: 5,
    intelligence: 97,
    fame: 88,
    attractiveness: 8,
  },

  // Owen Teale; Game of Thrones (HBO)
  {
    name: "Alliser Thorne",
    category: "game-of-thrones",
    kills: 20,
    height: 188, // [SCHAETZUNG] Staffel 6; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 55, // [SCHAETZUNG] Staffel 6; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 80,
    intelligence: 65,
    fame: 86,
    attractiveness: 39,
  },

  // Ciaran Hinds; Game of Thrones (HBO)
  {
    name: "Mance Rayder",
    category: "game-of-thrones",
    kills: 30,
    height: 185, // [SCHAETZUNG] Staffel 5; Serienfassung; angenaeherte Bildschirmgestalt in cm
    age: 55, // [SCHAETZUNG] Staffel 5; Serienfassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 78,
    intelligence: 88,
    fame: 88,
    attractiveness: 61,
  },

  // Michiel Huisman; Game of Thrones (HBO)
  {
    name: "Daario Naharis",
    category: "game-of-thrones",
    kills: 40,
    height: 183, // [SCHAETZUNG] Staffel 6; Michiel-Huisman-Fassung; angenaeherte Bildschirmgestalt in cm
    age: 35, // [SCHAETZUNG] Staffel 6; Michiel-Huisman-Fassung; Jahre, kein gesicherter exakter Kanonwert
    strength: 91,
    intelligence: 79,
    fame: 91,
    attractiveness: 94,
  },

  // =========================
  // HERR DER RINGE
  // =========================
  {
    name: "Frodo Baggins",
    category: "herr-der-ringe",
    kills: 3,
    height: 106,
    age: 50,
    strength: 43,
    intelligence: 87,
    fame: 100,
    attractiveness: 82,
  },
  {
    name: "Samwise Gamgee",
    category: "herr-der-ringe",
    kills: 8,
    height: 107,
    age: 38,
    strength: 67,
    intelligence: 84,
    fame: 98,
    attractiveness: 82,
  },
  {
    name: "Gandalf",
    category: "herr-der-ringe",
    kills: 25,
    height: 180,
    age: 2000,
    strength: 98,
    intelligence: 99,
    fame: 100,
    attractiveness: 76,
  },
  {
    name: "Aragorn",
    category: "herr-der-ringe",
    kills: 70,
    height: 198,
    age: 87,
    strength: 94,
    intelligence: 91,
    fame: 100,
    attractiveness: 98,
  },
  {
    name: "Legolas",
    category: "herr-der-ringe",
    kills: 80,
    height: 183,
    age: 2931,
    strength: 90,
    intelligence: 87,
    fame: 99,
    attractiveness: 98,
  },
  {
    name: "Gimli",
    category: "herr-der-ringe",
    kills: 65,
    height: 145,
    age: 139,
    strength: 95,
    intelligence: 82,
    fame: 98,
    attractiveness: 77,
  },
  {
    name: "Boromir",
    category: "herr-der-ringe",
    kills: 25,
    height: 193,
    age: 41,
    strength: 91,
    intelligence: 83,
    fame: 96,
    attractiveness: 93,
  },
  {
    name: "Merry",
    category: "herr-der-ringe",
    kills: 6,
    height: 108,
    age: 36,
    strength: 58,
    intelligence: 82,
    fame: 89,
    attractiveness: 80,
  },
  {
    name: "Pippin",
    category: "herr-der-ringe",
    kills: 5,
    height: 107,
    age: 28,
    strength: 56,
    intelligence: 77,
    fame: 90,
    attractiveness: 81,
  },
  {
    name: "Gollum",
    category: "herr-der-ringe",
    kills: 5,
    height: 110,
    age: 589,
    strength: 54,
    intelligence: 81,
    fame: 99,
    attractiveness: 18,
  },
  {
    name: "Sauron",
    category: "herr-der-ringe",
    kills: 500,
    height: 274,
    age: 50000,
    strength: 100,
    intelligence: 98,
    fame: 100,
    attractiveness: 45,
  },
  {
    name: "Saruman",
    category: "herr-der-ringe",
    kills: 30,
    height: 188,
    age: 2000,
    strength: 97,
    intelligence: 98,
    fame: 97,
    attractiveness: 73,
  },
  {
    name: "Galadriel",
    category: "herr-der-ringe",
    kills: 10,
    height: 193,
    age: 8000,
    strength: 96,
    intelligence: 99,
    fame: 98,
    attractiveness: 100,
  },
  {
    name: "Elrond",
    category: "herr-der-ringe",
    kills: 25,
    height: 188,
    age: 6500,
    strength: 92,
    intelligence: 98,
    fame: 96,
    attractiveness: 94,
  },
  ]),
  ...defineDealCharacters([
  {
    name: "Arwen",
    category: "herr-der-ringe",
    kills: 2,
    height: 173,
    age: 2778,
    strength: 76,
    intelligence: 91,
    fame: 96,
    attractiveness: 99,
  },
  {
    name: "Éowyn",
    category: "herr-der-ringe",
    kills: 7,
    height: 173,
    age: 24,
    strength: 84,
    intelligence: 84,
    fame: 96,
    attractiveness: 95,
  },
  {
    name: "Théoden",
    category: "herr-der-ringe",
    kills: 15,
    height: 180,
    age: 71,
    strength: 83,
    intelligence: 88,
    fame: 94,
    attractiveness: 77,
  },
  {
    name: "Faramir",
    category: "herr-der-ringe",
    kills: 30,
    height: 188,
    age: 36,
    strength: 88,
    intelligence: 92,
    fame: 91,
    attractiveness: 94,
  },
  {
    name: "Denethor",
    category: "herr-der-ringe",
    kills: 1,
    height: 180,
    age: 89,
    strength: 52,
    intelligence: 90,
    fame: 88,
    attractiveness: 67,
  },
  {
    name: "Éomer",
    category: "herr-der-ringe",
    kills: 45,
    height: 188,
    age: 28,
    strength: 92,
    intelligence: 84,
    fame: 91,
    attractiveness: 95,
  },
  {
    name: "Treebeard",
    category: "herr-der-ringe",
    kills: 20,
    height: 430,
    age: 10000,
    strength: 100,
    intelligence: 91,
    fame: 92,
    attractiveness: 42,
  },
  {
    name: "Witch-king of Angmar",
    category: "herr-der-ringe",
    kills: 100,
    height: 195,
    age: 4000,
    strength: 98,
    intelligence: 91,
    fame: 97,
    attractiveness: 30,
  },
  {
    name: "Gríma Wormtongue",
    category: "herr-der-ringe",
    kills: 1,
    height: 175,
    age: 40,
    strength: 39,
    intelligence: 88,
    fame: 84,
    attractiveness: 42,
  },
    {
    name: "Haldir",
    category: "herr-der-ringe",
    kills: 20,
    height: 183,
    age: 1000,
    strength: 88,
    intelligence: 89,
    fame: 88,
    attractiveness: 94,
  },
  {
    name: "Bilbo Baggins",
    category: "herr-der-ringe",
    kills: 2,
    height: 107,
    age: 111,
    strength: 46,
    intelligence: 91,
    fame: 98,
    attractiveness: 80,
    },
    {
  name: "Isildur",
  category: "herr-der-ringe",
  kills: 35,
  height: 188,
  age: 234,
  strength: 91,
  intelligence: 88,
  fame: 95,
  attractiveness: 91,
},
{
  name: "Lurtz",
  category: "herr-der-ringe",
  kills: 18,
  height: 195,
  age: 1,
  strength: 94,
  intelligence: 68,
  fame: 92,
  attractiveness: 25,
},
{
  name: "Celeborn",
  category: "herr-der-ringe",
  kills: 20,
  height: 190,
  age: 6500,
  strength: 90,
  intelligence: 96,
  fame: 87,
  attractiveness: 94,
},
{
  name: "King of the Dead",
  category: "herr-der-ringe",
  kills: 40,
  height: 185,
  age: 3000,
  strength: 96,
  intelligence: 82,
  fame: 91,
  attractiveness: 30,
},
{
  name: "Mouth of Sauron",
  category: "herr-der-ringe",
  kills: 15,
  height: 190,
  age: 100,
  strength: 85,
  intelligence: 91,
  fame: 86,
  attractiveness: 28,
},
{
  name: "Gothmog",
  category: "herr-der-ringe",
  kills: 30,
  height: 180,
  age: 45,
  strength: 84,
  intelligence: 86,
  fame: 88,
  attractiveness: 22,
},
{
  name: "Elendil",
  category: "herr-der-ringe",
  kills: 50,
  height: 241,
  age: 322,
  strength: 95,
  intelligence: 93,
  fame: 90,
  attractiveness: 92,
},
{
  name: "Gil-galad",
  category: "herr-der-ringe",
  kills: 80,
  height: 193,
  age: 3500,
  strength: 98,
  intelligence: 96,
  fame: 89,
  attractiveness: 96,
},
{
  name: "Rosie Cotton",
  category: "herr-der-ringe",
  kills: 0,
  height: 110,
  age: 30,
  strength: 42,
  intelligence: 78,
  fame: 82,
  attractiveness: 91,
},
{
  name: "Gamling",
  category: "herr-der-ringe",
  kills: 25,
  height: 180,
  age: 50,
  strength: 84,
  intelligence: 83,
  fame: 82,
  attractiveness: 75,
},
{
  name: "Grishnákh",
  category: "herr-der-ringe",
  kills: 12,
  height: 170,
  age: 40,
  strength: 78,
  intelligence: 82,
  fame: 84,
  attractiveness: 22,
},

  // =========================
  // HOBBIT
  // =========================
  {
    name: "Thorin Oakenshield",
    category: "hobbit",
    kills: 45,
    height: 157,
    age: 195,
    strength: 94,
    intelligence: 90,
    fame: 98,
    attractiveness: 93,
  },
  {
    name: "Balin",
    category: "hobbit",
    kills: 20,
    height: 145,
    age: 178,
    strength: 82,
    intelligence: 93,
    fame: 89,
    attractiveness: 79,
  },
  {
    name: "Dwalin",
    category: "hobbit",
    kills: 40,
    height: 150,
    age: 169,
    strength: 96,
    intelligence: 78,
    fame: 88,
    attractiveness: 82,
  },
  {
    name: "Fíli",
    category: "hobbit",
    kills: 25,
    height: 150,
    age: 82,
    strength: 88,
    intelligence: 82,
    fame: 91,
    attractiveness: 94,
  },
  {
    name: "Kíli",
    category: "hobbit",
    kills: 25,
    height: 152,
    age: 77,
    strength: 87,
    intelligence: 82,
    fame: 94,
    attractiveness: 97,
  },
  {
    name: "Bofur",
    category: "hobbit",
    kills: 15,
    height: 145,
    age: 120,
    strength: 81,
    intelligence: 80,
    fame: 86,
    attractiveness: 80,
  },
  {
    name: "Bombur",
    category: "hobbit",
    kills: 12,
    height: 140,
    age: 130,
    strength: 89,
    intelligence: 70,
    fame: 87,
    attractiveness: 65,
  },
  {
    name: "Bifur",
    category: "hobbit",
    kills: 15,
    height: 145,
    age: 130,
    strength: 84,
    intelligence: 73,
    fame: 79,
    attractiveness: 68,
  },
  {
    name: "Óin",
    category: "hobbit",
    kills: 12,
    height: 145,
    age: 167,
    strength: 79,
    intelligence: 85,
    fame: 76,
    attractiveness: 70,
  },
  {
    name: "Glóin",
    category: "hobbit",
    kills: 20,
    height: 145,
    age: 158,
    strength: 87,
    intelligence: 82,
    fame: 86,
    attractiveness: 75,
  },
  {
    name: "Nori",
    category: "hobbit",
    kills: 15,
    height: 143,
    age: 125,
    strength: 81,
    intelligence: 83,
    fame: 77,
    attractiveness: 74,
  },
  {
    name: "Dori",
    category: "hobbit",
    kills: 15,
    height: 145,
    age: 135,
    strength: 86,
    intelligence: 80,
    fame: 76,
    attractiveness: 71,
  },
  {
    name: "Ori",
    category: "hobbit",
    kills: 8,
    height: 140,
    age: 115,
    strength: 69,
    intelligence: 84,
    fame: 77,
    attractiveness: 72,
  },
  {
    name: "Bard",
    category: "hobbit",
    kills: 20,
    height: 183,
    age: 40,
    strength: 84,
    intelligence: 91,
    fame: 94,
    attractiveness: 95,
  },
  {
    name: "Thranduil",
    category: "hobbit",
    kills: 45,
    height: 188,
    age: 3000,
    strength: 95,
    intelligence: 94,
    fame: 95,
    attractiveness: 99,
  },
  {
    name: "Tauriel",
    category: "hobbit",
    kills: 40,
    height: 168,
    age: 600,
    strength: 91,
    intelligence: 88,
    fame: 93,
    attractiveness: 98,
  },
  {
    name: "Azog",
    category: "hobbit",
    kills: 80,
    height: 213,
    age: 150,
    strength: 99,
    intelligence: 80,
    fame: 94,
    attractiveness: 38,
  },
  {
    name: "Bolg",
    category: "hobbit",
    kills: 55,
    height: 220,
    age: 100,
    strength: 98,
    intelligence: 70,
    fame: 86,
    attractiveness: 28,
  },
  {
    name: "Smaug",
    category: "hobbit",
    kills: 1000,
    height: 1800,
    age: 170,
    strength: 100,
    intelligence: 95,
    fame: 100,
    attractiveness: 45,
  },
  {
    name: "Beorn",
    category: "hobbit",
    kills: 35,
    height: 205,
    age: 120,
    strength: 100,
    intelligence: 85,
    fame: 91,
    attractiveness: 84,
  },
  {
    name: "Radagast",
    category: "hobbit",
    kills: 10,
    height: 178,
    age: 2000,
    strength: 90,
    intelligence: 92,
    fame: 90,
    attractiveness: 67,
  },
  {
    name: "Master of Lake-town",
    category: "hobbit",
    kills: 0,
    height: 175,
    age: 50,
    strength: 40,
    intelligence: 82,
    fame: 78,
    attractiveness: 48,
  },
  {
    name: "Alfrid",
    category: "hobbit",
    kills: 0,
    height: 180,
    age: 40,
    strength: 35,
    intelligence: 68,
    fame: 72,
    attractiveness: 35,
  },
  {
    name: "Dáin Ironfoot",
    category: "hobbit",
    kills: 50,
    height: 150,
    age: 252,
    strength: 96,
    intelligence: 87,
    fame: 91,
    attractiveness: 78,
  },
  {
    name: "Necromancer",
    category: "hobbit",
    kills: 300,
    height: 240,
    age: 50000,
    strength: 100,
    intelligence: 98,
    fame: 98,
    attractiveness: 30,
    },
    {
  name: "Bain",
  category: "hobbit",
  kills: 1,
  height: 172,
  age: 16,
  strength: 68,
  intelligence: 82,
  fame: 82,
  attractiveness: 70,
},
{
  name: "Great Goblin",
  category: "hobbit",
  kills: 12,
  height: 210,
  age: 80,
  strength: 88,
  intelligence: 74,
  fame: 89,
  attractiveness: 15,
},
{
  name: "Bert",
  category: "hobbit",
  kills: 8,
  height: 280,
  age: 90,
  strength: 94,
  intelligence: 58,
  fame: 84,
  attractiveness: 10,
},
{
  name: "Tom",
  category: "hobbit",
  kills: 8,
  height: 285,
  age: 95,
  strength: 95,
  intelligence: 60,
  fame: 84,
  attractiveness: 10,
},
{
  name: "William",
  category: "hobbit",
  kills: 10,
  height: 290,
  age: 100,
  strength: 96,
  intelligence: 64,
  fame: 86,
  attractiveness: 12,
},

  // =========================
  // THE BOYS
  // =========================
  {
    name: "Homelander",
    category: "the-boys",
    kills: 120,
    height: 181,
    age: 41,
    strength: 100,
    intelligence: 86,
    fame: 100,
    attractiveness: 94,
  },
  {
    name: "Billy Butcher",
    category: "the-boys",
    kills: 35,
    height: 185,
    age: 45,
    strength: 84,
    intelligence: 92,
    fame: 98,
    attractiveness: 91,
  },
  {
    name: "Hughie Campbell",
    category: "the-boys",
    kills: 8,
    height: 185,
    age: 30,
    strength: 63,
    intelligence: 86,
    fame: 94,
    attractiveness: 88,
  },
  {
    name: "Starlight",
    category: "the-boys",
    kills: 10,
    height: 168,
    age: 27,
    strength: 91,
    intelligence: 86,
    fame: 97,
    attractiveness: 96,
  },
  {
    name: "Queen Maeve",
    category: "the-boys",
    kills: 25,
    height: 173,
    age: 38,
    strength: 97,
    intelligence: 84,
    fame: 94,
    attractiveness: 96,
  },
  {
    name: "A-Train",
    category: "the-boys",
    kills: 20,
    height: 183,
    age: 33,
    strength: 89,
    intelligence: 75,
    fame: 95,
    attractiveness: 91,
  },
  {
    name: "The Deep",
    category: "the-boys",
    kills: 8,
    height: 183,
    age: 35,
    strength: 82,
    intelligence: 59,
    fame: 93,
    attractiveness: 92,
  },
  {
    name: "Black Noir",
    category: "the-boys",
    kills: 80,
    height: 180,
    age: 50,
    strength: 94,
    intelligence: 82,
    fame: 92,
    attractiveness: 76,
  },
  {
    name: "Soldier Boy",
    category: "the-boys",
    kills: 100,
    height: 185,
    age: 103,
    strength: 99,
    intelligence: 76,
    fame: 97,
    attractiveness: 96,
  },
  {
    name: "Stormfront",
    category: "the-boys",
    kills: 150,
    height: 170,
    age: 101,
    strength: 98,
    intelligence: 90,
    fame: 94,
    attractiveness: 94,
  },
  {
    name: "Kimiko",
    category: "the-boys",
    kills: 60,
    height: 155,
    age: 30,
    strength: 93,
    intelligence: 78,
    fame: 91,
    attractiveness: 92,
  },
  {
    name: "Frenchie",
    category: "the-boys",
    kills: 30,
    height: 173,
    age: 40,
    strength: 69,
    intelligence: 94,
    fame: 91,
    attractiveness: 91,
  },
  {
    name: "Mother's Milk",
    category: "the-boys",
    kills: 25,
    height: 183,
    age: 43,
    strength: 80,
    intelligence: 92,
    fame: 91,
    attractiveness: 90,
  },
  {
    name: "Victoria Neuman",
    category: "the-boys",
    kills: 35,
    height: 163,
    age: 38,
    strength: 92,
    intelligence: 95,
    fame: 89,
    attractiveness: 94,
  },
  {
    name: "Ashley Barrett",
    category: "the-boys",
    kills: 0,
    height: 168,
    age: 40,
    strength: 35,
    intelligence: 81,
    fame: 84,
    attractiveness: 78,
  },
  {
    name: "Stan Edgar",
    category: "the-boys",
    kills: 0,
    height: 173,
    age: 65,
    strength: 42,
    intelligence: 98,
    fame: 89,
    attractiveness: 82,
  },
  {
    name: "Ryan",
    category: "the-boys",
    kills: 6,
    height: 160,
    age: 12,
    strength: 98,
    intelligence: 73,
    fame: 89,
    attractiveness: 62,
  },
  {
    name: "Lamplighter",
    category: "the-boys",
    kills: 20,
    height: 180,
    age: 40,
    strength: 88,
    intelligence: 77,
    fame: 80,
    attractiveness: 82,
  },
  {
    name: "Translucent",
    category: "the-boys",
    kills: 10,
    height: 180,
    age: 40,
    strength: 84,
    intelligence: 78,
    fame: 84,
    attractiveness: 80,
  },
  {
    name: "Mesmer",
    category: "the-boys",
    kills: 0,
    height: 175,
    age: 45,
    strength: 38,
    intelligence: 85,
    fame: 75,
    attractiveness: 70,
  },
  {
    name: "Firecracker",
    category: "the-boys",
    kills: 5,
    height: 168,
    age: 35,
    strength: 74,
    intelligence: 72,
    fame: 88,
    attractiveness: 92,
  },
  {
    name: "Sister Sage",
    category: "the-boys",
    kills: 3,
    height: 168,
    age: 32,
    strength: 55,
    intelligence: 100,
    fame: 87,
    attractiveness: 91,
  },
  {
    name: "Tek Knight",
    category: "the-boys",
    kills: 12,
    height: 185,
    age: 40,
    strength: 77,
    intelligence: 96,
    fame: 82,
    attractiveness: 90,
  },
  {
    name: "Popclaw",
    category: "the-boys",
    kills: 4,
    height: 165,
    age: 30,
    strength: 86,
    intelligence: 69,
    fame: 72,
    attractiveness: 91,
  },
  {
    name: "Love Sausage",
    category: "the-boys",
    kills: 8,
    height: 188,
    age: 45,
    strength: 87,
    intelligence: 67,
    fame: 79,
    attractiveness: 66,
    },
    {
  name: "Becca Butcher",
  category: "the-boys",
  kills: 0,
  height: 168,
  age: 32,
  strength: 56,
  intelligence: 89,
  fame: 91,
  attractiveness: 95,
},
{
  name: "Grace Mallory",
  category: "the-boys",
  kills: 12,
  height: 165,
  age: 70,
  strength: 61,
  intelligence: 97,
  fame: 89,
  attractiveness: 72,
},
{
  name: "Supersonic",
  category: "the-boys",
  kills: 2,
  height: 180,
  age: 30,
  strength: 89,
  intelligence: 76,
  fame: 88,
  attractiveness: 94,
},
{
  name: "Crimson Countess",
  category: "the-boys",
  kills: 15,
  height: 170,
  age: 45,
  strength: 92,
  intelligence: 78,
  fame: 91,
  attractiveness: 88,
},
{
  name: "Doppelganger",
  category: "the-boys",
  kills: 3,
  height: 175,
  age: 35,
  strength: 76,
  intelligence: 88,
  fame: 86,
  attractiveness: 80,
},
{
  name: "Joe Kessler",
  category: "the-boys",
  kills: 20,
  height: 183,
  age: 45,
  strength: 78,
  intelligence: 92,
  fame: 89,
  attractiveness: 82,
},
{
  name: "Black Noir II",
  category: "the-boys",
  kills: 18,
  height: 188,
  age: 30,
  strength: 96,
  intelligence: 74,
  fame: 94,
  attractiveness: 87,
},
{
  name: "Shockwave",
  category: "the-boys",
  kills: 1,
  height: 180,
  age: 28,
  strength: 90,
  intelligence: 74,
  fame: 85,
  attractiveness: 90,
},
{
  name: "Blue Hawk",
  category: "the-boys",
  kills: 12,
  height: 188,
  age: 35,
  strength: 94,
  intelligence: 70,
  fame: 89,
  attractiveness: 85,
},
{
  name: "Webweaver",
  category: "the-boys",
  kills: 1,
  height: 178,
  age: 30,
  strength: 83,
  intelligence: 68,
  fame: 84,
  attractiveness: 78,
},
{
  name: "Zoe Neuman",
  category: "the-boys",
  kills: 1,
  height: 150,
  age: 12,
  strength: 87,
  intelligence: 80,
  fame: 82,
  attractiveness: 65,
},
{
  name: "Ezekiel",
  category: "the-boys",
  kills: 3,
  height: 183,
  age: 40,
  strength: 82,
  intelligence: 76,
  fame: 87,
  attractiveness: 84,
},
{
  name: "Blindspot",
  category: "the-boys",
  kills: 0,
  height: 178,
  age: 30,
  strength: 85,
  intelligence: 83,
  fame: 83,
  attractiveness: 88,
},

  // =========================
  // THE WALKING DEAD
  // =========================
  {
    name: "Rick Grimes",
    category: "the-walking-dead",
    kills: 160,
    height: 178,
    age: 40,
    strength: 88,
    intelligence: 93,
    fame: 100,
    attractiveness: 94,
  },
  {
    name: "Daryl Dixon",
    category: "the-walking-dead",
    kills: 180,
    height: 178,
    age: 45,
    strength: 91,
    intelligence: 88,
    fame: 100,
    attractiveness: 95,
  },
  {
    name: "Michonne",
    category: "the-walking-dead",
    kills: 140,
    height: 170,
    age: 40,
    strength: 92,
    intelligence: 91,
    fame: 98,
    attractiveness: 94,
  },
  {
    name: "Negan",
    category: "the-walking-dead",
    kills: 120,
    height: 188,
    age: 50,
    strength: 90,
    intelligence: 94,
    fame: 100,
    attractiveness: 94,
  },
  {
    name: "Glenn Rhee",
    category: "the-walking-dead",
    kills: 55,
    height: 175,
    age: 25,
    strength: 78,
    intelligence: 91,
    fame: 98,
    attractiveness: 93,
  },
  {
    name: "Maggie Greene",
    category: "the-walking-dead",
    kills: 95,
    height: 170,
    age: 30,
    strength: 85,
    intelligence: 93,
    fame: 98,
    attractiveness: 96,
  },
  {
    name: "Carol Peletier",
    category: "the-walking-dead",
    kills: 130,
    height: 168,
    age: 50,
    strength: 80,
    intelligence: 96,
    fame: 98,
    attractiveness: 85,
  },
  {
    name: "Carl Grimes",
    category: "the-walking-dead",
    kills: 35,
    height: 170,
    age: 16,
    strength: 68,
    intelligence: 82,
    fame: 96,
    attractiveness: 75,
  },
  {
    name: "Shane Walsh",
    category: "the-walking-dead",
    kills: 30,
    height: 183,
    age: 35,
    strength: 90,
    intelligence: 82,
    fame: 95,
    attractiveness: 94,
  },
  {
    name: "Hershel Greene",
    category: "the-walking-dead",
    kills: 15,
    height: 178,
    age: 70,
    strength: 60,
    intelligence: 94,
    fame: 94,
    attractiveness: 74,
  },
  ]),
  ...defineDealCharacters([
  {
    name: "The Governor",
    category: "the-walking-dead",
    kills: 65,
    height: 183,
    age: 45,
    strength: 87,
    intelligence: 92,
    fame: 96,
    attractiveness: 84,
  },
  {
    name: "Abraham Ford",
    category: "the-walking-dead",
    kills: 75,
    height: 188,
    age: 40,
    strength: 95,
    intelligence: 84,
    fame: 94,
    attractiveness: 90,
  },
  {
    name: "Rosita Espinosa",
    category: "the-walking-dead",
    kills: 70,
    height: 168,
    age: 30,
    strength: 84,
    intelligence: 88,
    fame: 95,
    attractiveness: 97,
  },
  {
    name: "Eugene Porter",
    category: "the-walking-dead",
    kills: 25,
    height: 183,
    age: 35,
    strength: 57,
    intelligence: 98,
    fame: 94,
    attractiveness: 72,
  },
  {
    name: "Sasha Williams",
    category: "the-walking-dead",
    kills: 65,
    height: 170,
    age: 30,
    strength: 82,
    intelligence: 87,
    fame: 92,
    attractiveness: 94,
  },
  {
    name: "Tyreese Williams",
    category: "the-walking-dead",
    kills: 45,
    height: 190,
    age: 40,
    strength: 96,
    intelligence: 81,
    fame: 91,
    attractiveness: 87,
  },
  {
    name: "Morgan Jones",
    category: "the-walking-dead",
    kills: 100,
    height: 178,
    age: 50,
    strength: 88,
    intelligence: 92,
    fame: 96,
    attractiveness: 84,
  },
  {
    name: "Gabriel Stokes",
    category: "the-walking-dead",
    kills: 45,
    height: 175,
    age: 45,
    strength: 70,
    intelligence: 89,
    fame: 91,
    attractiveness: 80,
  },
  {
    name: "Aaron",
    category: "the-walking-dead",
    kills: 60,
    height: 180,
    age: 40,
    strength: 83,
    intelligence: 91,
    fame: 90,
    attractiveness: 89,
  },
  {
    name: "Jesus",
    category: "the-walking-dead",
    kills: 60,
    height: 180,
    age: 35,
    strength: 92,
    intelligence: 90,
    fame: 93,
    attractiveness: 95,
  },
  {
    name: "Ezekiel",
    category: "the-walking-dead",
    kills: 55,
    height: 180,
    age: 45,
    strength: 82,
    intelligence: 93,
    fame: 94,
    attractiveness: 91,
  },
  {
    name: "Alpha",
    category: "the-walking-dead",
    kills: 75,
    height: 165,
    age: 45,
    strength: 80,
    intelligence: 94,
    fame: 94,
    attractiveness: 58,
  },
  {
    name: "Beta",
    category: "the-walking-dead",
    kills: 100,
    height: 196,
    age: 45,
    strength: 99,
    intelligence: 77,
    fame: 93,
    attractiveness: 68,
  },
  {
    name: "Merle Dixon",
    category: "the-walking-dead",
    kills: 45,
    height: 185,
    age: 45,
    strength: 89,
    intelligence: 79,
    fame: 91,
    attractiveness: 76,
  },
  {
    name: "Andrea",
    category: "the-walking-dead",
    kills: 30,
    height: 168,
    age: 35,
    strength: 75,
    intelligence: 84,
    fame: 92,
    attractiveness: 92,
    },
    {
  name: "Dale Horvath",
  category: "the-walking-dead",
  kills: 3,
  height: 178,
  age: 64,
  strength: 38,
  intelligence: 76,
  fame: 58,
  attractiveness: 38,
},
{
  name: "T-Dog",
  category: "the-walking-dead",
  kills: 12,
  height: 183,
  age: 35,
  strength: 72,
  intelligence: 53,
  fame: 55,
  attractiveness: 56,
},
{
  name: "Lori Grimes",
  category: "the-walking-dead",
  kills: 2,
  height: 170,
  age: 33,
  strength: 39,
  intelligence: 57,
  fame: 72,
  attractiveness: 74,
},
{
  name: "Beth Greene",
  category: "the-walking-dead",
  kills: 3,
  height: 165,
  age: 18,
  strength: 34,
  intelligence: 59,
  fame: 68,
  attractiveness: 78,
},
{
  name: "Tara Chambler",
  category: "the-walking-dead",
  kills: 24,
  height: 168,
  age: 28,
  strength: 63,
  intelligence: 62,
  fame: 62,
  attractiveness: 70,
},
{
  name: "Enid",
  category: "the-walking-dead",
  kills: 11,
  height: 163,
  age: 19,
  strength: 48,
  intelligence: 66,
  fame: 60,
  attractiveness: 72,
},
{
  name: "Dwight",
  category: "the-walking-dead",
  kills: 35,
  height: 180,
  age: 34,
  strength: 69,
  intelligence: 68,
  fame: 74,
  attractiveness: 57,
},
{
  name: "Simon",
  category: "the-walking-dead",
  kills: 60,
  height: 183,
  age: 48,
  strength: 76,
  intelligence: 67,
  fame: 69,
  attractiveness: 48,
},
{
  name: "Jerry",
  category: "the-walking-dead",
  kills: 30,
  height: 188,
  age: 38,
  strength: 82,
  intelligence: 61,
  fame: 64,
  attractiveness: 63,
},
{
  name: "Judith Grimes",
  category: "the-walking-dead",
  kills: 9,
  height: 135,
  age: 10,
  strength: 30,
  intelligence: 67,
  fame: 71,
  attractiveness: 70,
},

  // =========================
  // JURASSIC PARK / WORLD
  // =========================
  {
    name: "Alan Grant",
    category: "jurassic",
    kills: 2,
    height: 183,
    age: 50,
    strength: 76,
    intelligence: 95,
    fame: 100,
    attractiveness: 90,
  },
  {
    name: "Ellie Sattler",
    category: "jurassic",
    kills: 1,
    height: 168,
    age: 45,
    strength: 72,
    intelligence: 96,
    fame: 98,
    attractiveness: 94,
  },
  {
    name: "Ian Malcolm",
    category: "jurassic",
    kills: 0,
    height: 194,
    age: 45,
    strength: 57,
    intelligence: 98,
    fame: 100,
    attractiveness: 94,
  },
  {
    name: "John Hammond",
    category: "jurassic",
    kills: 0,
    height: 178,
    age: 75,
    strength: 38,
    intelligence: 91,
    fame: 98,
    attractiveness: 72,
  },
  {
    name: "Lex Murphy",
    category: "jurassic",
    kills: 0,
    height: 155,
    age: 13,
    strength: 42,
    intelligence: 91,
    fame: 88,
    attractiveness: 72,
  },
  {
    name: "Tim Murphy",
    category: "jurassic",
    kills: 0,
    height: 140,
    age: 10,
    strength: 38,
    intelligence: 82,
    fame: 87,
    attractiveness: 65,
  },
  {
    name: "Dennis Nedry",
    category: "jurassic",
    kills: 0,
    height: 180,
    age: 40,
    strength: 48,
    intelligence: 93,
    fame: 94,
    attractiveness: 55,
  },
  {
    name: "Robert Muldoon",
    category: "jurassic",
    kills: 4,
    height: 188,
    age: 50,
    strength: 84,
    intelligence: 89,
    fame: 91,
    attractiveness: 82,
  },
  {
    name: "Henry Wu",
    category: "jurassic",
    kills: 0,
    height: 178,
    age: 50,
    strength: 45,
    intelligence: 100,
    fame: 94,
    attractiveness: 84,
  },
  {
    name: "Ray Arnold",
    category: "jurassic",
    kills: 0,
    height: 189,
    age: 45,
    strength: 58,
    intelligence: 94,
    fame: 89,
    attractiveness: 81,
  },
  {
    name: "Donald Gennaro",
    category: "jurassic",
    kills: 0,
    height: 178,
    age: 40,
    strength: 47,
    intelligence: 86,
    fame: 85,
    attractiveness: 74,
  },
  {
    name: "Owen Grady",
    category: "jurassic",
    kills: 10,
    height: 188,
    age: 38,
    strength: 91,
    intelligence: 89,
    fame: 100,
    attractiveness: 98,
  },
  {
    name: "Claire Dearing",
    category: "jurassic",
    kills: 3,
    height: 170,
    age: 35,
    strength: 70,
    intelligence: 94,
    fame: 98,
    attractiveness: 97,
  },
  {
    name: "Maisie Lockwood",
    category: "jurassic",
    kills: 0,
    height: 152,
    age: 14,
    strength: 48,
    intelligence: 84,
    fame: 89,
    attractiveness: 76,
  },
  {
    name: "Zach Mitchell",
    category: "jurassic",
    kills: 0,
    height: 180,
    age: 16,
    strength: 61,
    intelligence: 78,
    fame: 85,
    attractiveness: 78,
  },
  {
    name: "Gray Mitchell",
    category: "jurassic",
    kills: 0,
    height: 150,
    age: 11,
    strength: 40,
    intelligence: 89,
    fame: 87,
    attractiveness: 66,
  },
  {
    name: "Barry Sembène",
    category: "jurassic",
    kills: 5,
    height: 183,
    age: 40,
    strength: 86,
    intelligence: 88,
    fame: 84,
    attractiveness: 91,
  },
  {
    name: "Simon Masrani",
    category: "jurassic",
    kills: 0,
    height: 175,
    age: 45,
    strength: 53,
    intelligence: 91,
    fame: 88,
    attractiveness: 84,
  },
  {
    name: "Vic Hoskins",
    category: "jurassic",
    kills: 2,
    height: 178,
    age: 50,
    strength: 82,
    intelligence: 82,
    fame: 86,
    attractiveness: 73,
  },
  {
    name: "Franklin Webb",
    category: "jurassic",
    kills: 0,
    height: 175,
    age: 30,
    strength: 50,
    intelligence: 91,
    fame: 82,
    attractiveness: 80,
  },
  {
    name: "Zia Rodriguez",
    category: "jurassic",
    kills: 1,
    height: 165,
    age: 30,
    strength: 66,
    intelligence: 94,
    fame: 84,
    attractiveness: 91,
  },
  {
    name: "Eli Mills",
    category: "jurassic",
    kills: 2,
    height: 180,
    age: 40,
    strength: 55,
    intelligence: 92,
    fame: 82,
    attractiveness: 78,
  },
  {
    name: "Benjamin Lockwood",
    category: "jurassic",
    kills: 0,
    height: 178,
    age: 80,
    strength: 30,
    intelligence: 91,
    fame: 81,
    attractiveness: 70,
  },
  {
    name: "Kayla Watts",
    category: "jurassic",
    kills: 3,
    height: 173,
    age: 35,
    strength: 80,
    intelligence: 88,
    fame: 86,
    attractiveness: 94,
  },
  {
    name: "Ramsay Cole",
    category: "jurassic",
    kills: 0,
    height: 183,
    age: 35,
    strength: 67,
    intelligence: 93,
    fame: 80,
    attractiveness: 92,
  },
  {
  name: "Sarah Harding",
  category: "jurassic",
  kills: 2,
  height: 173,
  age: 32,
  strength: 52,
  intelligence: 81,
  fame: 70,
  attractiveness: 76,
},
{
  name: "Roland Tembo",
  category: "jurassic",
  kills: 6,
  height: 188,
  age: 50,
  strength: 84,
  intelligence: 74,
  fame: 64,
  attractiveness: 58,
},
{
  name: "Nick Van Owen",
  category: "jurassic",
  kills: 1,
  height: 183,
  age: 36,
  strength: 61,
  intelligence: 72,
  fame: 55,
  attractiveness: 68,
},
{
  name: "Kelly Curtis",
  category: "jurassic",
  kills: 1,
  height: 160,
  age: 13,
  strength: 34,
  intelligence: 65,
  fame: 45,
  attractiveness: 72,
},
{
  name: "Billy Brennan",
  category: "jurassic",
  kills: 2,
  height: 180,
  age: 27,
  strength: 62,
  intelligence: 73,
  fame: 53,
  attractiveness: 72,
},
{
  name: "Paul Kirby",
  category: "jurassic",
  kills: 1,
  height: 178,
  age: 42,
  strength: 48,
  intelligence: 58,
  fame: 50,
  attractiveness: 45,
},
{
  name: "Amanda Kirby",
  category: "jurassic",
  kills: 1,
  height: 168,
  age: 40,
  strength: 43,
  intelligence: 55,
  fame: 49,
  attractiveness: 60,
},
{
  name: "Eric Kirby",
  category: "jurassic",
  kills: 2,
  height: 150,
  age: 12,
  strength: 37,
  intelligence: 71,
  fame: 52,
  attractiveness: 68,
},
{
  name: "Eddie Carr",
  category: "jurassic",
  kills: 0,
  height: 175,
  age: 35,
  strength: 58,
  intelligence: 79,
  fame: 57,
  attractiveness: 56,
},
{
  name: "Zara Young",
  category: "jurassic",
  kills: 0,
  height: 170,
  age: 27,
  strength: 38,
  intelligence: 66,
  fame: 62,
  attractiveness: 74,
},
    // =========================
  // SCHAUSPIELERINNEN
  // =========================

  {
    name: "Margot Robbie",
    category: "schauspielerinnen",
    kills: null,
    height: 168,
    age: 36,
    strength: 72,
    intelligence: 88,
    fame: 99,
    attractiveness: 99,
  },
  {
    name: "Ana de Armas",
    category: "schauspielerinnen",
    kills: null,
    height: 168,
    age: 38,
    strength: 70,
    intelligence: 86,
    fame: 96,
    attractiveness: 99,
  },
  {
    name: "Sydney Sweeney",
    category: "schauspielerinnen",
    kills: null,
    height: 161,
    age: 28,
    strength: 71,
    intelligence: 84,
    fame: 96,
    attractiveness: 98,
  },
  {
    name: "Scarlett Johansson",
    category: "schauspielerinnen",
    kills: null,
    height: 160,
    age: 41,
    strength: 79,
    intelligence: 89,
    fame: 100,
    attractiveness: 98,
  },
  {
    name: "Alexandra Daddario",
    category: "schauspielerinnen",
    kills: null,
    height: 173,
    age: 40,
    strength: 72,
    intelligence: 85,
    fame: 92,
    attractiveness: 99,
  },
  {
    name: "Megan Fox",
    category: "schauspielerinnen",
    kills: null,
    height: 163,
    age: 40,
    strength: 70,
    intelligence: 82,
    fame: 97,
    attractiveness: 98,
  },
  {
    name: "Gal Gadot",
    category: "schauspielerinnen",
    kills: null,
    height: 178,
    age: 41,
    strength: 86,
    intelligence: 87,
    fame: 98,
    attractiveness: 99,
  },
  {
    name: "Zendaya",
    category: "schauspielerinnen",
    kills: null,
    height: 178,
    age: 30,
    strength: 70,
    intelligence: 91,
    fame: 100,
    attractiveness: 98,
  },
  {
    name: "Emma Watson",
    category: "schauspielerinnen",
    kills: null,
    height: 165,
    age: 36,
    strength: 66,
    intelligence: 95,
    fame: 99,
    attractiveness: 97,
  },
  {
    name: "Lily Collins",
    category: "schauspielerinnen",
    kills: null,
    height: 165,
    age: 37,
    strength: 65,
    intelligence: 87,
    fame: 93,
    attractiveness: 97,
  },
  {
    name: "Elizabeth Olsen",
    category: "schauspielerinnen",
    kills: null,
    height: 168,
    age: 37,
    strength: 70,
    intelligence: 89,
    fame: 97,
    attractiveness: 98,
  },
  {
    name: "Jennifer Lawrence",
    category: "schauspielerinnen",
    kills: null,
    height: 175,
    age: 36,
    strength: 77,
    intelligence: 88,
    fame: 99,
    attractiveness: 97,
  },
  {
    name: "Emilia Clarke",
    category: "schauspielerinnen",
    kills: null,
    height: 157,
    age: 39,
    strength: 66,
    intelligence: 88,
    fame: 97,
    attractiveness: 98,
  },
  {
    name: "Natalie Portman",
    category: "schauspielerinnen",
    kills: null,
    height: 160,
    age: 45,
    strength: 68,
    intelligence: 97,
    fame: 99,
    attractiveness: 97,
  },
  {
    name: "Anne Hathaway",
    category: "schauspielerinnen",
    kills: null,
    height: 173,
    age: 43,
    strength: 69,
    intelligence: 91,
    fame: 99,
    attractiveness: 97,
  },
  {
    name: "Blake Lively",
    category: "schauspielerinnen",
    kills: null,
    height: 178,
    age: 39,
    strength: 70,
    intelligence: 87,
    fame: 96,
    attractiveness: 98,
  },
  {
    name: "Dakota Johnson",
    category: "schauspielerinnen",
    kills: null,
    height: 171,
    age: 36,
    strength: 65,
    intelligence: 87,
    fame: 95,
    attractiveness: 97,
  },
  {
    name: "Jessica Alba",
    category: "schauspielerinnen",
    kills: null,
    height: 169,
    age: 45,
    strength: 70,
    intelligence: 91,
    fame: 96,
    attractiveness: 98,
  },
  {
    name: "Monica Bellucci",
    category: "schauspielerinnen",
    kills: null,
    height: 171,
    age: 61,
    strength: 62,
    intelligence: 89,
    fame: 96,
    attractiveness: 99,
  },
  {
    name: "Salma Hayek",
    category: "schauspielerinnen",
    kills: null,
    height: 157,
    age: 59,
    strength: 66,
    intelligence: 91,
    fame: 97,
    attractiveness: 98,
  },
  {
    name: "Florence Pugh",
    category: "schauspielerinnen",
    kills: null,
    height: 162,
    age: 30,
    strength: 76,
    intelligence: 88,
    fame: 96,
    attractiveness: 95,
  },
  {
    name: "Hailee Steinfeld",
    category: "schauspielerinnen",
    kills: null,
    height: 173,
    age: 29,
    strength: 69,
    intelligence: 87,
    fame: 95,
    attractiveness: 97,
  },
  {
    name: "Madelyn Cline",
    category: "schauspielerinnen",
    kills: null,
    height: 168,
    age: 28,
    strength: 67,
    intelligence: 83,
    fame: 91,
    attractiveness: 98,
  },
  {
    name: "Victoria Justice",
    category: "schauspielerinnen",
    kills: null,
    height: 166,
    age: 33,
    strength: 66,
    intelligence: 85,
    fame: 91,
    attractiveness: 98,
  },
  {
    name: "Eiza González",
    category: "schauspielerinnen",
    kills: null,
    height: 173,
    age: 36,
    strength: 73,
    intelligence: 86,
    fame: 94,
    attractiveness: 99,
  },
  {
  name: "Inde Navarrette",
  category: "schauspielerinnen",
  kills: null,
  height: 152,
  age: 25,
  strength: 67,
  intelligence: 86,
  fame: 91,
  attractiveness: 100,
},
{
  name: "Jenna Ortega",
  category: "schauspielerinnen",
  kills: null,
  height: 155,
  age: 23,
  strength: 42,
  intelligence: 72,
  fame: 88,
  attractiveness: 86,
},
{
  name: "Anya Taylor-Joy",
  category: "schauspielerinnen",
  kills: null,
  height: 173,
  age: 30,
  strength: 40,
  intelligence: 78,
  fame: 86,
  attractiveness: 89,
},
{
  name: "Emma Stone",
  category: "schauspielerinnen",
  kills: null,
  height: 168,
  age: 37,
  strength: 43,
  intelligence: 80,
  fame: 94,
  attractiveness: 88,
},
{
  name: "Rachel McAdams",
  category: "schauspielerinnen",
  kills: null,
  height: 163,
  age: 47,
  strength: 41,
  intelligence: 77,
  fame: 89,
  attractiveness: 88,
},
{
  name: "Charlize Theron",
  category: "schauspielerinnen",
  kills: null,
  height: 177,
  age: 50,
  strength: 68,
  intelligence: 79,
  fame: 93,
  attractiveness: 90,
},
{
  name: "Mila Kunis",
  category: "schauspielerinnen",
  kills: null,
  height: 163,
  age: 43,
  strength: 40,
  intelligence: 74,
  fame: 88,
  attractiveness: 87,
},
{
  name: "Rebecca Ferguson",
  category: "schauspielerinnen",
  kills: null,
  height: 165,
  age: 42,
  strength: 58,
  intelligence: 78,
  fame: 84,
  attractiveness: 89,
},
{
  name: "Sophie Turner",
  category: "schauspielerinnen",
  kills: null,
  height: 175,
  age: 30,
  strength: 45,
  intelligence: 72,
  fame: 86,
  attractiveness: 87,
},
{
  name: "Lily James",
  category: "schauspielerinnen",
  kills: null,
  height: 170,
  age: 37,
  strength: 42,
  intelligence: 75,
  fame: 82,
  attractiveness: 88,
},
{
  name: "Alicia Vikander",
  category: "schauspielerinnen",
  kills: null,
  height: 168,
  age: 37,
  strength: 56,
  intelligence: 81,
  fame: 84,
  attractiveness: 88,
},
    // =========================
  // SCHAUSPIELER
  // =========================

  {
    name: "Henry Cavill",
    category: "schauspieler",
    kills: null,
    height: 185,
    age: 43,
    strength: 90,
    intelligence: 89,
    fame: 99,
    attractiveness: 99,
  },
  {
    name: "Chris Hemsworth",
    category: "schauspieler",
    kills: null,
    height: 190,
    age: 43,
    strength: 94,
    intelligence: 86,
    fame: 99,
    attractiveness: 99,
  },
  {
    name: "Chris Evans",
    category: "schauspieler",
    kills: null,
    height: 183,
    age: 45,
    strength: 87,
    intelligence: 88,
    fame: 99,
    attractiveness: 98,
  },
  {
    name: "Ryan Gosling",
    category: "schauspieler",
    kills: null,
    height: 184,
    age: 45,
    strength: 78,
    intelligence: 91,
    fame: 100,
    attractiveness: 98,
  },
  ]),
  ...defineDealCharacters([
  {
    name: "Brad Pitt",
    category: "schauspieler",
    kills: null,
    height: 180,
    age: 62,
    strength: 75,
    intelligence: 89,
    fame: 100,
    attractiveness: 98,
  },
  {
    name: "Leonardo DiCaprio",
    category: "schauspieler",
    kills: null,
    height: 183,
    age: 51,
    strength: 70,
    intelligence: 94,
    fame: 100,
    attractiveness: 94,
  },
  {
    name: "Zac Efron",
    category: "schauspieler",
    kills: null,
    height: 173,
    age: 38,
    strength: 91,
    intelligence: 84,
    fame: 97,
    attractiveness: 98,
  },
  {
    name: "Michael B. Jordan",
    category: "schauspieler",
    kills: null,
    height: 183,
    age: 39,
    strength: 92,
    intelligence: 88,
    fame: 97,
    attractiveness: 99,
  },
  {
    name: "Theo James",
    category: "schauspieler",
    kills: null,
    height: 183,
    age: 41,
    strength: 86,
    intelligence: 89,
    fame: 94,
    attractiveness: 99,
  },
  {
    name: "Jacob Elordi",
    category: "schauspieler",
    kills: null,
    height: 196,
    age: 29,
    strength: 84,
    intelligence: 84,
    fame: 96,
    attractiveness: 99,
  },
  {
    name: "Tom Hardy",
    category: "schauspieler",
    kills: null,
    height: 175,
    age: 48,
    strength: 89,
    intelligence: 90,
    fame: 98,
    attractiveness: 96,
  },
  {
    name: "Jason Momoa",
    category: "schauspieler",
    kills: null,
    height: 193,
    age: 47,
    strength: 95,
    intelligence: 84,
    fame: 98,
    attractiveness: 99,
  },
  {
    name: "Robert Pattinson",
    category: "schauspieler",
    kills: null,
    height: 185,
    age: 40,
    strength: 78,
    intelligence: 92,
    fame: 99,
    attractiveness: 98,
  },
  {
    name: "Ryan Reynolds",
    category: "schauspieler",
    kills: null,
    height: 188,
    age: 49,
    strength: 84,
    intelligence: 91,
    fame: 100,
    attractiveness: 98,
  },
  {
    name: "Chris Pine",
    category: "schauspieler",
    kills: null,
    height: 184,
    age: 46,
    strength: 80,
    intelligence: 89,
    fame: 96,
    attractiveness: 98,
  },
  {
    name: "Sebastian Stan",
    category: "schauspieler",
    kills: null,
    height: 183,
    age: 44,
    strength: 85,
    intelligence: 87,
    fame: 97,
    attractiveness: 98,
  },
  {
    name: "Andrew Garfield",
    category: "schauspieler",
    kills: null,
    height: 179,
    age: 43,
    strength: 77,
    intelligence: 92,
    fame: 98,
    attractiveness: 98,
  },
  {
    name: "Jake Gyllenhaal",
    category: "schauspieler",
    kills: null,
    height: 182,
    age: 45,
    strength: 86,
    intelligence: 92,
    fame: 98,
    attractiveness: 97,
  },
  {
    name: "Aaron Taylor-Johnson",
    category: "schauspieler",
    kills: null,
    height: 180,
    age: 36,
    strength: 88,
    intelligence: 86,
    fame: 95,
    attractiveness: 99,
  },
  {
    name: "Austin Butler",
    category: "schauspieler",
    kills: null,
    height: 183,
    age: 35,
    strength: 79,
    intelligence: 88,
    fame: 97,
    attractiveness: 99,
  },
  {
    name: "Glen Powell",
    category: "schauspieler",
    kills: null,
    height: 183,
    age: 37,
    strength: 85,
    intelligence: 87,
    fame: 96,
    attractiveness: 98,
  },
  {
    name: "Idris Elba",
    category: "schauspieler",
    kills: null,
    height: 189,
    age: 53,
    strength: 89,
    intelligence: 91,
    fame: 98,
    attractiveness: 98,
  },
  {
    name: "Pedro Pascal",
    category: "schauspieler",
    kills: null,
    height: 180,
    age: 51,
    strength: 75,
    intelligence: 91,
    fame: 99,
    attractiveness: 97,
  },
  {
    name: "Jensen Ackles",
    category: "schauspieler",
    kills: null,
    height: 186,
    age: 48,
    strength: 86,
    intelligence: 87,
    fame: 95,
    attractiveness: 99,
  },
  {
    name: "Charles Melton",
    category: "schauspieler",
    kills: null,
    height: 185,
    age: 35,
    strength: 89,
    intelligence: 85,
    fame: 91,
    attractiveness: 99,
  },
  {
  name: "Tom Welling",
  category: "schauspieler",
  kills: null,
  height: 190,
  age: 49,
  strength: 88,
  intelligence: 86,
  fame: 94,
  attractiveness: 100,
},
{
  name: "Paul Walker",
  category: "schauspieler",
  kills: null,
  height: 188,
  age: 40,
  strength: 84,
  intelligence: 86,
  fame: 98,
  attractiveness: 100,
},
{
  name: "Cillian Murphy",
  category: "schauspieler",
  kills: null,
  height: 172,
  age: 50,
  strength: 45,
  intelligence: 84,
  fame: 93,
  attractiveness: 88,
},
{
  name: "Keanu Reeves",
  category: "schauspieler",
  kills: null,
  height: 186,
  age: 62,
  strength: 72,
  intelligence: 77,
  fame: 96,
  attractiveness: 88,
},
{
  name: "Hugh Jackman",
  category: "schauspieler",
  kills: null,
  height: 188,
  age: 57,
  strength: 84,
  intelligence: 79,
  fame: 96,
  attractiveness: 91,
},
{
  name: "Chris Pratt",
  category: "schauspieler",
  kills: null,
  height: 188,
  age: 47,
  strength: 78,
  intelligence: 70,
  fame: 94,
  attractiveness: 85,
},
{
  name: "Channing Tatum",
  category: "schauspieler",
  kills: null,
  height: 185,
  age: 46,
  strength: 82,
  intelligence: 68,
  fame: 91,
  attractiveness: 91,
},
{
  name: "Oscar Isaac",
  category: "schauspieler",
  kills: null,
  height: 174,
  age: 47,
  strength: 57,
  intelligence: 81,
  fame: 88,
  attractiveness: 89,
},
{
  name: "Timothée Chalamet",
  category: "schauspieler",
  kills: null,
  height: 178,
  age: 30,
  strength: 39,
  intelligence: 78,
  fame: 95,
  attractiveness: 90,
},
{
  name: "Alexander Skarsgård",
  category: "schauspieler",
  kills: null,
  height: 194,
  age: 50,
  strength: 81,
  intelligence: 76,
  fame: 86,
  attractiveness: 92,
},
{
  name: "Matt Bomer",
  category: "schauspieler",
  kills: null,
  height: 182,
  age: 48,
  strength: 61,
  intelligence: 77,
  fame: 82,
  attractiveness: 94,
},
{
  name: "Dev Patel",
  category: "schauspieler",
  kills: null,
  height: 187,
  age: 36,
  strength: 63,
  intelligence: 80,
  fame: 84,
  attractiveness: 88,
},

// =========================
// FUßBALLER
// =========================

{
  name: "Lionel Messi",
  category: "fussballer",
  kills: null,
  height: 170,
  age: 39,
  strength: 68,
  intelligence: 94,
  skill: 99,
  fame: 100,
  attractiveness: 80,
  goals: 890,
  assists: 390,
  titles: 46,
  awards: 25,
  clAppearances: 163,
  internationalCaps: 200,
},
{
  name: "Cristiano Ronaldo",
  category: "fussballer",
  kills: null,
  height: 187,
  age: 41,
  strength: 91,
  intelligence: 90,
  skill: 98,
  fame: 100,
  attractiveness: 95,
  goals: 960,
  assists: 270,
  titles: 35,
  awards: 20,
  clAppearances: 183,
  internationalCaps: 230,
},
{
  name: "Kylian Mbappé",
  category: "fussballer",
  kills: null,
  height: 178,
  age: 27,
  strength: 82,
  intelligence: 87,
  skill: 96,
  fame: 98,
  attractiveness: 86,
  goals: 410,
  assists: 175,
  titles: 20,
  awards: 10,
  clAppearances: 95,
  internationalCaps: 100,
},
{
  name: "Neymar Jr.",
  category: "fussballer",
  kills: null,
  height: 175,
  age: 34,
  strength: 66,
  intelligence: 86,
  skill: 97,
  fame: 98,
  attractiveness: 88,
  goals: 450,
  assists: 300,
  titles: 30,
  awards: 8,
  clAppearances: 81,
  internationalCaps: 130,
},
{
  name: "Erling Haaland",
  category: "fussballer",
  kills: null,
  height: 195,
  age: 26,
  strength: 97,
  intelligence: 83,
  skill: 94,
  fame: 96,
  attractiveness: 84,
  goals: 330,
  assists: 70,
  titles: 13,
  awards: 8,
  clAppearances: 65,
  internationalCaps: 55,
},
{
  name: "Jude Bellingham",
  category: "fussballer",
  kills: null,
  height: 186,
  age: 23,
  strength: 88,
  intelligence: 89,
  skill: 95,
  fame: 94,
  attractiveness: 92,
  goals: 100,
  assists: 65,
  titles: 8,
  awards: 5,
  clAppearances: 55,
  internationalCaps: 55,
},
{
  name: "Vinícius Júnior",
  category: "fussballer",
  kills: null,
  height: 176,
  age: 26,
  strength: 74,
  intelligence: 84,
  skill: 95,
  fame: 94,
  attractiveness: 80,
  goals: 150,
  assists: 130,
  titles: 16,
  awards: 6,
  clAppearances: 75,
  internationalCaps: 50,
},
{
  name: "Mohamed Salah",
  category: "fussballer",
  kills: null,
  height: 175,
  age: 34,
  strength: 81,
  intelligence: 88,
  skill: 94,
  fame: 96,
  attractiveness: 86,
  goals: 400,
  assists: 180,
  titles: 11,
  awards: 9,
  clAppearances: 95,
  internationalCaps: 115,
},
{
  name: "Kevin De Bruyne",
  category: "fussballer",
  kills: null,
  height: 181,
  age: 35,
  strength: 77,
  intelligence: 96,
  skill: 94,
  fame: 93,
  attractiveness: 78,
  goals: 180,
  assists: 320,
  titles: 22,
  awards: 8,
  clAppearances: 105,
  internationalCaps: 120,
},
{
  name: "Robert Lewandowski",
  category: "fussballer",
  kills: null,
  height: 185,
  age: 38,
  strength: 87,
  intelligence: 91,
  skill: 94,
  fame: 95,
  attractiveness: 89,
  goals: 750,
  assists: 170,
  titles: 30,
  awards: 15,
  clAppearances: 140,
  internationalCaps: 165,
},
{
  name: "Harry Kane",
  category: "fussballer",
  kills: null,
  height: 188,
  age: 33,
  strength: 88,
  intelligence: 91,
  skill: 93,
  fame: 93,
  attractiveness: 79,
  goals: 500,
  assists: 130,
  titles: 2,
  awards: 8,
  clAppearances: 100,
  internationalCaps: 115,
},
{
  name: "Luka Modrić",
  category: "fussballer",
  kills: null,
  height: 172,
  age: 40,
  strength: 62,
  intelligence: 97,
  skill: 96,
  fame: 94,
  attractiveness: 75,
  goals: 140,
  assists: 140,
  titles: 33,
  awards: 10,
  clAppearances: 145,
  internationalCaps: 195,
},
{
  name: "Toni Kroos",
  category: "fussballer",
  kills: null,
  height: 183,
  age: 36,
  strength: 71,
  intelligence: 98,
  skill: 95,
  fame: 93,
  attractiveness: 84,
  goals: 110,
  assists: 190,
  titles: 34,
  awards: 6,
  clAppearances: 151,
  internationalCaps: 114,
},
{
  name: "Manuel Neuer",
  category: "fussballer",
  kills: null,
  height: 193,
  age: 40,
  strength: 86,
  intelligence: 93,
  skill: 94,
  fame: 94,
  attractiveness: 82,
  goals: 0,
  assists: 8,
  titles: 31,
  awards: 10,
  clAppearances: 150,
  internationalCaps: 124,
},
{
  name: "Thomas Müller",
  category: "fussballer",
  kills: null,
  height: 185,
  age: 36,
  strength: 74,
  intelligence: 97,
  skill: 90,
  fame: 94,
  attractiveness: 76,
  goals: 300,
  assists: 290,
  titles: 33,
  awards: 7,
  clAppearances: 163,
  internationalCaps: 131,
},
{
  name: "Sergio Ramos",
  category: "fussballer",
  kills: null,
  height: 184,
  age: 40,
  strength: 94,
  intelligence: 88,
  skill: 91,
  fame: 96,
  attractiveness: 94,
  goals: 140,
  assists: 40,
  titles: 30,
  awards: 7,
  clAppearances: 142,
  internationalCaps: 180,
},
{
  name: "Karim Benzema",
  category: "fussballer",
  kills: null,
  height: 185,
  age: 38,
  strength: 84,
  intelligence: 91,
  skill: 94,
  fame: 94,
  attractiveness: 86,
  goals: 500,
  assists: 190,
  titles: 34,
  awards: 8,
  clAppearances: 152,
  internationalCaps: 97,
},
{
  name: "Ronaldinho",
  category: "fussballer",
  kills: null,
  height: 181,
  age: 46,
  strength: 68,
  intelligence: 90,
  skill: 99,
  fame: 98,
  attractiveness: 79,
  goals: 313,
  assists: 200,
  titles: 19,
  awards: 12,
  clAppearances: 47,
  internationalCaps: 97,
},
{
  name: "Zinedine Zidane",
  category: "fussballer",
  kills: null,
  height: 185,
  age: 54,
  strength: 76,
  intelligence: 97,
  skill: 99,
  fame: 98,
  attractiveness: 88,
  goals: 156,
  assists: 150,
  titles: 13,
  awards: 12,
  clAppearances: 80,
  internationalCaps: 108,
},
{
  name: "Ronaldo Nazário",
  category: "fussballer",
  kills: null,
  height: 183,
  age: 49,
  strength: 92,
  intelligence: 88,
  skill: 99,
  fame: 98,
  attractiveness: 78,
  goals: 414,
  assists: 100,
  titles: 18,
  awards: 14,
  clAppearances: 40,
  internationalCaps: 98,
},
{
  name: "David Beckham",
  category: "fussballer",
  kills: null,
  height: 183,
  age: 51,
  strength: 72,
  intelligence: 88,
  skill: 93,
  fame: 99,
  attractiveness: 97,
  goals: 130,
  assists: 210,
  titles: 21,
  awards: 6,
  clAppearances: 107,
  internationalCaps: 115,
},
{
  name: "Thierry Henry",
  category: "fussballer",
  kills: null,
  height: 188,
  age: 49,
  strength: 84,
  intelligence: 92,
  skill: 97,
  fame: 96,
  attractiveness: 91,
  goals: 411,
  assists: 200,
  titles: 20,
  awards: 10,
  clAppearances: 112,
  internationalCaps: 123,
},
{
  name: "Andrés Iniesta",
  category: "fussballer",
  kills: null,
  height: 171,
  age: 42,
  strength: 58,
  intelligence: 98,
  skill: 98,
  fame: 95,
  attractiveness: 72,
  goals: 107,
  assists: 190,
  titles: 37,
  awards: 9,
  clAppearances: 130,
  internationalCaps: 131,
},
{
  name: "Xavi",
  category: "fussballer",
  kills: null,
  height: 170,
  age: 46,
  strength: 60,
  intelligence: 99,
  skill: 97,
  fame: 95,
  attractiveness: 72,
  goals: 110,
  assists: 220,
  titles: 32,
  awards: 9,
  clAppearances: 151,
  internationalCaps: 133,
},
{
  name: "Zlatan Ibrahimović",
  category: "fussballer",
  kills: null,
  height: 195,
  age: 44,
  strength: 96,
  intelligence: 89,
  skill: 96,
  fame: 98,
  attractiveness: 91,
  goals: 573,
  assists: 220,
  titles: 32,
  awards: 11,
  clAppearances: 124,
  internationalCaps: 122,
},

// =========================
// FILME
// =========================

{
  name: "Titanic",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 99,
  attractiveness: null,
  boxOffice: 2264,
  imdb: 7.9,
  watchRate: 95,
},
{
  name: "Avatar",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 98,
  attractiveness: null,
  boxOffice: 2924,
  imdb: 7.9,
  watchRate: 92,
},
{
  name: "Avengers: Endgame",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 100,
  attractiveness: null,
  boxOffice: 2799,
  imdb: 8.4,
  watchRate: 96,
},
{
  name: "Avengers: Infinity War",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 99,
  attractiveness: null,
  boxOffice: 2052,
  imdb: 8.4,
  watchRate: 95,
},
{
  name: "The Dark Knight",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 99,
  attractiveness: null,
  boxOffice: 1006,
  imdb: 9.0,
  watchRate: 97,
},
{
  name: "Interstellar",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 98,
  attractiveness: null,
  boxOffice: 759,
  imdb: 8.7,
  watchRate: 96,
},
{
  name: "Inception",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 97,
  attractiveness: null,
  boxOffice: 839,
  imdb: 8.8,
  watchRate: 95,
},
{
  name: "Joker",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 98,
  attractiveness: null,
  boxOffice: 1079,
  imdb: 8.3,
  watchRate: 93,
},
{
  name: "Gladiator",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 95,
  attractiveness: null,
  boxOffice: 465,
  imdb: 8.5,
  watchRate: 91,
},
{
  name: "The Lord of the Rings: The Return of the King",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 99,
  attractiveness: null,
  boxOffice: 1156,
  imdb: 9.0,
  watchRate: 96,
},
{
  name: "The Wolf of Wall Street",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 96,
  attractiveness: null,
  boxOffice: 407,
  imdb: 8.2,
  watchRate: 94,
},
{
  name: "Fight Club",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 97,
  attractiveness: null,
  boxOffice: 101,
  imdb: 8.8,
  watchRate: 94,
},
{
  name: "Forrest Gump",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 97,
  attractiveness: null,
  boxOffice: 678,
  imdb: 8.8,
  watchRate: 95,
},
{
  name: "Jurassic Park",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 98,
  attractiveness: null,
  boxOffice: 1109,
  imdb: 8.2,
  watchRate: 94,
},
{
  name: "Jurassic World",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 96,
  attractiveness: null,
  boxOffice: 1672,
  imdb: 6.9,
  watchRate: 89,
},
{
  name: "Harry Potter and the Deathly Hallows – Part 2",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 99,
  attractiveness: null,
  boxOffice: 1342,
  imdb: 8.1,
  watchRate: 95,
},
{
  name: "Spider-Man: No Way Home",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 99,
  attractiveness: null,
  boxOffice: 1953,
  imdb: 8.2,
  watchRate: 96,
},
{
  name: "Top Gun: Maverick",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 96,
  attractiveness: null,
  boxOffice: 1496,
  imdb: 8.2,
  watchRate: 93,
},
{
  name: "Oppenheimer",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 97,
  attractiveness: null,
  boxOffice: 976,
  imdb: 8.3,
  watchRate: 94,
},
{
  name: "Barbie",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 98,
  attractiveness: null,
  boxOffice: 1446,
  imdb: 6.8,
  watchRate: 91,
},
{
  name: "The Shawshank Redemption",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 95,
  attractiveness: null,
  boxOffice: 73,
  imdb: 9.3,
  watchRate: 94,
},
{
  name: "Pulp Fiction",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 96,
  attractiveness: null,
  boxOffice: 214,
  imdb: 8.9,
  watchRate: 93,
},
{
  name: "Star Wars: The Empire Strikes Back",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 98,
  attractiveness: null,
  boxOffice: 549,
  imdb: 8.7,
  watchRate: 95,
},
{
  name: "Pirates of the Caribbean: The Curse of the Black Pearl",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 97,
  attractiveness: null,
  boxOffice: 654,
  imdb: 8.1,
  watchRate: 94,
},
{
  name: "The Matrix",
  category: "filme",
  kills: null,
  height: null,
  age: null,
  strength: 0,
  intelligence: 0,
  fame: 98,
  attractiveness: null,
  boxOffice: 467,
  imdb: 8.7,
  watchRate: 95,
},

  // Weitere bekannte Filme (100 insgesamt).
  // fame und watchRate sind Spielschätzungen, keine gemessenen Zuschauerquoten.
  // 1972; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Godfather",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 251,
    imdb: 9.2,
    watchRate: 92,
  },

  // 1974; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Godfather Part II",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 94,
    attractiveness: null,
    boxOffice: 48,
    imdb: 9.0,
    watchRate: 84,
  },

  // 1999; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Green Mile",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 94,
    attractiveness: null,
    boxOffice: 287,
    imdb: 8.6,
    watchRate: 88,
  },

  // 1993; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Schindler’s List",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 96,
    attractiveness: null,
    boxOffice: 322,
    imdb: 9.0,
    watchRate: 89,
  },

  // 1998; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Saving Private Ryan",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 94,
    attractiveness: null,
    boxOffice: 482,
    imdb: 8.6,
    watchRate: 87,
  },

  // 2012; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Django Unchained",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 96,
    attractiveness: null,
    boxOffice: 426,
    imdb: 8.5,
    watchRate: 92,
  },

  // 2009; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Inglourious Basterds",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 95,
    attractiveness: null,
    boxOffice: 321,
    imdb: 8.4,
    watchRate: 89,
  },

  // 1995; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Se7en",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 94,
    attractiveness: null,
    boxOffice: 330,
    imdb: 8.6,
    watchRate: 87,
  },

  // 1991; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Silence of the Lambs",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 96,
    attractiveness: null,
    boxOffice: 273,
    imdb: 8.6,
    watchRate: 89,
  },

  // 2006; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Departed",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 90,
    attractiveness: null,
    boxOffice: 292,
    imdb: 8.5,
    watchRate: 82,
  },

  // 2010; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Shutter Island",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 94,
    attractiveness: null,
    boxOffice: 295,
    imdb: 8.2,
    watchRate: 90,
  },

  // 1990; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Goodfellas",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 93,
    attractiveness: null,
    boxOffice: 47,
    imdb: 8.7,
    watchRate: 85,
  },

  // 1983; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Scarface",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 97,
    attractiveness: null,
    boxOffice: 66,
    imdb: 8.3,
    watchRate: 88,
  },

  // 1998; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Truman Show",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 94,
    attractiveness: null,
    boxOffice: 264,
    imdb: 8.2,
    watchRate: 89,
  },

  // 1985; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Back to the Future",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 99,
    attractiveness: null,
    boxOffice: 392,
    imdb: 8.5,
    watchRate: 96,
  },

  // 1982; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "E.T. the Extra-Terrestrial",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 797,
    imdb: 7.9,
    watchRate: 94,
  },

  // 1975; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Jaws",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 97,
    attractiveness: null,
    boxOffice: 491,
    imdb: 8.1,
    watchRate: 91,
  },
  ]),
  ...defineDealCharacters([

  // 1984; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Ghostbusters",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 96,
    attractiveness: null,
    boxOffice: 297,
    imdb: 7.8,
    watchRate: 91,
  },

  // 1990; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Home Alone",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 99,
    attractiveness: null,
    boxOffice: 477,
    imdb: 7.8,
    watchRate: 96,
  },

  // 2009; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Hangover",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 469,
    imdb: 7.7,
    watchRate: 94,
  },

  // 1999; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "American Pie",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 96,
    attractiveness: null,
    boxOffice: 235,
    imdb: 7.0,
    watchRate: 90,
  },

  // 1990; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Pretty Woman",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 97,
    attractiveness: null,
    boxOffice: 463,
    imdb: 7.1,
    watchRate: 91,
  },

  // 2011; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Intouchables",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 96,
    attractiveness: null,
    boxOffice: 427,
    imdb: 8.5,
    watchRate: 93,
  },

  // 1999; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Sixth Sense",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 94,
    attractiveness: null,
    boxOffice: 673,
    imdb: 8.2,
    watchRate: 89,
  },

  // 1980; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Shining",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 96,
    attractiveness: null,
    boxOffice: 50,
    imdb: 8.4,
    watchRate: 87,
  },

  // 2017; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "It",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 94,
    attractiveness: null,
    boxOffice: 720,
    imdb: 7.3,
    watchRate: 89,
  },

  // 2013; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Conjuring",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 93,
    attractiveness: null,
    boxOffice: 321,
    imdb: 7.5,
    watchRate: 85,
  },

  // 1996; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Scream",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 95,
    attractiveness: null,
    boxOffice: 173,
    imdb: 7.4,
    watchRate: 88,
  },

  // 1978; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Halloween",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 93,
    attractiveness: null,
    boxOffice: 47,
    imdb: 7.7,
    watchRate: 83,
  },

  // 1979; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Alien",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 97,
    attractiveness: null,
    boxOffice: 110,
    imdb: 8.4,
    watchRate: 88,
  },

  // 1986; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Aliens",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 94,
    attractiveness: null,
    boxOffice: 131,
    imdb: 8.4,
    watchRate: 85,
  },

  // 1991; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Terminator 2: Judgment Day",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 519,
    imdb: 8.6,
    watchRate: 91,
  },

  // 1988; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Die Hard",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 97,
    attractiveness: null,
    boxOffice: 144,
    imdb: 8.2,
    watchRate: 92,
  },

  // 2014; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "John Wick",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 97,
    attractiveness: null,
    boxOffice: 86,
    imdb: 7.5,
    watchRate: 92,
  },

  // 2015; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Mad Max: Fury Road",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 95,
    attractiveness: null,
    boxOffice: 380,
    imdb: 8.1,
    watchRate: 87,
  },

  // 1994; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Speed",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 92,
    attractiveness: null,
    boxOffice: 350,
    imdb: 7.3,
    watchRate: 84,
  },

  // 1997; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Men in Black",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 589,
    imdb: 7.3,
    watchRate: 94,
  },

  // 1996; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Independence Day",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 97,
    attractiveness: null,
    boxOffice: 817,
    imdb: 7.0,
    watchRate: 92,
  },

  // 2015; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Martian",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 94,
    attractiveness: null,
    boxOffice: 631,
    imdb: 8.0,
    watchRate: 89,
  },

  // 2021; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Dune",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 95,
    attractiveness: null,
    boxOffice: 411,
    imdb: 8.0,
    watchRate: 89,
  },

  // 2024; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Dune: Part Two",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 96,
    attractiveness: null,
    boxOffice: 715,
    imdb: 8.4,
    watchRate: 89,
  },

  // 2022; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Avatar: The Way of Water",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 2334,
    imdb: 7.5,
    watchRate: 92,
  },

  // 1977; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Star Wars: A New Hope",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 99,
    attractiveness: null,
    boxOffice: 775,
    imdb: 8.6,
    watchRate: 95,
  },

  // 1983; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Star Wars: Return of the Jedi",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 482,
    imdb: 8.3,
    watchRate: 93,
  },

  // 2005; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Star Wars: Revenge of the Sith",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 906,
    imdb: 7.7,
    watchRate: 94,
  },

  // 2015; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Star Wars: The Force Awakens",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 2071,
    imdb: 7.7,
    watchRate: 93,
  },

  // 2016; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Rogue One: A Star Wars Story",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 96,
    attractiveness: null,
    boxOffice: 1059,
    imdb: 7.8,
    watchRate: 90,
  },

  // 2001; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 99,
    attractiveness: null,
    boxOffice: 898,
    imdb: 8.9,
    watchRate: 95,
  },

  // 2002; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Lord of the Rings: The Two Towers",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 945,
    imdb: 8.8,
    watchRate: 94,
  },

  // 2012; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Hobbit: An Unexpected Journey",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 96,
    attractiveness: null,
    boxOffice: 1017,
    imdb: 7.8,
    watchRate: 91,
  },

  // 2001; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Harry Potter and the Philosopher’s Stone",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 99,
    attractiveness: null,
    boxOffice: 1035,
    imdb: 7.7,
    watchRate: 97,
  },

  // 2002; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Harry Potter and the Chamber of Secrets",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 884,
    imdb: 7.5,
    watchRate: 94,
  },

  // 2004; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Harry Potter and the Prisoner of Azkaban",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 812,
    imdb: 7.9,
    watchRate: 94,
  },

  // 2005; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Harry Potter and the Goblet of Fire",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 901,
    imdb: 7.7,
    watchRate: 94,
  },

  // 2006; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Pirates of the Caribbean: Dead Man’s Chest",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 1066,
    imdb: 7.4,
    watchRate: 94,
  },

  // 2008; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Iron Man",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 99,
    attractiveness: null,
    boxOffice: 586,
    imdb: 7.9,
    watchRate: 95,
  },

  // 2012; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Avengers",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 99,
    attractiveness: null,
    boxOffice: 1521,
    imdb: 8.0,
    watchRate: 96,
  },

  // 2014; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Guardians of the Galaxy",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 773,
    imdb: 8.0,
    watchRate: 94,
  },

  // 2018; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Black Panther",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 97,
    attractiveness: null,
    boxOffice: 1350,
    imdb: 7.3,
    watchRate: 93,
  },

  // 2016; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Deadpool",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 783,
    imdb: 8.0,
    watchRate: 94,
  },

  // 2017; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Logan",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 97,
    attractiveness: null,
    boxOffice: 619,
    imdb: 8.1,
    watchRate: 92,
  },

  // 2002; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Spider-Man",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 99,
    attractiveness: null,
    boxOffice: 811,
    imdb: 7.4,
    watchRate: 96,
  },

  // 2022; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Batman",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 97,
    attractiveness: null,
    boxOffice: 773,
    imdb: 7.8,
    watchRate: 91,
  },

  // 1994; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "The Lion King",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 99,
    attractiveness: null,
    boxOffice: 979,
    imdb: 8.5,
    watchRate: 97,
  },

  // 2001; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Shrek",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 99,
    attractiveness: null,
    boxOffice: 490,
    imdb: 7.9,
    watchRate: 97,
  },

  // 1995; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Toy Story",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 99,
    attractiveness: null,
    boxOffice: 401,
    imdb: 8.3,
    watchRate: 96,
  },

  // 2003; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Finding Nemo",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 99,
    attractiveness: null,
    boxOffice: 942,
    imdb: 8.2,
    watchRate: 96,
  },

  // 2013; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Frozen",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 99,
    attractiveness: null,
    boxOffice: 1285,
    imdb: 7.4,
    watchRate: 96,
  },

  // 2015; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Inside Out",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 97,
    attractiveness: null,
    boxOffice: 859,
    imdb: 8.1,
    watchRate: 93,
  },

  // 2024; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Inside Out 2",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 1699,
    imdb: 7.5,
    watchRate: 93,
  },

  // 2017; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Coco",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 96,
    attractiveness: null,
    boxOffice: 822,
    imdb: 8.4,
    watchRate: 91,
  },

  // 2008; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "WALL-E",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 96,
    attractiveness: null,
    boxOffice: 527,
    imdb: 8.4,
    watchRate: 90,
  },

  // 2007; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Ratatouille",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 97,
    attractiveness: null,
    boxOffice: 624,
    imdb: 8.1,
    watchRate: 93,
  },

  // 2010; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "How to Train Your Dragon",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 97,
    attractiveness: null,
    boxOffice: 495,
    imdb: 8.1,
    watchRate: 94,
  },

  // 2010; Einspielergebnis in Mio. USD, auf ganze Millionen gerundet.
  {
    name: "Despicable Me",
    category: "filme",
    kills: null,
    height: null,
    age: null,
    strength: 0,
    intelligence: 0,
    fame: 98,
    attractiveness: null,
    boxOffice: 544,
    imdb: 7.6,
    watchRate: 95,
  },

  // TWD-Erweiterung: Hauptserie, Staffeln 1-11
  {
    name: "Lydia",
    category: "the-walking-dead",
    kills: 35, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 163, // [SCHAETZUNG] cm; Staffel 11, vor dem letzten Zeitsprung
    age: 18, // [SERIENWIKI] Staffel 11, vor dem letzten Zeitsprung; https://walkingdead.fandom.com/wiki/Lydia_(TV_Universe)
    strength: 61, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 70, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 83, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 78, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Connie",
    category: "the-walking-dead",
    kills: 25, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 157, // [SCHAETZUNG] cm; Staffel 11
    age: 40, // [SCHAETZUNG] Staffel 11; kein gesicherter exakter Alterswert
    strength: 55, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 87, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 79, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 84, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Magna",
    category: "the-walking-dead",
    kills: 40, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 173, // [SCHAETZUNG] cm; Staffel 11
    age: 35, // [SCHAETZUNG] Staffel 11; kein gesicherter exakter Alterswert
    strength: 76, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 74, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 76, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 86, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Yumiko",
    category: "the-walking-dead",
    kills: 30, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 172, // [SCHAETZUNG] cm; Staffel 11
    age: 40, // [SCHAETZUNG] Staffel 11; kein gesicherter exakter Alterswert
    strength: 66, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 94, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 76, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 83, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Kelly",
    category: "the-walking-dead",
    kills: 20, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 165, // [SCHAETZUNG] cm; Staffel 11
    age: 22, // [SCHAETZUNG] Staffel 11; kein gesicherter exakter Alterswert
    strength: 57, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 72, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 68, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 76, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Luke",
    category: "the-walking-dead",
    kills: 15, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 165, // [SCHAETZUNG] cm; Staffel 11
    age: 40, // [SCHAETZUNG] Staffel 11; kein gesicherter exakter Alterswert
    strength: 45, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 78, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 65, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 63, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Jadis",
    category: "the-walking-dead",
    kills: 35, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 180, // [SCHAETZUNG] cm; Hauptserie, Staffel 9
    age: 40, // [SCHAETZUNG] Hauptserie, Staffel 9; kein gesicherter exakter Alterswert
    strength: 70, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 84, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 72, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Princess",
    category: "the-walking-dead",
    kills: 30, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 160, // [SCHAETZUNG] cm; Staffel 11
    age: 30, // [SCHAETZUNG] Staffel 11; kein gesicherter exakter Alterswert
    strength: 69, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 67, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 80, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 83, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Mercer",
    category: "the-walking-dead",
    kills: 65, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 188, // [SCHAETZUNG] cm; Staffel 11
    age: 40, // [SCHAETZUNG] Staffel 11; kein gesicherter exakter Alterswert
    strength: 94, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 87, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 83, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 88, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Pamela Milton",
    category: "the-walking-dead",
    kills: 2, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 170, // [SCHAETZUNG] cm; Staffel 11
    age: 60, // [SCHAETZUNG] Staffel 11; kein gesicherter exakter Alterswert
    strength: 32, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 87, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 75, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 65, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Lance Hornsby",
    category: "the-walking-dead",
    kills: 12, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 178, // [SCHAETZUNG] cm; Staffel 11
    age: 50, // [SCHAETZUNG] Staffel 11; kein gesicherter exakter Alterswert
    strength: 48, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 92, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 76, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 62, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Sebastian Milton",
    category: "the-walking-dead",
    kills: 1, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 185, // [SCHAETZUNG] cm; Staffel 11
    age: 25, // [SCHAETZUNG] Staffel 11; kein gesicherter exakter Alterswert
    strength: 46, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 38, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 69, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 63, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Max Mercer",
    category: "the-walking-dead",
    kills: 2, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 168, // [SCHAETZUNG] cm; Staffel 11
    age: 30, // [SCHAETZUNG] Staffel 11; kein gesicherter exakter Alterswert
    strength: 35, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 68, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 82, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Alden",
    category: "the-walking-dead",
    kills: 35, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 180, // [SCHAETZUNG] cm; Staffel 11
    age: 28, // [SCHAETZUNG] Staffel 11; kein gesicherter exakter Alterswert
    strength: 72, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 76, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 72, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 86, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Siddiq",
    category: "the-walking-dead",
    kills: 20, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 183, // [SCHAETZUNG] cm; Staffel 10
    age: 30, // [SCHAETZUNG] Staffel 10; kein gesicherter exakter Alterswert
    strength: 61, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 77, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 86, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Gregory",
    category: "the-walking-dead",
    kills: 1, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 183, // [SCHAETZUNG] cm; Staffel 9
    age: 60, // [SCHAETZUNG] Staffel 9; kein gesicherter exakter Alterswert
    strength: 28, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 68, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 76, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 39, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Gareth",
    category: "the-walking-dead",
    kills: 10, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 180, // [SCHAETZUNG] cm; Staffel 5
    age: 28, // [SCHAETZUNG] Staffel 5; kein gesicherter exakter Alterswert
    strength: 62, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 83, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 82, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 72, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Bob Stookey",
    category: "the-walking-dead",
    kills: 15, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 175, // [SCHAETZUNG] cm; Staffel 5
    age: 35, // [SCHAETZUNG] Staffel 5; kein gesicherter exakter Alterswert
    strength: 57, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 75, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 77, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 62, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Noah",
    category: "the-walking-dead",
    kills: 8, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 173, // [SCHAETZUNG] cm; Staffel 5
    age: 17, // [SERIENWIKI] Staffel 5; https://walkingdead.fandom.com/wiki/Noah_(TV_Series)
    strength: 43, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 69, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 78, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Denise Cloyd",
    category: "the-walking-dead",
    kills: 2, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 174, // [SCHAETZUNG] cm; Staffel 6
    age: 30, // [SCHAETZUNG] Staffel 6; kein gesicherter exakter Alterswert
    strength: 31, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 71, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 65, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Sophia Peletier",
    category: "the-walking-dead",
    kills: 0, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 140, // [SCHAETZUNG] cm; Staffel 2, lebende Figur
    age: 12, // [SERIENWIKI] Staffel 2, lebende Figur; https://walkingdead.fandom.com/wiki/Sophia_Peletier_(TV_Series)
    strength: 18, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 47, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 86, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Lizzie Samuels",
    category: "the-walking-dead",
    kills: 5, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 150, // [SCHAETZUNG] cm; Staffel 4
    age: 12, // [SERIENWIKI] Staffel 4; https://walkingdead.fandom.com/wiki/Lizzie_Samuels_(TV_Series)
    strength: 25, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 42, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 83, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Mika Samuels",
    category: "the-walking-dead",
    kills: 3, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 137, // [SCHAETZUNG] cm; Staffel 4
    age: 10, // [SERIENWIKI] Staffel 4; https://walkingdead.fandom.com/wiki/Mika_Samuels_(TV_Series)
    strength: 20, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 61, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 74, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Deanna Monroe",
    category: "the-walking-dead",
    kills: 2, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 160, // [SCHAETZUNG] cm; Staffel 6
    age: 60, // [SCHAETZUNG] Staffel 6; kein gesicherter exakter Alterswert
    strength: 26, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 77, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 54, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Jessie Anderson",
    category: "the-walking-dead",
    kills: 5, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 170, // [SCHAETZUNG] cm; Staffel 6
    age: 30, // [SCHAETZUNG] Staffel 6; kein gesicherter exakter Alterswert
    strength: 42, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 68, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 74, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 87, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Henry",
    category: "the-walking-dead",
    kills: 15, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 173, // [SCHAETZUNG] cm; Staffel 9, jugendliche Figur aus dem Koenigreich
    age: 17, // [SCHAETZUNG] Staffel 9, jugendliche Figur aus dem Koenigreich; kein gesicherter exakter Alterswert
    strength: 53, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 57, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 77, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Leah Shaw",
    category: "the-walking-dead",
    kills: 35, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 173, // [SCHAETZUNG] cm; Staffel 11
    age: 40, // [SCHAETZUNG] Staffel 11; kein gesicherter exakter Alterswert
    strength: 83, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 79, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 71, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 82, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Dawn Lerner",
    category: "the-walking-dead",
    kills: 8, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 168, // [SCHAETZUNG] cm; Staffel 5
    age: 35, // [SCHAETZUNG] Staffel 5; kein gesicherter exakter Alterswert
    strength: 61, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 73, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 76, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Shiva",
    category: "the-walking-dead",
    kills: 15, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 90, // [SCHAETZUNG] cm; Staffel 8; Groesse als Schulterhoehe des Tigers
    age: 10, // [SCHAETZUNG] Staffel 8; Groesse als Schulterhoehe des Tigers; kein gesicherter exakter Alterswert
    strength: 99, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 30, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 88, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 92, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Dog",
    category: "the-walking-dead",
    kills: 3, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 65, // [SCHAETZUNG] cm; Staffel 11; Groesse als Schulterhoehe des Hundes
    age: 7, // [SCHAETZUNG] Staffel 11; Groesse als Schulterhoehe des Hundes; kein gesicherter exakter Alterswert
    strength: 45, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 44, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 82, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 90, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Nicholas",
    category: "the-walking-dead",
    kills: 8, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 183, // [SCHAETZUNG] cm; Staffel 6
    age: 35, // [SCHAETZUNG] Staffel 6; kein gesicherter exakter Alterswert
    strength: 48, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 38, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 72, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 51, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Spencer Monroe",
    category: "the-walking-dead",
    kills: 10, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 190, // [SCHAETZUNG] cm; Staffel 7
    age: 30, // [SCHAETZUNG] Staffel 7; kein gesicherter exakter Alterswert
    strength: 65, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 48, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 73, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 80, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Amy Harrison",
    category: "the-walking-dead",
    kills: 0, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 168, // [SCHAETZUNG] cm; Staffel 1
    age: 24, // [SERIENWIKI] Staffel 1; https://walkingdead.fandom.com/wiki/Amy_Harrison_(TV_Series)
    strength: 25, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 56, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 69, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 82, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Edwin Jenner",
    category: "the-walking-dead",
    kills: 2, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 190, // [SCHAETZUNG] cm; Staffel 1; Wissenschaftler im CDC
    age: 45, // [SCHAETZUNG] Staffel 1; Wissenschaftler im CDC; kein gesicherter exakter Alterswert
    strength: 43, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 97, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 77, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 62, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  {
    name: "Duane Jones",
    category: "the-walking-dead",
    kills: 0, // [SPIEL-SCHAETZUNG] Keine vollstaendige kanonische Kill-Zaehlliste.
    height: 140, // [SCHAETZUNG] cm; Staffel 1, lebende Figur
    age: 10, // [SERIENWIKI] Staffel 1, lebende Figur; https://walkingdead.fandom.com/wiki/Duane_Jones_(TV_Universe)
    strength: 20, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 60, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 70, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },

  // Filmfassung: Ein neues Zeitalter
  {
    name: "Lewis Dodgson",
    category: "jurassic",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 180, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 60, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 42, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 93, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 83, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 58, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Filmfassung: Vergessene Welt
  {
    name: "Peter Ludlow",
    category: "jurassic",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 178, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 43, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 77, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 73, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 56, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Filmfassung: Vergessene Welt
  {
    name: "Dieter Stark",
    category: "jurassic",
    kills: 1, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 189, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 78, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 43, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 70, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 61, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Filmfassung: Das gefallene Koenigreich
  {
    name: "Ken Wheatley",
    category: "jurassic",
    kills: 2, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 180, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 55, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 82, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 65, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 72, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 55, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Filmfassung: Ein neues Zeitalter
  {
    name: "Soyona Santos",
    category: "jurassic",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 171, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 35, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 65, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 87, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 74, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 86, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Filmfassung: Die Wiedergeburt
  {
    name: "Zora Bennett",
    category: "jurassic",
    kills: 5, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 160, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 90, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 87, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Filmfassung: Die Wiedergeburt
  {
    name: "Henry Loomis",
    category: "jurassic",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 180, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 35, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 47, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 97, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 83, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 86, // [SUBJEKTIVE SPIELWERTUNG]
  },
  ]),
  ...defineDealCharacters([
  // Filmfassung: Die Wiedergeburt
  {
    name: "Duncan Kincaid",
    category: "jurassic",
    kills: 6, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 188, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 50, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 88, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 86, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 82, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 84, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Filmfassung: Die Wiedergeburt
  {
    name: "Martin Krebs",
    category: "jurassic",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 191, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 45, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 48, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 82, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 70, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 74, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Filmfassung: Die Wiedergeburt
  {
    name: "Reuben Delgado",
    category: "jurassic",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 189, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 70, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 75, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 73, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 80, // [SUBJEKTIVE SPIELWERTUNG]
  },

  // Biografiedaten: https://www.wikidata.org/wiki/Q13909
  {
    name: "Angelina Jolie",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 169, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 51, // [BERECHNET] Geboren 1975-06-04; Stand 2026-10-16
    strength: 72, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 96, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q40791
  {
    name: "Sandra Bullock",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 171, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 62, // [BERECHNET] Geboren 1964-07-26; Stand 2026-10-16
    strength: 57, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 89, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q40523
  {
    name: "Julia Roberts",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 175, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 58, // [BERECHNET] Geboren 1967-10-28; Stand 2026-10-16
    strength: 50, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 87, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 90, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q32522
  {
    name: "Jennifer Aniston",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 164, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 57, // [BERECHNET] Geboren 1969-02-11; Stand 2026-10-16
    strength: 55, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 86, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q37459
  {
    name: "Nicole Kidman",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 180, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 59, // [BERECHNET] Geboren 1967-06-20; Stand 2026-10-16
    strength: 56, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q80966
  {
    name: "Cate Blanchett",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 174, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 57, // [BERECHNET] Geboren 1969-05-14; Stand 2026-10-16
    strength: 54, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 93, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 92, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q202765
  {
    name: "Kate Winslet",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 168, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 51, // [BERECHNET] Geboren 1975-10-05; Stand 2026-10-16
    strength: 55, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 91, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q873
  {
    name: "Meryl Streep",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 168, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 77, // [BERECHNET] Geboren 1949-06-22; Stand 2026-10-16
    strength: 40, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 97, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 82, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q41351
  {
    name: "Jodie Foster",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 160, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 63, // [BERECHNET] Geboren 1962-11-19; Stand 2026-10-16
    strength: 48, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 96, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 95, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 84, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q102124
  {
    name: "Sigourney Weaver",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 182, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 77, // [BERECHNET] Geboren 1949-10-08; Stand 2026-10-16
    strength: 65, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 97, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 85, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q43044
  {
    name: "Demi Moore",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 165, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 63, // [BERECHNET] Geboren 1962-11-11; Stand 2026-10-16
    strength: 60, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 92, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q44380
  {
    name: "Cameron Diaz",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 175, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 54, // [BERECHNET] Geboren 1972-08-30; Stand 2026-10-16
    strength: 64, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 83, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 97, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q676094
  {
    name: "Drew Barrymore",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 163, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 51, // [BERECHNET] Geboren 1975-02-22; Stand 2026-10-16
    strength: 48, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 84, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 87, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q44063
  {
    name: "Reese Witherspoon",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 156, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 50, // [BERECHNET] Geboren 1976-03-22; Stand 2026-10-16
    strength: 52, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 97, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 91, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q39666
  {
    name: "Penélope Cruz",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 168, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 52, // [BERECHNET] Geboren 1974-04-28; Stand 2026-10-16
    strength: 58, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 97, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 96, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q47664
  {
    name: "Catherine Zeta-Jones",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 170, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 57, // [BERECHNET] Geboren 1969-09-25; Stand 2026-10-16
    strength: 60, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 87, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 96, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q1033016
  {
    name: "Halle Berry",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 165, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 60, // [BERECHNET] Geboren 1966-08-14; Stand 2026-10-16
    strength: 74, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 86, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 97, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 96, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q125017
  {
    name: "Uma Thurman",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 181, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 56, // [BERECHNET] Geboren 1970-04-29; Stand 2026-10-16
    strength: 72, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q101797
  {
    name: "Winona Ryder",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 161, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 54, // [BERECHNET] Geboren 1971-10-29; Stand 2026-10-16
    strength: 45, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 91, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q34460
  {
    name: "Gwyneth Paltrow",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 175, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 54, // [BERECHNET] Geboren 1972-09-27; Stand 2026-10-16
    strength: 53, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 91, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q179414
  {
    name: "Kate Beckinsale",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 170, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 53, // [BERECHNET] Geboren 1973-07-26; Stand 2026-10-16
    strength: 74, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 86, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 93, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 97, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q134077
  {
    name: "Rachel Weisz",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 168, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 56, // [BERECHNET] Geboren 1970-03-07; Stand 2026-10-16
    strength: 54, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 95, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q193517
  {
    name: "Emily Blunt",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 171, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 43, // [BERECHNET] Geboren 1983-02-23; Stand 2026-10-16
    strength: 74, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 95, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q481832
  {
    name: "Amy Adams",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 163, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 52, // [BERECHNET] Geboren 1974-08-20; Stand 2026-10-16
    strength: 55, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q229313
  {
    name: "Jessica Chastain",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 163, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 49, // [BERECHNET] Geboren 1977-03-24; Stand 2026-10-16
    strength: 63, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 93, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q189226
  {
    name: "Amanda Seyfried",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 159, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 40, // [BERECHNET] Geboren 1985-12-03; Stand 2026-10-16
    strength: 49, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 86, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 95, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 96, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q126599
  {
    name: "Kristen Stewart",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 165, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 36, // [BERECHNET] Geboren 1990-04-09; Stand 2026-10-16
    strength: 57, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 87, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 92, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q178882
  {
    name: "Kristen Bell",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 155, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 46, // [BERECHNET] Geboren 1980-07-18; Stand 2026-10-16
    strength: 48, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 94, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 92, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q16738674
  {
    name: "Daisy Ridley",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 170, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 34, // [BERECHNET] Geboren 1992-04-10; Stand 2026-10-16
    strength: 70, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 84, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 95, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q234447
  {
    name: "Felicity Jones",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 160, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 42, // [BERECHNET] Geboren 1983-10-17; Stand 2026-10-16
    strength: 55, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 91, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 92, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q230004
  {
    name: "Rosamund Pike",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 174, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 47, // [BERECHNET] Geboren 1979-01-27; Stand 2026-10-16
    strength: 58, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 93, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 94, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 95, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q42581
  {
    name: "Keira Knightley",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 170, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 41, // [BERECHNET] Geboren 1985-03-26; Stand 2026-10-16
    strength: 58, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 97, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 96, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q191644
  {
    name: "Eva Green",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 170, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 46, // [BERECHNET] Geboren 1980-07-06; Stand 2026-10-16
    strength: 60, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 94, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 97, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q170606
  {
    name: "Eva Mendes",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 168, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 52, // [BERECHNET] Geboren 1974-03-05; Stand 2026-10-16
    strength: 54, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 83, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 93, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 97, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q184219
  {
    name: "Michelle Rodriguez",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 165, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 48, // [BERECHNET] Geboren 1978-07-12; Stand 2026-10-16
    strength: 83, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 79, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 95, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 91, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q214289
  {
    name: "Michelle Yeoh",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 163, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 64, // [BERECHNET] Geboren 1962-08-06; Stand 2026-10-16
    strength: 86, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 97, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 90, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q188375
  {
    name: "Lucy Liu",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 160, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 57, // [BERECHNET] Geboren 1968-12-02; Stand 2026-10-16
    strength: 74, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 95, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q183439
  {
    name: "Nina Dobrev",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 170, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 37, // [BERECHNET] Geboren 1989-01-09; Stand 2026-10-16
    strength: 59, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 84, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 94, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 97, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q231751
  {
    name: "Kat Dennings",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 161, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 40, // [BERECHNET] Geboren 1986-06-13; Stand 2026-10-16
    strength: 44, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 91, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q210547
  {
    name: "Aubrey Plaza",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 168, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 42, // [BERECHNET] Geboren 1984-06-26; Stand 2026-10-16
    strength: 46, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 93, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q16759
  {
    name: "Kaley Cuoco",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 168, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 40, // [BERECHNET] Geboren 1985-11-30; Stand 2026-10-16
    strength: 63, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 83, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 95, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q229048
  {
    name: "Melissa McCarthy",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 157, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 56, // [BERECHNET] Geboren 1970-08-26; Stand 2026-10-16
    strength: 51, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 82, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q67701
  {
    name: "Anna Kendrick",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 157, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 41, // [BERECHNET] Geboren 1985-08-09; Stand 2026-10-16
    strength: 43, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 94, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q231058
  {
    name: "Shailene Woodley",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 173, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 34, // [BERECHNET] Geboren 1991-11-15; Stand 2026-10-16
    strength: 64, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 86, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 92, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q115541
  {
    name: "Dakota Fanning",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 164, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 32, // [BERECHNET] Geboren 1994-02-23; Stand 2026-10-16
    strength: 43, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 93, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 92, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q228943
  {
    name: "Elle Fanning",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 174, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 28, // [BERECHNET] Geboren 1998-04-09; Stand 2026-10-16
    strength: 45, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 87, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 93, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 95, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q25936414
  {
    name: "Millie Bobby Brown",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 163, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 22, // [BERECHNET] Geboren 2004-02-19; Stand 2026-10-16
    strength: 58, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 84, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q27452406
  {
    name: "Sadie Sink",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 160, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 24, // [BERECHNET] Geboren 2002-04-16; Stand 2026-10-16
    strength: 51, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 94, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q46994907
  {
    name: "Maya Hawke",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 174, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 28, // [BERECHNET] Geboren 1998-07-08; Stand 2026-10-16
    strength: 48, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 86, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 92, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q5362676
  {
    name: "Elizabeth Debicki",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 188, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 36, // [BERECHNET] Geboren 1990-08-24; Stand 2026-10-16
    strength: 50, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 92, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 96, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q234959
  {
    name: "Hayley Atwell",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 169, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 44, // [BERECHNET] Geboren 1982-04-05; Stand 2026-10-16
    strength: 72, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 93, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 97, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q231237
  {
    name: "Karen Gillan",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 180, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 38, // [BERECHNET] Geboren 1987-11-28; Stand 2026-10-16
    strength: 74, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 87, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 94, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 95, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q29328
  {
    name: "Brie Larson",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 170, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 37, // [BERECHNET] Geboren 1989-10-01; Stand 2026-10-16
    strength: 79, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q190162
  {
    name: "Zoe Saldaña",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 170, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 48, // [BERECHNET] Geboren 1978-06-19; Stand 2026-10-16
    strength: 77, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 96, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q3840847
  {
    name: "Lupita Nyong'o",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 165, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 43, // [BERECHNET] Geboren 1983-03-01; Stand 2026-10-16
    strength: 63, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 93, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 95, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 95, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q636653
  {
    name: "Danai Gurira",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 170, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 48, // [BERECHNET] Geboren 1978-02-14; Stand 2026-10-16
    strength: 83, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 94, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 91, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q27489535
  {
    name: "Letitia Wright",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 165, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 32, // [BERECHNET] Geboren 1993-10-31; Stand 2026-10-16
    strength: 55, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 93, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 90, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q271500
  {
    name: "Tessa Thompson",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 162, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 43, // [BERECHNET] Geboren 1983-10-03; Stand 2026-10-16
    strength: 69, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 94, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q200355
  {
    name: "Olivia Wilde",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 170, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 42, // [BERECHNET] Geboren 1984-03-10; Stand 2026-10-16
    strength: 58, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 94, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 97, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q15069963
  {
    name: "Olivia Cooke",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 166, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 32, // [BERECHNET] Geboren 1993-12-27; Stand 2026-10-16
    strength: 48, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 87, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 91, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q170428
  {
    name: "Helena Bonham Carter",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 157, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 60, // [BERECHNET] Geboren 1966-05-26; Stand 2026-10-16
    strength: 43, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 94, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 89, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q172653
  {
    name: "Maggie Smith",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 165, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 89, // [BERECHNET] Geboren 1934-12-28; Alter beim Tod am 2024-09-27
    strength: 30, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 96, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 78, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q349391
  {
    name: "Helen Mirren",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 163, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 81, // [BERECHNET] Geboren 1945-07-26; Stand 2026-10-16
    strength: 38, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 95, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 97, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 85, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q106997
  {
    name: "Jamie Lee Curtis",
    category: "schauspielerinnen",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 170, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 67, // [BERECHNET] Geboren 1958-11-22; Stand 2026-10-16
    strength: 57, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 97, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 86, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q37079
  {
    name: "Tom Cruise",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 170, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 64, // [BERECHNET] Geboren 1962-07-03; Stand 2026-10-16
    strength: 87, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q2263
  {
    name: "Tom Hanks",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 183, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 70, // [BERECHNET] Geboren 1956-07-09; Stand 2026-10-16
    strength: 48, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 94, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 81, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q37175
  {
    name: "Johnny Depp",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 178, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 63, // [BERECHNET] Geboren 1963-06-09; Stand 2026-10-16
    strength: 61, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 96, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q165219
  {
    name: "Robert Downey Jr.",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 173, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 61, // [BERECHNET] Geboren 1965-04-04; Stand 2026-10-16
    strength: 67, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 95, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q10738
  {
    name: "Dwayne Johnson",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 196, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 54, // [BERECHNET] Geboren 1972-05-02; Stand 2026-10-16
    strength: 100, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 95, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q40096
  {
    name: "Will Smith",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 188, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 58, // [BERECHNET] Geboren 1968-09-25; Stand 2026-10-16
    strength: 78, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q42101
  {
    name: "Denzel Washington",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 185, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 71, // [BERECHNET] Geboren 1954-12-28; Stand 2026-10-16
    strength: 66, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 94, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 91, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q48337
  {
    name: "Morgan Freeman",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 188, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 89, // [BERECHNET] Geboren 1937-06-01; Stand 2026-10-16
    strength: 33, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 96, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 80, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q172678
  {
    name: "Samuel L. Jackson",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 189, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 77, // [BERECHNET] Geboren 1948-12-21; Stand 2026-10-16
    strength: 48, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 92, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 84, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q81328
  {
    name: "Harrison Ford",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 185, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 84, // [BERECHNET] Geboren 1942-07-13; Stand 2026-10-16
    strength: 51, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 90, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q65932
  {
    name: "Anthony Hopkins",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 174, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 88, // [BERECHNET] Geboren 1937-12-31; Stand 2026-10-16
    strength: 29, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 98, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 78, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q41163
  {
    name: "Al Pacino",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 168, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 86, // [BERECHNET] Geboren 1940-04-25; Stand 2026-10-16
    strength: 33, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 95, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 82, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q36949
  {
    name: "Robert De Niro",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 177, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 83, // [BERECHNET] Geboren 1943-08-17; Stand 2026-10-16
    strength: 42, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 94, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 83, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q45772
  {
    name: "Christian Bale",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 183, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 52, // [BERECHNET] Geboren 1974-01-30; Stand 2026-10-16
    strength: 85, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 94, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q175535
  {
    name: "Matt Damon",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 178, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 56, // [BERECHNET] Geboren 1970-10-08; Stand 2026-10-16
    strength: 77, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 94, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 91, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q483118
  {
    name: "Ben Affleck",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 192, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 54, // [BERECHNET] Geboren 1972-08-15; Stand 2026-10-16
    strength: 86, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q164119
  {
    name: "Mark Wahlberg",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 173, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 55, // [BERECHNET] Geboren 1971-06-05; Stand 2026-10-16
    strength: 92, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 84, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 92, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q205707
  {
    name: "Bradley Cooper",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 185, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 51, // [BERECHNET] Geboren 1975-01-05; Stand 2026-10-16
    strength: 74, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 92, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 97, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q23844
  {
    name: "George Clooney",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 180, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 65, // [BERECHNET] Geboren 1961-05-06; Stand 2026-10-16
    strength: 60, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 93, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 98, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q129817
  {
    name: "Russell Crowe",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 182, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 62, // [BERECHNET] Geboren 1964-04-07; Stand 2026-10-16
    strength: 74, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 88, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q42229
  {
    name: "Mel Gibson",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 177, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 70, // [BERECHNET] Geboren 1956-01-03; Stand 2026-10-16
    strength: 67, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 88, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q2680
  {
    name: "Bruce Willis",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 183, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 71, // [BERECHNET] Geboren 1955-03-19; Stand 2026-10-16
    strength: 62, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 89, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q2685
  {
    name: "Arnold Schwarzenegger",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 188, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 79, // [BERECHNET] Geboren 1947-07-30; Stand 2026-10-16
    strength: 98, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 86, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 90, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q40026
  {
    name: "Sylvester Stallone",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 177, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 80, // [BERECHNET] Geboren 1946-07-06; Stand 2026-10-16
    strength: 94, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 88, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q308840
  {
    name: "Jean-Claude Van Damme",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 177, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 65, // [BERECHNET] Geboren 1960-10-18; Stand 2026-10-16
    strength: 94, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 79, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 97, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 91, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q169963
  {
    name: "Jason Statham",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 178, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 59, // [BERECHNET] Geboren 1967-07-26; Stand 2026-10-16
    strength: 96, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 82, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q178166
  {
    name: "Vin Diesel",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 182, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 59, // [BERECHNET] Geboren 1967-07-18; Stand 2026-10-16
    strength: 95, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 82, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 91, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q36970
  {
    name: "Jackie Chan",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 174, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 72, // [BERECHNET] Geboren 1954-04-07; Stand 2026-10-16
    strength: 95, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 87, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q159577
  {
    name: "Jet Li",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 168, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 63, // [BERECHNET] Geboren 1963-04-26; Stand 2026-10-16
    strength: 92, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 87, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 87, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q43874
  {
    name: "Eddie Murphy",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 175, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 65, // [BERECHNET] Geboren 1961-04-03; Stand 2026-10-16
    strength: 58, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 87, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q40504
  {
    name: "Jim Carrey",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 188, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 64, // [BERECHNET] Geboren 1962-01-17; Stand 2026-10-16
    strength: 56, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 92, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 87, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q132952
  {
    name: "Adam Sandler",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 177, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 60, // [BERECHNET] Geboren 1966-09-09; Stand 2026-10-16
    strength: 57, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 87, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 81, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q47100
  {
    name: "Ben Stiller",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 170, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 60, // [BERECHNET] Geboren 1965-11-30; Stand 2026-10-16
    strength: 54, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 82, // [SUBJEKTIVE SPIELWERTUNG]
  },
  ]),
  ...defineDealCharacters([
  // Biografiedaten: https://www.wikidata.org/wiki/Q483907
  {
    name: "Jack Black",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 168, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 57, // [BERECHNET] Geboren 1969-08-28; Stand 2026-10-16
    strength: 59, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 87, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 82, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q216221
  {
    name: "Steve Carell",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 175, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 64, // [BERECHNET] Geboren 1962-08-16; Stand 2026-10-16
    strength: 44, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 92, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 83, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q23760
  {
    name: "Rowan Atkinson",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 181, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 71, // [BERECHNET] Geboren 1955-01-06; Stand 2026-10-16
    strength: 39, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 97, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 76, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q38119
  {
    name: "Daniel Radcliffe",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 165, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 37, // [BERECHNET] Geboren 1989-07-23; Stand 2026-10-16
    strength: 61, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 88, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q19190
  {
    name: "Rupert Grint",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 173, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 38, // [BERECHNET] Geboren 1988-08-24; Stand 2026-10-16
    strength: 53, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 97, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 85, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q105682
  {
    name: "Tom Felton",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 175, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 39, // [BERECHNET] Geboren 1987-09-22; Stand 2026-10-16
    strength: 54, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 95, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q2023710
  {
    name: "Tom Holland",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 173, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 30, // [BERECHNET] Geboren 1996-06-01; Stand 2026-10-16
    strength: 86, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 86, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 95, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q165524
  {
    name: "Tobey Maguire",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 172, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 51, // [BERECHNET] Geboren 1975-06-27; Stand 2026-10-16
    strength: 67, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 87, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 88, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q188772
  {
    name: "Willem Dafoe",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 175, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 71, // [BERECHNET] Geboren 1955-07-22; Stand 2026-10-16
    strength: 56, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 94, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 81, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q185140
  {
    name: "Joaquin Phoenix",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 173, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 51, // [BERECHNET] Geboren 1974-10-28; Stand 2026-10-16
    strength: 55, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 95, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 89, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q40572
  {
    name: "Heath Ledger",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 185, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 28, // [BERECHNET] Geboren 1979-04-04; Alter beim Tod am 2008-01-22
    strength: 71, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 97, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q83338
  {
    name: "Robin Williams",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 170, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 63, // [BERECHNET] Geboren 1951-07-21; Alter beim Tod am 2014-08-11
    strength: 51, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 97, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 83, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q5066520
  {
    name: "Chadwick Boseman",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 183, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 43, // [BERECHNET] Geboren 1976-11-29; Alter beim Tod am 2020-08-28
    strength: 85, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 92, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 96, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q106481
  {
    name: "Alan Rickman",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 185, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 69, // [BERECHNET] Geboren 1946-02-21; Alter beim Tod am 2016-01-14
    strength: 43, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 96, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 86, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q4573
  {
    name: "Sean Connery",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 189, // [WIKIDATA] Gerundete cm; Datenbankangabe mit Quellenverweis.
    age: 90, // [BERECHNET] Geboren 1930-08-25; Alter beim Tod am 2020-10-31
    strength: 80, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 100, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 97, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q123351
  {
    name: "Michael Caine",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 188, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 93, // [BERECHNET] Geboren 1933-03-14; Stand 2026-10-16
    strength: 30, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 95, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 83, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q83492
  {
    name: "Gary Oldman",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 174, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 68, // [BERECHNET] Geboren 1958-03-21; Stand 2026-10-16
    strength: 48, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 97, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 85, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q28493
  {
    name: "Ralph Fiennes",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 180, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 63, // [BERECHNET] Geboren 1962-12-22; Stand 2026-10-16
    strength: 58, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 95, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 90, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q58444
  {
    name: "Liam Neeson",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 193, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 74, // [BERECHNET] Geboren 1952-06-07; Stand 2026-10-16
    strength: 77, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 91, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q165518
  {
    name: "Ewan McGregor",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 177, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 55, // [BERECHNET] Geboren 1971-03-31; Stand 2026-10-16
    strength: 71, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 95, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q192812
  {
    name: "Hayden Christensen",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 183, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 45, // [BERECHNET] Geboren 1981-04-19; Stand 2026-10-16
    strength: 74, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 96, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q44467
  {
    name: "Orlando Bloom",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 180, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 49, // [BERECHNET] Geboren 1977-01-13; Stand 2026-10-16
    strength: 78, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 98, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q483771
  {
    name: "Elijah Wood",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 168, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 45, // [BERECHNET] Geboren 1981-01-28; Stand 2026-10-16
    strength: 48, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 97, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 89, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q4547
  {
    name: "Daniel Craig",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 178, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 58, // [BERECHNET] Geboren 1968-03-02; Stand 2026-10-16
    strength: 88, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 96, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q81520
  {
    name: "Pierce Brosnan",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 186, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 73, // [BERECHNET] Geboren 1953-05-16; Stand 2026-10-16
    strength: 71, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 99, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 98, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q294647
  {
    name: "Mads Mikkelsen",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 183, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 60, // [BERECHNET] Geboren 1965-11-22; Stand 2026-10-16
    strength: 74, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 93, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 97, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 96, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q23547
  {
    name: "Bryan Cranston",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 180, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 70, // [BERECHNET] Geboren 1956-03-07; Stand 2026-10-16
    strength: 51, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 95, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 98, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 84, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q296843
  {
    name: "Andrew Lincoln",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 178, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 53, // [BERECHNET] Geboren 1973-09-14; Stand 2026-10-16
    strength: 74, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q503545
  {
    name: "Norman Reedus",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 179, // [RICHTWERT] Wikidata-Angabe ohne Quellenverweis; unbestaetigt.
    age: 57, // [BERECHNET] Geboren 1969-01-06; Stand 2026-10-16
    strength: 78, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 84, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG]
  },
  // Biografiedaten: https://www.wikidata.org/wiki/Q342665
  {
    name: "Jeffrey Dean Morgan",
    category: "schauspieler",
    kills: null, // Fuer diese Kategorie nicht anwendbar.
    height: 185, // [SCHAETZUNG] Groessenrichtwert in cm; nicht gesichert.
    age: 60, // [BERECHNET] Geboren 1966-04-22; Stand 2026-10-16
    strength: 79, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 96, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 96, // [SUBJEKTIVE SPIELWERTUNG]
  },

  // Fassung: Rebels
  {
    name: "Zeb Orrelios",
    category: "star-wars",
    kills: 35, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 210, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 88, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 72, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 82, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 70, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Rebels
  {
    name: "Agent Kallus",
    category: "star-wars",
    kills: 25, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 196, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 35, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 76, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 78, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 76, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: The Mandalorian
  {
    name: "Gilad Pellaeon",
    category: "star-wars",
    kills: 10, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 180, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 60, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 46, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 66, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 57, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Rebels
  {
    name: "Gar Saxon",
    category: "star-wars",
    kills: 30, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 190, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 45, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 83, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 76, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 72, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 66, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Rebels
  {
    name: "Ursa Wren",
    category: "star-wars",
    kills: 20, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 170, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 45, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 76, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 69, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 80, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Rebels; Klon, kalendarisches Alter
  {
    name: "Commander Wolffe",
    category: "star-wars",
    kills: 45, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 183, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 28, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 82, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 84, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 78, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Rebels; Klon, kalendarisches Alter
  {
    name: "Captain Gregor",
    category: "star-wars",
    kills: 45, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 183, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 28, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 84, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 72, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 76, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Die Rache der Sith; Klon, kalendarisches Alter
  {
    name: "Commander Gree",
    category: "star-wars",
    kills: 35, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 183, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 13, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 79, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 82, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 70, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: The Clone Wars; Klon, kalendarisches Alter
  {
    name: "Commander Bly",
    category: "star-wars",
    kills: 35, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 183, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 13, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 80, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 79, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 69, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Andor
  {
    name: "Maarva Andor",
    category: "star-wars",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 165, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 73, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 28, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 83, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 72, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 56, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Andor
  {
    name: "Kleya Marki",
    category: "star-wars",
    kills: 8, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 165, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 25, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 63, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 68, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 87, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Andor; Droidenalter als Spielwert
  {
    name: "B2EMO",
    category: "star-wars",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 70, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 30, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 18, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 71, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 76, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 84, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: The Clone Wars; Klon, kalendarisches Alter
  {
    name: "Jesse",
    category: "star-wars",
    kills: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 183, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 13, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 81, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 76, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 73, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: The Bad Batch
  {
    name: "Nala Se",
    category: "star-wars",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 220, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 60, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 25, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 98, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 73, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 46, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Angriff der Klonkrieger
  {
    name: "Lama Su",
    category: "star-wars",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 229, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 70, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 28, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 71, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 40, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Angriff der Klonkrieger
  {
    name: "Taun We",
    category: "star-wars",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 213, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 20, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 84, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 67, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 52, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: The Clone Wars
  {
    name: "Admiral Yularen",
    category: "star-wars",
    kills: 5, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 182, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 56, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 43, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 92, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 72, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 61, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Rogue One
  {
    name: "Admiral Raddus",
    category: "star-wars",
    kills: 5, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 170, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 65, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 52, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 73, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 48, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Die dunkle Bedrohung
  {
    name: "Captain Panaka",
    category: "star-wars",
    kills: 10, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 183, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 73, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 83, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 73, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 78, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Angriff der Klonkrieger
  {
    name: "Captain Typho",
    category: "star-wars",
    kills: 8, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 178, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 35, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 70, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 82, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 65, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 77, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Eine neue Hoffnung
  {
    name: "Beru Lars",
    category: "star-wars",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 165, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 47, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 37, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 72, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 78, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 70, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Die dunkle Bedrohung
  {
    name: "Sio Bibble",
    category: "star-wars",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 178, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 65, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 27, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 82, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 67, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 55, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Die Rueckkehr der Jedi-Ritter
  {
    name: "Bib Fortuna",
    category: "star-wars",
    kills: 2, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 180, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 55, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 40, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 76, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 81, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 28, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Die Rueckkehr der Jedi-Ritter
  {
    name: "Salacious B. Crumb",
    category: "star-wars",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 70, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 20, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 17, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 43, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 76, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 35, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Die Rueckkehr der Jedi-Ritter
  {
    name: "Max Rebo",
    category: "star-wars",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 150, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 28, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 63, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 76, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 65, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Der Aufstieg Skywalkers
  {
    name: "Babu Frik",
    category: "star-wars",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 22, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 85, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 15, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 92, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 81, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 90, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Der Aufstieg Skywalkers
  {
    name: "Zorii Bliss",
    category: "star-wars",
    kills: 12, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 163, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 75, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 83, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 74, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 88, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Der Aufstieg Skywalkers
  {
    name: "Jannah",
    category: "star-wars",
    kills: 10, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 167, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 25, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 70, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 76, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 70, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 84, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Solo
  {
    name: "Qi'ra",
    category: "star-wars",
    kills: 18, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 157, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 31, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 75, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 93, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 83, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Solo
  {
    name: "Tobias Beckett",
    category: "star-wars",
    kills: 35, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 178, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 50, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 79, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 81, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 76, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Solo
  {
    name: "Dryden Vos",
    category: "star-wars",
    kills: 25, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 191, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 45, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 77, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 75, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 79, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Solo; Droidenalter als Spielwert
  {
    name: "L3-37",
    category: "star-wars",
    kills: 6, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 180, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 20, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 62, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 74, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 64, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Solo
  {
    name: "Val",
    category: "star-wars",
    kills: 20, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 160, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 35, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 76, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 80, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 67, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 82, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Solo
  {
    name: "Rio Durant",
    category: "star-wars",
    kills: 10, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 125, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 55, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 80, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 66, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 67, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: The Mandalorian
  {
    name: "Cobb Vanth",
    category: "star-wars",
    kills: 20, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 183, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 45, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 79, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 83, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 82, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 89, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: The Mandalorian
  {
    name: "Peli Motto",
    category: "star-wars",
    kills: 2, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 160, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 50, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 45, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 79, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 61, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: The Mandalorian
  {
    name: "Die Waffenschmiedin",
    category: "star-wars",
    kills: 30, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 170, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 45, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 88, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 84, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 85, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: The Mandalorian
  {
    name: "Paz Vizsla",
    category: "star-wars",
    kills: 50, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 196, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 92, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 71, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 80, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 80, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Andor
  {
    name: "Dedra Meero",
    category: "star-wars",
    kills: 1, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 165, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 35, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 44, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 94, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 77, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 74, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Andor
  {
    name: "Syril Karn",
    category: "star-wars",
    kills: 3, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 180, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 30, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 56, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 76, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 74, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 72, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Andor
  {
    name: "Kino Loy",
    category: "star-wars",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 173, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 50, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 63, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 78, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 60, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Andor
  {
    name: "Bix Caleen",
    category: "star-wars",
    kills: 4, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 170, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 30, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 51, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 77, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Jedi Survivor; kanonisches Spiel
  {
    name: "Cal Kestis",
    category: "star-wars",
    kills: 150, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 183, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 23, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 91, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 84, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 88, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 90, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Jedi Survivor; kanonisches Spiel
  {
    name: "Merrin",
    category: "star-wars",
    kills: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 170, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 23, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 92, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 81, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Jedi Survivor; kanonisches Spiel
  {
    name: "Cere Junda",
    category: "star-wars",
    kills: 80, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 170, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 45, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 95, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 94, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 77, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Jedi Survivor; kanonisches Spiel
  {
    name: "Greez Dritus",
    category: "star-wars",
    kills: 2, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 120, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 50, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 40, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 80, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 73, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 52, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Jedi Survivor; kanonisches Spiel; Droidenalter als Spielwert
  {
    name: "BD-1",
    category: "star-wars",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 43, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 20, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 15, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 91, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 84, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Jedi Fallen Order; kanonisches Spiel
  {
    name: "Trilla Suduri",
    category: "star-wars",
    kills: 35, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 170, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 25, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 91, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 79, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 89, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Thunderbolts
  {
    name: "Sentry",
    category: "marvel",
    kills: 10, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 183, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 35, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 100, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 70, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 85, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 90, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: The Falcon and the Winter Soldier
  {
    name: "U.S. Agent",
    category: "marvel",
    kills: 20, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 188, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 85, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 74, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 83, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 85, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Captain America Brave New World; verwandelte Gestalt
  {
    name: "Red Hulk",
    category: "marvel",
    kills: 15, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 250, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 80, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 99, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 82, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 87, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 52, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Wakanda Forever; mit Ruestung
  {
    name: "Ironheart",
    category: "marvel",
    kills: 5, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 170, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 19, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 89, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 98, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 81, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 85, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Doctor Strange in the Multiverse of Madness
  {
    name: "America Chavez",
    category: "marvel",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 165, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 14, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 92, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 70, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 82, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Thor Ragnarok
  {
    name: "Korg",
    category: "marvel",
    kills: 25, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 239, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 800, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 89, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 60, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 88, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 65, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Spider-Man 2; Raimi-Filme
  {
    name: "Mary Jane Watson",
    category: "marvel",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 170, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 20, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 35, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 76, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 91, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: The Fantastic Four First Steps; kosmische Groesse und Alter als abstrakte Spielwerte
  {
    name: "Galactus",
    category: "marvel",
    kills: 1000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 20000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 1000000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 100, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 98, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 92, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 55, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Guardians of the Galaxy Vol 2; menschliche Erscheinungsform; kosmisches Alter als Spielwert
  {
    name: "Ego",
    category: "marvel",
    kills: 150, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 183, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 1000000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 100, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 95, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 85, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 76, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Guardians of the Galaxy
  {
    name: "Ronan",
    category: "marvel",
    kills: 70, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 196, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 60, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 92, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 77, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 86, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 52, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Thor The Dark World
  {
    name: "Malekith",
    category: "marvel",
    kills: 50, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 183, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 5000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 88, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 83, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 78, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 44, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Thor The Dark World; verwandelte Gestalt
  {
    name: "Kurse",
    category: "marvel",
    kills: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 240, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 5000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 97, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 55, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 73, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 32, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Thor Ragnarok; Riesenform; Groesse und Alter als Spielwerte
  {
    name: "Surtur",
    category: "marvel",
    kills: 150, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 100000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 50000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 100, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 75, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 84, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 45, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Doctor Strange
  {
    name: "Die Älteste",
    category: "marvel",
    kills: 30, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 179, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 500, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 98, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 99, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 86, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 70, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Doctor Strange
  {
    name: "Kaecilius",
    category: "marvel",
    kills: 25, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 183, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 50, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 91, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 89, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 79, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 78, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Doctor Strange; kosmische Gestalt; Groesse und Alter als abstrakte Spielwerte
  {
    name: "Dormammu",
    category: "marvel",
    kills: 1000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 1000000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 1000000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 100, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 96, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 88, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 40, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Doctor Strange; MCU-Fassung
  {
    name: "Baron Mordo",
    category: "marvel",
    kills: 15, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 178, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 45, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 89, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 80, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 84, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Shang-Chi and the Legend of the Ten Rings
  {
    name: "Wenwu",
    category: "marvel",
    kills: 100, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 183, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 1000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 95, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 93, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 84, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 87, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Shang-Chi and the Legend of the Ten Rings
  {
    name: "Xu Xialing",
    category: "marvel",
    kills: 15, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 168, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 28, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 80, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 77, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 91, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Shang-Chi and the Legend of the Ten Rings
  {
    name: "Trevor Slattery",
    category: "marvel",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 173, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 70, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 25, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 68, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 80, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 56, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Shang-Chi and the Legend of the Ten Rings
  {
    name: "Death Dealer",
    category: "marvel",
    kills: 20, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 180, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 82, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 75, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 70, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 76, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Eternals; Alter als Spielwert anhand des Aufenthalts auf der Erde
  {
    name: "Sersi",
    category: "marvel",
    kills: 15, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 175, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 7000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 95, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 82, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  ]),
  ...defineDealCharacters([
  // Fassung: Eternals; Alter als Spielwert anhand des Aufenthalts auf der Erde
  {
    name: "Ikaris",
    category: "marvel",
    kills: 100, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 178, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 7000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 98, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 81, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 84, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 93, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Eternals; Alter als Spielwert anhand des Aufenthalts auf der Erde
  {
    name: "Thena",
    category: "marvel",
    kills: 100, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 169, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 7000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 96, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 86, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 83, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 95, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Eternals; Alter als Spielwert anhand des Aufenthalts auf der Erde
  {
    name: "Kingo",
    category: "marvel",
    kills: 60, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 174, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 7000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 91, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 79, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 77, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 84, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Eternals; Alter als Spielwert anhand des Aufenthalts auf der Erde
  {
    name: "Gilgamesh",
    category: "marvel",
    kills: 90, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 180, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 7000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 98, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 76, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 77, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 79, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Eternals; Alter als Spielwert anhand des Aufenthalts auf der Erde
  {
    name: "Makkari",
    category: "marvel",
    kills: 50, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 157, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 7000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 95, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 84, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 78, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 89, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Eternals; Alter als Spielwert anhand des Aufenthalts auf der Erde
  {
    name: "Druig",
    category: "marvel",
    kills: 20, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 170, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 7000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 94, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 77, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 87, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Eternals; Alter als Spielwert anhand des Aufenthalts auf der Erde
  {
    name: "Phastos",
    category: "marvel",
    kills: 15, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 188, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 7000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 92, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 99, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 77, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 74, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Eternals; Alter als Spielwert anhand des Aufenthalts auf der Erde
  {
    name: "Ajak",
    category: "marvel",
    kills: 20, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 157, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 7000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 89, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 95, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 76, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 90, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Eternals; kosmische Groesse und Alter als abstrakte Spielwerte
  {
    name: "Arishem",
    category: "marvel",
    kills: 1000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 20000000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 1000000, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 100, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 100, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 79, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 40, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: The Avengers
  {
    name: "Maria Hill",
    category: "marvel",
    kills: 15, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 173, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 67, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 92, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 87, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 92, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Agents of SHIELD; menschliche Fassung
  {
    name: "Phil Coulson",
    category: "marvel",
    kills: 30, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 175, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 50, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 71, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 94, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 89, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 78, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Agent Carter; junge erwachsene Fassung
  {
    name: "Peggy Carter",
    category: "marvel",
    kills: 15, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 169, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 30, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 74, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 93, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 89, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 95, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: The Falcon and the Winter Soldier
  {
    name: "Sharon Carter",
    category: "marvel",
    kills: 12, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 173, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 35, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 73, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 88, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 81, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 91, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Avengers Endgame; Rescue-Ruestung
  {
    name: "Pepper Potts",
    category: "marvel",
    kills: 10, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 175, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 48, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 89, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 94, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 90, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 92, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Spider-Man No Way Home
  {
    name: "Happy Hogan",
    category: "marvel",
    kills: 5, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 185, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 50, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 60, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 77, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 87, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 77, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Ant-Man; spaetere Filmfassung
  {
    name: "Hank Pym",
    category: "marvel",
    kills: 15, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 178, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 75, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 69, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 100, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 86, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 74, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Ant-Man and the Wasp; spaetere Filmfassung
  {
    name: "Janet van Dyne",
    category: "marvel",
    kills: 20, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 171, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 70, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 79, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 96, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 83, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 87, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Ant-Man
  {
    name: "Luis",
    category: "marvel",
    kills: 2, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 170, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 40, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 55, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 76, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 83, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Spider-Man No Way Home; Michelle Jones-Watson
  {
    name: "MJ",
    category: "marvel",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 178, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 18, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 35, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 90, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 91, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 92, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Spider-Man No Way Home
  {
    name: "Ned Leeds",
    category: "marvel",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 165, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 18, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 32, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 85, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 85, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 75, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: The Amazing Spider-Man 2; keine Spider-Gwen-Fassung
  {
    name: "Gwen Stacy",
    category: "marvel",
    kills: 0, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 168, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 20, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 37, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 94, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 91, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Daredevil; Netflix-Fassung
  {
    name: "Elektra",
    category: "marvel",
    kills: 45, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 170, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 30, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 85, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 83, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 86, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 94, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },
  // Fassung: Daredevil; Benjamin Poindexter
  {
    name: "Bullseye",
    category: "marvel",
    kills: 50, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    height: 183, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    age: 35, // [SPIEL-SCHAETZUNG] Kein gesicherter exakter Kanonwert.
    strength: 79, // [SUBJEKTIVE SPIELWERTUNG]
    intelligence: 82, // [SUBJEKTIVE SPIELWERTUNG]
    fame: 84, // [SUBJEKTIVE SPIELWERTUNG]
    attractiveness: 80, // [SUBJEKTIVE SPIELWERTUNG] Optik/Charakterdesign.
  },

  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Newt Scamander","category":"harry-potter","kills":0,"height":184,"age":35,"strength":84,"intelligence":96,"fame":91,"attractiveness":86},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Tina Goldstein","category":"harry-potter","kills":0,"height":180,"age":31,"strength":85,"intelligence":90,"fame":85,"attractiveness":87},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Queenie Goldstein","category":"harry-potter","kills":0,"height":168,"age":29,"strength":77,"intelligence":88,"fame":84,"attractiveness":91},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Jacob Kowalski","category":"harry-potter","kills":0,"height":165,"age":32,"strength":29,"intelligence":74,"fame":87,"attractiveness":72},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Gellert Grindelwald","category":"harry-potter","kills":40,"height":183,"age":49,"strength":99,"intelligence":98,"fame":95,"attractiveness":87},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Credence Barebone","category":"harry-potter","kills":5,"height":180,"age":31,"strength":96,"intelligence":66,"fame":86,"attractiveness":65},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Theseus Scamander","category":"harry-potter","kills":5,"height":187,"age":44,"strength":88,"intelligence":88,"fame":79,"attractiveness":87},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Leta Lestrange","category":"harry-potter","kills":1,"height":157,"age":31,"strength":83,"intelligence":87,"fame":80,"attractiveness":89},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Yusuf Kama","category":"harry-potter","kills":2,"height":178,"age":48,"strength":80,"intelligence":85,"fame":72,"attractiveness":73},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Bunty Broadacre","category":"harry-potter","kills":0,"height":160,"age":30,"strength":68,"intelligence":83,"fame":70,"attractiveness":73},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Eulalie Hicks","category":"harry-potter","kills":0,"height":183,"age":35,"strength":88,"intelligence":94,"fame":75,"attractiveness":85},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Seraphina Picquery","category":"harry-potter","kills":0,"height":168,"age":34,"strength":89,"intelligence":92,"fame":76,"attractiveness":85},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Nicolas Flamel","category":"harry-potter","kills":0,"height":175,"age":600,"strength":86,"intelligence":99,"fame":85,"attractiveness":48},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Vinda Rosier","category":"harry-potter","kills":3,"height":165,"age":30,"strength":81,"intelligence":84,"fame":72,"attractiveness":86},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Abernathy","category":"harry-potter","kills":1,"height":178,"age":30,"strength":67,"intelligence":68,"fame":65,"attractiveness":58},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Mary Lou Barebone","category":"harry-potter","kills":0,"height":160,"age":45,"strength":22,"intelligence":53,"fame":66,"attractiveness":36},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Modesty Barebone","category":"harry-potter","kills":0,"height":130,"age":8,"strength":8,"intelligence":64,"fame":57,"attractiveness":65},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Gnarlak","category":"harry-potter","kills":0,"height":115,"age":80,"strength":38,"intelligence":81,"fame":65,"attractiveness":38},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Anton Vogel","category":"harry-potter","kills":0,"height":187,"age":45,"strength":70,"intelligence":86,"fame":64,"attractiveness":63},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Vicência Santos","category":"harry-potter","kills":0,"height":177,"age":40,"strength":78,"intelligence":91,"fame":64,"attractiveness":81},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Helmut","category":"harry-potter","kills":2,"height":185,"age":30,"strength":77,"intelligence":74,"fame":58,"attractiveness":71},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Liu Tao","category":"harry-potter","kills":0,"height":178,"age":50,"strength":74,"intelligence":88,"fame":60,"attractiveness":64},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Teddy (Niffler)","category":"harry-potter","kills":0,"height":35,"age":8,"strength":15,"intelligence":76,"fame":87,"attractiveness":94},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Pickett","category":"harry-potter","kills":0,"height":20,"age":5,"strength":8,"intelligence":73,"fame":84,"attractiveness":87},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Frank (Donnervogel)","category":"harry-potter","kills":0,"height":350,"age":30,"strength":94,"intelligence":65,"fame":77,"attractiveness":94},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Dougal (Demiguise)","category":"harry-potter","kills":0,"height":90,"age":20,"strength":29,"intelligence":86,"fame":69,"attractiveness":85},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Zouwu","category":"harry-potter","kills":0,"height":300,"age":15,"strength":91,"intelligence":55,"fame":71,"attractiveness":95},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Qilin","category":"harry-potter","kills":0,"height":60,"age":0,"strength":12,"intelligence":87,"fame":73,"attractiveness":92},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Erumpent","category":"harry-potter","kills":0,"height":250,"age":20,"strength":90,"intelligence":30,"fame":64,"attractiveness":61},
  // Phantastische Tierwesen: Filmfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Sturzfalter","category":"harry-potter","kills":0,"height":70,"age":5,"strength":71,"intelligence":56,"fame":69,"attractiveness":89},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Rhaenyra Targaryen","category":"game-of-thrones","kills":1,"height":171,"age":35,"strength":53,"intelligence":85,"fame":96,"attractiveness":90},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Daemon Targaryen","category":"game-of-thrones","kills":100,"height":182,"age":49,"strength":89,"intelligence":84,"fame":96,"attractiveness":91},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Alicent Hightower","category":"game-of-thrones","kills":0,"height":166,"age":35,"strength":28,"intelligence":85,"fame":93,"attractiveness":89},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Viserys I Targaryen","category":"game-of-thrones","kills":0,"height":180,"age":52,"strength":32,"intelligence":78,"fame":91,"attractiveness":65},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Otto Hightower","category":"game-of-thrones","kills":0,"height":188,"age":60,"strength":38,"intelligence":95,"fame":90,"attractiveness":63},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Corlys Velaryon","category":"game-of-thrones","kills":40,"height":191,"age":67,"strength":77,"intelligence":92,"fame":90,"attractiveness":78},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Rhaenys Targaryen","category":"game-of-thrones","kills":1,"height":171,"age":55,"strength":56,"intelligence":91,"fame":88,"attractiveness":84},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Criston Cole","category":"game-of-thrones","kills":35,"height":183,"age":43,"strength":93,"intelligence":70,"fame":91,"attractiveness":88},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Aemond Targaryen","category":"game-of-thrones","kills":5,"height":180,"age":18,"strength":85,"intelligence":83,"fame":94,"attractiveness":88},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Aegon II Targaryen","category":"game-of-thrones","kills":3,"height":178,"age":20,"strength":48,"intelligence":58,"fame":92,"attractiveness":72},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Helaena Targaryen","category":"game-of-thrones","kills":0,"height":170,"age":18,"strength":25,"intelligence":87,"fame":85,"attractiveness":83},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Daeron Targaryen","category":"game-of-thrones","kills":5,"height":175,"age":16,"strength":66,"intelligence":78,"fame":75,"attractiveness":80},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Jacaerys Velaryon","category":"game-of-thrones","kills":0,"height":178,"age":16,"strength":61,"intelligence":84,"fame":86,"attractiveness":85},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Lucerys Velaryon","category":"game-of-thrones","kills":0,"height":170,"age":14,"strength":34,"intelligence":72,"fame":82,"attractiveness":78},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Joffrey Velaryon","category":"game-of-thrones","kills":0,"height":140,"age":6,"strength":10,"intelligence":62,"fame":67,"attractiveness":70},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Baela Targaryen","category":"game-of-thrones","kills":1,"height":165,"age":16,"strength":64,"intelligence":81,"fame":83,"attractiveness":87},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Rhaena Targaryen","category":"game-of-thrones","kills":0,"height":168,"age":16,"strength":30,"intelligence":79,"fame":78,"attractiveness":83},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Laenor Velaryon","category":"game-of-thrones","kills":15,"height":185,"age":32,"strength":73,"intelligence":72,"fame":81,"attractiveness":81},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Laena Velaryon","category":"game-of-thrones","kills":0,"height":170,"age":27,"strength":48,"intelligence":79,"fame":80,"attractiveness":84},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Mysaria","category":"game-of-thrones","kills":0,"height":170,"age":35,"strength":33,"intelligence":94,"fame":83,"attractiveness":84},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Larys Strong","category":"game-of-thrones","kills":0,"height":178,"age":36,"strength":18,"intelligence":96,"fame":86,"attractiveness":50},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Harwin Strong","category":"game-of-thrones","kills":10,"height":189,"age":33,"strength":94,"intelligence":72,"fame":83,"attractiveness":86},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Lyonel Strong","category":"game-of-thrones","kills":0,"height":183,"age":55,"strength":55,"intelligence":94,"fame":78,"attractiveness":58},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Vaemond Velaryon","category":"game-of-thrones","kills":5,"height":185,"age":50,"strength":67,"intelligence":68,"fame":73,"attractiveness":66},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Erryk Cargyll","category":"game-of-thrones","kills":10,"height":193,"age":32,"strength":88,"intelligence":78,"fame":75,"attractiveness":78},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Arryk Cargyll","category":"game-of-thrones","kills":10,"height":191,"age":32,"strength":88,"intelligence":77,"fame":75,"attractiveness":78},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Addam of Hull","category":"game-of-thrones","kills":5,"height":185,"age":20,"strength":67,"intelligence":82,"fame":83,"attractiveness":86},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Alyn of Hull","category":"game-of-thrones","kills":10,"height":185,"age":28,"strength":77,"intelligence":85,"fame":80,"attractiveness":84},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Hugh Hammer","category":"game-of-thrones","kills":10,"height":188,"age":40,"strength":95,"intelligence":74,"fame":84,"attractiveness":75},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Ulf White","category":"game-of-thrones","kills":2,"height":180,"age":45,"strength":47,"intelligence":57,"fame":82,"attractiveness":51},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Alys Rivers","category":"game-of-thrones","kills":0,"height":170,"age":40,"strength":43,"intelligence":96,"fame":85,"attractiveness":82},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Simon Strong","category":"game-of-thrones","kills":0,"height":183,"age":65,"strength":27,"intelligence":86,"fame":77,"attractiveness":57},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Orwyle","category":"game-of-thrones","kills":0,"height":180,"age":45,"strength":21,"intelligence":94,"fame":70,"attractiveness":65},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Gerardys","category":"game-of-thrones","kills":0,"height":175,"age":55,"strength":18,"intelligence":94,"fame":65,"attractiveness":48},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Gwayne Hightower","category":"game-of-thrones","kills":15,"height":185,"age":30,"strength":80,"intelligence":78,"fame":78,"attractiveness":83},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Ormund Hightower","category":"game-of-thrones","kills":25,"height":185,"age":40,"strength":76,"intelligence":83,"fame":77,"attractiveness":80},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Roderick Dustin","category":"game-of-thrones","kills":60,"height":185,"age":60,"strength":86,"intelligence":80,"fame":74,"attractiveness":59},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Torrhen Manderly","category":"game-of-thrones","kills":10,"height":170,"age":50,"strength":55,"intelligence":82,"fame":65,"attractiveness":56},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Borros Baratheon","category":"game-of-thrones","kills":10,"height":185,"age":45,"strength":78,"intelligence":58,"fame":74,"attractiveness":53},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Cregan Stark","category":"game-of-thrones","kills":15,"height":185,"age":21,"strength":83,"intelligence":87,"fame":85,"attractiveness":87},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Aemma Arryn","category":"game-of-thrones","kills":0,"height":163,"age":28,"strength":22,"intelligence":78,"fame":74,"attractiveness":83},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Oscar Tully","category":"game-of-thrones","kills":1,"height":172,"age":15,"strength":40,"intelligence":86,"fame":76,"attractiveness":76},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Tyland Lannister","category":"game-of-thrones","kills":0,"height":183,"age":40,"strength":40,"intelligence":91,"fame":78,"attractiveness":72},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Jason Lannister","category":"game-of-thrones","kills":10,"height":183,"age":40,"strength":67,"intelligence":64,"fame":73,"attractiveness":72},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Jeyne Arryn","category":"game-of-thrones","kills":0,"height":165,"age":35,"strength":30,"intelligence":88,"fame":68,"attractiveness":78},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Alfred Broome","category":"game-of-thrones","kills":15,"height":180,"age":50,"strength":76,"intelligence":77,"fame":65,"attractiveness":53},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Mellos","category":"game-of-thrones","kills":0,"height":173,"age":70,"strength":12,"intelligence":87,"fame":67,"attractiveness":40},
  ]),
  ...defineDealCharacters([
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Blut","category":"game-of-thrones","kills":8,"height":190,"age":40,"strength":89,"intelligence":51,"fame":71,"attractiveness":32},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Käse","category":"game-of-thrones","kills":1,"height":175,"age":35,"strength":28,"intelligence":62,"fame":72,"attractiveness":35},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Vhagar","category":"game-of-thrones","kills":1200,"height":2000,"age":182,"strength":100,"intelligence":58,"fame":95,"attractiveness":81},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Caraxes","category":"game-of-thrones","kills":500,"height":1000,"age":70,"strength":95,"intelligence":65,"fame":94,"attractiveness":92},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Syrax","category":"game-of-thrones","kills":50,"height":600,"age":32,"strength":85,"intelligence":58,"fame":90,"attractiveness":91},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Meleys","category":"game-of-thrones","kills":400,"height":1000,"age":90,"strength":95,"intelligence":64,"fame":89,"attractiveness":94},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Sunfyre","category":"game-of-thrones","kills":100,"height":650,"age":22,"strength":88,"intelligence":60,"fame":91,"attractiveness":99},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Seasmoke","category":"game-of-thrones","kills":150,"height":700,"age":35,"strength":88,"intelligence":65,"fame":85,"attractiveness":91},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Vermax","category":"game-of-thrones","kills":20,"height":400,"age":16,"strength":73,"intelligence":55,"fame":81,"attractiveness":84},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Arrax","category":"game-of-thrones","kills":0,"height":300,"age":14,"strength":63,"intelligence":50,"fame":80,"attractiveness":86},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Moondancer","category":"game-of-thrones","kills":20,"height":350,"age":16,"strength":72,"intelligence":59,"fame":82,"attractiveness":91},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Vermithor","category":"game-of-thrones","kills":700,"height":1600,"age":100,"strength":98,"intelligence":61,"fame":91,"attractiveness":88},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Silverwing","category":"game-of-thrones","kills":200,"height":1400,"age":95,"strength":95,"intelligence":64,"fame":87,"attractiveness":95},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Dreamfyre","category":"game-of-thrones","kills":50,"height":1000,"age":100,"strength":91,"intelligence":60,"fame":80,"attractiveness":93},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Tessarion","category":"game-of-thrones","kills":100,"height":600,"age":18,"strength":84,"intelligence":62,"fame":83,"attractiveness":97},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Harrold Westerling","category":"game-of-thrones","kills":20,"height":188,"age":55,"strength":86,"intelligence":83,"fame":77,"attractiveness":70},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Lyman Beesbury","category":"game-of-thrones","kills":0,"height":173,"age":70,"strength":19,"intelligence":84,"fame":69,"attractiveness":43},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Sharako Lohar","category":"game-of-thrones","kills":30,"height":183,"age":35,"strength":81,"intelligence":78,"fame":75,"attractiveness":76},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Alysanne Blackwood","category":"game-of-thrones","kills":12,"height":170,"age":20,"strength":75,"intelligence":82,"fame":74,"attractiveness":80},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Luthor Largent","category":"game-of-thrones","kills":25,"height":185,"age":40,"strength":85,"intelligence":70,"fame":68,"attractiveness":61},
  // House of the Dragon: Serienfassung.
  // Kills/cm/Alter: SPIEL-SCHAETZUNG. Wertungen: subjektiv; Optik = Design.
  {"name":"Sheepstealer","category":"game-of-thrones","kills":100,"height":900,"age":70,"strength":93,"intelligence":52,"fame":80,"attractiveness":63},
  // ELDEN RING: NG-Runen; Kills geschätzt, Ratings subjektiv 0–100.
  // Radagon: 0 separate Runen; Finale zahlt erst bei der Eldenbestie.
  {
    "name": "Malenia",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 5000,
    "height": null,
    "age": null,
    "strength": 98,
    "intelligence": 83,
    "fame": 100,
    "attractiveness": 93,
    "runes": 480000,
    "bossDifficulty": 99,
    "magicPower": 95
  },
  {
    "name": "Radahn",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 6000,
    "height": null,
    "age": null,
    "strength": 99,
    "intelligence": 87,
    "fame": 99,
    "attractiveness": 62,
    "runes": 70000,
    "bossDifficulty": 87,
    "magicPower": 96
  },
  {
    "name": "Maliketh",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 4000,
    "height": null,
    "age": null,
    "strength": 98,
    "intelligence": 85,
    "fame": 95,
    "attractiveness": 48,
    "runes": 220000,
    "bossDifficulty": 96,
    "magicPower": 97
  },
  {
    "name": "Godfrey",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 8000,
    "height": null,
    "age": null,
    "strength": 100,
    "intelligence": 82,
    "fame": 96,
    "attractiveness": 79,
    "runes": 300000,
    "bossDifficulty": 90,
    "magicPower": 35
  },
  {
    "name": "Morgott",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 1800,
    "height": null,
    "age": null,
    "strength": 90,
    "intelligence": 91,
    "fame": 94,
    "attractiveness": 29,
    "runes": 120000,
    "bossDifficulty": 83,
    "magicPower": 88
  },
  {
    "name": "Mohg",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 2200,
    "height": null,
    "age": null,
    "strength": 93,
    "intelligence": 82,
    "fame": 93,
    "attractiveness": 22,
    "runes": 420000,
    "bossDifficulty": 92,
    "magicPower": 94
  },
  {
    "name": "Rykard",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 3500,
    "height": null,
    "age": null,
    "strength": 95,
    "intelligence": 85,
    "fame": 93,
    "attractiveness": 14,
    "runes": 130000,
    "bossDifficulty": 72,
    "magicPower": 89
  },
  {
    "name": "Rennala",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 300,
    "height": null,
    "age": null,
    "strength": 68,
    "intelligence": 97,
    "fame": 96,
    "attractiveness": 87,
    "runes": 40000,
    "bossDifficulty": 54,
    "magicPower": 98
  },
  {
    "name": "Godrick",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 700,
    "height": null,
    "age": null,
    "strength": 78,
    "intelligence": 57,
    "fame": 96,
    "attractiveness": 17,
    "runes": 20000,
    "bossDifficulty": 61,
    "magicPower": 53
  },
  {
    "name": "Radagon",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 4500,
    "height": null,
    "age": null,
    "strength": 97,
    "intelligence": 96,
    "fame": 97,
    "attractiveness": 85,
    "runes": 0,
    "bossDifficulty": 94,
    "magicPower": 99
  },
  {
    "name": "Eldenbestie",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 2000,
    "height": null,
    "age": null,
    "strength": 99,
    "intelligence": 90,
    "fame": 95,
    "attractiveness": 66,
    "runes": 500000,
    "bossDifficulty": 91,
    "magicPower": 100
  },
  {
    "name": "Drachenfürst Placidusax",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 6500,
    "height": null,
    "age": null,
    "strength": 99,
    "intelligence": 91,
    "fame": 91,
    "attractiveness": 35,
    "runes": 280000,
    "bossDifficulty": 93,
    "magicPower": 99
  },
  {
    "name": "Lichdrache Fortissax",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 3000,
    "height": null,
    "age": null,
    "strength": 95,
    "intelligence": 84,
    "fame": 85,
    "attractiveness": 31,
    "runes": 90000,
    "bossDifficulty": 82,
    "magicPower": 96
  },
  {
    "name": "Astel",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 2500,
    "height": null,
    "age": null,
    "strength": 94,
    "intelligence": 76,
    "fame": 89,
    "attractiveness": 19,
    "runes": 80000,
    "bossDifficulty": 85,
    "magicPower": 98
  },
  {
    "name": "Feuerriese",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 2500,
    "height": null,
    "age": null,
    "strength": 98,
    "intelligence": 50,
    "fame": 94,
    "attractiveness": 15,
    "runes": 180000,
    "bossDifficulty": 87,
    "magicPower": 88
  },
  {
    "name": "Loretta",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 700,
    "height": null,
    "age": null,
    "strength": 85,
    "intelligence": 88,
    "fame": 84,
    "attractiveness": 76,
    "runes": 200000,
    "bossDifficulty": 79,
    "magicPower": 89
  },
  {
    "name": "Kommandant Niall",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 1000,
    "height": null,
    "age": null,
    "strength": 87,
    "intelligence": 78,
    "fame": 80,
    "attractiveness": 58,
    "runes": 90000,
    "bossDifficulty": 85,
    "magicPower": 71
  },
  {
    "name": "Elemer von den Dornen",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 800,
    "height": null,
    "age": null,
    "strength": 86,
    "intelligence": 72,
    "fame": 75,
    "attractiveness": 32,
    "runes": 24000,
    "bossDifficulty": 80,
    "magicPower": 76
  },
  {
    "name": "Alecto",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 600,
    "height": null,
    "age": null,
    "strength": 87,
    "intelligence": 87,
    "fame": 77,
    "attractiveness": 54,
    "runes": 80000,
    "bossDifficulty": 89,
    "magicPower": 84
  },
  {
    "name": "Roter Wolf Radagons",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 150,
    "height": null,
    "age": null,
    "strength": 76,
    "intelligence": 59,
    "fame": 86,
    "attractiveness": 49,
    "runes": 14000,
    "bossDifficulty": 57,
    "magicPower": 78
  },
  {
    "name": "Messmer",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 12000,
    "height": null,
    "age": null,
    "strength": 98,
    "intelligence": 90,
    "fame": 97,
    "attractiveness": 84,
    "runes": 400000,
    "bossDifficulty": 96,
    "magicPower": 98
  },
  {
    "name": "Rellana",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 1400,
    "height": null,
    "age": null,
    "strength": 93,
    "intelligence": 94,
    "fame": 90,
    "attractiveness": 86,
    "runes": 240000,
    "bossDifficulty": 95,
    "magicPower": 97
  },
  {
    "name": "Bayle",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 9000,
    "height": null,
    "age": null,
    "strength": 100,
    "intelligence": 77,
    "fame": 93,
    "attractiveness": 18,
    "runes": 490000,
    "bossDifficulty": 98,
    "magicPower": 98
  },
  {
    "name": "Midra",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 1800,
    "height": null,
    "age": null,
    "strength": 96,
    "intelligence": 85,
    "fame": 88,
    "attractiveness": 20,
    "runes": 410000,
    "bossDifficulty": 93,
    "magicPower": 99
  },
  {
    "name": "Romina",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 1200,
    "height": null,
    "age": null,
    "strength": 89,
    "intelligence": 79,
    "fame": 83,
    "attractiveness": 34,
    "runes": 380000,
    "bossDifficulty": 84,
    "magicPower": 90
  },
  {
    "name": "Metyr",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 1000,
    "height": null,
    "age": null,
    "strength": 96,
    "intelligence": 92,
    "fame": 84,
    "attractiveness": 10,
    "runes": 420000,
    "bossDifficulty": 88,
    "magicPower": 99
  },
  {
    "name": "Kommandant Gaius",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 1600,
    "height": null,
    "age": null,
    "strength": 92,
    "intelligence": 76,
    "fame": 81,
    "attractiveness": 41,
    "runes": 230000,
    "bossDifficulty": 91,
    "magicPower": 85
  },
  {
    "name": "Fäulnisritter",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 500,
    "height": null,
    "age": null,
    "strength": 89,
    "intelligence": 47,
    "fame": 79,
    "attractiveness": 12,
    "runes": 220000,
    "bossDifficulty": 87,
    "magicPower": 87
  },
  {
    "name": "Göttliche Bestie Tanzender Löwe",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 1100,
    "height": null,
    "age": null,
    "strength": 91,
    "intelligence": 71,
    "fame": 89,
    "attractiveness": 46,
    "runes": 120000,
    "bossDifficulty": 88,
    "magicPower": 92
  },
  {
    "name": "Avatar des Scadubaums",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 350,
    "height": null,
    "age": null,
    "strength": 94,
    "intelligence": 40,
    "fame": 81,
    "attractiveness": 27,
    "runes": 260000,
    "bossDifficulty": 86,
    "magicPower": 94
  },
  {
    "name": "Gideon Ofnir",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 180,
    "height": null,
    "age": null,
    "strength": 73,
    "intelligence": 99,
    "fame": 91,
    "attractiveness": 50,
    "runes": 150000,
    "bossDifficulty": 65,
    "magicPower": 95
  },
  {
    "name": "Ranni",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 10,
    "height": null,
    "age": null,
    "strength": 80,
    "intelligence": 99,
    "fame": 100,
    "attractiveness": 96,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 99
  },
  {
    "name": "Melina",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 100,
    "height": null,
    "age": null,
    "strength": 84,
    "intelligence": 94,
    "fame": 99,
    "attractiveness": 95,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 94
  },
  {
    "name": "Marika",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 9000,
    "height": null,
    "age": null,
    "strength": 99,
    "intelligence": 98,
    "fame": 97,
    "attractiveness": 95,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 100
  },
  {
    "name": "Miquella",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 5,
    "height": null,
    "age": null,
    "strength": 72,
    "intelligence": 100,
    "fame": 94,
    "attractiveness": 85,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 100
  },
  {
    "name": "Godwyn",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 2600,
    "height": null,
    "age": null,
    "strength": 96,
    "intelligence": 90,
    "fame": 88,
    "attractiveness": 87,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 95
  },
  {
    "name": "Alexander",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 250,
    "height": null,
    "age": null,
    "strength": 84,
    "intelligence": 65,
    "fame": 96,
    "attractiveness": 52,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 18
  },
  {
    "name": "Blaidd",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 450,
    "height": null,
    "age": null,
    "strength": 90,
    "intelligence": 78,
    "fame": 96,
    "attractiveness": 78,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 28
  },
  {
    "name": "Millicent",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 180,
    "height": null,
    "age": null,
    "strength": 86,
    "intelligence": 82,
    "fame": 93,
    "attractiveness": 93,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 55
  },
  {
    "name": "Fia",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 8,
    "height": null,
    "age": null,
    "strength": 38,
    "intelligence": 90,
    "fame": 90,
    "attractiveness": 91,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 86
  },
  {
    "name": "Dungfresser",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 130,
    "height": null,
    "age": null,
    "strength": 81,
    "intelligence": 69,
    "fame": 89,
    "attractiveness": 5,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 60
  },
  {
    "name": "Sellen",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 45,
    "height": null,
    "age": null,
    "strength": 49,
    "intelligence": 97,
    "fame": 88,
    "attractiveness": 87,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 94
  },
  {
    "name": "Rogier",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 85,
    "height": null,
    "age": null,
    "strength": 64,
    "intelligence": 91,
    "fame": 84,
    "attractiveness": 80,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 85
  },
  {
    "name": "Iji",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 300,
    "height": null,
    "age": null,
    "strength": 89,
    "intelligence": 92,
    "fame": 83,
    "attractiveness": 39,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 58
  },
  {
    "name": "Varré",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 90,
    "height": null,
    "age": null,
    "strength": 68,
    "intelligence": 86,
    "fame": 90,
    "attractiveness": 51,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 74
  },
  {
    "name": "Nepheli Loux",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 220,
    "height": null,
    "age": null,
    "strength": 87,
    "intelligence": 76,
    "fame": 87,
    "attractiveness": 87,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 40
  },
  {
    "name": "Roderika",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 0,
    "height": null,
    "age": null,
    "strength": 19,
    "intelligence": 83,
    "fame": 88,
    "attractiveness": 88,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 68
  },
  {
    "name": "Hewg",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 90,
    "height": null,
    "age": null,
    "strength": 80,
    "intelligence": 88,
    "fame": 90,
    "attractiveness": 20,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 35
  },
  {
    "name": "Patches",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 35,
    "height": null,
    "age": null,
    "strength": 59,
    "intelligence": 91,
    "fame": 96,
    "attractiveness": 43,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 12
  },
  {
    "name": "Igon",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 350,
    "height": null,
    "age": null,
    "strength": 79,
    "intelligence": 73,
    "fame": 91,
    "attractiveness": 35,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 32
  },
  // ELDEN RING: Ergänzung auf 75. Kills geschätzt, Ratings subjektiv.
  // Bossprofile: Baumwächter in Limgrave; Adliger im Tempel von Eiglay;
  // Tränennachahmer in Nokron; Drachenbaumwächter vor Leyndell.
  {
    "name": "Baumwächter",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 350,
    "height": null,
    "age": null,
    "strength": 84,
    "intelligence": 68,
    "fame": 95,
    "attractiveness": 57,
    "runes": 3200,
    "bossDifficulty": 72,
    "magicPower": 52
  },
  {
    "name": "Bluthundritter Darriwil",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 180,
    "height": null,
    "age": null,
    "strength": 79,
    "intelligence": 62,
    "fame": 85,
    "attractiveness": 38,
    "runes": 1900,
    "bossDifficulty": 63,
    "magicPower": 12
  },
  {
    "name": "Fliegender Drache Agheel",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 500,
    "height": null,
    "age": null,
    "strength": 88,
    "intelligence": 45,
    "fame": 87,
    "attractiveness": 39,
    "runes": 5000,
    "bossDifficulty": 65,
    "magicPower": 76
  },
  {
    "name": "Adliger der Götterskalpe",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 850,
    "height": null,
    "age": null,
    "strength": 87,
    "intelligence": 78,
    "fame": 88,
    "attractiveness": 9,
    "runes": 50000,
    "bossDifficulty": 84,
    "magicPower": 88
  },
  {
    "name": "Tränennachahmer",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 20,
    "height": null,
    "age": null,
    "strength": 80,
    "intelligence": 70,
    "fame": 96,
    "attractiveness": 50,
    "runes": 10000,
    "bossDifficulty": 50,
    "magicPower": 82
  },
  {
    "name": "Drachenbaumwächter",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 700,
    "height": null,
    "age": null,
    "strength": 90,
    "intelligence": 73,
    "fame": 87,
    "attractiveness": 49,
    "runes": 50000,
    "bossDifficulty": 86,
    "magicPower": 82
  },
  {
    "name": "Kommandant O’Neil",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 900,
    "height": null,
    "age": null,
    "strength": 82,
    "intelligence": 76,
    "fame": 81,
    "attractiveness": 43,
    "runes": 12000,
    "bossDifficulty": 73,
    "magicPower": 66
  },
  {
    "name": "Uralter Drache Lansseax",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 2800,
    "height": null,
    "age": null,
    "strength": 94,
    "intelligence": 85,
    "fame": 83,
    "attractiveness": 45,
    "runes": 60000,
    "bossDifficulty": 80,
    "magicPower": 94
  },
  {
    "name": "Uralter Drache Senessax",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 3200,
    "height": null,
    "age": null,
    "strength": 96,
    "intelligence": 79,
    "fame": 78,
    "attractiveness": 30,
    "runes": 200000,
    "bossDifficulty": 89,
    "magicPower": 96
  },
  {
    "name": "Ritter des einsamen Kerkers",
    "category": "elden-ring",
    "isBoss": true,
    "kills": 650,
    "height": null,
    "age": null,
    "strength": 88,
    "intelligence": 72,
    "fame": 84,
    "attractiveness": 59,
    "runes": 70000,
    "bossDifficulty": 86,
    "magicPower": 5
  },
  {
    "name": "Miriel",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 0,
    "height": null,
    "age": null,
    "strength": 35,
    "intelligence": 98,
    "fame": 96,
    "attractiveness": 60,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 92
  },
  {
    "name": "Boc",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 0,
    "height": null,
    "age": null,
    "strength": 16,
    "intelligence": 73,
    "fame": 87,
    "attractiveness": 38,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 4
  },
  {
    "name": "Goldmaske",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 0,
    "height": null,
    "age": null,
    "strength": 20,
    "intelligence": 100,
    "fame": 88,
    "attractiveness": 41,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 86
  },
  {
    "name": "Bruder Corhyn",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 10,
    "height": null,
    "age": null,
    "strength": 35,
    "intelligence": 82,
    "fame": 83,
    "attractiveness": 40,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 75
  },
  {
    "name": "Rya",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 0,
    "height": null,
    "age": null,
    "strength": 30,
    "intelligence": 77,
    "fame": 88,
    "attractiveness": 83,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 38
  },
  {
    "name": "Tanith",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 12,
    "height": null,
    "age": null,
    "strength": 45,
    "intelligence": 91,
    "fame": 87,
    "attractiveness": 82,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 49
  },
  {
    "name": "Yura",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 280,
    "height": null,
    "age": null,
    "strength": 84,
    "intelligence": 83,
    "fame": 88,
    "attractiveness": 73,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 24
  },
  {
    "name": "Shabriri",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 1600,
    "height": null,
    "age": null,
    "strength": 68,
    "intelligence": 95,
    "fame": 84,
    "attractiveness": 33,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 96
  },
  {
    "name": "Bernahl",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 900,
    "height": null,
    "age": null,
    "strength": 89,
    "intelligence": 84,
    "fame": 85,
    "attractiveness": 62,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 78
  },
  {
    "name": "Sir Ansbach",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 1300,
    "height": null,
    "age": null,
    "strength": 89,
    "intelligence": 95,
    "fame": 92,
    "attractiveness": 71,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 83
  },
  {
    "name": "Nadelritterin Leda",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 700,
    "height": null,
    "age": null,
    "strength": 88,
    "intelligence": 87,
    "fame": 91,
    "attractiveness": 86,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 84
  },
  {
    "name": "Thiollier",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 30,
    "height": null,
    "age": null,
    "strength": 55,
    "intelligence": 86,
    "fame": 86,
    "attractiveness": 78,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 70
  },
  {
    "name": "Rotmähne Freyja",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 1100,
    "height": null,
    "age": null,
    "strength": 92,
    "intelligence": 73,
    "fame": 85,
    "attractiveness": 81,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 30
  },
  {
    "name": "Moore",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 15,
    "height": null,
    "age": null,
    "strength": 76,
    "intelligence": 58,
    "fame": 87,
    "attractiveness": 43,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 22
  },
  {
    "name": "Heilige Trina",
    "category": "elden-ring",
    "isBoss": false,
    "kills": 0,
    "height": null,
    "age": null,
    "strength": 25,
    "intelligence": 97,
    "fame": 90,
    "attractiveness": 78,
    "runes": null,
    "bossDifficulty": null,
    "magicPower": 99
  },

  ]),

  // RESIDENT EVIL: Menschen und humanoide Gegner.
  // Kills und 0–100-Ratings sind kuratierte Spielwerte.
  ...defineDealCharacters([
  // Referenz: RE4 (2004); Alter: Profil; Größe: Profil
{
  "name": "Leon S. Kennedy",
  "category": "resident-evil",
  "kills": 700,
  "height": 180,
  "age": 27,
  "strength": 85,
  "intelligence": 89,
  "fame": 100,
  "attractiveness": 94
},
  // Referenz: RE5 (2009); Alter: Guide-Profil; Größe: Guide-Profil
{
  "name": "Chris Redfield",
  "category": "resident-evil",
  "kills": 600,
  "height": 185,
  "age": 35,
  "strength": 91,
  "intelligence": 84,
  "fame": 99,
  "attractiveness": 90
},
  // Referenz: RE3 (1998); Alter: Profil; Größe: Profil
{
  "name": "Jill Valentine",
  "category": "resident-evil",
  "kills": 350,
  "height": 166,
  "age": 23,
  "strength": 80,
  "intelligence": 91,
  "fame": 99,
  "attractiveness": 95
},
  // Referenz: RE2 (1998); Alter: Profil; Größe: Profil
{
  "name": "Claire Redfield",
  "category": "resident-evil",
  "kills": 250,
  "height": 169,
  "age": 19,
  "strength": 74,
  "intelligence": 85,
  "fame": 96,
  "attractiveness": 92
},
  // Referenz: RE4 (2004); Alter und Größe: Schätzung/Spielwert
{
  "name": "Ada Wong",
  "category": "resident-evil",
  "kills": 300,
  "height": 170,
  "age": 30,
  "strength": 82,
  "intelligence": 96,
  "fame": 98,
  "attractiveness": 97
},
  // Referenz: RE5 (2009), infizierte menschliche Form; Alter und Größe: Guide-Profil
{
  "name": "Albert Wesker",
  "category": "resident-evil",
  "kills": 900,
  "height": 190,
  "age": 48,
  "strength": 97,
  "intelligence": 98,
  "fame": 99,
  "attractiveness": 89
},
  // Referenz: RE0 (1998); Alter: Profil; Größe: Profil
{
  "name": "Rebecca Chambers",
  "category": "resident-evil",
  "kills": 90,
  "height": 161,
  "age": 18,
  "strength": 55,
  "intelligence": 95,
  "fame": 88,
  "attractiveness": 88
},
  // Referenz: Revelations 2 (2011); Alter und Größe: Schätzung/Spielwert
{
  "name": "Barry Burton",
  "category": "resident-evil",
  "kills": 300,
  "height": 186,
  "age": 51,
  "strength": 83,
  "intelligence": 82,
  "fame": 88,
  "attractiveness": 77
},
  // Referenz: RE6 (2013), erwachsene Agentin; Alter und Größe: Schätzung/Spielwert
{
  "name": "Sherry Birkin",
  "category": "resident-evil",
  "kills": 200,
  "height": 165,
  "age": 26,
  "strength": 74,
  "intelligence": 86,
  "fame": 91,
  "attractiveness": 89
},
  // Referenz: RE3 Remake (1998); Alter und Größe: Schätzung/Spielwert
{
  "name": "Carlos Oliveira",
  "category": "resident-evil",
  "kills": 200,
  "height": 182,
  "age": 21,
  "strength": 82,
  "intelligence": 82,
  "fame": 91,
  "attractiveness": 91
},
  // Referenz: RE0 (1998); Alter: Profil; Größe: Profil
{
  "name": "Billy Coen",
  "category": "resident-evil",
  "kills": 150,
  "height": 181,
  "age": 26,
  "strength": 84,
  "intelligence": 78,
  "fame": 84,
  "attractiveness": 87
},
  // Referenz: RE2, Einsatzprofil; Alter und Größe: Schätzung/Spielwert
{
  "name": "HUNK",
  "category": "resident-evil",
  "kills": 400,
  "height": 185,
  "age": 35,
  "strength": 88,
  "intelligence": 91,
  "fame": 94,
  "attractiveness": 80
},
  // Referenz: Village (2021); Alter und Größe: Schätzung/Spielwert
{
  "name": "Ethan Winters",
  "category": "resident-evil",
  "kills": 300,
  "height": 180,
  "age": 36,
  "strength": 79,
  "intelligence": 80,
  "fame": 96,
  "attractiveness": 84
},
  // Referenz: Village (2021), menschliche Erscheinung; Alter und Größe: Schätzung/Spielwert
{
  "name": "Mia Winters",
  "category": "resident-evil",
  "kills": 30,
  "height": 170,
  "age": 36,
  "strength": 61,
  "intelligence": 83,
  "fame": 89,
  "attractiveness": 87
},
  // Referenz: Shadows of Rose (2037), Jugendliche; Alter und Größe: Schätzung/Spielwert
{
  "name": "Rosemary Winters",
  "category": "resident-evil",
  "kills": 50,
  "height": 165,
  "age": 16,
  "strength": 96,
  "intelligence": 80,
  "fame": 85,
  "attractiveness": null,
  "attractivenessNotApplicable": true
},
  // Referenz: RE5 (2009); Alter und Größe: Guide-Profil
{
  "name": "Sheva Alomar",
  "category": "resident-evil",
  "kills": 450,
  "height": 165,
  "age": 23,
  "strength": 79,
  "intelligence": 86,
  "fame": 90,
  "attractiveness": 94
},
  // Referenz: RE5 (2009); Alter und Größe: Guide-Profil
{
  "name": "Josh Stone",
  "category": "resident-evil",
  "kills": 150,
  "height": 185,
  "age": 35,
  "strength": 85,
  "intelligence": 83,
  "fame": 72,
  "attractiveness": 83
},
  // Referenz: RE6 (2013); Alter: Profil; Größe: Schätzung/Spielwert
{
  "name": "Helena Harper",
  "category": "resident-evil",
  "kills": 250,
  "height": 170,
  "age": 24,
  "strength": 80,
  "intelligence": 82,
  "fame": 78,
  "attractiveness": 89
},
  // Referenz: RE6 (2013), vor Mutation; Alter: Profil; Größe: Schätzung/Spielwert
{
  "name": "Piers Nivans",
  "category": "resident-evil",
  "kills": 250,
  "height": 178,
  "age": 26,
  "strength": 82,
  "intelligence": 85,
  "fame": 79,
  "attractiveness": 88
},
  // Referenz: RE6 (2013); Alter: Profil; Größe: Schätzung/Spielwert
{
  "name": "Jake Muller",
  "category": "resident-evil",
  "kills": 300,
  "height": 190,
  "age": 20,
  "strength": 90,
  "intelligence": 78,
  "fame": 84,
  "attractiveness": 89
},
  // Referenz: RE4 (2004); Alter: Profil; Größe: Schätzung/Spielwert
{
  "name": "Ashley Graham",
  "category": "resident-evil",
  "kills": 0,
  "height": 167,
  "age": 20,
  "strength": 29,
  "intelligence": 76,
  "fame": 96,
  "attractiveness": 92
},
  // Referenz: RE4 (2004); Alter: Profil; Größe: Schätzung/Spielwert
{
  "name": "Luis Serra",
  "category": "resident-evil",
  "kills": 30,
  "height": 185,
  "age": 28,
  "strength": 62,
  "intelligence": 95,
  "fame": 90,
  "attractiveness": 91
},
  // Referenz: RE4 (2004); Alter: Profil; Größe: Schätzung/Spielwert
{
  "name": "Ingrid Hunnigan",
  "category": "resident-evil",
  "kills": 0,
  "height": 170,
  "age": 24,
  "strength": 35,
  "intelligence": 96,
  "fame": 80,
  "attractiveness": 88
},
  // Referenz: RE2 (1998), vor Verwandlung; Alter und Größe: Schätzung/Spielwert
{
  "name": "Marvin Branagh",
  "category": "resident-evil",
  "kills": 15,
  "height": 185,
  "age": 43,
  "strength": 64,
  "intelligence": 79,
  "fame": 83,
  "attractiveness": 73
},
  // Referenz: RE2 (1998); Alter: Profil; Größe: Schätzung/Spielwert
{
  "name": "Robert Kendo",
  "category": "resident-evil",
  "kills": 5,
  "height": 178,
  "age": 40,
  "strength": 59,
  "intelligence": 77,
  "fame": 75,
  "attractiveness": 70
},
  // Referenz: RE3 (1998), vor Verwandlung; Alter: Profil; Größe: Profil
{
  "name": "Brad Vickers",
  "category": "resident-evil",
  "kills": 5,
  "height": 174,
  "age": 35,
  "strength": 46,
  "intelligence": 68,
  "fame": 76,
  "attractiveness": 65
},
  // Referenz: RE3 (1998); Alter: Profil; Größe: Profil
{
  "name": "Nicholai Ginovaef",
  "category": "resident-evil",
  "kills": 60,
  "height": 187,
  "age": 35,
  "strength": 78,
  "intelligence": 90,
  "fame": 80,
  "attractiveness": 74
},
  // Referenz: Code: Veronica (1998), vor Mutation; Alter: Profil; Größe: Profil
{
  "name": "Steve Burnside",
  "category": "resident-evil",
  "kills": 90,
  "height": 173,
  "age": 17,
  "strength": 61,
  "intelligence": 62,
  "fame": 79,
  "attractiveness": null,
  "attractivenessNotApplicable": true
},
  // Referenz: Revelations 2 (2011); Alter und Größe: Schätzung/Spielwert
{
  "name": "Moira Burton",
  "category": "resident-evil",
  "kills": 35,
  "height": 165,
  "age": 20,
  "strength": 56,
  "intelligence": 73,
  "fame": 77,
  "attractiveness": 84
},
  // Referenz: Revelations 2 (2011), Kind; Alter und Größe: Schätzung/Spielwert
{
  "name": "Natalia Korda",
  "category": "resident-evil",
  "kills": 0,
  "height": 130,
  "age": 10,
  "strength": 19,
  "intelligence": 89,
  "fame": 75,
  "attractiveness": null,
  "attractivenessNotApplicable": true
},
  // Referenz: Revelations 2 (2011), vor Mutation; Alter und Größe: Schätzung/Spielwert
{
  "name": "Alex Wesker",
  "category": "resident-evil",
  "kills": 150,
  "height": 177,
  "age": 51,
  "strength": 72,
  "intelligence": 98,
  "fame": 80,
  "attractiveness": 76
},
  // Referenz: Code: Veronica (1998), humanoide Form; Alter: Profil; Größe: Profil
{
  "name": "Alexia Ashford",
  "category": "resident-evil",
  "kills": 80,
  "height": 175,
  "age": 27,
  "strength": 95,
  "intelligence": 99,
  "fame": 83,
  "attractiveness": 88
},
  // Referenz: Code: Veronica (1998); Alter: Profil; Größe: Profil
{
  "name": "Alfred Ashford",
  "category": "resident-evil",
  "kills": 15,
  "height": 176,
  "age": 27,
  "strength": 49,
  "intelligence": 81,
  "fame": 77,
  "attractiveness": 65
},
  // Referenz: RE2 (1998); Größe der menschlichen Form; Alter: Profil; Größe: Profil
{
  "name": "William Birkin",
  "category": "resident-evil",
  "kills": 40,
  "height": 178,
  "age": 36,
  "strength": 96,
  "intelligence": 99,
  "fame": 92,
  "attractiveness": 60
},
  // Referenz: RE2 (1998); Alter und Größe: Schätzung/Spielwert
{
  "name": "Annette Birkin",
  "category": "resident-evil",
  "kills": 5,
  "height": 165,
  "age": 36,
  "strength": 40,
  "intelligence": 96,
  "fame": 83,
  "attractiveness": 76
},
  // Referenz: RE5-Rückblende (2006); Alter: Guide-Näherung; Größe: Guide-Profil
{
  "name": "Oswell E. Spencer",
  "category": "resident-evil",
  "kills": 10,
  "height": 179.4,
  "age": 75,
  "strength": 12,
  "intelligence": 98,
  "fame": 81,
  "attractiveness": 25
},
  // Referenz: RE5 (2009), vor Mutation; Alter: Guide-Altersspanne, Spielwert; Größe: Guide-Profil
{
  "name": "Excella Gionne",
  "category": "resident-evil",
  "kills": 5,
  "height": 175.1,
  "age": 26,
  "strength": 42,
  "intelligence": 91,
  "fame": 75,
  "attractiveness": 93
},
  // Referenz: RE6 (2013), menschliche Erscheinung; Alter und Größe: Schätzung/Spielwert
{
  "name": "Carla Radames",
  "category": "resident-evil",
  "kills": 80,
  "height": 170,
  "age": 38,
  "strength": 82,
  "intelligence": 97,
  "fame": 72,
  "attractiveness": 87
},
  // Referenz: RE6 (2013); Größe der menschlichen Form; Alter: Profil; Größe: Schätzung/Spielwert
{
  "name": "Derek C. Simmons",
  "category": "resident-evil",
  "kills": 100,
  "height": 185,
  "age": 46,
  "strength": 95,
  "intelligence": 91,
  "fame": 77,
  "attractiveness": 66
},
  // Referenz: Requiem (2026); Alter und Größe: Schätzung/Spielwert
{
  "name": "Grace Ashcroft",
  "category": "resident-evil",
  "kills": 50,
  "height": 170,
  "age": 25,
  "strength": 42,
  "intelligence": 92,
  "fame": 91,
  "attractiveness": 87
},
  // Referenz: Outbreak (1998); Alter und Größe: Schätzung/Spielwert
{
  "name": "Alyssa Ashcroft",
  "category": "resident-evil",
  "kills": 20,
  "height": 176,
  "age": 34,
  "strength": 49,
  "intelligence": 89,
  "fame": 76,
  "attractiveness": 82
},
  // Referenz: RE3, humanoide Form; Alter als Einsatz-Spielwert; Größe: Schätzung/Spielwert
{
  "name": "Nemesis",
  "category": "resident-evil",
  "kills": 50,
  "height": 221,
  "age": 1,
  "strength": 99,
  "intelligence": 45,
  "fame": 99,
  "attractiveness": 5
},
  // Referenz: RE2 Remake, humanoide Form; Alter als Einsatz-Spielwert; Größe: Schätzung/Spielwert
{
  "name": "Mr. X",
  "category": "resident-evil",
  "kills": 30,
  "height": 230,
  "age": 1,
  "strength": 96,
  "intelligence": 28,
  "fame": 97,
  "attractiveness": 8
},
  // Referenz: RE4 (2004), menschliche Erscheinung; Alter und Größe: Schätzung/Spielwert
{
  "name": "Jack Krauser",
  "category": "resident-evil",
  "kills": 150,
  "height": 186,
  "age": 34,
  "strength": 89,
  "intelligence": 86,
  "fame": 91,
  "attractiveness": 82
},
  // Referenz: RE4 (2004), menschliche Erscheinung; Alter und Größe: Schätzung/Spielwert
{
  "name": "Osmund Saddler",
  "category": "resident-evil",
  "kills": 70,
  "height": 180,
  "age": 54,
  "strength": 95,
  "intelligence": 92,
  "fame": 88,
  "attractiveness": 35
},
  // Referenz: RE4 (2004), menschliche Erscheinung; Alter: Profil; Größe: Schätzung/Spielwert
{
  "name": "Ramón Salazar",
  "category": "resident-evil",
  "kills": 30,
  "height": 123,
  "age": 20,
  "strength": 82,
  "intelligence": 80,
  "fame": 89,
  "attractiveness": 20
},
  // Referenz: RE4 (2004), menschliche Erscheinung; Alter und Größe: Schätzung/Spielwert
{
  "name": "Bitores Méndez",
  "category": "resident-evil",
  "kills": 30,
  "height": 207,
  "age": 47,
  "strength": 93,
  "intelligence": 68,
  "fame": 87,
  "attractiveness": 30
},
  // Referenz: Village (2021); Größe einschließlich Hut und Schuhen; Alter und Größe: Schätzung/Spielwert
{
  "name": "Lady Dimitrescu",
  "category": "resident-evil",
  "kills": 150,
  "height": 290,
  "age": 107,
  "strength": 94,
  "intelligence": 87,
  "fame": 99,
  "attractiveness": 94
},
  // Referenz: Village (2021), menschliche Erscheinung; Alter und Größe: Schätzung/Spielwert
{
  "name": "Karl Heisenberg",
  "category": "resident-evil",
  "kills": 100,
  "height": 185,
  "age": 90,
  "strength": 96,
  "intelligence": 93,
  "fame": 91,
  "attractiveness": 85
},
  // Referenz: Village (2021), menschliche Erscheinung; Alter und Größe: Schätzung/Spielwert
{
  "name": "Mutter Miranda",
  "category": "resident-evil",
  "kills": 1000,
  "height": 175,
  "age": 125,
  "strength": 100,
  "intelligence": 99,
  "fame": 92,
  "attractiveness": 85
},
  // Referenz: Village (2021), menschliche Erscheinung; Alter und Größe: Schätzung/Spielwert
{
  "name": "Donna Beneviento",
  "category": "resident-evil",
  "kills": 20,
  "height": 175,
  "age": 25,
  "strength": 65,
  "intelligence": 89,
  "fame": 90,
  "attractiveness": 78
},
  // Referenz: RE7 (2017), humanoide Form; Alter und Größe: Schätzung/Spielwert
{
  "name": "Jack Baker",
  "category": "resident-evil",
  "kills": 40,
  "height": 190,
  "age": 55,
  "strength": 95,
  "intelligence": 66,
  "fame": 95,
  "attractiveness": 35
},
  // Referenz: RE7 (2017), menschliche Erscheinung; Alter und Größe: Schätzung/Spielwert
{
  "name": "Marguerite Baker",
  "category": "resident-evil",
  "kills": 20,
  "height": 175,
  "age": 52,
  "strength": 82,
  "intelligence": 64,
  "fame": 87,
  "attractiveness": 25
},
  // Referenz: RE7 (2017), vor Mutation; Alter und Größe: Schätzung/Spielwert
{
  "name": "Lucas Baker",
  "category": "resident-evil",
  "kills": 20,
  "height": 180,
  "age": 26,
  "strength": 58,
  "intelligence": 94,
  "fame": 87,
  "attractiveness": 50
},
  // Referenz: RE7 (2017), Kindergestalt; Alter seit Erschaffung als Spielwert; Größe: Schätzung/Spielwert
{
  "name": "Eveline",
  "category": "resident-evil",
  "kills": 50,
  "height": 120,
  "age": 3,
  "strength": 98,
  "intelligence": 83,
  "fame": 88,
  "attractiveness": null,
  "attractivenessNotApplicable": true
},
  // Referenz: RE7 (2017); Alter und Größe: Schätzung/Spielwert
{
  "name": "Zoe Baker",
  "category": "resident-evil",
  "kills": 5,
  "height": 170,
  "age": 23,
  "strength": 42,
  "intelligence": 85,
  "fame": 82,
  "attractiveness": 83
},
  // Referenz: Village; Alter und Größe: Schätzung/Spielwert
{
  "name": "Der Duke",
  "category": "resident-evil",
  "kills": 0,
  "height": 210,
  "age": 55,
  "strength": 55,
  "intelligence": 97,
  "fame": 93,
  "attractiveness": 45
},
  // Referenz: RE4; Alter und Größe: Schätzung/Spielwert
{
  "name": "Händler aus RE4",
  "category": "resident-evil",
  "kills": 0,
  "height": 185,
  "age": 45,
  "strength": 52,
  "intelligence": 94,
  "fame": 96,
  "attractiveness": 55
},
  // Referenz: Requiem; Alter und Größe: Schätzung/Spielwert
{
  "name": "Victor Gideon",
  "category": "resident-evil",
  "kills": 60,
  "height": 190,
  "age": 60,
  "strength": 91,
  "intelligence": 96,
  "fame": 83,
  "attractiveness": 40
},
  // Referenz: Requiem; Alter und Größe: Schätzung/Spielwert
{
  "name": "Emily",
  "category": "resident-evil",
  "kills": 0,
  "height": 130,
  "age": 10,
  "strength": 15,
  "intelligence": 70,
  "fame": 78,
  "attractiveness": null,
  "attractivenessNotApplicable": true
}
  ]),

  // ANIMATIONSFILME: Dragons, Shrek, Kater, Ice Age 1–5.
  ...defineDealCharacters([
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Hicks",
  "category": "animationsfilme",
  "kills": 15,
  "height": 185,
  "age": 21,
  "strength": 58,
  "intelligence": 96,
  "fame": 96,
  "attractiveness": 88
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Ohnezahn",
  "category": "animationsfilme",
  "kills": 100,
  "height": 175,
  "age": 21,
  "strength": 94,
  "intelligence": 90,
  "fame": 100,
  "attractiveness": 95
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Astrid",
  "category": "animationsfilme",
  "kills": 12,
  "height": 175,
  "age": 21,
  "strength": 77,
  "intelligence": 88,
  "fame": 94,
  "attractiveness": 94
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Sturmpfeil",
  "category": "animationsfilme",
  "kills": 35,
  "height": 180,
  "age": 20,
  "strength": 81,
  "intelligence": 72,
  "fame": 85,
  "attractiveness": 84
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Rotzbakke",
  "category": "animationsfilme",
  "kills": 5,
  "height": 180,
  "age": 22,
  "strength": 72,
  "intelligence": 53,
  "fame": 82,
  "attractiveness": 72
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Hakenzahn",
  "category": "animationsfilme",
  "kills": 40,
  "height": 220,
  "age": 24,
  "strength": 87,
  "intelligence": 58,
  "fame": 83,
  "attractiveness": 74
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Fischbein",
  "category": "animationsfilme",
  "kills": 2,
  "height": 185,
  "age": 22,
  "strength": 65,
  "intelligence": 94,
  "fame": 83,
  "attractiveness": 68
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Fleischklops",
  "category": "animationsfilme",
  "kills": 15,
  "height": 140,
  "age": 24,
  "strength": 79,
  "intelligence": 65,
  "fame": 82,
  "attractiveness": 85
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Raffnuss",
  "category": "animationsfilme",
  "kills": 4,
  "height": 175,
  "age": 21,
  "strength": 61,
  "intelligence": 58,
  "fame": 81,
  "attractiveness": 76
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Taffnuss",
  "category": "animationsfilme",
  "kills": 4,
  "height": 185,
  "age": 21,
  "strength": 62,
  "intelligence": 54,
  "fame": 81,
  "attractiveness": 67
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Kotz und Würg",
  "category": "animationsfilme",
  "kills": 35,
  "height": 230,
  "age": 24,
  "strength": 85,
  "intelligence": 62,
  "fame": 83,
  "attractiveness": 72
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Haudrauf",
  "category": "animationsfilme",
  "kills": 80,
  "height": 205,
  "age": 50,
  "strength": 92,
  "intelligence": 78,
  "fame": 90,
  "attractiveness": 74
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Grobian",
  "category": "animationsfilme",
  "kills": 35,
  "height": 190,
  "age": 55,
  "strength": 79,
  "intelligence": 85,
  "fame": 87,
  "attractiveness": 60
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Valka",
  "category": "animationsfilme",
  "kills": 20,
  "height": 180,
  "age": 42,
  "strength": 71,
  "intelligence": 93,
  "fame": 88,
  "attractiveness": 87
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Wolkenspringer",
  "category": "animationsfilme",
  "kills": 65,
  "height": 450,
  "age": 70,
  "strength": 95,
  "intelligence": 82,
  "fame": 83,
  "attractiveness": 86
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Schädelbrecher",
  "category": "animationsfilme",
  "kills": 45,
  "height": 240,
  "age": 35,
  "strength": 91,
  "intelligence": 72,
  "fame": 76,
  "attractiveness": 71
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Tagschatten",
  "category": "animationsfilme",
  "kills": 35,
  "height": 170,
  "age": 21,
  "strength": 90,
  "intelligence": 87,
  "fame": 91,
  "attractiveness": 98
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Eret",
  "category": "animationsfilme",
  "kills": 15,
  "height": 190,
  "age": 25,
  "strength": 83,
  "intelligence": 76,
  "fame": 78,
  "attractiveness": 88
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Drago",
  "category": "animationsfilme",
  "kills": 150,
  "height": 200,
  "age": 55,
  "strength": 90,
  "intelligence": 84,
  "fame": 83,
  "attractiveness": 39
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Grimmel",
  "category": "animationsfilme",
  "kills": 100,
  "height": 185,
  "age": 60,
  "strength": 67,
  "intelligence": 96,
  "fame": 82,
  "attractiveness": 36
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Roter Tod",
  "category": "animationsfilme",
  "kills": 500,
  "height": 9000,
  "age": 500,
  "strength": 100,
  "intelligence": 54,
  "fame": 85,
  "attractiveness": 24
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Dragos Bewilderbeast",
  "category": "animationsfilme",
  "kills": 300,
  "height": 4500,
  "age": 200,
  "strength": 100,
  "intelligence": 67,
  "fame": 80,
  "attractiveness": 44
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Dagur",
  "category": "animationsfilme",
  "kills": 35,
  "height": 190,
  "age": 26,
  "strength": 86,
  "intelligence": 72,
  "fame": 72,
  "attractiveness": 75
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Heather",
  "category": "animationsfilme",
  "kills": 12,
  "height": 175,
  "age": 21,
  "strength": 78,
  "intelligence": 88,
  "fame": 70,
  "attractiveness": 90
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Viggo",
  "category": "animationsfilme",
  "kills": 40,
  "height": 190,
  "age": 45,
  "strength": 74,
  "intelligence": 98,
  "fame": 68,
  "attractiveness": 69
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Shrek",
  "category": "animationsfilme",
  "kills": 15,
  "height": 220,
  "age": 35,
  "strength": 94,
  "intelligence": 76,
  "fame": 100,
  "attractiveness": 73
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Fiona",
  "category": "animationsfilme",
  "kills": 5,
  "height": 200,
  "age": 30,
  "strength": 88,
  "intelligence": 88,
  "fame": 98,
  "attractiveness": 91
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Esel",
  "category": "animationsfilme",
  "kills": 0,
  "height": 130,
  "age": 25,
  "strength": 38,
  "intelligence": 65,
  "fame": 99,
  "attractiveness": 83
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Drachendame",
  "category": "animationsfilme",
  "kills": 20,
  "height": 1500,
  "age": 150,
  "strength": 98,
  "intelligence": 75,
  "fame": 92,
  "attractiveness": 82
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Der gestiefelte Kater",
  "category": "animationsfilme",
  "kills": 40,
  "height": 65,
  "age": 12,
  "strength": 72,
  "intelligence": 89,
  "fame": 100,
  "attractiveness": 96
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Lord Farquaad",
  "category": "animationsfilme",
  "kills": 10,
  "height": 140,
  "age": 45,
  "strength": 29,
  "intelligence": 82,
  "fame": 94,
  "attractiveness": 31
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Prinz Charming",
  "category": "animationsfilme",
  "kills": 2,
  "height": 185,
  "age": 30,
  "strength": 62,
  "intelligence": 61,
  "fame": 92,
  "attractiveness": 92
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Gute Fee",
  "category": "animationsfilme",
  "kills": 8,
  "height": 170,
  "age": 60,
  "strength": 93,
  "intelligence": 95,
  "fame": 94,
  "attractiveness": 67
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "König Harold",
  "category": "animationsfilme",
  "kills": 2,
  "height": 175,
  "age": 65,
  "strength": 42,
  "intelligence": 86,
  "fame": 86,
  "attractiveness": 61
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Königin Lillian",
  "category": "animationsfilme",
  "kills": 0,
  "height": 170,
  "age": 60,
  "strength": 61,
  "intelligence": 85,
  "fame": 85,
  "attractiveness": 78
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Artie",
  "category": "animationsfilme",
  "kills": 0,
  "height": 175,
  "age": 16,
  "strength": 35,
  "intelligence": 78,
  "fame": 77,
  "attractiveness": null,
  "attractivenessNotApplicable": true
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Rumpelstilzchen",
  "category": "animationsfilme",
  "kills": 3,
  "height": 130,
  "age": 45,
  "strength": 88,
  "intelligence": 91,
  "fame": 88,
  "attractiveness": 26
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Lebkuchenmann",
  "category": "animationsfilme",
  "kills": 0,
  "height": 20,
  "age": 10,
  "strength": 22,
  "intelligence": 82,
  "fame": 95,
  "attractiveness": 87
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Pinocchio",
  "category": "animationsfilme",
  "kills": 0,
  "height": 110,
  "age": 10,
  "strength": 27,
  "intelligence": 67,
  "fame": 94,
  "attractiveness": null,
  "attractivenessNotApplicable": true
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Großer böser Wolf",
  "category": "animationsfilme",
  "kills": 1,
  "height": 190,
  "age": 45,
  "strength": 69,
  "intelligence": 72,
  "fame": 86,
  "attractiveness": 59
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Doris",
  "category": "animationsfilme",
  "kills": 0,
  "height": 190,
  "age": 40,
  "strength": 72,
  "intelligence": 77,
  "fame": 77,
  "attractiveness": 64
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Mabel",
  "category": "animationsfilme",
  "kills": 0,
  "height": 185,
  "age": 42,
  "strength": 67,
  "intelligence": 71,
  "fame": 65,
  "attractiveness": 56
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Merlin",
  "category": "animationsfilme",
  "kills": 0,
  "height": 170,
  "age": 85,
  "strength": 89,
  "intelligence": 86,
  "fame": 78,
  "attractiveness": 40
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Mongo",
  "category": "animationsfilme",
  "kills": 0,
  "height": 2000,
  "age": 1,
  "strength": 99,
  "intelligence": 31,
  "fame": 82,
  "attractiveness": 78
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Kitty Samtpfote",
  "category": "animationsfilme",
  "kills": 15,
  "height": 60,
  "age": 10,
  "strength": 70,
  "intelligence": 93,
  "fame": 92,
  "attractiveness": 97
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Perrito",
  "category": "animationsfilme",
  "kills": 0,
  "height": 35,
  "age": 3,
  "strength": 18,
  "intelligence": 76,
  "fame": 94,
  "attractiveness": 98
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Tod",
  "category": "animationsfilme",
  "kills": 1000,
  "height": 190,
  "age": 1000,
  "strength": 100,
  "intelligence": 98,
  "fame": 98,
  "attractiveness": 81
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Goldi",
  "category": "animationsfilme",
  "kills": 2,
  "height": 170,
  "age": 20,
  "strength": 64,
  "intelligence": 80,
  "fame": 85,
  "attractiveness": 89
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Papa Bär",
  "category": "animationsfilme",
  "kills": 5,
  "height": 280,
  "age": 45,
  "strength": 94,
  "intelligence": 67,
  "fame": 81,
  "attractiveness": 66
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Mama Bär",
  "category": "animationsfilme",
  "kills": 3,
  "height": 250,
  "age": 42,
  "strength": 89,
  "intelligence": 87,
  "fame": 82,
  "attractiveness": 77
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Baby Bär",
  "category": "animationsfilme",
  "kills": 1,
  "height": 220,
  "age": 18,
  "strength": 84,
  "intelligence": 58,
  "fame": 82,
  "attractiveness": 80
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Humpty Alexander Dumpty",
  "category": "animationsfilme",
  "kills": 0,
  "height": 85,
  "age": 25,
  "strength": 35,
  "intelligence": 95,
  "fame": 87,
  "attractiveness": 45
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Jack",
  "category": "animationsfilme",
  "kills": 8,
  "height": 205,
  "age": 45,
  "strength": 83,
  "intelligence": 58,
  "fame": 73,
  "attractiveness": 30
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Jill",
  "category": "animationsfilme",
  "kills": 8,
  "height": 195,
  "age": 42,
  "strength": 85,
  "intelligence": 64,
  "fame": 73,
  "attractiveness": 34
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Großer Jack Horner",
  "category": "animationsfilme",
  "kills": 30,
  "height": 220,
  "age": 40,
  "strength": 91,
  "intelligence": 78,
  "fame": 92,
  "attractiveness": 28
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Mama Luna",
  "category": "animationsfilme",
  "kills": 0,
  "height": 155,
  "age": 70,
  "strength": 27,
  "intelligence": 72,
  "fame": 76,
  "attractiveness": 60
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Manni",
  "category": "animationsfilme",
  "kills": 12,
  "height": 340,
  "age": 30,
  "strength": 97,
  "intelligence": 85,
  "fame": 100,
  "attractiveness": 83
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Sid",
  "category": "animationsfilme",
  "kills": 0,
  "height": 150,
  "age": 25,
  "strength": 32,
  "intelligence": 44,
  "fame": 100,
  "attractiveness": 75
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Diego",
  "category": "animationsfilme",
  "kills": 150,
  "height": 120,
  "age": 25,
  "strength": 89,
  "intelligence": 88,
  "fame": 99,
  "attractiveness": 92
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Scrat",
  "category": "animationsfilme",
  "kills": 0,
  "height": 50,
  "age": 15,
  "strength": 43,
  "intelligence": 49,
  "fame": 100,
  "attractiveness": 93
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Ellie",
  "category": "animationsfilme",
  "kills": 3,
  "height": 310,
  "age": 28,
  "strength": 93,
  "intelligence": 86,
  "fame": 93,
  "attractiveness": 89
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Crash",
  "category": "animationsfilme",
  "kills": 0,
  "height": 45,
  "age": 20,
  "strength": 28,
  "intelligence": 46,
  "fame": 89,
  "attractiveness": 78
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Eddie",
  "category": "animationsfilme",
  "kills": 0,
  "height": 45,
  "age": 20,
  "strength": 28,
  "intelligence": 45,
  "fame": 89,
  "attractiveness": 78
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Peaches",
  "category": "animationsfilme",
  "kills": 0,
  "height": 280,
  "age": 18,
  "strength": 81,
  "intelligence": 76,
  "fame": 86,
  "attractiveness": 88
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Buck",
  "category": "animationsfilme",
  "kills": 35,
  "height": 65,
  "age": 30,
  "strength": 72,
  "intelligence": 91,
  "fame": 95,
  "attractiveness": 86
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Scratte",
  "category": "animationsfilme",
  "kills": 0,
  "height": 50,
  "age": 14,
  "strength": 38,
  "intelligence": 83,
  "fame": 85,
  "attractiveness": 95
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Shira",
  "category": "animationsfilme",
  "kills": 80,
  "height": 110,
  "age": 24,
  "strength": 86,
  "intelligence": 87,
  "fame": 85,
  "attractiveness": 94
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Granny",
  "category": "animationsfilme",
  "kills": 0,
  "height": 130,
  "age": 80,
  "strength": 35,
  "intelligence": 74,
  "fame": 88,
  "attractiveness": 53
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Captain Gutt",
  "category": "animationsfilme",
  "kills": 25,
  "height": 200,
  "age": 40,
  "strength": 89,
  "intelligence": 85,
  "fame": 87,
  "attractiveness": 42
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Flynn",
  "category": "animationsfilme",
  "kills": 5,
  "height": 180,
  "age": 25,
  "strength": 83,
  "intelligence": 47,
  "fame": 75,
  "attractiveness": 67
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Silas",
  "category": "animationsfilme",
  "kills": 2,
  "height": 90,
  "age": 20,
  "strength": 36,
  "intelligence": 73,
  "fame": 64,
  "attractiveness": 51
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Squint",
  "category": "animationsfilme",
  "kills": 3,
  "height": 45,
  "age": 25,
  "strength": 40,
  "intelligence": 63,
  "fame": 71,
  "attractiveness": 44
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Louis",
  "category": "animationsfilme",
  "kills": 0,
  "height": 30,
  "age": 18,
  "strength": 17,
  "intelligence": 80,
  "fame": 70,
  "attractiveness": 82
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Julian",
  "category": "animationsfilme",
  "kills": 0,
  "height": 320,
  "age": 20,
  "strength": 87,
  "intelligence": 68,
  "fame": 75,
  "attractiveness": 84
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Francine",
  "category": "animationsfilme",
  "kills": 0,
  "height": 145,
  "age": 25,
  "strength": 29,
  "intelligence": 76,
  "fame": 65,
  "attractiveness": 86
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Shangri Llama",
  "category": "animationsfilme",
  "kills": 0,
  "height": 190,
  "age": 50,
  "strength": 44,
  "intelligence": 81,
  "fame": 74,
  "attractiveness": 79
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Soto",
  "category": "animationsfilme",
  "kills": 100,
  "height": 125,
  "age": 30,
  "strength": 91,
  "intelligence": 88,
  "fame": 86,
  "attractiveness": 68
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Zeke",
  "category": "animationsfilme",
  "kills": 60,
  "height": 100,
  "age": 20,
  "strength": 75,
  "intelligence": 43,
  "fame": 70,
  "attractiveness": 39
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Lenny",
  "category": "animationsfilme",
  "kills": 70,
  "height": 115,
  "age": 25,
  "strength": 83,
  "intelligence": 59,
  "fame": 66,
  "attractiveness": 50
},
  // Animationsfassung; saemtliche Zahlen sind geschaetzte Spielwerte.
{
  "name": "Oscar",
  "category": "animationsfilme",
  "kills": 75,
  "height": 110,
  "age": 25,
  "strength": 80,
  "intelligence": 72,
  "fame": 66,
  "attractiveness": 55
}
  ]),
];
