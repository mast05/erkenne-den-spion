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
          <div className="site-background-image" />
          <div className="site-background-shade" />
        </div>

        <div className="site-content">
          {children}
        </div>

        <SpotifyPlayer />
      </body>
    </html>
  );
}