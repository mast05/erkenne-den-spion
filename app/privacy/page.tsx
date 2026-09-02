export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-black">Datenschutz & Musik</h1>

        <div className="mt-6 space-y-5 text-sm leading-6 text-slate-300">
          <p>
            Diese Website verwendet eingebettete Inhalte von Spotify, um
            Musik-Playlists anzuzeigen und abzuspielen.
          </p>

          <p>
            Beim Laden des Spotify-Players kann eine Verbindung zu Spotify
            hergestellt werden. Dabei können technische Daten und Cookies
            durch Spotify verarbeitet werden.
          </p>

          <p>
            Die Musik wird nicht von dieser Website selbst bereitgestellt,
            sondern direkt über den offiziellen Spotify-Player abgespielt.
          </p>

          <p>
            Weitere Informationen zur Datenverarbeitung findest du in den
            Datenschutzinformationen von Spotify.
          </p>

          <a
            href="https://www.spotify.com/de/legal/privacy-policy/"
            target="_blank"
            rel="noreferrer"
            className="inline-block font-bold text-green-400 hover:text-green-300"
          >
            Spotify Datenschutzrichtlinie →
          </a>
        </div>
      </div>
    </main>
  );
}