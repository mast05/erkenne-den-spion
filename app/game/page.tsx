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