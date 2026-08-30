"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import {
  dealGameModes,
  DealGameMode,
} from "../../lib/dealData";

type DealPlayer = {
  id: string;
  name: string;
  is_host: boolean;
  turn_position: number;
  skips_remaining: number;
  total_score: number | null;
};

type DealCase = {
  id: string;
  case_number: number;
  status: "closed" | "opened" | "rejected" | "taken";
  opened_by: string | null;
  character_name: string | null;
};

type DealPick = {
  player_id: string;
  player_name: string;
  round_number: number;
  category: string;
  character_name: string;
  value: number | null;
};

type DealState = {
  id: string;
  mode: DealGameMode;
  player_count: number;
  categories: string[];
  current_round: number;
  current_turn: number;
  status: "playing" | "finished";
  players: DealPlayer[];
  cases: DealCase[];
  picks: DealPick[];
};

const categoryNames: Record<string, string> = {
  "star-wars": "⭐ Star Wars",
  marvel: "🦸 Marvel",
  "harry-potter": "🪄 Harry Potter",
  dc: "🦇 DC",
  "fluch-der-karibik": "🏴‍☠️ Fluch der Karibik",
  "game-of-thrones": "⚔️ Game of Thrones",

  "herr-der-ringe": "💍 Herr der Ringe",
  hobbit: "🏔️ Der Hobbit",
  "the-boys": "🩸 The Boys",
  "the-walking-dead": "🧟 The Walking Dead",
  jurassic: "🦖 Jurassic Park / World",
};

function getCharacterImage(
  character: string,
  category: string
) {
  const fileName = character
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `/characters/${category}/${fileName}.webp`;
}

function formatValue(
  mode: DealGameMode,
  value: number
) {
  switch (mode) {
    case "kills":
      return `${value} Kills`;

    case "height":
      return `${value} cm`;

    case "age":
      return `${value} Jahre`;

    case "strength":
    case "intelligence":
    case "fame":
    case "attractiveness":
      return `${value}/100`;

    default:
      return String(value);
  }
}

