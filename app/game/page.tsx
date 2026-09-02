"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

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
    "Wirkt eher schlank und beweglich.",
    "Trägt meistens eher praktische als schwere Kleidung.",
    "Ihr Kopfbereich fällt stärker auf als ihre restliche Ausrüstung.",
  ],

  "Anakin Skywalker": [
    "Wirkt eher groß und athletisch.",
    "Trägt häufig mehrere dunkle Kleidungsschichten.",
    "Hat meistens relativ wenig schwere Ausrüstung am Körper.",
  ],

  "Boba Fett": [
    "Ein großer Teil seines Körpers ist von Ausrüstung bedeckt.",
    "Seine Kleidung wirkt eher robust als bequem.",
    "Das Gesicht ist häufig nicht sichtbar.",
  ],

  "C-3PO": [
    "Sein Körper wirkt eher schmal gebaut.",
    "Die Oberfläche seines Körpers wirkt hart und glatt.",
    "Normale Kleidung ist bei ihm kaum zu erkennen.",
  ],

  "Chewbacca": [
    "Ist deutlich größer als ein durchschnittlicher Mensch.",
    "Seine Körperoberfläche wirkt ungewöhnlich dicht.",
    "Trägt vergleichsweise wenig sichtbare Kleidung.",
  ],

  "Count Dooku": [
    "Wirkt eher groß und schlank.",
    "Trägt meistens dunkle und eher ordentliche Kleidung.",
    "Hat vergleichsweise wenig sichtbare Ausrüstung.",
  ],

  "Darth Vader": [
    "Wirkt körperlich eher groß und schwer.",
    "Trägt fast ausschließlich dunkle Materialien.",
    "Das Gesicht ist meistens vollständig verdeckt.",
  ],

  "Finn": [
    "Hat eine eher durchschnittliche menschliche Statur.",
    "Trägt häufig eher praktische Kleidung.",
    "Seine Ausrüstung wirkt nicht besonders schwer.",
  ],

  "General Grievous": [
    "Wirkt deutlich größer als ein durchschnittlicher Mensch.",
    "Sein Körper besteht sichtbar aus vielen harten Elementen.",
    "Seine Statur wirkt eher schmal und kantig.",
  ],

  "Grogu": [
    "Ist körperlich sehr klein.",
    "Trägt eher lockere als körpernahe Kleidung.",
    "Seine Ohren verändern die Silhouette des Kopfes deutlich.",
  ],

  "Han Solo": [
    "Hat eine ziemlich durchschnittliche menschliche Statur.",
    "Trägt meistens eher einfache und praktische Kleidung.",
    "Hat häufig nur wenig Ausrüstung direkt am Körper.",
  ],

  "Jabba the Hutt": [
    "Seine Körperform unterscheidet sich stark von einem Menschen.",
    "Wirkt körperlich eher schwer als beweglich.",
    "Trägt kaum erkennbare normale Kleidung.",
  ],

  "Kylo Ren": [
    "Wirkt eher groß und schlank.",
    "Trägt überwiegend dunkle Kleidung.",
    "Sein Gesicht ist zumindest zeitweise verdeckt.",
  ],

  "Lando Calrissian": [
    "Wirkt körperlich eher durchschnittlich gebaut.",
    "Seine Kleidung wirkt oft etwas gepflegter als bei anderen.",
    "Trägt meist wenig schwere Ausrüstung.",
  ],

  "Leia Organa": [
    "Ist eher klein und schlank gebaut.",
    "Ihre Kleidung wirkt oft leichter als die vieler Kämpfer.",
    "Ihr Haar fällt je nach Erscheinung stärker auf als ihre Ausrüstung.",
  ],

  "Luke Skywalker": [
    "Wirkt eher schlank als besonders kräftig.",
    "Trägt häufig relativ einfache Kleidung.",
    "Hat meist wenig schwere Ausrüstung am Körper.",
  ],

  "Mace Windu": [
    "Wirkt groß und eher kräftig gebaut.",
    "Trägt meistens mehrere lockere Kleidungsschichten.",
    "Seine Kleidung wirkt kaum technisch.",
  ],

  "Mandalorian": [
    "Ein großer Teil des Körpers ist von fester Ausrüstung bedeckt.",
    "Das Gesicht ist meistens nicht sichtbar.",
    "Seine Kleidung besteht aus mehreren unterschiedlichen Materialien.",
  ],

  "Obi-Wan Kenobi": [
    "Hat eine eher durchschnittliche bis große Statur.",
    "Trägt häufig mehrere lockere Kleidungsschichten.",
    "Sein Outfit wirkt eher traditionell als technisch.",
  ],

  "Padmé Amidala": [
    "Ist eher schlank gebaut.",
    "Ihre Kleidung kann deutlich aufwendiger wirken als bei vielen anderen.",
    "Trägt vergleichsweise selten schwere Ausrüstung.",
  ],

  "Palpatine": [
    "Wirkt körperlich eher schmal.",
    "Trägt häufig sehr lockere und dunkle Kleidung.",
    "Seine Kleidung verdeckt einen großen Teil seiner Körperform.",
  ],

  "Qui-Gon Jinn": [
    "Ist eher groß und schlank gebaut.",
    "Trägt meistens mehrere lockere Stoffschichten.",
    "Seine Kleidung wirkt wenig technisch.",
  ],

  "R2-D2": [
    "Ist deutlich kleiner als die meisten Figuren.",
    "Seine Körperform ist eher kompakt als menschlich.",
    "Normale Kleidung ist nicht erkennbar.",
  ],

  "Rey": [
    "Wirkt eher schlank und beweglich.",
    "Ihre Kleidung ist meistens leicht und praktisch.",
    "Trägt häufig mehrere dünne Stoffschichten.",
  ],

  "Yoda": [
    "Ist körperlich sehr klein.",
    "Trägt meistens lockere und eher einfache Kleidung.",
    "Seine Ohren beeinflussen die Kopfform deutlich.",
  ],

  "Darth Maul": [
    "Wirkt eher schlank und athletisch.",
    "Trägt überwiegend dunkle Kleidung.",
    "Sein Gesicht weist auffälligere Merkmale auf als seine Kleidung.",
  ],

  "Jango Fett": [
    "Trägt viel feste Ausrüstung direkt am Körper.",
    "Sein Gesicht ist häufig vollständig verdeckt.",
    "Sein Outfit wirkt eher funktional als bequem.",
  ],

  "Cad Bane": [
    "Wirkt eher groß und sehr schlank.",
    "Trägt Kleidung, die nicht besonders modern wirkt.",
    "Sein Kopfbereich ist häufig teilweise bedeckt.",
  ],

  "Bo-Katan Kryze": [
    "Wirkt eher schlank und athletisch.",
    "Trägt häufig feste Ausrüstung über der Kleidung.",
    "Das Gesicht ist je nach Situation nicht sichtbar.",
  ],

  "Poe Dameron": [
    "Ist eher durchschnittlich groß und schlank.",
    "Trägt oft funktionale Kleidung mit mehreren Details.",
    "Sein Outfit wirkt eher für Bewegung als Schutz gedacht.",
  ],

  "Captain Phasma": [
    "Ist deutlich größer als viele andere Figuren.",
    "Fast der gesamte Körper ist von fester Ausrüstung bedeckt.",
    "Das Gesicht ist normalerweise nicht sichtbar.",
  ],

  "Grand Moff Tarkin": [
    "Wirkt eher schlank als kräftig.",
    "Trägt meistens sehr ordentliche Kleidung.",
    "Sein Outfit wirkt stärker formell als kampforientiert.",
  ],

  "Admiral Ackbar": [
    "Sein Kopf unterscheidet sich deutlich von einem menschlichen.",
    "Trägt meistens eher formelle Kleidung.",
    "Seine Statur wirkt ansonsten relativ durchschnittlich.",
  ],

  "Asajj Ventress": [
    "Wirkt eher schlank und beweglich.",
    "Trägt meistens körpernahe Kleidung.",
    "Ihr Kopfbereich wirkt meist eher glatt als stark bedeckt.",
  ],

  "Kit Fisto": [
    "Ist eher groß und athletisch gebaut.",
    "Sein Kopfbereich besitzt mehrere ungewöhnliche Formen.",
    "Trägt meistens eher lockere als technische Kleidung.",
  ],

  "Captain Rex": [
    "Trägt häufig feste Ausrüstung über fast dem ganzen Körper.",
    "Sein Erscheinungsbild wirkt stark militärisch.",
    "Das Gesicht ist während Einsätzen häufig nicht sichtbar.",
  ],

  "Commander Cody": [
    "Trägt meistens relativ schwere Schutzkleidung.",
    "Sein Outfit besteht überwiegend aus festen Materialien.",
    "Die Körperform bleibt trotz Ausrüstung ziemlich menschlich.",
  ],

  "Grand Admiral Thrawn": [
    "Wirkt eher groß und schlank.",
    "Trägt meistens sehr ordentliche und formelle Kleidung.",
    "Sein Gesicht fällt stärker auf als seine Ausrüstung.",
  ],

  "Moff Gideon": [
    "Ist eher durchschnittlich groß.",
    "Trägt häufig dunkle und relativ feste Kleidung.",
    "Sein Outfit wirkt eher ordentlich als improvisiert.",
  ],

  "Fennec Shand": [
    "Wirkt eher schlank und beweglich.",
    "Trägt überwiegend dunkle und funktionale Kleidung.",
    "Hat häufig mehrere kleinere Ausrüstungsteile am Körper.",
  ],

  "Kanan Jarrus": [
    "Wirkt eher groß und schlank.",
    "Trägt meist praktische Kleidung mit mehreren Schichten.",
    "Seine Kleidung wirkt kaum schwer gepanzert.",
  ],

  "Ezra Bridger": [
    "Ist eher schlank und durchschnittlich groß.",
    "Trägt häufig relativ leichte Kleidung.",
    "Seine Ausrüstung wirkt insgesamt eher kompakt.",
  ],

  "Sabine Wren": [
    "Wirkt eher klein bis durchschnittlich groß.",
    "Trägt häufig feste Elemente über der Kleidung.",
    "Ihr äußeres Erscheinungsbild besitzt mehrere auffällige Details.",
  ],

  "Hera Syndulla": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt meistens praktische und relativ leichte Kleidung.",
    "Ihr Kopfbereich unterscheidet sich deutlich von einem Menschen.",
  ],

  "Plo Koon": [
    "Ist eher groß gebaut.",
    "Sein Gesicht ist meistens teilweise von Ausrüstung bedeckt.",
    "Trägt eher lockere als schwere Kleidung.",
  ],

  "Aayla Secura": [
    "Wirkt eher schlank und beweglich.",
    "Trägt vergleichsweise leichte Kleidung.",
    "Ihr Kopfbereich besitzt Merkmale, die Menschen nicht haben.",
  ],

  "Savage Opress": [
    "Ist deutlich größer und kräftiger als viele andere.",
    "Seine Körperform wirkt sehr breit.",
    "Sein Gesicht und Kopf besitzen mehrere auffällige Strukturen.",
  ],

  "Pre Vizsla": [
    "Wirkt eher groß und athletisch.",
    "Trägt häufig feste Ausrüstung über der Kleidung.",
    "Sein Gesicht ist während Kämpfen oft verdeckt.",
  ],

  "Nute Gunray": [
    "Wirkt eher groß und schmal.",
    "Trägt häufig lockere und aufwendige Kleidung.",
    "Seine Kopfform unterscheidet sich von einem Menschen.",
  ],

  "Wedge Antilles": [
    "Ist eher durchschnittlich groß und schlank.",
    "Trägt häufig funktionale Kleidung.",
    "Seine Ausrüstung wirkt eher leicht als stark gepanzert.",
  ],

    // =========================
  // MARVEL
  // =========================

  "Ant-Man": [
    "Wirkt körperlich eher durchschnittlich gebaut.",
    "Trägt häufig eng anliegende technische Kleidung.",
    "Sein Gesicht ist bei Einsätzen oft teilweise verdeckt.",
  ],

  "Black Panther": [
    "Wirkt eher schlank und athletisch.",
    "Trägt meist sehr körpernahe Kleidung.",
    "Sein Gesicht ist während Einsätzen häufig nicht sichtbar.",
  ],

  "Black Widow": [
    "Ist eher klein bis durchschnittlich groß.",
    "Trägt häufig dunkle und praktische Kleidung.",
    "Ihre Ausrüstung liegt meist relativ nah am Körper.",
  ],

  "Captain America": [
    "Wirkt groß und deutlich athletisch gebaut.",
    "Trägt meist körpernahe Schutzkleidung.",
    "Sein Outfit wirkt eher funktional als alltäglich.",
  ],

  "Captain Marvel": [
    "Wirkt eher schlank und athletisch.",
    "Trägt häufig körpernahe Kleidung.",
    "Hat vergleichsweise wenig lose Ausrüstung am Körper.",
  ],

  "Daredevil": [
    "Wirkt eher schlank und beweglich.",
    "Trägt meistens körpernahe Kleidung.",
    "Ein Teil seines Gesichts ist häufig verdeckt.",
  ],

  "Deadpool": [
    "Wirkt eher groß und athletisch.",
    "Trägt fast vollständig körperbedeckende Kleidung.",
    "Hat häufig mehrere Ausrüstungsteile direkt am Körper.",
  ],

  "Doctor Strange": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt meist mehrere auffällige Kleidungsschichten.",
    "Seine Kleidung wirkt weniger technisch als bei vielen anderen.",
  ],

  "Drax": [
    "Ist groß und sehr kräftig gebaut.",
    "Trägt vergleichsweise wenig Kleidung.",
    "Seine Körperoberfläche besitzt mehrere auffällige Merkmale.",
  ],

  "Gamora": [
    "Wirkt eher schlank und beweglich.",
    "Trägt häufig dunkle oder praktische Kleidung.",
    "Ihr äußeres Erscheinungsbild wirkt nicht vollständig menschlich.",
  ],

  "Groot": [
    "Ist deutlich größer als ein durchschnittlicher Mensch.",
    "Seine Körperoberfläche wirkt sehr ungleichmäßig.",
    "Normale Kleidung ist bei ihm kaum zu erkennen.",
  ],

  "Hawkeye": [
    "Wirkt eher durchschnittlich groß und athletisch.",
    "Trägt meistens praktische Kleidung.",
    "Hat häufig mehrere kleinere Ausrüstungsteile am Körper.",
  ],

  "Hulk": [
    "Ist deutlich größer und breiter als die meisten Figuren.",
    "Seine Körperform wirkt extrem kräftig.",
    "Trägt meist deutlich weniger Kleidung als andere.",
  ],

  "Iron Man": [
    "Seine Kleidung verändert seine Körperform deutlich.",
    "Fast der gesamte Körper kann von festen Materialien bedeckt sein.",
    "Das Gesicht ist während Einsätzen oft nicht sichtbar.",
  ],

  "Loki": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig mehrere auffällige Kleidungsschichten.",
    "Sein Outfit wirkt eher aufwendig als praktisch.",
  ],

  "Moon Knight": [
    "Wirkt groß und eher athletisch.",
    "Trägt häufig mehrere helle Kleidungsschichten.",
    "Das Gesicht ist bei Einsätzen meist verdeckt.",
  ],

  "Rocket": [
    "Ist deutlich kleiner als die meisten anderen Figuren.",
    "Seine Körperform entspricht keinem Menschen.",
    "Trägt häufig funktionale Kleidung oder Ausrüstung.",
  ],

  "Scarlet Witch": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig dunkle oder auffällige Kleidung.",
    "Ihre Ausrüstung wirkt insgesamt eher leicht.",
  ],

  "Spider-Man": [
    "Wirkt eher schlank und sehr beweglich.",
    "Trägt fast vollständig körpernahe Kleidung.",
    "Sein Gesicht ist während Einsätzen häufig verdeckt.",
  ],

  "Star-Lord": [
    "Wirkt eher groß und durchschnittlich athletisch.",
    "Trägt meist praktische Kleidung mit mehreren Schichten.",
    "Sein Gesicht kann durch Ausrüstung verdeckt sein.",
  ],

  "Thanos": [
    "Ist deutlich größer und kräftiger als ein Mensch.",
    "Seine Körperform wirkt sehr breit und schwer.",
    "Trägt häufig feste Elemente über Teilen des Körpers.",
  ],

  "Thor": [
    "Ist eher groß und kräftig gebaut.",
    "Trägt häufig mehrere schwere Kleidungsschichten.",
    "Sein Erscheinungsbild wirkt eher robust als unauffällig.",
  ],

  "Venom": [
    "Ist deutlich größer als ein durchschnittlicher Mensch.",
    "Seine Körperform wirkt sehr kräftig.",
    "Normale Kleidung ist äußerlich kaum zu erkennen.",
  ],

  "Vision": [
    "Wirkt eher groß und schlank.",
    "Seine Körperoberfläche wirkt nicht vollständig natürlich.",
    "Trägt meist wenig zusätzliche Ausrüstung.",
  ],

  "Wolverine": [
    "Wirkt eher kompakt und kräftig gebaut.",
    "Trägt häufig robuste oder körpernahe Kleidung.",
    "Sein Körperbau wirkt breiter als bei vielen anderen.",
  ],

  "Winter Soldier": [
    "Wirkt groß und athletisch gebaut.",
    "Trägt häufig dunkle und praktische Kleidung.",
    "Ein Teil seines Körpers wirkt anders als der Rest.",
  ],

  "Falcon": [
    "Wirkt eher schlank und athletisch.",
    "Trägt häufig technische Ausrüstung am Oberkörper.",
    "Sein Outfit wirkt stark auf Bewegung ausgelegt.",
  ],

  "War Machine": [
    "Wirkt mit seiner Ausrüstung deutlich breiter als ein normaler Mensch.",
    "Der Körper ist während Einsätzen fast vollständig bedeckt.",
    "Sein Outfit besteht größtenteils aus festen Materialien.",
  ],

  "Nick Fury": [
    "Wirkt körperlich eher durchschnittlich gebaut.",
    "Trägt häufig dunkle und eher praktische Kleidung.",
    "Im Gesichtsbereich gibt es ein wiederkehrendes auffälliges Detail.",
  ],

  "Mysterio": [
    "Wirkt eher durchschnittlich groß.",
    "Trägt vergleichsweise aufwendige Kleidung.",
    "Der Kopfbereich kann stark von seiner normalen Form abweichen.",
  ],

  "Green Goblin": [
    "Wirkt eher schlank bis durchschnittlich gebaut.",
    "Trägt häufig feste Schutzkleidung.",
    "Sein Gesicht ist teilweise oder vollständig verdeckt.",
  ],

  "Doctor Octopus": [
    "Hat eine eher durchschnittliche menschliche Statur.",
    "Trägt meistens relativ normale Kleidung.",
    "Seine äußere Silhouette kann deutlich größer wirken als sein Körper.",
  ],

  "Magneto": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig auffällige oder körpernahe Kleidung.",
    "Sein Kopfbereich ist oft teilweise bedeckt.",
  ],

  "Professor X": [
    "Wirkt körperlich eher schlank.",
    "Trägt häufig normale oder eher formelle Kleidung.",
    "Seine äußere Erscheinung wirkt weniger kampforientiert als bei vielen anderen.",
  ],

  "Silver Surfer": [
    "Wirkt groß, schlank und sehr gleichmäßig gebaut.",
    "Normale Kleidung ist äußerlich kaum erkennbar.",
    "Seine Körperoberfläche wirkt ungewöhnlich glatt.",
  ],

  "Punisher": [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt meistens dunkle und praktische Kleidung.",
    "Hat häufig mehrere Ausrüstungsteile direkt am Körper.",
  ],

  "Blade": [
    "Wirkt groß und athletisch gebaut.",
    "Trägt überwiegend dunkle Kleidung.",
    "Seine Kleidung wirkt eher robust als leicht.",
  ],

  "Ghost Rider": [
    "Wirkt eher groß und kräftig.",
    "Trägt häufig dunkle und robuste Kleidung.",
    "Sein gesamtes Erscheinungsbild wirkt eher ungewöhnlich.",
  ],

  "Shang-Chi": [
    "Wirkt eher schlank und athletisch.",
    "Trägt Kleidung mit relativ viel Bewegungsfreiheit.",
    "Hat meist wenig schwere Ausrüstung am Körper.",
  ],

  "Wasp": [
    "Ist eher klein und schlank gebaut.",
    "Trägt häufig eng anliegende technische Kleidung.",
    "Ihr Gesicht kann während Einsätzen teilweise verdeckt sein.",
  ],

  "Nebula": [
    "Wirkt eher schlank und athletisch.",
    "Ihre Körperoberfläche besitzt mehrere ungewöhnliche Details.",
    "Trägt meistens eher funktionale Kleidung.",
  ],

  "Ultron": [
    "Ist deutlich größer als ein durchschnittlicher Mensch.",
    "Sein Körper wirkt vollständig aus festen Materialien aufgebaut.",
    "Normale Kleidung ist nicht erkennbar.",
  ],

  "Red Skull": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig formelle oder militärisch wirkende Kleidung.",
    "Sein Gesicht besitzt deutlich ungewöhnlichere Merkmale als sein Körper.",
  ],

  "Hela": [
    "Wirkt eher groß und sehr schlank.",
    "Trägt meistens dunkle und körpernahe Kleidung.",
    "Ihre Kopfform kann je nach Erscheinung deutlich auffälliger wirken.",
  ],

  "Kingpin": [
    "Ist sehr groß und außergewöhnlich breit gebaut.",
    "Trägt häufig eher elegante Kleidung.",
    "Seine Körperform wirkt deutlich schwerer als bei vielen anderen.",
  ],

  "Cyclops": [
    "Wirkt eher groß und athletisch.",
    "Trägt häufig körpernahe Kleidung.",
    "Im Bereich des Gesichts trägt er meistens ein auffälliges Element.",
  ],

  "Storm": [
    "Wirkt eher groß und schlank.",
    "Ihr Haar kann stärker auffallen als ihre Ausrüstung.",
    "Trägt häufig körpernahe oder auffällige Kleidung.",
  ],

  "Jean Grey": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig relativ körpernahe Kleidung.",
    "Hat meist wenig sichtbare technische Ausrüstung.",
  ],

  "Beast": [
    "Ist eher groß und kräftig gebaut.",
    "Seine Körperoberfläche unterscheidet sich deutlich von einem normalen Menschen.",
    "Wirkt trotz seiner breiten Statur relativ beweglich.",
  ],

  "Adam Warlock": [
    "Wirkt groß und athletisch gebaut.",
    "Seine Körperoberfläche wirkt nicht ganz menschlich.",
    "Trägt häufig eher auffällige als alltägliche Kleidung.",
  ],

    // =========================
  // HARRY POTTER
  // =========================

  "Albus Dumbledore": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig lange und lockere Kleidung.",
    "Sein Haar fällt stärker auf als seine Ausrüstung.",
  ],

  "Arthur Weasley": [
    "Wirkt eher groß und schlank.",
    "Trägt meist eher alltägliche oder formelle Kleidung.",
    "Hat vergleichsweise wenig auffällige Ausrüstung am Körper.",
  ],

  "Bellatrix Lestrange": [
    "Wirkt eher schlank und beweglich.",
    "Trägt häufig dunkle Kleidung.",
    "Ihr Haar wirkt oft eher wild als ordentlich.",
  ],

  "Cedric Diggory": [
    "Wirkt eher groß und athletisch.",
    "Trägt häufig relativ einheitliche Kleidung.",
    "Sein Erscheinungsbild wirkt insgesamt eher gepflegt.",
  ],

  Dobby: [
    "Ist deutlich kleiner als ein durchschnittlicher Mensch.",
    "Trägt sehr wenig und eher einfache Kleidung.",
    "Seine Kopfform fällt stärker auf als sein Körper.",
  ],

  "Dolores Umbridge": [
    "Ist eher klein gebaut.",
    "Trägt häufig sehr ordentliche Kleidung.",
    "Ihr Erscheinungsbild wirkt eher weich als sportlich.",
  ],

  "Draco Malfoy": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig sehr ordentliche Kleidung.",
    "Sein Haar wirkt meist auffällig hell und gepflegt.",
  ],

  "Fred Weasley": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig einfache oder einheitliche Kleidung.",
    "Sein Erscheinungsbild ähnelt stark dem einer anderen Figur.",
  ],

  "George Weasley": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig einfache oder einheitliche Kleidung.",
    "Sein Erscheinungsbild ähnelt stark dem einer anderen Figur.",
  ],

  "Ginny Weasley": [
    "Wirkt eher klein bis durchschnittlich groß.",
    "Trägt meist relativ einfache Kleidung.",
    "Ihr Haar fällt stärker auf als ihre Ausrüstung.",
  ],

  "Harry Potter": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig relativ einheitliche oder einfache Kleidung.",
    "Im Gesichtsbereich gibt es ein wiederkehrendes auffälliges Detail.",
  ],

  "Hermine Granger": [
    "Wirkt eher klein bis durchschnittlich groß.",
    "Trägt häufig eher ordentliche Kleidung.",
    "Ihr Haar wirkt oft auffälliger als ihre Ausrüstung.",
  ],

  "Lord Voldemort": [
    "Wirkt eher groß und sehr schlank.",
    "Trägt meistens lange und dunkle Kleidung.",
    "Sein Gesicht unterscheidet sich deutlich von einem normalen Menschen.",
  ],

  "Lucius Malfoy": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig sehr gepflegte und formelle Kleidung.",
    "Sein Haar ist meist auffällig lang und hell.",
  ],

  "Luna Lovegood": [
    "Wirkt eher klein und schlank.",
    "Trägt häufig etwas ungewöhnlichere Kleidung.",
    "Ihr Erscheinungsbild wirkt weniger streng als bei vielen anderen.",
  ],

  "Minerva McGonagall": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig lange und eher formelle Kleidung.",
    "Ihr Haar wirkt meistens sehr ordentlich.",
  ],

  "Molly Weasley": [
    "Ist eher klein bis durchschnittlich groß.",
    "Trägt meist praktische und eher alltägliche Kleidung.",
    "Ihr Erscheinungsbild wirkt weniger kampforientiert.",
  ],

  "Neville Longbottom": [
    "Wirkt eher groß und durchschnittlich gebaut.",
    "Trägt häufig relativ einheitliche Kleidung.",
    "Hat meist wenig auffällige Ausrüstung am Körper.",
  ],

  "Peter Pettigrew": [
    "Wirkt eher klein und schmal gebaut.",
    "Trägt meist unauffällige Kleidung.",
    "Sein Erscheinungsbild wirkt eher unscheinbar.",
  ],

  "Remus Lupin": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig eher schlichte Kleidung.",
    "Sein äußeres Erscheinungsbild wirkt oft etwas mitgenommen.",
  ],

  "Ron Weasley": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig relativ einfache Kleidung.",
    "Sein Haar fällt stärker auf als seine Ausrüstung.",
  ],

  "Rubeus Hagrid": [
    "Ist deutlich größer und breiter als fast alle anderen.",
    "Trägt meistens schwere oder robuste Kleidung.",
    "Sein Haar und Bart verdecken einen großen Teil des Gesichts.",
  ],

  "Severus Snape": [
    "Wirkt eher groß und schlank.",
    "Trägt fast ausschließlich dunkle Kleidung.",
    "Sein Haar wirkt meist eher glatt und wenig aufwendig.",
  ],

  "Sirius Black": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig dunkle und eher lockere Kleidung.",
    "Sein Haar wirkt oft länger und weniger ordentlich.",
  ],

  "Viktor Krum": [
    "Wirkt eher groß und athletisch gebaut.",
    "Trägt häufig eher robuste oder einheitliche Kleidung.",
    "Sein Erscheinungsbild wirkt sportlicher als bei vielen anderen.",
  ],

  "Alastor Moody": [
  "Wirkt eher groß und kräftig gebaut.",
  "Trägt häufig robuste und eher dunkle Kleidung.",
  "Im Gesichtsbereich gibt es ein auffälliges Detail.",
],

