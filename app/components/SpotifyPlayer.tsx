"use client";

import { useState } from "react";

const playlists = [
  {
    name: "Playlist 1",
    id: "3oZ4NBEAA247x6S3VJNUfL",
  },
  {
    name: "Playlist 2",
    id: "42vaTWQbdvG35ihCeDzalf",
  },
];

export default function SpotifyPlayer() {
  const [open, setOpen] = useState(false);
  const [playlistId, setPlaylistId] = useState(playlists[0].id);

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[calc(100%-32px)] max-w-sm">
      <div
        className={`mb-2 overflow-hidden transition-all duration-300 ${
          open
            ? "max-h-[230px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mb-2 rounded-xl bg-slate-900 p-2 shadow-lg">
          <select
            value={playlistId}
            onChange={(e) => setPlaylistId(e.target.value)}
            className="w-full rounded-lg bg-slate-800 px-3 py-2 text-sm font-bold text-white"
          >
            {playlists.map((playlist) => (
              <option key={playlist.id} value={playlist.id}>
                🎵 {playlist.name}
              </option>
            ))}
          </select>
        </div>

        <iframe
          key={playlistId}
          src={`https://open.spotify.com/embed/playlist/${playlistId}`}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
        />
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="ml-auto block rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-black shadow-lg"
      >
        {open ? "✕ Musik schließen" : "🎵 Musik"}
      </button>
    </div>
  );
}