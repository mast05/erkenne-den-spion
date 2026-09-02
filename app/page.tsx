import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">

        <div className="mb-10 text-center">

          <Image
  src="/logo.jpeg"
  alt="Logo"
  width={260}
  height={260}
  priority
  className="mx-auto mb-4 rounded-2xl"
/>

          <h1 className="text-4xl font-black tracking-tight">
            Mellon
          </h1>

          <p className="mt-2 text-slate-400">
            Partyspiele für 2–3 Spieler
          </p>
        </div>

        <div className="space-y-4">

          <Link
            href="/spy"
            className="block w-full rounded-2xl bg-white px-6 py-5 text-center text-lg font-bold text-slate-950 transition hover:scale-[1.02]"
          >
            🕵️ Erkenne den Spion
          </Link>

          <Link
            href="/deal"
            className="block w-full rounded-2xl bg-emerald-500 px-6 py-5 text-center text-lg font-bold text-white transition hover:scale-[1.02]"
          >
            🎰 Deal or No Deal
          </Link>

          <Link
            href="/bid"
            className="block w-full rounded-2xl bg-violet-500 px-6 py-5 text-center text-lg font-bold text-white transition hover:scale-[1.02]"
          >
            💰 Bieterkrieg
          </Link>

        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          2–3 Spieler · Online · Kostenlos
        </p>

<Link
  href="/privacy"
  className="mt-3 text-center text-xs text-slate-600 hover:text-slate-400"
>
  Datenschutz & Musik
</Link>

      </div>
    </main>
  );
}