"Nymphadora Tonks": [
  "Wirkt eher schlank und beweglich.",
  "Trägt häufig praktische Kleidung.",
  "Ihr äußeres Erscheinungsbild kann sich deutlich verändern.",
],

"Kingsley Shacklebolt": [
  "Wirkt eher groß und kräftig gebaut.",
  "Trägt häufig sehr ordentliche Kleidung.",
  "Sein Erscheinungsbild wirkt insgesamt eher ruhig und kontrolliert.",
],

"Horace Slughorn": [
  "Wirkt eher kräftig als athletisch gebaut.",
  "Trägt häufig sehr ordentliche oder aufwendige Kleidung.",
  "Sein Erscheinungsbild wirkt eher gepflegt als praktisch.",
],

"Gilderoy Lockhart": [
  "Wirkt eher groß und schlank.",
  "Trägt häufig auffällig gepflegte Kleidung.",
  "Sein äußeres Erscheinungsbild wirkt wichtiger als seine Ausrüstung.",
],

"Fleur Delacour": [
  "Wirkt eher groß und schlank.",
  "Trägt häufig sehr ordentliche Kleidung.",
  "Ihr Erscheinungsbild wirkt eher leicht und elegant.",
],

"Cho Chang": [
  "Wirkt eher klein bis durchschnittlich groß.",
  "Trägt häufig relativ einheitliche Kleidung.",
  "Hat meist wenig auffällige Ausrüstung am Körper.",
],

