"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";
import { supabase } from "../../lib/supabase";
import {
  dealGameModes,
  DealGameMode,
} from "../../lib/dealData";

type BidPlayer = {
  id: string;
  name: string;
  is_host: boolean;
  turn_position: number;
  budget_remaining: number;
  team_count: number;
  total_score: number | null;
};

type BidAuction = {
  id: string;
  character_name: string;
  current_bid: number;
  highest_bidder_id: string | null;
  current_turn: number;
  value: null;
  passed_player_ids: string[];
};

type BidTeamCharacter = {
  player_id: string;
  player_name: string;
  character_name: string;
  price_paid: number;
  value: number | null;
};

type BidState = {
  id: string;
  category: string;
  mode: DealGameMode;
  player_count: number;
  team_size: number;
  status: "playing" | "finished";
  auction_number: number;
  players: BidPlayer[];
  auction: BidAuction | null;
  teams: BidTeamCharacter[];
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
      return `${value} Punkte`;

    default:
      return String(value);
  }
}

export default function BidGamePage() {
  const [game, setGame] =
    useState<BidState | null>(null);

  const [playerId, setPlayerId] = useState("");
  const [bidAmount, setBidAmount] = useState(1);

  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] =
    useState(false);

  const [error, setError] = useState("");

  const loadGame = useCallback(async () => {
    const roomId =
      sessionStorage.getItem("roomId");

    const currentPlayerId =
      sessionStorage.getItem("playerId");

    let gameId =
      sessionStorage.getItem("bidGameId");

    if (!roomId || !currentPlayerId) {
      window.location.href = "/bid";
      return;
    }

    setPlayerId(currentPlayerId);

    // Falls die Game-ID fehlt,
    // aktuelles Spiel über den Raum suchen
    if (!gameId) {
      const { data: activeGame, error: gameError } =
        await supabase
          .from("bid_games")
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
        setError(
          "Der Bieterkrieg konnte nicht gefunden werden."
        );
        setLoading(false);
        return;
      }

      if (!activeGame) {
        window.location.href = "/bid/lobby";
        return;
      }

      gameId = activeGame.id;

      sessionStorage.setItem(
        "bidGameId",
        activeGame.id
      );
    }

    const { data, error: stateError } =
      await supabase.rpc("get_bid_game_state", {
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

    setGame(data as BidState);
    setError("");
    setLoading(false);
  }, []);

  useEffect(() => {
    loadGame();

    const interval = setInterval(
      loadGame,
      1200
    );

    return () => clearInterval(interval);
  }, [loadGame]);

  // Bei jedem neuen Gebot automatisch
  // das kleinste mögliche Folgegebot einsetzen
  useEffect(() => {
    if (!game?.auction) {
      return;
    }

    setBidAmount(
      game.auction.current_bid + 1
    );
  }, [
    game?.auction?.id,
    game?.auction?.current_bid,
  ]);

  async function placeBid() {
    if (
      !game?.auction ||
      actionLoading
    ) {
      return;
    }

    setActionLoading(true);
    setError("");

    const { error: bidError } =
      await supabase.rpc("place_bid", {
        check_auction_id: game.auction.id,
        check_amount: bidAmount,
      });

    if (bidError) {
      console.error(bidError);
      setError(bidError.message);
      setActionLoading(false);
      return;
    }

    await loadGame();
    setActionLoading(false);
  }

  async function passBid() {
    if (
      !game?.auction ||
      actionLoading
    ) {
      return;
    }

    setActionLoading(true);
    setError("");

    const { error: passError } =
      await supabase.rpc("pass_bid", {
        check_auction_id: game.auction.id,
      });

    if (passError) {
      console.error(passError);
      setError(passError.message);
      setActionLoading(false);
      return;
    }

    await loadGame();
    setActionLoading(false);
  }

  function returnToLobby() {
    sessionStorage.removeItem("bidGameId");

    window.location.href = "/bid/lobby";
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <div className="text-7xl">
            🔨
          </div>

          <p className="mt-5 text-slate-400">
            Bieterkrieg wird geladen...
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
            {error ||
              "Spiel wurde nicht gefunden."}
          </p>

          <button
            onClick={() => {
              window.location.href =
                "/bid/lobby";
            }}
            className="mt-6 rounded-2xl bg-violet-500 px-6 py-4 font-black"
          >
            Zur Lobby
          </button>
        </div>
      </main>
    );
  }

  const me = game.players.find(
    (player) =>
      player.id === playerId
  );

  const currentPlayer =
    game.players.find(
      (player) =>
        player.turn_position ===
        game.auction?.current_turn
    );

  const highestBidder =
    game.players.find(
      (player) =>
        player.id ===
        game.auction?.highest_bidder_id
    );

  const isMyTurn =
    currentPlayer?.id === playerId;

  const hasPassed =
    game.auction?.passed_player_ids.includes(
      playerId
    ) ?? false;

  const myBudget =
    me?.budget_remaining ?? 0;

  const minimumBid =
    (game.auction?.current_bid ?? 0) + 1;

  const canAffordBid =
    myBudget >= minimumBid;

  const modeLabel =
    dealGameModes.find(
      (mode) =>
        mode.id === game.mode
    )?.label ?? game.mode;

  // ==========================================
  // ENDERGEBNIS
  // ==========================================

  if (game.status === "finished") {
    const sortedPlayers =
      [...game.players].sort(
        (a, b) =>
          (b.total_score ?? 0) -
          (a.total_score ?? 0)
      );

    const highestScore =
      sortedPlayers[0]?.total_score ?? 0;

    const winners =
      sortedPlayers.filter(
        (player) =>
          (player.total_score ?? 0) ===
          highestScore
      );

    const tie =
      winners.length > 1;

    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-2xl px-6 py-10">
          <div className="text-center">
            <div className="text-7xl">
              {tie ? "🤝" : "🏆"}
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
              Bieterkrieg beendet
            </p>

            <h1 className="mt-3 text-4xl font-black">
              {tie
                ? "Unentschieden!"
                : `${winners[0]?.name} gewinnt!`}
            </h1>

            <p className="mt-3 text-slate-400">
              {categoryNames[
                game.category
              ] ?? game.category}
            </p>

            <p className="mt-1 font-bold text-violet-300">
              {modeLabel}
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {sortedPlayers.map(
              (player, index) => {
                const team =
                  game.teams.filter(
                    (character) =>
                      character.player_id ===
                      player.id
                  );

                const isWinner =
                  (player.total_score ??
                    0) === highestScore;

                return (
                  <div
                    key={player.id}
                    className={`rounded-3xl border p-6 ${
                      isWinner
                        ? "border-violet-400 bg-violet-500/10"
                        : "border-slate-800 bg-slate-900"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-slate-500">
                          Platz {index + 1}
                        </p>

                        <h2 className="mt-1 text-2xl font-black">
                          {isWinner &&
                            "🏆 "}
                          {player.name}
                        </h2>

                        <p className="mt-2 text-sm text-slate-400">
                          💰{" "}
                          {
                            player.budget_remaining
                          }{" "}
                          € übrig
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                          Gesamt
                        </p>

                        <p className="mt-2 text-2xl font-black text-violet-400">
                          {formatValue(
                            game.mode,
                            player.total_score ??
                              0
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {team.map(
                        (
                          character,
                          characterIndex
                        ) => (
                          <div
                            key={`${player.id}-${character.character_name}`}
                            className="flex items-center gap-4 rounded-2xl bg-slate-950 p-3"
                          >
                            <img
                              src={getCharacterImage(
                                character.character_name,
                                game.category
                              )}
                              alt={
                                character.character_name
                              }
                              className="h-16 w-16 rounded-xl object-contain"
                            />

                            <div className="min-w-0 flex-1">
                              <p className="text-xs text-slate-500">
                                Charakter{" "}
                                {characterIndex +
                                  1}{" "}
                                ·{" "}
                                {
                                  character.price_paid
                                }{" "}
                                €
                              </p>

                              <p className="mt-1 truncate font-bold">
                                {
                                  character.character_name
                                }
                              </p>
                            </div>

                            <p className="text-right text-sm font-black text-violet-400">
                              {character.value !==
                              null
                                ? formatValue(
                                    game.mode,
                                    character.value
                                  )
                                : "?"}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <button
            onClick={returnToLobby}
            className="mt-8 w-full rounded-2xl bg-violet-500 px-6 py-5 font-black text-white transition hover:bg-violet-400"
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
        {/* HEADER */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
              Bieterkrieg
            </p>

            <h1 className="mt-2 text-2xl font-black">
              Auktion{" "}
              {game.auction_number}
            </h1>
          </div>

          <div className="rounded-2xl bg-slate-900 px-4 py-3 text-right">
            <p className="text-xs text-slate-500">
              Dein Budget
            </p>

            <p className="mt-1 text-xl font-black text-emerald-400">
              💰 {myBudget} €
            </p>
          </div>
        </div>

        {/* SPIELINFO */}
        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <p className="font-black">
            {categoryNames[
              game.category
            ] ?? game.category}
          </p>

          <p className="mt-2 text-sm font-bold text-violet-300">
            {modeLabel}
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Die Charakterwerte werden erst
            am Spielende aufgedeckt.
          </p>
        </div>

        {/* SPIELERSTATUS */}
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {game.players.map(
            (player) => {
              const passed =
                game.auction?.passed_player_ids.includes(
                  player.id
                ) ?? false;

              const active =
                player.turn_position ===
                game.auction?.current_turn;

              const leader =
                player.id ===
                game.auction
                  ?.highest_bidder_id;

              return (
                <div
                  key={player.id}
                  className={`rounded-2xl border p-3 ${
                    active
                      ? "border-violet-400 bg-violet-500/10"
                      : "border-slate-800 bg-slate-900"
                  }`}
                >
                  <p className="truncate text-sm font-black">
                    {player.name}
                  </p>

                  <p className="mt-1 text-xs text-emerald-400">
                    💰{" "}
                    {
                      player.budget_remaining
                    }{" "}
                    €
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    👤 {player.team_count}/
                    {game.team_size}
                  </p>

                  <p className="mt-2 text-xs font-bold">
                    {passed
                      ? "✋ PASST"
                      : leader
                        ? "👑 Höchstgebot"
                        : active
                          ? "🎯 dran"
                          : "⏳ wartet"}
                  </p>
                </div>
              );
            }
          )}
        </div>

        {/* CHARAKTER */}
        {game.auction ? (
          <>
            <div className="mt-8 rounded-3xl border border-violet-500/30 bg-slate-900 p-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
                Zur Auktion
              </p>

              <img
                src={getCharacterImage(
                  game.auction.character_name,
                  game.category
                )}
                alt={
                  game.auction
                    .character_name
                }
                className="mx-auto mt-5 h-64 w-full object-contain"
              />

              <h2 className="mt-5 text-3xl font-black">
                {
                  game.auction
                    .character_name
                }
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-950 p-4">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Aktuelles Gebot
                  </p>

                  <p className="mt-2 text-3xl font-black text-violet-400">
                    {
                      game.auction
                        .current_bid
                    }{" "}
                    €
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-950 p-4">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Höchstbietender
                  </p>

                  <p className="mt-2 font-black">
                    {highestBidder
                      ? highestBidder.name
                      : "Noch niemand"}
                  </p>
                </div>
              </div>
            </div>

            {/* EIGENER ZUG */}
            {isMyTurn &&
            !hasPassed ? (
              <div className="mt-6 rounded-3xl border border-violet-500/40 bg-violet-500/10 p-5">
                <p className="text-center text-lg font-black text-violet-300">
                  🎯 Du bist dran!
                </p>

                {canAffordBid ? (
                  <>
                    <div className="mt-5">
                      <label className="text-sm font-bold text-slate-300">
                        Dein Gebot
                      </label>

                      <div className="mt-2 flex items-center gap-3">
                        <button
                          onClick={() =>
                            setBidAmount(
                              Math.max(
                                minimumBid,
                                bidAmount -
                                  1
                              )
                            )
                          }
                          className="h-14 w-14 rounded-2xl bg-slate-900 text-xl font-black"
                        >
                          −
                        </button>

                        <div className="flex flex-1 items-center rounded-2xl border border-slate-700 bg-slate-950">
                          <input
                            type="number"
                            min={
                              minimumBid
                            }
                            max={
                              myBudget
                            }
                            value={
                              bidAmount
                            }
                            onChange={(
                              event
                            ) => {
                              const value =
                                Number(
                                  event
                                    .target
                                    .value
                                );

                              setBidAmount(
                                Number.isFinite(
                                  value
                                )
                                  ? value
                                  : minimumBid
                              );
                            }}
                            className="w-full bg-transparent px-4 py-4 text-center text-2xl font-black outline-none"
                          />

                          <span className="pr-4 text-xl font-black">
                            €
                          </span>
                        </div>

                        <button
                          onClick={() =>
                            setBidAmount(
                              Math.min(
                                myBudget,
                                bidAmount +
                                  1
                              )
                            )
                          }
                          className="h-14 w-14 rounded-2xl bg-slate-900 text-xl font-black"
                        >
                          +
                        </button>
                      </div>

                      <p className="mt-2 text-center text-xs text-slate-500">
                        Minimum:{" "}
                        {minimumBid} € ·
                        Maximum:{" "}
                        {myBudget} €
                      </p>
                    </div>

                    <button
                      onClick={
                        placeBid
                      }
                      disabled={
                        actionLoading ||
                        bidAmount <
                          minimumBid ||
                        bidAmount >
                          myBudget
                      }
                      className="mt-5 w-full rounded-2xl bg-emerald-500 px-6 py-5 font-black text-white transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      🔨 {bidAmount} €
                      BIETEN
                    </button>
                  </>
                ) : (
                  <div className="mt-5 rounded-2xl bg-slate-950 p-4 text-center">
                    <p className="font-bold text-slate-300">
                      Dein Budget reicht
                      nicht für ein höheres
                      Gebot.
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Du kannst nur noch
                      passen.
                    </p>
                  </div>
                )}

                <button
                  onClick={passBid}
                  disabled={
                    actionLoading
                  }
                  className="mt-3 w-full rounded-2xl border border-red-500/40 bg-red-500/10 px-6 py-4 font-black text-red-400 transition hover:bg-red-500/20 disabled:opacity-40"
                >
                  ✋ PASSEN
                </button>
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center">
                {hasPassed ? (
                  <>
                    <div className="text-3xl">
                      ✋
                    </div>

                    <p className="mt-2 font-black">
                      Du hast gepasst
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Warte auf die nächste
                      Auktion.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-3xl">
                      ⏳
                    </div>

                    <p className="mt-2 font-black">
                      {currentPlayer?.name ??
                        "Ein Spieler"}{" "}
                      ist dran
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Die Seite aktualisiert
                      sich automatisch.
                    </p>
                  </>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-center">
            <p className="text-slate-400">
              Nächste Auktion wird
              vorbereitet...
            </p>
          </div>
        )}

        {error && (
          <div className="mt-5 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {error}
          </div>
        )}

        {/* BISHERIGE TEAMS */}
        {game.teams.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-black">
              Teams
            </h2>

            <div className="mt-4 space-y-5">
              {game.players.map(
                (player) => {
                  const team =
                    game.teams.filter(
                      (character) =>
                        character.player_id ===
                        player.id
                    );

                  return (
                    <div
                      key={player.id}
                      className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-black">
                          {player.name}
                        </p>

                        <p className="text-sm text-slate-500">
                          {team.length}/
                          {game.team_size}
                        </p>
                      </div>

                      {team.length ===
                      0 ? (
                        <p className="mt-3 text-sm text-slate-600">
                          Noch kein
                          Charakter.
                        </p>
                      ) : (
                        <div className="mt-3 space-y-2">
                          {team.map(
                            (
                              character
                            ) => (
                              <div
                                key={
                                  character.character_name
                                }
                                className="flex items-center gap-3 rounded-xl bg-slate-950 p-2"
                              >
                                <img
                                  src={getCharacterImage(
                                    character.character_name,
                                    game.category
                                  )}
                                  alt={
                                    character.character_name
                                  }
                                  className="h-12 w-12 rounded-lg object-contain"
                                />

                                <div className="min-w-0 flex-1">
                                  <p className="truncate text-sm font-bold">
                                    {
                                      character.character_name
                                    }
                                  </p>

                                  <p className="text-xs text-slate-500">
                                    Für{" "}
                                    {
                                      character.price_paid
                                    }{" "}
                                    €
                                  </p>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}