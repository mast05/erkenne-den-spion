import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SpotifyPlayer from "./components/SpotifyPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mellon",
  description: "Deutsche Multiplayer-Partyspiele für 2–3 Spieler.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="site-background" aria-hidden="true">
          <video
            className="site-background-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>

          <div className="site-background-shade" />
        </div>

        <div className="site-content">
          <div className="flex justify-end px-4 pt-4 sm:px-6">
            <a
              href="https://discord.gg/XH2D8WEqTD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#5865F2] px-4 py-3 text-sm font-black text-white shadow-lg transition hover:bg-[#4752C4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span aria-hidden="true">💬</span>
              Discord beitreten
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {children}
        </div>

        <SpotifyPlayer />
      </body>
    </html>
  );
}