"Narcissa Malfoy": [
  "Wirkt eher schlank und durchschnittlich groß.",
  "Trägt häufig sehr gepflegte und formelle Kleidung.",
  "Ihr Haar fällt stärker auf als ihre Ausrüstung.",
],

"Barty Crouch Jr.": [
  "Wirkt eher schlank und durchschnittlich groß.",
  "Trägt meist relativ unauffällige Kleidung.",
  "Sein äußeres Erscheinungsbild kann sehr unterschiedlich wirken.",
],

"Fenrir Greyback": [
  "Wirkt eher groß und kräftig gebaut.",
  "Trägt häufig robuste und eher abgenutzte Kleidung.",
  "Sein Gesicht wirkt auffälliger als seine Ausrüstung.",
],

    // =========================
  // DC
  // =========================

  Aquaman: [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt häufig auffällige oder robuste Kleidung.",
    "Sein Erscheinungsbild wirkt eher körperlich als technisch geprägt.",
  ],

  Bane: [
    "Ist deutlich größer und kräftiger als viele andere.",
    "Trägt häufig schwere oder funktionale Kleidung.",
    "Ein Teil seines Gesichts ist oft verdeckt.",
  ],

  Batgirl: [
    "Wirkt eher schlank und beweglich.",
    "Trägt häufig körpernahe Schutzkleidung.",
    "Ihr Gesicht ist teilweise verdeckt.",
  ],

  Batman: [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt fast ausschließlich dunkle Kleidung.",
    "Ein großer Teil seines Körpers ist von fester Ausrüstung bedeckt.",
  ],

  "Black Canary": [
    "Wirkt eher schlank und athletisch.",
    "Trägt häufig dunkle oder körpernahe Kleidung.",
    "Hat meist wenig schwere Ausrüstung am Körper.",
  ],

  Catwoman: [
    "Wirkt eher schlank und sehr beweglich.",
    "Trägt häufig eng anliegende Kleidung.",
    "Ein Teil ihres Kopfes kann bedeckt sein.",
  ],

  Cyborg: [
    "Ist eher groß und kräftig gebaut.",
    "Ein großer Teil seines Körpers wirkt nicht natürlich.",
    "Seine Körperoberfläche besteht sichtbar aus festen Materialien.",
  ],

  Darkseid: [
    "Ist deutlich größer und breiter als ein normaler Mensch.",
    "Seine Körperform wirkt sehr massiv.",
    "Seine Oberfläche wirkt eher hart als weich.",
  ],

  Deathstroke: [
    "Wirkt groß und athletisch gebaut.",
    "Trägt häufig relativ schwere Schutzkleidung.",
    "Sein Gesicht ist bei Einsätzen meistens verdeckt.",
  ],

  "Green Arrow": [
    "Wirkt eher groß und athletisch.",
    "Trägt meist praktische Kleidung.",
    "Hat häufig mehrere kleinere Ausrüstungsteile am Körper.",
  ],

  "Green Lantern": [
    "Wirkt eher groß und athletisch.",
    "Trägt häufig sehr körpernahe Kleidung.",
    "Sein Outfit wirkt insgesamt eher leicht als schwer gepanzert.",
  ],

  "Harley Quinn": [
    "Wirkt eher schlank und beweglich.",
    "Trägt häufig auffällige Kleidung.",
    "Ihr Haar oder Kopfbereich fällt oft stärker auf als ihre Ausrüstung.",
  ],

  Joker: [
    "Wirkt eher groß und schlank.",
    "Trägt häufig auffällig ordentliche Kleidung.",
    "Sein Gesicht besitzt meist mehrere markante Details.",
  ],

  "Lex Luthor": [
    "Wirkt eher groß und durchschnittlich gebaut.",
    "Trägt häufig formelle Kleidung.",
    "Sein Kopfbereich wirkt meist sehr schlicht.",
  ],

  "Mr. Freeze": [
    "Wirkt mit seiner Ausrüstung eher breit und schwer.",
    "Trägt häufig feste Schutzkleidung.",
    "Der Kopfbereich ist oft teilweise von Ausrüstung umgeben.",
  ],

  Nightwing: [
    "Wirkt eher schlank und athletisch.",
    "Trägt meist dunkle und sehr körpernahe Kleidung.",
    "Hat vergleichsweise wenig schwere Ausrüstung am Körper.",
  ],

  Penguin: [
    "Ist eher klein und kräftig gebaut.",
    "Trägt häufig sehr formelle Kleidung.",
    "Sein Erscheinungsbild wirkt weniger sportlich als bei vielen anderen.",
  ],

  "Poison Ivy": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig auffällige oder körpernahe Kleidung.",
    "Ihr Haar fällt oft stärker auf als ihre Ausrüstung.",
  ],

  Robin: [
    "Ist eher klein und schlank gebaut.",
    "Trägt häufig körpernahe und leichte Kleidung.",
    "Sein Outfit besitzt meist mehrere auffällige Details.",
  ],

  Shazam: [
    "Wirkt groß und kräftig gebaut.",
    "Trägt häufig auffällige körpernahe Kleidung.",
    "Sein Outfit wirkt eher klassisch als technisch.",
  ],

  Supergirl: [
    "Wirkt eher klein bis durchschnittlich groß und schlank.",
    "Trägt häufig auffällige körpernahe Kleidung.",
    "Hat meist wenig sichtbare Ausrüstung am Körper.",
  ],

  Superman: [
    "Wirkt groß und deutlich athletisch gebaut.",
    "Trägt häufig sehr körpernahe Kleidung.",
    "Hat vergleichsweise wenig zusätzliche Ausrüstung.",
  ],

  "The Flash": [
    "Wirkt eher schlank und athletisch.",
    "Trägt fast vollständig körpernahe Kleidung.",
    "Das Gesicht ist teilweise bedeckt.",
  ],

  "The Riddler": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig eher auffällige Kleidung.",
    "Sein Erscheinungsbild wirkt weniger körperlich geschützt als bei vielen anderen.",
  ],

  "Wonder Woman": [
    "Wirkt eher groß und athletisch gebaut.",
    "Trägt meist relativ leichte Schutzkleidung.",
    "Mehrere feste Elemente sind direkt am Körper sichtbar.",
  ],

    // =========================
  // FLUCH DER KARIBIK
  // =========================

  "Angelica": [
    "Wirkt eher schlank und beweglich.",
    "Trägt meist praktische Kleidung mit mehreren Schichten.",
    "Hat vergleichsweise wenig schwere Ausrüstung am Körper.",
  ],

  "Barbossa": [
    "Wirkt eher groß und durchschnittlich kräftig.",
    "Trägt häufig mehrere robuste Kleidungsschichten.",
    "Sein Erscheinungsbild wirkt eher rau als gepflegt.",
  ],

  "Blackbeard": [
    "Wirkt groß und eher kräftig gebaut.",
    "Trägt überwiegend dunkle und schwere Kleidung.",
    "Sein Haar- und Bartbereich fällt stärker auf als seine Ausrüstung.",
  ],

  "Bootstrap Bill": [
    "Wirkt eher groß und schlank.",
    "Trägt meist deutlich abgenutzte Kleidung.",
    "Sein äußeres Erscheinungsbild wirkt eher mitgenommen.",
  ],

  "Captain Teague": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt mehrere dunkle und robuste Kleidungsschichten.",
    "Sein Gesicht wirkt durch Haare und Kopfbedeckung teilweise verdeckt.",
  ],

  "Cotton": [
    "Wirkt eher durchschnittlich groß und schlank.",
    "Trägt einfache und eher abgenutzte Kleidung.",
    "Im Gesichtsbereich gibt es ein auffälliges Detail.",
  ],

  "Cutler Beckett": [
    "Wirkt eher klein bis durchschnittlich groß.",
    "Trägt meistens sehr ordentliche und formelle Kleidung.",
    "Sein Erscheinungsbild wirkt kaum körperlich geschützt.",
  ],

  "Davy Jones": [
    "Wirkt eher groß und kräftig.",
    "Seine Körperoberfläche besitzt mehrere ungewöhnliche Strukturen.",
    "Sein Gesicht unterscheidet sich stark von einem normalen Menschen.",
  ],

  "Elizabeth Swann": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Ihre Kleidung kann sowohl leicht als auch deutlich aufwendiger wirken.",
    "Trägt meist wenig feste Ausrüstung am Körper.",
  ],

  "Giselle": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig auffälligere Kleidung.",
    "Ihr Erscheinungsbild wirkt weniger kampforientiert als bei vielen anderen.",
  ],

  "Ian Mercer": [
    "Wirkt eher groß und durchschnittlich gebaut.",
    "Trägt meistens eher ordentliche Kleidung.",
    "Seine Ausrüstung wirkt funktional, aber nicht besonders schwer.",
  ],

  "Jack Sparrow": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt sehr viele unterschiedliche Kleidungsschichten.",
    "Haare und kleinere Accessoires prägen sein Erscheinungsbild stark.",
  ],

  "James Norrington": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig sehr ordentliche oder einheitliche Kleidung.",
    "Sein Erscheinungsbild wirkt strukturierter als bei vielen anderen.",
  ],

  "Joshamee Gibbs": [
    "Wirkt eher durchschnittlich groß und kräftig.",
    "Trägt meist lockere und robuste Kleidung.",
    "Sein Erscheinungsbild wirkt eher praktisch als gepflegt.",
  ],

  "Lieutenant Theodore Groves": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig sehr einheitliche und ordentliche Kleidung.",
    "Hat meist wenig auffällige persönliche Ausrüstung.",
  ],

  "Marty": [
    "Ist deutlich kleiner als fast alle anderen Figuren.",
    "Trägt überwiegend einfache und praktische Kleidung.",
    "Seine Körperproportionen fallen stärker auf als seine Ausrüstung.",
  ],

  "Philip Swift": [
    "Wirkt eher groß und schlank.",
    "Trägt meist schlichte und eher ordentliche Kleidung.",
    "Hat vergleichsweise wenig sichtbare Ausrüstung.",
  ],

  "Pintel": [
    "Wirkt eher durchschnittlich groß und kräftig.",
    "Trägt meist abgenutzte und praktische Kleidung.",
    "Sein Erscheinungsbild wirkt eher grob als gepflegt.",
  ],

  "Ragetti": [
    "Wirkt eher groß und sehr schlank.",
    "Trägt einfache und eher abgenutzte Kleidung.",
    "Im Gesichtsbereich gibt es ein auffälliges körperliches Detail.",
  ],

  "Scrum": [
    "Wirkt eher durchschnittlich groß und kräftig.",
    "Trägt meist mehrere lockere Kleidungsschichten.",
    "Sein Erscheinungsbild wirkt wenig gepflegt.",
  ],

  "Syrena": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt vergleichsweise wenig schwere Kleidung.",
    "Ihr Erscheinungsbild wirkt weniger robust als bei vielen anderen.",
  ],

  "Tamara": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt eher leichte als schwere Kleidung.",
    "Ihr äußeres Erscheinungsbild wirkt zunächst relativ unauffällig.",
  ],

  "Tia Dalma": [
    "Wirkt eher klein bis durchschnittlich groß.",
    "Trägt häufig mehrere lockere und ungewöhnliche Kleidungsschichten.",
    "Haare und kleinere Details prägen ihr Erscheinungsbild stark.",
  ],

  "Weatherby Swann": [
    "Wirkt eher groß und schlank.",
    "Trägt meistens sehr ordentliche und formelle Kleidung.",
    "Sein Erscheinungsbild wirkt kaum für körperliche Auseinandersetzungen ausgelegt.",
  ],

  "Will Turner": [
    "Wirkt eher groß und schlank-athletisch.",
    "Trägt meistens praktische Kleidung mit mehreren Schichten.",
    "Hat vergleichsweise wenig schwere Schutzkleidung am Körper.",
  ],

    // =========================
  // GAME OF THRONES
  // =========================

  "Arya Stark": [
    "Ist eher klein und schlank gebaut.",
    "Trägt häufig praktische und eher unauffällige Kleidung.",
    "Hat meist wenig schwere Ausrüstung am Körper.",
  ],

  "Bran Stark": [
    "Wirkt eher schlank gebaut.",
    "Trägt meistens einfache und eher warme Kleidung.",
    "Sein Erscheinungsbild wirkt weniger kampforientiert als bei vielen anderen.",
  ],

  "Brienne von Tarth": [
    "Ist deutlich größer als viele andere Figuren.",
    "Wirkt körperlich kräftig und athletisch.",
    "Trägt häufig relativ schwere Schutzkleidung.",
  ],

  "Catelyn Stark": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig lange Kleidung mit mehreren Schichten.",
    "Hat meist wenig sichtbare Ausrüstung am Körper.",
  ],

  "Cersei Lannister": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig sehr aufwendige und gepflegte Kleidung.",
    "Ihr Erscheinungsbild wirkt eher elegant als praktisch.",
  ],

  "Daenerys Targaryen": [
    "Ist eher klein und schlank gebaut.",
    "Trägt häufig leichte Kleidung mit mehreren Schichten.",
    "Ihr Haar fällt meist stärker auf als ihre Ausrüstung.",
  ],

  "Davos Seaworth": [
    "Wirkt eher groß und durchschnittlich gebaut.",
    "Trägt häufig robuste und eher schlichte Kleidung.",
    "Sein Erscheinungsbild wirkt insgesamt eher praktisch.",
  ],

  Gendry: [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt häufig einfache und robuste Kleidung.",
    "Sein Erscheinungsbild wirkt stärker körperlich als elegant.",
  ],

  "Gregor Clegane": [
    "Ist außergewöhnlich groß und breit gebaut.",
    "Trägt häufig sehr schwere Schutzkleidung.",
    "Seine Silhouette wirkt deutlich massiver als bei fast allen anderen.",
  ],

  "Jaime Lannister": [
    "Wirkt eher groß und athletisch gebaut.",
    "Trägt häufig ordentliche oder feste Kleidung.",
    "Sein äußeres Erscheinungsbild kann sich im Laufe der Zeit deutlich verändern.",
  ],

  "Jon Snow": [
    "Wirkt eher durchschnittlich groß und athletisch.",
    "Trägt häufig dunkle und schwere Kleidungsschichten.",
    "Sein Erscheinungsbild wirkt eher robust als elegant.",
  ],

  "Jorah Mormont": [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt häufig feste oder robuste Kleidung.",
    "Sein Erscheinungsbild wirkt deutlich kampferprobt.",
  ],

  "Margaery Tyrell": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig sehr gepflegte und aufwendige Kleidung.",
    "Hat normalerweise wenig sichtbare Ausrüstung am Körper.",
  ],

  Melisandre: [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig lange Kleidung in ähnlichen Farbtönen.",
    "Ihr Erscheinungsbild wirkt eher elegant als praktisch.",
  ],

  "Ned Stark": [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt häufig schwere und eher schlichte Kleidung.",
    "Sein Erscheinungsbild wirkt insgesamt wenig auffällig.",
  ],

  "Olenna Tyrell": [
    "Wirkt eher schmal gebaut.",
    "Trägt häufig sehr ordentliche und aufwendige Kleidung.",
    "Ihr Kopfbereich ist teilweise von Kleidung oder Schmuck umgeben.",
  ],

  "Petyr Baelish": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig sehr ordentliche Kleidung.",
    "Hat normalerweise kaum schwere Ausrüstung am Körper.",
  ],

  "Robb Stark": [
    "Wirkt eher groß und athletisch.",
    "Trägt häufig robuste Kleidung mit mehreren Schichten.",
    "Sein Erscheinungsbild wirkt eher praktisch als auffällig.",
  ],

  "Samwell Tarly": [
    "Wirkt körperlich eher kräftig als athletisch.",
    "Trägt häufig dunkle und schwere Kleidungsschichten.",
    "Seine Ausrüstung wirkt meist weniger umfangreich als bei anderen Kämpfern.",
  ],

  "Sandor Clegane": [
    "Ist deutlich größer und kräftiger als viele andere.",
    "Trägt häufig schwere und robuste Kleidung.",
    "Im Gesichtsbereich gibt es ein auffälliges körperliches Merkmal.",
  ],

  "Sansa Stark": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig lange und sehr gepflegte Kleidung.",
    "Ihr Erscheinungsbild wirkt eher elegant als kampforientiert.",
  ],

  "Theon Greyjoy": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig dunkle und praktische Kleidung.",
    "Sein äußeres Erscheinungsbild verändert sich im Laufe der Zeit deutlich.",
  ],

  Tormund: [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt häufig schwere und robuste Kleidung.",
    "Haare und Bart prägen sein Erscheinungsbild stärker als seine Ausrüstung.",
  ],

  "Tyrion Lannister": [
    "Ist deutlich kleiner als die meisten anderen Figuren.",
    "Trägt häufig eher ordentliche Kleidung.",
    "Seine Körpergröße fällt stärker auf als seine Ausrüstung.",
  ],

  Varys: [
    "Wirkt körperlich eher durchschnittlich gebaut.",
    "Trägt häufig lange und lockere Kleidung.",
    "Sein Kopfbereich wirkt meist sehr schlicht.",
  ],

      // =========================
  // HERR DER RINGE
  // =========================

  "Frodo Baggins": [
    "Ist deutlich kleiner als ein durchschnittlicher Mensch.",
    "Trägt meistens einfache und praktische Kleidung.",
    "Wirkt körperlich eher schmal als kräftig.",
  ],

  "Samwise Gamgee": [
    "Ist eher klein und etwas kräftiger gebaut.",
    "Trägt meistens robuste und einfache Kleidung.",
    "Hat häufig mehrere kleinere Dinge bei sich.",
  ],

  "Gandalf": [
    "Ist eher groß und schlank gebaut.",
    "Trägt meistens lange und lockere Kleidung.",
    "Haare und Bart prägen sein Erscheinungsbild stark.",
  ],

  "Aragorn": [
    "Wirkt eher groß und athletisch.",
    "Trägt häufig dunkle und robuste Kleidung.",
    "Sein Erscheinungsbild wirkt eher praktisch als gepflegt.",
  ],

  "Legolas": [
    "Ist eher groß und sehr schlank gebaut.",
    "Trägt meist leichte Kleidung mit viel Bewegungsfreiheit.",
    "Sein Haar fällt stärker auf als seine Schutzkleidung.",
  ],

  "Gimli": [
    "Ist deutlich kleiner und breiter als viele andere.",
    "Trägt häufig schwere und robuste Kleidung.",
    "Bart und Haare verdecken einen großen Teil seines Gesichts.",
  ],

  "Boromir": [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt häufig mehrere feste Kleidungsschichten.",
    "Sein Erscheinungsbild wirkt eher schwer als leicht.",
  ],

  "Merry": [
    "Ist deutlich kleiner als ein durchschnittlicher Mensch.",
    "Trägt meistens einfache Kleidung.",
    "Wirkt körperlich eher schmal und leicht.",
  ],

  "Pippin": [
    "Ist deutlich kleiner als ein durchschnittlicher Mensch.",
    "Trägt meist eher einfache und lockere Kleidung.",
    "Hat vergleichsweise wenig schwere Ausrüstung am Körper.",
  ],

  "Gollum": [
    "Ist eher klein und sehr schmal gebaut.",
    "Trägt nur sehr wenig sichtbare Kleidung.",
    "Seine Körperhaltung wirkt häufig ungewöhnlich.",
  ],

  "Sauron": [
    "Wirkt deutlich größer und massiver als ein normaler Mensch.",
    "Der Körper ist größtenteils von festen Materialien bedeckt.",
    "Das Gesicht ist kaum oder gar nicht sichtbar.",
  ],

  "Saruman": [
    "Ist eher groß und schlank.",
    "Trägt meistens lange und lockere Kleidung.",
    "Sein Haar und Bart sind auffälliger als seine Ausrüstung.",
  ],

  "Galadriel": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig lange und sehr leichte Kleidung.",
    "Ihr Erscheinungsbild wirkt eher elegant als robust.",
  ],

  "Elrond": [
    "Wirkt eher groß und schlank gebaut.",
    "Trägt häufig lange und sehr ordentliche Kleidung.",
    "Hat meist wenig schwere Ausrüstung am Körper.",
  ],

  "Arwen": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig lange und aufwendige Kleidung.",
    "Ihr Erscheinungsbild wirkt eher leicht als kampforientiert.",
  ],

  "Éowyn": [
    "Wirkt eher schlank und beweglich.",
    "Trägt je nach Situation leichte oder festere Kleidung.",
    "Ihr Haar fällt häufig stärker auf als ihre Ausrüstung.",
  ],

  "Théoden": [
    "Wirkt eher groß und durchschnittlich kräftig.",
    "Trägt häufig mehrere schwere Kleidungsschichten.",
    "Sein Haar- und Bartbereich fällt deutlich auf.",
  ],

  "Faramir": [
    "Wirkt eher groß und athletisch gebaut.",
    "Trägt häufig robuste und eher unauffällige Kleidung.",
    "Sein Outfit ist stärker auf Bewegung als auf Eleganz ausgelegt.",
  ],

  "Denethor": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig lange und eher formelle Kleidung.",
    "Hat meistens wenig sichtbare körperliche Ausrüstung.",
  ],

  "Éomer": [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt häufig feste und robuste Kleidung.",
    "Sein Erscheinungsbild wirkt deutlich kampforientiert.",
  ],

  "Treebeard": [
    "Ist deutlich größer als fast alle anderen Figuren.",
    "Seine Oberfläche wirkt sehr ungleichmäßig.",
    "Normale Kleidung ist äußerlich kaum erkennbar.",
  ],

  "Witch-king of Angmar": [
    "Wirkt eher groß und breit.",
    "Der Körper ist fast vollständig von dunklen Materialien bedeckt.",
    "Das Gesicht ist normalerweise nicht sichtbar.",
  ],

  "Gríma Wormtongue": [
    "Wirkt eher schlank und wenig kräftig.",
    "Trägt häufig dunkle und lange Kleidung.",
    "Sein Erscheinungsbild wirkt weniger kampforientiert als bei vielen anderen.",
  ],

  "Haldir": [
    "Wirkt eher groß und schlank.",
    "Trägt leichte, aber teilweise feste Kleidung.",
    "Sein Erscheinungsbild wirkt insgesamt sehr ordentlich.",
  ],

  "Bilbo Baggins": [
    "Ist deutlich kleiner als ein durchschnittlicher Mensch.",
    "Trägt meistens eher ordentliche und einfache Kleidung.",
    "Hat vergleichsweise wenig auffällige Ausrüstung am Körper.",
  ],

    // =========================
  // DER HOBBIT
  // =========================

  "Thorin Oakenshield": [
    "Ist eher klein und kräftig gebaut.",
    "Trägt häufig mehrere robuste Kleidungsschichten.",
    "Sein Erscheinungsbild wirkt eher schwer als leicht.",
  ],

  Balin: [
    "Ist eher klein und kräftig gebaut.",
    "Trägt häufig warme und robuste Kleidung.",
    "Haare und Bart prägen sein Erscheinungsbild stark.",
  ],

  Dwalin: [
    "Ist eher klein, aber sehr breit gebaut.",
    "Trägt häufig schwere und robuste Kleidung.",
    "Sein Erscheinungsbild wirkt deutlich kräftiger als bei vielen anderen.",
  ],

  "Fíli": [
    "Ist eher klein und athletisch gebaut.",
    "Trägt meist praktische Kleidung mit mehreren Schichten.",
    "Hat vergleichsweise wenig schwere Ausrüstung am Körper.",
  ],

  "Kíli": [
    "Ist eher klein und schlank-athletisch.",
    "Trägt häufig eher leichte und praktische Kleidung.",
    "Sein Erscheinungsbild wirkt beweglicher als bei vielen anderen.",
  ],

  Bofur: [
    "Ist eher klein und kräftig gebaut.",
    "Trägt meist robuste und eher lockere Kleidung.",
    "Sein Kopfbereich ist häufig teilweise bedeckt.",
  ],

  Bombur: [
    "Ist eher klein und sehr breit gebaut.",
    "Trägt häufig mehrere schwere Kleidungsschichten.",
    "Seine Körperform fällt stärker auf als seine Ausrüstung.",
  ],

  Bifur: [
    "Ist eher klein und kräftig gebaut.",
    "Trägt häufig robuste und einfache Kleidung.",
    "Im Kopfbereich gibt es ein auffälliges Detail.",
  ],

  "Óin": [
    "Ist eher klein und kräftig gebaut.",
    "Trägt meistens mehrere warme Kleidungsschichten.",
    "Bart und Haare prägen sein Erscheinungsbild stark.",
  ],

  "Glóin": [
    "Ist eher klein und breit gebaut.",
    "Trägt häufig schwere und robuste Kleidung.",
    "Sein Bart fällt stärker auf als seine Ausrüstung.",
  ],

  Nori: [
    "Ist eher klein und schlank gebaut.",
    "Trägt häufig mehrere praktische Kleidungsschichten.",
    "Sein Haar wirkt auffälliger als bei vielen anderen.",
  ],

  Dori: [
    "Ist eher klein und kräftig gebaut.",
    "Trägt meist mehrere ordentliche Kleidungsschichten.",
    "Sein Erscheinungsbild wirkt eher gepflegt als rau.",
  ],

  Ori: [
    "Ist eher klein und schmal gebaut.",
    "Trägt meist eher leichte und einfache Kleidung.",
    "Wirkt körperlich weniger kräftig als viele andere.",
  ],

  Bard: [
    "Wirkt eher groß und schlank-athletisch.",
    "Trägt häufig robuste und eher unauffällige Kleidung.",
    "Sein Erscheinungsbild wirkt eher praktisch als auffällig.",
  ],

  Thranduil: [
    "Wirkt eher groß und sehr schlank.",
    "Trägt häufig lange und aufwendige Kleidung.",
    "Sein Erscheinungsbild wirkt deutlich eleganter als bei vielen anderen.",
  ],

  Tauriel: [
    "Wirkt eher schlank und sehr beweglich.",
    "Trägt meist leichte und körpernahe Kleidung.",
    "Hat vergleichsweise wenig schwere Ausrüstung am Körper.",
  ],

  Azog: [
    "Ist deutlich größer und kräftiger als viele andere.",
    "Sein Körper wirkt sehr breit und robust.",
    "Seine Körperoberfläche besitzt mehrere auffällige Merkmale.",
  ],

  Bolg: [
    "Ist groß und sehr kräftig gebaut.",
    "Trägt häufig schwere und grobe Ausrüstung.",
    "Sein Erscheinungsbild wirkt insgesamt sehr massiv.",
  ],

  Smaug: [
    "Ist deutlich größer als fast alle anderen Figuren.",
    "Seine Körperoberfläche wirkt hart und ungleichmäßig.",
    "Normale Kleidung ist äußerlich nicht erkennbar.",
  ],

  Beorn: [
    "Ist eher groß und sehr kräftig gebaut.",
    "Trägt meist eher einfache und robuste Kleidung.",
    "Haare und Bart fallen stärker auf als seine Ausrüstung.",
  ],

  Radagast: [
    "Wirkt eher groß und schlank.",
    "Trägt häufig mehrere lange und lockere Kleidungsschichten.",
    "Sein Erscheinungsbild wirkt eher ungeordnet als gepflegt.",
  ],

  "Master of Lake-town": [
    "Wirkt eher durchschnittlich groß und kräftig.",
    "Trägt häufig auffällige und eher formelle Kleidung.",
    "Sein Erscheinungsbild wirkt weniger kampforientiert als bei vielen anderen.",
  ],

  Alfrid: [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt meist eher ordentliche Kleidung.",
    "Sein Erscheinungsbild wirkt körperlich wenig robust.",
  ],

  "Dáin Ironfoot": [
    "Ist eher klein und sehr kräftig gebaut.",
    "Trägt häufig schwere und feste Ausrüstung.",
    "Seine Silhouette wirkt deutlich breiter als bei vielen anderen.",
  ],

  Necromancer: [
    "Wirkt eher groß und schlank.",
    "Sein Körper ist häufig von dunklen Formen umgeben.",
    "Normale Kleidung ist nur schwer eindeutig zu erkennen.",
  ],

    // =========================
  // THE BOYS
  // =========================

  Homelander: [
    "Wirkt groß und athletisch gebaut.",
    "Trägt häufig sehr körpernahe Kleidung.",
    "Sein Erscheinungsbild wirkt eher sauber und auffällig.",
  ],

  "Billy Butcher": [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt häufig dunkle und robuste Kleidung.",
    "Sein Erscheinungsbild wirkt eher rau als gepflegt.",
  ],

  "Hughie Campbell": [
    "Wirkt eher groß und schlank.",
    "Trägt meistens eher alltägliche Kleidung.",
    "Hat vergleichsweise wenig sichtbare Ausrüstung am Körper.",
  ],

  Starlight: [
    "Wirkt eher schlank und athletisch.",
    "Trägt häufig auffällige und körpernahe Kleidung.",
    "Ihr Erscheinungsbild wirkt eher hell als düster.",
  ],

  "Queen Maeve": [
    "Wirkt groß und athletisch gebaut.",
    "Trägt häufig körpernahe Schutzkleidung.",
    "Ihr Outfit wirkt eher fest als alltäglich.",
  ],

  "A-Train": [
    "Wirkt eher schlank und sehr athletisch.",
    "Trägt meist eng anliegende Kleidung.",
    "Sein Outfit wirkt stark auf Beweglichkeit ausgelegt.",
  ],

  "The Deep": [
    "Wirkt groß und athletisch gebaut.",
    "Trägt häufig sehr körpernahe Kleidung.",
    "Sein äußeres Erscheinungsbild wirkt eher glatt als robust.",
  ],

  "Black Noir": [
    "Wirkt eher groß und athletisch.",
    "Trägt fast ausschließlich dunkle Kleidung.",
    "Das Gesicht ist normalerweise vollständig verdeckt.",
  ],

  "Soldier Boy": [
    "Wirkt groß und kräftig gebaut.",
    "Trägt häufig feste und eher robuste Kleidung.",
    "Sein Erscheinungsbild wirkt eher klassisch als modern.",
  ],

  Stormfront: [
    "Wirkt eher schlank und athletisch.",
    "Trägt häufig dunkle und körpernahe Kleidung.",
    "Hat vergleichsweise wenig lose Ausrüstung am Körper.",
  ],

  Kimiko: [
    "Wirkt eher klein und schlank.",
    "Trägt häufig einfache und praktische Kleidung.",
    "Ihr Erscheinungsbild wirkt eher unauffällig.",
  ],

  Frenchie: [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig lockere oder dunkle Kleidung.",
    "Sein Erscheinungsbild wirkt eher individuell als ordentlich.",
  ],

  "Mother's Milk": [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt meistens praktische und relativ schlichte Kleidung.",
    "Sein Erscheinungsbild wirkt insgesamt eher robust.",
  ],

  "Victoria Neuman": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig sehr ordentliche oder formelle Kleidung.",
    "Hat meist wenig sichtbare Ausrüstung am Körper.",
  ],

  "Ashley Barrett": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig sehr gepflegte Kleidung.",
    "Ihr Erscheinungsbild wirkt eher geschäftlich als körperlich.",
  ],

  "Stan Edgar": [
    "Wirkt eher durchschnittlich groß und schlank.",
    "Trägt meistens sehr formelle Kleidung.",
    "Sein Erscheinungsbild wirkt kaum kampforientiert.",
  ],

  Ryan: [
    "Ist kleiner und schmaler gebaut als viele andere Figuren.",
    "Trägt überwiegend normale Alltagskleidung.",
    "Hat meistens keinerlei schwere Ausrüstung am Körper.",
  ],

  Lamplighter: [
    "Wirkt eher groß und schlank.",
    "Trägt häufig dunkle Kleidung.",
    "Sein Outfit wirkt eher funktional als auffällig.",
  ],

  Translucent: [
    "Wirkt körperlich eher durchschnittlich gebaut.",
    "Trägt meist wenig auffällige Kleidung oder Ausrüstung.",
    "Sein äußeres Erscheinungsbild kann sich stark verändern.",
  ],

  Mesmer: [
    "Wirkt eher durchschnittlich groß und gebaut.",
    "Trägt meistens normale Alltagskleidung.",
    "Sein Erscheinungsbild wirkt wenig kampforientiert.",
  ],

  Firecracker: [
    "Wirkt eher schlank und athletisch.",
    "Trägt häufig auffällige und körpernahe Kleidung.",
    "Ihr Outfit besitzt mehrere deutlich sichtbare Details.",
  ],

  "Sister Sage": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt meistens moderne oder eher ordentliche Kleidung.",
    "Hat vergleichsweise wenig schwere Ausrüstung am Körper.",
  ],

  "Tek Knight": [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt häufig sehr ordentliche oder auffällige Kleidung.",
    "Sein Erscheinungsbild wirkt eher gepflegt als robust.",
  ],

  Popclaw: [
    "Wirkt eher schlank und athletisch.",
    "Trägt häufig körpernahe oder sportliche Kleidung.",
    "Ihr Erscheinungsbild wirkt eher leicht als schwer ausgerüstet.",
  ],

  "Love Sausage": [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt meistens vergleichsweise einfache Kleidung.",
    "Sein Erscheinungsbild wirkt körperlich auffälliger als seine Ausrüstung.",
  ],

    // =========================
  // THE WALKING DEAD
  // =========================

  "Rick Grimes": [
    "Wirkt eher groß und durchschnittlich kräftig.",
    "Trägt häufig praktische und robuste Kleidung.",
    "Sein Erscheinungsbild wirkt eher funktional als auffällig.",
  ],

  "Daryl Dixon": [
    "Wirkt eher groß und schlank-athletisch.",
    "Trägt häufig dunkle und robuste Kleidung.",
    "Sein Erscheinungsbild wirkt eher rau als gepflegt.",
  ],

  Michonne: [
    "Wirkt eher schlank und athletisch.",
    "Trägt meist praktische Kleidung mit viel Bewegungsfreiheit.",
    "Hat häufig mehrere Ausrüstungsteile direkt am Körper.",
  ],

  Negan: [
    "Wirkt eher groß und schlank.",
    "Trägt häufig dunkle und eher robuste Kleidung.",
    "Sein Erscheinungsbild wirkt meist ziemlich markant.",
  ],

  "Glenn Rhee": [
    "Wirkt eher schlank und beweglich.",
    "Trägt meistens leichte und praktische Kleidung.",
    "Hat vergleichsweise wenig schwere Ausrüstung am Körper.",
  ],

  "Maggie Greene": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig praktische und eher schlichte Kleidung.",
    "Ihr Erscheinungsbild wirkt insgesamt eher funktional.",
  ],

  "Carol Peletier": [
    "Wirkt eher klein bis durchschnittlich groß.",
    "Trägt meistens einfache und praktische Kleidung.",
    "Hat vergleichsweise wenig auffällige Ausrüstung.",
  ],

  "Carl Grimes": [
    "Ist eher klein und schmal gebaut.",
    "Trägt häufig einfache und praktische Kleidung.",
    "Sein Kopfbereich ist teilweise öfter bedeckt.",
  ],

  "Shane Walsh": [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt häufig praktische Kleidung.",
    "Sein Erscheinungsbild wirkt eher robust als elegant.",
  ],

  "Hershel Greene": [
    "Wirkt eher groß und schlank.",
    "Trägt meistens einfache und eher klassische Kleidung.",
    "Sein Haar- und Bartbereich fällt stärker auf als seine Ausrüstung.",
  ],

  "The Governor": [
    "Wirkt eher groß und durchschnittlich gebaut.",
    "Trägt häufig praktische oder eher ordentliche Kleidung.",
    "Im Gesichtsbereich gibt es ein auffälliges Detail.",
  ],

  "Abraham Ford": [
    "Wirkt groß und kräftig gebaut.",
    "Trägt häufig robuste und funktionale Kleidung.",
    "Sein Haar fällt oft stärker auf als seine Ausrüstung.",
  ],

  "Rosita Espinosa": [
    "Wirkt eher schlank und athletisch.",
    "Trägt häufig körpernahe oder praktische Kleidung.",
    "Hat meist mehrere kleinere Ausrüstungsteile am Körper.",
  ],

  "Eugene Porter": [
    "Wirkt eher durchschnittlich groß und kräftig.",
    "Trägt meistens eher einfache Kleidung.",
    "Sein Haar gehört zu den auffälligeren äußeren Merkmalen.",
  ],

  "Sasha Williams": [
    "Wirkt eher schlank und athletisch.",
    "Trägt häufig praktische und eher dunkle Kleidung.",
    "Hat meist wenig schwere Schutzkleidung am Körper.",
  ],

  "Tyreese Williams": [
    "Wirkt groß und deutlich kräftig gebaut.",
    "Trägt meistens robuste und praktische Kleidung.",
    "Seine Körperform fällt stärker auf als seine Ausrüstung.",
  ],

  "Morgan Jones": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig praktische Kleidung mit mehreren Schichten.",
    "Seine Ausrüstung wirkt insgesamt eher leicht.",
  ],

  "Gabriel Stokes": [
    "Wirkt eher durchschnittlich groß und schlank.",
    "Trägt teilweise deutlich ordentlichere Kleidung als andere.",
    "Sein Erscheinungsbild wirkt nicht immer kampforientiert.",
  ],

  Aaron: [
    "Wirkt eher groß und durchschnittlich gebaut.",
    "Trägt meistens praktische und relativ unauffällige Kleidung.",
    "Sein äußeres Erscheinungsbild verändert sich im Laufe der Zeit etwas.",
  ],

  Jesus: [
    "Wirkt eher schlank und beweglich.",
    "Trägt häufig mehrere lockere Kleidungsschichten.",
    "Haare und Bart prägen sein Erscheinungsbild deutlich.",
  ],

  Ezekiel: [
    "Wirkt eher groß und durchschnittlich kräftig.",
    "Trägt häufig auffälligere Kleidung als viele andere.",
    "Sein Haar fällt stark auf.",
  ],

  Alpha: [
    "Wirkt eher klein bis durchschnittlich groß.",
    "Trägt häufig einfache und eher dunkle Kleidung.",
    "Ihr Kopfbereich wirkt meist sehr schlicht.",
  ],

  Beta: [
    "Ist deutlich größer und breiter als viele andere.",
    "Trägt häufig schwere und dunkle Kleidung.",
    "Sein Gesicht ist häufig teilweise oder vollständig verdeckt.",
  ],

  "Merle Dixon": [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt häufig robuste und eher abgenutzte Kleidung.",
    "Ein Teil seines Körpers weist ein auffälliges Merkmal auf.",
  ],

  Andrea: [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig praktische und eher leichte Kleidung.",
    "Hat meist wenig schwere Ausrüstung am Körper.",
  ],

    // =========================
  // JURASSIC PARK / WORLD
  // =========================

  "Alan Grant": [
    "Wirkt eher groß und schlank gebaut.",
    "Trägt meistens praktische und eher leichte Kleidung.",
    "Sein Erscheinungsbild wirkt eher funktional als auffällig.",
  ],

  "Ellie Sattler": [
    "Wirkt eher schlank und beweglich.",
    "Trägt meistens praktische und eher leichte Kleidung.",
    "Hat vergleichsweise wenig schwere Ausrüstung am Körper.",
  ],

  "Ian Malcolm": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig dunkle und eher auffällige Kleidung.",
    "Sein Erscheinungsbild wirkt gepflegter als bei vielen anderen.",
  ],

  "John Hammond": [
    "Wirkt eher klein bis durchschnittlich groß.",
    "Trägt häufig sehr ordentliche und helle Kleidung.",
    "Sein Erscheinungsbild wirkt kaum körperlich belastbar.",
  ],

  "Lex Murphy": [
    "Ist eher klein und schmal gebaut.",
    "Trägt meistens einfache Alltagskleidung.",
    "Hat kaum sichtbare Ausrüstung am Körper.",
  ],

  "Tim Murphy": [
    "Ist eher klein und schmal gebaut.",
    "Trägt meistens einfache Alltagskleidung.",
    "Sein Erscheinungsbild wirkt wenig kampforientiert.",
  ],

  "Dennis Nedry": [
    "Wirkt eher kräftig gebaut.",
    "Trägt meistens eher einfache und funktionale Kleidung.",
    "Sein Erscheinungsbild wirkt weniger athletisch als bei vielen anderen.",
  ],

  "Robert Muldoon": [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt häufig robuste und praktische Kleidung.",
    "Sein Erscheinungsbild wirkt deutlich einsatzorientiert.",
  ],

  "Henry Wu": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig ordentliche oder eher formelle Kleidung.",
    "Hat meistens wenig sichtbare Ausrüstung am Körper.",
  ],

  "Ray Arnold": [
    "Wirkt eher groß und durchschnittlich gebaut.",
    "Trägt meistens praktische und eher schlichte Kleidung.",
    "Sein Erscheinungsbild wirkt eher technisch als körperlich geprägt.",
  ],

  "Donald Gennaro": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig sehr formelle Kleidung.",
    "Sein Erscheinungsbild wirkt wenig robust.",
  ],

  "Owen Grady": [
    "Wirkt eher groß und athletisch gebaut.",
    "Trägt häufig praktische und robuste Kleidung.",
    "Hat meist mehrere kleinere Ausrüstungsteile am Körper.",
  ],

  "Claire Dearing": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig sehr ordentliche Kleidung.",
    "Ihr Erscheinungsbild wirkt eher gepflegt als robust.",
  ],

  "Maisie Lockwood": [
    "Ist eher klein und schmal gebaut.",
    "Trägt überwiegend normale Alltagskleidung.",
    "Hat kaum auffällige Ausrüstung am Körper.",
  ],

  "Zach Mitchell": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt meistens einfache Alltagskleidung.",
    "Sein Erscheinungsbild wirkt eher unauffällig.",
  ],

  "Gray Mitchell": [
    "Ist eher klein und schmal gebaut.",
    "Trägt meistens einfache Alltagskleidung.",
    "Hat vergleichsweise wenig auffällige äußere Merkmale.",
  ],

  "Barry Sembène": [
    "Wirkt eher groß und athletisch gebaut.",
    "Trägt meistens robuste und praktische Kleidung.",
    "Sein Erscheinungsbild wirkt stark auf Bewegung ausgelegt.",
  ],

  "Simon Masrani": [
    "Wirkt eher groß und schlank.",
    "Trägt häufig sehr ordentliche oder elegante Kleidung.",
    "Hat meistens wenig sichtbare Ausrüstung am Körper.",
  ],

  "Vic Hoskins": [
    "Wirkt eher groß und kräftig gebaut.",
    "Trägt häufig praktische und robuste Kleidung.",
    "Sein Erscheinungsbild wirkt eher schwer als leicht.",
  ],

  "Franklin Webb": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt meistens praktische Alltagskleidung.",
    "Sein Erscheinungsbild wirkt wenig kampforientiert.",
  ],

  "Zia Rodriguez": [
    "Wirkt eher schlank und beweglich.",
    "Trägt häufig praktische und eher leichte Kleidung.",
    "Hat meist wenig schwere Ausrüstung am Körper.",
  ],

  "Eli Mills": [
    "Wirkt eher schlank und durchschnittlich groß.",
    "Trägt häufig sehr ordentliche Kleidung.",
    "Sein Erscheinungsbild wirkt eher geschäftlich als robust.",
  ],

  "Benjamin Lockwood": [
    "Wirkt eher schlank und körperlich wenig kräftig.",
    "Trägt häufig klassische und ordentliche Kleidung.",
    "Sein Erscheinungsbild wirkt kaum kampforientiert.",
  ],

  "Kayla Watts": [
    "Wirkt eher schlank und athletisch.",
    "Trägt häufig praktische und relativ robuste Kleidung.",
    "Ihr Erscheinungsbild wirkt eher funktional als elegant.",
  ],

  "Ramsay Cole": [
    "Wirkt eher groß und durchschnittlich gebaut.",
    "Trägt häufig ordentliche und eher moderne Kleidung.",
    "Hat vergleichsweise wenig auffällige Ausrüstung am Körper.",
  ],

};



function getRandomTip(character: string) {
  const tips = characterTips[character];

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
              "id, secret_word, spy_player_id, status, category"
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
    roundTip = getRandomTip(round.secret_word);
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

  window.location.href = "/lobby";
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