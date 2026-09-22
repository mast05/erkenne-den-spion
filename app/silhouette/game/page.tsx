"use client";

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

const STAGE_SECONDS = 10;

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

function SilhouetteImage({
  character,
  category,
  stage,
}: {
  character: string;
  category: string;
  stage: number;
}) {
  const [imageError, setImageError] =
    useState(false);

  if (imageError) {
    return (
      <div className="flex h-full w-full items-center justify-center text-7xl">
        ❓
      </div>
    );
  }

  let filterClass = "";

  if (stage === 1) {
  filterClass =
    "scale-110 blur-[10px] grayscale brightness-[0.6] contrast-125";
}

if (stage === 2) {
  filterClass =
    "scale-108 blur-[7px] grayscale-[0.75] brightness-[0.7] contrast-120";
}

if (stage >= 3) {
  filterClass =
    "scale-100";
}

  return (
    <img
      src={getCharacterImage(
        character,
        category
      )}
      alt="Geheimer Charakter"
      onError={() =>
        setImageError(true)
      }
      className={`h-full w-full object-contain transition-all duration-1000 ${filterClass}`}
    />
  );
}
export default function SilhouetteGamePage() {
  const router = useRouter();

  const [game, setGame] =
    useState<SilhouetteGame | null>(
      null
    );

  const [round, setRound] =
    useState<SilhouetteRound | null>(
      null
    );

  const [players, setPlayers] =
    useState<Player[]>([]);

  const [scores, setScores] =
    useState<Score[]>([]);

  const [ownGuesses, setOwnGuesses] =
    useState<Guess[]>([]);

  const [playerId, setPlayerId] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [
    selectedGuess,
    setSelectedGuess,
  ] = useState("");

  const [guessing, setGuessing] =
    useState(false);

  const [
    lastGuessCorrect,
    setLastGuessCorrect,
  ] = useState<boolean | null>(null);

  const [
    lastPoints,
    setLastPoints,
  ] = useState(0);

  const [secondsLeft, setSecondsLeft] =
    useState(STAGE_SECONDS);

  const advancingRef =
    useRef(false);

  const creatingRoundRef =
    useRef(false);

  const currentPlayer =
    useMemo(
      () =>
        players.find(
          (player) =>
            player.id === playerId
        ) ?? null,
      [players, playerId]
    );

  const isHost =
    currentPlayer?.is_host === true;

  const availableCharacters =
    useMemo(() => {
      if (!game) {
        return [];
      }

      return dealCharacters
        .filter(
          (character) =>
            character.category ===
            game.category
        )
        .map(
          (character) =>
            character.name
        )
        .sort((a, b) =>
          a.localeCompare(b, "de")
        );
    }, [game]);

  const guessedThisStage =
    useMemo(() => {
      if (!round) {
        return false;
      }

      return ownGuesses.some(
        (guess) =>
          guess.reveal_stage ===
          round.reveal_stage
      );
    }, [ownGuesses, round]);

  const alreadyCorrect =
    useMemo(
      () =>
        ownGuesses.some(
          (guess) =>
            guess.is_correct
        ),
      [ownGuesses]
    );

  const ranking =
    useMemo(() => {
      return players
        .map((player) => ({
          ...player,
          points:
            scores.find(
              (score) =>
                score.player_id ===
                player.id
            )?.points ?? 0,
        }))
        .sort(
          (a, b) =>
            b.points - a.points
        );
    }, [players, scores]);

  const createRoundIfNeeded =
    useCallback(
      async (
        currentGame: SilhouetteGame,
        currentPlayers: Player[]
      ) => {
        const currentPlayerId =
          sessionStorage.getItem(
            "playerId"
          );

        const me =
          currentPlayers.find(
            (player) =>
              player.id ===
              currentPlayerId
          );

        if (
          !me?.is_host ||
          creatingRoundRef.current ||
          currentGame.status !==
            "playing"
        ) {
          return;
        }

        creatingRoundRef.current = true;

        try {
          const {
            data: existingRound,
          } = await supabase
            .from(
              "silhouette_rounds"
            )
            .select("id")
            .eq(
              "game_id",
              currentGame.id
            )
            .eq(
              "round_number",
              currentGame.current_round
            )
            .maybeSingle();

          if (existingRound) {
            return;
          }

          const {
            data: usedRounds,
            error: usedError,
          } = await supabase
            .from(
              "silhouette_rounds"
            )
            .select(
              "character_name"
            )
            .eq(
              "game_id",
              currentGame.id
            );

          if (usedError) {
            console.error(
              "SILHOUETTE USED CHARACTERS ERROR:",
              usedError
            );

            return;
          }

          const usedNames =
            new Set(
              (
                usedRounds ?? []
              ).map(
                (item) =>
                  item.character_name
              )
            );

          const possibleCharacters =
            dealCharacters.filter(
              (character) =>
                character.category ===
                  currentGame.category &&
                !usedNames.has(
                  character.name
                )
            );

          if (
            possibleCharacters.length ===
            0
          ) {
            setError(
              "Es sind keine weiteren Charaktere verfügbar."
            );

            return;
          }

          const randomCharacter =
            possibleCharacters[
              Math.floor(
                Math.random() *
                  possibleCharacters.length
              )
            ];

          const {
            error: roundError,
          } = await supabase.rpc(
            "ensure_silhouette_round",
            {
              p_game_id:
                currentGame.id,

              p_character_name:
                randomCharacter.name,
            }
          );

          if (roundError) {
            console.error(
              "SILHOUETTE ROUND CREATE ERROR:",
              roundError
            );

            setError(
              roundError.message
            );
          }
        } finally {
          creatingRoundRef.current =
            false;
        }
      },
      []
    );

  const loadGame =
    useCallback(async () => {
      const roomId =
        sessionStorage.getItem(
          "roomId"
        );

      const currentPlayerId =
        sessionStorage.getItem(
          "playerId"
        );

      const gameId =
        sessionStorage.getItem(
          "silhouetteGameId"
        );

      if (
        !roomId ||
        !currentPlayerId ||
        !gameId
      ) {
        router.push(
          "/silhouette"
        );

        return;
      }

      try {
        const {
          data: gameData,
          error: gameError,
        } = await supabase
          .from(
            "silhouette_games"
          )
          .select(
            "id, room_id, category, status, current_round, total_rounds"
          )
          .eq("id", gameId)
          .maybeSingle();

        if (
          gameError ||
          !gameData
        ) {
          console.error(
            "SILHOUETTE GAME LOAD ERROR:",
            gameError
          );

          setError(
            "Das Spiel konnte nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        const currentGame =
          gameData as SilhouetteGame;

        const {
          data: playerData,
          error: playerError,
        } = await supabase
          .from("players")
          .select(
            "id, name, is_host"
          )
          .eq(
            "room_id",
            roomId
          )
          .order(
            "created_at",
            {
              ascending: true,
            }
          );

        if (playerError) {
          console.error(
            "SILHOUETTE PLAYERS ERROR:",
            playerError
          );

          setError(
            "Die Spieler konnten nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        const currentPlayers =
          (playerData ??
            []) as Player[];

        const {
          data: scoreData,
          error: scoreError,
        } = await supabase
          .from(
            "silhouette_scores"
          )
          .select(
            "player_id, points"
          )
          .eq(
            "game_id",
            gameId
          );

        if (scoreError) {
          console.error(
            "SILHOUETTE SCORES ERROR:",
            scoreError
          );
        }

        const {
          data: roundData,
          error: roundError,
        } = await supabase
          .from(
            "silhouette_rounds"
          )
          .select(
            "id, round_number, character_name, reveal_stage, status, started_at"
          )
          .eq(
            "game_id",
            gameId
          )
          .eq(
            "round_number",
            currentGame.current_round
          )
          .maybeSingle();

        if (roundError) {
          console.error(
            "SILHOUETTE ROUND LOAD ERROR:",
            roundError
          );
        }

        let guessData: Guess[] = [];

        if (roundData) {
          const {
            data: guesses,
            error: guessError,
          } = await supabase
            .from(
              "silhouette_guesses"
            )
            .select(
              "id, player_id, guessed_character, is_correct, reveal_stage, points"
            )
            .eq(
              "round_id",
              roundData.id
            )
            .eq(
              "player_id",
              currentPlayerId
            );

          if (guessError) {
            console.error(
              "SILHOUETTE GUESSES ERROR:",
              guessError
            );
          } else {
            guessData =
              (guesses ??
                []) as Guess[];
          }
        }

        setPlayerId(
          currentPlayerId
        );

        setGame(
          currentGame
        );

        setPlayers(
          currentPlayers
        );

        setScores(
          (scoreData ??
            []) as Score[]
        );

        setRound(
          roundData
            ? (roundData as SilhouetteRound)
            : null
        );

        setOwnGuesses(
          guessData
        );

        setLoading(false);
        setError("");

        if (
          currentGame.status ===
            "playing" &&
          !roundData
        ) {
          await createRoundIfNeeded(
            currentGame,
            currentPlayers
          );
        }
      } catch (err) {
        console.error(
          "SILHOUETTE LOAD ERROR:",
          err
        );

        setError(
          "Beim Laden des Spiels ist ein Fehler aufgetreten."
        );

        setLoading(false);
      }
    }, [
      router,
      createRoundIfNeeded,
    ]);

  useEffect(() => {
    const gameId =
      sessionStorage.getItem(
        "silhouetteGameId"
      );

    if (!gameId) {
      router.push(
        "/silhouette"
      );

      return;
    }

    void loadGame();

    const channel =
      supabase
        .channel(
          `silhouette-game-${gameId}`
        )
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table:
              "silhouette_games",
            filter: `id=eq.${gameId}`,
          },
          () => {
            void loadGame();
          }
        )
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table:
              "silhouette_rounds",
            filter: `game_id=eq.${gameId}`,
          },
          () => {
            setSelectedGuess(
              ""
            );

            setLastGuessCorrect(
              null
            );

            setLastPoints(0);

            void loadGame();
          }
        )
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table:
              "silhouette_scores",
            filter: `game_id=eq.${gameId}`,
          },
          () => {
            void loadGame();
          }
        )
        .subscribe();

    const fallback =
      window.setInterval(
        () => {
          void loadGame();
        },
        3000
      );

    return () => {
      window.clearInterval(
        fallback
      );

      void supabase.removeChannel(
        channel
      );
    };
  }, [
    loadGame,
    router,
  ]);

  /*
   * Countdown + automatische
   * Stufenwechsel.
   */
  useEffect(() => {
    if (
      !round ||
      !game ||
      game.status !== "playing"
    ) {
      return;
    }

    setSecondsLeft(STAGE_SECONDS);

    const stageStartedAt = Date.now();

    const countdown = window.setInterval(
      () => {
        const elapsed = Math.floor(
          (Date.now() - stageStartedAt) /
            1000
        );

        setSecondsLeft(
          Math.max(
            0,
            STAGE_SECONDS - elapsed
          )
        );
      },
      250
    );

    const advanceTimer =
      window.setTimeout(
        async () => {
          if (
            !isHost ||
            advancingRef.current
          ) {
            return;
          }

          advancingRef.current = true;

          try {
            if (
              round.reveal_stage < 3
            ) {
              const {
                error:
                  advanceError,
              } = await supabase.rpc(
                "advance_silhouette_stage",
                {
                  p_game_id:
                    game.id,
                }
              );

              if (advanceError) {
                console.error(
                  "SILHOUETTE ADVANCE ERROR:",
                  advanceError
                );

                setError(
                  advanceError.message
                );

                return;
              }
            } else {
              const {
                error:
                  finishError,
              } = await supabase.rpc(
                "finish_silhouette_round",
                {
                  p_game_id:
                    game.id,
                }
              );

              if (finishError) {
                console.error(
                  "SILHOUETTE FINISH ROUND ERROR:",
                  finishError
                );

                setError(
                  finishError.message
                );

                return;
              }

              setSelectedGuess("");
              setLastGuessCorrect(
                null
              );
              setLastPoints(0);
            }

            await loadGame();
          } finally {
            advancingRef.current =
              false;
          }
        },
        STAGE_SECONDS * 1000
      );

    return () => {
      window.clearInterval(
        countdown
      );

      window.clearTimeout(
        advanceTimer
      );
    };
  }, [
    round?.id,
    round?.reveal_stage,
    game?.id,
    game?.status,
    isHost,
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
      game.status !==
        "playing"
    ) {
      return;
    }

    setGuessing(true);
    setError("");

    try {
      const {
        data,
        error: guessError,
      } = await supabase.rpc(
        "submit_silhouette_guess",
        {
          p_game_id:
            game.id,

          p_character_name:
            selectedGuess,
        }
      );

      if (guessError) {
        console.error(
          "SILHOUETTE GUESS ERROR:",
          guessError
        );

        setError(
          guessError.message
        );

        return;
      }

      const result =
        data?.[0] as
          | GuessResult
          | undefined;

      if (!result) {
        setError(
          "Der Tipp konnte nicht geprüft werden."
        );

        return;
      }

      setLastGuessCorrect(
        result.is_correct
      );

      setLastPoints(
        result.points_earned
      );

      setSelectedGuess("");

      await loadGame();
    } catch (err) {
      console.error(
        "SILHOUETTE GUESS ERROR:",
        err
      );

      setError(
        "Der Tipp konnte nicht geprüft werden."
      );
    } finally {
      setGuessing(false);
    }
  }

  function newGame() {
    sessionStorage.removeItem(
      "silhouetteGameId"
    );

    router.push(
      "/silhouette/lobby"
    );
  }

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
          {error ||
            "Das Spiel konnte nicht geladen werden."}
        </p>
      </main>
    );
  }

  /*
   * ENDSCREEN
   */
  if (
    game.status ===
    "finished"
  ) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">

          <div className="text-center">
            <div className="text-7xl">
              🏆
            </div>

            <p className="mt-5 text-sm font-black uppercase tracking-[0.25em] text-violet-400">
              Silhouette beendet
            </p>

            <h1 className="mt-3 text-3xl font-black">
              Endstand
            </h1>
          </div>

          <div className="mt-8 space-y-3">
            {ranking.map(
              (
                player,
                index
              ) => (
                <div
                  key={
                    player.id
                  }
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

                      {player.id ===
                      playerId
                        ? " (Du)"
                        : ""}
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
              )
            )}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button
              onClick={newGame}
              className="rounded-2xl bg-violet-500 px-6 py-4 font-black transition hover:bg-violet-400"
            >
              👤 Neues Spiel
            </button>

            <button
              onClick={() =>
                router.push("/")
              }
              className="rounded-2xl border border-slate-700 bg-slate-900 px-6 py-4 font-black transition hover:bg-slate-800"
            >
              🏠 Startseite
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (!round) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <div className="text-5xl">
            ⏳
          </div>

          <p className="mt-4 text-slate-400">
            Nächste Runde wird
            vorbereitet...
          </p>

          {error && (
            <p className="mt-4 text-sm text-red-400">
              {error}
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

        {/* HEADER */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-400">
              Silhouette
            </p>

            <h1 className="mt-1 text-2xl font-black">
              Runde{" "}
              {game.current_round}/
              {game.total_rounds}
            </h1>
          </div>

          <div className="rounded-2xl bg-slate-900 px-4 py-3 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Noch
            </p>

            <p className="text-2xl font-black">
              {secondsLeft}s
            </p>
          </div>
        </div>

        {/* STUFE */}
        <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4">
          <div>
            <p className="text-sm font-bold text-slate-400">
              Stufe{" "}
              {round.reveal_stage}/3
            </p>

            <p className="mt-1 font-black">
              {round.reveal_stage === 1
  ? "🌫️ Schwer"
  : round.reveal_stage === 2
    ? "🔍 Mittel"
    : "👀 Aufgedeckt"}
            </p>
          </div>

          <div className="text-right">
            <p className="text-2xl font-black text-violet-300">
              +{stagePoints}
            </p>

            <p className="text-xs text-slate-500">
              Punkte
            </p>
          </div>
        </div>

        {/* BILD */}
        <div className="mx-auto mt-6 max-w-md overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
          <div className="aspect-square bg-slate-800 p-4">
            <SilhouetteImage
              character={
                round.character_name
              }
              category={
                game.category
              }
              stage={
                round.reveal_stage
              }
            />
          </div>

          <div className="p-5 text-center">
            {alreadyCorrect ? (
              <>
                <p className="text-xl font-black text-green-300">
                  ✅ Richtig erkannt!
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Warte auf die nächste
                  Runde.
                </p>
              </>
            ) : guessedThisStage ? (
              <>
                <p className="font-black text-red-300">
                  ❌ Nicht richtig
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  In der nächsten Stufe
                  darfst du erneut raten.
                </p>
              </>
            ) : (
              <>
                <p className="font-black">
                  Welcher Charakter ist
                  das?
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Du hast pro Stufe
                  einen Versuch.
                </p>
              </>
            )}
          </div>
        </div>

        {/* GUESS */}
        {!alreadyCorrect &&
          !guessedThisStage && (
            <div className="mx-auto mt-6 max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <select
                value={
                  selectedGuess
                }
                onChange={(
                  event
                ) =>
                  setSelectedGuess(
                    event.target.value
                  )
                }
                disabled={
                  guessing
                }
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 text-base outline-none focus:border-violet-500"
              >
                <option value="">
                  Charakter auswählen...
                </option>

                {availableCharacters.map(
                  (character) => (
                    <option
                      key={
                        character
                      }
                      value={
                        character
                      }
                    >
                      {
                        character
                      }
                    </option>
                  )
                )}
              </select>

              <button
                onClick={
                  submitGuess
                }
                disabled={
                  !selectedGuess ||
                  guessing
                }
                className="mt-3 w-full rounded-2xl bg-violet-500 px-6 py-5 font-black transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {guessing
                  ? "Wird geprüft..."
                  : `🎯 Tipp abgeben · ${stagePoints} Punkte`}
              </button>
            </div>
          )}

        {lastGuessCorrect ===
          true && (
          <div className="mx-auto mt-4 max-w-md rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-center">
            <p className="font-black text-green-300">
              🎉 Richtig!
            </p>

            <p className="mt-1 text-sm text-slate-400">
              +{lastPoints} Punkte
            </p>
          </div>
        )}

        {lastGuessCorrect ===
          false && (
          <div className="mx-auto mt-4 max-w-md rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-center">
            <p className="font-black text-red-300">
              ❌ Falsch
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Warte auf die nächste
              Aufdeck-Stufe.
            </p>
          </div>
        )}

        {/* PUNKTESTAND */}
        <div className="mt-10">
          <p className="text-center text-sm font-black uppercase tracking-[0.2em] text-slate-500">
            Punktestand
          </p>

          <div className="mt-4 space-y-3">
            {ranking.map(
              (
                player,
                index
              ) => (
                <div
                  key={
                    player.id
                  }
                  className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-4"
                >
                  <div className="w-8 text-center text-xl font-black text-slate-500">
                    {index + 1}.
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-bold">
                      {player.name}

                      {player.id ===
                      playerId
                        ? " (Du)"
                        : ""}
                    </p>
                  </div>

                  <p className="text-xl font-black text-violet-300">
                    {player.points}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {error && (
          <p className="mt-6 text-center text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}