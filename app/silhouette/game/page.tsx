"use client";

import Image from "next/image";
import { getCharacterImage } from "../../lib/catalog";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { dealCharacters } from "../../lib/dealData";

type SilhouetteGame = {
  id: string;
  room_id: string;
  category: string;
  status: string;
  current_round: number;
  total_rounds: number;
};

type SilhouetteRound = {
  id: string;
  round_number: number;
  character_name: string;
  reveal_stage: number;
  status: string;
  started_at: string;
  stage_started_at: string | null;
};

type Player = {
  id: string;
  name: string;
  is_host: boolean;
};

type Score = {
  player_id: string;
  points: number;
};

type Guess = {
  id: string;
  player_id: string;
  guessed_character: string;
  is_correct: boolean;
  reveal_stage: number;
  points: number;
};

type GuessResult = {
  is_correct: boolean;
  points_earned: number;
  reveal_stage: number;
};

type RoundProgress = {
  player_count: number;
  correct_count: number;
  all_correct: boolean;
  all_correct_at: string | null;
  server_now: string;
  is_current: boolean;
};

type ProgressState = RoundProgress & {
  round_id: string;
};

type TickResult = {
  game_status: string;
  next_round: number;
  did_change: boolean;
};

const STAGE_SECONDS = 10;
const REVEAL_SECONDS = 2;



function clearSilhouetteSession() {
  ["roomId", "playerId", "silhouetteGameId"].forEach(
    (key) => sessionStorage.removeItem(key)
  );
}

function SilhouetteImage({
  character,
  category,
  stage,
  revealed,
}: {
  character: string;
  category: string;
  stage: number;
  revealed: boolean;
}) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="flex h-full w-full items-center justify-center text-7xl">
        ❓
      </div>
    );
  }

  let filterClass = "scale-100";

  if (!revealed && stage === 1) {
    filterClass =
      "scale-110 blur-[10px] grayscale brightness-[0.6] contrast-125";
  } else if (!revealed && stage === 2) {
    filterClass =
      "scale-108 blur-[7px] grayscale-[0.75] brightness-[0.7] contrast-120";
  }

  return (
    <Image unoptimized width={720} height={720} loading="eager"
      src={getCharacterImage(character, category)}
      alt={revealed ? character : "Geheimer Charakter"}
      onError={() => setImageError(true)}
      className={`h-full w-full object-contain transition-all ${
        revealed ? "duration-300" : "duration-1000"
      } ${filterClass}`}
    />
  );
}

