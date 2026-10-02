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

          <div className="site-snow">
            {Array.from({ length: 60 }, (_, index) => {
              const size = 2 + (index % 4);

              return (
                <span
                  key={index}
                  className="snowflake"
                  style={{
                    left: `${((index * 37) % 120) - 10}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: 0.25 + (index % 6) * 0.1,
                    animationDuration: `${8 + (index % 11)}s`,
                    animationDelay: `-${(index * 7) % 19}s`,
                  }}
                />
              );
            })}
          </div>

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