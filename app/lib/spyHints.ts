// Spion-Tipps nach Kategorie und Eintrag. Keine Hinweise auf die Schreibweise.
const characterTipsByCategory: Record<string, string[]> = {
  "star-wars:Ahsoka Tano": [
    "Schlanke Statur",
    "Auffälliger Kopf",
    "Leichte Kleidung"
  ],
  "star-wars:Anakin Skywalker": [
    "Athletisch gebaut",
    "Dunkle Kleidung",
    "Menschlich"
  ],
  "star-wars:Boba Fett": [
    "Gepanzert",
    "Verdecktes Gesicht",
    "Viel Ausrüstung"
  ],
  "star-wars:C-3PO": [
    "Schlanke Statur",
    "Glänzende Oberfläche",
    "Steife Haltung"
  ],
  "star-wars:Chewbacca": [
    "Sehr groß",
    "Stark behaart",
    "Breite Statur"
  ],
  "star-wars:Count Dooku": [
    "Älter",
    "Elegante Kleidung",
    "Schlanke Statur"
  ],
  "star-wars:Darth Vader": [
    "Sehr groß",
    "Dunkle Rüstung",
    "Verdecktes Gesicht"
  ],
  "star-wars:Finn": [
    "Athletisch gebaut",
    "Praktische Kleidung",
    "Menschlich"
  ],
  "star-wars:General Grievous": [
    "Sehr groß",
    "Technischer Körper",
    "Schmale Statur"
  ],
  "star-wars:Grogu": [
    "Sehr klein",
    "Lockere Kleidung",
    "Auffälliger Kopf"
  ],
  "star-wars:Han Solo": [
    "Lässige Kleidung",
    "Menschlich",
    "Schlanke Statur"
  ],
  "star-wars:Jabba the Hutt": [
    "Sehr breit",
    "Ungewöhnlicher Körper",
    "Kaum Kleidung"
  ],
  "star-wars:Kylo Ren": [
    "Groß",
    "Dunkle Kleidung",
    "Verdecktes Gesicht"
  ],
  "star-wars:Lando Calrissian": [
    "Gepflegt",
    "Elegante Kleidung",
    "Menschlich"
  ],
  "star-wars:Leia Organa": [
    "Kleine Statur",
    "Gepflegte Kleidung",
    "Auffällige Frisur"
  ],
  "star-wars:Luke Skywalker": [
    "Schlanke Statur",
    "Einfache Kleidung",
    "Menschlich"
  ],
  "star-wars:Mace Windu": [
    "Kräftig gebaut",
    "Schlichte Kleidung",
    "Kahler Kopf"
  ],
  "star-wars:Mandalorian": [
    "Gepanzert",
    "Verdecktes Gesicht",
    "Robuste Kleidung"
  ],
  "star-wars:Obi-Wan Kenobi": [
    "Mittlere Statur",
    "Lockere Kleidung",
    "Gepflegt"
  ],
  "star-wars:Padmé Amidala": [
    "Schlanke Statur",
    "Aufwendige Kleidung",
    "Gepflegt"
  ],
  "star-wars:Palpatine": [
    "Sehr alt",
    "Dunkle Kleidung",
    "Blasses Gesicht"
  ],
  "star-wars:Qui-Gon Jinn": [
    "Sehr groß",
    "Lockere Kleidung",
    "Lange Haare"
  ],
  "star-wars:R2-D2": [
    "Sehr klein",
    "Kompakte Form",
    "Technisch"
  ],
  "star-wars:Rey": [
    "Schlanke Statur",
    "Helle Kleidung",
    "Praktisch gekleidet"
  ],
  "star-wars:Yoda": [
    "Sehr klein",
    "Sehr alt",
    "Auffällige Ohren"
  ],
  "star-wars:Darth Maul": [
    "Athletisch gebaut",
    "Dunkle Kleidung",
    "Auffälliges Gesicht"
  ],
  "star-wars:Jango Fett": [
    "Gepanzert",
    "Verdecktes Gesicht",
    "Athletisch gebaut"
  ],
  "star-wars:Cad Bane": [
    "Sehr schlank",
    "Dunkle Kleidung",
    "Auffälliger Kopf"
  ],
  "star-wars:Bo-Katan Kryze": [
    "Athletisch gebaut",
    "Teilweise gepanzert",
    "Praktische Kleidung"
  ],
  "star-wars:Poe Dameron": [
    "Schlanke Statur",
    "Praktische Kleidung",
    "Sportlich"
  ],
  "star-wars:Captain Phasma": [
    "Sehr groß",
    "Helle Rüstung",
    "Verdecktes Gesicht"
  ],
  "star-wars:Grand Moff Tarkin": [
    "Sehr schlank",
    "Formelle Kleidung",
    "Älter"
  ],
  "star-wars:Admiral Ackbar": [
    "Mittlere Statur",
    "Formelle Kleidung",
    "Ungewöhnliches Gesicht"
  ],
  "star-wars:Asajj Ventress": [
    "Schlanke Statur",
    "Kahler Kopf",
    "Dunkle Kleidung"
  ],
  "star-wars:Kit Fisto": [
    "Groß",
    "Athletisch gebaut",
    "Auffälliger Kopf"
  ],
  "star-wars:Captain Rex": [
    "Gepanzert",
    "Militärisch",
    "Verdecktes Gesicht"
  ],
  "star-wars:Commander Cody": [
    "Gepanzert",
    "Robuste Kleidung",
    "Militärisch"
  ],
  "star-wars:Grand Admiral Thrawn": [
    "Groß",
    "Formelle Kleidung",
    "Auffälliges Gesicht"
  ],
  "star-wars:Moff Gideon": [
    "Mittlere Statur",
    "Dunkle Kleidung",
    "Gepflegt"
  ],
  "star-wars:Fennec Shand": [
    "Schlanke Statur",
    "Dunkle Kleidung",
    "Viel Ausrüstung"
  ],
  "star-wars:Kanan Jarrus": [
    "Groß",
    "Praktische Kleidung",
    "Schlanke Statur"
  ],
  "star-wars:Ezra Bridger": [
    "Schlanke Statur",
    "Leichte Kleidung",
    "Jung"
  ],
  "star-wars:Sabine Wren": [
    "Kleine Statur",
    "Teilweise gepanzert",
    "Auffällige Kleidung"
  ],
  "star-wars:Hera Syndulla": [
    "Schlanke Statur",
    "Praktische Kleidung",
    "Auffälliger Kopf"
  ],
  "star-wars:Plo Koon": [
    "Groß",
    "Verdecktes Gesicht",
    "Lockere Kleidung"
  ],
  "star-wars:Aayla Secura": [
    "Schlanke Statur",
    "Leichte Kleidung",
    "Auffälliger Kopf"
  ],
  "star-wars:Savage Opress": [
    "Sehr groß",
    "Sehr kräftig",
    "Auffälliges Gesicht"
  ],
  "star-wars:Pre Vizsla": [
    "Athletisch gebaut",
    "Gepanzert",
    "Verdecktes Gesicht"
  ],
  "star-wars:Nute Gunray": [
    "Schmale Statur",
    "Aufwendige Kleidung",
    "Ungewöhnliches Gesicht"
  ],
  "star-wars:Wedge Antilles": [
    "Mittlere Statur",
    "Praktische Kleidung",
    "Menschlich"
  ],
  "star-wars:Jar Jar Binks": [
    "Große Ohren",
    "Langer Hals",
    "Ungeschicktes Auftreten"
  ],
  "star-wars:BB-8": [
    "Technischer Körper",
    "Rollt statt zu laufen",
    "Rundliche Form"
  ],
  "star-wars:Snoke": [
    "Sehr blass",
    "Auffällige Gesichtsnarben",
    "Verfügt über die Macht"
  ],
  "star-wars:Cassian Andor": [
    "Praktische Kleidung",
    "Geht verdeckt vor",
    "Leistet Widerstand gegen eine Großmacht"
  ],
  "star-wars:Jyn Erso": [
    "Praktische Kleidung",
    "Geht verdeckt vor",
    "Leistet Widerstand gegen eine Großmacht"
  ],
  "star-wars:K-2SO": [
    "Technischer Körper",
    "Sehr groß",
    "Kann im Kampf eingesetzt werden"
  ],
  "star-wars:General Hux": [
    "Formelle Uniform",
    "Erteilt Befehle",
    "Dient einer autoritären Macht"
  ],
  "star-wars:Maz Kanata": [
    "Kleine Statur",
    "Auffällige Brille",
    "Besitzt viel Lebenserfahrung"
  ],
  "star-wars:Greedo": [
    "Ungewöhnliches Gesicht",
    "Praktische Kleidung",
    "Trägt eine Schusswaffe"
  ],
  "star-wars:Wicket": [
    "Klein",
    "Stark behaart",
    "Einfache Ausrüstung"
  ],
  "star-wars:Watto": [
    "Klein",
    "Kann fliegen",
    "Hat mit Handel zu tun"
  ],
  "star-wars:Mon Mothma": [
    "Gepflegte Kleidung",
    "Politische Verantwortung",
    "Unterstützt den Widerstand"
  ],
  "star-wars:Orson Krennic": [
    "Formelle Uniform",
    "Erteilt Befehle",
    "Dient einer autoritären Macht"
  ],
  "star-wars:Rose Tico": [
    "Ungewöhnliche Einsätze",
    "Praktische Ausrüstung",
    "Kämpft auf der Seite des Widerstands"
  ],
  "star-wars:Owen Lars": [
    "Schlichte Kleidung",
    "Lebt auf einer trockenen Welt",
    "Hat eine wichtige Familienverbindung"
  ],
  "star-wars:Bail Organa": [
    "Gepflegte Kleidung",
    "Politische Verantwortung",
    "Unterstützt den Widerstand"
  ],
  "star-wars:Shmi Skywalker": [
    "Schlichte Kleidung",
    "Lebt auf einer trockenen Welt",
    "Hat eine wichtige Familienverbindung"
  ],
  "star-wars:Greef Karga": [
    "Erwachsene Erscheinung",
    "Trägt eine Schusswaffe",
    "Hat eine lokale Führungsrolle"
  ],
  "star-wars:IG-11": [
    "Technischer Körper",
    "Sehr groß",
    "Kann im Kampf eingesetzt werden"
  ],
  "star-wars:Saw Gerrera": [
    "Praktische Kleidung",
    "Geht verdeckt vor",
    "Leistet Widerstand gegen eine Großmacht"
  ],
  "star-wars:Chopper": [
    "Technischer Körper",
    "Kleine Statur",
    "Hilft organischen Begleitern"
  ],
  "star-wars:Hondo Ohnaka": [
    "Praktische Kleidung",
    "Bewegt sich im kriminellen Umfeld",
    "Arbeitet nicht nach gewöhnlichen Gesetzen"
  ],
  "star-wars:Chirrut Îmwe": [
    "Ist blind",
    "Trägt einen Stab",
    "Glaubt an die Macht"
  ],
  "star-wars:Shaak Ti": [
    "Beherrscht die Macht",
    "Verwendet ein Lichtschwert",
    "Hat einen Jedi-Hintergrund"
  ],
  "star-wars:Sebulba": [
    "Ungewöhnlicher Körperbau",
    "Kleine Statur",
    "Nimmt an Rennen teil"
  ],
  "star-wars:Ki-Adi-Mundi": [
    "Beherrscht die Macht",
    "Verwendet ein Lichtschwert",
    "Hat einen Jedi-Hintergrund"
  ],
  "star-wars:Bossk": [
    "Schuppige Haut",
    "Raubtierähnliches Gesicht",
    "Verdient Geld mit gefährlichen Aufträgen"
  ],
  "star-wars:Dengar": [
    "Kopfbedeckung",
    "Teilweise gepanzert",
    "Verdient Geld mit gefährlichen Aufträgen"
  ],
  "star-wars:IG-88": [
    "Technischer Körper",
    "Sehr groß",
    "Kann im Kampf eingesetzt werden"
  ],
  "star-wars:Nien Nunb": [
    "Ungewöhnliche Einsätze",
    "Praktische Ausrüstung",
    "Kämpft auf der Seite des Widerstands"
  ],
  "star-wars:Luthen Rael": [
    "Praktische Kleidung",
    "Geht verdeckt vor",
    "Leistet Widerstand gegen eine Großmacht"
  ],
  "star-wars:Großinquisitor": [
    "Dunkle Kleidung",
    "Verwendet ein Lichtschwert",
    "Jagt Machtnutzer"
  ],
  "star-wars:Reva": [
    "Dunkle Kleidung",
    "Verwendet ein Lichtschwert",
    "Jagt Machtnutzer"
  ],
  "star-wars:Baylan Skoll": [
    "Verwendet ein Lichtschwert",
    "Robuste Kleidung",
    "Arbeitet mit einer weiteren machtsensitiven Person zusammen"
  ],
  "star-wars:Shin Hati": [
    "Verwendet ein Lichtschwert",
    "Robuste Kleidung",
    "Arbeitet mit einer weiteren machtsensitiven Person zusammen"
  ],
  "star-wars:Hunter": [
    "Dunkle längere Haare",
    "Militärische Ausrüstung",
    "Auffällige Gesichtsbemalung"
  ],
  "star-wars:Crosshair": [
    "Sehr schlank",
    "Militärische Ausrüstung",
    "Spezialisiert auf Fernkampf"
  ],
  "star-wars:Wrecker": [
    "Sehr kräftig",
    "Militärische Ausrüstung",
    "Geht gern direkt vor"
  ],
  "star-wars:Tech": [
    "Brille",
    "Militärische Ausrüstung",
    "Technisch sehr begabt"
  ],
  "star-wars:Echo": [
    "Technische Körperteile",
    "Militärische Ausrüstung",
    "Gehört zu einer besonderen Einheit"
  ],
  "star-wars:Omega": [
    "Jung",
    "Helle Haare",
    "Reist mit Soldaten"
  ],
  "star-wars:Fives": [
    "Rüstung",
    "Militärischer Hintergrund",
    "Wurde als Klonsoldat ausgebildet"
  ],
  "star-wars:Luminara Unduli": [
    "Beherrscht die Macht",
    "Verwendet ein Lichtschwert",
    "Hat einen Jedi-Hintergrund"
  ],
  "star-wars:Barriss Offee": [
    "Beherrscht die Macht",
    "Verwendet ein Lichtschwert",
    "Hat einen Jedi-Hintergrund"
  ],
  "star-wars:Quinlan Vos": [
    "Beherrscht die Macht",
    "Verwendet ein Lichtschwert",
    "Hat einen Jedi-Hintergrund"
  ],
  "star-wars:Yaddle": [
    "Beherrscht die Macht",
    "Verwendet ein Lichtschwert",
    "Hat einen Jedi-Hintergrund"
  ],
  "star-wars:Baze Malbus": [
    "Ungewöhnliche Einsätze",
    "Praktische Ausrüstung",
    "Kämpft auf der Seite des Widerstands"
  ],
  "star-wars:Bodhi Rook": [
    "Ungewöhnliche Einsätze",
    "Praktische Ausrüstung",
    "Kämpft auf der Seite des Widerstands"
  ],
  "star-wars:Dexter Jettster": [
    "Massige Statur",
    "Mehrere Arme",
    "Arbeitet in einem Lokal"
  ],
  "star-wars:Enfys Nest": [
    "Verdeckt häufig das Gesicht",
    "Trägt einen Stab",
    "Führt eine Gruppe von Kämpfern"
  ],
  "marvel:Ant-Man": [
    "Mittlere Statur",
    "Technischer Anzug",
    "Verdecktes Gesicht"
  ],
  "marvel:Black Panther": [
    "Athletisch",
    "Dunkler Anzug",
    "Verdecktes Gesicht"
  ],
  "marvel:Black Widow": [
    "Schlank",
    "Dunkle Kleidung",
    "Praktisch gekleidet"
  ],
  "marvel:Captain America": [
    "Kräftig gebaut",
    "Körpernaher Anzug",
    "Militärischer Look"
  ],
  "marvel:Captain Marvel": [
    "Athletisch",
    "Körpernaher Anzug",
    "Helle Haare"
  ],
  "marvel:Daredevil": [
    "Athletisch",
    "Dunkle Kleidung",
    "Teilweise maskiert"
  ],
  "marvel:Deadpool": [
    "Athletisch",
    "Vollmaskiert",
    "Viel Ausrüstung"
  ],
  "marvel:Doctor Strange": [
    "Schlanke Statur",
    "Mehrlagige Kleidung",
    "Gepflegter Bart"
  ],
  "marvel:Drax": [
    "Sehr kräftig",
    "Wenig Kleidung",
    "Gemusterte Haut"
  ],
  "marvel:Gamora": [
    "Schlank",
    "Ungewöhnliche Haut",
    "Dunkle Kleidung"
  ],
  "marvel:Groot": [
    "Sehr groß",
    "Unebene Oberfläche",
    "Keine Kleidung"
  ],
  "marvel:Hawkeye": [
    "Athletisch",
    "Praktische Kleidung",
    "Viel Ausrüstung"
  ],
  "marvel:Hulk": [
    "Extrem groß",
    "Extrem kräftig",
    "Wenig Kleidung"
  ],
  "marvel:Iron Man": [
    "Ganzkörperrüstung",
    "Glänzende Oberfläche",
    "Verdecktes Gesicht"
  ],
  "marvel:Loki": [
    "Schlank",
    "Aufwendige Kleidung",
    "Längere Haare"
  ],
  "marvel:Moon Knight": [
    "Helle Kleidung",
    "Verdecktes Gesicht",
    "Mehrere Schichten"
  ],
  "marvel:Rocket": [
    "Sehr klein",
    "Stark behaart",
    "Technische Ausrüstung"
  ],
  "marvel:Scarlet Witch": [
    "Schlank",
    "Dunkelrote Kleidung",
    "Lange Haare"
  ],
  "marvel:Spider-Man": [
    "Schlank",
    "Körpernaher Anzug",
    "Vollmaskiert"
  ],
  "marvel:Star-Lord": [
    "Athletisch",
    "Praktische Kleidung",
    "Teilweise maskiert"
  ],
  "marvel:Thanos": [
    "Sehr groß",
    "Sehr massiv",
    "Teilweise gepanzert"
  ],
  "marvel:Thor": [
    "Sehr kräftig",
    "Robuste Kleidung",
    "Längere Haare"
  ],
  "marvel:Venom": [
    "Sehr groß",
    "Dunkle Oberfläche",
    "Unmenschliche Statur"
  ],
  "marvel:Vision": [
    "Schlank",
    "Glatte Oberfläche",
    "Ungewöhnliche Haut"
  ],
  "marvel:Wolverine": [
    "Kompakte Statur",
    "Kräftig gebaut",
    "Robuste Kleidung"
  ],
  "marvel:Winter Soldier": [
    "Athletisch",
    "Dunkle Kleidung",
    "Robuster Look"
  ],
  "marvel:Falcon": [
    "Athletisch",
    "Technische Ausrüstung",
    "Körpernaher Anzug"
  ],
  "marvel:War Machine": [
    "Sehr gepanzert",
    "Breite Statur",
    "Verdecktes Gesicht"
  ],
  "marvel:Nick Fury": [
    "Mittlere Statur",
    "Dunkle Kleidung",
    "Auffälliges Auge"
  ],
  "marvel:Mysterio": [
    "Aufwendige Kleidung",
    "Auffälliger Kopf",
    "Teilweise gepanzert"
  ],
  "marvel:Green Goblin": [
    "Schlanke Statur",
    "Feste Rüstung",
    "Verdecktes Gesicht"
  ],
  "marvel:Doctor Octopus": [
    "Mittlere Statur",
    "Normale Kleidung",
    "Breite Silhouette"
  ],
  "marvel:Magneto": [
    "Groß",
    "Auffällige Kleidung",
    "Bedeckter Kopf"
  ],
  "marvel:Professor X": [
    "Schlank",
    "Formelle Kleidung",
    "Kahler Kopf"
  ],
  "marvel:Silver Surfer": [
    "Sehr schlank",
    "Glatte Oberfläche",
    "Keine Kleidung"
  ],
  "marvel:Punisher": [
    "Kräftig gebaut",
    "Dunkle Kleidung",
    "Viel Ausrüstung"
  ],
  "marvel:Blade": [
    "Athletisch",
    "Dunkle Kleidung",
    "Robuster Look"
  ],
  "marvel:Ghost Rider": [
    "Kräftig gebaut",
    "Dunkle Kleidung",
    "Ungewöhnlicher Kopf"
  ],
  "marvel:Shang-Chi": [
    "Athletisch",
    "Leichte Kleidung",
    "Wenig Ausrüstung"
  ],
  "marvel:Wasp": [
    "Kleine Statur",
    "Technischer Anzug",
    "Teilweise maskiert"
  ],
  "marvel:Nebula": [
    "Schlank",
    "Ungewöhnliche Haut",
    "Technischer Look"
  ],
  "marvel:Ultron": [
    "Sehr groß",
    "Metallischer Körper",
    "Keine Kleidung"
  ],
  "marvel:Red Skull": [
    "Schlank",
    "Formelle Kleidung",
    "Auffälliges Gesicht"
  ],
  "marvel:Hela": [
    "Sehr schlank",
    "Dunkle Kleidung",
    "Auffälliger Kopf"
  ],
  "marvel:Kingpin": [
    "Sehr breit",
    "Sehr groß",
    "Elegante Kleidung"
  ],
  "marvel:Cyclops": [
    "Athletisch",
    "Körpernaher Anzug",
    "Bedeckte Augen"
  ],
  "marvel:Storm": [
    "Schlank",
    "Helle Haare",
    "Körpernahe Kleidung"
  ],
  "marvel:Jean Grey": [
    "Schlank",
    "Körpernahe Kleidung",
    "Wenig Ausrüstung"
  ],
  "marvel:Beast": [
    "Kräftig gebaut",
    "Stark behaart",
    "Ungewöhnliche Haut"
  ],
  "marvel:Adam Warlock": [
    "Athletisch",
    "Ungewöhnliche Haut",
    "Auffällige Kleidung"
  ],
  "marvel:Mister Fantastic": [
    "Menschliche Grundgestalt",
    "Wissenschaftlicher Hintergrund",
    "Körper kann sich stark dehnen"
  ],
  "marvel:Invisible Woman": [
    "Helle Haare",
    "Kann sich verbergen",
    "Erzeugt schützende Kraftfelder"
  ],
  "marvel:Human Torch": [
    "Menschliche Grundgestalt",
    "Kann fliegen",
    "Von Feuer umgeben"
  ],
  "marvel:The Thing": [
    "Sehr massig",
    "Steinartige Oberfläche",
    "Besitzt große Körperkraft"
  ],
  "marvel:Doctor Doom": [
    "Metallische Maske",
    "Umhang",
    "Technisch begabt"
  ],
  "marvel:Mystique": [
    "Blaue Haut",
    "Kann ihre Erscheinung verändern",
    "Ungewöhnliche Augen"
  ],
  "marvel:Nightcrawler": [
    "Blaue Haut",
    "Langer Schwanz",
    "Kann sich teleportieren"
  ],
  "marvel:Rogue": [
    "Auffällige helle Haarsträhne",
    "Trägt oft Handschuhe",
    "Körperkontakt kann gefährlich werden"
  ],
  "marvel:Gambit": [
    "Längerer Mantel",
    "Verwendet Spielkarten",
    "Auffällige Energieeffekte"
  ],
  "marvel:Colossus": [
    "Sehr groß",
    "Metallischer Körper",
    "Kräftige Statur"
  ],
  "marvel:Juggernaut": [
    "Sehr massig",
    "Auffälliger Helm",
    "Stürmt durch Hindernisse"
  ],
  "marvel:Iceman": [
    "Menschliche Grundgestalt",
    "Helle kalte Oberfläche",
    "Kann die Umgebung gefrieren lassen"
  ],
  "marvel:Quicksilver": [
    "Helle Haare",
    "Sportliche Kleidung",
    "Bewegt sich ungewöhnlich schnell"
  ],
  "marvel:Apocalypse": [
    "Ungewöhnliche Haut",
    "Alte Herkunft",
    "Versammelt mächtige Anhänger"
  ],
  "marvel:Sabretooth": [
    "Sehr kräftig",
    "Wildes Haar",
    "Tierähnliche Kampfweise"
  ],
  "marvel:Cable": [
    "Kräftige Statur",
    "Technische Körperteile",
    "Trägt schwere Waffen"
  ],
  "marvel:Domino": [
    "Auffällige Augenpartie",
    "Praktische Kleidung",
    "Hat ungewöhnlich viel Glück"
  ],
  "marvel:X-23": [
    "Dunkle Haare",
    "Klingen am Körper",
    "Kann Verletzungen schnell überstehen"
  ],
  "marvel:Electro": [
    "Auffällige Energieeffekte",
    "Menschlicher Ursprung",
    "Elektrizität spielt eine wichtige Rolle"
  ],
  "marvel:Sandman": [
    "Menschlicher Ursprung",
    "Kann seine Körperform ändern",
    "Körnige Oberfläche"
  ],
  "marvel:Lizard": [
    "Schuppige Haut",
    "Langer Schwanz",
    "Wissenschaftlicher Hintergrund"
  ],
  "marvel:Vulture": [
    "Technische Flügel",
    "Praktische Ausrüstung",
    "Kann fliegen"
  ],
  "marvel:Carnage": [
    "Rote Oberfläche",
    "Ungewöhnliche Körperform",
    "Kann Klingen aus dem Körper bilden"
  ],
  "marvel:Mantis": [
    "Fühler",
    "Dunkle Haare",
    "Kann Gefühle anderer beeinflussen"
  ],
  "marvel:Yondu": [
    "Ungewöhnliche Hautfarbe",
    "Auffälliger Kopfaufsatz",
    "Steuert eine besondere Fernkampfwaffe"
  ],
  "marvel:Wong": [
    "Mehrlagige Kleidung",
    "Beherrscht Magie",
    "Kann leuchtende Zeichen erzeugen"
  ],
  "marvel:Valkyrie": [
    "Athletische Statur",
    "Trägt Waffen",
    "Kämpferische Vergangenheit"
  ],
  "marvel:Odin": [
    "Älterer Mann",
    "Ein Auge bedeckt",
    "Königlicher Hintergrund"
  ],
  "marvel:Heimdall": [
    "Kräftige Statur",
    "Trägt ein Schwert",
    "Besitzt außergewöhnliche Wahrnehmung"
  ],
  "marvel:Jane Foster": [
    "Trägt zeitweise eine Rüstung",
    "Wissenschaftlicher Hintergrund",
    "Kann eine mächtige Waffe tragen"
  ],
  "marvel:Shuri": [
    "Technisch sehr begabt",
    "Junges Auftreten",
    "Entwickelt eigene Ausrüstung"
  ],
  "marvel:Okoye": [
    "Kahler Kopf",
    "Trägt eine Stangenwaffe",
    "Militärischer Hintergrund"
  ],
  "marvel:Killmonger": [
    "Kräftige Statur",
    "Auffällige Narben",
    "Militärischer Hintergrund"
  ],
  "marvel:M'Baku": [
    "Sehr kräftig",
    "Bart",
    "Führt eine traditionelle Gemeinschaft"
  ],
  "marvel:Yelena Belova": [
    "Athletische Statur",
    "Praktische Kampfkleidung",
    "Verwendet Waffen"
  ],
  "marvel:Red Guardian": [
    "Kräftige Statur",
    "Trägt einen Schild",
    "Militärischer Hintergrund"
  ],
  "marvel:Kate Bishop": [
    "Athletische Statur",
    "Praktische Kampfkleidung",
    "Verwendet Waffen"
  ],
  "marvel:She-Hulk": [
    "Sehr groß",
    "Grüne Haut",
    "Hat einen juristischen Beruf"
  ],
  "marvel:Jessica Jones": [
    "Dunkle Haare",
    "Alltagskleidung",
    "Arbeitet als Ermittlerin"
  ],
  "marvel:Luke Cage": [
    "Kräftige Statur",
    "Alltagskleidung",
    "Haut ist ungewöhnlich widerstandsfähig"
  ],
  "marvel:Iron Fist": [
    "Athletische Statur",
    "Nahkämpfer",
    "Auffällige Energie an der Hand"
  ],
  "marvel:Ms. Marvel": [
    "Junges Auftreten",
    "Farbenfrohe Kleidung",
    "Besitzt ungewöhnliche Kräfte"
  ],
  "marvel:Agatha Harkness": [
    "Dunkle Haare",
    "Beherrscht Magie",
    "Verbirgt ihre Absichten"
  ],
  "marvel:Monica Rambeau": [
    "Menschlicher Ursprung",
    "Lichteffekte",
    "Kann Energie wahrnehmen"
  ],
  "marvel:Namor": [
    "Spitze Ohren",
    "Wenig Kleidung",
    "Lebt mit einer verborgenen Gemeinschaft im Wasser"
  ],
  "marvel:Kang": [
    "Technische Ausrüstung",
    "Ungewöhnliche Zeitbezüge",
    "Hat mehrere Varianten"
  ],
  "marvel:Abomination": [
    "Sehr massig",
    "Ungewöhnliche Haut",
    "Menschlicher Ursprung"
  ],
  "marvel:Taskmaster": [
    "Verdecktes Gesicht",
    "Militärische Ausrüstung",
    "Kann fremde Kampftechniken nachahmen"
  ],
  "marvel:Ghost": [
    "Technischer Anzug",
    "Verdeckt häufig das Gesicht",
    "Kann durch feste Materie gelangen"
  ],
  "marvel:Gorr": [
    "Sehr blass",
    "Kahler Kopf",
    "Trägt eine dunkle Klinge"
  ],
  "harry-potter:Albus Dumbledore": [
    "Sehr alt",
    "Lange Kleidung",
    "Langer Bart"
  ],
  "harry-potter:Arthur Weasley": [
    "Schlanke Statur",
    "Ordentliche Kleidung",
    "Älter"
  ],
  "harry-potter:Bellatrix Lestrange": [
    "Schlank",
    "Dunkle Kleidung",
    "Wildes Haar"
  ],
  "harry-potter:Cedric Diggory": [
    "Athletisch",
    "Jung",
    "Gepflegt"
  ],
  "harry-potter:Dobby": [
    "Sehr klein",
    "Wenig Kleidung",
    "Auffällige Ohren"
  ],
  "harry-potter:Dolores Umbridge": [
    "Kleine Statur",
    "Sehr gepflegt",
    "Helle Kleidung"
  ],
  "harry-potter:Draco Malfoy": [
    "Schlank",
    "Helle Haare",
    "Sehr gepflegt"
  ],
  "harry-potter:Fred Weasley": [
    "Groß",
    "Rötliche Haare",
    "Schlanke Statur"
  ],
  "harry-potter:George Weasley": [
    "Groß",
    "Rötliche Haare",
    "Schlanke Statur"
  ],
  "harry-potter:Ginny Weasley": [
    "Schlank",
    "Rötliche Haare",
    "Einfache Kleidung"
  ],
  "harry-potter:Harry Potter": [
    "Schlank",
    "Dunkle Haare",
    "Brille"
  ],
  "harry-potter:Hermine Granger": [
    "Schlank",
    "Dichtes Haar",
    "Ordentliche Kleidung"
  ],
  "harry-potter:Lord Voldemort": [
    "Sehr schlank",
    "Blasses Gesicht",
    "Dunkle Robe"
  ],
  "harry-potter:Lucius Malfoy": [
    "Groß",
    "Lange Haare",
    "Sehr gepflegt"
  ],
  "harry-potter:Luna Lovegood": [
    "Schlank",
    "Helle Haare",
    "Ungewöhnlicher Stil"
  ],
  "harry-potter:Minerva McGonagall": [
    "Älter",
    "Lange Kleidung",
    "Sehr ordentlich"
  ],
  "harry-potter:Molly Weasley": [
    "Kräftigere Statur",
    "Alltägliche Kleidung",
    "Rötliche Haare"
  ],
  "harry-potter:Neville Longbottom": [
    "Mittlere Statur",
    "Ordentliche Kleidung",
    "Jung"
  ],
  "harry-potter:Peter Pettigrew": [
    "Kleine Statur",
    "Unscheinbar",
    "Ungepflegt"
  ],
  "harry-potter:Remus Lupin": [
    "Schlank",
    "Schlichte Kleidung",
    "Mitgenommen"
  ],
  "harry-potter:Ron Weasley": [
    "Groß",
    "Rötliche Haare",
    "Schlanke Statur"
  ],
  "harry-potter:Rubeus Hagrid": [
    "Extrem groß",
    "Sehr breit",
    "Viel Bart"
  ],
  "harry-potter:Severus Snape": [
    "Sehr schlank",
    "Dunkle Kleidung",
    "Dunkle Haare"
  ],
  "harry-potter:Sirius Black": [
    "Schlank",
    "Dunkle Kleidung",
    "Längere Haare"
  ],
  "harry-potter:Viktor Krum": [
    "Athletisch",
    "Kurze Haare",
    "Sportlicher Look"
  ],
  "harry-potter:Alastor Moody": [
    "Kräftig gebaut",
    "Robuste Kleidung",
    "Auffälliges Auge"
  ],
  "harry-potter:Nymphadora Tonks": [
    "Schlank",
    "Praktische Kleidung",
    "Auffällige Haare"
  ],
  "harry-potter:Kingsley Shacklebolt": [
    "Groß",
    "Kräftig gebaut",
    "Sehr gepflegt"
  ],
  "harry-potter:Horace Slughorn": [
    "Kräftige Statur",
    "Sehr gepflegt",
    "Älter"
  ],
  "harry-potter:Gilderoy Lockhart": [
    "Schlank",
    "Sehr gepflegt",
    "Auffällige Kleidung"
  ],
  "harry-potter:Fleur Delacour": [
    "Schlank",
    "Helle Haare",
    "Eleganter Look"
  ],
  "harry-potter:Cho Chang": [
    "Schlank",
    "Dunkle Haare",
    "Ordentliche Kleidung"
  ],
  "harry-potter:Narcissa Malfoy": [
    "Schlank",
    "Sehr gepflegt",
    "Helle Haare"
  ],
  "harry-potter:Barty Crouch Jr.": [
    "Schlank",
    "Unauffällige Kleidung",
    "Dunkle Haare"
  ],
  "harry-potter:Fenrir Greyback": [
    "Kräftig gebaut",
    "Abgenutzte Kleidung",
    "Auffälliges Gesicht"
  ],
  "harry-potter:Argus Filch": [
    "Älterer Mann",
    "Abgenutzte Kleidung",
    "Oft mit einer Katze unterwegs"
  ],
  "harry-potter:Sybill Trelawney": [
    "Große Brille",
    "Viele Schichten Kleidung",
    "Beschäftigt sich mit Vorhersagen"
  ],
  "harry-potter:Filius Flitwick": [
    "Sehr kleine Statur",
    "Lehrer",
    "Beherrscht Zauberkunst"
  ],
  "harry-potter:Pomona Sprout": [
    "Praktische Arbeitskleidung",
    "Lehrerin",
    "Arbeitet mit Pflanzen"
  ],
  "harry-potter:Quirinus Quirrell": [
    "Bedeckter Kopf",
    "Lehrer",
    "Unsicheres Auftreten"
  ],
  "harry-potter:Aberforth Dumbledore": [
    "Langer Bart",
    "Älterer Mann",
    "Arbeitet in einem Gasthaus"
  ],
  "harry-potter:Cornelius Fudge": [
    "Formelle Kleidung",
    "Politische Verantwortung",
    "Trägt häufig eine Kopfbedeckung"
  ],
  "harry-potter:Garrick Ollivander": [
    "Älterer Mann",
    "Helle Haare",
    "Arbeitet in einem Geschäft"
  ],
  "harry-potter:Griphook": [
    "Kleine Statur",
    "Auffällige Ohren",
    "Hat mit einer Bank zu tun"
  ],
  "harry-potter:Kreacher": [
    "Sehr klein",
    "Große Ohren",
    "Dient einer alten Familie"
  ],
  "harry-potter:Maulende Myrte": [
    "Brille",
    "Durchscheinende Erscheinung",
    "Hält sich oft in einem Badezimmer auf"
  ],
  "harry-potter:Vernon Dursley": [
    "Kräftige Statur",
    "Schnurrbart",
    "Ordentliche Alltagskleidung"
  ],
  "harry-potter:Petunia Dursley": [
    "Schlanke Statur",
    "Gepflegtes Auftreten",
    "Lebt ohne eigene Zauberkraft"
  ],
  "harry-potter:Dudley Dursley": [
    "Kräftige Statur",
    "Kurze Haare",
    "Lebt ohne eigene Zauberkraft"
  ],
  "harry-potter:Bill Weasley": [
    "Längere rötliche Haare",
    "Gehört zu einer großen Familie",
    "Hat sichtbare Gesichtsnarben"
  ],
  "harry-potter:Percy Weasley": [
    "Rötliche Haare",
    "Ordentliches Auftreten",
    "Arbeitet für das Ministerium"
  ],
  "harry-potter:Seamus Finnigan": [
    "Schülerkleidung",
    "Besucht eine Zauberschule",
    "Trägt einen Zauberstab"
  ],
  "harry-potter:Dean Thomas": [
    "Schülerkleidung",
    "Besucht eine Zauberschule",
    "Trägt einen Zauberstab"
  ],
  "harry-potter:Lavender Brown": [
    "Längere Haare",
    "Schülerin",
    "Trägt einen Zauberstab"
  ],
  "harry-potter:Rita Kimmkorn": [
    "Brille",
    "Auffällige Kleidung",
    "Arbeitet mit Nachrichten und Gerüchten"
  ],
  "harry-potter:Xenophilius Lovegood": [
    "Helle längere Haare",
    "Ungewöhnliches Auftreten",
    "Interessiert sich für ungewöhnliche Wesen"
  ],
  "harry-potter:Hedwig": [
    "Weiße Federn",
    "Kann fliegen",
    "Überbringt Nachrichten"
  ],
  "harry-potter:Vincent Crabbe": [
    "Kräftige Statur",
    "Schülerkleidung",
    "Hält sich oft bei einem blonden Mitschüler auf"
  ],
  "harry-potter:Seidenschnabel": [
    "Große Flügel",
    "Schnabel",
    "Besitzt auch vierbeinige Körpermerkmale"
  ],
  "harry-potter:Gregory Goyle": [
    "Kräftige Statur",
    "Schülerkleidung",
    "Hält sich oft bei einem blonden Mitschüler auf"
  ],
  "harry-potter:James Potter": [
    "Brille",
    "Dunkle Haare",
    "Trägt einen Zauberstab"
  ],
  "harry-potter:Lily Potter": [
    "Rötliche Haare",
    "Hexe",
    "Familiärer Bezug zur Hauptfigur"
  ],
  "harry-potter:Poppy Pomfrey": [
    "Ältere Frau",
    "Ordentliche Kleidung",
    "Kümmert sich um Verletzte"
  ],
  "harry-potter:Olympe Maxime": [
    "Sehr groß",
    "Elegante Kleidung",
    "Leitet eine Schule"
  ],
  "harry-potter:Oliver Wood": [
    "Schülerkleidung",
    "Besucht eine Zauberschule",
    "Trägt einen Zauberstab"
  ],
  "harry-potter:Blaise Zabini": [
    "Schülerkleidung",
    "Besucht eine Zauberschule",
    "Trägt einen Zauberstab"
  ],
  "harry-potter:Pansy Parkinson": [
    "Längere Haare",
    "Schülerin",
    "Trägt einen Zauberstab"
  ],
  "harry-potter:Lee Jordan": [
    "Schülerkleidung",
    "Besucht eine Zauberschule",
    "Trägt einen Zauberstab"
  ],
  "harry-potter:Colin Creevey": [
    "Junger Schüler",
    "Trägt häufig eine Kamera",
    "Bewundert einen bekannten Mitschüler"
  ],
  "harry-potter:Marjorie Dursley": [
    "Kräftige Statur",
    "Lebt ohne eigene Zauberkraft",
    "Mag Hunde"
  ],
  "harry-potter:Fast Kopfloser Nick": [
    "Durchscheinende Erscheinung",
    "Historische Kleidung",
    "Auffälliger Hals"
  ],
  "harry-potter:Rufus Scrimgeour": [
    "Älterer Mann",
    "Längere Haare",
    "Politische Verantwortung"
  ],
  "harry-potter:Barty Crouch Sr.": [
    "Schnurrbart",
    "Formelle Kleidung",
    "Arbeitet für das Ministerium"
  ],
  "harry-potter:Scabior": [
    "Längere Haare",
    "Abgenutzte Kleidung",
    "Verfolgt andere Menschen"
  ],
  "harry-potter:Mundungus Fletcher": [
    "Ungepflegtes Auftreten",
    "Dunkle Kleidung",
    "Handelt mit fragwürdigen Waren"
  ],
  "dc:Aquaman": [
    "Sehr kräftig",
    "Längere Haare",
    "Robuste Kleidung"
  ],
  "dc:Bane": [
    "Extrem kräftig",
    "Teilweise maskiert",
    "Schwere Kleidung"
  ],
  "dc:Batgirl": [
    "Schlank",
    "Körpernaher Anzug",
    "Teilweise maskiert"
  ],
  "dc:Batman": [
    "Kräftig gebaut",
    "Dunkle Rüstung",
    "Teilweise maskiert"
  ],
  "dc:Black Canary": [
    "Athletisch",
    "Dunkle Kleidung",
    "Helle Haare"
  ],
  "dc:Catwoman": [
    "Sehr schlank",
    "Körpernaher Anzug",
    "Teilweise maskiert"
  ],
  "dc:Cyborg": [
    "Kräftig gebaut",
    "Metallischer Körper",
    "Technischer Look"
  ],
  "dc:Darkseid": [
    "Sehr groß",
    "Sehr massiv",
    "Harte Oberfläche"
  ],
  "dc:Deathstroke": [
    "Athletisch",
    "Schwere Rüstung",
    "Vollmaskiert"
  ],
  "dc:Green Arrow": [
    "Athletisch",
    "Praktische Kleidung",
    "Viel Ausrüstung"
  ],
  "dc:Green Lantern": [
    "Athletisch",
    "Körpernaher Anzug",
    "Leichte Ausrüstung"
  ],
  "dc:Harley Quinn": [
    "Schlank",
    "Auffällige Kleidung",
    "Auffällige Haare"
  ],
  "dc:Joker": [
    "Sehr schlank",
    "Elegante Kleidung",
    "Auffälliges Gesicht"
  ],
  "dc:Lex Luthor": [
    "Groß",
    "Formelle Kleidung",
    "Kahler Kopf"
  ],
  "dc:Mr. Freeze": [
    "Breite Statur",
    "Schwere Rüstung",
    "Bedeckter Kopf"
  ],
  "dc:Nightwing": [
    "Athletisch",
    "Dunkler Anzug",
    "Schlanke Statur"
  ],
  "dc:Penguin": [
    "Kleine Statur",
    "Kräftig gebaut",
    "Formelle Kleidung"
  ],
  "dc:Poison Ivy": [
    "Schlank",
    "Auffällige Kleidung",
    "Lange Haare"
  ],
  "dc:Robin": [
    "Kleine Statur",
    "Körpernaher Anzug",
    "Leichte Kleidung"
  ],
  "dc:Shazam": [
    "Sehr kräftig",
    "Körpernaher Anzug",
    "Auffällige Kleidung"
  ],
  "dc:Supergirl": [
    "Schlank",
    "Helle Haare",
    "Körpernaher Anzug"
  ],
  "dc:Superman": [
    "Sehr kräftig",
    "Körpernaher Anzug",
    "Dunkle Haare"
  ],
  "dc:The Flash": [
    "Sehr schlank",
    "Körpernaher Anzug",
    "Teilweise maskiert"
  ],
  "dc:The Riddler": [
    "Schlanke Statur",
    "Auffällige Kleidung",
    "Wenig Rüstung"
  ],
  "dc:Wonder Woman": [
    "Athletisch",
    "Leichte Rüstung",
    "Lange Haare"
  ],
  "dc:Martian Manhunter": [
    "Kräftig gebaut",
    "Ungewöhnliche Haut",
    "Körpernaher Anzug"
  ],
  "dc:John Constantine": [
    "Schlank",
    "Alltägliche Kleidung",
    "Ungepflegter Look"
  ],
  "dc:Raven": [
    "Schlank",
    "Dunkle Kleidung",
    "Bedeckter Kopf"
  ],
  "dc:Starfire": [
    "Groß",
    "Ungewöhnliche Haut",
    "Körpernahe Kleidung"
  ],
  "dc:Beast Boy": [
    "Schlank",
    "Ungewöhnliche Haut",
    "Leichte Kleidung"
  ],
  "dc:Blue Beetle": [
    "Athletisch",
    "Ganzkörperrüstung",
    "Verdecktes Gesicht"
  ],
  "dc:Black Adam": [
    "Sehr kräftig",
    "Dunkler Anzug",
    "Kahler Kopf"
  ],
  "dc:Lucifer Morningstar": [
    "Groß",
    "Elegante Kleidung",
    "Sehr gepflegt"
  ],
  "dc:Scarecrow": [
    "Sehr schlank",
    "Abgenutzte Kleidung",
    "Verdecktes Gesicht"
  ],
  "dc:Two-Face": [
    "Mittlere Statur",
    "Formelle Kleidung",
    "Auffälliges Gesicht"
  ],
  "dc:Alfred Pennyworth": [
    "Älterer Mann",
    "Gepflegtes Auftreten",
    "Kümmert sich um einen reichen Haushalt"
  ],
  "dc:James Gordon": [
    "Älterer Mann",
    "Arbeitet bei der Polizei",
    "Hat Kontakt zu einem maskierten Helfer"
  ],
  "dc:Lois Lane": [
    "Menschlich",
    "Alltagskleidung",
    "Arbeitet für die Presse"
  ],
  "dc:Jimmy Olsen": [
    "Menschlich",
    "Alltagskleidung",
    "Arbeitet für die Presse"
  ],
  "dc:Martha Kent": [
    "Menschlich",
    "Schlichte Kleidung",
    "Familiäre Verbindung zu einem außergewöhnlichen Helden"
  ],
  "dc:General Zod": [
    "Rüstung",
    "Außerirdische Herkunft",
    "Militärischer Hintergrund"
  ],
  "dc:Faora": [
    "Rüstung",
    "Außerirdische Herkunft",
    "Militärischer Hintergrund"
  ],
  "dc:Doomsday": [
    "Sehr massig",
    "Raue Oberfläche",
    "Besitzt enorme Zerstörungskraft"
  ],
  "dc:Steppenwolf": [
    "Große Statur",
    "Schwere Rüstung",
    "Trägt eine große Waffe"
  ],
  "dc:Cheetah": [
    "Tierähnliche Merkmale",
    "Scharfe Krallen",
    "Sehr beweglich"
  ],
  "dc:Maxwell Lord": [
    "Gepflegtes Auftreten",
    "Geschäftlicher Hintergrund",
    "Will großen Einfluss gewinnen"
  ],
  "dc:Ares": [
    "Übermenschliche Kräfte",
    "Kriegerischer Hintergrund",
    "Mythologische Herkunft"
  ],
  "dc:Orm": [
    "Kampfanzug oder Rüstung",
    "Verwendet besondere Waffen",
    "Hat einen Konflikt mit einem Helden des Meeres"
  ],
  "dc:Black Manta": [
    "Kampfanzug oder Rüstung",
    "Verwendet besondere Waffen",
    "Hat einen Konflikt mit einem Helden des Meeres"
  ],
  "dc:Mera": [
    "Rötliche Haare",
    "Lebt im Wasser",
    "Kann Wasser kontrollieren"
  ],
  "dc:Hippolyta": [
    "Kriegerin",
    "Antik wirkende Kleidung",
    "Lebt in einer abgeschiedenen Gemeinschaft"
  ],
  "dc:Antiope": [
    "Kriegerin",
    "Antik wirkende Kleidung",
    "Lebt in einer abgeschiedenen Gemeinschaft"
  ],
  "dc:Doctor Sivana": [
    "Brille",
    "Älterer Mann",
    "Hat mit dunklen Mächten zu tun"
  ],
  "dc:Doctor Fate": [
    "Verdecktes Gesicht",
    "Goldener Helm",
    "Beherrscht Magie"
  ],
  "dc:Hawkman": [
    "Geflügelte Erscheinung",
    "Kampfkleidung",
    "Verwendet eine Nahkampfwaffe"
  ],
  "dc:Peacemaker": [
    "Kräftige Statur",
    "Glänzender Helm",
    "Verwendet Schusswaffen"
  ],
  "dc:Bloodsport": [
    "Praktische Kampfausrüstung",
    "Verwendet Schusswaffen",
    "Außergewöhnlich guter Schütze"
  ],
  "dc:Ratcatcher II": [
    "Maske",
    "Praktische Kleidung",
    "Hat eine besondere Verbindung zu kleinen Tieren"
  ],
  "dc:Polka-Dot Man": [
    "Auffällige Punkte",
    "Ungewöhnliche Kräfte",
    "Schüchternes Auftreten"
  ],
  "dc:King Shark": [
    "Sehr massig",
    "Haikopf",
    "Geht oft direkt vor"
  ],
  "dc:Rick Flag": [
    "Militärische Ausrüstung",
    "Menschlich",
    "Führt eine ungewöhnliche Einsatzgruppe"
  ],
  "dc:Amanda Waller": [
    "Strenges Auftreten",
    "Formelle Kleidung",
    "Erteilt geheime Aufträge"
  ],
  "dc:Deadshot": [
    "Praktische Kampfausrüstung",
    "Verwendet Schusswaffen",
    "Außergewöhnlich guter Schütze"
  ],
  "dc:Captain Boomerang": [
    "Ungepflegtes Auftreten",
    "Wirft besondere Waffen",
    "Krimineller Hintergrund"
  ],
  "dc:Killer Croc": [
    "Schuppige Haut",
    "Kräftige Statur",
    "Tierähnliches Gesicht"
  ],
  "dc:Enchantress": [
    "Dunkle lange Haare",
    "Unheimliche Erscheinung",
    "Beherrscht Magie"
  ],
  "dc:Katana": [
    "Teilweise verdecktes Gesicht",
    "Trägt eine Klinge",
    "Nahkämpferin"
  ],
  "dc:Huntress": [
    "Dunkle Kampfkleidung",
    "Verwendet eine Armbrust",
    "Verfolgt ein persönliches Ziel"
  ],
  "dc:Black Mask": [
    "Verdeckt häufig das Gesicht",
    "Elegante Kleidung",
    "Krimineller Anführer"
  ],
  "dc:Victor Zsasz": [
    "Kurze Haare",
    "Auffällige Hautnarben",
    "Verwendet Klingen"
  ],
  "dc:Renee Montoya": [
    "Menschlich",
    "Alltagskleidung",
    "Hat einen polizeilichen Hintergrund"
  ],
  "dc:Superboy": [
    "Menschliche Erscheinung",
    "Kräftige Statur",
    "Außergewöhnliche Herkunft"
  ],
  "dc:Red Hood": [
    "Verdecktes Gesicht",
    "Praktische Kampfkleidung",
    "Verwendet Schusswaffen"
  ],
  "dc:Donna Troy": [
    "Kriegerin",
    "Dunkle Haare",
    "Verbindung zu einer besonderen Frauengemeinschaft"
  ],
  "dc:Hawk": [
    "Kampfausbildung",
    "Trägt ein besonderes Kostüm",
    "Kämpft gegen Verbrecher"
  ],
  "dc:Dove": [
    "Kampfausbildung",
    "Trägt ein besonderes Kostüm",
    "Kämpft gegen Verbrecher"
  ],
  "dc:Batwoman": [
    "Kampfausbildung",
    "Trägt ein besonderes Kostüm",
    "Kämpft gegen Verbrecher"
  ],
  "dc:White Canary": [
    "Kampfausbildung",
    "Trägt ein besonderes Kostüm",
    "Kämpft gegen Verbrecher"
  ],
  "dc:The Atom": [
    "Technischer Anzug",
    "Wissenschaftlicher Hintergrund",
    "Kann seine Größe verändern"
  ],
  "dc:Firestorm": [
    "Feuriger Kopf",
    "Ungewöhnliche Kräfte",
    "Mehr als eine Person spielt für die Gestalt eine Rolle"
  ],
  "dc:Captain Cold": [
    "Robuste Kleidung",
    "Trägt eine besondere Schusswaffe",
    "Arbeitet auch mit einem kriminellen Partner"
  ],
  "dc:Heat Wave": [
    "Robuste Kleidung",
    "Trägt eine besondere Schusswaffe",
    "Arbeitet auch mit einem kriminellen Partner"
  ],
  "dc:Reverse-Flash": [
    "Körpernaher Anzug",
    "Verdeckt häufig das Gesicht",
    "Bewegt sich extrem schnell"
  ],
  "dc:Zoom": [
    "Körpernaher Anzug",
    "Verdeckt häufig das Gesicht",
    "Bewegt sich extrem schnell"
  ],
  "dc:Killer Frost": [
    "Helle Haare",
    "Blasse Erscheinung",
    "Kann Kälte erzeugen"
  ],
  "dc:Vixen": [
    "Athletische Statur",
    "Auffälliger Schmuck",
    "Nutzt Kräfte aus dem Tierreich"
  ],
  "dc:Black Lightning": [
    "Kräftige Statur",
    "Besonderer Anzug",
    "Elektrizität spielt eine wichtige Rolle"
  ],
  "dc:Stargirl": [
    "Helle Haare",
    "Körpernahes Kostüm",
    "Trägt einen besonderen Stab"
  ],
  "dc:Steel": [
    "Technische Rüstung",
    "Kräftige Erscheinung",
    "Verwendet schwere Ausrüstung"
  ],
  "dc:Brainiac": [
    "Ungewöhnliche Herkunft",
    "Technisch sehr fortgeschritten",
    "Sammelt Informationen über Welten"
  ],
  "dc:Ra’s al Ghul": [
    "Kampfausbildung",
    "Geheimnisvoller Hintergrund",
    "Verbindung zu einer abgeschiedenen Organisation"
  ],
  "dc:Talia al Ghul": [
    "Kampfausbildung",
    "Geheimnisvoller Hintergrund",
    "Verbindung zu einer abgeschiedenen Organisation"
  ],
  "dc:Swamp Thing": [
    "Pflanzenartiger Körper",
    "Große Statur",
    "Verbindung zur Natur"
  ],
  "dc:Robotman": [
    "Technischer Körper",
    "Kräftige Statur",
    "Menschliche Vergangenheit"
  ],
  "dc:Negative Man": [
    "Verhüllter Körper",
    "Ungewöhnliche Energie",
    "Gehört zu einer ungewöhnlichen Gemeinschaft"
  ],
  "dc:Crazy Jane": [
    "Menschliche Erscheinung",
    "Mehrere Persönlichkeiten",
    "Verschiedene Kräfte"
  ],
  "dc:Elasti-Woman": [
    "Menschliche Grundgestalt",
    "Kann ihre Körperform verändern",
    "Lebt zurückgezogen"
  ],
  "dc:Mazikeen": [
    "Menschliche Erscheinung",
    "Übernatürliche Herkunft",
    "Verbindung zu Himmel und Hölle"
  ],
  "dc:Amenadiel": [
    "Menschliche Erscheinung",
    "Übernatürliche Herkunft",
    "Verbindung zu Himmel und Hölle"
  ],
  "dc:Chloe Decker": [
    "Helle Haare",
    "Alltagskleidung",
    "Arbeitet als Ermittlerin"
  ],
  "dc:Mister Terrific": [
    "Teilweise verdecktes Gesicht",
    "Technisch begabt",
    "Verwendet schwebende Geräte"
  ],
  "dc:Hawkgirl": [
    "Geflügelte Erscheinung",
    "Kampfkleidung",
    "Verwendet eine Nahkampfwaffe"
  ],
  "dc:Krypto": [
    "Fell",
    "Kann fliegen",
    "Tierischer Begleiter mit besonderen Kräften"
  ],
  "dc:Sinestro": [
    "Ungewöhnliche Haut",
    "Besitzt einen besonderen Ring",
    "Hat Erfahrung in einer kosmischen Ordnung"
  ],
  "dc:Vigilante": [
    "Verdecktes Gesicht",
    "Kampfausrüstung",
    "Geht gewaltsam gegen Verbrecher vor"
  ],
  "dc:Jonathan Kent": [
    "Menschlich",
    "Schlichte Kleidung",
    "Familiäre Verbindung zu einem außergewöhnlichen Helden"
  ],
  "fluch-der-karibik:Angelica": [
    "Schlank",
    "Praktische Kleidung",
    "Dunkle Haare"
  ],
  "fluch-der-karibik:Barbossa": [
    "Kräftige Statur",
    "Robuste Kleidung",
    "Ungepflegter Look"
  ],
  "fluch-der-karibik:Blackbeard": [
    "Kräftig gebaut",
    "Dunkle Kleidung",
    "Viel Bart"
  ],
  "fluch-der-karibik:Bootstrap Bill": [
    "Schlank",
    "Abgenutzte Kleidung",
    "Mitgenommen"
  ],
  "fluch-der-karibik:Captain Teague": [
    "Schlanke Statur",
    "Dunkle Kleidung",
    "Viel Haar"
  ],
  "fluch-der-karibik:Cotton": [
    "Schlank",
    "Abgenutzte Kleidung",
    "Auffälliges Gesicht"
  ],
  "fluch-der-karibik:Cutler Beckett": [
    "Kleine Statur",
    "Formelle Kleidung",
    "Sehr gepflegt"
  ],
  "fluch-der-karibik:Davy Jones": [
    "Kräftig gebaut",
    "Ungewöhnliche Haut",
    "Auffälliges Gesicht"
  ],
  "fluch-der-karibik:Elizabeth Swann": [
    "Schlank",
    "Aufwendige Kleidung",
    "Wenig Ausrüstung"
  ],
  "fluch-der-karibik:Giselle": [
    "Schlank",
    "Auffällige Kleidung",
    "Gepflegter Look"
  ],
  "fluch-der-karibik:Ian Mercer": [
    "Mittlere Statur",
    "Ordentliche Kleidung",
    "Praktische Ausrüstung"
  ],
  "fluch-der-karibik:Jack Sparrow": [
    "Schlank",
    "Viele Schichten",
    "Viele Accessoires"
  ],
  "fluch-der-karibik:James Norrington": [
    "Groß",
    "Ordentliche Kleidung",
    "Sehr gepflegt"
  ],
  "fluch-der-karibik:Joshamee Gibbs": [
    "Kräftige Statur",
    "Robuste Kleidung",
    "Ungepflegter Look"
  ],
  "fluch-der-karibik:Lieutenant Theodore Groves": [
    "Schlank",
    "Einheitliche Kleidung",
    "Sehr ordentlich"
  ],
  "fluch-der-karibik:Marty": [
    "Sehr klein",
    "Praktische Kleidung",
    "Kompakte Statur"
  ],
  "fluch-der-karibik:Philip Swift": [
    "Schlank",
    "Schlichte Kleidung",
    "Sehr ordentlich"
  ],
  "fluch-der-karibik:Pintel": [
    "Kräftig gebaut",
    "Abgenutzte Kleidung",
    "Grober Look"
  ],
  "fluch-der-karibik:Ragetti": [
    "Sehr schlank",
    "Abgenutzte Kleidung",
    "Auffälliges Auge"
  ],
  "fluch-der-karibik:Scrum": [
    "Kräftige Statur",
    "Lockere Kleidung",
    "Ungepflegter Look"
  ],
  "fluch-der-karibik:Syrena": [
    "Schlank",
    "Leichte Kleidung",
    "Helle Haut"
  ],
  "fluch-der-karibik:Tamara": [
    "Schlank",
    "Leichte Kleidung",
    "Unauffälliger Look"
  ],
  "fluch-der-karibik:Tia Dalma": [
    "Schlank",
    "Ungewöhnliche Kleidung",
    "Wildes Haar"
  ],
  "fluch-der-karibik:Weatherby Swann": [
    "Groß",
    "Formelle Kleidung",
    "Sehr gepflegt"
  ],
  "fluch-der-karibik:Will Turner": [
    "Athletisch",
    "Praktische Kleidung",
    "Dunkle Haare"
  ],
  "fluch-der-karibik:Armando Salazar": [
    "Schlank",
    "Dunkle Kleidung",
    "Auffälliges Gesicht"
  ],
  "fluch-der-karibik:Henry Turner": [
    "Athletisch",
    "Praktische Kleidung",
    "Jung"
  ],
  "fluch-der-karibik:Carina Smyth": [
    "Schlank",
    "Ordentliche Kleidung",
    "Gepflegt"
  ],
  "fluch-der-karibik:Sao Feng": [
    "Kräftige Statur",
    "Aufwendige Kleidung",
    "Sehr gepflegt"
  ],
  "fluch-der-karibik:Maccus": [
    "Sehr kräftig",
    "Schwere Kleidung",
    "Ungewöhnliches Gesicht"
  ],
  "fluch-der-karibik:Mullroy": [
    "Mittlere Statur",
    "Einheitliche Kleidung",
    "Sehr ordentlich"
  ],
  "fluch-der-karibik:Murtogg": [
    "Mittlere Statur",
    "Einheitliche Kleidung",
    "Schlichter Look"
  ],
  "fluch-der-karibik:Lieutenant Gillette": [
    "Schlank",
    "Einheitliche Kleidung",
    "Sehr gepflegt"
  ],
  "fluch-der-karibik:Scarlett": [
    "Schlank",
    "Auffällige Kleidung",
    "Gepflegter Look"
  ],
  "fluch-der-karibik:Jack the Monkey": [
    "Extrem klein",
    "Stark behaart",
    "Kaum Kleidung"
  ],
  "game-of-thrones:Arya Stark": [
    "Kleine Statur",
    "Praktische Kleidung",
    "Schlank"
  ],
  "game-of-thrones:Bran Stark": [
    "Schlank",
    "Warme Kleidung",
    "Jung"
  ],
  "game-of-thrones:Brienne von Tarth": [
    "Sehr groß",
    "Kräftig gebaut",
    "Schwere Rüstung"
  ],
  "game-of-thrones:Catelyn Stark": [
    "Schlank",
    "Lange Kleidung",
    "Wenig Ausrüstung"
  ],
  "game-of-thrones:Cersei Lannister": [
    "Schlank",
    "Aufwendige Kleidung",
    "Sehr gepflegt"
  ],
  "game-of-thrones:Daenerys Targaryen": [
    "Kleine Statur",
    "Helle Haare",
    "Leichte Kleidung"
  ],
  "game-of-thrones:Davos Seaworth": [
    "Mittlere Statur",
    "Robuste Kleidung",
    "Schlichter Look"
  ],
  "game-of-thrones:Gendry": [
    "Kräftig gebaut",
    "Robuste Kleidung",
    "Jüngerer Mann"
  ],
  "game-of-thrones:Gregor Clegane": [
    "Extrem groß",
    "Extrem breit",
    "Schwere Rüstung"
  ],
  "game-of-thrones:Jaime Lannister": [
    "Athletisch",
    "Gepflegter Look",
    "Helle Haare"
  ],
  "game-of-thrones:Jon Snow": [
    "Athletisch",
    "Dunkle Kleidung",
    "Dunkle Haare"
  ],
  "game-of-thrones:Jorah Mormont": [
    "Kräftig gebaut",
    "Robuste Kleidung",
    "Älter"
  ],
  "game-of-thrones:Margaery Tyrell": [
    "Schlank",
    "Aufwendige Kleidung",
    "Sehr gepflegt"
  ],
  "game-of-thrones:Melisandre": [
    "Schlank",
    "Lange Kleidung",
    "Rötliche Haare"
  ],
  "game-of-thrones:Ned Stark": [
    "Kräftig gebaut",
    "Schwere Kleidung",
    "Dunkle Haare"
  ],
  "game-of-thrones:Olenna Tyrell": [
    "Älter",
    "Aufwendige Kleidung",
    "Bedeckter Kopf"
  ],
  "game-of-thrones:Petyr Baelish": [
    "Schlanke Statur",
    "Ordentliche Kleidung",
    "Sehr gepflegt"
  ],
  "game-of-thrones:Robb Stark": [
    "Athletisch",
    "Robuste Kleidung",
    "Dunkle Haare"
  ],
  "game-of-thrones:Samwell Tarly": [
    "Kräftige Statur",
    "Dunkle Kleidung",
    "Wenig Rüstung"
  ],
  "game-of-thrones:Sandor Clegane": [
    "Sehr groß",
    "Kräftig gebaut",
    "Auffälliges Gesicht"
  ],
  "game-of-thrones:Sansa Stark": [
    "Groß",
    "Lange Kleidung",
    "Sehr gepflegt"
  ],
  "game-of-thrones:Theon Greyjoy": [
    "Schlank",
    "Dunkle Kleidung",
    "Mitgenommener Look"
  ],
  "game-of-thrones:Tormund": [
    "Kräftig gebaut",
    "Robuste Kleidung",
    "Rötlicher Bart"
  ],
  "game-of-thrones:Tyrion Lannister": [
    "Sehr klein",
    "Ordentliche Kleidung",
    "Kräftige Statur"
  ],
  "game-of-thrones:Varys": [
    "Mittlere Statur",
    "Lange Kleidung",
    "Kahler Kopf"
  ],
  "game-of-thrones:Night King": [
    "Groß",
    "Unmenschliche Haut",
    "Dunkle Kleidung"
  ],
  "game-of-thrones:Ramsay Bolton": [
    "Schlank",
    "Dunkle Kleidung",
    "Unauffälliger Look"
  ],
  "game-of-thrones:Tywin Lannister": [
    "Groß",
    "Formelle Kleidung",
    "Sehr gepflegt"
  ],
  "game-of-thrones:Bronn": [
    "Athletisch",
    "Robuste Kleidung",
    "Viel Ausrüstung"
  ],
  "game-of-thrones:Stannis Baratheon": [
    "Kräftig gebaut",
    "Dunkle Kleidung",
    "Strenger Look"
  ],
  "game-of-thrones:Khal Drogo": [
    "Sehr kräftig",
    "Wenig Kleidung",
    "Lange Haare"
  ],
  "game-of-thrones:Missandei": [
    "Kleine Statur",
    "Leichte Kleidung",
    "Sehr gepflegt"
  ],
  "game-of-thrones:Grey Worm": [
    "Athletisch",
    "Einheitliche Kleidung",
    "Leichte Rüstung"
  ],
  "game-of-thrones:Ygritte": [
    "Schlank",
    "Robuste Kleidung",
    "Rötliche Haare"
  ],
  "game-of-thrones:Hodor": [
    "Extrem groß",
    "Sehr breit",
    "Einfache Kleidung"
  ],
  "game-of-thrones:Joffrey Baratheon": [
    "Junger Mann",
    "Königliche Kleidung",
    "Wächst am Hof auf"
  ],
  "game-of-thrones:Robert Baratheon": [
    "Kräftige Statur",
    "Bart",
    "Königlicher Hintergrund"
  ],
  "game-of-thrones:Renly Baratheon": [
    "Gepflegtes Auftreten",
    "Adliger Hintergrund",
    "Trägt auch Rüstung"
  ],
  "game-of-thrones:Tommen Baratheon": [
    "Junger Mann",
    "Königliche Kleidung",
    "Wächst am Hof auf"
  ],
  "game-of-thrones:Myrcella Baratheon": [
    "Junges Mädchen",
    "Adlige Herkunft",
    "Wird von Familienpolitik beeinflusst"
  ],
  "game-of-thrones:Shireen Baratheon": [
    "Junges Mädchen",
    "Adlige Herkunft",
    "Wird von Familienpolitik beeinflusst"
  ],
  "game-of-thrones:Loras Tyrell": [
    "Gepflegtes Auftreten",
    "Adliger Hintergrund",
    "Trägt auch Rüstung"
  ],
  "game-of-thrones:Oberyn Martell": [
    "Dunkle Haare",
    "Verwendet eine Stangenwaffe",
    "Stammt aus einer warmen Region"
  ],
  "game-of-thrones:Ellaria Sand": [
    "Dunkle Haare",
    "Elegante Kleidung",
    "Stammt aus einer warmen Region"
  ],
  "game-of-thrones:Yara Greyjoy": [
    "Robuste Kleidung",
    "Seefahrerischer Hintergrund",
    "Strebt nach Macht"
  ],
  "game-of-thrones:Euron Greyjoy": [
    "Robuste Kleidung",
    "Seefahrerischer Hintergrund",
    "Strebt nach Macht"
  ],
  "game-of-thrones:Roose Bolton": [
    "Älterer Mann",
    "Adlige Herkunft",
    "Geht bei Bündnissen skrupellos vor"
  ],
  "game-of-thrones:Walder Frey": [
    "Älterer Mann",
    "Adlige Herkunft",
    "Geht bei Bündnissen skrupellos vor"
  ],
  "game-of-thrones:Lysa Arryn": [
    "Längere Haare",
    "Adlige Herkunft",
    "Beschützt ihren Sohn übermäßig"
  ],
  "game-of-thrones:Jeor Mormont": [
    "Dunkle schwere Kleidung",
    "Militärischer Hintergrund",
    "Dient im hohen Norden"
  ],
  "game-of-thrones:Viserys Targaryen": [
    "Helle längere Haare",
    "Adlige Herkunft",
    "Will einen verlorenen Thron zurück"
  ],
  "game-of-thrones:Talisa Stark": [
    "Dunkle Haare",
    "Praktische Kleidung",
    "Kümmert sich um Verletzte"
  ],
  "game-of-thrones:Rickon Stark": [
    "Jung",
    "Dunkle Haare",
    "Stammt aus dem Norden"
  ],
  "game-of-thrones:Osha": [
    "Wildes Haar",
    "Abgenutzte Kleidung",
    "Kennt das Leben jenseits geordneter Herrschaft"
  ],
  "game-of-thrones:Meera Reed": [
    "Praktische Kleidung",
    "Kann mit Waffen umgehen",
    "Begleitet eine Reise nach Norden"
  ],
  "game-of-thrones:Jojen Reed": [
    "Jung",
    "Schlichte Kleidung",
    "Hat besondere Träume"
  ],
  "game-of-thrones:Jaqen H’ghar": [
    "Ruhiges Auftreten",
    "Ungewöhnliche Identität",
    "Kann tödliche Aufträge erfüllen"
  ],
  "game-of-thrones:Shae": [
    "Dunkle Haare",
    "Bewegt sich zeitweise am Hof",
    "Hat eine gefährliche persönliche Beziehung"
  ],
  "game-of-thrones:Gilly": [
    "Schlichte Kleidung",
    "Dunkle Haare",
    "Stammt aus einer abgelegenen Gegend"
  ],
  "game-of-thrones:Podrick Payne": [
    "Junger Mann",
    "Dient als Begleiter",
    "Lernt den Umgang mit Waffen"
  ],
  "game-of-thrones:Beric Dondarrion": [
    "Ein Auge bedeckt",
    "Trägt ein Schwert",
    "Hat ungewöhnliche Erfahrungen mit dem Tod"
  ],
  "game-of-thrones:Lyanna Mormont": [
    "Jung",
    "Strenges Auftreten",
    "Hat eine Führungsrolle im Norden"
  ],
  "game-of-thrones:Barristan Selmy": [
    "Älterer Mann",
    "Ritterlicher Hintergrund",
    "Dient im königlichen Personenschutz"
  ],
  "game-of-thrones:Qyburn": [
    "Älterer Mann",
    "Schlichte lange Kleidung",
    "Betreibt fragwürdige Forschung"
  ],
  "game-of-thrones:Hoher Spatz": [
    "Älterer Mann",
    "Sehr schlichte Kleidung",
    "Religiöse Führungsrolle"
  ],
  "game-of-thrones:Pycelle": [
    "Lange Kleidung",
    "Gelehrter Hintergrund",
    "Dient einer mächtigen Gemeinschaft"
  ],
  "game-of-thrones:Maester Aemon": [
    "Lange Kleidung",
    "Gelehrter Hintergrund",
    "Dient einer mächtigen Gemeinschaft"
  ],
  "game-of-thrones:Alliser Thorne": [
    "Dunkle schwere Kleidung",
    "Militärischer Hintergrund",
    "Dient im hohen Norden"
  ],
  "game-of-thrones:Mance Rayder": [
    "Robuste Kleidung",
    "Kennt das Leben im hohen Norden",
    "Führt mehrere Gruppen zusammen"
  ],
  "game-of-thrones:Daario Naharis": [
    "Athletische Statur",
    "Verwendet Klingen",
    "Söldnerischer Hintergrund"
  ],
  "herr-der-ringe:Frodo Baggins": [
    "Sehr klein",
    "Schlanke Statur",
    "Einfache Kleidung"
  ],
  "herr-der-ringe:Samwise Gamgee": [
    "Sehr klein",
    "Kräftige Statur",
    "Robuste Kleidung"
  ],
  "herr-der-ringe:Gandalf": [
    "Sehr groß",
    "Lange Kleidung",
    "Langer Bart"
  ],
  "herr-der-ringe:Aragorn": [
    "Athletisch",
    "Dunkle Kleidung",
    "Ungepflegter Look"
  ],
  "herr-der-ringe:Legolas": [
    "Sehr schlank",
    "Helle Haare",
    "Leichte Kleidung"
  ],
  "herr-der-ringe:Gimli": [
    "Sehr klein",
    "Sehr breit",
    "Viel Bart"
  ],
  "herr-der-ringe:Boromir": [
    "Kräftig gebaut",
    "Robuste Kleidung",
    "Schwere Ausrüstung"
  ],
  "herr-der-ringe:Merry": [
    "Sehr klein",
    "Schlank",
    "Einfache Kleidung"
  ],
  "herr-der-ringe:Pippin": [
    "Sehr klein",
    "Schlank",
    "Lockere Kleidung"
  ],
  "herr-der-ringe:Gollum": [
    "Sehr schlank",
    "Wenig Kleidung",
    "Gebückte Haltung"
  ],
  "herr-der-ringe:Sauron": [
    "Extrem groß",
    "Schwere Rüstung",
    "Verdecktes Gesicht"
  ],
  "herr-der-ringe:Saruman": [
    "Groß",
    "Helle Kleidung",
    "Langer Bart"
  ],
  "herr-der-ringe:Galadriel": [
    "Schlank",
    "Helle Haare",
    "Elegante Kleidung"
  ],
  "herr-der-ringe:Elrond": [
    "Schlank",
    "Lange Kleidung",
    "Sehr gepflegt"
  ],
  "herr-der-ringe:Arwen": [
    "Schlank",
    "Lange Kleidung",
    "Dunkle Haare"
  ],
  "herr-der-ringe:Éowyn": [
    "Schlank",
    "Helle Haare",
    "Leichte Kleidung"
  ],
  "herr-der-ringe:Théoden": [
    "Älter",
    "Kräftige Statur",
    "Helle Haare"
  ],
  "herr-der-ringe:Faramir": [
    "Athletisch",
    "Robuste Kleidung",
    "Dunkle Haare"
  ],
  "herr-der-ringe:Denethor": [
    "Schlank",
    "Formelle Kleidung",
    "Älter"
  ],
  "herr-der-ringe:Éomer": [
    "Kräftig gebaut",
    "Robuste Rüstung",
    "Längere Haare"
  ],
  "herr-der-ringe:Treebeard": [
    "Extrem groß",
    "Unebene Oberfläche",
    "Keine Kleidung"
  ],
  "herr-der-ringe:Witch-king of Angmar": [
    "Groß",
    "Dunkle Rüstung",
    "Verdecktes Gesicht"
  ],
  "herr-der-ringe:Gríma Wormtongue": [
    "Sehr schlank",
    "Dunkle Kleidung",
    "Blasser Look"
  ],
  "herr-der-ringe:Haldir": [
    "Sehr schlank",
    "Helle Haare",
    "Ordentliche Kleidung"
  ],
  "herr-der-ringe:Bilbo Baggins": [
    "Sehr klein",
    "Ordentliche Kleidung",
    "Älter"
  ],
  "herr-der-ringe:Isildur": [
    "Groß",
    "Kräftig gebaut",
    "Edle Rüstung"
  ],
  "herr-der-ringe:Lurtz": [
    "Sehr groß",
    "Sehr kräftig",
    "Dunkle Haut"
  ],
  "herr-der-ringe:Celeborn": [
    "Sehr schlank",
    "Helle Haare",
    "Elegante Kleidung"
  ],
  "herr-der-ringe:King of the Dead": [
    "Groß",
    "Geisterhaft",
    "Alte Rüstung"
  ],
  "herr-der-ringe:Mouth of Sauron": [
    "Sehr groß",
    "Dunkle Rüstung",
    "Verdecktes Gesicht"
  ],
  "herr-der-ringe:Gothmog": [
    "Kräftige Statur",
    "Auffälliges Gesicht",
    "Schwere Rüstung"
  ],
  "herr-der-ringe:Elendil": [
    "Extrem groß",
    "Kräftig gebaut",
    "Edle Rüstung"
  ],
  "herr-der-ringe:Gil-galad": [
    "Groß",
    "Helle Haare",
    "Edle Rüstung"
  ],
  "herr-der-ringe:Rosie Cotton": [
    "Sehr klein",
    "Einfache Kleidung",
    "Gepflegt"
  ],
  "herr-der-ringe:Gamling": [
    "Kräftig gebaut",
    "Robuste Rüstung",
    "Älter"
  ],
  "herr-der-ringe:Grishnákh": [
    "Kleine Statur",
    "Dunkle Kleidung",
    "Auffälliges Gesicht"
  ],
  "hobbit:Thorin Oakenshield": [
    "Kleine Statur",
    "Kräftig gebaut",
    "Robuste Kleidung"
  ],
  "hobbit:Balin": [
    "Kleine Statur",
    "Kräftig gebaut",
    "Heller Bart"
  ],
  "hobbit:Dwalin": [
    "Kleine Statur",
    "Sehr breit",
    "Kahler Kopf"
  ],
  "hobbit:Fíli": [
    "Kleine Statur",
    "Athletisch",
    "Helle Haare"
  ],
  "hobbit:Kíli": [
    "Kleine Statur",
    "Schlank",
    "Dunkle Haare"
  ],
  "hobbit:Bofur": [
    "Kleine Statur",
    "Kräftig gebaut",
    "Bedeckter Kopf"
  ],
  "hobbit:Bombur": [
    "Kleine Statur",
    "Sehr breit",
    "Kräftige Statur"
  ],
  "hobbit:Bifur": [
    "Kleine Statur",
    "Robuste Kleidung",
    "Auffälliger Kopf"
  ],
  "hobbit:Óin": [
    "Kleine Statur",
    "Älter",
    "Viel Bart"
  ],
  "hobbit:Glóin": [
    "Kleine Statur",
    "Sehr breit",
    "Rötlicher Bart"
  ],
  "hobbit:Nori": [
    "Kleine Statur",
    "Schlank",
    "Auffällige Haare"
  ],
  "hobbit:Dori": [
    "Kleine Statur",
    "Kräftig gebaut",
    "Sehr gepflegt"
  ],
  "hobbit:Ori": [
    "Kleine Statur",
    "Sehr schlank",
    "Junger Look"
  ],
  "hobbit:Bard": [
    "Athletisch",
    "Robuste Kleidung",
    "Dunkle Haare"
  ],
  "hobbit:Thranduil": [
    "Sehr schlank",
    "Helle Haare",
    "Elegante Kleidung"
  ],
  "hobbit:Tauriel": [
    "Sehr schlank",
    "Leichte Kleidung",
    "Rötliche Haare"
  ],
  "hobbit:Azog": [
    "Sehr groß",
    "Sehr kräftig",
    "Helle Haut"
  ],
  "hobbit:Bolg": [
    "Sehr groß",
    "Sehr kräftig",
    "Schwere Ausrüstung"
  ],
  "hobbit:Smaug": [
    "Extrem groß",
    "Harte Oberfläche",
    "Keine Kleidung"
  ],
  "hobbit:Beorn": [
    "Sehr groß",
    "Sehr kräftig",
    "Viel Haar"
  ],
  "hobbit:Radagast": [
    "Schlank",
    "Lange Kleidung",
    "Ungepflegter Look"
  ],
  "hobbit:Master of Lake-town": [
    "Kräftige Statur",
    "Formelle Kleidung",
    "Sehr gepflegt"
  ],
  "hobbit:Alfrid": [
    "Schlanke Statur",
    "Ordentliche Kleidung",
    "Unauffälliger Look"
  ],
  "hobbit:Dáin Ironfoot": [
    "Kleine Statur",
    "Sehr kräftig",
    "Schwere Rüstung"
  ],
  "hobbit:Necromancer": [
    "Groß",
    "Dunkle Gestalt",
    "Schwer erkennbar"
  ],
  "hobbit:Bain": [
    "Jung",
    "Schlanke Statur",
    "Praktische Kleidung"
  ],
  "hobbit:Great Goblin": [
    "Sehr groß",
    "Sehr breit",
    "Auffälliges Gesicht"
  ],
  "hobbit:Bert": [
    "Extrem groß",
    "Sehr kräftig",
    "Grober Look"
  ],
  "hobbit:Tom": [
    "Extrem groß",
    "Sehr kräftig",
    "Ungepflegter Look"
  ],
  "hobbit:William": [
    "Extrem groß",
    "Sehr kräftig",
    "Breite Statur"
  ],
  "the-boys:Homelander": [
    "Athletisch",
    "Körpernaher Anzug",
    "Sehr gepflegt"
  ],
  "the-boys:Billy Butcher": [
    "Kräftig gebaut",
    "Dunkle Kleidung",
    "Ungepflegter Look"
  ],
  "the-boys:Hughie Campbell": [
    "Sehr schlank",
    "Alltägliche Kleidung",
    "Unauffälliger Look"
  ],
  "the-boys:Starlight": [
    "Schlank",
    "Helle Kleidung",
    "Körpernaher Anzug"
  ],
  "the-boys:Queen Maeve": [
    "Athletisch",
    "Feste Kleidung",
    "Lange Haare"
  ],
  "the-boys:A-Train": [
    "Sehr athletisch",
    "Körpernaher Anzug",
    "Schlanke Statur"
  ],
  "the-boys:The Deep": [
    "Athletisch",
    "Körpernaher Anzug",
    "Sehr gepflegt"
  ],
  "the-boys:Black Noir": [
    "Athletisch",
    "Komplett dunkel",
    "Vollmaskiert"
  ],
  "the-boys:Soldier Boy": [
    "Sehr kräftig",
    "Robuste Kleidung",
    "Klassischer Look"
  ],
  "the-boys:Stormfront": [
    "Schlank",
    "Dunkler Anzug",
    "Lange Haare"
  ],
  "the-boys:Kimiko": [
    "Kleine Statur",
    "Schlank",
    "Einfache Kleidung"
  ],
  "the-boys:Frenchie": [
    "Schlank",
    "Dunkle Kleidung",
    "Individueller Look"
  ],
  "the-boys:Mother's Milk": [
    "Kräftig gebaut",
    "Praktische Kleidung",
    "Robuster Look"
  ],
  "the-boys:Victoria Neuman": [
    "Schlank",
    "Formelle Kleidung",
    "Sehr gepflegt"
  ],
  "the-boys:Ashley Barrett": [
    "Schlank",
    "Geschäftliche Kleidung",
    "Sehr gepflegt"
  ],
  "the-boys:Stan Edgar": [
    "Schlank",
    "Formelle Kleidung",
    "Sehr gepflegt"
  ],
  "the-boys:Ryan": [
    "Kleine Statur",
    "Alltägliche Kleidung",
    "Jung"
  ],
  "the-boys:Lamplighter": [
    "Schlank",
    "Dunkle Kleidung",
    "Funktionaler Look"
  ],
  "the-boys:Translucent": [
    "Mittlere Statur",
    "Wenig Ausrüstung",
    "Unauffälliger Look"
  ],
  "the-boys:Mesmer": [
    "Mittlere Statur",
    "Alltägliche Kleidung",
    "Unauffällig"
  ],
  "the-boys:Firecracker": [
    "Athletisch",
    "Auffällige Kleidung",
    "Körpernaher Anzug"
  ],
  "the-boys:Sister Sage": [
    "Schlank",
    "Moderne Kleidung",
    "Sehr gepflegt"
  ],
  "the-boys:Tek Knight": [
    "Kräftig gebaut",
    "Sehr gepflegt",
    "Auffällige Kleidung"
  ],
  "the-boys:Popclaw": [
    "Athletisch",
    "Sportliche Kleidung",
    "Schlanke Statur"
  ],
  "the-boys:Love Sausage": [
    "Sehr kräftig",
    "Große Statur",
    "Einfache Kleidung"
  ],
  "the-boys:Becca Butcher": [
    "Schlank",
    "Alltägliche Kleidung",
    "Gepflegt"
  ],
  "the-boys:Grace Mallory": [
    "Älter",
    "Ordentliche Kleidung",
    "Strenger Look"
  ],
  "the-boys:Supersonic": [
    "Athletisch",
    "Körpernaher Anzug",
    "Sehr gepflegt"
  ],
  "the-boys:Crimson Countess": [
    "Schlank",
    "Auffällige Kleidung",
    "Rötliche Haare"
  ],
  "the-boys:Doppelganger": [
    "Mittlere Statur",
    "Unauffälliger Look",
    "Wenig Ausrüstung"
  ],
  "the-boys:Joe Kessler": [
    "Groß",
    "Robuste Kleidung",
    "Älter"
  ],
  "the-boys:Black Noir II": [
    "Sehr groß",
    "Komplett dunkel",
    "Vollmaskiert"
  ],
  "the-boys:Shockwave": [
    "Athletisch",
    "Körpernaher Anzug",
    "Schlanke Statur"
  ],
  "the-boys:Blue Hawk": [
    "Kräftig gebaut",
    "Auffälliger Anzug",
    "Große Statur"
  ],
  "the-boys:Webweaver": [
    "Schlank",
    "Körpernaher Anzug",
    "Verdecktes Gesicht"
  ],
  "the-boys:Zoe Neuman": [
    "Kleine Statur",
    "Alltägliche Kleidung",
    "Jung"
  ],
  "the-boys:Ezekiel": [
    "Groß",
    "Ordentliche Kleidung",
    "Gepflegter Look"
  ],
  "the-boys:Blindspot": [
    "Athletisch",
    "Dunkle Kleidung",
    "Bedeckte Augen"
  ],
  "the-walking-dead:Rick Grimes": [
    "Mittlere Statur",
    "Robuste Kleidung",
    "Ungepflegter Look"
  ],
  "the-walking-dead:Daryl Dixon": [
    "Athletisch",
    "Dunkle Kleidung",
    "Ungepflegter Look"
  ],
  "the-walking-dead:Michonne": [
    "Athletisch",
    "Praktische Kleidung",
    "Viel Ausrüstung"
  ],
  "the-walking-dead:Negan": [
    "Groß",
    "Dunkle Kleidung",
    "Sehr gepflegt"
  ],
  "the-walking-dead:Glenn Rhee": [
    "Schlank",
    "Leichte Kleidung",
    "Praktischer Look"
  ],
  "the-walking-dead:Maggie Greene": [
    "Schlank",
    "Praktische Kleidung",
    "Dunkle Haare"
  ],
  "the-walking-dead:Carol Peletier": [
    "Kleine Statur",
    "Einfache Kleidung",
    "Kurze Haare"
  ],
  "the-walking-dead:Carl Grimes": [
    "Kleine Statur",
    "Praktische Kleidung",
    "Bedeckter Kopf"
  ],
  "the-walking-dead:Shane Walsh": [
    "Kräftig gebaut",
    "Praktische Kleidung",
    "Kurze Haare"
  ],
  "the-walking-dead:Hershel Greene": [
    "Älter",
    "Schlichte Kleidung",
    "Heller Bart"
  ],
  "the-walking-dead:The Governor": [
    "Mittlere Statur",
    "Ordentliche Kleidung",
    "Auffälliges Auge"
  ],
  "the-walking-dead:Abraham Ford": [
    "Sehr kräftig",
    "Robuste Kleidung",
    "Rötliche Haare"
  ],
  "the-walking-dead:Rosita Espinosa": [
    "Athletisch",
    "Praktische Kleidung",
    "Viel Ausrüstung"
  ],
  "the-walking-dead:Eugene Porter": [
    "Kräftige Statur",
    "Einfache Kleidung",
    "Auffällige Frisur"
  ],
  "the-walking-dead:Sasha Williams": [
    "Athletisch",
    "Dunkle Kleidung",
    "Leichte Ausrüstung"
  ],
  "the-walking-dead:Tyreese Williams": [
    "Sehr kräftig",
    "Große Statur",
    "Robuste Kleidung"
  ],
  "the-walking-dead:Morgan Jones": [
    "Schlanke Statur",
    "Praktische Kleidung",
    "Leichte Ausrüstung"
  ],
  "the-walking-dead:Gabriel Stokes": [
    "Schlank",
    "Ordentliche Kleidung",
    "Dunkle Kleidung"
  ],
  "the-walking-dead:Aaron": [
    "Mittlere Statur",
    "Praktische Kleidung",
    "Unauffälliger Look"
  ],
  "the-walking-dead:Jesus": [
    "Schlank",
    "Lange Haare",
    "Viel Bart"
  ],
  "the-walking-dead:Ezekiel": [
    "Groß",
    "Auffällige Haare",
    "Auffällige Kleidung"
  ],
  "the-walking-dead:Alpha": [
    "Kleine Statur",
    "Dunkle Kleidung",
    "Kahler Kopf"
  ],
  "the-walking-dead:Beta": [
    "Extrem groß",
    "Dunkle Kleidung",
    "Verdecktes Gesicht"
  ],
  "the-walking-dead:Merle Dixon": [
    "Kräftig gebaut",
    "Abgenutzte Kleidung",
    "Auffälliger Arm"
  ],
  "the-walking-dead:Andrea": [
    "Schlank",
    "Praktische Kleidung",
    "Helle Haare"
  ],
  "the-walking-dead:Dale Horvath": [
    "Älter",
    "Helle Haare",
    "Schlichte Kleidung"
  ],
  "the-walking-dead:T-Dog": [
    "Kräftig gebaut",
    "Praktische Kleidung",
    "Kurze Haare"
  ],
  "the-walking-dead:Lori Grimes": [
    "Schlank",
    "Alltägliche Kleidung",
    "Dunkle Haare"
  ],
  "the-walking-dead:Beth Greene": [
    "Jung",
    "Schlanke Statur",
    "Helle Haare"
  ],
  "the-walking-dead:Tara Chambler": [
    "Schlank",
    "Praktische Kleidung",
    "Dunkle Haare"
  ],
  "the-walking-dead:Enid": [
    "Jung",
    "Schlanke Statur",
    "Alltägliche Kleidung"
  ],
  "the-walking-dead:Dwight": [
    "Schlank",
    "Dunkle Kleidung",
    "Auffälliges Gesicht"
  ],
  "the-walking-dead:Simon": [
    "Groß",
    "Kräftig gebaut",
    "Dunkle Kleidung"
  ],
  "the-walking-dead:Jerry": [
    "Sehr kräftig",
    "Große Statur",
    "Praktische Kleidung"
  ],
  "the-walking-dead:Judith Grimes": [
    "Sehr klein",
    "Jung",
    "Praktische Kleidung"
  ],
  "jurassic:Alan Grant": [
    "Schlanke Statur",
    "Praktische Kleidung",
    "Bedeckter Kopf"
  ],
  "jurassic:Ellie Sattler": [
    "Schlank",
    "Leichte Kleidung",
    "Helle Haare"
  ],
  "jurassic:Ian Malcolm": [
    "Sehr schlank",
    "Dunkle Kleidung",
    "Sehr gepflegt"
  ],
  "jurassic:John Hammond": [
    "Älter",
    "Helle Kleidung",
    "Sehr gepflegt"
  ],
  "jurassic:Lex Murphy": [
    "Kleine Statur",
    "Alltägliche Kleidung",
    "Jung"
  ],
  "jurassic:Tim Murphy": [
    "Sehr klein",
    "Alltägliche Kleidung",
    "Jung"
  ],
  "jurassic:Dennis Nedry": [
    "Kräftige Statur",
    "Praktische Kleidung",
    "Wenig athletisch"
  ],
  "jurassic:Robert Muldoon": [
    "Kräftig gebaut",
    "Robuste Kleidung",
    "Praktischer Look"
  ],
  "jurassic:Henry Wu": [
    "Schlank",
    "Ordentliche Kleidung",
    "Sehr gepflegt"
  ],
  "jurassic:Ray Arnold": [
    "Mittlere Statur",
    "Praktische Kleidung",
    "Technischer Look"
  ],
  "jurassic:Donald Gennaro": [
    "Schlank",
    "Formelle Kleidung",
    "Sehr gepflegt"
  ],
  "jurassic:Owen Grady": [
    "Athletisch",
    "Robuste Kleidung",
    "Praktischer Look"
  ],
  "jurassic:Claire Dearing": [
    "Schlank",
    "Ordentliche Kleidung",
    "Sehr gepflegt"
  ],
  "jurassic:Maisie Lockwood": [
    "Kleine Statur",
    "Alltägliche Kleidung",
    "Jung"
  ],
  "jurassic:Zach Mitchell": [
    "Schlank",
    "Alltägliche Kleidung",
    "Jung"
  ],
  "jurassic:Gray Mitchell": [
    "Kleine Statur",
    "Alltägliche Kleidung",
    "Jung"
  ],
  "jurassic:Barry Sembène": [
    "Athletisch",
    "Robuste Kleidung",
    "Praktischer Look"
  ],
  "jurassic:Simon Masrani": [
    "Schlank",
    "Elegante Kleidung",
    "Sehr gepflegt"
  ],
  "jurassic:Vic Hoskins": [
    "Kräftig gebaut",
    "Robuste Kleidung",
    "Große Statur"
  ],
  "jurassic:Franklin Webb": [
    "Schlank",
    "Alltägliche Kleidung",
    "Unauffälliger Look"
  ],
  "jurassic:Zia Rodriguez": [
    "Schlank",
    "Praktische Kleidung",
    "Leichter Look"
  ],
  "jurassic:Eli Mills": [
    "Schlank",
    "Geschäftliche Kleidung",
    "Sehr gepflegt"
  ],
  "jurassic:Benjamin Lockwood": [
    "Älter",
    "Klassische Kleidung",
    "Schlanke Statur"
  ],
  "jurassic:Kayla Watts": [
    "Athletisch",
    "Praktische Kleidung",
    "Robuster Look"
  ],
  "jurassic:Ramsay Cole": [
    "Mittlere Statur",
    "Moderne Kleidung",
    "Sehr gepflegt"
  ],
  "jurassic:Sarah Harding": [
    "Schlank",
    "Praktische Kleidung",
    "Dunkle Haare"
  ],
  "jurassic:Roland Tembo": [
    "Sehr groß",
    "Kräftig gebaut",
    "Robuste Kleidung"
  ],
  "jurassic:Nick Van Owen": [
    "Schlank",
    "Lässige Kleidung",
    "Dunkle Haare"
  ],
  "jurassic:Kelly Curtis": [
    "Jung",
    "Kleine Statur",
    "Alltägliche Kleidung"
  ],
  "jurassic:Billy Brennan": [
    "Schlank",
    "Praktische Kleidung",
    "Jung"
  ],
  "jurassic:Paul Kirby": [
    "Mittlere Statur",
    "Alltägliche Kleidung",
    "Unauffälliger Look"
  ],
  "jurassic:Amanda Kirby": [
    "Schlank",
    "Alltägliche Kleidung",
    "Helle Haare"
  ],
  "jurassic:Eric Kirby": [
    "Jung",
    "Kleine Statur",
    "Praktische Kleidung"
  ],
  "jurassic:Eddie Carr": [
    "Mittlere Statur",
    "Praktische Kleidung",
    "Viel Ausrüstung"
  ],
  "jurassic:Zara Young": [
    "Schlank",
    "Ordentliche Kleidung",
    "Dunkle Haare"
  ],
  "fussballer:Lionel Messi": [
    "Argentinischer Nationalspieler",
    "Offensivspieler",
    "Technisch sehr stark"
  ],
  "fussballer:Cristiano Ronaldo": [
    "Portugiesischer Nationalspieler",
    "Offensivspieler",
    "Außergewöhnlich kopfballstark"
  ],
  "fussballer:Kylian Mbappé": [
    "Französischer Nationalspieler",
    "Offensivspieler",
    "Sehr schnell"
  ],
  "fussballer:Neymar Jr.": [
    "Brasilianischer Nationalspieler",
    "Offensivspieler",
    "Bekannt für Dribblings"
  ],
  "fussballer:Erling Haaland": [
    "Norwegischer Nationalspieler",
    "Große Statur",
    "Spielt im Sturmzentrum"
  ],
  "fussballer:Jude Bellingham": [
    "Englischer Nationalspieler",
    "Mittelfeldspieler",
    "Kann offensiv viel beitragen"
  ],
  "fussballer:Vinícius Júnior": [
    "Brasilianischer Nationalspieler",
    "Offensivspieler",
    "Bekannt für Dribblings"
  ],
  "fussballer:Mohamed Salah": [
    "Ägyptischer Nationalspieler",
    "Offensivspieler",
    "Spielt gern über den Flügel"
  ],
  "fussballer:Kevin De Bruyne": [
    "Belgischer Nationalspieler",
    "Mittelfeldspieler",
    "Bekannt für präzise Vorlagen"
  ],
  "fussballer:Robert Lewandowski": [
    "Polnischer Nationalspieler",
    "Stürmer",
    "Bekannt für viele Tore"
  ],
  "fussballer:Harry Kane": [
    "Englischer Nationalspieler",
    "Stürmer",
    "Kann auch Chancen vorbereiten"
  ],
  "fussballer:Luka Modrić": [
    "Kroatischer Nationalspieler",
    "Mittelfeldspieler",
    "Technisch sehr stark"
  ],
  "fussballer:Toni Kroos": [
    "Deutscher Nationalspieler",
    "Hat viele große Titel gewonnen",
    "Bekannt für Spielverständnis"
  ],
  "fussballer:Manuel Neuer": [
    "Deutscher Nationalspieler",
    "Torwart",
    "Spielt weit vor seinem Tor mit"
  ],
  "fussballer:Thomas Müller": [
    "Deutscher Nationalspieler",
    "Hat viele große Titel gewonnen",
    "Bekannt für Spielverständnis"
  ],
  "fussballer:Sergio Ramos": [
    "Spanischer Nationalspieler",
    "Verteidiger",
    "Kopfballstark"
  ],
  "fussballer:Karim Benzema": [
    "Französischer Nationalspieler",
    "Stürmer",
    "Kann gut mit Mitspielern kombinieren"
  ],
  "fussballer:Ronaldinho": [
    "Brasilianischer Nationalspieler",
    "Offensivspieler",
    "Bekannt für Dribblings"
  ],
  "fussballer:Zinedine Zidane": [
    "Französischer Nationalspieler",
    "Offensiver Mittelfeldspieler",
    "Später auch Trainer"
  ],
  "fussballer:Ronaldo Nazário": [
    "Brasilianischer Nationalspieler",
    "Stürmer",
    "Besonders gefährlich im Dribbling"
  ],
  "fussballer:David Beckham": [
    "Englischer Nationalspieler",
    "Mittelfeldspieler",
    "Bekannt für Flanken und Freistöße"
  ],
  "fussballer:Thierry Henry": [
    "Französischer Nationalspieler",
    "Offensivspieler",
    "Sehr schnell"
  ],
  "fussballer:Andrés Iniesta": [
    "Spanischer Nationalspieler",
    "Mittelfeldspieler",
    "Bekannt für sicheres Passspiel"
  ],
  "fussballer:Xavi": [
    "Spanischer Nationalspieler",
    "Mittelfeldspieler",
    "Bekannt für sicheres Passspiel"
  ],
  "fussballer:Zlatan Ibrahimović": [
    "Schwedischer Nationalspieler",
    "Große Statur",
    "Bekannt für spektakuläre Tore"
  ],
  "filme:Titanic": [
    "Historisches Liebesdrama",
    "Spielt überwiegend auf einem Schiff",
    "Eine Katastrophe verändert alles"
  ],
  "filme:Avatar": [
    "Science-Fiction",
    "Eine fremde Welt steht im Mittelpunkt",
    "Natur und Technologie geraten in Konflikt"
  ],
  "filme:Avengers: Endgame": [
    "Superheldenfilm",
    "Mehrere Helden kämpfen zusammen",
    "Die Bedrohung betrifft sehr viele Menschen"
  ],
  "filme:Avengers: Infinity War": [
    "Superheldenfilm",
    "Mehrere Helden kämpfen zusammen",
    "Die Bedrohung betrifft sehr viele Menschen"
  ],
  "filme:The Dark Knight": [
    "Düstere Großstadt",
    "Ein maskierter Ermittler steht im Mittelpunkt",
    "Verbrechen und Moral spielen eine große Rolle"
  ],
  "filme:Interstellar": [
    "Science-Fiction",
    "Eine gefährliche Reise ins All",
    "Wissenschaft hilft beim Überleben"
  ],
  "filme:Inception": [
    "Science-Fiction-Thriller",
    "Wahrnehmung und Wirklichkeit verschwimmen",
    "Eine Gruppe plant einen schwierigen Auftrag"
  ],
  "filme:Joker": [
    "Düsteres Drama",
    "Ein Außenseiter wird immer gewalttätiger",
    "Gesellschaftliche Spannungen prägen die Handlung"
  ],
  "filme:Gladiator": [
    "Historisches Setting",
    "Ein Krieger verliert seine Stellung",
    "Kämpfe vor Publikum spielen eine wichtige Rolle"
  ],
  "filme:The Lord of the Rings: The Return of the King": [
    "Fantasy",
    "Eine gefährliche Reise durch eine erfundene Welt",
    "Ein mächtiger Gegenstand bedroht die Gemeinschaft"
  ],
  "filme:The Wolf of Wall Street": [
    "Geschäftswelt",
    "Geld und Exzesse stehen im Mittelpunkt",
    "Basiert auf realen Ereignissen"
  ],
  "filme:Fight Club": [
    "Düstere Gegenwartsgeschichte",
    "Identität spielt eine große Rolle",
    "Gewalt wird Teil einer Bewegung"
  ],
  "filme:Forrest Gump": [
    "Drama mit humorvollen Momenten",
    "Ein Lebensweg über viele Jahre",
    "Historische Ereignisse tauchen immer wieder auf"
  ],
  "filme:Jurassic Park": [
    "Abenteuerfilm",
    "Ausgestorbene Tiere kehren zurück",
    "Ein Freizeitprojekt gerät außer Kontrolle"
  ],
  "filme:Jurassic World": [
    "Abenteuerfilm",
    "Ausgestorbene Tiere kehren zurück",
    "Ein Freizeitprojekt gerät außer Kontrolle"
  ],
  "filme:Harry Potter and the Deathly Hallows – Part 2": [
    "Fantasy",
    "Eine verborgene Zaubererwelt",
    "Junge Menschen geraten in große Gefahren"
  ],
  "filme:Spider-Man: No Way Home": [
    "Superheldenfilm",
    "Ein junger Held hat ein Doppelleben",
    "Eine Großstadt ist ein wichtiger Schauplatz"
  ],
  "filme:Top Gun: Maverick": [
    "Actionfilm",
    "Flugzeuge spielen eine wichtige Rolle",
    "Ein erfahrener Mann übernimmt einen schwierigen Auftrag"
  ],
  "filme:Oppenheimer": [
    "Historisches Drama",
    "Wissenschaft und Verantwortung",
    "Basiert auf dem Leben einer realen Person"
  ],
  "filme:Barbie": [
    "Farbenfrohe Welt",
    "Eine Reise verändert das Selbstbild",
    "Spielt mit gesellschaftlichen Rollen"
  ],
  "filme:The Shawshank Redemption": [
    "Drama",
    "Ein Gefängnis ist der zentrale Schauplatz",
    "Hoffnung spielt eine große Rolle"
  ],
  "filme:Pulp Fiction": [
    "Kriminalfilm",
    "Mehrere Geschichten greifen ineinander",
    "Ungewöhnliche Gespräche spielen eine wichtige Rolle"
  ],
  "filme:Star Wars: The Empire Strikes Back": [
    "Science-Fiction",
    "Ein Konflikt um die Macht in einer Galaxis",
    "Raumschiffe und Widerstand spielen eine wichtige Rolle"
  ],
  "filme:Pirates of the Caribbean: The Curse of the Black Pearl": [
    "Abenteuerfilm",
    "Segelschiffe und Seeräuber",
    "Übernatürliche Gefahren bedrohen die Figuren"
  ],
  "filme:The Matrix": [
    "Science-Fiction",
    "Die Wirklichkeit ist nicht wie erwartet",
    "Ein Mann wird Teil eines Widerstands"
  ],
  "filme:The Godfather": [
    "Kriminaldrama",
    "Eine einflussreiche Familie",
    "Macht und Loyalität stehen im Mittelpunkt"
  ],
  "filme:The Godfather Part II": [
    "Kriminaldrama",
    "Eine einflussreiche Familie",
    "Macht und Loyalität stehen im Mittelpunkt"
  ],
  "filme:The Green Mile": [
    "Drama",
    "Ein Gefängnis ist der zentrale Schauplatz",
    "Hoffnung spielt eine große Rolle"
  ],
  "filme:Schindler’s List": [
    "Historisches Drama",
    "Spielt während des Zweiten Weltkriegs",
    "Ein Mann versucht Menschenleben zu retten"
  ],
  "filme:Saving Private Ryan": [
    "Kriegsfilm",
    "Eine Gruppe Soldaten erhält einen besonderen Auftrag",
    "Spielt während des Zweiten Weltkriegs"
  ],
  "filme:Django Unchained": [
    "Western",
    "Eine Befreiungsmission",
    "Rache und Unterdrückung spielen eine große Rolle"
  ],
  "filme:Inglourious Basterds": [
    "Alternative Geschichtserzählung",
    "Spielt während des Zweiten Weltkriegs",
    "Ein geplanter Anschlag steht im Mittelpunkt"
  ],
  "filme:Se7en": [
    "Thriller",
    "Ermittlungen gegen einen Serienmörder",
    "Psychologie spielt eine wichtige Rolle"
  ],
  "filme:The Silence of the Lambs": [
    "Thriller",
    "Ermittlungen gegen einen Serienmörder",
    "Psychologie spielt eine wichtige Rolle"
  ],
  "filme:The Departed": [
    "Kriminalfilm",
    "Verdeckte Identitäten",
    "Polizei und organisierte Kriminalität sind eng verbunden"
  ],
  "filme:Shutter Island": [
    "Thriller",
    "Eine abgeschiedene Einrichtung",
    "Wahrnehmung und Wahrheit sind schwer zu trennen"
  ],
  "filme:Goodfellas": [
    "Kriminaldrama",
    "Aufstieg in einer kriminellen Welt",
    "Erfolg hat einen hohen Preis"
  ],
  "filme:Scarface": [
    "Kriminaldrama",
    "Aufstieg in einer kriminellen Welt",
    "Erfolg hat einen hohen Preis"
  ],
  "filme:The Truman Show": [
    "Eine scheinbar gewöhnliche Welt",
    "Eine Person wird ständig beobachtet",
    "Die Hauptfigur zweifelt an ihrem Alltag"
  ],
  "filme:Back to the Future": [
    "Science-Fiction-Komödie",
    "Eine ungewöhnliche Erfindung",
    "Die Zeit wird zum Problem"
  ],
  "filme:E.T. the Extra-Terrestrial": [
    "Science-Fiction",
    "Ein Kind hilft einem fremden Besucher",
    "Eine ungewöhnliche Freundschaft"
  ],
  "filme:Jaws": [
    "Thriller",
    "Gefahr kommt aus dem Wasser",
    "Eine Küstengemeinde ist bedroht"
  ],
  "filme:Ghostbusters": [
    "Übernatürliche Komödie",
    "Ein ungewöhnliches Team",
    "Technische Geräte helfen gegen Geister"
  ],
  "filme:Home Alone": [
    "Familienkomödie",
    "Ein Kind muss ohne seine Familie zurechtkommen",
    "Ein Haus wird mit Fallen verteidigt"
  ],
  "filme:The Hangover": [
    "Komödie",
    "Freunde geraten in peinliche Situationen",
    "Erwachsenwerden oder Feiern sorgt für Chaos"
  ],
  "filme:American Pie": [
    "Komödie",
    "Freunde geraten in peinliche Situationen",
    "Erwachsenwerden oder Feiern sorgt für Chaos"
  ],
  "filme:Pretty Woman": [
    "Romantische Komödie",
    "Zwei sehr unterschiedliche Lebenswelten",
    "Eine geschäftliche Begegnung wird persönlich"
  ],
  "filme:The Intouchables": [
    "Tragikomödie",
    "Zwei sehr unterschiedliche Männer",
    "Eine ungewöhnliche Freundschaft verändert den Alltag"
  ],
  "filme:The Sixth Sense": [
    "Übernatürlicher Thriller",
    "Ein Kind hat besondere Wahrnehmungen",
    "Ein Erwachsener versucht zu helfen"
  ],
  "filme:The Shining": [
    "Horrorfilm",
    "Eine Familie ist weitgehend isoliert",
    "Ein großes Gebäude wird zum gefährlichen Schauplatz"
  ],
  "filme:It": [
    "Horrorfilm",
    "Kinder stellen sich einer Bedrohung",
    "Angst nimmt verschiedene Formen an"
  ],
  "filme:The Conjuring": [
    "Horrorfilm",
    "Übernatürliche Vorgänge in einem Haus",
    "Ein Paar untersucht die Ereignisse"
  ],
  "filme:Scream": [
    "Horrorfilm",
    "Ein maskierter Täter",
    "Junge Menschen müssen überleben"
  ],
  "filme:Halloween": [
    "Horrorfilm",
    "Ein maskierter Täter",
    "Junge Menschen müssen überleben"
  ],
  "filme:Alien": [
    "Science-Fiction-Horror",
    "Gefährliche außerirdische Wesen",
    "Eine abgelegene Station oder ein Raumschiff wird zum Kampfplatz"
  ],
  "filme:Aliens": [
    "Science-Fiction-Horror",
    "Gefährliche außerirdische Wesen",
    "Eine abgelegene Station oder ein Raumschiff wird zum Kampfplatz"
  ],
  "filme:Terminator 2: Judgment Day": [
    "Science-Fiction-Action",
    "Ein Mensch wird von Maschinen gejagt",
    "Die Zukunft soll verändert werden"
  ],
  "filme:Die Hard": [
    "Actionfilm",
    "Ein Mann gerät in eine Geiselnahme",
    "Ein großes Gebäude ist der zentrale Schauplatz"
  ],
  "filme:John Wick": [
    "Actionfilm",
    "Ein erfahrener Kämpfer",
    "Eine persönliche Tat löst einen großen Konflikt aus"
  ],
  "filme:Mad Max: Fury Road": [
    "Endzeitfilm",
    "Eine lange Verfolgungsjagd",
    "Fahrzeuge und knappe Ressourcen sind entscheidend"
  ],
  "filme:Speed": [
    "Actionthriller",
    "Ein Fahrzeug darf nicht anhalten",
    "Ein Wettlauf gegen die Zeit"
  ],
  "filme:Men in Black": [
    "Science-Fiction-Komödie",
    "Eine geheime Organisation",
    "Außerirdische leben unerkannt unter Menschen"
  ],
  "filme:Independence Day": [
    "Science-Fiction-Action",
    "Eine weltweite Bedrohung",
    "Menschen organisieren einen Gegenangriff"
  ],
  "filme:The Martian": [
    "Science-Fiction",
    "Eine gefährliche Reise ins All",
    "Wissenschaft hilft beim Überleben"
  ],
  "filme:Dune": [
    "Science-Fiction",
    "Eine Wüstenwelt steht im Mittelpunkt",
    "Macht und wertvolle Ressourcen bestimmen den Konflikt"
  ],
  "filme:Dune: Part Two": [
    "Science-Fiction",
    "Eine Wüstenwelt steht im Mittelpunkt",
    "Macht und wertvolle Ressourcen bestimmen den Konflikt"
  ],
  "filme:Avatar: The Way of Water": [
    "Science-Fiction",
    "Eine fremde Welt steht im Mittelpunkt",
    "Natur und Technologie geraten in Konflikt"
  ],
  "filme:Star Wars: A New Hope": [
    "Science-Fiction",
    "Ein Konflikt um die Macht in einer Galaxis",
    "Raumschiffe und Widerstand spielen eine wichtige Rolle"
  ],
  "filme:Star Wars: Return of the Jedi": [
    "Science-Fiction",
    "Ein Konflikt um die Macht in einer Galaxis",
    "Raumschiffe und Widerstand spielen eine wichtige Rolle"
  ],
  "filme:Star Wars: Revenge of the Sith": [
    "Science-Fiction",
    "Ein Konflikt um die Macht in einer Galaxis",
    "Raumschiffe und Widerstand spielen eine wichtige Rolle"
  ],
  "filme:Star Wars: The Force Awakens": [
    "Science-Fiction",
    "Ein Konflikt um die Macht in einer Galaxis",
    "Raumschiffe und Widerstand spielen eine wichtige Rolle"
  ],
  "filme:Rogue One: A Star Wars Story": [
    "Science-Fiction",
    "Ein Konflikt um die Macht in einer Galaxis",
    "Raumschiffe und Widerstand spielen eine wichtige Rolle"
  ],
  "filme:The Lord of the Rings: The Fellowship of the Ring": [
    "Fantasy",
    "Eine gefährliche Reise durch eine erfundene Welt",
    "Ein mächtiger Gegenstand bedroht die Gemeinschaft"
  ],
  "filme:The Lord of the Rings: The Two Towers": [
    "Fantasy",
    "Eine gefährliche Reise durch eine erfundene Welt",
    "Ein mächtiger Gegenstand bedroht die Gemeinschaft"
  ],
  "filme:The Hobbit: An Unexpected Journey": [
    "Fantasy",
    "Eine Reise mit einer ungewöhnlichen Gemeinschaft",
    "Ein verlorenes Reich soll zurückgewonnen werden"
  ],
  "filme:Harry Potter and the Philosopher’s Stone": [
    "Fantasy",
    "Eine verborgene Zaubererwelt",
    "Junge Menschen geraten in große Gefahren"
  ],
  "filme:Harry Potter and the Chamber of Secrets": [
    "Fantasy",
    "Eine verborgene Zaubererwelt",
    "Junge Menschen geraten in große Gefahren"
  ],
  "filme:Harry Potter and the Prisoner of Azkaban": [
    "Fantasy",
    "Eine verborgene Zaubererwelt",
    "Junge Menschen geraten in große Gefahren"
  ],
  "filme:Harry Potter and the Goblet of Fire": [
    "Fantasy",
    "Eine verborgene Zaubererwelt",
    "Junge Menschen geraten in große Gefahren"
  ],
  "filme:Pirates of the Caribbean: Dead Man’s Chest": [
    "Abenteuerfilm",
    "Segelschiffe und Seeräuber",
    "Übernatürliche Gefahren bedrohen die Figuren"
  ],
  "filme:Iron Man": [
    "Superheldenfilm",
    "Ein technisch begabter Geschäftsmann",
    "Eine selbst entwickelte Rüstung verändert sein Leben"
  ],
  "filme:The Avengers": [
    "Superheldenfilm",
    "Mehrere Helden kämpfen zusammen",
    "Die Bedrohung betrifft sehr viele Menschen"
  ],
  "filme:Guardians of the Galaxy": [
    "Science-Fiction-Abenteuer",
    "Eine Gruppe ungewöhnlicher Außenseiter",
    "Humor und Musik spielen eine wichtige Rolle"
  ],
  "filme:Black Panther": [
    "Superheldenfilm",
    "Eine verborgene fortschrittliche Nation",
    "Ein Herrscher muss sich behaupten"
  ],
  "filme:Deadpool": [
    "Superheldenfilm",
    "Ein unkonventioneller Söldner",
    "Spricht das Publikum direkt an"
  ],
  "filme:Logan": [
    "Düsterer Superheldenfilm",
    "Ein gealterter Kämpfer",
    "Ein junges Mädchen braucht Schutz"
  ],
  "filme:Spider-Man": [
    "Superheldenfilm",
    "Ein junger Held hat ein Doppelleben",
    "Eine Großstadt ist ein wichtiger Schauplatz"
  ],
  "filme:The Batman": [
    "Düstere Großstadt",
    "Ein maskierter Ermittler steht im Mittelpunkt",
    "Verbrechen und Moral spielen eine große Rolle"
  ],
  "filme:The Lion King": [
    "Animationsfilm",
    "Eine Tiergemeinschaft",
    "Ein junger Erbe muss Verantwortung übernehmen"
  ],
  "filme:Shrek": [
    "Animationsfilm",
    "Märchen werden humorvoll verdreht",
    "Ein Außenseiter findet unerwartete Freunde"
  ],
  "filme:Toy Story": [
    "Animationsfilm",
    "Spielzeug hat ein eigenes Leben",
    "Freundschaft und Veränderungen stehen im Mittelpunkt"
  ],
  "filme:Finding Nemo": [
    "Animationsfilm",
    "Eine Suche im Meer",
    "Ein Elternteil sucht sein Kind"
  ],
  "filme:Frozen": [
    "Animationsfilm",
    "Eine königliche Familie",
    "Magische Kräfte beeinflussen das Wetter"
  ],
  "filme:Inside Out": [
    "Animationsfilm",
    "Gefühle werden zu handelnden Figuren",
    "Veränderungen im Leben eines jungen Menschen"
  ],
  "filme:Inside Out 2": [
    "Animationsfilm",
    "Gefühle werden zu handelnden Figuren",
    "Veränderungen im Leben eines jungen Menschen"
  ],
  "filme:Coco": [
    "Animationsfilm",
    "Musik spielt eine große Rolle",
    "Familie und Erinnerung verbinden verschiedene Welten"
  ],
  "filme:WALL-E": [
    "Animationsfilm",
    "Ein Roboter ist lange allein",
    "Eine Begegnung führt zu einer Reise ins All"
  ],
  "filme:Ratatouille": [
    "Animationsfilm",
    "Kochen spielt die Hauptrolle",
    "Ein ungewöhnliches Talent bleibt zunächst verborgen"
  ],
  "filme:How to Train Your Dragon": [
    "Animationsfilm",
    "Ein junger Außenseiter",
    "Eine Freundschaft verändert den Umgang mit gefährlichen Tieren"
  ],
  "filme:Despicable Me": [
    "Animationsfilm",
    "Ein Verbrecher plant etwas Großes",
    "Kinder verändern sein Leben"
  ],
  "the-walking-dead:Lydia": [
    "Dunkle Haare",
    "Jung",
    "Wächst in einer gefährlichen Gemeinschaft auf"
  ],
  "the-walking-dead:Connie": [
    "Praktische Kleidung",
    "Verwendet auch Gebärdensprache",
    "Ist mit einer kleinen Gruppe unterwegs"
  ],
  "the-walking-dead:Magna": [
    "Praktische Kleidung",
    "Reist mit einer kleinen Gruppe",
    "Sucht eine sichere Gemeinschaft"
  ],
  "the-walking-dead:Yumiko": [
    "Praktische Kleidung",
    "Reist mit einer kleinen Gruppe",
    "Sucht eine sichere Gemeinschaft"
  ],
  "the-walking-dead:Kelly": [
    "Praktische Kleidung",
    "Verwendet auch Gebärdensprache",
    "Ist mit einer kleinen Gruppe unterwegs"
  ],
  "the-walking-dead:Luke": [
    "Praktische Kleidung",
    "Reist mit einer kleinen Gruppe",
    "Sucht eine sichere Gemeinschaft"
  ],
  "the-walking-dead:Jadis": [
    "Auffällige Frisur",
    "Führt eine eigene Gruppe",
    "Ihre Loyalität ist schwer einzuschätzen"
  ],
  "the-walking-dead:Princess": [
    "Auffällige Kleidung",
    "Bewaffnet",
    "Sehr gesprächig"
  ],
  "the-walking-dead:Mercer": [
    "Kräftige Statur",
    "Auffällige Rüstung",
    "Militärische Führungsrolle"
  ],
  "the-walking-dead:Pamela Milton": [
    "Gepflegtes Auftreten",
    "Politischer Einfluss",
    "Lebt in einer großen organisierten Gemeinschaft"
  ],
  "the-walking-dead:Lance Hornsby": [
    "Gepflegtes Auftreten",
    "Politischer Einfluss",
    "Lebt in einer großen organisierten Gemeinschaft"
  ],
  "the-walking-dead:Sebastian Milton": [
    "Junger Mann",
    "Verwöhntes Auftreten",
    "Profitiert von der Macht seiner Familie"
  ],
  "the-walking-dead:Max Mercer": [
    "Brille",
    "Gepflegtes Auftreten",
    "Arbeitet in einer Verwaltung"
  ],
  "the-walking-dead:Alden": [
    "Menschlich",
    "Praktische Alltagskleidung",
    "Lebt zeitweise in einer Überlebendengruppe"
  ],
  "the-walking-dead:Siddiq": [
    "Menschlich",
    "Praktische Alltagskleidung",
    "Lebt zeitweise in einer Überlebendengruppe"
  ],
  "the-walking-dead:Gregory": [
    "Älterer Mann",
    "Gepflegtes Auftreten",
    "Will seine Führungsposition behalten"
  ],
  "the-walking-dead:Gareth": [
    "Ruhiges Auftreten",
    "Bewaffnet",
    "Verbirgt ein dunkles Geheimnis hinter Gastfreundschaft"
  ],
  "the-walking-dead:Bob Stookey": [
    "Menschlich",
    "Praktische Alltagskleidung",
    "Lebt zeitweise in einer Überlebendengruppe"
  ],
  "the-walking-dead:Noah": [
    "Menschlich",
    "Praktische Alltagskleidung",
    "Lebt zeitweise in einer Überlebendengruppe"
  ],
  "the-walking-dead:Denise Cloyd": [
    "Menschlich",
    "Medizinischer oder wissenschaftlicher Hintergrund",
    "Hilft anderen mit Fachwissen"
  ],
  "the-walking-dead:Sophia Peletier": [
    "Kind",
    "Alltagskleidung",
    "Wächst in einer gefährlichen neuen Welt auf"
  ],
  "the-walking-dead:Lizzie Samuels": [
    "Kind",
    "Alltagskleidung",
    "Wächst in einer gefährlichen neuen Welt auf"
  ],
  "the-walking-dead:Mika Samuels": [
    "Kind",
    "Alltagskleidung",
    "Wächst in einer gefährlichen neuen Welt auf"
  ],
  "the-walking-dead:Deanna Monroe": [
    "Ältere Frau",
    "Gepflegtes Auftreten",
    "Leitet eine geschützte Gemeinschaft"
  ],
  "the-walking-dead:Jessie Anderson": [
    "Helle Haare",
    "Alltagskleidung",
    "Hat eine enge Familienverbindung zu anderen Überlebenden"
  ],
  "the-walking-dead:Henry": [
    "Menschlich",
    "Praktische Alltagskleidung",
    "Lebt zeitweise in einer Überlebendengruppe"
  ],
  "the-walking-dead:Leah Shaw": [
    "Helle Haare",
    "Bewaffnet",
    "Militärische Erfahrung"
  ],
  "the-walking-dead:Dawn Lerner": [
    "Uniform",
    "Bewaffnet",
    "Hat eine Führungsrolle in einem Krankenhaus"
  ],
  "the-walking-dead:Shiva": [
    "Gestreiftes Fell",
    "Große Raubkatze",
    "Begleitet einen Anführer"
  ],
  "the-walking-dead:Dog": [
    "Fell",
    "Vierbeinig",
    "Begleitet einen schweigsamen Überlebenden"
  ],
  "the-walking-dead:Nicholas": [
    "Menschlich",
    "Praktische Alltagskleidung",
    "Lebt zeitweise in einer Überlebendengruppe"
  ],
  "the-walking-dead:Spencer Monroe": [
    "Menschlich",
    "Praktische Alltagskleidung",
    "Lebt zeitweise in einer Überlebendengruppe"
  ],
  "the-walking-dead:Amy Harrison": [
    "Helle Haare",
    "Alltagskleidung",
    "Hat eine enge Familienverbindung zu anderen Überlebenden"
  ],
  "the-walking-dead:Edwin Jenner": [
    "Menschlich",
    "Medizinischer oder wissenschaftlicher Hintergrund",
    "Hilft anderen mit Fachwissen"
  ],
  "the-walking-dead:Duane Jones": [
    "Kind",
    "Alltagskleidung",
    "Wächst in einer gefährlichen neuen Welt auf"
  ],
  "jurassic:Lewis Dodgson": [
    "Gepflegtes Auftreten",
    "Geschäftliche Interessen",
    "Unterschätzt die Gefahren der Tiere"
  ],
  "jurassic:Peter Ludlow": [
    "Gepflegtes Auftreten",
    "Geschäftliche Interessen",
    "Unterschätzt die Gefahren der Tiere"
  ],
  "jurassic:Dieter Stark": [
    "Praktische Kleidung",
    "Bewaffnet",
    "Hat mit dem Einfangen gefährlicher Tiere zu tun"
  ],
  "jurassic:Ken Wheatley": [
    "Praktische Kleidung",
    "Bewaffnet",
    "Hat mit dem Einfangen gefährlicher Tiere zu tun"
  ],
  "jurassic:Soyona Santos": [
    "Elegante Kleidung",
    "Kriminelle Kontakte",
    "Nutzt gefährliche Tiere für Geschäfte"
  ],
  "jurassic:Zora Bennett": [
    "Praktische Kleidung",
    "Erfahrung mit riskanten Einsätzen",
    "Nimmt an einer gefährlichen Expedition teil"
  ],
  "jurassic:Henry Loomis": [
    "Menschlich",
    "Wissenschaftlicher Hintergrund",
    "Kennt sich mit ausgestorbenen Tieren aus"
  ],
  "jurassic:Duncan Kincaid": [
    "Praktische Kleidung",
    "Erfahrung mit riskanten Einsätzen",
    "Nimmt an einer gefährlichen Expedition teil"
  ],
  "jurassic:Martin Krebs": [
    "Gepflegtes Auftreten",
    "Geschäftliche Interessen",
    "Unterschätzt die Gefahren der Tiere"
  ],
  "jurassic:Reuben Delgado": [
    "Menschlich",
    "Alltagskleidung",
    "Wird mit seiner Familie in eine Gefahrensituation verwickelt"
  ],
  "star-wars:Zeb Orrelios": [
    "Groß",
    "Fell",
    "Ungewöhnlicher Körperbau"
  ],
  "star-wars:Agent Kallus": [
    "Uniform",
    "Auffälliger Backenbart",
    "Seine Loyalität verändert sich"
  ],
  "star-wars:Gilad Pellaeon": [
    "Formelle Uniform",
    "Erteilt Befehle",
    "Dient einer autoritären Macht"
  ],
  "star-wars:Gar Saxon": [
    "Gepanzert",
    "Helm",
    "Mandalorianischer Hintergrund"
  ],
  "star-wars:Ursa Wren": [
    "Gepanzert",
    "Helm",
    "Mandalorianischer Hintergrund"
  ],
  "star-wars:Commander Wolffe": [
    "Rüstung",
    "Militärischer Hintergrund",
    "Wurde als Klonsoldat ausgebildet"
  ],
  "star-wars:Captain Gregor": [
    "Rüstung",
    "Militärischer Hintergrund",
    "Wurde als Klonsoldat ausgebildet"
  ],
  "star-wars:Commander Gree": [
    "Rüstung",
    "Militärischer Hintergrund",
    "Wurde als Klonsoldat ausgebildet"
  ],
  "star-wars:Commander Bly": [
    "Rüstung",
    "Militärischer Hintergrund",
    "Wurde als Klonsoldat ausgebildet"
  ],
  "star-wars:Maarva Andor": [
    "Praktische Kleidung",
    "Geht verdeckt vor",
    "Leistet Widerstand gegen eine Großmacht"
  ],
  "star-wars:Kleya Marki": [
    "Praktische Kleidung",
    "Geht verdeckt vor",
    "Leistet Widerstand gegen eine Großmacht"
  ],
  "star-wars:B2EMO": [
    "Technischer Körper",
    "Kleine Statur",
    "Hilft organischen Begleitern"
  ],
  "star-wars:Jesse": [
    "Rüstung",
    "Militärischer Hintergrund",
    "Wurde als Klonsoldat ausgebildet"
  ],
  "star-wars:Nala Se": [
    "Sehr schlank",
    "Sehr langer Hals",
    "Hat mit Klontechnologie zu tun"
  ],
  "star-wars:Lama Su": [
    "Sehr schlank",
    "Sehr langer Hals",
    "Hat mit Klontechnologie zu tun"
  ],
  "star-wars:Taun We": [
    "Sehr schlank",
    "Sehr langer Hals",
    "Hat mit Klontechnologie zu tun"
  ],
  "star-wars:Admiral Yularen": [
    "Formelle Uniform",
    "Erteilt Befehle",
    "Dient einer autoritären Macht"
  ],
  "star-wars:Admiral Raddus": [
    "Ungewöhnliche Einsätze",
    "Praktische Ausrüstung",
    "Kämpft auf der Seite des Widerstands"
  ],
  "star-wars:Captain Panaka": [
    "Uniform",
    "Trägt eine Schusswaffe",
    "Arbeitet im Personenschutz"
  ],
  "star-wars:Captain Typho": [
    "Uniform",
    "Trägt eine Schusswaffe",
    "Arbeitet im Personenschutz"
  ],
  "star-wars:Beru Lars": [
    "Schlichte Kleidung",
    "Lebt auf einer trockenen Welt",
    "Hat eine wichtige Familienverbindung"
  ],
  "star-wars:Sio Bibble": [
    "Älterer Mann",
    "Heller Bart",
    "Politische Verantwortung"
  ],
  "star-wars:Bib Fortuna": [
    "Schlanke Statur",
    "Auffällige Kopffortsätze",
    "Dient einem mächtigen Verbrecher"
  ],
  "star-wars:Salacious B. Crumb": [
    "Sehr klein",
    "Tierähnliches Gesicht",
    "Hält sich bei einem mächtigen Verbrecher auf"
  ],
  "star-wars:Max Rebo": [
    "Blaue Haut",
    "Rüssel",
    "Spielt ein Instrument"
  ],
  "star-wars:Babu Frik": [
    "Sehr klein",
    "Arbeitet mit Werkzeug",
    "Kennt sich mit Droiden aus"
  ],
  "star-wars:Zorii Bliss": [
    "Verdecktes Gesicht",
    "Eng anliegende Kleidung",
    "Bewegt sich im Schmugglerumfeld"
  ],
  "star-wars:Jannah": [
    "Praktische Kleidung",
    "Trägt einen Bogen",
    "Hat eine militärische Vergangenheit"
  ],
  "star-wars:Qi'ra": [
    "Praktische Kleidung",
    "Bewegt sich im kriminellen Umfeld",
    "Arbeitet nicht nach gewöhnlichen Gesetzen"
  ],
  "star-wars:Tobias Beckett": [
    "Praktische Kleidung",
    "Bewegt sich im kriminellen Umfeld",
    "Arbeitet nicht nach gewöhnlichen Gesetzen"
  ],
  "star-wars:Dryden Vos": [
    "Praktische Kleidung",
    "Bewegt sich im kriminellen Umfeld",
    "Arbeitet nicht nach gewöhnlichen Gesetzen"
  ],
  "star-wars:L3-37": [
    "Technischer Körper",
    "Zweibeinig",
    "Hat einen starken eigenen Willen"
  ],
  "star-wars:Val": [
    "Praktische Kleidung",
    "Bewegt sich im kriminellen Umfeld",
    "Arbeitet nicht nach gewöhnlichen Gesetzen"
  ],
  "star-wars:Rio Durant": [
    "Praktische Kleidung",
    "Bewegt sich im kriminellen Umfeld",
    "Arbeitet nicht nach gewöhnlichen Gesetzen"
  ],
  "star-wars:Cobb Vanth": [
    "Erwachsene Erscheinung",
    "Trägt eine Schusswaffe",
    "Hat eine lokale Führungsrolle"
  ],
  "star-wars:Peli Motto": [
    "Lockige Haare",
    "Arbeitskleidung",
    "Repariert Raumschiffe"
  ],
  "star-wars:Die Waffenschmiedin": [
    "Helm",
    "Schwere Kleidung",
    "Arbeitet mit Metall"
  ],
  "star-wars:Paz Vizsla": [
    "Gepanzert",
    "Helm",
    "Mandalorianischer Hintergrund"
  ],
  "star-wars:Dedra Meero": [
    "Formelle Uniform",
    "Erteilt Befehle",
    "Dient einer autoritären Macht"
  ],
  "star-wars:Syril Karn": [
    "Ordentliches Auftreten",
    "Arbeitet zeitweise im Sicherheitsdienst",
    "Verfolgt ein persönliches Ziel"
  ],
  "star-wars:Kino Loy": [
    "Älterer Mann",
    "Kurze Haare",
    "Hat eine Führungsrolle unter Gefangenen"
  ],
  "star-wars:Bix Caleen": [
    "Dunkle Haare",
    "Praktische Kleidung",
    "Arbeitet mit technischen Geräten"
  ],
  "star-wars:Cal Kestis": [
    "Rötliche Haare",
    "Verwendet ein Lichtschwert",
    "Reist mit einem kleinen Droiden"
  ],
  "star-wars:Merrin": [
    "Blasse Haut",
    "Auffällige Gesichtsmuster",
    "Nutzt ungewöhnliche Magie"
  ],
  "star-wars:Cere Junda": [
    "Beherrscht die Macht",
    "Verwendet ein Lichtschwert",
    "Hat einen Jedi-Hintergrund"
  ],
  "star-wars:Greez Dritus": [
    "Kleine Statur",
    "Mehrere Arme",
    "Steuert ein Raumschiff"
  ],
  "star-wars:BD-1": [
    "Technischer Körper",
    "Kleine Statur",
    "Hilft organischen Begleitern"
  ],
  "star-wars:Trilla Suduri": [
    "Dunkle Kleidung",
    "Verwendet ein Lichtschwert",
    "Jagt Machtnutzer"
  ],
  "marvel:Sentry": [
    "Helle Haare",
    "Besitzt enorme Kräfte",
    "Hat eine gefährliche dunkle Seite"
  ],
  "marvel:U.S. Agent": [
    "Kräftige Statur",
    "Trägt einen Schild",
    "Militärischer Hintergrund"
  ],
  "marvel:Red Hulk": [
    "Sehr massig",
    "Rote Haut",
    "Militärischer Hintergrund"
  ],
  "marvel:Ironheart": [
    "Technisch sehr begabt",
    "Junges Auftreten",
    "Entwickelt eigene Ausrüstung"
  ],
  "marvel:America Chavez": [
    "Jung",
    "Praktische Kleidung",
    "Kann besondere Portale öffnen"
  ],
  "marvel:Korg": [
    "Steinartiger Körper",
    "Kräftige Statur",
    "Humorvolles Auftreten"
  ],
  "marvel:Mary Jane Watson": [
    "Alltagskleidung",
    "Menschlich",
    "Enge Verbindung zu einem maskierten Helden"
  ],
  "marvel:Galactus": [
    "Gigantische Gestalt",
    "Auffälliger Kopf",
    "Bedroht ganze Welten"
  ],
  "marvel:Ego": [
    "Kann menschlich erscheinen",
    "Außergewöhnlich alt",
    "Hat eine kosmische Natur"
  ],
  "marvel:Ronan": [
    "Dunkle Kampfkleidung",
    "Ungewöhnliche Erscheinung",
    "Außerirdische Herkunft"
  ],
  "marvel:Malekith": [
    "Dunkle Kampfkleidung",
    "Ungewöhnliche Erscheinung",
    "Außerirdische Herkunft"
  ],
  "marvel:Kurse": [
    "Dunkle Kampfkleidung",
    "Ungewöhnliche Erscheinung",
    "Außerirdische Herkunft"
  ],
  "marvel:Surtur": [
    "Gigantische Gestalt",
    "Feurige Oberfläche",
    "Trägt eine große Klinge"
  ],
  "marvel:Die Älteste": [
    "Mehrlagige Kleidung",
    "Beherrscht Magie",
    "Kann leuchtende Zeichen erzeugen"
  ],
  "marvel:Kaecilius": [
    "Mehrlagige Kleidung",
    "Beherrscht Magie",
    "Kann leuchtende Zeichen erzeugen"
  ],
  "marvel:Dormammu": [
    "Unmenschliche Gestalt",
    "Auffälliges Gesicht",
    "Existiert außerhalb der gewöhnlichen Welt"
  ],
  "marvel:Baron Mordo": [
    "Mehrlagige Kleidung",
    "Beherrscht Magie",
    "Kann leuchtende Zeichen erzeugen"
  ],
  "marvel:Wenwu": [
    "Gepflegtes Auftreten",
    "Nahkämpfer",
    "Trägt besondere Ringe"
  ],
  "marvel:Xu Xialing": [
    "Athletische Statur",
    "Nahkampfausbildung",
    "Hat mit einer geheimen Organisation zu tun"
  ],
  "marvel:Trevor Slattery": [
    "Älterer Mann",
    "Bart",
    "Kann gut Rollen spielen"
  ],
  "marvel:Death Dealer": [
    "Athletische Statur",
    "Nahkampfausbildung",
    "Hat mit einer geheimen Organisation zu tun"
  ],
  "marvel:Sersi": [
    "Menschliche Erscheinung",
    "Sehr alte Herkunft",
    "Gehört zu einer Gruppe mit kosmischem Auftrag"
  ],
  "marvel:Ikaris": [
    "Menschliche Erscheinung",
    "Sehr alte Herkunft",
    "Gehört zu einer Gruppe mit kosmischem Auftrag"
  ],
  "marvel:Thena": [
    "Menschliche Erscheinung",
    "Sehr alte Herkunft",
    "Gehört zu einer Gruppe mit kosmischem Auftrag"
  ],
  "marvel:Kingo": [
    "Menschliche Erscheinung",
    "Sehr alte Herkunft",
    "Gehört zu einer Gruppe mit kosmischem Auftrag"
  ],
  "marvel:Gilgamesh": [
    "Menschliche Erscheinung",
    "Sehr alte Herkunft",
    "Gehört zu einer Gruppe mit kosmischem Auftrag"
  ],
  "marvel:Makkari": [
    "Menschliche Erscheinung",
    "Sehr alte Herkunft",
    "Gehört zu einer Gruppe mit kosmischem Auftrag"
  ],
  "marvel:Druig": [
    "Menschliche Erscheinung",
    "Sehr alte Herkunft",
    "Gehört zu einer Gruppe mit kosmischem Auftrag"
  ],
  "marvel:Phastos": [
    "Menschliche Erscheinung",
    "Sehr alte Herkunft",
    "Gehört zu einer Gruppe mit kosmischem Auftrag"
  ],
  "marvel:Ajak": [
    "Menschliche Erscheinung",
    "Sehr alte Herkunft",
    "Gehört zu einer Gruppe mit kosmischem Auftrag"
  ],
  "marvel:Arishem": [
    "Gigantische Gestalt",
    "Ungewöhnliche Augen",
    "Kosmische Verantwortung"
  ],
  "marvel:Maria Hill": [
    "Menschlich",
    "Professionelles Auftreten",
    "Arbeitet im Geheimdienstumfeld"
  ],
  "marvel:Phil Coulson": [
    "Menschlich",
    "Professionelles Auftreten",
    "Arbeitet im Geheimdienstumfeld"
  ],
  "marvel:Peggy Carter": [
    "Menschlich",
    "Professionelles Auftreten",
    "Arbeitet im Geheimdienstumfeld"
  ],
  "marvel:Sharon Carter": [
    "Menschlich",
    "Professionelles Auftreten",
    "Arbeitet im Geheimdienstumfeld"
  ],
  "marvel:Pepper Potts": [
    "Gepflegtes Auftreten",
    "Menschlich",
    "Arbeitet im Umfeld eines technisch begabten Milliardärs"
  ],
  "marvel:Happy Hogan": [
    "Gepflegtes Auftreten",
    "Menschlich",
    "Arbeitet im Umfeld eines technisch begabten Milliardärs"
  ],
  "marvel:Hank Pym": [
    "Ältere Erscheinung",
    "Wissenschaftlicher Hintergrund",
    "Hat Erfahrungen mit einer winzigen Welt"
  ],
  "marvel:Janet van Dyne": [
    "Ältere Erscheinung",
    "Wissenschaftlicher Hintergrund",
    "Hat Erfahrungen mit einer winzigen Welt"
  ],
  "marvel:Luis": [
    "Alltagskleidung",
    "Menschlich",
    "Erzählt gern ausführliche Geschichten"
  ],
  "marvel:MJ": [
    "Alltagskleidung",
    "Menschlich",
    "Enge Verbindung zu einem maskierten Helden"
  ],
  "marvel:Ned Leeds": [
    "Jung",
    "Alltagskleidung",
    "Unterstützt einen maskierten Freund"
  ],
  "marvel:Gwen Stacy": [
    "Alltagskleidung",
    "Menschlich",
    "Enge Verbindung zu einem maskierten Helden"
  ],
  "marvel:Elektra": [
    "Athletische Statur",
    "Praktische Kampfkleidung",
    "Verwendet Waffen"
  ],
  "marvel:Bullseye": [
    "Menschlich",
    "Kampfausbildung",
    "Trifft außergewöhnlich präzise"
  ],
  "harry-potter:Newt Scamander": [
    "Langer Mantel",
    "Trägt einen Koffer",
    "Kümmert sich um magische Tiere"
  ],
  "harry-potter:Tina Goldstein": [
    "Formelle Kleidung",
    "Trägt einen Zauberstab",
    "Arbeitet im magischen Staatsdienst"
  ],
  "harry-potter:Queenie Goldstein": [
    "Helle gewellte Haare",
    "Elegante Kleidung",
    "Kann fremde Gedanken wahrnehmen"
  ],
  "harry-potter:Jacob Kowalski": [
    "Kräftige Statur",
    "Schnurrbart",
    "Arbeitet mit Backwaren"
  ],
  "harry-potter:Gellert Grindelwald": [
    "Helle Haare",
    "Dunkle Kleidung",
    "Versammelt Anhänger um sich"
  ],
  "harry-potter:Credence Barebone": [
    "Dunkle Haare",
    "Schlichte Kleidung",
    "Trägt gefährliche Magie in sich"
  ],
  "harry-potter:Theseus Scamander": [
    "Formelle Kleidung",
    "Trägt einen Zauberstab",
    "Arbeitet im magischen Staatsdienst"
  ],
  "harry-potter:Leta Lestrange": [
    "Dunkle Haare",
    "Elegantes Auftreten",
    "Bewegt sich in der Zaubererwelt"
  ],
  "harry-potter:Yusuf Kama": [
    "Dunkle Haut",
    "Längerer Mantel",
    "Sucht nach einer Familienverbindung"
  ],
  "harry-potter:Bunty Broadacre": [
    "Praktische Kleidung",
    "Kümmert sich um magische Tiere",
    "Arbeitet als Assistentin"
  ],
  "harry-potter:Eulalie Hicks": [
    "Lehrerin",
    "Elegante Kleidung",
    "Beherrscht anspruchsvolle Magie"
  ],
  "harry-potter:Seraphina Picquery": [
    "Elegante Kleidung",
    "Politische Verantwortung",
    "Bewegt sich in der Zaubererwelt"
  ],
  "harry-potter:Nicolas Flamel": [
    "Sehr alt",
    "Helle Haare",
    "Beschäftigt sich mit Alchemie"
  ],
  "harry-potter:Vinda Rosier": [
    "Dunkle Haare",
    "Elegantes Auftreten",
    "Bewegt sich in der Zaubererwelt"
  ],
  "harry-potter:Abernathy": [
    "Formelle Kleidung",
    "Zauberer",
    "Wechselt seine Loyalität"
  ],
  "harry-potter:Mary Lou Barebone": [
    "Strenges Auftreten",
    "Schlichte dunkle Kleidung",
    "Lehnt Magie ab"
  ],
  "harry-potter:Modesty Barebone": [
    "Kind",
    "Schlichte Kleidung",
    "Lebt in einem strengen Haushalt"
  ],
  "harry-potter:Gnarlak": [
    "Kleine Statur",
    "Auffällige Ohren",
    "Hat mit einem Nachtlokal zu tun"
  ],
  "harry-potter:Anton Vogel": [
    "Formelle Kleidung",
    "Bewegt sich in der Zaubererwelt",
    "Hat mit einer politischen Versammlung zu tun"
  ],
  "harry-potter:Vicência Santos": [
    "Elegante Kleidung",
    "Politische Verantwortung",
    "Bewegt sich in der Zaubererwelt"
  ],
  "harry-potter:Helmut": [
    "Formelle Kleidung",
    "Bewegt sich in der Zaubererwelt",
    "Hat mit einer politischen Versammlung zu tun"
  ],
  "harry-potter:Liu Tao": [
    "Formelle Kleidung",
    "Bewegt sich in der Zaubererwelt",
    "Hat mit einer politischen Versammlung zu tun"
  ],
  "harry-potter:Teddy (Niffler)": [
    "Sehr klein",
    "Fell",
    "Interessiert sich für glänzende Gegenstände"
  ],
  "harry-potter:Pickett": [
    "Sehr klein",
    "Pflanzenähnlicher Körper",
    "Kann sich gut verstecken"
  ],
  "harry-potter:Frank (Donnervogel)": [
    "Große Flügel",
    "Gefieder",
    "Hat Einfluss auf das Wetter"
  ],
  "harry-potter:Dougal (Demiguise)": [
    "Helles Fell",
    "Affenähnliche Gestalt",
    "Kann sich unsichtbar machen"
  ],
  "harry-potter:Zouwu": [
    "Katzenähnlicher Körper",
    "Langer auffälliger Schwanz",
    "Sehr beweglich"
  ],
  "harry-potter:Qilin": [
    "Vierbeinig",
    "Huftierähnliche Gestalt",
    "Besitzt besondere Wahrnehmung"
  ],
  "harry-potter:Erumpent": [
    "Sehr massig",
    "Auffälliges Horn",
    "Gefährlicher Körperkontakt"
  ],
  "harry-potter:Sturzfalter": [
    "Geflügeltes Wesen",
    "Kann seine Körpergröße verändern",
    "Gefährlicher Jäger"
  ],
  "game-of-thrones:Rhaenyra Targaryen": [
    "Helle Haare",
    "Adlige Herkunft",
    "Hat eine Verbindung zu einem Drachen"
  ],
  "game-of-thrones:Daemon Targaryen": [
    "Helle Haare",
    "Kann Waffen führen",
    "Hat eine Verbindung zu einem Drachen"
  ],
  "game-of-thrones:Alicent Hightower": [
    "Längere rötliche Haare",
    "Elegante Kleidung",
    "Bewegt sich im Machtzentrum des Hofes"
  ],
  "game-of-thrones:Viserys I Targaryen": [
    "Helle Haare",
    "Königliche Kleidung",
    "Seine Familie streitet um die Nachfolge"
  ],
  "game-of-thrones:Otto Hightower": [
    "Älterer Mann",
    "Gepflegter Bart",
    "Einflussreicher königlicher Berater"
  ],
  "game-of-thrones:Corlys Velaryon": [
    "Helle längere Haare",
    "Erfahrener Seefahrer",
    "Besitzt großen Einfluss"
  ],
  "game-of-thrones:Rhaenys Targaryen": [
    "Helle Haare",
    "Adlige Herkunft",
    "Hat eine Verbindung zu einem Drachen"
  ],
  "game-of-thrones:Criston Cole": [
    "Rüstung",
    "Ritterlicher Hintergrund",
    "Dient in einer königlichen Leibwache"
  ],
  "game-of-thrones:Aemond Targaryen": [
    "Helle Haare",
    "Kann Waffen führen",
    "Hat eine Verbindung zu einem Drachen"
  ],
  "game-of-thrones:Aegon II Targaryen": [
    "Helle Haare",
    "Kann Waffen führen",
    "Hat eine Verbindung zu einem Drachen"
  ],
  "game-of-thrones:Helaena Targaryen": [
    "Helle Haare",
    "Adlige Herkunft",
    "Hat eine Verbindung zu einem Drachen"
  ],
  "game-of-thrones:Daeron Targaryen": [
    "Helle Haare",
    "Kann Waffen führen",
    "Hat eine Verbindung zu einem Drachen"
  ],
  "game-of-thrones:Jacaerys Velaryon": [
    "Jung",
    "Adlige Herkunft",
    "Seine Abstammung ist politisch umstritten"
  ],
  "game-of-thrones:Lucerys Velaryon": [
    "Jung",
    "Adlige Herkunft",
    "Seine Abstammung ist politisch umstritten"
  ],
  "game-of-thrones:Joffrey Velaryon": [
    "Jung",
    "Adlige Herkunft",
    "Seine Abstammung ist politisch umstritten"
  ],
  "game-of-thrones:Baela Targaryen": [
    "Helle Haare",
    "Adlige Herkunft",
    "Hat eine Verbindung zu einem Drachen"
  ],
  "game-of-thrones:Rhaena Targaryen": [
    "Helle Haare",
    "Adlige Herkunft",
    "Sucht nach einem eigenen Platz in der Familie"
  ],
  "game-of-thrones:Laenor Velaryon": [
    "Helle Haare",
    "Adlige Herkunft",
    "Drachen spielen in der Familie eine große Rolle"
  ],
  "game-of-thrones:Laena Velaryon": [
    "Helle Haare",
    "Adlige Herkunft",
    "Drachen spielen in der Familie eine große Rolle"
  ],
  "game-of-thrones:Mysaria": [
    "Dunkle Haare",
    "Hat Verbindungen in der Unterwelt",
    "Arbeitet mit Informationen"
  ],
  "game-of-thrones:Larys Strong": [
    "Gepflegtes Auftreten",
    "Körperliche Einschränkung",
    "Arbeitet mit Geheimnissen"
  ],
  "game-of-thrones:Harwin Strong": [
    "Kräftige Statur",
    "Dunkle Haare",
    "Militärischer Hintergrund"
  ],
  "game-of-thrones:Lyonel Strong": [
    "Älterer Mann",
    "Adlige Herkunft",
    "Verbindung zu einer großen Burg"
  ],
  "game-of-thrones:Vaemond Velaryon": [
    "Helle Haare",
    "Adlige Herkunft",
    "Streitet um die Nachfolge seiner Familie"
  ],
  "game-of-thrones:Erryk Cargyll": [
    "Rüstung",
    "Ritterlicher Hintergrund",
    "Dient in einer königlichen Leibwache"
  ],
  "game-of-thrones:Arryk Cargyll": [
    "Rüstung",
    "Ritterlicher Hintergrund",
    "Dient in einer königlichen Leibwache"
  ],
  "game-of-thrones:Addam of Hull": [
    "Seefahrerischer Hintergrund",
    "Einfache Herkunft",
    "Hat Verbindung zu einer mächtigen Flotte"
  ],
  "game-of-thrones:Alyn of Hull": [
    "Seefahrerischer Hintergrund",
    "Einfache Herkunft",
    "Hat Verbindung zu einer mächtigen Flotte"
  ],
  "game-of-thrones:Hugh Hammer": [
    "Kräftige Statur",
    "Handwerklicher Hintergrund",
    "Kann große Hitze aushalten"
  ],
  "game-of-thrones:Ulf White": [
    "Helle Haare",
    "Einfaches Auftreten",
    "Kommt überraschend in ein mächtiges Umfeld"
  ],
  "game-of-thrones:Alys Rivers": [
    "Dunkle lange Haare",
    "Geheimnisvolles Auftreten",
    "Hat besondere Wahrnehmungen"
  ],
  "game-of-thrones:Simon Strong": [
    "Älterer Mann",
    "Adlige Herkunft",
    "Verbindung zu einer großen Burg"
  ],
  "game-of-thrones:Orwyle": [
    "Lange Kleidung",
    "Gelehrter Hintergrund",
    "Dient einer mächtigen Gemeinschaft"
  ],
  "game-of-thrones:Gerardys": [
    "Lange Kleidung",
    "Gelehrter Hintergrund",
    "Dient einer mächtigen Gemeinschaft"
  ],
  "game-of-thrones:Gwayne Hightower": [
    "Adlige Herkunft",
    "Militärische Verantwortung",
    "Wird in einen Erbfolgekrieg hineingezogen"
  ],
  "game-of-thrones:Ormund Hightower": [
    "Adlige Herkunft",
    "Militärische Verantwortung",
    "Wird in einen Erbfolgekrieg hineingezogen"
  ],
  "game-of-thrones:Roderick Dustin": [
    "Adlige Herkunft",
    "Militärische Verantwortung",
    "Wird in einen Erbfolgekrieg hineingezogen"
  ],
  "game-of-thrones:Torrhen Manderly": [
    "Adlige Herkunft",
    "Militärische Verantwortung",
    "Wird in einen Erbfolgekrieg hineingezogen"
  ],
  "game-of-thrones:Borros Baratheon": [
    "Adlige Herkunft",
    "Militärische Verantwortung",
    "Wird in einen Erbfolgekrieg hineingezogen"
  ],
  "game-of-thrones:Cregan Stark": [
    "Adlige Herkunft",
    "Militärische Verantwortung",
    "Wird in einen Erbfolgekrieg hineingezogen"
  ],
  "game-of-thrones:Aemma Arryn": [
    "Helle Haare",
    "Königliches Umfeld",
    "Die Nachfolge ihrer Familie spielt eine große Rolle"
  ],
  "game-of-thrones:Oscar Tully": [
    "Junger Mann",
    "Adlige Herkunft",
    "Muss sich vor älteren Anführern behaupten"
  ],
  "game-of-thrones:Tyland Lannister": [
    "Gepflegtes Auftreten",
    "Reiche Familie",
    "Hat politischen Einfluss"
  ],
  "game-of-thrones:Jason Lannister": [
    "Gepflegtes Auftreten",
    "Reiche Familie",
    "Hat politischen Einfluss"
  ],
  "game-of-thrones:Jeyne Arryn": [
    "Adlige Herkunft",
    "Hat eine Führungsrolle",
    "Verbindung zu einer Bergregion"
  ],
  "game-of-thrones:Alfred Broome": [
    "Rüstung",
    "Ritterlicher Hintergrund",
    "Seine Loyalität steht infrage"
  ],
  "game-of-thrones:Mellos": [
    "Lange Kleidung",
    "Gelehrter Hintergrund",
    "Dient einer mächtigen Gemeinschaft"
  ],
  "game-of-thrones:Blut": [
    "Kräftige Statur",
    "Bewaffnet",
    "Wird für einen geheimen Auftrag angeworben"
  ],
  "game-of-thrones:Käse": [
    "Unauffällige Kleidung",
    "Kennt geheime Wege",
    "Arbeitet mit kleinen Tieren"
  ],
  "game-of-thrones:Vhagar": [
    "Schuppen",
    "Große Flügel",
    "Kann Feuer speien"
  ],
  "game-of-thrones:Caraxes": [
    "Schuppen",
    "Große Flügel",
    "Kann Feuer speien"
  ],
  "game-of-thrones:Syrax": [
    "Schuppen",
    "Große Flügel",
    "Kann Feuer speien"
  ],
  "game-of-thrones:Meleys": [
    "Schuppen",
    "Große Flügel",
    "Kann Feuer speien"
  ],
  "game-of-thrones:Sunfyre": [
    "Schuppen",
    "Große Flügel",
    "Kann Feuer speien"
  ],
  "game-of-thrones:Seasmoke": [
    "Schuppen",
    "Große Flügel",
    "Kann Feuer speien"
  ],
  "game-of-thrones:Vermax": [
    "Schuppen",
    "Große Flügel",
    "Kann Feuer speien"
  ],
  "game-of-thrones:Arrax": [
    "Schuppen",
    "Große Flügel",
    "Kann Feuer speien"
  ],
  "game-of-thrones:Moondancer": [
    "Schuppen",
    "Große Flügel",
    "Kann Feuer speien"
  ],
  "game-of-thrones:Vermithor": [
    "Schuppen",
    "Große Flügel",
    "Kann Feuer speien"
  ],
  "game-of-thrones:Silverwing": [
    "Schuppen",
    "Große Flügel",
    "Kann Feuer speien"
  ],
  "game-of-thrones:Dreamfyre": [
    "Schuppen",
    "Große Flügel",
    "Kann Feuer speien"
  ],
  "game-of-thrones:Tessarion": [
    "Schuppen",
    "Große Flügel",
    "Kann Feuer speien"
  ],
  "game-of-thrones:Harrold Westerling": [
    "Älterer Mann",
    "Ritterlicher Hintergrund",
    "Dient im königlichen Personenschutz"
  ],
  "game-of-thrones:Lyman Beesbury": [
    "Älterer Mann",
    "Adlige Herkunft",
    "Hat mit den Finanzen des Hofes zu tun"
  ],
  "game-of-thrones:Sharako Lohar": [
    "Seefahrerischer Hintergrund",
    "Kriegerisches Auftreten",
    "Hat eine Führungsrolle"
  ],
  "game-of-thrones:Alysanne Blackwood": [
    "Praktische Kampfkleidung",
    "Adlige Herkunft",
    "Kann mit einem Bogen umgehen"
  ],
  "game-of-thrones:Luthor Largent": [
    "Kräftige Statur",
    "Militärische Ausrüstung",
    "Dient in der Stadtwache"
  ],
  "game-of-thrones:Sheepstealer": [
    "Schuppen",
    "Große Flügel",
    "Kann Feuer speien"
  ],
  "elden-ring:Malenia": [
    "Lange rötliche Haare",
    "Goldene Körperteile",
    "Verwendet eine lange Klinge"
  ],
  "elden-ring:Radahn": [
    "Sehr groß",
    "Rötliche Haare",
    "Hat eine Verbindung zu einem kleinen Pferd"
  ],
  "elden-ring:Maliketh": [
    "Tierähnliche Gestalt",
    "Dunkle Rüstung",
    "Verwendet eine dunkle Klinge"
  ],
  "elden-ring:Godfrey": [
    "Sehr kräftig",
    "Helle Haare",
    "Trägt eine schwere Axt"
  ],
  "elden-ring:Morgott": [
    "Auffällige Hörner",
    "Große Statur",
    "Königliche Herkunft"
  ],
  "elden-ring:Mohg": [
    "Auffällige Hörner",
    "Große Statur",
    "Königliche Herkunft"
  ],
  "elden-ring:Rykard": [
    "Schlangenähnliche Gestalt",
    "Sehr groß",
    "Hat mit einer vulkanischen Gegend zu tun"
  ],
  "elden-ring:Rennala": [
    "Lange Kleidung",
    "Auffällige Kopfbedeckung",
    "Hat Verbindung zu Mondmagie"
  ],
  "elden-ring:Godrick": [
    "Viele Körperteile",
    "Große Statur",
    "Trägt eine schwere Waffe"
  ],
  "elden-ring:Radagon": [
    "Rötliche Haare",
    "Teilweise unbekleidet",
    "Verwendet einen Hammer"
  ],
  "elden-ring:Eldenbestie": [
    "Sehr große Gestalt",
    "Leuchtender Körper",
    "Ungewöhnliche kosmische Erscheinung"
  ],
  "elden-ring:Drachenfürst Placidusax": [
    "Drachenartige Gestalt",
    "Große Flügel",
    "Gefährlicher Fernkampf"
  ],
  "elden-ring:Lichdrache Fortissax": [
    "Drachenartige Gestalt",
    "Große Flügel",
    "Gefährlicher Fernkampf"
  ],
  "elden-ring:Astel": [
    "Ungewöhnlicher Körper",
    "Viele Gliedmaßen",
    "Hat eine kosmische Erscheinung"
  ],
  "elden-ring:Feuerriese": [
    "Gigantische Statur",
    "Rötliche Haare",
    "Feuer spielt eine wichtige Rolle"
  ],
  "elden-ring:Loretta": [
    "Rüstung",
    "Reitet auf einem Pferd",
    "Verwendet eine Stangenwaffe"
  ],
  "elden-ring:Kommandant Niall": [
    "Militärischer Hintergrund",
    "Schwere Waffe",
    "Wird im Kampf unterstützt"
  ],
  "elden-ring:Elemer von den Dornen": [
    "Dunkle Rüstung",
    "Große Klinge",
    "Kann seine Waffe ungewöhnlich bewegen"
  ],
  "elden-ring:Alecto": [
    "Schlanke Statur",
    "Dunkle Kleidung",
    "Verwendet eine kurze Klinge"
  ],
  "elden-ring:Roter Wolf Radagons": [
    "Vierbeinig",
    "Rötliches Fell",
    "Kann Magie einsetzen"
  ],
  "elden-ring:Messmer": [
    "Lange rötliche Haare",
    "Verwendet eine Stangenwaffe",
    "Hat eine Verbindung zu Schlangen"
  ],
  "elden-ring:Rellana": [
    "Rüstung",
    "Verwendet zwei Klingen",
    "Kann Magie einsetzen"
  ],
  "elden-ring:Bayle": [
    "Drachenartige Gestalt",
    "Große Flügel",
    "Gefährlicher Fernkampf"
  ],
  "elden-ring:Midra": [
    "Schlanke Statur",
    "Unheimliche Verwandlung",
    "Flammen spielen eine wichtige Rolle"
  ],
  "elden-ring:Romina": [
    "Ungewöhnlicher Körper",
    "Mehrere tierische Merkmale",
    "Hat Verbindung zur Fäulnis"
  ],
  "elden-ring:Metyr": [
    "Ungewöhnlich viele Finger",
    "Sehr große Gestalt",
    "Hat eine übernatürliche Herkunft"
  ],
  "elden-ring:Kommandant Gaius": [
    "Schwere Rüstung",
    "Reitet ein großes Tier",
    "Militärischer Hintergrund"
  ],
  "elden-ring:Fäulnisritter": [
    "Schwere Rüstung",
    "Große Statur",
    "Verbindung zu einer vergifteten Gegend"
  ],
  "elden-ring:Göttliche Bestie Tanzender Löwe": [
    "Tierähnliche Maske",
    "Ungewöhnliche Bewegungen",
    "Setzt verschiedene Naturkräfte ein"
  ],
  "elden-ring:Avatar des Scadubaums": [
    "Pflanzenartige Gestalt",
    "Sehr groß",
    "Besitzt mehrere Kampfphasen"
  ],
  "elden-ring:Gideon Ofnir": [
    "Rüstung",
    "Wissen spielt eine große Rolle",
    "Kann verschiedene Zauber einsetzen"
  ],
  "elden-ring:Ranni": [
    "Blaue Haut",
    "Mehrere Arme",
    "Auffälliger Hut"
  ],
  "elden-ring:Melina": [
    "Schlichte Reisekleidung",
    "Ein Auge geschlossen",
    "Begleitet die Reise durch ein Abkommen"
  ],
  "elden-ring:Marika": [
    "Lange helle Haare",
    "Göttlicher Hintergrund",
    "Eng mit der Herrschaftsordnung verbunden"
  ],
  "elden-ring:Miquella": [
    "Helle Haare",
    "Jugendliche Erscheinung",
    "Besitzt großen Einfluss auf andere"
  ],
  "elden-ring:Godwyn": [
    "Helle Haare",
    "Königliche Herkunft",
    "Der Tod spielt für seine Geschichte eine besondere Rolle"
  ],
  "elden-ring:Alexander": [
    "Gefäßartiger Körper",
    "Kann sprechen",
    "Hat einen kriegerischen Ehrgeiz"
  ],
  "elden-ring:Blaidd": [
    "Wolfskopf",
    "Große Statur",
    "Verwendet eine große Klinge"
  ],
  "elden-ring:Millicent": [
    "Rötliche Haare",
    "Verliert einen Arm",
    "Kämpft gegen eine Krankheit"
  ],
  "elden-ring:Fia": [
    "Dunkle Kleidung",
    "Ruhiges Auftreten",
    "Nähe und Tod spielen eine wichtige Rolle"
  ],
  "elden-ring:Dungfresser": [
    "Schwere Rüstung",
    "Unheimliche Ausstrahlung",
    "Hat mit einem Fluch zu tun"
  ],
  "elden-ring:Sellen": [
    "Lange Kleidung",
    "Beherrscht Magie",
    "Beschäftigt sich mit verborgenem Wissen"
  ],
  "elden-ring:Rogier": [
    "Lange Kleidung",
    "Beherrscht Magie",
    "Beschäftigt sich mit verborgenem Wissen"
  ],
  "elden-ring:Iji": [
    "Große Statur",
    "Arbeitet mit Metall",
    "Hilft beim Verbessern von Waffen"
  ],
  "elden-ring:Varré": [
    "Helle Maske",
    "Gepflegte Kleidung",
    "Hat eine Verbindung zu Blutritualen"
  ],
  "elden-ring:Nepheli Loux": [
    "Kriegerin",
    "Kräftige Statur",
    "Verwendet Äxte"
  ],
  "elden-ring:Roderika": [
    "Helle Haare",
    "Trägt zeitweise eine Kapuze",
    "Hat eine besondere Verbindung zu Geistern"
  ],
  "elden-ring:Hewg": [
    "Große Statur",
    "Arbeitet mit Metall",
    "Hilft beim Verbessern von Waffen"
  ],
  "elden-ring:Patches": [
    "Kahler Kopf",
    "Praktische Kleidung",
    "Nicht immer vertrauenswürdig"
  ],
  "elden-ring:Igon": [
    "Schwere Verletzungen",
    "Raue Stimme",
    "Verfolgt ein großes geflügeltes Ziel"
  ],
  "elden-ring:Baumwächter": [
    "Rüstung",
    "Reitet auf einem Pferd",
    "Verwendet eine Stangenwaffe"
  ],
  "elden-ring:Bluthundritter Darriwil": [
    "Dunkle Rüstung",
    "Gekrümmte Klinge",
    "Bewegt sich tief am Boden"
  ],
  "elden-ring:Fliegender Drache Agheel": [
    "Drachenartige Gestalt",
    "Große Flügel",
    "Gefährlicher Fernkampf"
  ],
  "elden-ring:Adliger der Götterskalpe": [
    "Sehr rundliche Statur",
    "Helle Kleidung",
    "Verwendet eine Stichwaffe"
  ],
  "elden-ring:Tränennachahmer": [
    "Veränderliche Gestalt",
    "Silbrige Erscheinung",
    "Kann einen Gegner nachahmen"
  ],
  "elden-ring:Drachenbaumwächter": [
    "Rüstung",
    "Reitet auf einem Pferd",
    "Kämpft mit einer schweren Waffe"
  ],
  "elden-ring:Kommandant O’Neil": [
    "Militärischer Hintergrund",
    "Schwere Waffe",
    "Wird im Kampf unterstützt"
  ],
  "elden-ring:Uralter Drache Lansseax": [
    "Drachenartige Gestalt",
    "Große Flügel",
    "Gefährlicher Fernkampf"
  ],
  "elden-ring:Uralter Drache Senessax": [
    "Drachenartige Gestalt",
    "Große Flügel",
    "Gefährlicher Fernkampf"
  ],
  "elden-ring:Ritter des einsamen Kerkers": [
    "Schwere Rüstung",
    "Große Klinge",
    "Kämpft in einem abgeschlossenen Ort"
  ],
  "elden-ring:Miriel": [
    "Großer Panzer",
    "Kann sprechen",
    "Trägt eine religiöse Kopfbedeckung"
  ],
  "elden-ring:Boc": [
    "Kleine Statur",
    "Tierähnliches Gesicht",
    "Kann Kleidung bearbeiten"
  ],
  "elden-ring:Goldmaske": [
    "Sehr schlank",
    "Auffällige Gesichtsverdeckung",
    "Spricht kaum"
  ],
  "elden-ring:Bruder Corhyn": [
    "Schlichte lange Kleidung",
    "Bedeckte Augen",
    "Religiöser Hintergrund"
  ],
  "elden-ring:Rya": [
    "Menschliche und ungewöhnliche Gestalt",
    "Ruhiges Auftreten",
    "Verbindung zu einem Anwesen"
  ],
  "elden-ring:Tanith": [
    "Elegante Kleidung",
    "Gesichtsverdeckung",
    "Leitet ein besonderes Anwesen"
  ],
  "elden-ring:Yura": [
    "Auffällige Kopfbedeckung",
    "Lange Kleidung",
    "Die Identität spielt eine besondere Rolle"
  ],
  "elden-ring:Shabriri": [
    "Auffällige Kopfbedeckung",
    "Lange Kleidung",
    "Die Identität spielt eine besondere Rolle"
  ],
  "elden-ring:Bernahl": [
    "Schwere Rüstung",
    "Erfahrener Krieger",
    "Kann besondere Kampftechniken vermitteln"
  ],
  "elden-ring:Sir Ansbach": [
    "Älterer Mann",
    "Bedecktes Gesicht",
    "War einst im Dienst eines mächtigen Herrn"
  ],
  "elden-ring:Nadelritterin Leda": [
    "Helle Rüstung",
    "Verwendet eine Klinge",
    "Folgt einem übergeordneten Ziel"
  ],
  "elden-ring:Thiollier": [
    "Schlanke Statur",
    "Bedecktes Gesicht",
    "Kennt sich mit Giften aus"
  ],
  "elden-ring:Rotmähne Freyja": [
    "Schwere Rüstung",
    "Kriegerin",
    "Hat in großen Schlachten gekämpft"
  ],
  "elden-ring:Moore": [
    "Sehr schwere Rüstung",
    "Ruhiges Auftreten",
    "Hat mit Handel und Versorgung zu tun"
  ],
  "elden-ring:Heilige Trina": [
    "Blumenartige Erscheinung",
    "Ruhige Ausstrahlung",
    "Hat Verbindung zum Schlaf"
  ],
  "resident-evil:Leon S. Kennedy": [
    "Praktische Kampfausrüstung",
    "Verwendet Schusswaffen",
    "Hat besondere Einsatzerfahrung"
  ],
  "resident-evil:Chris Redfield": [
    "Praktische Kampfausrüstung",
    "Verwendet Schusswaffen",
    "Hat besondere Einsatzerfahrung"
  ],
  "resident-evil:Jill Valentine": [
    "Praktische Kleidung",
    "Verwendet Schusswaffen",
    "Überlebt gefährliche biologische Zwischenfälle"
  ],
  "resident-evil:Claire Redfield": [
    "Praktische Kleidung",
    "Verwendet Schusswaffen",
    "Überlebt gefährliche biologische Zwischenfälle"
  ],
  "resident-evil:Ada Wong": [
    "Elegantes Auftreten",
    "Dunkle Haare",
    "Geht verdeckt vor"
  ],
  "resident-evil:Albert Wesker": [
    "Sonnenbrille",
    "Helle zurückgekämmte Haare",
    "Besitzt übermenschliche Fähigkeiten"
  ],
  "resident-evil:Rebecca Chambers": [
    "Praktische Kleidung",
    "Verwendet Schusswaffen",
    "Überlebt gefährliche biologische Zwischenfälle"
  ],
  "resident-evil:Barry Burton": [
    "Kräftige Statur",
    "Bart",
    "Verwendet schwere Schusswaffen"
  ],
  "resident-evil:Sherry Birkin": [
    "Helle Haare",
    "Überlebt eine besondere Infektion",
    "Arbeitet später als Agentin"
  ],
  "resident-evil:Carlos Oliveira": [
    "Praktische Kampfausrüstung",
    "Verwendet Schusswaffen",
    "Hat besondere Einsatzerfahrung"
  ],
  "resident-evil:Billy Coen": [
    "Praktische Kampfausrüstung",
    "Verwendet Schusswaffen",
    "Hat besondere Einsatzerfahrung"
  ],
  "resident-evil:HUNK": [
    "Praktische Kampfausrüstung",
    "Verwendet Schusswaffen",
    "Hat besondere Einsatzerfahrung"
  ],
  "resident-evil:Ethan Winters": [
    "Helle Jacke",
    "Gesicht meist verborgen",
    "Sucht nach Familienangehörigen"
  ],
  "resident-evil:Mia Winters": [
    "Dunkle Haare",
    "Menschliche Grundgestalt",
    "Hat eine geheimnisvolle Vergangenheit"
  ],
  "resident-evil:Rosemary Winters": [
    "Helle Haare",
    "Jugendliche Erscheinung",
    "Besitzt ungewöhnliche Kräfte"
  ],
  "resident-evil:Sheva Alomar": [
    "Praktische Kleidung",
    "Verwendet Schusswaffen",
    "Überlebt gefährliche biologische Zwischenfälle"
  ],
  "resident-evil:Josh Stone": [
    "Praktische Kampfausrüstung",
    "Verwendet Schusswaffen",
    "Hat besondere Einsatzerfahrung"
  ],
  "resident-evil:Helena Harper": [
    "Praktische Kleidung",
    "Verwendet Schusswaffen",
    "Überlebt gefährliche biologische Zwischenfälle"
  ],
  "resident-evil:Piers Nivans": [
    "Praktische Kampfausrüstung",
    "Verwendet Schusswaffen",
    "Hat besondere Einsatzerfahrung"
  ],
  "resident-evil:Jake Muller": [
    "Kurze Haare",
    "Athletische Statur",
    "Söldnerischer Hintergrund"
  ],
  "resident-evil:Ashley Graham": [
    "Helle Haare",
    "Wird beschützt",
    "Stammt aus einer einflussreichen Familie"
  ],
  "resident-evil:Luis Serra": [
    "Längere dunkle Haare",
    "Gepflegtes Auftreten",
    "Wissenschaftlicher Hintergrund"
  ],
  "resident-evil:Ingrid Hunnigan": [
    "Brille",
    "Gepflegtes Auftreten",
    "Unterstützt Einsätze aus der Ferne"
  ],
  "resident-evil:Marvin Branagh": [
    "Uniform",
    "Verwendet Schusswaffen",
    "Gerät in einen städtischen Ausbruch"
  ],
  "resident-evil:Robert Kendo": [
    "Kräftige Statur",
    "Alltagskleidung",
    "Handelt mit Waffen"
  ],
  "resident-evil:Brad Vickers": [
    "Uniform",
    "Verwendet Schusswaffen",
    "Gerät in einen städtischen Ausbruch"
  ],
  "resident-evil:Nicholai Ginovaef": [
    "Helle kurze Haare",
    "Militärische Kleidung",
    "Verfolgt eigene Interessen"
  ],
  "resident-evil:Steve Burnside": [
    "Jung",
    "Rötliche Haare",
    "Gerät in einen Ausbruch auf einer Insel"
  ],
  "resident-evil:Moira Burton": [
    "Dunkle Kleidung",
    "Junges Auftreten",
    "Verwendet praktische Werkzeuge"
  ],
  "resident-evil:Natalia Korda": [
    "Kind",
    "Trägt ein Kleid",
    "Besitzt besondere Wahrnehmung"
  ],
  "resident-evil:Alex Wesker": [
    "Helle Haare",
    "Wissenschaftlicher Hintergrund",
    "Hat mit gefährlichen Experimenten zu tun"
  ],
  "resident-evil:Alexia Ashford": [
    "Helle Haare",
    "Wissenschaftlicher Hintergrund",
    "Hat mit gefährlichen Experimenten zu tun"
  ],
  "resident-evil:Alfred Ashford": [
    "Gepflegtes Auftreten",
    "Adlige Familiengeschichte",
    "Verbindung zu einer abgelegenen Anlage"
  ],
  "resident-evil:William Birkin": [
    "Wissenschaftlicher Hintergrund",
    "Arbeitet an biologischen Stoffen",
    "Hat eine Tochter"
  ],
  "resident-evil:Annette Birkin": [
    "Wissenschaftlicher Hintergrund",
    "Arbeitet an biologischen Stoffen",
    "Hat eine Tochter"
  ],
  "resident-evil:Oswell E. Spencer": [
    "Sehr alt",
    "Sitzt im Rollstuhl",
    "Hat großen Einfluss auf eine Firma"
  ],
  "resident-evil:Excella Gionne": [
    "Elegante Kleidung",
    "Dunkle Haare",
    "Hat eine Führungsrolle in einem Unternehmen"
  ],
  "resident-evil:Carla Radames": [
    "Dunkle Haare",
    "Blaue Kleidung",
    "Ihre Erscheinung erinnert an eine andere Person"
  ],
  "resident-evil:Derek C. Simmons": [
    "Formelle Kleidung",
    "Gepflegter Bart",
    "Besitzt politischen Einfluss"
  ],
  "resident-evil:Grace Ashcroft": [
    "Helle Haare",
    "Trägt eine Jacke",
    "Hat einen ermittelnden Beruf"
  ],
  "resident-evil:Alyssa Ashcroft": [
    "Helle Haare",
    "Menschlich",
    "Arbeitet als Journalistin"
  ],
  "resident-evil:Nemesis": [
    "Sehr groß",
    "Entstelltes Gesicht",
    "Verfolgt ausdauernd seine Ziele"
  ],
  "resident-evil:Mr. X": [
    "Sehr groß",
    "Langer Mantel",
    "Trägt einen Hut"
  ],
  "resident-evil:Jack Krauser": [
    "Kräftige Statur",
    "Gesichtsnarben",
    "Besonders gefährlich im Nahkampf"
  ],
  "resident-evil:Osmund Saddler": [
    "Auffälliges Auftreten",
    "Hat eine lokale Führungsrolle",
    "Steht mit einer gefährlichen Infektion in Verbindung"
  ],
  "resident-evil:Ramón Salazar": [
    "Auffälliges Auftreten",
    "Hat eine lokale Führungsrolle",
    "Steht mit einer gefährlichen Infektion in Verbindung"
  ],
  "resident-evil:Bitores Méndez": [
    "Auffälliges Auftreten",
    "Hat eine lokale Führungsrolle",
    "Steht mit einer gefährlichen Infektion in Verbindung"
  ],
  "resident-evil:Lady Dimitrescu": [
    "Sehr groß",
    "Heller Hut",
    "Elegante Kleidung"
  ],
  "resident-evil:Karl Heisenberg": [
    "Längere Haare",
    "Sonnenbrille",
    "Kann Metall beeinflussen"
  ],
  "resident-evil:Mutter Miranda": [
    "Auffällige Gesichtsverdeckung",
    "Dunkle Kleidung",
    "Religiös wirkendes Auftreten"
  ],
  "resident-evil:Donna Beneviento": [
    "Dunkler Schleier",
    "Zurückgezogenes Auftreten",
    "Hat eine Verbindung zu Puppen"
  ],
  "resident-evil:Jack Baker": [
    "Brille",
    "Älterer Mann",
    "Kann schwere Verletzungen überstehen"
  ],
  "resident-evil:Marguerite Baker": [
    "Dunkle Haare",
    "Abgenutzte Kleidung",
    "Hat eine unheimliche Verbindung zu Insekten"
  ],
  "resident-evil:Lucas Baker": [
    "Kapuze",
    "Schlanke Statur",
    "Baut gefährliche Fallen"
  ],
  "resident-evil:Eveline": [
    "Kindliche Erscheinung",
    "Dunkle Haare",
    "Besitzt gefährlichen Einfluss auf andere"
  ],
  "resident-evil:Zoe Baker": [
    "Dunkle Haare",
    "Schlichte Kleidung",
    "Hilft aus der Distanz"
  ],
  "resident-evil:Der Duke": [
    "Sehr massig",
    "Gepflegte Kleidung",
    "Handelt mit Ausrüstung"
  ],
  "resident-evil:Händler aus RE4": [
    "Verdecktes Gesicht",
    "Langer Mantel",
    "Handelt mit Waffen"
  ],
  "resident-evil:Victor Gideon": [
    "Älterer Mann",
    "Auffällige lange Kleidung",
    "Hat mit gefährlichen Experimenten zu tun"
  ],
  "resident-evil:Emily": [
    "Kindliche Erscheinung",
    "Helle Haare",
    "Trägt ein Kleid"
  ],
  "animationsfilme:Hicks": [
    "Braune Haare",
    "Trägt selbst gebaute Ausrüstung",
    "Hat eine besondere Verbindung zu Drachen"
  ],
  "animationsfilme:Ohnezahn": [
    "Dunkle Schuppen",
    "Große grüne Augen",
    "Sehr wendig im Flug"
  ],
  "animationsfilme:Astrid": [
    "Helle geflochtene Haare",
    "Kriegerische Ausbildung",
    "Verwendet eine Axt"
  ],
  "animationsfilme:Sturmpfeil": [
    "Blaue Schuppen",
    "Auffällige Stacheln",
    "Besitzt Flügel"
  ],
  "animationsfilme:Rotzbakke": [
    "Kräftige Statur",
    "Lautes Auftreten",
    "Reitet einen Drachen"
  ],
  "animationsfilme:Hakenzahn": [
    "Rötliche Schuppen",
    "Langer Hals",
    "Kann seinen Körper in Brand setzen"
  ],
  "animationsfilme:Fischbein": [
    "Kräftige Statur",
    "Kennt sich mit Drachen aus",
    "Freundliches Auftreten"
  ],
  "animationsfilme:Fleischklops": [
    "Rundlicher Körper",
    "Kleine Flügel",
    "Frisst auch Steine"
  ],
  "animationsfilme:Raffnuss": [
    "Lange helle Haare",
    "Unruhiges Auftreten",
    "Hat ein sehr ähnlich aussehendes Geschwister"
  ],
  "animationsfilme:Taffnuss": [
    "Lange helle Haare",
    "Unruhiges Auftreten",
    "Hat ein sehr ähnlich aussehendes Geschwister"
  ],
  "animationsfilme:Kotz und Würg": [
    "Zwei Köpfe",
    "Ein gemeinsamer Körper",
    "Arbeitet mit Gas und Feuer"
  ],
  "animationsfilme:Haudrauf": [
    "Sehr kräftig",
    "Großer roter Bart",
    "Hat eine Führungsrolle"
  ],
  "animationsfilme:Grobian": [
    "Auffälliger Bart",
    "Technische Ersatzglieder",
    "Arbeitet mit Metall"
  ],
  "animationsfilme:Valka": [
    "Längere Haare",
    "Trägt ungewöhnliche Ausrüstung",
    "Lebt eng mit Drachen zusammen"
  ],
  "animationsfilme:Wolkenspringer": [
    "Mehrere Flügel",
    "Auffälliges Gesicht",
    "Kann sehr geschickt fliegen"
  ],
  "animationsfilme:Schädelbrecher": [
    "Kräftiger Körper",
    "Auffälliger Kopf",
    "Besitzt einen guten Geruchssinn"
  ],
  "animationsfilme:Tagschatten": [
    "Helle Schuppen",
    "Blaue Augen",
    "Kann sich im Flug verbergen"
  ],
  "animationsfilme:Eret": [
    "Kräftige Statur",
    "Dunkle Haare",
    "Kennt sich mit dem Fangen von Drachen aus"
  ],
  "animationsfilme:Drago": [
    "Kräftige Statur",
    "Lange dunkle Haare",
    "Will Drachen beherrschen"
  ],
  "animationsfilme:Grimmel": [
    "Helle Haare",
    "Dunkle Kleidung",
    "Jagt seltene Drachen"
  ],
  "animationsfilme:Roter Tod": [
    "Gigantische Statur",
    "Führt andere Drachen an",
    "Sehr gefährlich im direkten Kampf"
  ],
  "animationsfilme:Dragos Bewilderbeast": [
    "Gigantische Statur",
    "Führt andere Drachen an",
    "Sehr gefährlich im direkten Kampf"
  ],
  "animationsfilme:Dagur": [
    "Rötliche Haare",
    "Kämpferisches Auftreten",
    "Auffällige Gesichtsbemalung"
  ],
  "animationsfilme:Heather": [
    "Dunkle Haare",
    "Praktische Kampfkleidung",
    "Reitet einen Drachen"
  ],
  "animationsfilme:Viggo": [
    "Dunkle Haare",
    "Bart",
    "Geht strategisch gegen Drachenreiter vor"
  ],
  "animationsfilme:Shrek": [
    "Grüne Haut",
    "Kräftige Statur",
    "Lebt abseits gewöhnlicher Menschen"
  ],
  "animationsfilme:Fiona": [
    "Grüne Haut",
    "Kräftige Statur",
    "Lebt abseits gewöhnlicher Menschen"
  ],
  "animationsfilme:Esel": [
    "Fell",
    "Lange Ohren",
    "Sehr gesprächig"
  ],
  "animationsfilme:Drachendame": [
    "Rote Schuppen",
    "Große Flügel",
    "Hat eine ungewöhnliche Liebesbeziehung"
  ],
  "animationsfilme:Der gestiefelte Kater": [
    "Rötliches Fell",
    "Trägt einen Hut",
    "Verwendet eine Klinge"
  ],
  "animationsfilme:Lord Farquaad": [
    "Sehr klein",
    "Ordentliche dunkle Haare",
    "Hat eine Herrschaftsposition"
  ],
  "animationsfilme:Prinz Charming": [
    "Helle Haare",
    "Gepflegtes Auftreten",
    "Will königlichen Einfluss gewinnen"
  ],
  "animationsfilme:Gute Fee": [
    "Brille",
    "Auffällige Frisur",
    "Beherrscht Magie"
  ],
  "animationsfilme:König Harold": [
    "Ältere Erscheinung",
    "Königliche Kleidung",
    "Hat eine Tochter"
  ],
  "animationsfilme:Königin Lillian": [
    "Ältere Erscheinung",
    "Königliche Kleidung",
    "Hat eine Tochter"
  ],
  "animationsfilme:Artie": [
    "Jung",
    "Helle Haare",
    "Soll unerwartet Verantwortung übernehmen"
  ],
  "animationsfilme:Rumpelstilzchen": [
    "Kleine Statur",
    "Auffällige Frisuren",
    "Schließt gefährliche Verträge"
  ],
  "animationsfilme:Lebkuchenmann": [
    "Gebäckartiger Körper",
    "Verzierungen aus Süßigkeiten",
    "Kann sprechen"
  ],
  "animationsfilme:Pinocchio": [
    "Hölzerner Körper",
    "Trägt einen Hut",
    "Kann schlecht lügen"
  ],
  "animationsfilme:Großer böser Wolf": [
    "Fell",
    "Große Ohren",
    "Trägt ungewöhnlich häusliche Kleidung"
  ],
  "animationsfilme:Doris": [
    "Auffällige Frisur",
    "Trägt ein Kleid",
    "Arbeitet hinter einer Theke"
  ],
  "animationsfilme:Mabel": [
    "Auffällige Frisur",
    "Trägt ein Kleid",
    "Arbeitet hinter einer Theke"
  ],
  "animationsfilme:Merlin": [
    "Langer weißer Bart",
    "Lockere Kleidung",
    "Beherrscht Magie"
  ],
  "animationsfilme:Mongo": [
    "Gebäckartiger Körper",
    "Verzierungen aus Süßigkeiten",
    "Kann sprechen"
  ],
  "animationsfilme:Kitty Samtpfote": [
    "Dunkles Fell",
    "Helle Pfoten",
    "Sehr geschickte Diebin"
  ],
  "animationsfilme:Perrito": [
    "Klein",
    "Trägt einen Pullover",
    "Sehr optimistisch"
  ],
  "animationsfilme:Tod": [
    "Helles Fell",
    "Kapuze",
    "Trägt zwei gebogene Klingen"
  ],
  "animationsfilme:Goldi": [
    "Helle Haare",
    "Trägt einen Stab",
    "Hat eine ungewöhnliche Adoptivfamilie"
  ],
  "animationsfilme:Papa Bär": [
    "Dichtes Fell",
    "Große Statur",
    "Teil einer kriminellen Familie"
  ],
  "animationsfilme:Mama Bär": [
    "Dichtes Fell",
    "Große Statur",
    "Teil einer kriminellen Familie"
  ],
  "animationsfilme:Baby Bär": [
    "Dichtes Fell",
    "Große Statur",
    "Teil einer kriminellen Familie"
  ],
  "animationsfilme:Humpty Alexander Dumpty": [
    "Eiförmiger Körper",
    "Trägt einen Hut",
    "Plant einen großen Diebstahl"
  ],
  "animationsfilme:Jack": [
    "Kräftige Statur",
    "Verwendet Waffen",
    "Ist mit einer weiteren Person auf Beute aus"
  ],
  "animationsfilme:Jill": [
    "Kräftige Statur",
    "Verwendet Waffen",
    "Ist mit einer weiteren Person auf Beute aus"
  ],
  "animationsfilme:Großer Jack Horner": [
    "Sehr kräftig",
    "Auffällige helle Haare",
    "Sammelt magische Gegenstände"
  ],
  "animationsfilme:Mama Luna": [
    "Ältere Frau",
    "Große Brille",
    "Lebt mit vielen Katzen"
  ],
  "animationsfilme:Manni": [
    "Dichtes Fell",
    "Langer Rüssel",
    "Auffällige Stoßzähne"
  ],
  "animationsfilme:Sid": [
    "Lange Arme",
    "Auffällige Zähne",
    "Unbeholfenes Auftreten"
  ],
  "animationsfilme:Diego": [
    "Fell",
    "Große Raubkatze",
    "Auffällige Eckzähne"
  ],
  "animationsfilme:Scrat": [
    "Kleine Statur",
    "Buschiger Schwanz",
    "Interessiert sich für eine Eichel"
  ],
  "animationsfilme:Ellie": [
    "Dichtes Fell",
    "Langer Rüssel",
    "Auffällige Stoßzähne"
  ],
  "animationsfilme:Crash": [
    "Kleine Statur",
    "Langer dünner Schwanz",
    "Sehr verspieltes Auftreten"
  ],
  "animationsfilme:Eddie": [
    "Kleine Statur",
    "Langer dünner Schwanz",
    "Sehr verspieltes Auftreten"
  ],
  "animationsfilme:Peaches": [
    "Dichtes Fell",
    "Langer Rüssel",
    "Auffällige Stoßzähne"
  ],
  "animationsfilme:Buck": [
    "Kleine Statur",
    "Ein Auge verdeckt",
    "Kennt eine verborgene gefährliche Welt"
  ],
  "animationsfilme:Scratte": [
    "Kleine Statur",
    "Buschiger Schwanz",
    "Interessiert sich für eine Eichel"
  ],
  "animationsfilme:Shira": [
    "Fell",
    "Große Raubkatze",
    "Auffällige Eckzähne"
  ],
  "animationsfilme:Granny": [
    "Ältere Erscheinung",
    "Geht mit einer Stütze",
    "Unterschätztes Durchhaltevermögen"
  ],
  "animationsfilme:Captain Gutt": [
    "Kräftige Statur",
    "Dunkles Fell",
    "Führt eine Piratengruppe"
  ],
  "animationsfilme:Flynn": [
    "Sehr rundlicher Körper",
    "Flossen",
    "Teil einer Piratengruppe"
  ],
  "animationsfilme:Silas": [
    "Federn",
    "Schnabel",
    "Teil einer Piratengruppe"
  ],
  "animationsfilme:Squint": [
    "Lange Ohren",
    "Kleine Statur",
    "Teil einer Piratengruppe"
  ],
  "animationsfilme:Louis": [
    "Klein",
    "Stachelige Körpermerkmale",
    "Lebt überwiegend am Boden"
  ],
  "animationsfilme:Julian": [
    "Dichtes Fell",
    "Langer Rüssel",
    "Auffällige Stoßzähne"
  ],
  "animationsfilme:Francine": [
    "Lange Gliedmaßen",
    "Schlanke Statur",
    "Hat eine romantische Begegnung"
  ],
  "animationsfilme:Shangri Llama": [
    "Langer Hals",
    "Auffällige Kleidung",
    "Beschäftigt sich mit innerer Ruhe"
  ],
  "animationsfilme:Soto": [
    "Fell",
    "Große Raubkatze",
    "Auffällige Eckzähne"
  ],
  "animationsfilme:Zeke": [
    "Fell",
    "Große Raubkatze",
    "Auffällige Eckzähne"
  ],
  "animationsfilme:Lenny": [
    "Fell",
    "Große Raubkatze",
    "Auffällige Eckzähne"
  ],
  "animationsfilme:Oscar": [
    "Fell",
    "Große Raubkatze",
    "Auffällige Eckzähne"
  ]
};

export function getCharacterTips(name: string, category: string): string[] {
  return characterTipsByCategory[category + ":" + name] ?? [];
}
