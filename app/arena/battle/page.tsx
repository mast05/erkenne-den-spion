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

type ArenaGame = {
  id: string;
  room_id: string;
  category: string;
  status: string;
};

type Player = {
  id: string;
  name: string;
};

type BattleRound = {
  id: string;
  round_number: number;
  mode: string;
  status: string;
};

type Pick = {
  id: string;
  character_name: string;
  pick_number: number;
};

type BattlePlay = {
  id: string;
  player_id: string;
  character_name: string;
  round_number: number;
};

type UsedPlay = {
  character_name: string;
};

type ArenaScore = {
  player_id: string;
  points: number;
};

const modeInfo: Record<
  string,
  {
    label: string;
    emoji: string;
  }
> = {
  kills: {
    label: "Kills",
    emoji: "☠️",
  },
  strength: {
    label: "Stärke",
    emoji: "💪",
  },
  intelligence: {
    label: "Intelligenz",
    emoji: "🧠",
  },
  fame: {
    label: "Bekanntheit",
    emoji: "🌟",
  },
  attractiveness: {
    label: "Attraktivität",
    emoji: "😍",
  },
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
      <div className="flex h-full w-full items-center justify-center bg-slate-950 text-5xl">
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

function getCharacterValue(
  characterName: string,
  mode: string,
  category: string
) {
  const character =
    dealCharacters.find(
      (entry) =>
        entry.name ===
          characterName &&
        entry.category === category
    );

  if (!character) {
    return null;
  }

  switch (mode) {
    case "kills":
      return character.kills;

    case "strength":
      return character.strength;

    case "intelligence":
      return character.intelligence;

    case "fame":
      return character.fame;

    case "attractiveness":
      return character.attractiveness;

    default:
      return null;
  }
}

export default function ArenaBattlePage() {
  const router = useRouter();

  const [game, setGame] =
    useState<ArenaGame | null>(null);

  const [round, setRound] =
    useState<BattleRound | null>(null);

  const [players, setPlayers] =
    useState<Player[]>([]);

  const [myPicks, setMyPicks] =
    useState<Pick[]>([]);

  const [plays, setPlays] =
    useState<BattlePlay[]>([]);

  const [scores, setScores] =
    useState<ArenaScore[]>([]);

  const [
    usedCharacters,
    setUsedCharacters,
  ] = useState<string[]>([]);

  const [playerId, setPlayerId] =
    useState("");

  const [
    selectedCharacter,
    setSelectedCharacter,
  ] = useState("");

  const [loading, setLoading] =
    useState(true);

  const [
    submitting,
    setSubmitting,
  ] = useState(false);

  const [
    advancing,
    setAdvancing,
  ] = useState(false);

  const [error, setError] =
    useState("");

  const mountedRef =
    useRef(true);

  const requestIdRef =
    useRef(0);

  const myPlay = useMemo(
    () =>
      plays.find(
        (play) =>
          play.player_id ===
          playerId
      ),
    [plays, playerId]
  );

  const revealed =
    round?.status === "revealed" ||
    round?.status === "finished";

  const loadBattle =
    useCallback(async () => {
      const requestId =
        ++requestIdRef.current;

      const roomId =
        sessionStorage.getItem(
          "roomId"
        );

      const currentPlayerId =
        sessionStorage.getItem(
          "playerId"
        );

      const arenaGameId =
        sessionStorage.getItem(
          "arenaGameId"
        );

      if (
        !roomId ||
        !currentPlayerId ||
        !arenaGameId
      ) {
        router.push("/arena");
        return;
      }

      try {
        const {
          data: gameData,
          error: gameError,
        } = await supabase
          .from("arena_games")
          .select(
            "id, room_id, category, status"
          )
          .eq(
            "id",
            arenaGameId
          )
          .maybeSingle();

        if (
          !mountedRef.current ||
          requestId !==
            requestIdRef.current
        ) {
          return;
        }

        if (
          gameError ||
          !gameData
        ) {
          console.error(
            "ARENA GAME ERROR:",
            gameError
          );

          setError(
            "Arena-Spiel konnte nicht geladen werden."
          );

          setLoading(false);
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

        if (
          !mountedRef.current ||
          requestId !==
            requestIdRef.current
        ) {
          return;
        }

        if (playerError) {
          console.error(
            "PLAYERS ERROR:",
            playerError
          );

          setError(
            "Spieler konnten nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        const {
          data: roundData,
          error: roundError,
        } = await supabase.rpc(
          "ensure_arena_battle_round",
          {
            p_game_id:
              arenaGameId,
          }
        );

        if (
          !mountedRef.current ||
          requestId !==
            requestIdRef.current
        ) {
          return;
        }

        if (roundError) {
          console.error(
            "BATTLE ROUND ERROR:",
            roundError
          );

          setError(
            roundError.message
          );

          setLoading(false);
          return;
        }

        const currentRound =
          roundData?.[0] as
            | BattleRound
            | undefined;

        if (!currentRound) {
          setError(
            "Kampfrunde konnte nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        const {
          data: picksData,
          error: picksError,
        } = await supabase
          .from("arena_picks")
          .select(
            "id, character_name, pick_number"
          )
          .eq(
            "game_id",
            arenaGameId
          )
          .eq(
            "player_id",
            currentPlayerId
          )
          .order(
            "pick_number",
            {
              ascending: true,
            }
          );

        if (
          !mountedRef.current ||
          requestId !==
            requestIdRef.current
        ) {
          return;
        }

        if (picksError) {
          console.error(
            "PICKS ERROR:",
            picksError
          );

          setError(
            "Dein Team konnte nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        const {
          data: playsData,
          error: playsError,
        } = await supabase
          .from(
            "arena_battle_plays"
          )
          .select(
            "id, player_id, character_name, round_number"
          )
          .eq(
            "game_id",
            arenaGameId
          )
          .eq(
            "round_number",
            currentRound.round_number
          );

        if (
          !mountedRef.current ||
          requestId !==
            requestIdRef.current
        ) {
          return;
        }

        if (playsError) {
          console.error(
            "BATTLE PLAYS ERROR:",
            playsError
          );

          setError(
            "Kampfauswahl konnte nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        const roundPlays =
          (playsData ??
            []) as BattlePlay[];

        /*
         * Sobald die Runde revealed ist,
         * wird automatisch gewertet.
         */
        if (
          currentRound.status ===
            "revealed" ||
          currentRound.status ===
            "finished"
        ) {
          if (
            roundPlays.length ===
            (playerData ?? []).length
          ) {
            const playerIds =
              roundPlays.map(
                (play) =>
                  play.player_id
              );

            const values =
              roundPlays.map(
                (play) =>
                  getCharacterValue(
                    play.character_name,
                    currentRound.mode,
                    gameData.category
                  )
              );

            const allValuesExist =
              values.every(
                (value) =>
                  value !== null &&
                  value !== undefined
              );

            if (allValuesExist) {
              const {
                error:
                  scoreError,
              } =
                await supabase.rpc(
                  "score_arena_battle_round",
                  {
                    p_game_id:
                      arenaGameId,

                    p_round_number:
                      currentRound.round_number,

                    p_player_ids:
                      playerIds,

                    p_values:
                      values as number[],
                  }
                );

              if (scoreError) {
                console.error(
                  "ARENA SCORE ERROR:",
                  scoreError
                );
              }
            }
          }
        }

        const {
          data: scoreData,
          error:
            scoreLoadError,
        } = await supabase
          .from("arena_scores")
          .select(
            "player_id, points"
          )
          .eq(
            "game_id",
            arenaGameId
          );

        if (
          !mountedRef.current ||
          requestId !==
            requestIdRef.current
        ) {
          return;
        }

        if (scoreLoadError) {
          console.error(
            "SCORE LOAD ERROR:",
            scoreLoadError
          );
        }

        const {
          data: usedData,
          error: usedError,
        } = await supabase
          .from(
            "arena_battle_plays"
          )
          .select(
            "character_name"
          )
          .eq(
            "game_id",
            arenaGameId
          )
          .eq(
            "player_id",
            currentPlayerId
          );

        if (
          !mountedRef.current ||
          requestId !==
            requestIdRef.current
        ) {
          return;
        }

        if (usedError) {
          console.error(
            "USED CHARACTERS ERROR:",
            usedError
          );
        }

        setPlayerId(
          currentPlayerId
        );

        setGame(
          gameData as ArenaGame
        );

        setPlayers(
          (playerData ??
            []) as Player[]
        );

        setRound(
          currentRound
        );

        setMyPicks(
          (picksData ??
            []) as Pick[]
        );

        setPlays(
          roundPlays
        );

        setScores(
          (scoreData ??
            []) as ArenaScore[]
        );

        setUsedCharacters(
          (
            (usedData ??
              []) as UsedPlay[]
          ).map(
            (entry) =>
              entry.character_name
          )
        );

        setError("");
        setLoading(false);
      } catch (err) {
        console.error(
          "LOAD BATTLE ERROR:",
          err
        );

        if (
          mountedRef.current &&
          requestId ===
            requestIdRef.current
        ) {
          setError(
            "Beim Laden des Kampfes ist ein Fehler aufgetreten."
          );

          setLoading(false);
        }
      }
    }, [router]);

  /*
   * Initial laden + Supabase Realtime.
   */
  useEffect(() => {
    mountedRef.current = true;

    const arenaGameId =
      sessionStorage.getItem(
        "arenaGameId"
      );

    const currentPlayerId =
      sessionStorage.getItem(
        "playerId"
      );

    if (
      !arenaGameId ||
      !currentPlayerId
    ) {
      router.push("/arena");
      return;
    }

    setPlayerId(
      currentPlayerId
    );

    void loadBattle();

    const channel =
      supabase
        .channel(
          `arena-battle-${arenaGameId}-${currentPlayerId}`
        )

        /*
         * Jemand spielt eine Figur.
         */
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table:
              "arena_battle_plays",
            filter: `game_id=eq.${arenaGameId}`,
          },
          () => {
            void loadBattle();
          }
        )

        /*
         * Runde wird revealed,
         * finished oder neue Runde
         * wird erstellt.
         */
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table:
              "arena_battle_rounds",
            filter: `game_id=eq.${arenaGameId}`,
          },
          () => {
            setSelectedCharacter(
              ""
            );

            void loadBattle();
          }
        )

        /*
         * Punktestand ändert sich.
         */
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table:
              "arena_scores",
            filter: `game_id=eq.${arenaGameId}`,
          },
          () => {
            void loadBattle();
          }
        )

        .subscribe((status) => {
          if (
            status ===
            "SUBSCRIBED"
          ) {
            void loadBattle();
          }
        });

    return () => {
      mountedRef.current =
        false;

      void supabase.removeChannel(
        channel
      );
    };
  }, [
    loadBattle,
    router,
  ]);

  async function submitCharacter() {
    if (
      !game ||
      !round ||
      !playerId ||
      !selectedCharacter ||
      submitting ||
      myPlay ||
      usedCharacters.includes(
        selectedCharacter
      )
    ) {
      return;
    }

    const characterToPlay =
      selectedCharacter;

    setSubmitting(true);
    setError("");

    try {
      const {
        error: submitError,
      } = await supabase.rpc(
        "submit_arena_battle_play",
        {
          p_game_id:
            game.id,

          p_player_id:
            playerId,

          p_round_number:
            round.round_number,

          p_character_name:
            characterToPlay,
        }
      );

      if (submitError) {
        console.error(
          "SUBMIT BATTLE ERROR:",
          submitError
        );

        setError(
          submitError.message
        );

        return;
      }

      /*
       * Eigene Auswahl sofort lokal
       * anzeigen, ohne auf Realtime
       * warten zu müssen.
       */
      setUsedCharacters(
        (current) =>
          current.includes(
            characterToPlay
          )
            ? current
            : [
                ...current,
                characterToPlay,
              ]
      );

      setPlays(
        (current) => {
          const alreadyExists =
            current.some(
              (play) =>
                play.player_id ===
                playerId
            );

          if (
            alreadyExists
          ) {
            return current;
          }

          return [
            ...current,
            {
              id: `local-${round.round_number}-${playerId}`,

              player_id:
                playerId,

              character_name:
                characterToPlay,

              round_number:
                round.round_number,
            },
          ];
        }
      );

      setSelectedCharacter(
        ""
      );

      /*
       * Zusätzlich direkt Serverzustand
       * laden. Realtime ist danach die
       * Synchronisation für alle anderen.
       */
      void loadBattle();
    } catch (err) {
      console.error(
        "SUBMIT BATTLE ERROR:",
        err
      );

      setError(
        "Die Figur konnte nicht eingesetzt werden."
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function nextRound() {
    if (
      !game ||
      !round ||
      round.status !==
        "revealed" ||
      advancing
    ) {
      return;
    }

    setAdvancing(true);
    setError("");

    try {
      const {
        data,
        error:
          nextRoundError,
      } = await supabase.rpc(
        "advance_arena_battle_round",
        {
          p_game_id:
            game.id,

          p_round_number:
            round.round_number,
        }
      );

      if (nextRoundError) {
        console.error(
          "NEXT ROUND ERROR:",
          nextRoundError
        );

        setError(
          nextRoundError.message
        );

        return;
      }

      const next =
        data?.[0] as
          | BattleRound
          | undefined;

      /*
       * Der Spieler, der klickt,
       * wechselt sofort.
       */
      if (next) {
        setRound(next);

        setPlays([]);

        setSelectedCharacter(
          ""
        );
      }

      /*
       * Die anderen Geräte wechseln
       * durch das Realtime-Event.
       */
      void loadBattle();
    } catch (err) {
      console.error(
        "NEXT ROUND ERROR:",
        err
      );

      setError(
        "Die nächste Runde konnte nicht gestartet werden."
      );
    } finally {
      setAdvancing(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-slate-400">
          Arena wird vorbereitet...
        </p>
      </main>
    );
  }

  if (!game || !round) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <p className="text-center text-red-400">
          {error ||
            "Arena konnte nicht geladen werden."}
        </p>
      </main>
    );
  }

  const info =
    modeInfo[
      round.mode
    ] ?? {
      label: round.mode,
      emoji: "⚔️",
    };

  const revealedPlays =
    plays
      .map((play) => ({
        ...play,

        player:
          players.find(
            (player) =>
              player.id ===
              play.player_id
          ) ?? null,

        value:
          getCharacterValue(
            play.character_name,
            round.mode,
            game.category
          ),
      }))
      .sort(
        (a, b) =>
          (b.value ?? -1) -
          (a.value ?? -1)
      );

      const highestValue =
  revealedPlays.length > 0
    ? revealedPlays[0].value
    : null;

  const winners =
  highestValue === null
    ? []
    : revealedPlays.filter(
        (play) =>
          play.value ===
          highestValue
      );

  const finalRanking = players
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

const finalTopScore =
  finalRanking.length > 0
    ? finalRanking[0].points
    : 0;

const finalWinners =
  finalRanking.filter(
    (player) =>
      player.points ===
      finalTopScore
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-400">
            ⚔️ Character Arena
          </p>

          <h1 className="mt-3 text-4xl font-black">
            Runde{" "}
            {round.round_number}{" "}
            / 5
          </h1>

          <div className="mt-6 inline-block rounded-3xl border border-orange-500/30 bg-orange-500/10 px-8 py-5">
            <div className="text-5xl">
              {info.emoji}
            </div>

            <p className="mt-2 text-2xl font-black">
              {info.label}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Höchster Wert
              gewinnt
            </p>
          </div>

          <div className="mx-auto mt-6 max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm font-black uppercase tracking-widest text-slate-500">
              Punktestand
            </p>

            <div className="mt-4 space-y-3">
              {players.map(
                (player) => {
                  const score =
                    scores.find(
                      (entry) =>
                        entry.player_id ===
                        player.id
                    )?.points ??
                    0;

                  return (
                    <div
                      key={
                        player.id
                      }
                      className="flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-3"
                    >
                      <span className="font-bold">
                        {
                          player.name
                        }

                        {player.id ===
                        playerId
                          ? " (Du)"
                          : ""}
                      </span>

                      <span className="text-xl font-black text-orange-400">
                        {score} P
                      </span>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {!revealed &&
          !myPlay && (
            <>
              <div className="mt-10">
                <h2 className="text-2xl font-black">
                  Wähle deine Figur
                </h2>

                <p className="mt-2 text-slate-400">
                  Deine Auswahl
                  bleibt geheim, bis
                  alle gewählt haben.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-5">
                {myPicks.map(
                  (pick) => {
                    const selected =
                      selectedCharacter ===
                      pick.character_name;

                    const used =
                      usedCharacters.includes(
                        pick.character_name
                      );

                    return (
                      <button
                        key={
                          pick.id
                        }
                        onClick={() => {
                          if (
                            !used
                          ) {
                            setSelectedCharacter(
                              pick.character_name
                            );
                          }
                        }}
                        disabled={
                          submitting ||
                          used
                        }
                        className={`overflow-hidden rounded-3xl border transition ${
                          used
                            ? "cursor-not-allowed border-slate-800 bg-slate-900 opacity-30"
                            : selected
                              ? "scale-[1.02] border-orange-500 bg-orange-500/15 ring-2 ring-orange-500/30"
                              : "border-slate-800 bg-slate-900 hover:border-slate-600"
                        }`}
                      >
                        <div className="relative aspect-square bg-slate-950">
                          <CharacterImage
                            character={
                              pick.character_name
                            }
                            category={
                              game.category
                            }
                          />

                          {used && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                              <span className="rounded-full bg-slate-950 px-3 py-2 text-xs font-black">
                                VERBRAUCHT
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="p-3">
                          <p className="font-black">
                            {
                              pick.character_name
                            }
                          </p>

                          {selected &&
                            !used && (
                              <p className="mt-2 text-sm font-bold text-orange-400">
                                ✅ Ausgewählt
                              </p>
                            )}

                          {used && (
                            <p className="mt-2 text-sm font-bold text-slate-500">
                              ❌ Bereits
                              eingesetzt
                            </p>
                          )}
                        </div>
                      </button>
                    );
                  }
                )}
              </div>

              <button
                onClick={
                  submitCharacter
                }
                disabled={
                  !selectedCharacter ||
                  submitting
                }
                className="mt-8 w-full rounded-2xl bg-orange-500 px-6 py-5 font-black hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {submitting
                  ? "Wird eingesetzt..."
                  : selectedCharacter
                    ? `${selectedCharacter} einsetzen`
                    : "Figur auswählen"}
              </button>
            </>
          )}

        {!revealed &&
          myPlay && (
            <div className="mt-10 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
              <div className="text-6xl">
                🔒
              </div>

              <h2 className="mt-4 text-2xl font-black">
                Figur gewählt
              </h2>

              <p className="mt-3 text-slate-400">
                Deine Figur ist
                geheim gespeichert.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Warte auf die
                anderen Spieler...
              </p>
            </div>
          )}

        {revealed && (
          <>
            <div className="mt-10 text-center">
              <div className="text-6xl">
                🔥
              </div>

              <h2 className="mt-3 text-3xl font-black">
                Aufgedeckt!
              </h2>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {revealedPlays.map(
                (play) => {
                  const isWinner =
                    highestValue !==
                      null &&
                    play.value ===
                      highestValue;

                  return (
                    <div
                      key={
                        play.id
                      }
                      className={`overflow-hidden rounded-3xl border ${
                        isWinner
                          ? "border-yellow-400 bg-yellow-400/10"
                          : "border-slate-800 bg-slate-900"
                      }`}
                    >
                      <div className="aspect-square bg-slate-950">
                        <CharacterImage
                          character={
                            play.character_name
                          }
                          category={
                            game.category
                          }
                        />
                      </div>

                      <div className="p-5 text-center">
                        <p className="text-sm font-bold text-slate-400">
                          {play
                            .player
                            ?.name ??
                            "Spieler"}
                        </p>

                        <p className="mt-1 text-xl font-black">
                          {
                            play.character_name
                          }
                        </p>

                        <div className="mt-4 rounded-2xl bg-slate-950 px-4 py-3">
                          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                            {
                              info.label
                            }
                          </p>

                          <p className="mt-1 text-3xl font-black text-orange-400">
                            {play.value ??
                              "—"}
                          </p>
                        </div>

                        {isWinner && (
                          <p className="mt-4 font-black text-yellow-300">
                            🏆 Rundensieger
                          </p>
                        )}
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            {winners.length >
              1 && (
              <p className="mt-6 text-center font-bold text-yellow-300">
                🤝 Gleichstand
              </p>
            )}

            {round.round_number <
              5 && (
              <button
                onClick={
                  nextRound
                }
                disabled={
                  advancing
                }
                className="mt-8 w-full rounded-2xl bg-orange-500 px-6 py-5 font-black hover:bg-orange-400 disabled:opacity-50"
              >
                {advancing
                  ? "Nächste Runde wird gestartet..."
                  : "Nächste Runde →"}
              </button>
            )}

            {round.round_number ===
  5 && (
  <div className="mt-10 rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-6 md:p-8">
    <div className="text-center">
      <div className="text-6xl">
        🏆
      </div>

      <p className="mt-4 text-sm font-black uppercase tracking-[0.25em] text-yellow-300">
        Character Arena beendet
      </p>

      {finalWinners.length ===
      1 ? (
        <h2 className="mt-3 text-3xl font-black">
          👑{" "}
          {
            finalWinners[0]
              .name
          }{" "}
          gewinnt!
        </h2>
      ) : (
        <h2 className="mt-3 text-3xl font-black">
          🤝 Gleichstand!
        </h2>
      )}

      {finalWinners.length >
        1 && (
        <p className="mt-3 font-bold text-yellow-200">
          {finalWinners
            .map(
              (player) =>
                player.name
            )
            .join(" & ")}{" "}
          teilen sich den Sieg.
        </p>
      )}
    </div>

    <div className="mx-auto mt-8 max-w-md space-y-3">
      {finalRanking.map(
        (player) => {
          const placement =
            finalRanking.findIndex(
              (entry) =>
                entry.points ===
                player.points
            ) + 1;

          const isChampion =
            player.points ===
            finalTopScore;

          return (
            <div
              key={player.id}
              className={`flex items-center justify-between rounded-2xl border px-5 py-4 ${
                isChampion
                  ? "border-yellow-400/50 bg-yellow-400/10"
                  : "border-slate-800 bg-slate-950"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-black">
                  {placement ===
                  1
                    ? "🥇"
                    : placement ===
                        2
                      ? "🥈"
                      : placement ===
                          3
                        ? "🥉"
                        : `${placement}.`}
                </span>

                <div className="text-left">
                  <p className="font-black">
                    {
                      player.name
                    }

                    {player.id ===
                    playerId
                      ? " (Du)"
                      : ""}
                  </p>

                  {isChampion && (
                    <p className="text-xs font-bold uppercase tracking-widest text-yellow-300">
                      Sieger
                    </p>
                  )}
                </div>
              </div>

              <span className="text-2xl font-black text-orange-400">
                {
                  player.points
                }{" "}
                P
              </span>
            </div>
          );
        }
      )}
    </div>

    <div className="mx-auto mt-8 grid max-w-md gap-3 sm:grid-cols-2">
      <button
  onClick={() => {
    sessionStorage.removeItem("arenaGameId");
    router.push("/arena");
  }}
  className="rounded-2xl bg-orange-500 px-6 py-4 font-black hover:bg-orange-400"
>
  ⚔️ Neues Spiel
</button>

      <button
        onClick={() =>
          router.push("/")
        }
        className="rounded-2xl border border-slate-700 bg-slate-900 px-6 py-4 font-black hover:bg-slate-800"
      >
        🏠 Startseite
      </button>
    </div>
  </div>
)}
          </>
        )}

        {error && (
          <p className="mt-6 text-center text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}