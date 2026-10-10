"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = new Set([
  "/lobby",
  "/category",
  "/game",
  "/deal/lobby",
  "/deal/game",
  "/bid/lobby",
  "/bid/game",
  "/arena/setup",
  "/arena/draft",
  "/arena/battle",
  "/who/setup",
  "/who/assign",
  "/who/game",
  "/silhouette/setup",
  "/quiz/setup",
  "/quiz/game",
]);

export default function GameMenuLink() {
  const pathname = usePathname();

  if (!routes.has(pathname)) return null;

  return (
    <nav
      aria-label="Hauptmenü"
      className="mx-auto w-full max-w-7xl px-6 pt-4"
    >
      <Link
        href="/"
        className="inline-block rounded-xl bg-slate-900/80 px-4 py-3 text-sm font-bold text-slate-300 hover:bg-slate-800 hover:text-white"
      >
        ← Hauptmenü
      </Link>
    </nav>
  );
}