export default function DealGamePage() {
  const [game, setGame] = useState<DealState | null>(
    null
  );

  const [playerId, setPlayerId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] =
    useState(false);

  const loadGame = useCallback(async () => {
    const roomId = sessionStorage.getItem("roomId");
    const currentPlayerId =
      sessionStorage.getItem("playerId");

    let gameId =
      sessionStorage.getItem("dealGameId");

    if (!roomId || !currentPlayerId) {
      window.location.href = "/deal";
      return;
    }

    setPlayerId(currentPlayerId);

    // Falls dealGameId aus irgendeinem Grund fehlt,
    // suchen wir das aktuelle Spiel des Raumes.
    if (!gameId) {
      const { data: activeGame, error: gameError } =
        await supabase
          .from("deal_games")
          .select("id")
          .eq("room_id", roomId)
          .eq("status", "playing")
          .order("created_at", {
            ascending: false,
          })
          .limit(1)
          .maybeSingle();

      if (gameError) {
        console.error(gameError);
        setError("Das Spiel konnte nicht gefunden werden.");
        setLoading(false);
        return;
      }

      if (!activeGame) {
        window.location.href = "/deal/lobby";
        return;
      }

      gameId = activeGame.id;

      sessionStorage.setItem(
        "dealGameId",
        activeGame.id
      );
    }

    const { data, error: stateError } =
      await supabase.rpc("get_deal_game_state", {
        check_game_id: gameId,
      });

    if (stateError || !data) {
      console.error(stateError);

      setError(
        stateError?.message ||
          "Der Spielstand konnte nicht geladen werden."
      );

      setLoading(false);
      return;
    }

    setGame(data as DealState);
    setError("");
    setLoading(false);
  }, []);

  useEffect(() => {
    loadGame();

    const interval = setInterval(loadGame, 1200);

    return () => clearInterval(interval);
  }, [loadGame]);

  async function openCase(caseId: string) {
    if (actionLoading) return;

    setActionLoading(true);
    setError("");

    const { error: openError } = await supabase.rpc(
      "open_deal_case",
      {
        check_case_id: caseId,
      }
    );

    if (openError) {
      console.error(openError);
      setError(openError.message);
      setActionLoading(false);
      return;
    }

    await loadGame();
    setActionLoading(false);
  }

  async function acceptDeal(caseId: string) {
    if (actionLoading) return;

    setActionLoading(true);
    setError("");

    const { error: dealError } = await supabase.rpc(
      "accept_deal_case",
      {
        check_case_id: caseId,
      }
    );

    if (dealError) {
      console.error(dealError);
      setError(dealError.message);
      setActionLoading(false);
      return;
    }

    await loadGame();
    setActionLoading(false);
  }

  async function rejectDeal(caseId: string) {
    if (actionLoading) return;

    setActionLoading(true);
    setError("");

    const { error: rejectError } = await supabase.rpc(
      "reject_deal_case",
      {
        check_case_id: caseId,
      }
    );

    if (rejectError) {
      console.error(rejectError);
      setError(rejectError.message);
      setActionLoading(false);
      return;
    }

    await loadGame();
    setActionLoading(false);
  }

  function returnToLobby() {
    sessionStorage.removeItem("dealGameId");
    window.location.href = "/deal/lobby";
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <div className="text-6xl">💼</div>

          <p className="mt-5 text-slate-400">
            Deal or No Deal wird geladen...
          </p>
        </div>
      </main>
    );
  }

  if (!game) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <p className="text-red-400">
            {error || "Spiel wurde nicht gefunden."}
          </p>

          <button
            onClick={() => {
              window.location.href = "/deal/lobby";
            }}
            className="mt-6 rounded-2xl bg-amber-500 px-6 py-4 font-black text-slate-950"
          >
            Zur Lobby
          </button>
        </div>
      </main>
    );
  }

  const me = game.players.find(
    (player) => player.id === playerId
  );

  const currentPlayer = game.players.find(
    (player) =>
      player.turn_position === game.current_turn
  );

  const isMyTurn =
    currentPlayer?.id === playerId;

  const myOpenCase = game.cases.find(
    (dealCase) =>
      dealCase.status === "opened" &&
      dealCase.opened_by === playerId
  );

  const currentCategory =
    game.categories[game.current_round - 1];

  const modeLabel =
    dealGameModes.find(
      (mode) => mode.id === game.mode
    )?.label ?? game.mode;

  // ==========================================
  // ENDERGEBNIS
  // ==========================================

  if (game.status === "finished") {
    const sortedPlayers = [...game.players].sort(
      (a, b) =>
        (b.total_score ?? 0) -
        (a.total_score ?? 0)
    );

    const highestScore =
      sortedPlayers[0]?.total_score ?? 0;

    const winners = sortedPlayers.filter(
      (player) =>
        (player.total_score ?? 0) === highestScore
    );

    const tie = winners.length > 1;

    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-2xl px-6 py-10">
          <div className="text-center">
            <div className="text-7xl">
              {tie ? "🤝" : "🏆"}
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
              Endergebnis
            </p>

            <h1 className="mt-3 text-4xl font-black">
              {tie
                ? "Unentschieden!"
                : `${winners[0]?.name} gewinnt!`}
            </h1>

            <p className="mt-3 text-slate-400">
              {modeLabel}
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {sortedPlayers.map(
              (player, index) => {
                const playerPicks =
                  game.picks
                    .filter(
                      (pick) =>
                        pick.player_id === player.id
                    )
                    .sort(
                      (a, b) =>
                        a.round_number -
                        b.round_number
                    );

                const isWinner =
                  (player.total_score ?? 0) ===
                  highestScore;

                return (
                  <div
                    key={player.id}
                    className={`rounded-3xl border p-6 ${
                      isWinner
                        ? "border-amber-400 bg-amber-500/10"
                        : "border-slate-800 bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500">
                          Platz {index + 1}
                        </p>

                        <h2 className="mt-1 text-2xl font-black">
                          {isWinner && "🏆 "}
                          {player.name}
                        </h2>
                      </div>

                      <div className="text-right">
                        <p className="text-xs uppercase tracking-widest text-slate-500">
                          Gesamt
                        </p>

                        <p className="mt-1 text-2xl font-black text-amber-400">
                          {formatValue(
                            game.mode,
                            player.total_score ?? 0
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {playerPicks.map((pick) => (
                        <div
                          key={`${player.id}-${pick.round_number}`}
                          className="flex items-center gap-4 rounded-2xl bg-slate-950 p-3"
                        >
                          <img
                            src={getCharacterImage(
                              pick.character_name,
                              pick.category
                            )}
                            alt={pick.character_name}
                            className="h-16 w-16 rounded-xl object-contain"
                          />

                          <div className="min-w-0 flex-1">
                            <p className="text-xs text-slate-500">
                              Runde{" "}
                              {pick.round_number} ·{" "}
                              {categoryNames[
                                pick.category
                              ] ?? pick.category}
                            </p>

                            <p className="mt-1 truncate font-bold">
                              {pick.character_name}
                            </p>
                          </div>

                          <p className="font-black text-amber-400">
                            {pick.value !== null
                              ? formatValue(
                                  game.mode,
                                  pick.value
                                )
                              : "?"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <button
            onClick={returnToLobby}
            className="mt-8 w-full rounded-2xl bg-amber-500 px-6 py-5 font-black text-slate-950 transition hover:bg-amber-400"
          >
            🏠 Zurück zur Lobby
          </button>
        </div>
      </main>
    );
  }

  // ==========================================
  // LAUFENDES GAME
  // ==========================================

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-xl px-6 py-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              Deal or No Deal
            </p>

            <h1 className="mt-2 text-2xl font-black">
              Runde {game.current_round}/3
            </h1>
          </div>

          <div className="rounded-2xl bg-slate-900 px-4 py-3 text-right">
            <p className="text-xs text-slate-500">
              Deine Skips
            </p>

            <p className="mt-1 font-black text-amber-400">
              ⏭️ {me?.skips_remaining ?? 0}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
  {game.categories.map((category, index) => {
    const roundNumber = index + 1;
    const active = roundNumber === game.current_round;
    const finished = roundNumber < game.current_round;

    return (
      <div
        key={`${category}-${roundNumber}`}
        className={`rounded-2xl border px-3 py-3 text-center ${
          active
            ? "border-amber-400 bg-amber-500/15"
            : finished
              ? "border-emerald-500/30 bg-emerald-500/10"
              : "border-slate-800 bg-slate-900"
        }`}
      >
        <p className="text-xs font-bold text-slate-500">
          Runde {roundNumber}
        </p>

        <p className="mt-1 text-xl">
          {finished ? "✅" : active ? "🎯" : "🔒"}
        </p>

        <p
          className={`mt-1 truncate text-xs font-bold ${
            active
              ? "text-amber-300"
              : finished
                ? "text-emerald-400"
                : "text-slate-500"
          }`}
        >
          {categoryNames[category] ?? category}
        </p>
      </div>
    );
  })}
</div>

        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">
            Aktuelle Welt
          </p>

          <p className="mt-2 text-xl font-black">
            {categoryNames[currentCategory] ??
              currentCategory}
          </p>

          <div className="mt-4 border-t border-slate-800 pt-4">
            <p className="text-sm text-slate-400">
              Wertung
            </p>

            <p className="mt-1 font-bold text-amber-300">
              {modeLabel}
            </p>
          </div>
        </div>

        {/* Spielerstatus */}
        <div className="mt-6 flex gap-2">
          {game.players.map((player) => {
            const hasPick = game.picks.some(
              (pick) =>
                pick.player_id === player.id &&
                pick.round_number ===
                  game.current_round
            );

            const isCurrent =
              player.turn_position ===
              game.current_turn;

            return (
              <div
                key={player.id}
                className={`flex-1 rounded-2xl border px-3 py-3 text-center ${
                  isCurrent
                    ? "border-amber-400 bg-amber-500/10"
                    : "border-slate-800 bg-slate-900"
                }`}
              >
                <p className="truncate text-sm font-bold">
                  {player.name}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {hasPick
                    ? "✅ DEAL"
                    : isCurrent
                      ? "🎯 dran"
                      : `⏭️ ${player.skips_remaining}`}
                </p>
              </div>
            );
          })}
        </div>

        {/* Wer ist dran */}
        <div
          className={`mt-6 rounded-2xl p-4 text-center ${
            isMyTurn
              ? "bg-amber-500 text-slate-950"
              : "bg-slate-900"
          }`}
        >
          {isMyTurn ? (
            <p className="font-black">
              🎯 Du bist dran!
            </p>
          ) : (
            <p className="font-bold text-slate-300">
              ⏳ {currentPlayer?.name ?? "Spieler"} ist
              dran
            </p>
          )}
        </div>

        {/* Eigener geöffneter Koffer */}
        {myOpenCase &&
        myOpenCase.character_name ? (
          <div className="mt-8">
            <div className="rounded-3xl border border-amber-500/40 bg-slate-900 p-6 text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
                Koffer {myOpenCase.case_number}
              </p>

              <img
                src={getCharacterImage(
                  myOpenCase.character_name,
                  currentCategory
                )}
                alt={myOpenCase.character_name}
                className="mx-auto mt-5 h-64 w-full object-contain"
              />

              <h2 className="mt-5 text-3xl font-black">
  {myOpenCase.character_name}
</h2>

<div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3">
  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
    Wertung
  </p>

  <p className="mt-1 font-bold text-amber-300">
    {modeLabel}
  </p>

  <p className="mt-2 text-sm text-slate-400">
    Der genaue Wert bleibt bis zum Ende geheim.
  </p>
</div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <button
                  onClick={() =>
                    acceptDeal(myOpenCase.id)
                  }
                  disabled={actionLoading}
                  className="rounded-2xl bg-emerald-500 px-4 py-5 font-black text-white transition hover:bg-emerald-400 disabled:opacity-40"
                >
                  ✅ DEAL
                </button>

                <button
                  onClick={() =>
                    rejectDeal(myOpenCase.id)
                  }
                  disabled={
                    actionLoading ||
                    (me?.skips_remaining ?? 0) <= 0
                  }
                  className="rounded-2xl bg-red-500 px-4 py-5 font-black text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  ❌ NO DEAL
                </button>
              </div>

              {(me?.skips_remaining ?? 0) <= 0 && (
                <p className="mt-3 text-sm text-slate-500">
                  Keine Skips mehr – du musst diesen
                  Charakter nehmen.
                </p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black">
                  Gemeinsame Koffer
                </h2>

                <span className="text-sm text-slate-500">
                  {
                    game.cases.filter(
                      (dealCase) =>
                        dealCase.status === "closed"
                    ).length
                  }{" "}
                  übrig
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {game.cases.map((dealCase) => {
                  const closed =
                    dealCase.status === "closed";

                  const taken =
                    dealCase.status === "taken";

                  const rejected =
                    dealCase.status === "rejected";

                  const opened =
                    dealCase.status === "opened";

                  return (
                    <button
                      key={dealCase.id}
                      onClick={() => {
                        if (
                          closed &&
                          isMyTurn &&
                          !actionLoading
                        ) {
                          openCase(dealCase.id);
                        }
                      }}
                      disabled={
                        !closed ||
                        !isMyTurn ||
                        actionLoading
                      }
                      className={`min-h-28 rounded-2xl border p-3 transition ${
                        closed && isMyTurn
                          ? "border-amber-500/40 bg-amber-500/10 hover:border-amber-400 hover:bg-amber-500/20"
                          : closed
                            ? "border-slate-800 bg-slate-900"
                            : taken
                              ? "border-emerald-500/20 bg-emerald-500/5"
                              : rejected
                                ? "border-red-500/20 bg-red-500/5"
                                : "border-slate-700 bg-slate-900"
                      }`}
                    >
                      {closed ? (
  <>
    <div className="mx-auto flex h-12 w-16 items-center justify-center rounded-xl border-2 border-amber-500/50 bg-amber-500/10 text-2xl">
      💼
    </div>

    <p className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-500">
      Koffer
    </p>

    <p className="mt-1 text-xl font-black text-amber-300">
      {dealCase.case_number}
    </p>
  </>
) : (
                        <>
                          <div className="text-2xl">
                            {taken
                              ? "✅"
                              : rejected
                                ? "❌"
                                : opened
                                  ? "🔓"
                                  : "💼"}
                          </div>

                          <p className="mt-2 text-xs font-bold text-slate-400">
                            Koffer{" "}
                            {dealCase.case_number}
                          </p>

                          {dealCase.character_name && (
                            <p className="mt-1 line-clamp-2 text-xs font-semibold">
                              {
                                dealCase.character_name
                              }
                            </p>
                          )}
                        </>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {!isMyTurn && (
              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center">
                <p className="text-sm text-slate-400">
                  Warte, bis du an der Reihe bist.
                </p>
              </div>
            )}
          </>
        )}

        {error && (
          <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {error}
          </div>
        )}

        {/* Bisherige Deals */}
        {game.picks.length > 0 && (
          <div className="mt-10">
            <h2 className="font-black">
              Bisherige Deals
            </h2>

            <div className="mt-3 space-y-2">
              {game.picks.map((pick) => (
                <div
                  key={`${pick.player_id}-${pick.round_number}`}
                  className="flex items-center justify-between rounded-2xl bg-slate-900 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-bold">
                      {pick.player_name}
                    </p>

                    <p className="text-xs text-slate-500">
                      Runde {pick.round_number}
                    </p>
                  </div>

                  <p className="text-sm font-semibold text-slate-300">
                    {pick.character_name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}