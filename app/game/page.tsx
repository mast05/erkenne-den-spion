"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import { dealCharacters } from "../lib/dealData";

type Role = {
  type: "character" | "imposter";
  character?: string;
  tip?: string;
};

type Player = {
  id: string;
  name: string;
  is_host: boolean;
};

type Result = {
  winner: "players" | "imposter";
  votedPlayerName: string;
  votes: {
    voterName: string;
    votedPlayerName: string;
  }[];
};

type Round = {
  id: string;
  secret_word: string;
  spy_player_id: string;
  status: string;
  category: string;
};

const categoryNames: Record<string, string> = {
  "star-wars": "⭐ Star Wars",
  marvel: "🦸 Marvel",
  "harry-potter": "🪄 Harry Potter",
  dc: "🦇 DC",
  "fluch-der-karibik": "🏴‍☠️ Fluch der Karibik",
  "game-of-thrones": "⚔️ Game of Thrones",

  "herr-der-ringe": "💍 Herr der Ringe",
  hobbit: "🏔️ Der Hobbit",
  "the-boys": "🩸 The Boys",
  "the-walking-dead": "🧟 The Walking Dead",
  jurassic: "🦖 Jurassic Park / World",
};

const characterTips: Record<string, string[]> = {
    // =========================
// STAR WARS
// =========================

"Ahsoka Tano": [
  "Schlanke Statur",
  "Auffälliger Kopf",
  "Leichte Kleidung",
],

"Anakin Skywalker": [
  "Athletisch gebaut",
  "Dunkle Kleidung",
  "Menschlich",
],

"Boba Fett": [
  "Gepanzert",
  "Verdecktes Gesicht",
  "Viel Ausrüstung",
],

"C-3PO": [
  "Schlanke Statur",
  "Glänzende Oberfläche",
  "Steife Haltung",
],

"Chewbacca": [
  "Sehr groß",
  "Stark behaart",
  "Breite Statur",
],

"Count Dooku": [
  "Älter",
  "Elegante Kleidung",
  "Schlanke Statur",
],

"Darth Vader": [
  "Sehr groß",
  "Dunkle Rüstung",
  "Verdecktes Gesicht",
],

"Finn": [
  "Athletisch gebaut",
  "Praktische Kleidung",
  "Menschlich",
],

"General Grievous": [
  "Sehr groß",
  "Technischer Körper",
  "Schmale Statur",
],

"Grogu": [
  "Sehr klein",
  "Lockere Kleidung",
  "Auffälliger Kopf",
],

"Han Solo": [
  "Lässige Kleidung",
  "Menschlich",
  "Schlanke Statur",
],

"Jabba the Hutt": [
  "Sehr breit",
  "Ungewöhnlicher Körper",
  "Kaum Kleidung",
],

"Kylo Ren": [
  "Groß",
  "Dunkle Kleidung",
  "Verdecktes Gesicht",
],

"Lando Calrissian": [
  "Gepflegt",
  "Elegante Kleidung",
  "Menschlich",
],

"Leia Organa": [
  "Kleine Statur",
  "Gepflegte Kleidung",
  "Auffällige Frisur",
],

"Luke Skywalker": [
  "Schlanke Statur",
  "Einfache Kleidung",
  "Menschlich",
],

"Mace Windu": [
  "Kräftig gebaut",
  "Schlichte Kleidung",
  "Kahler Kopf",
],

"Mandalorian": [
  "Gepanzert",
  "Verdecktes Gesicht",
  "Robuste Kleidung",
],

"Obi-Wan Kenobi": [
  "Mittlere Statur",
  "Lockere Kleidung",
  "Gepflegt",
],

"Padmé Amidala": [
  "Schlanke Statur",
  "Aufwendige Kleidung",
  "Gepflegt",
],

"Palpatine": [
  "Sehr alt",
  "Dunkle Kleidung",
  "Blasses Gesicht",
],

"Qui-Gon Jinn": [
  "Sehr groß",
  "Lockere Kleidung",
  "Lange Haare",
],

"R2-D2": [
  "Sehr klein",
  "Kompakte Form",
  "Technisch",
],

"Rey": [
  "Schlanke Statur",
  "Helle Kleidung",
  "Praktisch gekleidet",
],

"Yoda": [
  "Sehr klein",
  "Sehr alt",
  "Auffällige Ohren",
],

"Darth Maul": [
  "Athletisch gebaut",
  "Dunkle Kleidung",
  "Auffälliges Gesicht",
],

"Jango Fett": [
  "Gepanzert",
  "Verdecktes Gesicht",
  "Athletisch gebaut",
],

"Cad Bane": [
  "Sehr schlank",
  "Dunkle Kleidung",
  "Auffälliger Kopf",
],

"Bo-Katan Kryze": [
  "Athletisch gebaut",
  "Teilweise gepanzert",
  "Praktische Kleidung",
],

"Poe Dameron": [
  "Schlanke Statur",
  "Praktische Kleidung",
  "Sportlich",
],

"Captain Phasma": [
  "Sehr groß",
  "Helle Rüstung",
  "Verdecktes Gesicht",
],

"Grand Moff Tarkin": [
  "Sehr schlank",
  "Formelle Kleidung",
  "Älter",
],

"Admiral Ackbar": [
  "Mittlere Statur",
  "Formelle Kleidung",
  "Ungewöhnliches Gesicht",
],

"Asajj Ventress": [
  "Schlanke Statur",
  "Kahler Kopf",
  "Dunkle Kleidung",
],

"Kit Fisto": [
  "Groß",
  "Athletisch gebaut",
  "Auffälliger Kopf",
],

"Captain Rex": [
  "Gepanzert",
  "Militärisch",
  "Verdecktes Gesicht",
],

"Commander Cody": [
  "Gepanzert",
  "Robuste Kleidung",
  "Militärisch",
],

"Grand Admiral Thrawn": [
  "Groß",
  "Formelle Kleidung",
  "Auffälliges Gesicht",
],

"Moff Gideon": [
  "Mittlere Statur",
  "Dunkle Kleidung",
  "Gepflegt",
],

"Fennec Shand": [
  "Schlanke Statur",
  "Dunkle Kleidung",
  "Viel Ausrüstung",
],

"Kanan Jarrus": [
  "Groß",
  "Praktische Kleidung",
  "Schlanke Statur",
],

"Ezra Bridger": [
  "Schlanke Statur",
  "Leichte Kleidung",
  "Jung",
],

"Sabine Wren": [
  "Kleine Statur",
  "Teilweise gepanzert",
  "Auffällige Kleidung",
],

"Hera Syndulla": [
  "Schlanke Statur",
  "Praktische Kleidung",
  "Auffälliger Kopf",
],

"Plo Koon": [
  "Groß",
  "Verdecktes Gesicht",
  "Lockere Kleidung",
],

"Aayla Secura": [
  "Schlanke Statur",
  "Leichte Kleidung",
  "Auffälliger Kopf",
],

"Savage Opress": [
  "Sehr groß",
  "Sehr kräftig",
  "Auffälliges Gesicht",
],

"Pre Vizsla": [
  "Athletisch gebaut",
  "Gepanzert",
  "Verdecktes Gesicht",
],

"Nute Gunray": [
  "Schmale Statur",
  "Aufwendige Kleidung",
  "Ungewöhnliches Gesicht",
],

"Wedge Antilles": [
  "Mittlere Statur",
  "Praktische Kleidung",
  "Menschlich",
],

    // =========================
// MARVEL
// =========================

"Ant-Man": [
  "Mittlere Statur",
  "Technischer Anzug",
  "Verdecktes Gesicht",
],

"Black Panther": [
  "Athletisch",
  "Dunkler Anzug",
  "Verdecktes Gesicht",
],

"Black Widow": [
  "Schlank",
  "Dunkle Kleidung",
  "Praktisch gekleidet",
],

"Captain America": [
  "Kräftig gebaut",
  "Körpernaher Anzug",
  "Militärischer Look",
],

"Captain Marvel": [
  "Athletisch",
  "Körpernaher Anzug",
  "Helle Haare",
],

"Daredevil": [
  "Athletisch",
  "Dunkle Kleidung",
  "Teilweise maskiert",
],

"Deadpool": [
  "Athletisch",
  "Vollmaskiert",
  "Viel Ausrüstung",
],

"Doctor Strange": [
  "Schlanke Statur",
  "Mehrlagige Kleidung",
  "Gepflegter Bart",
],

"Drax": [
  "Sehr kräftig",
  "Wenig Kleidung",
  "Gemusterte Haut",
],

"Gamora": [
  "Schlank",
  "Ungewöhnliche Haut",
  "Dunkle Kleidung",
],

"Groot": [
  "Sehr groß",
  "Unebene Oberfläche",
  "Keine Kleidung",
],

"Hawkeye": [
  "Athletisch",
  "Praktische Kleidung",
  "Viel Ausrüstung",
],

"Hulk": [
  "Extrem groß",
  "Extrem kräftig",
  "Wenig Kleidung",
],

"Iron Man": [
  "Ganzkörperrüstung",
  "Glänzende Oberfläche",
  "Verdecktes Gesicht",
],

"Loki": [
  "Schlank",
  "Aufwendige Kleidung",
  "Längere Haare",
],

"Moon Knight": [
  "Helle Kleidung",
  "Verdecktes Gesicht",
  "Mehrere Schichten",
],

"Rocket": [
  "Sehr klein",
  "Stark behaart",
  "Technische Ausrüstung",
],

"Scarlet Witch": [
  "Schlank",
  "Dunkelrote Kleidung",
  "Lange Haare",
],

"Spider-Man": [
  "Schlank",
  "Körpernaher Anzug",
  "Vollmaskiert",
],

"Star-Lord": [
  "Athletisch",
  "Praktische Kleidung",
  "Teilweise maskiert",
],

"Thanos": [
  "Sehr groß",
  "Sehr massiv",
  "Teilweise gepanzert",
],

"Thor": [
  "Sehr kräftig",
  "Robuste Kleidung",
  "Längere Haare",
],

"Venom": [
  "Sehr groß",
  "Dunkle Oberfläche",
  "Unmenschliche Statur",
],

"Vision": [
  "Schlank",
  "Glatte Oberfläche",
  "Ungewöhnliche Haut",
],

"Wolverine": [
  "Kompakte Statur",
  "Kräftig gebaut",
  "Robuste Kleidung",
],

"Winter Soldier": [
  "Athletisch",
  "Dunkle Kleidung",
  "Robuster Look",
],

"Falcon": [
  "Athletisch",
  "Technische Ausrüstung",
  "Körpernaher Anzug",
],

"War Machine": [
  "Sehr gepanzert",
  "Breite Statur",
  "Verdecktes Gesicht",
],

"Nick Fury": [
  "Mittlere Statur",
  "Dunkle Kleidung",
  "Auffälliges Auge",
],

"Mysterio": [
  "Aufwendige Kleidung",
  "Auffälliger Kopf",
  "Teilweise gepanzert",
],

"Green Goblin": [
  "Schlanke Statur",
  "Feste Rüstung",
  "Verdecktes Gesicht",
],

"Doctor Octopus": [
  "Mittlere Statur",
  "Normale Kleidung",
  "Breite Silhouette",
],

"Magneto": [
  "Groß",
  "Auffällige Kleidung",
  "Bedeckter Kopf",
],

"Professor X": [
  "Schlank",
  "Formelle Kleidung",
  "Kahler Kopf",
],

"Silver Surfer": [
  "Sehr schlank",
  "Glatte Oberfläche",
  "Keine Kleidung",
],

"Punisher": [
  "Kräftig gebaut",
  "Dunkle Kleidung",
  "Viel Ausrüstung",
],

"Blade": [
  "Athletisch",
  "Dunkle Kleidung",
  "Robuster Look",
],

"Ghost Rider": [
  "Kräftig gebaut",
  "Dunkle Kleidung",
  "Ungewöhnlicher Kopf",
],

"Shang-Chi": [
  "Athletisch",
  "Leichte Kleidung",
  "Wenig Ausrüstung",
],

"Wasp": [
  "Kleine Statur",
  "Technischer Anzug",
  "Teilweise maskiert",
],

"Nebula": [
  "Schlank",
  "Ungewöhnliche Haut",
  "Technischer Look",
],

"Ultron": [
  "Sehr groß",
  "Metallischer Körper",
  "Keine Kleidung",
],

"Red Skull": [
  "Schlank",
  "Formelle Kleidung",
  "Auffälliges Gesicht",
],

"Hela": [
  "Sehr schlank",
  "Dunkle Kleidung",
  "Auffälliger Kopf",
],

"Kingpin": [
  "Sehr breit",
  "Sehr groß",
  "Elegante Kleidung",
],

"Cyclops": [
  "Athletisch",
  "Körpernaher Anzug",
  "Bedeckte Augen",
],

"Storm": [
  "Schlank",
  "Helle Haare",
  "Körpernahe Kleidung",
],

"Jean Grey": [
  "Schlank",
  "Körpernahe Kleidung",
  "Wenig Ausrüstung",
],

"Beast": [
  "Kräftig gebaut",
  "Stark behaart",
  "Ungewöhnliche Haut",
],

"Adam Warlock": [
  "Athletisch",
  "Ungewöhnliche Haut",
  "Auffällige Kleidung",
],

    // =========================
// HARRY POTTER
// =========================

"Albus Dumbledore": [
  "Sehr alt",
  "Lange Kleidung",
  "Langer Bart",
],

"Arthur Weasley": [
  "Schlanke Statur",
  "Ordentliche Kleidung",
  "Älter",
],

"Bellatrix Lestrange": [
  "Schlank",
  "Dunkle Kleidung",
  "Wildes Haar",
],

"Cedric Diggory": [
  "Athletisch",
  "Jung",
  "Gepflegt",
],

"Dobby": [
  "Sehr klein",
  "Wenig Kleidung",
  "Auffällige Ohren",
],

"Dolores Umbridge": [
  "Kleine Statur",
  "Sehr gepflegt",
  "Helle Kleidung",
],

"Draco Malfoy": [
  "Schlank",
  "Helle Haare",
  "Sehr gepflegt",
],

"Fred Weasley": [
  "Groß",
  "Rötliche Haare",
  "Schlanke Statur",
],

"George Weasley": [
  "Groß",
  "Rötliche Haare",
  "Schlanke Statur",
],

"Ginny Weasley": [
  "Schlank",
  "Rötliche Haare",
  "Einfache Kleidung",
],

"Harry Potter": [
  "Schlank",
  "Dunkle Haare",
  "Brille",
],

"Hermine Granger": [
  "Schlank",
  "Dichtes Haar",
  "Ordentliche Kleidung",
],

"Lord Voldemort": [
  "Sehr schlank",
  "Blasses Gesicht",
  "Dunkle Robe",
],

"Lucius Malfoy": [
  "Groß",
  "Lange Haare",
  "Sehr gepflegt",
],

"Luna Lovegood": [
  "Schlank",
  "Helle Haare",
  "Ungewöhnlicher Stil",
],

"Minerva McGonagall": [
  "Älter",
  "Lange Kleidung",
  "Sehr ordentlich",
],

"Molly Weasley": [
  "Kräftigere Statur",
  "Alltägliche Kleidung",
  "Rötliche Haare",
],

"Neville Longbottom": [
  "Mittlere Statur",
  "Ordentliche Kleidung",
  "Jung",
],

"Peter Pettigrew": [
  "Kleine Statur",
  "Unscheinbar",
  "Ungepflegt",
],

"Remus Lupin": [
  "Schlank",
  "Schlichte Kleidung",
  "Mitgenommen",
],

"Ron Weasley": [
  "Groß",
  "Rötliche Haare",
  "Schlanke Statur",
],

"Rubeus Hagrid": [
  "Extrem groß",
  "Sehr breit",
  "Viel Bart",
],

"Severus Snape": [
  "Sehr schlank",
  "Dunkle Kleidung",
  "Dunkle Haare",
],

"Sirius Black": [
  "Schlank",
  "Dunkle Kleidung",
  "Längere Haare",
],

"Viktor Krum": [
  "Athletisch",
  "Kurze Haare",
  "Sportlicher Look",
],

"Alastor Moody": [
  "Kräftig gebaut",
  "Robuste Kleidung",
  "Auffälliges Auge",
],

"Nymphadora Tonks": [
  "Schlank",
  "Praktische Kleidung",
  "Auffällige Haare",
],

"Kingsley Shacklebolt": [
  "Groß",
  "Kräftig gebaut",
  "Sehr gepflegt",
],

"Horace Slughorn": [
  "Kräftige Statur",
  "Sehr gepflegt",
  "Älter",
],

"Gilderoy Lockhart": [
  "Schlank",
  "Sehr gepflegt",
  "Auffällige Kleidung",
],

"Fleur Delacour": [
  "Schlank",
  "Helle Haare",
  "Eleganter Look",
],

"Cho Chang": [
  "Schlank",
  "Dunkle Haare",
  "Ordentliche Kleidung",
],

"Narcissa Malfoy": [
  "Schlank",
  "Sehr gepflegt",
  "Helle Haare",
],

"Barty Crouch Jr.": [
  "Schlank",
  "Unauffällige Kleidung",
  "Dunkle Haare",
],

"Fenrir Greyback": [
  "Kräftig gebaut",
  "Abgenutzte Kleidung",
  "Auffälliges Gesicht",
],

    // =========================
// DC
// =========================

"Aquaman": [
  "Sehr kräftig",
  "Längere Haare",
  "Robuste Kleidung",
],

"Bane": [
  "Extrem kräftig",
  "Teilweise maskiert",
  "Schwere Kleidung",
],

"Batgirl": [
  "Schlank",
  "Körpernaher Anzug",
  "Teilweise maskiert",
],

"Batman": [
  "Kräftig gebaut",
  "Dunkle Rüstung",
  "Teilweise maskiert",
],

"Black Canary": [
  "Athletisch",
  "Dunkle Kleidung",
  "Helle Haare",
],

"Catwoman": [
  "Sehr schlank",
  "Körpernaher Anzug",
  "Teilweise maskiert",
],

"Cyborg": [
  "Kräftig gebaut",
  "Metallischer Körper",
  "Technischer Look",
],

"Darkseid": [
  "Sehr groß",
  "Sehr massiv",
  "Harte Oberfläche",
],

"Deathstroke": [
  "Athletisch",
  "Schwere Rüstung",
  "Vollmaskiert",
],

"Green Arrow": [
  "Athletisch",
  "Praktische Kleidung",
  "Viel Ausrüstung",
],

"Green Lantern": [
  "Athletisch",
  "Körpernaher Anzug",
  "Leichte Ausrüstung",
],

"Harley Quinn": [
  "Schlank",
  "Auffällige Kleidung",
  "Auffällige Haare",
],

"Joker": [
  "Sehr schlank",
  "Elegante Kleidung",
  "Auffälliges Gesicht",
],

"Lex Luthor": [
  "Groß",
  "Formelle Kleidung",
  "Kahler Kopf",
],

"Mr. Freeze": [
  "Breite Statur",
  "Schwere Rüstung",
  "Bedeckter Kopf",
],

"Nightwing": [
  "Athletisch",
  "Dunkler Anzug",
  "Schlanke Statur",
],

"Penguin": [
  "Kleine Statur",
  "Kräftig gebaut",
  "Formelle Kleidung",
],

"Poison Ivy": [
  "Schlank",
  "Auffällige Kleidung",
  "Lange Haare",
],

"Robin": [
  "Kleine Statur",
  "Körpernaher Anzug",
  "Leichte Kleidung",
],

"Shazam": [
  "Sehr kräftig",
  "Körpernaher Anzug",
  "Auffällige Kleidung",
],

"Supergirl": [
  "Schlank",
  "Helle Haare",
  "Körpernaher Anzug",
],

"Superman": [
  "Sehr kräftig",
  "Körpernaher Anzug",
  "Dunkle Haare",
],

"The Flash": [
  "Sehr schlank",
  "Körpernaher Anzug",
  "Teilweise maskiert",
],

"The Riddler": [
  "Schlanke Statur",
  "Auffällige Kleidung",
  "Wenig Rüstung",
],

"Wonder Woman": [
  "Athletisch",
  "Leichte Rüstung",
  "Lange Haare",
],

"Martian Manhunter": [
  "Kräftig gebaut",
  "Ungewöhnliche Haut",
  "Körpernaher Anzug",
],

"John Constantine": [
  "Schlank",
  "Alltägliche Kleidung",
  "Ungepflegter Look",
],

"Raven": [
  "Schlank",
  "Dunkle Kleidung",
  "Bedeckter Kopf",
],

"Starfire": [
  "Groß",
  "Ungewöhnliche Haut",
  "Körpernahe Kleidung",
],

"Beast Boy": [
  "Schlank",
  "Ungewöhnliche Haut",
  "Leichte Kleidung",
],

"Blue Beetle": [
  "Athletisch",
  "Ganzkörperrüstung",
  "Verdecktes Gesicht",
],

"Black Adam": [
  "Sehr kräftig",
  "Dunkler Anzug",
  "Kahler Kopf",
],

"Lucifer Morningstar": [
  "Groß",
  "Elegante Kleidung",
  "Sehr gepflegt",
],

"Scarecrow": [
  "Sehr schlank",
  "Abgenutzte Kleidung",
  "Verdecktes Gesicht",
],

"Two-Face": [
  "Mittlere Statur",
  "Formelle Kleidung",
  "Auffälliges Gesicht",
],

    // =========================
// FLUCH DER KARIBIK
// =========================

"Angelica": [
  "Schlank",
  "Praktische Kleidung",
  "Dunkle Haare",
],

"Barbossa": [
  "Kräftige Statur",
  "Robuste Kleidung",
  "Ungepflegter Look",
],

"Blackbeard": [
  "Kräftig gebaut",
  "Dunkle Kleidung",
  "Viel Bart",
],

"Bootstrap Bill": [
  "Schlank",
  "Abgenutzte Kleidung",
  "Mitgenommen",
],

"Captain Teague": [
  "Schlanke Statur",
  "Dunkle Kleidung",
  "Viel Haar",
],

"Cotton": [
  "Schlank",
  "Abgenutzte Kleidung",
  "Auffälliges Gesicht",
],

"Cutler Beckett": [
  "Kleine Statur",
  "Formelle Kleidung",
  "Sehr gepflegt",
],

"Davy Jones": [
  "Kräftig gebaut",
  "Ungewöhnliche Haut",
  "Auffälliges Gesicht",
],

"Elizabeth Swann": [
  "Schlank",
  "Aufwendige Kleidung",
  "Wenig Ausrüstung",
],

"Giselle": [
  "Schlank",
  "Auffällige Kleidung",
  "Gepflegter Look",
],

"Ian Mercer": [
  "Mittlere Statur",
  "Ordentliche Kleidung",
  "Praktische Ausrüstung",
],

"Jack Sparrow": [
  "Schlank",
  "Viele Schichten",
  "Viele Accessoires",
],

"James Norrington": [
  "Groß",
  "Ordentliche Kleidung",
  "Sehr gepflegt",
],

"Joshamee Gibbs": [
  "Kräftige Statur",
  "Robuste Kleidung",
  "Ungepflegter Look",
],

"Lieutenant Theodore Groves": [
  "Schlank",
  "Einheitliche Kleidung",
  "Sehr ordentlich",
],

"Marty": [
  "Sehr klein",
  "Praktische Kleidung",
  "Kompakte Statur",
],

"Philip Swift": [
  "Schlank",
  "Schlichte Kleidung",
  "Sehr ordentlich",
],

"Pintel": [
  "Kräftig gebaut",
  "Abgenutzte Kleidung",
  "Grober Look",
],

"Ragetti": [
  "Sehr schlank",
  "Abgenutzte Kleidung",
  "Auffälliges Auge",
],

"Scrum": [
  "Kräftige Statur",
  "Lockere Kleidung",
  "Ungepflegter Look",
],

"Syrena": [
  "Schlank",
  "Leichte Kleidung",
  "Helle Haut",
],

"Tamara": [
  "Schlank",
  "Leichte Kleidung",
  "Unauffälliger Look",
],

"Tia Dalma": [
  "Schlank",
  "Ungewöhnliche Kleidung",
  "Wildes Haar",
],

"Weatherby Swann": [
  "Groß",
  "Formelle Kleidung",
  "Sehr gepflegt",
],

"Will Turner": [
  "Athletisch",
  "Praktische Kleidung",
  "Dunkle Haare",
],

"Armando Salazar": [
  "Schlank",
  "Dunkle Kleidung",
  "Auffälliges Gesicht",
],

"Henry Turner": [
  "Athletisch",
  "Praktische Kleidung",
  "Jung",
],

"Carina Smyth": [
  "Schlank",
  "Ordentliche Kleidung",
  "Gepflegt",
],

"Sao Feng": [
  "Kräftige Statur",
  "Aufwendige Kleidung",
  "Sehr gepflegt",
],

"Maccus": [
  "Sehr kräftig",
  "Schwere Kleidung",
  "Ungewöhnliches Gesicht",
],

"Mullroy": [
  "Mittlere Statur",
  "Einheitliche Kleidung",
  "Sehr ordentlich",
],

"Murtogg": [
  "Mittlere Statur",
  "Einheitliche Kleidung",
  "Schlichter Look",
],

"Lieutenant Gillette": [
  "Schlank",
  "Einheitliche Kleidung",
  "Sehr gepflegt",
],

"Scarlett": [
  "Schlank",
  "Auffällige Kleidung",
  "Gepflegter Look",
],

"Jack the Monkey": [
  "Extrem klein",
  "Stark behaart",
  "Kaum Kleidung",
],

    // =========================
// GAME OF THRONES
// =========================

"Arya Stark": [
  "Kleine Statur",
  "Praktische Kleidung",
  "Schlank",
],

"Bran Stark": [
  "Schlank",
  "Warme Kleidung",
  "Jung",
],

"Brienne von Tarth": [
  "Sehr groß",
  "Kräftig gebaut",
  "Schwere Rüstung",
],

"Catelyn Stark": [
  "Schlank",
  "Lange Kleidung",
  "Wenig Ausrüstung",
],

"Cersei Lannister": [
  "Schlank",
  "Aufwendige Kleidung",
  "Sehr gepflegt",
],

"Daenerys Targaryen": [
  "Kleine Statur",
  "Helle Haare",
  "Leichte Kleidung",
],

"Davos Seaworth": [
  "Mittlere Statur",
  "Robuste Kleidung",
  "Schlichter Look",
],

"Gendry": [
  "Kräftig gebaut",
  "Robuste Kleidung",
  "Jüngerer Mann",
],

"Gregor Clegane": [
  "Extrem groß",
  "Extrem breit",
  "Schwere Rüstung",
],

"Jaime Lannister": [
  "Athletisch",
  "Gepflegter Look",
  "Helle Haare",
],

"Jon Snow": [
  "Athletisch",
  "Dunkle Kleidung",
  "Dunkle Haare",
],

"Jorah Mormont": [
  "Kräftig gebaut",
  "Robuste Kleidung",
  "Älter",
],

"Margaery Tyrell": [
  "Schlank",
  "Aufwendige Kleidung",
  "Sehr gepflegt",
],

"Melisandre": [
  "Schlank",
  "Lange Kleidung",
  "Rötliche Haare",
],

"Ned Stark": [
  "Kräftig gebaut",
  "Schwere Kleidung",
  "Dunkle Haare",
],

"Olenna Tyrell": [
  "Älter",
  "Aufwendige Kleidung",
  "Bedeckter Kopf",
],

"Petyr Baelish": [
  "Schlanke Statur",
  "Ordentliche Kleidung",
  "Sehr gepflegt",
],

"Robb Stark": [
  "Athletisch",
  "Robuste Kleidung",
  "Dunkle Haare",
],

"Samwell Tarly": [
  "Kräftige Statur",
  "Dunkle Kleidung",
  "Wenig Rüstung",
],

"Sandor Clegane": [
  "Sehr groß",
  "Kräftig gebaut",
  "Auffälliges Gesicht",
],

"Sansa Stark": [
  "Groß",
  "Lange Kleidung",
  "Sehr gepflegt",
],

"Theon Greyjoy": [
  "Schlank",
  "Dunkle Kleidung",
  "Mitgenommener Look",
],

"Tormund": [
  "Kräftig gebaut",
  "Robuste Kleidung",
  "Rötlicher Bart",
],

"Tyrion Lannister": [
  "Sehr klein",
  "Ordentliche Kleidung",
  "Kräftige Statur",
],

"Varys": [
  "Mittlere Statur",
  "Lange Kleidung",
  "Kahler Kopf",
],

"Night King": [
  "Groß",
  "Unmenschliche Haut",
  "Dunkle Kleidung",
],

"Ramsay Bolton": [
  "Schlank",
  "Dunkle Kleidung",
  "Unauffälliger Look",
],

"Tywin Lannister": [
  "Groß",
  "Formelle Kleidung",
  "Sehr gepflegt",
],

"Bronn": [
  "Athletisch",
  "Robuste Kleidung",
  "Viel Ausrüstung",
],

"Stannis Baratheon": [
  "Kräftig gebaut",
  "Dunkle Kleidung",
  "Strenger Look",
],

"Khal Drogo": [
  "Sehr kräftig",
  "Wenig Kleidung",
  "Lange Haare",
],

"Missandei": [
  "Kleine Statur",
  "Leichte Kleidung",
  "Sehr gepflegt",
],

"Grey Worm": [
  "Athletisch",
  "Einheitliche Kleidung",
  "Leichte Rüstung",
],

"Ygritte": [
  "Schlank",
  "Robuste Kleidung",
  "Rötliche Haare",
],

"Hodor": [
  "Extrem groß",
  "Sehr breit",
  "Einfache Kleidung",
],
      // =========================
// HERR DER RINGE
// =========================

"Frodo Baggins": [
  "Sehr klein",
  "Schlanke Statur",
  "Einfache Kleidung",
],

"Samwise Gamgee": [
  "Sehr klein",
  "Kräftige Statur",
  "Robuste Kleidung",
],

"Gandalf": [
  "Sehr groß",
  "Lange Kleidung",
  "Langer Bart",
],

"Aragorn": [
  "Athletisch",
  "Dunkle Kleidung",
  "Ungepflegter Look",
],

"Legolas": [
  "Sehr schlank",
  "Helle Haare",
  "Leichte Kleidung",
],

"Gimli": [
  "Sehr klein",
  "Sehr breit",
  "Viel Bart",
],

"Boromir": [
  "Kräftig gebaut",
  "Robuste Kleidung",
  "Schwere Ausrüstung",
],

"Merry": [
  "Sehr klein",
  "Schlank",
  "Einfache Kleidung",
],

"Pippin": [
  "Sehr klein",
  "Schlank",
  "Lockere Kleidung",
],

"Gollum": [
  "Sehr schlank",
  "Wenig Kleidung",
  "Gebückte Haltung",
],

"Sauron": [
  "Extrem groß",
  "Schwere Rüstung",
  "Verdecktes Gesicht",
],

"Saruman": [
  "Groß",
  "Helle Kleidung",
  "Langer Bart",
],

"Galadriel": [
  "Schlank",
  "Helle Haare",
  "Elegante Kleidung",
],

"Elrond": [
  "Schlank",
  "Lange Kleidung",
  "Sehr gepflegt",
],

"Arwen": [
  "Schlank",
  "Lange Kleidung",
  "Dunkle Haare",
],

"Éowyn": [
  "Schlank",
  "Helle Haare",
  "Leichte Kleidung",
],

"Théoden": [
  "Älter",
  "Kräftige Statur",
  "Helle Haare",
],

"Faramir": [
  "Athletisch",
  "Robuste Kleidung",
  "Dunkle Haare",
],

"Denethor": [
  "Schlank",
  "Formelle Kleidung",
  "Älter",
],

"Éomer": [
  "Kräftig gebaut",
  "Robuste Rüstung",
  "Längere Haare",
],

"Treebeard": [
  "Extrem groß",
  "Unebene Oberfläche",
  "Keine Kleidung",
],

"Witch-king of Angmar": [
  "Groß",
  "Dunkle Rüstung",
  "Verdecktes Gesicht",
],

"Gríma Wormtongue": [
  "Sehr schlank",
  "Dunkle Kleidung",
  "Blasser Look",
],

"Haldir": [
  "Sehr schlank",
  "Helle Haare",
  "Ordentliche Kleidung",
],

"Bilbo Baggins": [
  "Sehr klein",
  "Ordentliche Kleidung",
  "Älter",
],
"Isildur": [
  "Groß",
  "Kräftig gebaut",
  "Edle Rüstung",
],

"Lurtz": [
  "Sehr groß",
  "Sehr kräftig",
  "Dunkle Haut",
],

"Celeborn": [
  "Sehr schlank",
  "Helle Haare",
  "Elegante Kleidung",
],

"King of the Dead": [
  "Groß",
  "Geisterhaft",
  "Alte Rüstung",
],

"Mouth of Sauron": [
  "Sehr groß",
  "Dunkle Rüstung",
  "Verdecktes Gesicht",
],

"Gothmog": [
  "Kräftige Statur",
  "Auffälliges Gesicht",
  "Schwere Rüstung",
],

"Elendil": [
  "Extrem groß",
  "Kräftig gebaut",
  "Edle Rüstung",
],

"Gil-galad": [
  "Groß",
  "Helle Haare",
  "Edle Rüstung",
],

"Rosie Cotton": [
  "Sehr klein",
  "Einfache Kleidung",
  "Gepflegt",
],

"Gamling": [
  "Kräftig gebaut",
  "Robuste Rüstung",
  "Älter",
],
"Grishnákh": [
  "Kleine Statur",
  "Dunkle Kleidung",
  "Auffälliges Gesicht",
],

    // =========================
// DER HOBBIT
// =========================

"Thorin Oakenshield": [
  "Kleine Statur",
  "Kräftig gebaut",
  "Robuste Kleidung",
],

"Balin": [
  "Kleine Statur",
  "Kräftig gebaut",
  "Heller Bart",
],

"Dwalin": [
  "Kleine Statur",
  "Sehr breit",
  "Kahler Kopf",
],

"Fíli": [
  "Kleine Statur",
  "Athletisch",
  "Helle Haare",
],

"Kíli": [
  "Kleine Statur",
  "Schlank",
  "Dunkle Haare",
],

"Bofur": [
  "Kleine Statur",
  "Kräftig gebaut",
  "Bedeckter Kopf",
],

"Bombur": [
  "Kleine Statur",
  "Sehr breit",
  "Kräftige Statur",
],

"Bifur": [
  "Kleine Statur",
  "Robuste Kleidung",
  "Auffälliger Kopf",
],

"Óin": [
  "Kleine Statur",
  "Älter",
  "Viel Bart",
],

"Glóin": [
  "Kleine Statur",
  "Sehr breit",
  "Rötlicher Bart",
],

"Nori": [
  "Kleine Statur",
  "Schlank",
  "Auffällige Haare",
],

"Dori": [
  "Kleine Statur",
  "Kräftig gebaut",
  "Sehr gepflegt",
],

"Ori": [
  "Kleine Statur",
  "Sehr schlank",
  "Junger Look",
],

"Bard": [
  "Athletisch",
  "Robuste Kleidung",
  "Dunkle Haare",
],

"Thranduil": [
  "Sehr schlank",
  "Helle Haare",
  "Elegante Kleidung",
],

"Tauriel": [
  "Sehr schlank",
  "Leichte Kleidung",
  "Rötliche Haare",
],

"Azog": [
  "Sehr groß",
  "Sehr kräftig",
  "Helle Haut",
],

"Bolg": [
  "Sehr groß",
  "Sehr kräftig",
  "Schwere Ausrüstung",
],

"Smaug": [
  "Extrem groß",
  "Harte Oberfläche",
  "Keine Kleidung",
],

"Beorn": [
  "Sehr groß",
  "Sehr kräftig",
  "Viel Haar",
],

"Radagast": [
  "Schlank",
  "Lange Kleidung",
  "Ungepflegter Look",
],

"Master of Lake-town": [
  "Kräftige Statur",
  "Formelle Kleidung",
  "Sehr gepflegt",
],

"Alfrid": [
  "Schlanke Statur",
  "Ordentliche Kleidung",
  "Unauffälliger Look",
],

"Dáin Ironfoot": [
  "Kleine Statur",
  "Sehr kräftig",
  "Schwere Rüstung",
],

"Necromancer": [
  "Groß",
  "Dunkle Gestalt",
  "Schwer erkennbar",
],

"Bain": [
  "Jung",
  "Schlanke Statur",
  "Praktische Kleidung",
],

"Great Goblin": [
  "Sehr groß",
  "Sehr breit",
  "Auffälliges Gesicht",
],

"Bert": [
  "Extrem groß",
  "Sehr kräftig",
  "Grober Look",
],

"Tom": [
  "Extrem groß",
  "Sehr kräftig",
  "Ungepflegter Look",
],

"William": [
  "Extrem groß",
  "Sehr kräftig",
  "Breite Statur",
],

    // =========================
// THE BOYS
// =========================

"Homelander": [
  "Athletisch",
  "Körpernaher Anzug",
  "Sehr gepflegt",
],

"Billy Butcher": [
  "Kräftig gebaut",
  "Dunkle Kleidung",
  "Ungepflegter Look",
],

"Hughie Campbell": [
  "Sehr schlank",
  "Alltägliche Kleidung",
  "Unauffälliger Look",
],

"Starlight": [
  "Schlank",
  "Helle Kleidung",
  "Körpernaher Anzug",
],

"Queen Maeve": [
  "Athletisch",
  "Feste Kleidung",
  "Lange Haare",
],

"A-Train": [
  "Sehr athletisch",
  "Körpernaher Anzug",
  "Schlanke Statur",
],

"The Deep": [
  "Athletisch",
  "Körpernaher Anzug",
  "Sehr gepflegt",
],

"Black Noir": [
  "Athletisch",
  "Komplett dunkel",
  "Vollmaskiert",
],

"Soldier Boy": [
  "Sehr kräftig",
  "Robuste Kleidung",
  "Klassischer Look",
],

"Stormfront": [
  "Schlank",
  "Dunkler Anzug",
  "Lange Haare",
],

"Kimiko": [
  "Kleine Statur",
  "Schlank",
  "Einfache Kleidung",
],

"Frenchie": [
  "Schlank",
  "Dunkle Kleidung",
  "Individueller Look",
],

"Mother's Milk": [
  "Kräftig gebaut",
  "Praktische Kleidung",
  "Robuster Look",
],

"Victoria Neuman": [
  "Schlank",
  "Formelle Kleidung",
  "Sehr gepflegt",
],

"Ashley Barrett": [
  "Schlank",
  "Geschäftliche Kleidung",
  "Sehr gepflegt",
],

"Stan Edgar": [
  "Schlank",
  "Formelle Kleidung",
  "Sehr gepflegt",
],

"Ryan": [
  "Kleine Statur",
  "Alltägliche Kleidung",
  "Jung",
],

"Lamplighter": [
  "Schlank",
  "Dunkle Kleidung",
  "Funktionaler Look",
],

"Translucent": [
  "Mittlere Statur",
  "Wenig Ausrüstung",
  "Unauffälliger Look",
],

"Mesmer": [
  "Mittlere Statur",
  "Alltägliche Kleidung",
  "Unauffällig",
],

"Firecracker": [
  "Athletisch",
  "Auffällige Kleidung",
  "Körpernaher Anzug",
],

"Sister Sage": [
  "Schlank",
  "Moderne Kleidung",
  "Sehr gepflegt",
],

"Tek Knight": [
  "Kräftig gebaut",
  "Sehr gepflegt",
  "Auffällige Kleidung",
],

"Popclaw": [
  "Athletisch",
  "Sportliche Kleidung",
  "Schlanke Statur",
],

"Love Sausage": [
  "Sehr kräftig",
  "Große Statur",
  "Einfache Kleidung",
],

"Becca Butcher": [
  "Schlank",
  "Alltägliche Kleidung",
  "Gepflegt",
],

"Grace Mallory": [
  "Älter",
  "Ordentliche Kleidung",
  "Strenger Look",
],

"Supersonic": [
  "Athletisch",
  "Körpernaher Anzug",
  "Sehr gepflegt",
],

"Crimson Countess": [
  "Schlank",
  "Auffällige Kleidung",
  "Rötliche Haare",
],

"Doppelganger": [
  "Mittlere Statur",
  "Unauffälliger Look",
  "Wenig Ausrüstung",
],

"Joe Kessler": [
  "Groß",
  "Robuste Kleidung",
  "Älter",
],

"Black Noir II": [
  "Sehr groß",
  "Komplett dunkel",
  "Vollmaskiert",
],

"Shockwave": [
  "Athletisch",
  "Körpernaher Anzug",
  "Schlanke Statur",
],

"Blue Hawk": [
  "Kräftig gebaut",
  "Auffälliger Anzug",
  "Große Statur",
],

"Webweaver": [
  "Schlank",
  "Körpernaher Anzug",
  "Verdecktes Gesicht",
],

"Zoe Neuman": [
  "Kleine Statur",
  "Alltägliche Kleidung",
  "Jung",
],

"the-boys:Ezekiel": [
  "Groß",
  "Ordentliche Kleidung",
  "Gepflegter Look",
],

"Blindspot": [
  "Athletisch",
  "Dunkle Kleidung",
  "Bedeckte Augen",
],

    // =========================
// THE WALKING DEAD
// =========================

"Rick Grimes": [
  "Mittlere Statur",
  "Robuste Kleidung",
  "Ungepflegter Look",
],

"Daryl Dixon": [
  "Athletisch",
  "Dunkle Kleidung",
  "Ungepflegter Look",
],

"Michonne": [
  "Athletisch",
  "Praktische Kleidung",
  "Viel Ausrüstung",
],

"Negan": [
  "Groß",
  "Dunkle Kleidung",
  "Sehr gepflegt",
],

"Glenn Rhee": [
  "Schlank",
  "Leichte Kleidung",
  "Praktischer Look",
],

"Maggie Greene": [
  "Schlank",
  "Praktische Kleidung",
  "Dunkle Haare",
],

"Carol Peletier": [
  "Kleine Statur",
  "Einfache Kleidung",
  "Kurze Haare",
],

"Carl Grimes": [
  "Kleine Statur",
  "Praktische Kleidung",
  "Bedeckter Kopf",
],

"Shane Walsh": [
  "Kräftig gebaut",
  "Praktische Kleidung",
  "Kurze Haare",
],

"Hershel Greene": [
  "Älter",
  "Schlichte Kleidung",
  "Heller Bart",
],

"The Governor": [
  "Mittlere Statur",
  "Ordentliche Kleidung",
  "Auffälliges Auge",
],

"Abraham Ford": [
  "Sehr kräftig",
  "Robuste Kleidung",
  "Rötliche Haare",
],

"Rosita Espinosa": [
  "Athletisch",
  "Praktische Kleidung",
  "Viel Ausrüstung",
],

"Eugene Porter": [
  "Kräftige Statur",
  "Einfache Kleidung",
  "Auffällige Frisur",
],

"Sasha Williams": [
  "Athletisch",
  "Dunkle Kleidung",
  "Leichte Ausrüstung",
],

"Tyreese Williams": [
  "Sehr kräftig",
  "Große Statur",
  "Robuste Kleidung",
],

"Morgan Jones": [
  "Schlanke Statur",
  "Praktische Kleidung",
  "Leichte Ausrüstung",
],

"Gabriel Stokes": [
  "Schlank",
  "Ordentliche Kleidung",
  "Dunkle Kleidung",
],

"Aaron": [
  "Mittlere Statur",
  "Praktische Kleidung",
  "Unauffälliger Look",
],

"Jesus": [
  "Schlank",
  "Lange Haare",
  "Viel Bart",
],

"the-walking-dead:Ezekiel": [
  "Groß",
  "Auffällige Haare",
  "Auffällige Kleidung",
],

"Alpha": [
  "Kleine Statur",
  "Dunkle Kleidung",
  "Kahler Kopf",
],

"Beta": [
  "Extrem groß",
  "Dunkle Kleidung",
  "Verdecktes Gesicht",
],

"Merle Dixon": [
  "Kräftig gebaut",
  "Abgenutzte Kleidung",
  "Auffälliger Arm",
],

"Andrea": [
  "Schlank",
  "Praktische Kleidung",
  "Helle Haare",
],

    // =========================
// JURASSIC PARK / WORLD
// =========================

"Alan Grant": [
  "Schlanke Statur",
  "Praktische Kleidung",
  "Bedeckter Kopf",
],

"Ellie Sattler": [
  "Schlank",
  "Leichte Kleidung",
  "Helle Haare",
],

"Ian Malcolm": [
  "Sehr schlank",
  "Dunkle Kleidung",
  "Sehr gepflegt",
],

"John Hammond": [
  "Älter",
  "Helle Kleidung",
  "Sehr gepflegt",
],

"Lex Murphy": [
  "Kleine Statur",
  "Alltägliche Kleidung",
  "Jung",
],

"Tim Murphy": [
  "Sehr klein",
  "Alltägliche Kleidung",
  "Jung",
],

"Dennis Nedry": [
  "Kräftige Statur",
  "Praktische Kleidung",
  "Wenig athletisch",
],

"Robert Muldoon": [
  "Kräftig gebaut",
  "Robuste Kleidung",
  "Praktischer Look",
],

"Henry Wu": [
  "Schlank",
  "Ordentliche Kleidung",
  "Sehr gepflegt",
],

"Ray Arnold": [
  "Mittlere Statur",
  "Praktische Kleidung",
  "Technischer Look",
],

"Donald Gennaro": [
  "Schlank",
  "Formelle Kleidung",
  "Sehr gepflegt",
],

"Owen Grady": [
  "Athletisch",
  "Robuste Kleidung",
  "Praktischer Look",
],

"Claire Dearing": [
  "Schlank",
  "Ordentliche Kleidung",
  "Sehr gepflegt",
],

"Maisie Lockwood": [
  "Kleine Statur",
  "Alltägliche Kleidung",
  "Jung",
],

"Zach Mitchell": [
  "Schlank",
  "Alltägliche Kleidung",
  "Jung",
],

"Gray Mitchell": [
  "Kleine Statur",
  "Alltägliche Kleidung",
  "Jung",
],

"Barry Sembène": [
  "Athletisch",
  "Robuste Kleidung",
  "Praktischer Look",
],

"Simon Masrani": [
  "Schlank",
  "Elegante Kleidung",
  "Sehr gepflegt",
],

"Vic Hoskins": [
  "Kräftig gebaut",
  "Robuste Kleidung",
  "Große Statur",
],

"Franklin Webb": [
  "Schlank",
  "Alltägliche Kleidung",
  "Unauffälliger Look",
],

"Zia Rodriguez": [
  "Schlank",
  "Praktische Kleidung",
  "Leichter Look",
],

"Eli Mills": [
  "Schlank",
  "Geschäftliche Kleidung",
  "Sehr gepflegt",
],

"Benjamin Lockwood": [
  "Älter",
  "Klassische Kleidung",
  "Schlanke Statur",
],

"Kayla Watts": [
  "Athletisch",
  "Praktische Kleidung",
  "Robuster Look",
],

"Ramsay Cole": [
  "Mittlere Statur",
  "Moderne Kleidung",
  "Sehr gepflegt",
],

};



