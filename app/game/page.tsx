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

  "Luke Skywalker": [
    "Ist grundsätzlich eher gutherzig.",
    "Muss im Laufe der Zeit viel dazulernen.",
    "Kann manchmal etwas impulsiv handeln.",
  ],

  "Darth Vader": [
    "Wirkt meistens sehr kontrolliert.",
    "Hat eine schwierige Vergangenheit.",
    "Ist von starken inneren Konflikten geprägt.",
  ],

  Yoda: [
    "Wirkt meistens ruhig.",
    "Hat sehr viel Erfahrung.",
    "Denkt häufig länger über Entscheidungen nach.",
  ],

  "Obi-Wan Kenobi": [
    "Wirkt meistens gelassen.",
    "Übernimmt oft Verantwortung für andere.",
    "Versucht auch unter Druck vernünftig zu bleiben.",
  ],

  "Leia Organa": [
    "Wirkt sehr selbstbewusst.",
    "Übernimmt gerne Verantwortung.",
    "Gibt auch in schwierigen Situationen nicht schnell auf.",
  ],

  "Han Solo": [
    "Wirkt ziemlich selbstsicher.",
    "Handelt manchmal spontan.",
    "Ist loyaler, als es zunächst wirkt.",
  ],

  Chewbacca: [
    "Ist seinen Freunden sehr loyal.",
    "Kann schnell emotional reagieren.",
    "Ist oft verlässlicher, als man zunächst erwartet.",
  ],

  "Anakin Skywalker": [
    "Ist sehr ehrgeizig.",
    "Lässt sich stark von seinen Gefühlen beeinflussen.",
    "Trifft manchmal impulsive Entscheidungen.",
  ],

  "R2-D2": [
    "Wirkt ziemlich neugierig.",
    "Hilft anderen häufig im richtigen Moment.",
    "Bleibt auch in schwierigen Situationen zuverlässig.",
  ],

  "C-3PO": [
    "Wirkt häufig etwas unsicher.",
    "Macht sich schnell Sorgen.",
    "Versucht gefährliche Situationen eher zu vermeiden.",
  ],

  Palpatine: [
    "Wirkt nach außen oft ruhig.",
    "Plant gerne langfristig.",
    "Zeigt anderen nicht sofort seine wahren Absichten.",
  ],

  "Boba Fett": [
    "Wirkt eher zurückhaltend.",
    "Geht meistens sehr zielgerichtet vor.",
    "Zeigt seine Gefühle nur selten.",
  ],

  Mandalorian: [
    "Wirkt eher zurückhaltend.",
    "Nimmt seine Aufgaben sehr ernst.",
    "Ist Menschen gegenüber zunächst eher vorsichtig.",
  ],

  Grogu: [
    "Wirkt eher ruhig.",
    "Ist seinen Begleitern sehr verbunden.",
    "Kann in wichtigen Momenten überraschend mutig sein.",
  ],

  "Ahsoka Tano": [
    "Wirkt selbstbewusst.",
    "Denkt gerne selbstständig.",
    "Hat aus schwierigen Erfahrungen viel gelernt.",
  ],

  "Mace Windu": [
    "Wirkt sehr kontrolliert.",
    "Ist stark von seinen Prinzipien geprägt.",
    "Nimmt seine Verantwortung sehr ernst.",
  ],

  "Kylo Ren": [
    "Wirkt emotional.",
    "Hat mit inneren Konflikten zu kämpfen.",
    "Möchte häufig stärker wirken, als er sich fühlt.",
  ],

  Rey: [
    "Ist ziemlich neugierig.",
    "Lernt schnell aus neuen Erfahrungen.",
    "Sucht lange nach ihrem eigenen Platz.",
  ],

  Finn: [
    "Wirkt grundsätzlich freundlich.",
    "Muss einige schwierige Entscheidungen treffen.",
    "Zeigt oft mehr Mut, als er selbst erwartet.",
  ],

  "Jabba the Hutt": [
    "Wirkt ziemlich selbstsicher.",
    "Ist an Einfluss und Macht gewöhnt.",
    "Denkt häufig zuerst an den eigenen Vorteil.",
  ],

  "Count Dooku": [
    "Wirkt sehr kontrolliert.",
    "Ist von seinen eigenen Ansichten stark überzeugt.",
    "Tritt meistens ziemlich selbstsicher auf.",
  ],

  "General Grievous": [
    "Wirkt sehr entschlossen.",
    "Kann schnell aggressiv reagieren.",
    "Ist stark auf das Erreichen seiner Ziele fokussiert.",
  ],

  "Padmé Amidala": [
    "Wirkt sehr selbstbewusst.",
    "Übernimmt früh viel Verantwortung.",
    "Versucht Konflikte häufig vernünftig zu lösen.",
  ],

  "Qui-Gon Jinn": [
    "Wirkt meistens ruhig.",
    "Vertraut stark auf die eigene Einschätzung.",
    "Geht manchmal bewusst seinen eigenen Weg.",
  ],

  "Lando Calrissian": [
    "Wirkt ziemlich selbstsicher.",
    "Kann sehr charmant auftreten.",
    "Passt sich schnell an neue Situationen an.",
  ],

  // =========================
  // MARVEL
  // =========================

  "Spider-Man": [
    "Wirkt häufig ziemlich locker.",
    "Übernimmt Verantwortung, obwohl es ihm nicht immer leichtfällt.",
    "Versucht meistens das Richtige zu tun.",
  ],

  "Iron Man": [
    "Wirkt sehr selbstsicher.",
    "Verlässt sich stark auf seine eigenen Fähigkeiten.",
    "Kann manchmal ziemlich impulsiv handeln.",
  ],

  Thor: [
    "Wirkt sehr selbstbewusst.",
    "Ist stark von Loyalität geprägt.",
    "Muss im Laufe der Zeit einiges dazulernen.",
  ],

  Hulk: [
    "Hat Schwierigkeiten, seine Gefühle immer zu kontrollieren.",
    "Ist seinen Freunden grundsätzlich loyal.",
    "Kann sehr unterschiedlich auf Stress reagieren.",
  ],

  "Captain America": [
    "Wirkt sehr zuverlässig.",
    "Hat klare Vorstellungen von richtig und falsch.",
    "Übernimmt häufig Verantwortung für andere.",
  ],

  "Black Widow": [
    "Wirkt sehr kontrolliert.",
    "Beobachtet andere Menschen genau.",
    "Spricht nicht gerne über ihre Vergangenheit.",
  ],

  Hawkeye: [
    "Wirkt eher ruhig.",
    "Ist seinen Freunden sehr loyal.",
    "Verlässt sich stark auf Erfahrung und Konzentration.",
  ],

  "Doctor Strange": [
    "Wirkt ziemlich selbstsicher.",
    "Musste seine Sicht auf vieles verändern.",
    "Verlässt sich stark auf sein eigenes Wissen.",
  ],

  "Black Panther": [
    "Wirkt meistens ruhig.",
    "Trägt viel Verantwortung.",
    "Ist stark von Pflicht und Loyalität geprägt.",
  ],

  "Scarlet Witch": [
    "Wirkt häufig eher zurückhaltend.",
    "Hat eine sehr schwierige Vergangenheit.",
    "Lässt sich teilweise stark von Gefühlen beeinflussen.",
  ],

  Vision: [
    "Wirkt meistens sehr ruhig.",
    "Denkt häufig sehr rational.",
    "Versucht andere Menschen besser zu verstehen.",
  ],

  "Ant-Man": [
    "Wirkt ziemlich locker.",
    "Ist seinen Angehörigen sehr verbunden.",
    "Unterschätzt sich manchmal selbst.",
  ],

  "Captain Marvel": [
    "Wirkt sehr selbstbewusst.",
    "Ist ziemlich unabhängig.",
    "Lässt sich nur schwer einschüchtern.",
  ],

  Deadpool: [
    "Wirkt sehr locker.",
    "Handelt häufig impulsiv.",
    "Nimmt viele Situationen weniger ernst als andere.",
  ],

  Wolverine: [
    "Wirkt oft eher grimmig.",
    "Hat schon sehr viel erlebt.",
    "Ist bestimmten Menschen gegenüber extrem loyal.",
  ],

  Loki: [
    "Wirkt sehr selbstsicher.",
    "Ist nicht immer leicht einzuschätzen.",
    "Hat ein kompliziertes Verhältnis zu seiner Vergangenheit.",
  ],

  Thanos: [
    "Wirkt meistens sehr ruhig.",
    "Ist von seinem eigenen Ziel stark überzeugt.",
    "Lässt sich nur schwer von seiner Meinung abbringen.",
  ],

  "Star-Lord": [
    "Wirkt ziemlich locker.",
    "Handelt häufiger spontan.",
    "Ist seinen Freunden stärker verbunden, als er manchmal zeigt.",
  ],

  Groot: [
    "Wirkt eher ruhig.",
    "Ist seinen Freunden sehr loyal.",
    "Kann in wichtigen Momenten überraschend mutig sein.",
  ],

  Rocket: [
    "Wirkt ziemlich selbstsicher.",
    "Kann schnell gereizt reagieren.",
    "Ist seinen Freunden stärker verbunden, als er zugibt.",
  ],

  Gamora: [
    "Wirkt meistens ernst.",
    "Ist sehr diszipliniert.",
    "Hat eine schwierige Vergangenheit hinter sich.",
  ],

  Drax: [
    "Wirkt sehr direkt.",
    "Ist seinen Freunden stark verbunden.",
    "Kann manchmal impulsiv handeln.",
  ],

  Venom: [
    "Kann sehr impulsiv reagieren.",
    "Ist nicht immer leicht einzuschätzen.",
    "Entwickelt mit der Zeit stärkere Bindungen zu anderen.",
  ],

  "Moon Knight": [
    "Wirkt häufig eher ernst.",
    "Hat mit persönlichen Konflikten zu kämpfen.",
    "Ist für andere nicht immer leicht einzuschätzen.",
  ],

  Daredevil: [
    "Wirkt meistens ernst.",
    "Hat einen starken Sinn für Gerechtigkeit.",
    "Geht trotz persönlicher Probleme seinen Weg weiter.",
  ],

  // =========================
  // HARRY POTTER
  // =========================

  "Harry Potter": [
    "Ist seinen Freunden sehr loyal.",
    "Handelt manchmal ziemlich impulsiv.",
    "Übernimmt Verantwortung, obwohl er sie nicht immer möchte.",
  ],

  "Hermine Granger": [
    "Ist sehr ehrgeizig.",
    "Bereitet sich gerne gut vor.",
    "Hilft ihren Freunden auch in schwierigen Situationen.",
  ],

  "Ron Weasley": [
    "Wirkt häufig ziemlich locker.",
    "Ist seinen Freunden sehr loyal.",
    "Kann manchmal etwas unsicher sein.",
  ],

  "Albus Dumbledore": [
    "Wirkt meistens sehr ruhig.",
    "Hat sehr viel Erfahrung.",
    "Verrät anderen nicht immer sofort alles, was er weiß.",
  ],

  "Severus Snape": [
    "Wirkt meistens sehr ernst.",
    "Zeigt seine Gefühle nur selten offen.",
    "Hat eine komplizierte Vergangenheit.",
  ],

  "Lord Voldemort": [
    "Ist sehr stark auf seine Ziele fokussiert.",
    "Lässt sich nur schwer von seiner Meinung abbringen.",
    "Hat große Schwierigkeiten mit Vertrauen.",
  ],

  "Draco Malfoy": [
    "Wirkt oft sehr selbstsicher.",
    "Ist stark von seinem Umfeld geprägt.",
    "Ist innerlich unsicherer, als er nach außen wirkt.",
  ],

  "Rubeus Hagrid": [
    "Wirkt grundsätzlich sehr freundlich.",
    "Ist seinen Freunden extrem loyal.",
    "Lässt sich manchmal von Begeisterung mitreißen.",
  ],

  "Sirius Black": [
    "Wirkt ziemlich selbstsicher.",
    "Ist seinen Freunden sehr loyal.",
    "Handelt manchmal impulsiv.",
  ],

  "Remus Lupin": [
    "Wirkt meistens ruhig.",
    "Ist anderen gegenüber verständnisvoll.",
    "Trägt lange persönliche Probleme mit sich herum.",
  ],

  "Minerva McGonagall": [
    "Wirkt sehr streng.",
    "Nimmt ihre Verantwortung ernst.",
    "Ist anderen gegenüber loyaler, als sie zunächst wirkt.",
  ],

  Dobby: [
    "Ist sehr loyal.",
    "Kann ziemlich emotional reagieren.",
    "Ist bereit, für andere große Risiken einzugehen.",
  ],

  "Neville Longbottom": [
    "Wirkt anfangs eher unsicher.",
    "Entwickelt mit der Zeit deutlich mehr Selbstvertrauen.",
    "Zeigt in wichtigen Situationen viel Mut.",
  ],

  "Luna Lovegood": [
    "Wirkt meistens ziemlich ruhig.",
    "Lässt sich von anderen Meinungen wenig beeinflussen.",
    "Behandelt andere Menschen häufig sehr freundlich.",
  ],

  "Ginny Weasley": [
    "Wirkt ziemlich selbstbewusst.",
    "Ist ihren Freunden und ihrer Familie sehr loyal.",
    "Lässt sich nicht leicht einschüchtern.",
  ],

  "Fred Weasley": [
    "Wirkt ziemlich locker.",
    "Nimmt Regeln nicht immer besonders ernst.",
    "Ist seiner Familie sehr verbunden.",
  ],

  "George Weasley": [
    "Wirkt ziemlich locker.",
    "Hat einen ausgeprägten Sinn für Humor.",
    "Ist seiner Familie sehr verbunden.",
  ],

  "Bellatrix Lestrange": [
    "Kann sehr impulsiv reagieren.",
    "Ist extrem von ihren Überzeugungen geprägt.",
    "Ist bestimmten Personen gegenüber außergewöhnlich loyal.",
  ],

  "Cedric Diggory": [
    "Wirkt selbstbewusst.",
    "Behandelt andere meistens fair.",
    "Wird von vielen Menschen respektiert.",
  ],

  "Peter Pettigrew": [
    "Wirkt häufig unsicher.",
    "Sucht Schutz bei stärkeren Personen.",
    "Denkt in gefährlichen Situationen zuerst an sich selbst.",
  ],

  "Dolores Umbridge": [
    "Wirkt nach außen sehr kontrolliert.",
    "Legt großen Wert auf Regeln und Ordnung.",
    "Möchte gerne Kontrolle über andere haben.",
  ],

  "Lucius Malfoy": [
    "Wirkt sehr selbstsicher.",
    "Legt großen Wert auf seinen gesellschaftlichen Einfluss.",
    "Denkt häufig strategisch.",
  ],

  "Arthur Weasley": [
    "Wirkt ziemlich freundlich.",
    "Ist seiner Familie sehr verbunden.",
    "Interessiert sich stark für neue Dinge.",
  ],

  "Molly Weasley": [
    "Ist sehr fürsorglich.",
    "Beschützt ihre Familie stark.",
    "Kann in wichtigen Situationen sehr entschlossen sein.",
  ],

  "Viktor Krum": [
    "Wirkt eher ruhig.",
    "Ist in seinem Bereich sehr talentiert.",
    "Steht teilweise im Mittelpunkt, obwohl er eher zurückhaltend ist.",
  ],

  // =========================
  // DC
  // =========================

  Batman: [
    "Wirkt eher zurückhaltend.",
    "Plant gerne im Voraus.",
    "Hat Schwierigkeiten, anderen vollständig zu vertrauen.",
  ],

  Superman: [
    "Wirkt sehr selbstbewusst.",
    "Hat einen starken Sinn für Gerechtigkeit.",
    "Versucht meistens das Gute in anderen zu sehen.",
  ],

  "Wonder Woman": [
    "Wirkt sehr entschlossen.",
    "Hat starke moralische Überzeugungen.",
    "Ist ihren Verbündeten sehr loyal.",
  ],

  Joker: [
    "Ist schwer vorhersehbar.",
    "Handelt häufig impulsiv.",
    "Nimmt ernste Situationen oft anders wahr als andere.",
  ],

  "The Flash": [
    "Wirkt ziemlich locker.",
    "Versucht häufig optimistisch zu bleiben.",
    "Ist seinen Freunden sehr verbunden.",
  ],

  Aquaman: [
    "Wirkt selbstbewusst.",
    "Trägt viel Verantwortung.",
    "Ist stark von seiner Herkunft geprägt.",
  ],

  "Green Lantern": [
    "Wirkt ziemlich selbstsicher.",
    "Muss häufig eigene Ängste überwinden.",
    "Übernimmt große Verantwortung.",
  ],

  Cyborg: [
    "Wirkt eher ruhig.",
    "Hat sich an große Veränderungen gewöhnen müssen.",
    "Ist seinen Freunden sehr loyal.",
  ],

  "Harley Quinn": [
    "Wirkt ziemlich locker.",
    "Handelt häufig sehr spontan.",
    "Ist emotional nicht immer leicht einzuschätzen.",
  ],

  Catwoman: [
    "Wirkt sehr selbstsicher.",
    "Geht häufig ihren eigenen Weg.",
    "Ist nicht immer eindeutig auf einer Seite.",
  ],

  Supergirl: [
    "Wirkt ziemlich selbstbewusst.",
    "Ist stark von ihrer Vergangenheit geprägt.",
    "Versucht ihren eigenen Platz zu finden.",
  ],

  Robin: [
    "Ist ziemlich ehrgeizig.",
    "Möchte sich häufig beweisen.",
    "Ist Menschen, denen er vertraut, sehr loyal.",
  ],

  Nightwing: [
    "Wirkt ziemlich selbstbewusst.",
    "Ist sehr unabhängig.",
    "Hat gelernt, seinen eigenen Weg zu gehen.",
  ],

  Batgirl: [
    "Wirkt selbstbewusst.",
    "Ist sehr zielstrebig.",
    "Verlässt sich stark auf ihren Verstand.",
  ],

  "Lex Luthor": [
    "Wirkt extrem selbstsicher.",
    "Hält sehr viel von den eigenen Fähigkeiten.",
    "Plant gerne mehrere Schritte voraus.",
  ],

  "The Riddler": [
    "Wirkt ziemlich selbstsicher.",
    "Möchte anderen seine Überlegenheit beweisen.",
    "Ist stark von Anerkennung geprägt.",
  ],

  Penguin: [
    "Wirkt ziemlich selbstsicher.",
    "Legt großen Wert auf Einfluss.",
    "Denkt häufig zuerst an den eigenen Vorteil.",
  ],

  "Poison Ivy": [
    "Wirkt sehr selbstbewusst.",
    "Ist stark von ihren Überzeugungen geprägt.",
    "Kann gegenüber bestimmten Personen sehr loyal sein.",
  ],

  Shazam: [
    "Wirkt häufig ziemlich locker.",
    "Muss erst lernen, mit Verantwortung umzugehen.",
    "Kann manchmal ziemlich impulsiv handeln.",
  ],

  Darkseid: [
    "Wirkt meistens sehr ruhig.",
    "Ist extrem auf Macht und Kontrolle fokussiert.",
    "Lässt sich kaum von seinem Ziel abbringen.",
  ],

  "Green Arrow": [
    "Wirkt ziemlich selbstbewusst.",
    "Ist stark von seinen Überzeugungen geprägt.",
    "Kann manchmal ziemlich direkt sein.",
  ],

  "Black Canary": [
    "Wirkt sehr selbstbewusst.",
    "Ist ausgesprochen entschlossen.",
    "Ist ihren Verbündeten sehr loyal.",
  ],

  Deathstroke: [
    "Wirkt sehr kontrolliert.",
    "Geht meist strategisch vor.",
    "Lässt sich nur schwer von seinem Ziel abbringen.",
  ],

  Bane: [
    "Wirkt sehr selbstsicher.",
    "Plant häufig strategisch.",
    "Will anderen seine Stärke beweisen.",
  ],

  "Mr. Freeze": [
    "Wirkt meistens sehr ruhig.",
    "Wird stark von einem persönlichen Ziel angetrieben.",
    "Zeigt seine Gefühle nur selten offen.",
  ],

  // =========================
  // FLUCH DER KARIBIK
  // =========================

  "Jack Sparrow": [
    "Wirkt sehr selbstsicher.",
    "Handelt häufig spontan.",
    "Kommt durch Improvisation oft überraschend weit.",
  ],

  "Will Turner": [
    "Wirkt eher ernst.",
    "Ist bestimmten Menschen sehr loyal.",
    "Lässt sich stark von persönlichen Zielen antreiben.",
  ],

  "Elizabeth Swann": [
    "Wirkt sehr selbstbewusst.",
    "Passt sich schnell an schwierige Situationen an.",
    "Lässt sich nicht leicht einschüchtern.",
  ],

  Barbossa: [
    "Wirkt sehr selbstsicher.",
    "Hat viel Erfahrung.",
    "Denkt häufig zuerst an den eigenen Vorteil.",
  ],

  "Davy Jones": [
    "Wirkt häufig sehr ernst.",
    "Ist stark von seiner Vergangenheit geprägt.",
    "Kann sehr nachtragend sein.",
  ],

  "Bootstrap Bill": [
    "Wirkt eher ernst.",
    "Ist seiner Familie stark verbunden.",
    "Trägt lange an vergangenen Entscheidungen.",
  ],

  "James Norrington": [
    "Wirkt sehr kontrolliert.",
    "Legt großen Wert auf Pflicht.",
    "Hat hohe Ansprüche an sich selbst.",
  ],

  "Joshamee Gibbs": [
    "Wirkt ziemlich locker.",
    "Ist seinen Freunden sehr loyal.",
    "Hat schon sehr viele ungewöhnliche Situationen erlebt.",
  ],

  "Cutler Beckett": [
    "Wirkt sehr kontrolliert.",
    "Plant gerne langfristig.",
    "Möchte möglichst viel Einfluss besitzen.",
  ],

  "Tia Dalma": [
    "Wirkt meistens ruhig.",
    "Ist für andere nicht leicht einzuschätzen.",
    "Verrät häufig nicht alles, was sie weiß.",
  ],

  "Weatherby Swann": [
    "Wirkt eher ernst.",
    "Ist seiner Familie sehr verbunden.",
    "Versucht schwierige Situationen eher vernünftig zu lösen.",
  ],

  Blackbeard: [
    "Wirkt sehr selbstsicher.",
    "Kann ziemlich einschüchternd auftreten.",
    "Denkt stark an das eigene Überleben.",
  ],

  Angelica: [
    "Wirkt ziemlich selbstbewusst.",
    "Ist nicht immer leicht einzuschätzen.",
    "Kann andere Menschen gut überzeugen.",
  ],

  "Philip Swift": [
    "Wirkt eher ruhig.",
    "Ist stark von seinen Überzeugungen geprägt.",
    "Versucht anderen gegenüber mitfühlend zu bleiben.",
  ],

  Syrena: [
    "Wirkt eher zurückhaltend.",
    "Vertraut anderen nur langsam.",
    "Zeigt bestimmten Personen gegenüber starke Loyalität.",
  ],

  Marty: [
    "Wirkt ziemlich selbstbewusst.",
    "Ist seiner Gruppe gegenüber loyal.",
    "Lässt sich von gefährlichen Situationen nicht leicht abschrecken.",
  ],

  Cotton: [
    "Wirkt eher ruhig.",
    "Ist ein verlässlicher Teil seiner Gruppe.",
    "Steht meistens nicht im Mittelpunkt.",
  ],

  Pintel: [
    "Wirkt eher locker.",
    "Handelt nicht immer besonders überlegt.",
    "Ist seinen Verbündeten meistens treu.",
  ],

  Ragetti: [
    "Wirkt manchmal etwas unsicher.",
    "Lässt sich relativ leicht beeinflussen.",
    "Hat gelegentlich überraschend kluge Momente.",
  ],

  Giselle: [
    "Wirkt ziemlich selbstbewusst.",
    "Sagt häufig direkt, was sie denkt.",
    "Lässt sich nicht gerne täuschen.",
  ],

  "Ian Mercer": [
    "Wirkt sehr kontrolliert.",
    "Geht meistens zielgerichtet vor.",
    "Arbeitet lieber im Hintergrund.",
  ],

  "Lieutenant Theodore Groves": [
    "Wirkt sehr pflichtbewusst.",
    "Bleibt meistens professionell.",
    "Zeigt auch gegenüber anderen Respekt.",
  ],

  "Captain Teague": [
    "Wirkt sehr selbstsicher.",
    "Hat sehr viel Erfahrung.",
    "Wird von anderen ernst genommen.",
  ],

  Scrum: [
    "Wirkt ziemlich locker.",
    "Passt sich schnell an neue Gruppen an.",
    "Handelt manchmal etwas chaotisch.",
  ],

  Tamara: [
    "Wirkt zunächst eher ruhig.",
    "Ist für andere nicht leicht einzuschätzen.",
    "Kann überraschend entschlossen handeln.",
  ],

  // =========================
  // GAME OF THRONES
  // =========================

  "Jon Snow": [
    "Wirkt meistens sehr ernst.",
    "Stellt Verantwortung oft über den eigenen Vorteil.",
    "Ist seinen Verbündeten sehr loyal.",
  ],

  "Daenerys Targaryen": [
    "Wirkt sehr entschlossen.",
    "Hat große Ziele.",
    "Ist stark von ihrer Vergangenheit und Herkunft geprägt.",
  ],

  "Tyrion Lannister": [
    "Wirkt sehr selbstbewusst.",
    "Verlässt sich stark auf seinen Verstand.",
    "Kann mit schwierigen Situationen erstaunlich gut umgehen.",
  ],

  "Arya Stark": [
    "Wirkt eher zurückhaltend.",
    "Ist sehr zielstrebig.",
    "Hat gelernt, sich an schwierige Situationen anzupassen.",
  ],

  "Sansa Stark": [
    "Wirkt zunehmend selbstbewusst.",
    "Beobachtet andere Menschen sehr genau.",
    "Hat sich durch schwierige Erfahrungen stark verändert.",
  ],

  "Bran Stark": [
    "Wirkt meistens sehr ruhig.",
    "Ist häufig sehr nachdenklich.",
    "Verändert sich im Laufe der Zeit stark.",
  ],

  "Cersei Lannister": [
    "Wirkt extrem selbstbewusst.",
    "Ist ihrer Familie stark verbunden.",
    "Möchte Kontrolle nur ungern abgeben.",
  ],

  "Jaime Lannister": [
    "Wirkt ziemlich selbstsicher.",
    "Hat eine komplizierte Vergangenheit.",
    "Verändert seine Sicht auf manches im Laufe der Zeit.",
  ],

  "Ned Stark": [
    "Wirkt sehr ernst.",
    "Hat starke moralische Prinzipien.",
    "Ist seiner Familie sehr verbunden.",
  ],

  "Robb Stark": [
    "Wirkt selbstbewusst.",
    "Übernimmt früh große Verantwortung.",
    "Lässt sich teilweise stark von seinen Gefühlen beeinflussen.",
  ],

  "Catelyn Stark": [
    "Wirkt meistens ernst.",
    "Ist ihrer Familie extrem verbunden.",
    "Trifft viele Entscheidungen aus Sorge um andere.",
  ],

  "Theon Greyjoy": [
    "Wirkt teilweise sehr selbstbewusst.",
    "Sucht stark nach Anerkennung.",
    "Hat große Probleme damit, seinen eigenen Platz zu finden.",
  ],

  "Brienne von Tarth": [
    "Wirkt sehr ernst.",
    "Ist ausgesprochen loyal.",
    "Nimmt eigene Versprechen sehr ernst.",
  ],

  "Samwell Tarly": [
    "Wirkt anfangs eher unsicher.",
    "Verlässt sich stark auf Wissen.",
    "Zeigt in wichtigen Situationen überraschend viel Mut.",
  ],

  "Davos Seaworth": [
    "Wirkt meistens ruhig.",
    "Ist sehr loyal.",
    "Versucht häufig vernünftige Entscheidungen zu treffen.",
  ],

  "Petyr Baelish": [
    "Wirkt sehr selbstsicher.",
    "Plant gerne mehrere Schritte voraus.",
    "Verfolgt seine Ziele häufig indirekt.",
  ],

  Varys: [
    "Wirkt meistens ruhig.",
    "Beobachtet andere Menschen genau.",
    "Arbeitet lieber mit Informationen als mit direkter Konfrontation.",
  ],

  "Sandor Clegane": [
    "Wirkt oft ziemlich grimmig.",
    "Spricht meistens sehr direkt.",
    "Zeigt seine Gefühle nur selten offen.",
  ],

  "Gregor Clegane": [
    "Wirkt sehr einschüchternd.",
    "Ist nicht für viel Mitgefühl bekannt.",
    "Geht häufig sehr direkt vor.",
  ],

  "Jorah Mormont": [
    "Wirkt meistens ernst.",
    "Ist bestimmten Menschen extrem loyal.",
    "Versucht Fehler aus seiner Vergangenheit wiedergutzumachen.",
  ],

  "Margaery Tyrell": [
    "Wirkt sehr selbstbewusst.",
    "Kann sehr charmant auftreten.",
    "Versteht gut, wie sie auf andere Menschen wirkt.",
  ],

  "Olenna Tyrell": [
    "Wirkt extrem selbstsicher.",
    "Sagt häufig sehr direkt, was sie denkt.",
    "Hat sehr viel Erfahrung im Umgang mit anderen.",
  ],

  Melisandre: [
    "Wirkt meistens ruhig.",
    "Ist stark von ihren Überzeugungen geprägt.",
    "Ist für andere nicht immer leicht einzuschätzen.",
  ],

  Tormund: [
    "Wirkt ziemlich selbstbewusst.",
    "Spricht häufig sehr direkt.",
    "Ist seinen Verbündeten gegenüber sehr loyal.",
  ],

  Gendry: [
    "Wirkt eher ruhig.",
    "Ist an harte Arbeit gewöhnt.",
    "Ist seinen Freunden gegenüber ziemlich loyal.",
  ],

    // =========================
  // HERR DER RINGE
  // =========================

  "Frodo Baggins": [
    "Wirkt eher zurückhaltend.",
    "Trägt lange eine große Verantwortung.",
    "Ist seinen Freunden sehr verbunden.",
  ],

  "Samwise Gamgee": [
    "Ist außergewöhnlich loyal.",
    "Gibt andere Menschen nicht schnell auf.",
    "Wirkt bodenständig und zuverlässig.",
  ],

  Gandalf: [
    "Wirkt meistens sehr ruhig.",
    "Hat enorm viel Erfahrung.",
    "Verrät anderen nicht immer sofort alles, was er weiß.",
  ],

  Aragorn: [
    "Wirkt meist ruhig und kontrolliert.",
    "Übernimmt nur ungern Verantwortung für seinen eigenen Vorteil.",
    "Ist seinen Verbündeten sehr loyal.",
  ],

  Legolas: [
    "Wirkt meistens sehr gelassen.",
    "Ist ausgesprochen aufmerksam.",
    "Bleibt auch in gefährlichen Situationen häufig ruhig.",
  ],

  Gimli: [
    "Spricht häufig ziemlich direkt.",
    "Ist stolz auf seine Herkunft.",
    "Kann anderen gegenüber überraschend loyal werden.",
  ],

  Boromir: [
    "Wirkt selbstbewusst.",
    "Trägt starken Druck durch seine Verantwortung.",
    "Lässt sich teilweise von seinen eigenen Sorgen beeinflussen.",
  ],

  Merry: [
    "Wirkt oft ziemlich locker.",
    "Ist neugieriger, als es zunächst scheint.",
    "Zeigt in wichtigen Situationen überraschend viel Mut.",
  ],

  Pippin: [
    "Wirkt häufig etwas unbeschwert.",
    "Ist ziemlich neugierig.",
    "Muss im Laufe der Zeit viel dazulernen.",
  ],

  Gollum: [
    "Ist für andere nur schwer einzuschätzen.",
    "Wird stark von einem bestimmten Wunsch beeinflusst.",
    "Hat große innere Konflikte.",
  ],

  Sauron: [
    "Ist extrem auf Macht fokussiert.",
    "Arbeitet häufig indirekt auf seine Ziele hin.",
    "Möchte möglichst viel Kontrolle besitzen.",
  ],

  Saruman: [
    "Wirkt sehr selbstsicher.",
    "Hält viel von seinem eigenen Wissen.",
    "Ist stark von Macht und Einfluss geprägt.",
  ],

  Galadriel: [
    "Wirkt meistens sehr ruhig.",
    "Hat außergewöhnlich viel Erfahrung.",
    "Kann andere Menschen sehr gut einschätzen.",
  ],

  Elrond: [
    "Wirkt sehr kontrolliert.",
    "Denkt häufig langfristig.",
    "Ist stark von vergangenen Erfahrungen geprägt.",
  ],

  Arwen: [
    "Wirkt eher ruhig.",
    "Ist bestimmten Menschen sehr loyal.",
    "Ist bereit, für persönliche Entscheidungen viel aufzugeben.",
  ],

  "Éowyn": [
    "Wirkt entschlossen.",
    "Möchte nicht unterschätzt werden.",
    "Ist bereit, große Risiken einzugehen.",
  ],

  "Théoden": [
    "Trägt viel Verantwortung.",
    "Verändert sich im Laufe der Geschichte deutlich.",
    "Ist seinem Volk stark verbunden.",
  ],

  Faramir: [
    "Wirkt eher ruhig.",
    "Denkt häufig vernünftiger als andere.",
    "Ist stark von seiner Familie und seiner Pflicht geprägt.",
  ],

  Denethor: [
    "Wirkt meistens sehr ernst.",
    "Steht unter enormem Druck.",
    "Lässt sich stark von seinen Sorgen beeinflussen.",
  ],

  "Éomer": [
    "Wirkt sehr selbstbewusst.",
    "Ist ausgesprochen loyal.",
    "Handelt in gefährlichen Situationen entschlossen.",
  ],

  Treebeard: [
    "Lässt sich mit Entscheidungen viel Zeit.",
    "Wirkt meistens sehr ruhig.",
    "Ist stark mit seiner Heimat verbunden.",
  ],

  "Witch-king of Angmar": [
    "Wirkt sehr einschüchternd.",
    "Ist stark auf ein bestimmtes Ziel fokussiert.",
    "Zeigt kaum persönliche Gefühle.",
  ],

  "Gríma Wormtongue": [
    "Wirkt eher unsicher.",
    "Arbeitet lieber über Einfluss als über direkte Konfrontation.",
    "Ist nicht immer offen mit seinen Absichten.",
  ],

    Haldir: [
    "Wirkt meistens sehr kontrolliert.",
    "Ist seiner Heimat und seinen Verbündeten stark verbunden.",
    "Handelt in gefährlichen Situationen ausgesprochen entschlossen.",
  ],

  "Bilbo Baggins": [
    "Wirkt zunächst eher gemütlich.",
    "Ist neugieriger, als er selbst erwartet.",
    "Wächst an ungewöhnlichen Erfahrungen.",
  ],

  // =========================
  // DER HOBBIT
  // =========================

  "Thorin Oakenshield": [
    "Wirkt sehr stolz.",
    "Fühlt sich stark seiner Herkunft verpflichtet.",
    "Kann sich sehr stark auf ein bestimmtes Ziel konzentrieren.",
  ],

  Balin: [
    "Wirkt meistens ruhig.",
    "Hat viel Erfahrung.",
    "Versucht häufig vernünftig auf andere einzuwirken.",
  ],

  Dwalin: [
    "Wirkt sehr entschlossen.",
    "Ist seinen Verbündeten ausgesprochen loyal.",
    "Geht in gefährlichen Situationen eher direkt vor.",
  ],

  "Fíli": [
    "Wirkt selbstbewusst.",
    "Ist seiner Familie sehr verbunden.",
    "Zeigt in gefährlichen Situationen viel Mut.",
  ],

  "Kíli": [
    "Wirkt häufig ziemlich locker.",
    "Ist seiner Familie sehr loyal.",
    "Handelt manchmal stärker nach seinen Gefühlen.",
  ],

  Bofur: [
    "Wirkt meistens ziemlich freundlich.",
    "Kann auch in schwierigen Situationen locker bleiben.",
    "Ist seiner Gruppe sehr verbunden.",
  ],

  Bombur: [
    "Wirkt häufig eher gemütlich.",
    "Ist seinen Begleitern gegenüber loyal.",
    "Steht selten freiwillig im Mittelpunkt.",
  ],

  Bifur: [
    "Wirkt eher zurückhaltend.",
    "Ist seiner Gruppe gegenüber zuverlässig.",
    "Handelt in gefährlichen Situationen entschlossener, als es zunächst wirkt.",
  ],

  "Óin": [
    "Wirkt meistens vernünftig.",
    "Hat innerhalb seiner Gruppe viel Erfahrung.",
    "Ist seinen Begleitern sehr verbunden.",
  ],

  "Glóin": [
    "Wirkt selbstbewusst.",
    "Ist stolz auf seine Herkunft.",
    "Kann ziemlich direkt seine Meinung sagen.",
  ],

  Nori: [
    "Wirkt etwas verschmitzt.",
    "Passt sich schnell an ungewöhnliche Situationen an.",
    "Ist innerhalb seiner Gruppe dennoch sehr loyal.",
  ],

  Dori: [
    "Wirkt verantwortungsbewusst.",
    "Kümmert sich häufig um andere.",
    "Ist seiner Familie besonders verbunden.",
  ],

  Ori: [
    "Wirkt eher ruhig.",
    "Beobachtet seine Umgebung aufmerksam.",
    "Ist weniger kampferfahren als einige seiner Begleiter.",
  ],

  Bard: [
    "Wirkt meistens ernst.",
    "Übernimmt Verantwortung für andere.",
    "Denkt häufig zuerst an die Sicherheit seiner Mitmenschen.",
  ],

  Thranduil: [
    "Wirkt sehr selbstsicher.",
    "Denkt häufig langfristig.",
    "Ist Fremden gegenüber zunächst eher vorsichtig.",
  ],

  Tauriel: [
    "Wirkt sehr entschlossen.",
    "Handelt teilweise gegen Erwartungen anderer.",
    "Ist Menschen, die ihr wichtig sind, sehr loyal.",
  ],

  Azog: [
    "Wirkt äußerst entschlossen.",
    "Verfolgt seine Ziele sehr hartnäckig.",
    "Kann außergewöhnlich rachsüchtig sein.",
  ],

  Bolg: [
    "Wirkt sehr aggressiv.",
    "Geht meist direkt gegen seine Gegner vor.",
    "Lässt sich nur schwer von seinem Ziel abbringen.",
  ],

  Smaug: [
    "Wirkt extrem selbstsicher.",
    "Hält sehr viel von der eigenen Stärke.",
    "Lässt sich gerne auf Gespräche ein, wenn er sich überlegen fühlt.",
  ],

  Beorn: [
    "Wirkt eher zurückhaltend.",
    "Ist Fremden gegenüber zunächst vorsichtig.",
    "Kann in wichtigen Situationen außergewöhnlich entschlossen handeln.",
  ],

  Radagast: [
    "Wirkt manchmal etwas eigenwillig.",
    "Ist stark mit der Natur verbunden.",
    "Unterschätzt Gefahren nicht so leicht, wie es zunächst wirkt.",
  ],

  "Master of Lake-town": [
    "Legt großen Wert auf seinen eigenen Einfluss.",
    "Denkt häufig zuerst an den persönlichen Vorteil.",
    "Wirkt nach außen selbstsicherer, als die Lage manchmal erlaubt.",
  ],

  Alfrid: [
    "Denkt häufig zuerst an sich selbst.",
    "Versucht gerne, sich mächtigeren Personen anzupassen.",
    "Geht gefährlichen Situationen lieber aus dem Weg.",
  ],

  "Dáin Ironfoot": [
    "Wirkt sehr selbstbewusst.",
    "Ist seiner Familie und seinem Volk stark verbunden.",
    "Geht Konflikten nicht besonders gerne aus dem Weg.",
  ],

  Necromancer: [
    "Arbeitet lange eher aus dem Verborgenen.",
    "Ist stark auf Macht und Kontrolle ausgerichtet.",
    "Zeigt anderen seine wahren Absichten nicht sofort.",
  ],

  // =========================
  // THE BOYS
  // =========================

  Homelander: [
    "Wirkt extrem selbstsicher.",
    "Möchte von anderen bewundert werden.",
    "Reagiert empfindlich darauf, Kontrolle zu verlieren.",
  ],

  "Billy Butcher": [
    "Wirkt sehr entschlossen.",
    "Verfolgt persönliche Ziele extrem hartnäckig.",
    "Vertraut anderen nur schwer.",
  ],

  "Hughie Campbell": [
    "Wirkt eher zurückhaltend.",
    "Muss im Laufe der Zeit deutlich mutiger werden.",
    "Ist Menschen, die ihm wichtig sind, sehr loyal.",
  ],

  Starlight: [
    "Wirkt selbstbewusst.",
    "Hat starke moralische Vorstellungen.",
    "Lässt sich zunehmend weniger von anderen kontrollieren.",
  ],

  "Queen Maeve": [
    "Wirkt oft eher distanziert.",
    "Hat viel Erfahrung mit öffentlichem Druck.",
    "Zeigt in wichtigen Situationen großen Mut.",
  ],

  "A-Train": [
    "Wirkt sehr selbstsicher.",
    "Ist stark von Anerkennung und Erfolg geprägt.",
    "Trifft unter Druck teilweise egoistische Entscheidungen.",
  ],

  "The Deep": [
    "Möchte unbedingt ernst genommen werden.",
    "Passt sich häufig stärkeren Personen an.",
    "Wirkt selbstbewusster, als er tatsächlich ist.",
  ],

  "Black Noir": [
    "Wirkt extrem ruhig.",
    "Spricht nur sehr wenig.",
    "Ist bei seinen Aufgaben ausgesprochen konsequent.",
  ],

  "Soldier Boy": [
    "Wirkt extrem selbstsicher.",
    "Ist stark von seiner Vergangenheit geprägt.",
    "Geht mit Konflikten häufig sehr direkt um.",
  ],

  Stormfront: [
    "Wirkt nach außen sehr selbstbewusst.",
    "Kann andere Menschen gezielt beeinflussen.",
    "Verbirgt lange wichtige Seiten ihrer Vergangenheit.",
  ],

  Kimiko: [
    "Wirkt eher zurückhaltend.",
    "Ist bestimmten Menschen ausgesprochen loyal.",
    "Kann in gefährlichen Situationen sehr entschlossen handeln.",
  ],

  Frenchie: [
    "Wirkt häufig ziemlich locker.",
    "Ist technisch und praktisch sehr einfallsreich.",
    "Ist seinen engsten Freunden stark verbunden.",
  ],

  "Mother's Milk": [
    "Wirkt verantwortungsbewusst.",
    "Versucht innerhalb seiner Gruppe Struktur zu bewahren.",
    "Ist stark von persönlichen Erfahrungen geprägt.",
  ],

  "Victoria Neuman": [
    "Wirkt nach außen sehr kontrolliert.",
    "Kann ihre wahren Absichten lange verbergen.",
    "Denkt häufig mehrere Schritte voraus.",
  ],

  "Ashley Barrett": [
    "Wirkt häufig angespannt.",
    "Steht stark unter dem Einfluss mächtigerer Personen.",
    "Versucht vor allem, ihre eigene Position zu sichern.",
  ],

  "Stan Edgar": [
    "Wirkt fast immer sehr ruhig.",
    "Lässt sich nur schwer einschüchtern.",
    "Denkt ausgesprochen strategisch.",
  ],

  Ryan: [
    "Wirkt häufig unsicher.",
    "Wird stark von seinem Umfeld beeinflusst.",
    "Muss erst lernen, mit außergewöhnlicher Verantwortung umzugehen.",
  ],

  Lamplighter: [
    "Wirkt eher zynisch.",
    "Ist stark von vergangenen Entscheidungen belastet.",
    "Ist nicht immer so gleichgültig, wie er zunächst wirkt.",
  ],

  Translucent: [
    "Wirkt sehr selbstsicher.",
    "Verlässt sich stark auf seine besonderen Fähigkeiten.",
    "Unterschätzt seine Gegner teilweise.",
  ],

  Mesmer: [
    "Wirkt eher unsicher.",
    "Möchte wieder mehr Anerkennung bekommen.",
    "Ist bereit, Informationen zu seinem eigenen Vorteil zu nutzen.",
  ],

  Firecracker: [
    "Wirkt sehr selbstbewusst.",
    "Sucht stark die Aufmerksamkeit anderer.",
    "Kann persönliche Konflikte lange mit sich herumtragen.",
  ],

  "Sister Sage": [
    "Wirkt meistens sehr kontrolliert.",
    "Denkt außergewöhnlich strategisch.",
    "Plant deutlich weiter voraus als die meisten anderen.",
  ],

  "Tek Knight": [
    "Wirkt extrem selbstsicher.",
    "Beobachtet seine Umgebung sehr genau.",
    "Hält sehr viel von seinen eigenen Fähigkeiten.",
  ],

  Popclaw: [
    "Wirkt teilweise unsicher.",
    "Steht stark unter persönlichem und öffentlichem Druck.",
    "Lässt sich von ihren Gefühlen beeinflussen.",
  ],

  "Love Sausage": [
    "Wirkt ziemlich selbstbewusst.",
    "Nimmt ungewöhnliche Situationen vergleichsweise locker.",
    "Ist für andere nicht immer leicht einzuschätzen.",
  ],

  // =========================
  // THE WALKING DEAD
  // =========================

  "Rick Grimes": [
    "Übernimmt häufig Verantwortung für andere.",
    "Wird stark von seinen Erfahrungen verändert.",
    "Kann in schwierigen Situationen sehr entschlossen handeln.",
  ],

  "Daryl Dixon": [
    "Wirkt eher zurückhaltend.",
    "Ist Menschen, denen er vertraut, außergewöhnlich loyal.",
    "Kommt auch mit schwierigen Situationen gut zurecht.",
  ],

  Michonne: [
    "Wirkt meistens sehr kontrolliert.",
    "Vertraut anderen zunächst nur langsam.",
    "Ist ihren engsten Verbündeten sehr loyal.",
  ],

  Negan: [
    "Wirkt extrem selbstsicher.",
    "Kann sehr charismatisch auftreten.",
    "Versucht häufig, andere durch Einschüchterung zu kontrollieren.",
  ],

  "Glenn Rhee": [
    "Wirkt grundsätzlich freundlich.",
    "Denkt auch unter Druck häufig schnell.",
    "Ist seinen Freunden und seiner Familie sehr loyal.",
  ],

  "Maggie Greene": [
    "Wirkt sehr entschlossen.",
    "Übernimmt zunehmend Verantwortung.",
    "Ist stark von ihrer Familie und ihren Erfahrungen geprägt.",
  ],

  "Carol Peletier": [
    "Wirkt nach außen häufig ruhig.",
    "Verändert sich im Laufe der Zeit außergewöhnlich stark.",
    "Kann schwierige Entscheidungen sehr konsequent treffen.",
  ],

  "Carl Grimes": [
    "Muss sehr früh mit schwierigen Situationen umgehen.",
    "Wird stark durch sein Umfeld geprägt.",
    "Entwickelt mit der Zeit deutlich mehr Selbstständigkeit.",
  ],

  "Shane Walsh": [
    "Wirkt sehr selbstbewusst.",
    "Handelt häufig impulsiver als andere.",
    "Lässt sich stark von persönlichen Konflikten beeinflussen.",
  ],

  "Hershel Greene": [
    "Wirkt meistens sehr ruhig.",
    "Versucht auch in schwierigen Zeiten an seinen Prinzipien festzuhalten.",
    "Gibt anderen häufig vernünftigen Rat.",
  ],

  "The Governor": [
    "Wirkt nach außen oft kontrolliert.",
    "Möchte seine Umgebung stark kontrollieren.",
    "Kann seine wahren Absichten lange verbergen.",
  ],

  "Abraham Ford": [
    "Spricht häufig sehr direkt.",
    "Wirkt ausgesprochen entschlossen.",
    "Ist stark von einem bestimmten Ziel angetrieben.",
  ],

  "Rosita Espinosa": [
    "Wirkt sehr selbstbewusst.",
    "Kann gut für sich selbst sorgen.",
    "Lässt sich nur schwer einschüchtern.",
  ],

  "Eugene Porter": [
    "Verlässt sich stark auf seinen Verstand.",
    "Wirkt in gefährlichen Situationen manchmal unsicher.",
    "Kann sich sprachlich sehr ausführlich ausdrücken.",
  ],

  "Sasha Williams": [
    "Wirkt meistens ernst.",
    "Ist ausgesprochen selbstständig.",
    "Wird stark von persönlichen Verlusten geprägt.",
  ],

  "Tyreese Williams": [
    "Wirkt körperlich sehr selbstbewusst.",
    "Hat trotz schwieriger Umstände starke moralische Grenzen.",
    "Ist Menschen, die ihm wichtig sind, sehr loyal.",
  ],

  "Morgan Jones": [
    "Wirkt häufig sehr nachdenklich.",
    "Verändert seine Einstellung im Laufe der Zeit mehrfach.",
    "Hat mit vergangenen Erfahrungen stark zu kämpfen.",
  ],

  "Gabriel Stokes": [
    "Wirkt anfangs eher unsicher.",
    "Wird stark von Schuld und persönlichen Überzeugungen geprägt.",
    "Entwickelt im Laufe der Zeit deutlich mehr Mut.",
  ],

  Aaron: [
    "Wirkt grundsätzlich freundlich.",
    "Versucht neue Menschen zunächst genau einzuschätzen.",
    "Ist seiner Gemeinschaft stark verbunden.",
  ],

  Jesus: [
    "Wirkt häufig ziemlich gelassen.",
    "Ist ausgesprochen geschickt und aufmerksam.",
    "Versucht Konflikte nicht immer sofort mit Gewalt zu lösen.",
  ],

  Ezekiel: [
    "Tritt sehr selbstbewusst auf.",
    "Kann andere Menschen gut motivieren.",
    "Zeigt hinter seiner öffentlichen Rolle eine deutlich persönlichere Seite.",
  ],

  Alpha: [
    "Wirkt sehr kontrolliert.",
    "Ist stark von ihren eigenen Regeln geprägt.",
    "Versucht andere durch Angst und Konsequenz zu führen.",
  ],

  Beta: [
    "Wirkt sehr einschüchternd.",
    "Ist einer bestimmten Person außergewöhnlich loyal.",
    "Zeigt nur selten persönliche Gefühle.",
  ],

  "Merle Dixon": [
    "Spricht häufig sehr direkt.",
    "Kann schnell aggressiv reagieren.",
    "Ist komplizierter, als sein Auftreten zunächst vermuten lässt.",
  ],

  Andrea: [
    "Wirkt zunehmend selbstbewusst.",
    "Möchte auch in schwierigen Situationen unabhängig bleiben.",
    "Trifft Entscheidungen teilweise sehr stark nach eigener Einschätzung.",
  ],

  // =========================
  // JURASSIC PARK / WORLD
  // =========================

  "Alan Grant": [
    "Wirkt meistens eher ruhig.",
    "Verlässt sich stark auf Erfahrung und Beobachtung.",
    "Ist in gefährlichen Situationen ziemlich besonnen.",
  ],

  "Ellie Sattler": [
    "Wirkt sehr selbstbewusst.",
    "Ist ausgesprochen neugierig und aufmerksam.",
    "Lässt sich auch in gefährlichen Situationen nicht leicht einschüchtern.",
  ],

  "Ian Malcolm": [
    "Wirkt sehr selbstsicher.",
    "Hinterfragt Entscheidungen anderer häufig kritisch.",
    "Drückt sich gerne etwas auffälliger aus.",
  ],

  "John Hammond": [
    "Ist von seinen eigenen Ideen stark begeistert.",
    "Denkt häufig sehr groß.",
    "Unterschätzt mögliche Probleme manchmal.",
  ],

  "Lex Murphy": [
    "Wirkt anfangs eher unsicher.",
    "Kann mit Technik überraschend gut umgehen.",
    "Zeigt in gefährlichen Situationen viel Mut.",
  ],

  "Tim Murphy": [
    "Ist ausgesprochen neugierig.",
    "Interessiert sich stark für seine Umgebung.",
    "Bleibt auch nach schwierigen Erlebnissen aufmerksam.",
  ],

  "Dennis Nedry": [
    "Wirkt häufig etwas gereizt.",
    "Denkt stark an den eigenen Vorteil.",
    "Hält seine Fähigkeiten für besonders wichtig.",
  ],

  "Robert Muldoon": [
    "Wirkt sehr ernst.",
    "Nimmt Gefahren deutlich ernster als viele andere.",
    "Verlässt sich stark auf Erfahrung.",
  ],

  "Henry Wu": [
    "Wirkt sehr kontrolliert.",
    "Verlässt sich stark auf sein wissenschaftliches Wissen.",
    "Ist von den Möglichkeiten seiner Arbeit sehr überzeugt.",
  ],

  "Ray Arnold": [
    "Wirkt meistens sehr professionell.",
    "Versucht technische Probleme möglichst rational zu lösen.",
    "Bleibt auch unter Druck vergleichsweise fokussiert.",
  ],

  "Donald Gennaro": [
    "Denkt häufig zuerst an wirtschaftliche Konsequenzen.",
    "Wirkt in gefährlichen Situationen schnell nervös.",
    "Ist weniger abenteuerlustig als andere.",
  ],

  "Owen Grady": [
    "Wirkt ausgesprochen selbstbewusst.",
    "Verlässt sich stark auf Erfahrung und Instinkt.",
    "Bleibt in gefährlichen Situationen meist sehr entschlossen.",
  ],

  "Claire Dearing": [
    "Wirkt sehr organisiert.",
    "Übernimmt im Laufe der Zeit zunehmend persönliche Verantwortung.",
    "Kann sich schnell an gefährliche Situationen anpassen.",
  ],

  "Maisie Lockwood": [
    "Ist ziemlich neugierig.",
    "Hinterfragt ihre eigene Herkunft und ihr Umfeld.",
    "Zeigt in gefährlichen Situationen überraschend viel Mut.",
  ],

  "Zach Mitchell": [
    "Wirkt zunächst eher unbekümmert.",
    "Interessiert sich nicht sofort für alles um ihn herum.",
    "Übernimmt in gefährlichen Situationen mehr Verantwortung.",
  ],

  "Gray Mitchell": [
    "Ist ausgesprochen neugierig.",
    "Beobachtet seine Umgebung sehr aufmerksam.",
    "Kennt sich mit vielen Details seines Interessengebiets aus.",
  ],

  "Barry Sembène": [
    "Wirkt meistens ruhig.",
    "Geht mit gefährlichen Situationen professionell um.",
    "Ist seinen Kollegen gegenüber loyal.",
  ],

  "Simon Masrani": [
    "Wirkt sehr selbstbewusst.",
    "Ist von großen Projekten und Ideen begeistert.",
    "Unterschätzt Risiken teilweise.",
  ],

  "Vic Hoskins": [
    "Wirkt ausgesprochen selbstsicher.",
    "Sieht in ungewöhnlichen Situationen schnell einen praktischen Nutzen.",
    "Ist stark von Kontrolle und Einfluss geprägt.",
  ],

  "Franklin Webb": [
    "Wirkt in gefährlichen Situationen schnell nervös.",
    "Verlässt sich lieber auf Technik als auf körperliche Stärke.",
    "Ist seinen Begleitern dennoch loyal.",
  ],

  "Zia Rodriguez": [
    "Wirkt selbstbewusst.",
    "Spricht häufig ziemlich direkt.",
    "Bleibt in schwierigen Situationen vergleichsweise ruhig.",
  ],

  "Eli Mills": [
    "Wirkt nach außen sehr kontrolliert.",
    "Denkt stark an den eigenen Vorteil.",
    "Verbirgt seine tatsächlichen Absichten lange.",
  ],

  "Benjamin Lockwood": [
    "Wirkt meistens ruhig und ernst.",
    "Ist stark von seiner Vergangenheit geprägt.",
    "Trägt lange persönliche Geheimnisse mit sich herum.",
  ],

  "Kayla Watts": [
    "Wirkt sehr selbstbewusst.",
    "Kann sich schnell an gefährliche Situationen anpassen.",
    "Geht viele Probleme eher praktisch an.",
  ],

  "Ramsay Cole": [
    "Wirkt meistens kontrolliert.",
    "Beobachtet sein Umfeld aufmerksam.",
    "Zeigt seine tatsächlichen Absichten nicht sofort.",
  ],

    // =========================
  // STAR WARS – NEUE FIGUREN
  // =========================

  "Darth Maul": [
    "Wirkt ausgesprochen entschlossen.",
    "Wird stark von persönlichen Konflikten angetrieben.",
    "Gibt ein einmal gesetztes Ziel nur schwer auf.",
  ],

  "Jango Fett": [
    "Wirkt sehr kontrolliert.",
    "Geht bei seinen Aufgaben professionell vor.",
    "Verlässt sich stark auf Erfahrung und Ausrüstung.",
  ],

  "Cad Bane": [
    "Wirkt extrem selbstsicher.",
    "Bleibt auch in gefährlichen Situationen meistens ruhig.",
    "Denkt häufig zuerst an den eigenen Vorteil.",
  ],

  "Bo-Katan Kryze": [
    "Wirkt sehr entschlossen.",
    "Ist stark von ihrer Herkunft geprägt.",
    "Übernimmt häufig Verantwortung für andere.",
  ],

  "Poe Dameron": [
    "Wirkt ziemlich selbstbewusst.",
    "Handelt manchmal etwas zu spontan.",
    "Ist seinen Verbündeten ausgesprochen loyal.",
  ],

  "Captain Phasma": [
    "Wirkt sehr kontrolliert.",
    "Legt großen Wert auf Disziplin.",
    "Denkt in gefährlichen Situationen stark an das eigene Überleben.",
  ],

  "Grand Moff Tarkin": [
    "Wirkt fast immer sehr ruhig.",
    "Denkt ausgesprochen strategisch.",
    "Möchte andere durch Kontrolle und Autorität beeinflussen.",
  ],

  "Admiral Ackbar": [
    "Wirkt meistens ruhig.",
    "Hat viel Erfahrung mit schwierigen Situationen.",
    "Denkt bei Entscheidungen häufig taktisch.",
  ],

  "Asajj Ventress": [
    "Wirkt sehr selbstbewusst.",
    "Ist stark von ihrer schwierigen Vergangenheit geprägt.",
    "Geht im Laufe der Zeit zunehmend ihren eigenen Weg.",
  ],

  "Kit Fisto": [
    "Wirkt meistens ziemlich gelassen.",
    "Bleibt auch unter Druck oft ruhig.",
    "Tritt anderen gegenüber häufig freundlich und selbstbewusst auf.",
  ],

  // =========================
  // MARVEL – NEUE FIGUREN
  // =========================

  "Winter Soldier": [
    "Wirkt meistens eher zurückhaltend.",
    "Ist stark von seiner Vergangenheit geprägt.",
    "Hat Schwierigkeiten, anderen vollständig zu vertrauen.",
  ],

  Falcon: [
    "Wirkt ziemlich selbstbewusst.",
    "Ist seinen Verbündeten sehr loyal.",
    "Übernimmt zunehmend Verantwortung für andere.",
  ],

  "War Machine": [
    "Wirkt sehr pflichtbewusst.",
    "Verlässt sich stark auf Erfahrung und Ausrüstung.",
    "Bleibt auch in gefährlichen Situationen meist professionell.",
  ],

  "Nick Fury": [
    "Wirkt fast immer sehr kontrolliert.",
    "Verrät anderen nur selten alles, was er weiß.",
    "Denkt häufig mehrere Schritte voraus.",
  ],

  Mysterio: [
    "Wirkt sehr selbstsicher.",
    "Legt großen Wert auf die Wahrnehmung anderer.",
    "Versucht häufig, Situationen zu seinen Gunsten zu inszenieren.",
  ],

  "Green Goblin": [
    "Wirkt teilweise extrem selbstsicher.",
    "Ist für andere nicht immer leicht einzuschätzen.",
    "Kann sehr impulsiv und gefährlich reagieren.",
  ],

  "Doctor Octopus": [
    "Verlässt sich stark auf seinen Verstand.",
    "Ist von den eigenen Fähigkeiten sehr überzeugt.",
    "Kann sich extrem auf ein bestimmtes Ziel konzentrieren.",
  ],

  Magneto: [
    "Wirkt ausgesprochen selbstbewusst.",
    "Ist stark von seiner Vergangenheit und seinen Überzeugungen geprägt.",
    "Lässt sich nur schwer von seinem Ziel abbringen.",
  ],

  "Professor X": [
    "Wirkt meistens sehr ruhig.",
    "Versucht Konflikte häufig mit Verständnis zu lösen.",
    "Denkt langfristig und übernimmt viel Verantwortung.",
  ],

  "Silver Surfer": [
    "Wirkt meistens sehr ruhig.",
    "Ist stark von vergangenen Entscheidungen geprägt.",
    "Denkt häufig über größere Zusammenhänge nach.",
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