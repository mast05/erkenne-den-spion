export default function DealPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">

        <div className="text-center">
          <div className="text-6xl">⚽</div>

          <h1 className="mt-4 text-4xl font-black">
            Deal or No Deal
          </h1>

          <p className="mt-3 text-slate-400">
            Das Fußballspiel für 3 Spieler
          </p>
        </div>

        <div className="mt-10 space-y-4">
          <button className="w-full rounded-2xl bg-emerald-500 px-6 py-5 font-bold">
            🎮 Raum erstellen
          </button>

          <button className="w-full rounded-2xl border border-slate-700 px-6 py-5 font-bold">
            🔑 Raum beitreten
          </button>
        </div>

      </div>
    </main>
  );
}