export default function SilhouetteGamePage() {
  const router = useRouter();

  const [game, setGame] = useState<SilhouetteGame | null>(
    null
  );
  const [round, setRound] =
    useState<SilhouetteRound | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [scores, setScores] = useState<Score[]>([]);
  const [ownGuesses, setOwnGuesses] = useState<Guess[]>([]);
  const [progress, setProgress] =
    useState<ProgressState | null>(null);

  const [playerId, setPlayerId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loadError, setLoadError] = useState("");
  const [controlError, setControlError] = useState("");

  const [selectedGuess, setSelectedGuess] = useState("");
  const [guessing, setGuessing] = useState(false);
  const [lastGuessCorrect, setLastGuessCorrect] =
    useState<boolean | null>(null);
  const [lastPoints, setLastPoints] = useState(0);
  const [clockMs, setClockMs] = useState(0);

  const mountedRef = useRef(false);
  const lifecycleRef = useRef(0);
  const navigationRef = useRef(false);
  const loadingGameRef = useRef(false);
  const reloadQueuedRef = useRef(false);
  const advancingRef = useRef(false);
  const creatingRoundRef = useRef(false);
  const activeRoundIdRef = useRef<string | null>(null);
  const previousStageKeyRef = useRef("");

  const serverClockRef = useRef<{
    serverMs: number;
    localMs: number;
  } | null>(null);

  const getServerNow = useCallback(() => {
    const clock = serverClockRef.current;

    if (!clock) return Date.now();

    return (
      clock.serverMs +
      performance.now() -
      clock.localMs
    );
  }, []);

  const currentPlayer = useMemo(
    () =>
      players.find((player) => player.id === playerId) ??
      null,
    [players, playerId]
  );

  const isHost = currentPlayer?.is_host === true;

  const availableCharacters = useMemo(() => {
    if (!game) return [];

    return dealCharacters
      .filter(
        (character) => character.category === game.category
      )
      .map((character) => character.name)
      .sort((a, b) => a.localeCompare(b, "de"));
  }, [game]);

  const guessedThisStage = useMemo(
    () =>
      Boolean(
        round &&
          ownGuesses.some(
            (guess) =>
              guess.reveal_stage === round.reveal_stage
          )
      ),
    [ownGuesses, round]
  );

  const alreadyCorrect = useMemo(
    () => ownGuesses.some((guess) => guess.is_correct),
    [ownGuesses]
  );

  const allCorrect = Boolean(
    round &&
      progress &&
      progress.round_id === round.id &&
      progress.is_current &&
      progress.all_correct
  );

  const ranking = useMemo(
    () =>
      players
        .map((player) => ({
          ...player,
          points:
            scores.find(
              (score) => score.player_id === player.id
            )?.points ?? 0,
        }))
        .sort((a, b) => b.points - a.points),
    [players, scores]
  );

  const stageStartedAt = round
    ? Date.parse(round.stage_started_at ?? round.started_at)
    : clockMs;

  const revealEndsAt =
    allCorrect && progress?.all_correct_at
      ? Date.parse(progress.all_correct_at) +
        REVEAL_SECONDS * 1000
      : null;

  const deadline =
    revealEndsAt ??
    stageStartedAt + STAGE_SECONDS * 1000;

  const secondsLeft = Number.isFinite(deadline)
    ? Math.max(
        0,
        Math.ceil((deadline - clockMs) / 1000)
      )
    : STAGE_SECONDS;

  const createRoundIfNeeded = useCallback(
    async (
      currentGame: SilhouetteGame,
      currentPlayers: Player[]
    ): Promise<boolean> => {
      const currentPlayerId =
        sessionStorage.getItem("playerId");

      const me = currentPlayers.find(
        (player) => player.id === currentPlayerId
      );

      if (
        !me?.is_host ||
        creatingRoundRef.current ||
        navigationRef.current ||
        currentGame.status !== "playing"
      ) {
        return false;
      }

      creatingRoundRef.current = true;

      try {
        const {
          data: existingRound,
          error: existingError,
        } = await supabase
          .from("silhouette_rounds")
          .select("id")
          .eq("game_id", currentGame.id)
          .eq("round_number", currentGame.current_round)
          .maybeSingle();

        if (existingError) throw existingError;
        if (existingRound) return true;

        const { data: usedRounds, error: usedError } =
          await supabase
            .from("silhouette_rounds")
            .select("character_name")
            .eq("game_id", currentGame.id);

        if (usedError) throw usedError;

        const usedNames = new Set(
          (usedRounds ?? []).map(
            (item) => item.character_name
          )
        );

        const possibleCharacters = dealCharacters.filter(
          (character) =>
            character.category === currentGame.category &&
            !usedNames.has(character.name)
        );

        if (!possibleCharacters.length) {
          throw new Error(
            "Es sind keine weiteren Charaktere verfügbar."
          );
        }

        const randomCharacter =
          possibleCharacters[
            Math.floor(
              Math.random() * possibleCharacters.length
            )
          ];

        const { error: roundError } = await supabase.rpc(
          "ensure_silhouette_round",
          {
            p_game_id: currentGame.id,
            p_character_name: randomCharacter.name,
          }
        );

        if (roundError) throw roundError;

        return true;
      } catch (err) {
        console.error("SILHOUETTE ROUND CREATE ERROR:", err);

        if (mountedRef.current && !navigationRef.current) {
          setLoadError(
            err instanceof Error
              ? err.message
              : "Die nächste Runde konnte nicht erstellt werden."
          );
        }

        return false;
      } finally {
        creatingRoundRef.current = false;
      }
    },
    []
  );

  const loadGame = useCallback(
    async function loadGameData(): Promise<void> {
      if (!mountedRef.current || navigationRef.current) {
        return;
      }

      if (loadingGameRef.current) {
        reloadQueuedRef.current = true;
        return;
      }

      loadingGameRef.current = true;
      const lifecycle = lifecycleRef.current;

      function canUpdate() {
        return (
          mountedRef.current &&
          !navigationRef.current &&
          lifecycle === lifecycleRef.current
        );
      }

      try {
        const roomId = sessionStorage.getItem("roomId");
        const currentPlayerId =
          sessionStorage.getItem("playerId");
        const gameId =
          sessionStorage.getItem("silhouetteGameId");

        if (!roomId || !currentPlayerId || !gameId) {
          navigationRef.current = true;
          router.replace("/silhouette");
          return;
        }

        const { data: gameData, error: gameError } =
          await supabase
            .from("silhouette_games")
            .select(
              "id, room_id, category, status, current_round, total_rounds"
            )
            .eq("id", gameId)
            .eq("room_id", roomId)
            .maybeSingle();

        if (!canUpdate()) return;

        if (gameError || !gameData) {
          throw new Error(
            "Das Spiel konnte nicht geladen werden."
          );
        }

        const currentGame = gameData as SilhouetteGame;

        const { data: playerData, error: playerError } =
          await supabase
            .from("players")
            .select("id, name, is_host")
            .eq("room_id", roomId)
            .order("created_at", { ascending: true });

        if (!canUpdate()) return;

        if (playerError) {
          throw new Error(
            "Die Spieler konnten nicht geladen werden."
          );
        }

        const currentPlayers: Player[] = playerData ?? [];

        if (
          !currentPlayers.some(
            (player) => player.id === currentPlayerId
          )
        ) {
          navigationRef.current = true;
          clearSilhouetteSession();
          router.replace("/silhouette");
          return;
        }

        const [scoreResult, roundResult] = await Promise.all([
          supabase
            .from("silhouette_scores")
            .select("player_id, points")
            .eq("game_id", gameId),
          supabase
            .from("silhouette_rounds")
            .select(
              "id, round_number, character_name, reveal_stage, status, started_at, stage_started_at"
            )
            .eq("game_id", gameId)
            .eq(
              "round_number",
              currentGame.current_round
            )
            .maybeSingle(),
        ]);

        if (!canUpdate()) return;

        if (scoreResult.error) {
          throw new Error(
            "Der Punktestand konnte nicht geladen werden."
          );
        }

        if (roundResult.error) {
          throw new Error(
            "Die Runde konnte nicht geladen werden."
          );
        }

        const currentRound = roundResult.data
          ? (roundResult.data as SilhouetteRound)
          : null;

        let guesses: Guess[] = [];
        let currentProgress: ProgressState | null = null;

        if (currentRound) {
          const { data: guessData, error: guessError } =
            await supabase
              .from("silhouette_guesses")
              .select(
                "id, player_id, guessed_character, is_correct, reveal_stage, points"
              )
              .eq("round_id", currentRound.id)
              .eq("player_id", currentPlayerId);

          if (!canUpdate()) return;

          if (guessError) {
            throw new Error(
              "Deine Tipps konnten nicht geladen werden."
            );
          }

          guesses = (guessData ?? []) as Guess[];

          if (
            currentGame.status === "playing" &&
            currentRound.status === "playing"
          ) {
            const {
              data: progressData,
              error: progressError,
            } = await supabase.rpc(
              "get_silhouette_round_progress",
              {
                p_game_id: gameId,
                p_round_id: currentRound.id,
              }
            );

            if (!canUpdate()) return;

            if (progressError) {
              throw new Error(progressError.message);
            }

            const result = progressData?.[0] as
              | RoundProgress
              | undefined;

            if (!result) {
              throw new Error(
                "Der Rundenfortschritt konnte nicht geladen werden."
              );
            }

            // Während der Abfrage wurde bereits weitergeschaltet.
            if (!result.is_current) return;

            currentProgress = {
              ...result,
              round_id: currentRound.id,
            };

            const serverMs = Date.parse(result.server_now);

            if (Number.isFinite(serverMs)) {
              serverClockRef.current = {
                serverMs,
                localMs: performance.now(),
              };
              setClockMs(serverMs);
            }
          }
        }

        if (!canUpdate()) return;

        const stageKey = currentRound
          ? `${currentRound.id}:${currentRound.reveal_stage}`
          : "";

        if (previousStageKeyRef.current !== stageKey) {
          previousStageKeyRef.current = stageKey;
          setSelectedGuess("");
          setLastGuessCorrect(null);
          setLastPoints(0);
          setError("");
          setControlError("");
        }

        activeRoundIdRef.current = currentRound?.id ?? null;

        setPlayerId(currentPlayerId);
        setGame(currentGame);
        setPlayers(currentPlayers);
        setScores((scoreResult.data ?? []) as Score[]);
        setRound(currentRound);
        setOwnGuesses(guesses);
        setProgress(currentProgress);
        setLoadError("");
        setLoading(false);

        if (
          currentGame.status === "playing" &&
          !currentRound
        ) {
          const prepared = await createRoundIfNeeded(
            currentGame,
            currentPlayers
          );

          if (prepared && canUpdate()) {
            reloadQueuedRef.current = true;
          }
        }
      } catch (err) {
        if (!canUpdate()) return;

        console.error("SILHOUETTE LOAD ERROR:", err);
        setLoadError(
          err instanceof Error
            ? err.message
            : "Beim Laden des Spiels ist ein Fehler aufgetreten."
        );
        setLoading(false);
      } finally {
        loadingGameRef.current = false;

        const reload = reloadQueuedRef.current;
        reloadQueuedRef.current = false;

        if (
          reload &&
          mountedRef.current &&
          !navigationRef.current
        ) {
          void loadGameData();
        }
      }
    },
    [router, createRoundIfNeeded]
  );

  useEffect(() => {
    mountedRef.current = true;
    lifecycleRef.current += 1;

    const gameId =
      sessionStorage.getItem("silhouetteGameId");
    const roomId = sessionStorage.getItem("roomId");
    const currentPlayerId =
      sessionStorage.getItem("playerId");

    if (!gameId || !roomId || !currentPlayerId) {
      navigationRef.current = true;
      router.replace("/silhouette");

      return () => {
        mountedRef.current = false;
        lifecycleRef.current += 1;
      };
    }

    const initialLoad = window.setTimeout(() => {
      void loadGame();
    }, 0);

    let channel = supabase.channel(
      `silhouette-game-${gameId}`
    );

    const subscriptions = [
      {
        table: "silhouette_games",
        filter: `id=eq.${gameId}`,
      },
      {
        table: "silhouette_rounds",
        filter: `game_id=eq.${gameId}`,
      },
      {
        table: "silhouette_scores",
        filter: `game_id=eq.${gameId}`,
      },
      {
        table: "silhouette_guesses",
        filter: `game_id=eq.${gameId}`,
      },
      {
        table: "players",
        filter: `room_id=eq.${roomId}`,
      },
    ];

    for (const subscription of subscriptions) {
      channel = channel.on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: subscription.table,
          filter: subscription.filter,
        },
        () => {
          void loadGame();
        }
      );
    }

    channel.subscribe();

    const fallback = window.setInterval(() => {
      void loadGame();
    }, 1000);

    return () => {
      mountedRef.current = false;
      lifecycleRef.current += 1;
      window.clearTimeout(initialLoad);
      window.clearInterval(fallback);
      void supabase.removeChannel(channel);
    };
  }, [loadGame, router]);

  useEffect(() => {
    if (game?.status !== "playing") return;

    const updateClock = () => {
      setClockMs(getServerNow());
    };

    updateClock();

    const interval = window.setInterval(
      updateClock,
      100
    );

    return () => window.clearInterval(interval);
  }, [game?.status, getServerNow]);

  /*
   * Der Server entscheidet über Stufen- und Rundenwechsel.
   * Die Runden-ID schützt vor verspäteten Doppelaufrufen.
   */
  const activeGameId = game?.id;
  const activeGameStatus = game?.status;
  const activeGameRound = game?.current_round;
  const activeRoundId = round?.id;
  const activeRoundStatus = round?.status;
  const activeRoundNumber = round?.round_number;

  useEffect(() => {
    if (
      !isHost ||
      !activeGameId ||
      !activeRoundId ||
      activeGameStatus !== "playing" ||
      activeRoundStatus !== "playing" ||
      activeRoundNumber !== activeGameRound
    ) {
      return;
    }

    const gameId = activeGameId;
    const roundId = activeRoundId;
    const roundNumber = activeRoundNumber;
    const lifecycle = lifecycleRef.current;

    let cancelled = false;
    let retryAt = 0;

    function canUpdate() {
      return (
        !cancelled &&
        mountedRef.current &&
        !navigationRef.current &&
        lifecycle === lifecycleRef.current
      );
    }

    async function tick() {
      if (
        !canUpdate() ||
        advancingRef.current ||
        performance.now() < retryAt
      ) {
        return;
      }

      advancingRef.current = true;

      try {
        const { data, error: tickError } = await supabase.rpc(
          "tick_silhouette_round",
          {
            p_game_id: gameId,
            p_round_id: roundId,
          }
        );

        if (!canUpdate()) return;

        if (tickError) {
          throw new Error(tickError.message);
        }

        const result = data?.[0] as
          | TickResult
          | undefined;

        if (!result) {
          throw new Error(
            "Der Rundenwechsel konnte nicht geprüft werden."
          );
        }

        setControlError("");

        if (
          result.did_change ||
          result.next_round !== roundNumber ||
          result.game_status !== "playing"
        ) {
          await loadGame();
        }
      } catch (err) {
        if (!canUpdate()) return;

        console.error("SILHOUETTE TICK ERROR:", err);
        setControlError(
          err instanceof Error
            ? err.message
            : "Die Runde konnte nicht weitergeschaltet werden."
        );

        retryAt = performance.now() + 3000;
      } finally {
        advancingRef.current = false;
      }
    }

    void tick();

    const interval = window.setInterval(() => {
      void tick();
    }, 500);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, [
    isHost,
    activeGameId,
    activeGameStatus,
    activeGameRound,
    activeRoundId,
    activeRoundStatus,
    activeRoundNumber,
    loadGame,
  ]);

  async function submitGuess() {
    if (
      !game ||
      !round ||
      !selectedGuess ||
      guessing ||
      alreadyCorrect ||
      guessedThisStage ||
      allCorrect ||
      secondsLeft <= 0 ||
      navigationRef.current ||
      game.status !== "playing" ||
      round.status !== "playing"
    ) {
      return;
    }

    const submittedRoundId = round.id;
    const lifecycle = lifecycleRef.current;

    setGuessing(true);
    setError("");

    try {
      const { data, error: guessError } = await supabase.rpc(
        "submit_silhouette_guess",
        {
          p_game_id: game.id,
          p_character_name: selectedGuess,
        }
      );

      if (
        !mountedRef.current ||
        navigationRef.current ||
        lifecycle !== lifecycleRef.current
      ) {
        return;
      }

      if (guessError) {
        throw new Error(guessError.message);
      }

      const result = data?.[0] as
        | GuessResult
        | undefined;

      if (!result) {
        throw new Error(
          "Der Tipp konnte nicht geprüft werden."
        );
      }

      if (
        activeRoundIdRef.current === submittedRoundId
      ) {
        setLastGuessCorrect(result.is_correct);
        setLastPoints(result.points_earned);
        setSelectedGuess("");
      }

      await loadGame();
    } catch (err) {
      if (
        !mountedRef.current ||
        navigationRef.current ||
        lifecycle !== lifecycleRef.current
      ) {
        return;
      }

      console.error("SILHOUETTE GUESS ERROR:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Der Tipp konnte nicht geprüft werden."
      );
    } finally {
      if (
        mountedRef.current &&
        lifecycle === lifecycleRef.current
      ) {
        setGuessing(false);
      }
    }
  }

  function newGame() {
    navigationRef.current = true;
    sessionStorage.removeItem("silhouetteGameId");
    router.push("/silhouette/lobby");
  }

  function goHome() {
    navigationRef.current = true;
    router.push("/");
  }

  const visibleError = error || controlError || loadError;

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-slate-400">
          Silhouette wird geladen...
        </p>
      </main>
    );
  }

  if (!game) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <p className="text-center text-red-400">
          {visibleError ||
            "Das Spiel konnte nicht geladen werden."}
        </p>
      </main>
    );
  }

  if (game.status === "finished") {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
          <div className="text-center">
            <div className="text-7xl">🏆</div>

            <p className="mt-5 text-sm font-black uppercase tracking-[0.25em] text-violet-400">
              Silhouette beendet
            </p>

            <h1 className="mt-3 text-3xl font-black">
              Endstand
            </h1>
          </div>

          <div className="mt-8 space-y-3">
            {ranking.map((player, index) => (
              <div
                key={player.id}
                className={`flex items-center gap-4 rounded-3xl border p-5 ${
                  index === 0
                    ? "border-yellow-400/40 bg-yellow-400/10"
                    : "border-slate-800 bg-slate-900"
                }`}
              >
                <div className="w-12 text-center text-3xl">
                  {index === 0
                    ? "🥇"
                    : index === 1
                      ? "🥈"
                      : "🥉"}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-black">
                    {player.name}
                    {player.id === playerId ? " (Du)" : ""}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-black text-violet-300">
                    {player.points}
                  </p>
                  <p className="text-xs text-slate-500">
                    Punkte
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={newGame}
              className="rounded-2xl bg-violet-500 px-6 py-4 font-black transition hover:bg-violet-400"
            >
              👤 Neues Spiel
            </button>

            <button
              type="button"
              onClick={goHome}
              className="rounded-2xl border border-slate-700 bg-slate-900 px-6 py-4 font-black transition hover:bg-slate-800"
            >
              ← Hauptmenü
            </button>
          </div>

          {visibleError && (
            <p className="mt-5 text-center text-sm text-red-400">
              {visibleError}
            </p>
          )}
        </div>
      </main>
    );
  }

  if (!round) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <div className="text-5xl">⏳</div>

          <p className="mt-4 text-slate-400">
            Nächste Runde wird vorbereitet...
          </p>

          {visibleError && (
            <p className="mt-4 text-sm text-red-400">
              {visibleError}
            </p>
          )}
        </div>
      </main>
    );
  }

  const stagePoints =
    round.reveal_stage === 1
      ? 5
      : round.reveal_stage === 2
        ? 3
        : 1;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-400">
              Silhouette
            </p>

            <h1 className="mt-1 text-2xl font-black">
              Runde {game.current_round}/{game.total_rounds}
            </h1>
          </div>

          <div className="rounded-2xl bg-slate-900 px-4 py-3 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {allCorrect ? "Auflösung" : "Noch"}
            </p>
            <p className="text-2xl font-black">
              {secondsLeft}s
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4">
          <div>
            <p className="text-sm font-bold text-slate-400">
              {allCorrect
                ? "Runde gelöst"
                : `Stufe ${round.reveal_stage}/3`}
            </p>

            <p className="mt-1 font-black">
              {allCorrect
                ? "✅ Alle haben richtig geraten!"
                : round.reveal_stage === 1
                  ? "🌫️ Schwer"
                  : round.reveal_stage === 2
                    ? "🔍 Mittel"
                    : "👀 Aufgedeckt"}
            </p>
          </div>

          <div className="text-right">
            <p className="text-2xl font-black text-violet-300">
              {allCorrect
                ? `${progress?.correct_count}/${progress?.player_count}`
                : `+${stagePoints}`}
            </p>
            <p className="text-xs text-slate-500">
              {allCorrect ? "Spieler" : "Punkte"}
            </p>
          </div>
        </div>

        {!allCorrect && progress && (
          <p className="mt-3 text-center text-sm text-slate-400">
            {progress.correct_count}/{progress.player_count}{" "}
            Spieler haben richtig geraten.
          </p>
        )}

        <div className="mx-auto mt-6 max-w-md overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
          <div className="aspect-square bg-slate-800 p-4">
            <SilhouetteImage
              key={`${round.id}:${game.category}`}
              character={round.character_name}
              category={game.category}
              stage={round.reveal_stage}
              revealed={allCorrect}
            />
          </div>

          <div className="p-5 text-center">
            {allCorrect ? (
              <>
                <p className="text-sm font-bold uppercase tracking-wider text-violet-300">
                  Gesuchter Charakter
                </p>
                <p className="mt-2 text-2xl font-black">
                  {round.character_name}
                </p>
                <p className="mt-3 text-sm text-slate-400">
                  {game.current_round >= game.total_rounds
                    ? "Der Endstand erscheint gleich..."
                    : "Die nächste Runde startet gleich..."}
                </p>
              </>
            ) : alreadyCorrect ? (
              <>
                <p className="text-xl font-black text-green-300">
                  ✅ Richtig erkannt!
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Warte auf die anderen Spieler.
                </p>
              </>
            ) : guessedThisStage ? (
              <>
                <p className="font-black text-red-300">
                  ❌ Nicht richtig
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  In der nächsten Stufe darfst du erneut
                  raten.
                </p>
              </>
            ) : (
              <>
                <p className="font-black">
                  Welcher Charakter ist das?
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Du hast pro Stufe einen Versuch.
                </p>
              </>
            )}
          </div>
        </div>

        {!allCorrect &&
          !alreadyCorrect &&
          !guessedThisStage && (
            <div className="mx-auto mt-6 max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <select
                value={selectedGuess}
                onChange={(event) =>
                  setSelectedGuess(event.target.value)
                }
                disabled={guessing || secondsLeft <= 0}
                aria-label="Charakter auswählen"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 text-base outline-none focus:border-violet-500"
              >
                <option value="">
                  Charakter auswählen...
                </option>

                {availableCharacters.map((character) => (
                  <option
                    key={character}
                    value={character}
                  >
                    {character}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => void submitGuess()}
                disabled={
                  !selectedGuess ||
                  guessing ||
                  secondsLeft <= 0
                }
                className="mt-3 w-full rounded-2xl bg-violet-500 px-6 py-5 font-black transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {guessing
                  ? "Wird geprüft..."
                  : `🎯 Tipp abgeben · ${stagePoints} Punkte`}
              </button>
            </div>
          )}

        {!allCorrect && lastGuessCorrect === true && (
          <div className="mx-auto mt-4 max-w-md rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-center">
            <p className="font-black text-green-300">
              🎉 Richtig!
            </p>
            <p className="mt-1 text-sm text-slate-400">
              +{lastPoints} Punkte
            </p>
          </div>
        )}

        {!allCorrect && lastGuessCorrect === false && (
          <div className="mx-auto mt-4 max-w-md rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-center">
            <p className="font-black text-red-300">
              ❌ Falsch
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Warte auf die nächste Aufdeck-Stufe.
            </p>
          </div>
        )}

        <div className="mt-10">
          <p className="text-center text-sm font-black uppercase tracking-[0.2em] text-slate-500">
            Punktestand
          </p>

          <div className="mt-4 space-y-3">
            {ranking.map((player, index) => (
              <div
                key={player.id}
                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-4"
              >
                <div className="w-8 text-center text-xl font-black text-slate-500">
                  {index + 1}.
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-bold">
                    {player.name}
                    {player.id === playerId ? " (Du)" : ""}
                  </p>
                </div>

                <p className="text-xl font-black text-violet-300">
                  {player.points}
                </p>
              </div>
            ))}
          </div>
        </div>

        {visibleError && (
          <p
            role="alert"
            className="mt-6 text-center text-sm text-red-400"
          >
            {visibleError}
          </p>
        )}
      </div>
    </main>
  );
}