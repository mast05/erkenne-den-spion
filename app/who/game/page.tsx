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

type WhoGame = {
  id: string;
  room_id: string;
  category: string;
  status: string;
  winner_player_id: string | null;
  turn_order: string[];
  current_turn_index: number;
  finished_player_ids: string[];
};

type Player = {
  id: string;
  name: string;
};

type Assignment = {
  id: string;
  target_player_id: string;
  character_name: string | null;
};

type GuessResult = {
  is_correct: boolean;
  game_status: string;
  actual_character: string | null;
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

function CharacterImage({
  character,
  category,
}: {
  character: string;
  category: string;
}) {
  const [imageError, setImageError] =
    useState(false);

  if (imageError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-slate-950 text-6xl">
        ❓
      </div>
    );
  }

  return (
    <img
      src={getCharacterImage(
        character,
        category
      )}
      alt={character}
      onError={() =>
        setImageError(true)
      }
      className="h-full w-full object-contain"
    />
  );
}

export default function WhoGamePage() {
  const router = useRouter();

  const [game, setGame] =
    useState<WhoGame | null>(null);

  const [players, setPlayers] =
    useState<Player[]>([]);

  const [assignments, setAssignments] =
    useState<Assignment[]>([]);

  const [playerId, setPlayerId] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const [notesReady, setNotesReady] =
    useState(false);

  const [savingNotes, setSavingNotes] =
    useState(false);

  const [notesSaved, setNotesSaved] =
    useState(true);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [guessOpen, setGuessOpen] =
    useState(false);

  const [
    selectedGuess,
    setSelectedGuess,
  ] = useState("");

  const [guessing, setGuessing] =
    useState(false);

  const [endingTurn, setEndingTurn] =
    useState(false);

  const [wrongGuess, setWrongGuess] =
    useState(false);

  const lastSavedNotesRef =
    useRef("");

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

      const whoGameId =
        sessionStorage.getItem(
          "whoGameId"
        );

      if (
        !roomId ||
        !currentPlayerId ||
        !whoGameId
      ) {
        router.push("/who");
        return;
      }

      try {
        const {
          data: gameData,
          error: gameError,
        } = await supabase
          .from("who_games")
          .select(
            "id, room_id, category, status, winner_player_id, turn_order, current_turn_index, finished_player_ids"
          )
          .eq("id", whoGameId)
          .maybeSingle();

        if (
          gameError ||
          !gameData
        ) {
          console.error(
            "WHO GAME LOAD ERROR:",
            gameError
          );

          setError(
            "Das Spiel konnte nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        if (
          gameData.status ===
          "assigning"
        ) {
          router.push(
            "/who/assign"
          );

          return;
        }

        const {
          data: playerData,
          error: playerError,
        } = await supabase
          .from("players")
          .select("id, name")
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
            "WHO PLAYERS ERROR:",
            playerError
          );

          setError(
            "Die Spieler konnten nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        const {
          data: assignmentData,
          error: assignmentError,
        } = await supabase
          .from("who_assignments")
          .select(
            "id, target_player_id, character_name"
          )
          .eq(
            "game_id",
            whoGameId
          );

        if (assignmentError) {
          console.error(
            "WHO ASSIGNMENTS ERROR:",
            assignmentError
          );

          setError(
            "Die Figuren konnten nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        const {
          data: notesData,
          error: notesError,
        } = await supabase
          .from("who_notes")
          .select("content")
          .eq(
            "game_id",
            whoGameId
          )
          .eq(
            "player_id",
            currentPlayerId
          )
          .maybeSingle();

        if (notesError) {
          console.error(
            "WHO NOTES LOAD ERROR:",
            notesError
          );
        }

        const loadedNotes =
          notesData?.content ?? "";

        setPlayerId(
          currentPlayerId
        );

        setGame({
          ...(gameData as WhoGame),
          turn_order:
            gameData.turn_order ?? [],
          finished_player_ids:
            gameData.finished_player_ids ??
            [],
        });

        setPlayers(
          (playerData ??
            []) as Player[]
        );

        setAssignments(
          (assignmentData ??
            []) as Assignment[]
        );

        if (!notesReady) {
          setNotes(
            loadedNotes
          );

          lastSavedNotesRef.current =
            loadedNotes;

          setNotesReady(true);
        }

        setError("");
        setLoading(false);
      } catch (err) {
        console.error(
          "WHO GAME LOAD ERROR:",
          err
        );

        setError(
          "Beim Laden des Spiels ist ein Fehler aufgetreten."
        );

        setLoading(false);
      }
    }, [
      router,
      notesReady,
    ]);

  useEffect(() => {
    const whoGameId =
      sessionStorage.getItem(
        "whoGameId"
      );

    const currentPlayerId =
      sessionStorage.getItem(
        "playerId"
      );

    if (
      !whoGameId ||
      !currentPlayerId
    ) {
      router.push("/who");
      return;
    }

    void loadGame();

    const channel =
      supabase
        .channel(
          `who-game-${whoGameId}-${currentPlayerId}`
        )
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "who_games",
            filter: `id=eq.${whoGameId}`,
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
              "who_assignments",
            filter: `game_id=eq.${whoGameId}`,
          },
          () => {
            void loadGame();
          }
        )
        .subscribe();

    const interval =
      window.setInterval(
        () => {
          void loadGame();
        },
        3000
      );

    return () => {
      window.clearInterval(
        interval
      );

      void supabase.removeChannel(
        channel
      );
    };
  }, [
    loadGame,
    router,
  ]);

  useEffect(() => {
    if (
      !notesReady ||
      !game ||
      !playerId
    ) {
      return;
    }

    if (
      notes ===
      lastSavedNotesRef.current
    ) {
      setNotesSaved(true);
      return;
    }

    setNotesSaved(false);

    const timeout =
      window.setTimeout(
        async () => {
          setSavingNotes(true);

          const {
            error: saveError,
          } = await supabase
            .from("who_notes")
            .upsert(
              {
                game_id:
                  game.id,
                player_id:
                  playerId,
                content:
                  notes,
                updated_at:
                  new Date().toISOString(),
              },
              {
                onConflict:
                  "game_id,player_id",
              }
            );

          if (saveError) {
            console.error(
              "WHO NOTES SAVE ERROR:",
              saveError
            );

            setSavingNotes(false);
            return;
          }

          lastSavedNotesRef.current =
            notes;

          setNotesSaved(true);
          setSavingNotes(false);
        },
        600
      );

    return () => {
      window.clearTimeout(
        timeout
      );
    };
  }, [
    notes,
    notesReady,
    game,
    playerId,
  ]);

  const currentPlayer =
    useMemo(
      () =>
        players.find(
          (player) =>
            player.id ===
            playerId
        ) ?? null,
      [
        players,
        playerId,
      ]
    );

  const finishedPlayerIds =
    useMemo(
      () =>
        game?.finished_player_ids ??
        [],
      [game]
    );

  const hasFinished =
    finishedPlayerIds.includes(
      playerId
    );

  const finishPosition =
    hasFinished
      ? finishedPlayerIds.indexOf(
          playerId
        ) + 1
      : null;

  const otherPlayers =
    useMemo(
      () =>
        players.filter(
          (player) =>
            player.id !==
            playerId
        ),
      [
        players,
        playerId,
      ]
    );

  const currentTurnPlayerId =
    useMemo(() => {
      if (
        !game ||
        !game.turn_order?.length
      ) {
        return null;
      }

      const index =
        game.current_turn_index - 1;

      return (
        game.turn_order[index] ??
        null
      );
    }, [game]);

  const currentTurnPlayer =
    useMemo(() => {
      if (!currentTurnPlayerId) {
        return null;
      }

      return (
        players.find(
          (player) =>
            player.id ===
            currentTurnPlayerId
        ) ?? null
      );
    }, [
      players,
      currentTurnPlayerId,
    ]);

  const isMyTurn =
    !hasFinished &&
    currentTurnPlayerId ===
      playerId;

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
          a.localeCompare(
            b,
            "de"
          )
        );
    }, [game]);

  const winner =
    useMemo(() => {
      if (
        !game?.winner_player_id
      ) {
        return null;
      }

      return (
        players.find(
          (player) =>
            player.id ===
            game.winner_player_id
        ) ?? null
      );
    }, [
      game,
      players,
    ]);

  const rankingPlayers =
    useMemo(() => {
      const ranked =
        finishedPlayerIds
          .map((id) =>
            players.find(
              (player) =>
                player.id === id
            )
          )
          .filter(
            (
              player
            ): player is Player =>
              Boolean(player)
          );

      const remaining =
        players.filter(
          (player) =>
            !finishedPlayerIds.includes(
              player.id
            )
        );

      return [
        ...ranked,
        ...remaining,
      ];
    }, [
      finishedPlayerIds,
      players,
    ]);

  useEffect(() => {
    if (isMyTurn) {
      setWrongGuess(false);
    }
  }, [isMyTurn]);

  async function endTurn() {
    if (
      !game ||
      !isMyTurn ||
      endingTurn ||
      game.status !==
        "playing"
    ) {
      return;
    }

    setEndingTurn(true);
    setGuessOpen(false);
    setSelectedGuess("");
    setWrongGuess(false);
    setError("");

    try {
      const {
        error: turnError,
      } = await supabase.rpc(
        "end_who_turn",
        {
          p_game_id:
            game.id,
        }
      );

      if (turnError) {
        console.error(
          "WHO END TURN ERROR:",
          turnError
        );

        setError(
          turnError.message
        );

        return;
      }

      await loadGame();
    } catch (err) {
      console.error(
        "WHO END TURN ERROR:",
        err
      );

      setError(
        "Die Runde konnte nicht beendet werden."
      );
    } finally {
      setEndingTurn(false);
    }
  }

  async function submitGuess() {
    if (
      !game ||
      game.status !==
        "playing" ||
      !isMyTurn ||
      !selectedGuess ||
      guessing
    ) {
      return;
    }

    setGuessing(true);
    setWrongGuess(false);
    setError("");

    try {
      const {
        data,
        error: guessError,
      } = await supabase.rpc(
        "guess_who_character",
        {
          p_game_id:
            game.id,

          p_character_name:
            selectedGuess,
        }
      );

      if (guessError) {
        console.error(
          "WHO GUESS ERROR:",
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

      setGuessOpen(false);
      setSelectedGuess("");

      if (
        result.is_correct
      ) {
        setWrongGuess(false);

        await loadGame();
        return;
      }

      setWrongGuess(true);

      await loadGame();
    } catch (err) {
      console.error(
        "WHO GUESS ERROR:",
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
    "whoGameId"
  );

  router.push("/who/lobby");
}

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-slate-400">
          Spiel wird geladen...
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
      "finished" &&
    winner
  ) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">

          <div className="text-center">
            <div className="text-7xl">
              🏆
            </div>

            <p className="mt-5 text-sm font-black uppercase tracking-[0.25em] text-yellow-300">
              Wer bin ich? beendet
            </p>

            <h1 className="mt-3 text-3xl font-black">
              {winner.id ===
              playerId
                ? "Du bist Erster!"
                : `${winner.name} ist Erster!`}
            </h1>
          </div>

          <div className="mt-8">
            <p className="text-center text-sm font-black uppercase tracking-[0.2em] text-slate-500">
              Ergebnis
            </p>

            <div className="mt-4 space-y-4">
              {rankingPlayers.map(
                (
                  player,
                  index
                ) => {
                  const assignment =
                    assignments.find(
                      (entry) =>
                        entry.target_player_id ===
                        player.id
                    );

                  const character =
                    assignment
                      ?.character_name ??
                    "Unbekannt";

                  const place =
                    index + 1;

                  return (
                    <div
                      key={
                        player.id
                      }
                      className={`overflow-hidden rounded-3xl border ${
                        place === 1
                          ? "border-yellow-400/40 bg-yellow-400/10"
                          : place === 2
                            ? "border-slate-400/40 bg-slate-400/10"
                            : "border-orange-700/40 bg-orange-700/10"
                      }`}
                    >
                      <div className="flex items-center gap-4 p-4">
                        <div className="flex w-10 shrink-0 justify-center text-3xl">
                          {place === 1
                            ? "🥇"
                            : place === 2
                              ? "🥈"
                              : "🥉"}
                        </div>

                        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-slate-950">
                          {character !==
                          "Unbekannt" ? (
                            <CharacterImage
                              character={
                                character
                              }
                              category={
                                game.category
                              }
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center text-4xl">
                              ❓
                            </div>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                            {
                              player.name
                            }

                            {player.id ===
                            playerId
                              ? " (Du)"
                              : ""}
                          </p>

                          <p className="mt-2 text-xl font-black">
                            {
                              character
                            }
                          </p>

                          {place <=
                          finishedPlayerIds.length ? (
                            <p className="mt-2 text-sm font-bold text-green-300">
                              ✅ Richtig
                              erraten
                            </p>
                          ) : (
                            <p className="mt-2 text-sm font-bold text-slate-500">
                              ❌ Nicht
                              erraten
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button
              onClick={newGame}
              className="rounded-2xl bg-cyan-500 px-6 py-4 font-black text-slate-950 transition hover:bg-cyan-400"
            >
              🤔 Neues Spiel
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

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">

        <div className="text-center">
          <div className="text-6xl">
            🤔
          </div>

          <p className="mt-4 text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
            Wer bin ich?
          </p>

          <h1 className="mt-2 text-3xl font-black">
            Finde heraus, wer du bist
          </h1>
        </div>

        {/* STATUS */}
        <div className="mx-auto mt-8 max-w-md">
          {hasFinished ? (
            <div className="rounded-3xl border border-green-500/40 bg-green-500/10 p-5 text-center">
              <div className="text-5xl">
                ✅
              </div>

              <p className="mt-3 text-2xl font-black text-green-300">
                Du hast deine Figur
                erraten!
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Du bist aktuell auf
                Platz{" "}
                <span className="font-black text-white">
                  {finishPosition}
                </span>
                .
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Die anderen Spieler
                spielen noch weiter.
              </p>
            </div>
          ) : isMyTurn ? (
            <div className="rounded-3xl border border-green-500/40 bg-green-500/10 p-5 text-center">
              <div className="text-4xl">
                🎯
              </div>

              <p className="mt-3 text-2xl font-black text-green-300">
                Du bist dran!
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Stelle deine
                Ja/Nein-Fragen. Danach
                kannst du raten oder
                deine Runde beenden.
              </p>
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 text-center">
              <div className="text-4xl">
                ⏳
              </div>

              <p className="mt-3 text-xl font-black">
                {currentTurnPlayer
                  ? `${currentTurnPlayer.name} ist dran`
                  : "Warte auf den nächsten Spieler"}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Warte, bis du wieder
                dran bist.
              </p>
            </div>
          )}
        </div>

        {wrongGuess && (
          <div className="mx-auto mt-4 max-w-md rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-center">
            <p className="font-black text-red-300">
              ❌ Falsch geraten
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Deine Figur bleibt geheim.
              Deine Runde ist beendet.
            </p>
          </div>
        )}

        {/* EIGENE FIGUR */}
        <div className="mx-auto mt-8 max-w-md">
          <div className="overflow-hidden rounded-3xl border border-cyan-500/40 bg-cyan-500/10">
            <div className="flex aspect-square items-center justify-center bg-slate-950">
              <div className="text-center">
                <div className="text-8xl">
                  ❓
                </div>

                <p className="mt-4 text-5xl font-black text-cyan-300">
                  ???
                </p>
              </div>
            </div>

            <div className="p-6 text-center">
              <p className="text-sm font-black uppercase tracking-widest text-cyan-400">
                Deine Figur
              </p>

              <p className="mt-2 text-xl font-black">
                {currentPlayer?.name ??
                  "Du"}
              </p>

              <p className="mt-3 text-sm text-slate-400">
                {hasFinished
                  ? "Du hast deine Figur bereits richtig erraten."
                  : "Nur die anderen Spieler wissen, wer du bist."}
              </p>
            </div>
          </div>
        </div>

        {/* NOTIZEN */}
        <div className="mx-auto mt-6 max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-black">
                📝 Meine Infos
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Nur du kannst diese
                Notizen sehen.
              </p>
            </div>

            <span className="text-xs font-bold text-slate-500">
              {savingNotes
                ? "Speichert..."
                : notesSaved
                  ? "Gespeichert ✓"
                  : "Ungespeichert"}
            </span>
          </div>

          <textarea
            value={notes}
            onChange={(event) =>
              setNotes(
                event.target.value
              )
            }
            maxLength={2000}
            rows={8}
            placeholder={
              "Schreib hier deine Hinweise rein...\n\nz. B.\n- männlich\n- kein Bösewicht\n- kann fliegen"
            }
            className="mt-5 w-full resize-none rounded-2xl border border-slate-800 bg-slate-950 px-4 py-4 text-base outline-none transition focus:border-cyan-500"
          />

          <p className="mt-2 text-right text-xs text-slate-600">
            {notes.length}/2000
          </p>
        </div>

        {/* AKTIONEN */}
        <div className="mx-auto mt-6 max-w-md">
          {hasFinished ? (
            <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5 text-center">
              <p className="font-bold text-green-300">
                ✅ Du bist fertig
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Du wirst in der
                Zugreihenfolge ab jetzt
                übersprungen.
              </p>
            </div>
          ) : isMyTurn ? (
            <>
              {!guessOpen ? (
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setGuessOpen(
                        true
                      );

                      setWrongGuess(
                        false
                      );
                    }}
                    disabled={
                      endingTurn
                    }
                    className="w-full rounded-2xl bg-cyan-500 px-6 py-5 font-black text-slate-950 transition hover:bg-cyan-400 disabled:opacity-40"
                  >
                    🎯 Ich weiß, wer ich
                    bin
                  </button>

                  <button
                    onClick={endTurn}
                    disabled={
                      endingTurn ||
                      guessing
                    }
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-6 py-5 font-black transition hover:bg-slate-800 disabled:opacity-40"
                  >
                    {endingTurn
                      ? "Runde wird beendet..."
                      : "➡️ Runde beenden"}
                  </button>
                </div>
              ) : (
                <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-5">
                  <div className="text-center">
                    <div className="text-4xl">
                      🎯
                    </div>

                    <h2 className="mt-3 text-xl font-black">
                      Wer bist du?
                    </h2>

                    <p className="mt-2 text-sm text-slate-400">
                      Wenn dein Tipp
                      falsch ist, endet
                      deine Runde sofort.
                    </p>
                  </div>

                  <select
                    value={
                      selectedGuess
                    }
                    onChange={(
                      event
                    ) =>
                      setSelectedGuess(
                        event.target
                          .value
                      )
                    }
                    className="mt-5 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 text-base outline-none focus:border-cyan-500"
                  >
                    <option value="">
                      Figur auswählen...
                    </option>

                    {availableCharacters.map(
                      (
                        character
                      ) => (
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

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        setGuessOpen(
                          false
                        );

                        setSelectedGuess(
                          ""
                        );
                      }}
                      disabled={
                        guessing
                      }
                      className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-4 font-black transition hover:bg-slate-800"
                    >
                      Abbrechen
                    </button>

                    <button
                      onClick={
                        submitGuess
                      }
                      disabled={
                        !selectedGuess ||
                        guessing
                      }
                      className="rounded-2xl bg-cyan-500 px-4 py-4 font-black text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {guessing
                        ? "Prüft..."
                        : "Tipp abgeben"}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-2xl bg-slate-900 p-5 text-center text-sm text-slate-400">
              ⏳ Warte, bis du wieder
              dran bist.
            </div>
          )}
        </div>

        {/* ANDERE SPIELER */}
        <div className="mt-12">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
              Die anderen Spieler
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Ihre Figuren siehst du
            </h2>
          </div>

          <div
            className={`mt-6 grid gap-5 ${
              otherPlayers.length === 1
                ? "mx-auto max-w-md"
                : "md:grid-cols-2"
            }`}
          >
            {otherPlayers.map(
              (player) => {
                const assignment =
                  assignments.find(
                    (entry) =>
                      entry.target_player_id ===
                      player.id
                  );

                const character =
                  assignment
                    ?.character_name ??
                  null;

                const playerFinished =
                  finishedPlayerIds.includes(
                    player.id
                  );

                const playerPosition =
                  playerFinished
                    ? finishedPlayerIds.indexOf(
                        player.id
                      ) + 1
                    : null;

                return (
                  <div
                    key={
                      player.id
                    }
                    className={`overflow-hidden rounded-3xl border ${
                      playerFinished
                        ? "border-green-500/30 bg-green-500/5"
                        : player.id ===
                            currentTurnPlayerId
                          ? "border-green-500/40 bg-green-500/5"
                          : "border-slate-800 bg-slate-900"
                    }`}
                  >
                    <div className="aspect-square bg-slate-950">
                      {character ? (
                        <CharacterImage
                          character={
                            character
                          }
                          category={
                            game.category
                          }
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-6xl">
                          ❓
                        </div>
                      )}
                    </div>

                    <div className="p-5 text-center">
                      <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                        {
                          player.name
                        }
                      </p>

                      <p className="mt-2 text-2xl font-black">
                        {character ??
                          "Unbekannt"}
                      </p>

                      {playerFinished ? (
                        <p className="mt-3 font-bold text-green-300">
                          ✅ Richtig
                          erraten
                          {playerPosition
                            ? ` · Platz ${playerPosition}`
                            : ""}
                        </p>
                      ) : player.id ===
                        currentTurnPlayerId ? (
                        <p className="mt-3 font-bold text-green-300">
                          🎯 Ist gerade
                          dran
                        </p>
                      ) : null}

                      <p className="mt-3 text-sm text-slate-500">
                        Hilf{" "}
                        {player.name}{" "}
                        mit
                        Ja/Nein-Antworten,
                        ohne den Namen zu
                        verraten.
                      </p>
                    </div>
                  </div>
                );
              }
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