function getRandomTip(character: string, category: string) {
  const tips =
    characterTips[`${category}:${character}`] ??
    characterTips[character];

  if (!tips || tips.length === 0) {
    return "Die Figur hat eine besondere Persönlichkeit.";
  }

  return tips[Math.floor(Math.random() * tips.length)];
}

function getCharacterImage(character: string, category: string) {
  const fileName = character
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `/characters/${category}/${fileName}.webp`;
}

function CharacterImage({
  character,
  category,
}: {
  character: string;
  category: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="flex h-72 w-full items-center justify-center rounded-3xl border border-slate-800 bg-slate-900">
        <div className="text-9xl">❓</div>
      </div>
    );
  }

  return (
    <img
      src={getCharacterImage(character, category)}
      alt={character}
      onError={() => setImageError(true)}
      className="mx-auto h-72 w-full object-contain"
    />
  );
}

export default function GamePage() {
  const router = useRouter();

  const [role, setRole] = useState<Role | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [roundId, setRoundId] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [spyPlayerId, setSpyPlayerId] = useState("");
  const [category, setCategory] = useState("");
  const [secretCharacter, setSecretCharacter] = useState("");

  const [votingStarted, setVotingStarted] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [voted, setVoted] = useState(false);
  const [submittingVote, setSubmittingVote] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [roleRevealed, setRoleRevealed] = useState(false);
  const [imposterGuess, setImposterGuess] = useState("");
const [submittingGuess, setSubmittingGuess] = useState(false);
const [guessLocked, setGuessLocked] = useState(false);
const [imposterGuessResult, setImposterGuessResult] = useState<{
  winner: "players" | "imposter";
  guessedCharacter: string;
} | null>(null);

const availableCharacters = dealCharacters
  .filter((character) => character.category === category)
  .map((character) => character.name)
  .sort((a, b) => a.localeCompare(b));
  const currentPlayer = players.find(
  (player) => player.id === playerId
);

const isHost = currentPlayer?.is_host === true;

  useEffect(() => {
    let mounted = true;

    async function loadGame() {
      try {
        const roomId = sessionStorage.getItem("roomId");
        const currentPlayerId =
          sessionStorage.getItem("playerId");

        if (!roomId || !currentPlayerId) {
          if (mounted) {
            setError(
              "Spieler oder Raum wurde nicht gefunden."
            );
            setLoading(false);
          }

          return;
        }

        // Zuerst Spieler des Raums laden.
        const { data: playerData, error: playersError } =
          await supabase
            .from("players")
            .select("id, name, is_host")
            .eq("room_id", roomId)
            .order("created_at", {
              ascending: true,
            });

        if (!mounted) return;

        if (playersError) {
          console.error(
            "PLAYERS ERROR:",
            playersError
          );

          setError(
            "Die Spieler konnten nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        if (!playerData || playerData.length !== 3) {
          setError(
            "Für dieses Spiel müssen genau 3 Spieler im Raum sein."
          );

          setLoading(false);
          return;
        }

        // Prüfen, ob die ID dieses Tabs wirklich
        // zu einem Spieler in diesem Raum gehört.
        const ownPlayer = playerData.find(
          (player) => player.id === currentPlayerId
        );

        if (!ownPlayer) {
          console.error(
            "SPIELER-ID GEHÖRT NICHT ZUM RAUM:",
            currentPlayerId
          );

          setError(
            "Dieser Tab gehört zu keinem Spieler in diesem Raum."
          );

          setLoading(false);
          return;
        }

        // Es darf nur die aktuell aktive Runde
        // dieses Raumes verwendet werden.
        const { data: round, error: roundError } =
          await supabase
            .from("rounds")
            .select(
              "id, secret_word, spy_player_id, status, category, voting_started_at"
            )
            .eq("room_id", roomId)
            .eq("status", "active")
            .order("created_at", {
              ascending: false,
            })
            .limit(1)
            .maybeSingle();

        if (!mounted) return;

        if (roundError) {
          console.error(
            "ROUND ERROR:",
            roundError
          );

          setError(
            "Die Runde konnte nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        if (!round) {
          setError(
            "Keine aktive Runde gefunden."
          );

          setLoading(false);
          return;
        }

        // Prüfen, ob der gespeicherte Imposter
        // überhaupt einer der drei Spieler ist.
        const spyExists = playerData.some(
          (player) =>
            player.id === round.spy_player_id
        );

        if (!spyExists) {
          console.error(
            "UNGÜLTIGE SPY PLAYER ID:",
            round.spy_player_id
          );

          setError(
            "Der Imposter dieser Runde ist ungültig."
          );

          setLoading(false);
          return;
        }

        // Diesen Tab eindeutig auf die aktuelle Runde setzen.
        sessionStorage.setItem(
          "roundId",
          round.id
        );

        setPlayerId(currentPlayerId);
        setRoundId(round.id);
        setSpyPlayerId(round.spy_player_id);
        setCategory(round.category);
        setSecretCharacter(round.secret_word);
        setGuessLocked(Boolean(round.voting_started_at));
        setPlayers(playerData);

        // WICHTIG:
        // Nur exakt der Spieler, dessen ID
        // der spy_player_id entspricht, ist Imposter.
        const isImposter =
          currentPlayerId === round.spy_player_id;

        console.log(
          "GAME PLAYER ID:",
          currentPlayerId
        );

        console.log(
          "GAME SPY ID:",
          round.spy_player_id
        );

        console.log(
          "IST IMPOSTER:",
          isImposter
        );

        if (isImposter) {
  const tipStorageKey = `roundTip:${round.id}`;

  let roundTip = sessionStorage.getItem(tipStorageKey);

  if (!roundTip) {
    roundTip = getRandomTip(
  round.secret_word,
  round.category
);
    sessionStorage.setItem(tipStorageKey, roundTip);
  }

  setRole({
    type: "imposter",
    tip: roundTip,
  });
} else {
  setRole({
    type: "character",
    character: round.secret_word,
  });
}

        setError("");
        setLoading(false);
      } catch (err) {
        console.error(
          "LOAD GAME ERROR:",
          err
        );

        if (mounted) {
          setError(
            "Beim Laden des Spiels ist ein Fehler aufgetreten."
          );

          setLoading(false);
        }
      }
    }

    loadGame();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
  if (!roundId || imposterGuessResult) {
    return;
  }

  let checking = false;

  async function checkImposterGuess() {
    if (checking) return;

    checking = true;

    try {
      const { data, error: roundError } = await supabase
        .from("rounds")
        .select(
          "status, finish_reason, winner_side, imposter_guess, voting_started_at"
        )
        .eq("id", roundId)
        .maybeSingle();

      if (roundError) {
        console.error("IMPOSTER GUESS CHECK ERROR:", roundError);
        return;
      }

      setGuessLocked(Boolean(data?.voting_started_at));

      if (
        data?.status === "finished" &&
        data.finish_reason === "imposter_guess" &&
        (data.winner_side === "players" ||
          data.winner_side === "imposter") &&
        data.imposter_guess
      ) {
        setImposterGuessResult({
          winner: data.winner_side,
          guessedCharacter: data.imposter_guess,
        });
      }
    } finally {
      checking = false;
    }
  }

  checkImposterGuess();

  const interval = setInterval(checkImposterGuess, 1000);

  return () => {
    clearInterval(interval);
  };
}, [roundId, imposterGuessResult]);

  useEffect(() => {
    if (
      !roundId ||
      !votingStarted ||
      result ||
      players.length !== 3
    ) {
      return;
    }

    let checking = false;

    async function checkVotes() {
      if (checking) return;

      checking = true;

      try {
        const { data: votes, error: votesError } =
          await supabase
            .from("votes")
            .select(
              "voter_id, voted_player_id"
            )
            .eq("round_id", roundId);

        if (votesError) {
          console.error(
            "VOTES LOAD ERROR:",
            votesError
          );

          return;
        }

        if (!votes) return;

        // Falls aus irgendeinem Grund ein Spieler
        // mehrfach abgestimmt hat, zählt nur eine
        // Stimme pro voter_id.
        const votesByPlayer = new Map<
          string,
          string
        >();

        for (const vote of votes) {
          votesByPlayer.set(
            vote.voter_id,
            vote.voted_player_id
          );
        }

        // Erst auswerten, wenn alle 3
        // unterschiedlichen Spieler abgestimmt haben.
        if (votesByPlayer.size < 3) {
          return;
        }

        const counts: Record<string, number> =
          {};

        for (const votedPlayerId of votesByPlayer.values()) {
          counts[votedPlayerId] =
            (counts[votedPlayerId] || 0) + 1;
        }

        let votedPlayerId = "";
        let highestVotes = 0;
        let tie = false;

        for (const [
          id,
          count,
        ] of Object.entries(counts)) {
          if (count > highestVotes) {
            votedPlayerId = id;
            highestVotes = count;
            tie = false;
          } else if (
            count === highestVotes
          ) {
            tie = true;
          }
        }

        const imposterCaught =
          !tie &&
          votedPlayerId === spyPlayerId;

        const votedPlayer = players.find(
          (player) =>
            player.id === votedPlayerId
        );

        const { error: finishError } =
          await supabase
            .from("rounds")
            .update({
              status: "finished",
            })
            .eq("id", roundId);

        if (finishError) {
          console.error(
            "ROUND FINISH ERROR:",
            finishError
          );
        }

const voteDetails = Array.from(
  votesByPlayer.entries()
).map(([voterId, votedId]) => {
  const voter = players.find(
    (player) => player.id === voterId
  );

  const votedPlayer = players.find(
    (player) => player.id === votedId
  );

  return {
    voterName: voter?.name || "Unbekannt",
    votedPlayerName:
      votedPlayer?.name || "Unbekannt",
  };
});

        setResult({
  winner: imposterCaught
    ? "players"
    : "imposter",

  votedPlayerName: tie
    ? "Unentschieden"
    : votedPlayer?.name || "Unbekannt",

  votes: voteDetails,
});
      } catch (err) {
        console.error(
          "CHECK VOTES ERROR:",
          err
        );
      } finally {
        checking = false;
      }
    }

    checkVotes();

    const interval = setInterval(
      checkVotes,
      1500
    );

    return () => {
      clearInterval(interval);
    };
  }, [
    roundId,
    votingStarted,
    result,
    players,
    spyPlayerId,
  ]);

  function returnToLobby() {
  sessionStorage.removeItem("roundId");

  router.push("/lobby");
}

async function submitImposterGuess() {
  if (
    !imposterGuess ||
    !roundId ||
    submittingGuess ||
    guessLocked ||
    role?.type !== "imposter"
  ) {
    return;
  }

  setSubmittingGuess(true);
  setError("");

  try {
    const { data, error: guessError } =
      await supabase.rpc("submit_imposter_guess", {
        p_round_id: roundId,
        p_guessed_character: imposterGuess,
      });

    if (guessError) {
      console.error(
        "IMPOSTER GUESS ERROR:",
        guessError
      );

      // Falls genau gleichzeitig die erste Stimme gespeichert wurde,
      // wird der Tipp einfach gesperrt. Kein Fehlerbildschirm.
      if (
        guessError.message?.includes(
          "Die Abstimmung hat bereits begonnen"
        )
      ) {
        setGuessLocked(true);
        setError("");
        return;
      }

      setError(
        "Dein Tipp konnte nicht gespeichert werden."
      );

      return;
    }

    const guessResult = data?.[0];

    if (
      !guessResult ||
      (guessResult.winning_side !== "players" &&
        guessResult.winning_side !== "imposter")
    ) {
      setError(
        "Das Ergebnis des Tipps konnte nicht geladen werden."
      );
      return;
    }

    setImposterGuessResult({
      winner: guessResult.winning_side,
      guessedCharacter: imposterGuess,
    });
  } catch (err) {
    console.error(
      "SUBMIT IMPOSTER GUESS ERROR:",
      err
    );

    setError(
      "Dein Tipp konnte nicht gespeichert werden."
    );
  } finally {
    setSubmittingGuess(false);
  }
}

  async function submitVote() {
    if (
      !selectedPlayer ||
      !roundId ||
      !playerId ||
      voted ||
      submittingVote
    ) {
      return;
    }

    setSubmittingVote(true);
    setError("");

    try {
      const { error: voteError } =
        await supabase
          .from("votes")
          .insert({
            round_id: roundId,
            voter_id: playerId,
            voted_player_id:
              selectedPlayer,
          });

      if (voteError) {
        console.error(
          "VOTE ERROR:",
          voteError
        );

        setError(
          "Die Abstimmung konnte nicht gespeichert werden."
        );

        setSubmittingVote(false);
        return;
      }

      setVoted(true);
    } catch (err) {
      console.error(
        "SUBMIT VOTE ERROR:",
        err
      );

      setError(
        "Die Abstimmung konnte nicht gespeichert werden."
      );
    } finally {
      setSubmittingVote(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p>Spiel wird vorbereitet...</p>
      </main>
    );
  }

  if (imposterGuessResult) {
    const realSpyName =
  players.find((player) => player.id === spyPlayerId)?.name ||
  "Unbekannt";

  const imposterWon =
    imposterGuessResult.winner === "imposter";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
        <div className="text-center">
          <div className="text-7xl">
            {imposterWon ? "🎯" : "❌"}
          </div>

          <h1 className="mt-6 text-3xl font-black">
            {imposterWon
              ? "Der Imposter gewinnt!"
              : "Der Imposter lag falsch!"}
          </h1>

          <p className="mt-3 text-slate-400">
            Der Imposter hat versucht, die Figur direkt zu erraten.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-red-900 bg-red-950/30 p-5 text-center">
  <p className="text-xs uppercase tracking-widest text-red-400">
    Der Imposter war
  </p>

  <p className="mt-2 text-2xl font-black text-white">
    🕵️ {realSpyName}
  </p>
</div>

<div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-5">
  <p className="text-xs uppercase tracking-widest text-slate-500">
    Getippt
  </p>

  <p className="mt-2 text-xl font-black text-red-400">
    {imposterGuessResult.guessedCharacter}
  </p>
</div>

        <div className="mt-4 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <p className="mb-4 text-xs uppercase tracking-widest text-slate-500">
            Richtige Figur
          </p>

          <CharacterImage
            character={secretCharacter}
            category={category}
          />

          <p className="mt-4 text-center text-2xl font-black">
            {secretCharacter}
          </p>
        </div>

        <div
          className={`mt-5 rounded-2xl p-5 text-center ${
            imposterWon
              ? "bg-red-950/40 text-red-300"
              : "bg-emerald-950/40 text-emerald-300"
          }`}
        >
          <p className="font-black">
            {imposterWon
              ? "🕵️ Imposter gewinnt die Runde"
              : "👥 Die anderen Spieler gewinnen die Runde"}
          </p>
        </div>

        <button
          onClick={returnToLobby}
          className="mt-8 w-full rounded-2xl bg-emerald-500 px-6 py-5 font-bold text-white transition hover:scale-[1.02]"
        >
          🏠 Zurück zur Lobby
        </button>
      </div>
    </main>
  );
}

  if (error && !votingStarted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <div className="text-5xl">
            ⚠️
          </div>

          <p className="mt-5 text-red-400">
            {error}
          </p>
        </div>
      </main>
    );
  }

  if (result) {
  const realSpyName =
    players.find(
      (player) => player.id === spyPlayerId
    )?.name || "Unbekannt";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
        <div className="text-center">
          {result.winner === "players" ? (
            <>
              <div className="text-7xl">
                🎉
              </div>

              <p className="mt-6 text-sm uppercase tracking-widest text-emerald-400">
                Richtig!
              </p>

              <h1 className="mt-3 text-4xl font-black">
                Der Spion wurde erwischt!
              </h1>
            </>
          ) : (
            <>
              <div className="text-7xl">
                🕵️
              </div>

              <p className="mt-6 text-sm uppercase tracking-widest text-red-400">
                Der Spion gewinnt!
              </p>

              <h1 className="mt-3 text-4xl font-black">
                Falsche Entscheidung
              </h1>
            </>
          )}

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-red-900 bg-red-950/20 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Spion
              </p>

              <p className="mt-2 font-black text-red-400">
                {realSpyName}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Gewählt
              </p>

              <p className="mt-2 font-black">
                {result.votedPlayerName}
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Die Figur war
            </p>

            <div className="mt-4 overflow-hidden rounded-2xl bg-slate-950">
              <CharacterImage
                character={secretCharacter}
                category={category}
              />
            </div>

            <p className="mt-5 text-2xl font-black">
              {secretCharacter}
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Abstimmung
            </p>

            <div className="mt-4 space-y-3">
              {result.votes.map((vote, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl bg-slate-950 px-4 py-3"
                >
                  <span className="font-semibold">
                    {vote.voterName}
                  </span>

                  <span className="text-slate-500">
                    →
                  </span>

                  <span className="font-bold text-red-400">
                    {vote.votedPlayerName}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {error && (
            <p className="mt-4 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            onClick={returnToLobby}
            className="mt-8 w-full rounded-2xl bg-emerald-500 px-6 py-5 font-bold text-white transition hover:scale-[1.02]"
          >
            🏠 Zurück zur Lobby
          </button>
        </div>
      </div>
    </main>
  );
}

  if (!votingStarted) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
          <div className="mb-6 text-center">
  <span className="inline-block rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-bold text-slate-300">
    {categoryNames[category] || category}
  </span>
</div>

          {!roleRevealed ? (
  <div className="text-center">
    <div className="text-8xl">🔒</div>

    <h1 className="mt-6 text-3xl font-black">
      Deine Rolle ist verdeckt
    </h1>

    <p className="mt-3 text-slate-400">
      Drücke erst auf den Button, wenn niemand auf deinen Bildschirm schaut.
    </p>

    <button
      onClick={() => setRoleRevealed(true)}
      className="mt-8 w-full rounded-2xl bg-white px-6 py-5 font-bold text-slate-950 transition hover:scale-[1.02]"
    >
      👁️ Rolle anzeigen
    </button>
  </div>
) : (
  <>
          {role?.type === "character" &&
  role.character && (
    <div className="text-center">
      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
        <CharacterImage
          character={role.character}
          category={category}
        />
      </div>

      <p className="mt-8 text-sm uppercase tracking-widest text-slate-400">
        Deine Figur
      </p>

      <h1 className="mt-4 text-4xl font-black">
        {role.character}
      </h1>
    </div>
  )}

          {role?.type ===
            "imposter" && (
            <div className="text-center">
              <div className="mx-auto flex h-72 w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
                <div className="text-9xl">
                  ❓
                </div>
              </div>

              <p className="mt-8 text-sm uppercase tracking-widest text-red-400">
                Achtung
              </p>

              <h1 className="mt-4 text-4xl font-black">
                DU BIST DER IMPOSTER
              </h1>

              <div className="mt-8 rounded-2xl bg-slate-900 p-6">
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Dein Tipp
                </p>

                <p className="mt-3 text-xl font-bold text-slate-300">
                  {role.tip}
                </p>
              </div>
              <div className="mt-5 rounded-2xl border border-red-900 bg-red-950/20 p-5">
  <p className="text-sm font-bold text-red-400">
    🎯 Du kennst die Figur?
  </p>

  <p className="mt-2 text-xs text-slate-400">
    Wenn du dir sicher bist, kannst du die Figur direkt erraten.
  </p>

  <select
    value={imposterGuess}
    onChange={(e) => setImposterGuess(e.target.value)}
    disabled={guessLocked || submittingGuess}
    className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white disabled:cursor-not-allowed disabled:opacity-40"
  >
    <option value="">Figur auswählen...</option>

    {availableCharacters.map((character) => (
      <option key={character} value={character}>
        {character}
      </option>
    ))}
  </select>
  <button
  onClick={submitImposterGuess}
  disabled={!imposterGuess || submittingGuess || guessLocked}
  className="mt-4 w-full rounded-xl bg-red-500 px-4 py-3 font-bold text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-40"
>
  {guessLocked
    ? "🗳️ Abstimmung hat begonnen"
    : submittingGuess
      ? "Tipp wird geprüft..."
      : "🎯 Figur einloggen"}
</button>
</div>
            </div>
          )}


  <button
    onClick={() => setVotingStarted(true)}
    className="mt-10 w-full rounded-2xl bg-emerald-500 px-6 py-5 font-bold text-white transition hover:scale-[1.02]"
  >
    🗳️ Zur Abstimmung
  </button>
</>
)}

        </div>
      </main>
    );
  }

  if (!voted) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-md px-6 py-10">
          <div className="mb-6 text-center">
  <span className="inline-block rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-bold text-slate-300">
    {categoryNames[category] || category}
  </span>
</div>
          <div className="text-center">
            <div className="text-6xl">
              🕵️
            </div>

            <h1 className="mt-5 text-3xl font-black">
              Wer ist der Spion?
            </h1>

            <p className="mt-3 text-slate-400">
              Jeder Spieler gibt jetzt
              seine Stimme ab.
            </p>
          </div>

          {error && (
            <div className="mt-5 rounded-2xl border border-red-900 bg-red-950/40 p-4">
              <p className="text-center text-sm text-red-300">
                {error}
              </p>
            </div>
          )}

          <div className="mt-8 space-y-3">
            {players.map((player) => (
              <button
                key={player.id}
                disabled={
  submittingVote ||
  player.id === playerId
}
                onClick={() =>
                  setSelectedPlayer(
                    player.id
                  )
                }
                className={`w-full rounded-2xl border px-5 py-5 text-left font-bold transition ${
  player.id === playerId
    ? "cursor-not-allowed border-slate-800 bg-slate-950 text-slate-600"
    : selectedPlayer === player.id
      ? "border-emerald-400 bg-emerald-500/20"
      : "border-slate-700 bg-slate-900 hover:border-slate-500"
} disabled:opacity-70`}
              >
                {player.name}

                {player.id ===
                  playerId && (
                  <span className="ml-2 text-xs font-normal text-slate-500">
                    Du
                  </span>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={submitVote}
            disabled={
              !selectedPlayer ||
              submittingVote
            }
            className="mt-6 w-full rounded-2xl bg-red-500 px-6 py-5 font-bold disabled:cursor-not-allowed disabled:opacity-40"
          >
            {submittingVote
              ? "Stimme wird gespeichert..."
              : "🗳️ Abstimmen"}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">
        <div className="text-7xl">
          🗳️
        </div>

        <h1 className="mt-6 text-3xl font-black">
          Stimme abgegeben!
        </h1>

        <p className="mt-3 text-slate-400">
          Warte auf die anderen
          Spieler...
        </p>
      </div>
    </main>
  );
}