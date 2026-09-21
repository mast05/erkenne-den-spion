"use client";

import {
  useEffect,
  useMemo,
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
  is_host: boolean;
};

type DraftProgress = {
  game_id: string;
  player_id: string;
  current_round: number;
  completed: boolean;
  has_picked: boolean;
};

type DraftOption = {
  option_number: number;
  character_name: string;
};

type ArenaPick = {
  id: string;
  character_name: string;
  pick_number: number;
};

const categoryNames: Record<string, string> = {
  "star-wars": "⭐ Star Wars",
  marvel: "🦸 Marvel",
  "harry-potter": "🪄 Harry Potter",
  dc: "🦇 DC",
  "fluch-der-karibik":
    "🏴‍☠️ Fluch der Karibik",
  "game-of-thrones":
    "⚔️ Game of Thrones",
  "herr-der-ringe":
    "💍 Herr der Ringe",
  hobbit: "🏔️ Der Hobbit",
  "the-boys": "🩸 The Boys",
  "the-walking-dead":
    "🧟 The Walking Dead",
  jurassic:
    "🦖 Jurassic Park / World",
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
      onError={() => setImageError(true)}
      className="h-full w-full object-contain"
    />
  );
}

export default function ArenaDraftPage() {
  const router = useRouter();

  const [game, setGame] =
    useState<ArenaGame | null>(null);

  const [players, setPlayers] =
    useState<Player[]>([]);

  const [progress, setProgress] =
    useState<DraftProgress[]>([]);

  const [options, setOptions] =
    useState<DraftOption[]>([]);

  const [myPicks, setMyPicks] =
    useState<ArenaPick[]>([]);

  const [playerId, setPlayerId] =
    useState("");

  const [selectedCharacter, setSelectedCharacter] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] =
    useState("");

  const myProgress = useMemo(
    () =>
      progress.find(
        (entry) =>
          entry.player_id === playerId
      ),
    [progress, playerId]
  );

  const currentRound =
    myProgress?.current_round ?? 1;

  const hasPicked =
    myProgress?.has_picked ?? false;

  const draftCompleted =
    game?.status === "battle" ||
    myProgress?.completed === true;

  useEffect(() => {
    const roomId =
      sessionStorage.getItem("roomId");

    const currentPlayerId =
      sessionStorage.getItem("playerId");

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

    setPlayerId(currentPlayerId);

    let mounted = true;
    let loadingNow = false;

    async function loadDraft() {
      if (loadingNow) {
        return;
      }

      loadingNow = true;

      try {
        const {
          data: gameData,
          error: gameError,
        } = await supabase
          .from("arena_games")
          .select(
            "id, room_id, category, status"
          )
          .eq("id", arenaGameId)
          .maybeSingle();

        if (!mounted) return;

        if (gameError || !gameData) {
          console.error(
            "ARENA GAME LOAD ERROR:",
            gameError
          );

          setError(
            "Das Arena-Spiel konnte nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        const {
          data: playerData,
          error: playersError,
        } = await supabase
          .from("players")
          .select(
            "id, name, is_host"
          )
          .eq("room_id", roomId)
          .order("created_at", {
            ascending: true,
          });

        if (!mounted) return;

        if (playersError) {
          console.error(
            "ARENA PLAYERS LOAD ERROR:",
            playersError
          );

          setError(
            "Die Spieler konnten nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        const {
          data: progressData,
          error: progressError,
        } = await supabase
          .from("arena_draft_progress")
          .select(
            "game_id, player_id, current_round, completed, has_picked"
          )
          .eq(
            "game_id",
            arenaGameId
          );

        if (!mounted) return;

        if (progressError) {
          console.error(
            "ARENA PROGRESS LOAD ERROR:",
            progressError
          );

          setError(
            "Der Draft-Fortschritt konnte nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        const {
          data: pickData,
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
          .order("pick_number", {
            ascending: true,
          });

        if (!mounted) return;

        if (picksError) {
          console.error(
            "ARENA PICKS LOAD ERROR:",
            picksError
          );

          setError(
            "Dein Team konnte nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        let updatedProgress =
          (progressData ??
            []) as DraftProgress[];

        let ownProgress =
          updatedProgress.find(
            (entry) =>
              entry.player_id ===
              currentPlayerId
          );

        const categoryCharacters =
          dealCharacters
            .filter(
              (character) =>
                character.category ===
                gameData.category
            )
            .map(
              (character) =>
                character.name
            );

        let optionData:
          | DraftOption[]
          | null = null;

        if (
          gameData.status === "draft" &&
          !ownProgress
        ) {
          const {
            data,
            error:
              optionCreateError,
          } = await supabase.rpc(
            "ensure_arena_draft_options",
            {
              p_game_id:
                arenaGameId,
              p_player_id:
                currentPlayerId,
              p_round_number: 1,
              p_character_names:
                categoryCharacters,
            }
          );

          if (optionCreateError) {
            console.error(
              "ARENA OPTION CREATE ERROR:",
              optionCreateError
            );

            setError(
              optionCreateError.message
            );

            setLoading(false);
            return;
          }

          optionData =
            (data ??
              []) as DraftOption[];

          const {
            data: newProgress,
            error:
              newProgressError,
          } = await supabase
            .from(
              "arena_draft_progress"
            )
            .select(
              "game_id, player_id, current_round, completed, has_picked"
            )
            .eq(
              "game_id",
              arenaGameId
            );

          if (newProgressError) {
            console.error(
              newProgressError
            );
          } else {
            updatedProgress =
              (newProgress ??
                []) as DraftProgress[];

            ownProgress =
              updatedProgress.find(
                (entry) =>
                  entry.player_id ===
                  currentPlayerId
              );
          }
        }

        if (
          gameData.status === "draft" &&
          ownProgress &&
          !ownProgress.completed &&
          !ownProgress.has_picked &&
          ownProgress.current_round >=
            1 &&
          ownProgress.current_round <=
            5
        ) {
          const {
            data,
            error:
              optionLoadError,
          } = await supabase.rpc(
            "ensure_arena_draft_options",
            {
              p_game_id:
                arenaGameId,
              p_player_id:
                currentPlayerId,
              p_round_number:
                ownProgress.current_round,
              p_character_names:
                categoryCharacters,
            }
          );

          if (optionLoadError) {
            console.error(
              "ARENA OPTIONS ERROR:",
              optionLoadError
            );

            setError(
              optionLoadError.message
            );

            setLoading(false);
            return;
          }

          optionData =
            (data ??
              []) as DraftOption[];
        }

        if (
          ownProgress?.has_picked ||
          ownProgress?.completed ||
          gameData.status ===
            "battle"
        ) {
          optionData = [];
        }

        setGame(
          gameData as ArenaGame
        );

        setPlayers(
          (playerData ??
            []) as Player[]
        );

        setProgress(
          updatedProgress
        );

        setMyPicks(
          (pickData ??
            []) as ArenaPick[]
        );

        setOptions(
  optionData ?? []
);

setError("");
setLoading(false);
      } catch (err) {
        console.error(
          "ARENA DRAFT LOAD ERROR:",
          err
        );

        if (mounted) {
          setError(
            "Beim Laden des Drafts ist ein Fehler aufgetreten."
          );

          setLoading(false);
        }
      } finally {
        loadingNow = false;
      }
    }

    loadDraft();

    const interval =
      setInterval(
        loadDraft,
        1000
      );

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [router]);

  useEffect(() => {
  if (game?.status === "battle") {
    router.push("/arena/battle");
  }
}, [game?.status, router]);

  async function submitPick() {
    if (
      !game ||
      !playerId ||
      !selectedCharacter ||
      submitting ||
      hasPicked ||
      currentRound > 5
    ) {
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const {
        error: pickError,
      } = await supabase.rpc(
        "submit_arena_draft_pick",
        {
          p_game_id: game.id,
          p_player_id: playerId,
          p_round_number:
            currentRound,
          p_character_name:
            selectedCharacter,
        }
      );

      if (pickError) {
        console.error(
          "ARENA PICK ERROR:",
          pickError
        );

        setError(
          pickError.message
        );

        return;
      }

      setSelectedCharacter("");
      setOptions([]);

      const {
        data: pickData,
      } = await supabase
        .from("arena_picks")
        .select(
          "id, character_name, pick_number"
        )
        .eq(
          "game_id",
          game.id
        )
        .eq(
          "player_id",
          playerId
        )
        .order("pick_number", {
          ascending: true,
        });

      if (pickData) {
        setMyPicks(
          pickData as ArenaPick[]
        );
      }

      const {
        data: progressData,
      } = await supabase
        .from(
          "arena_draft_progress"
        )
        .select(
          "game_id, player_id, current_round, completed, has_picked"
        )
        .eq(
          "game_id",
          game.id
        );

      if (progressData) {
        setProgress(
          progressData as DraftProgress[]
        );
      }
    } catch (err) {
      console.error(
        "ARENA SUBMIT PICK ERROR:",
        err
      );

      setError(
        "Die Figur konnte nicht gewählt werden."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-slate-400">
          Geheimer Draft wird
          vorbereitet...
        </p>
      </main>
    );
  }

  if (error && !game) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <p className="text-center text-red-400">
          {error}
        </p>
      </main>
    );
  }

  if (!game) {
    return null;
  }

  if (draftCompleted) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
          <div className="text-center">
            <div className="text-7xl">
              ⚔️
            </div>

            <p className="mt-5 text-sm font-black uppercase tracking-[0.25em] text-orange-400">
              Character Arena
            </p>

            <h1 className="mt-3 text-3xl font-black">
              Draft abgeschlossen!
            </h1>

            <p className="mt-3 text-slate-400">
              Dein geheimes Team ist
              vollständig.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {myPicks.map(
              (pick, index) => (
                <div
                  key={pick.id}
                  className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-3"
                >
                  <div className="h-20 w-20 overflow-hidden rounded-xl bg-slate-950">
                    <CharacterImage
                      character={
                        pick.character_name
                      }
                      category={
                        game.category
                      }
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Pick {index + 1}
                    </p>

                    <p className="mt-1 font-black">
                      {
                        pick.character_name
                      }
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="mt-8 rounded-2xl border border-orange-500/30 bg-orange-500/10 p-5 text-center">
            <p className="font-bold text-orange-300">
              🔒 Die anderen Spieler
              kennen dein Team nicht.
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Als Nächstes bauen wir
              die Arena-Kämpfe.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-400">
            ⚔️ Character Arena
          </p>

          <h1 className="mt-3 text-4xl font-black">
            Geheimer Draft
          </h1>

          <div className="mt-4">
            <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-bold">
              {categoryNames[
                game.category
              ] || game.category}
            </span>
          </div>

          <p className="mt-5 text-slate-400">
            Nur du kannst deine Auswahl
            sehen.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-orange-500/30 bg-orange-500/10 p-6 text-center">
          <p className="text-sm font-black uppercase tracking-widest text-orange-300">
            Draft-Runde
          </p>

          <p className="mt-2 text-4xl font-black">
            {Math.min(
              currentRound,
              5
            )} / 5
          </p>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <p className="font-black">
            Spieler
          </p>

          <div className="mt-4 space-y-3">
            {players.map(
              (player) => {
                const playerProgress =
                  progress.find(
                    (entry) =>
                      entry.player_id ===
                      player.id
                  );

                let status =
                  "⏳ Bereitet sich vor";

                if (
                  playerProgress?.completed
                ) {
                  status =
                    "✅ Draft fertig";
                } else if (
                  playerProgress?.has_picked
                ) {
                  status =
                    "✅ Gewählt";
                } else if (
                  playerProgress
                ) {
                  status =
                    "⏳ Wählt noch";
                }

                return (
                  <div
                    key={player.id}
                    className="flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-3"
                  >
                    <span className="font-bold">
                      {player.name}
                      {player.id ===
                      playerId
                        ? " (Du)"
                        : ""}
                    </span>

                    <span className="text-sm text-slate-400">
                      {status}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {hasPicked ? (
          <div className="mt-8 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-7 text-center">
            <div className="text-5xl">
              ✅
            </div>

            <h2 className="mt-4 text-2xl font-black">
              Figur gewählt
            </h2>

            <p className="mt-3 text-slate-400">
              Warte, bis alle anderen
              Spieler ebenfalls gewählt
              haben.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Danach startet automatisch
              die nächste Draft-Runde.
            </p>
          </div>
        ) : (
          <>
            <div className="mt-10">
              <h2 className="text-2xl font-black">
                Wähle eine Figur
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Die anderen 3 Figuren
                werden danach verworfen.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
              {options.map(
                (option) => {
                  const selected =
                    selectedCharacter ===
                    option.character_name;

                  return (
                    <button
                      key={
                        option.option_number
                      }
                      onClick={() =>
                        setSelectedCharacter(
                          option.character_name
                        )
                      }
                      disabled={
                        submitting
                      }
                      className={`overflow-hidden rounded-3xl border text-left transition ${
                        selected
                          ? "scale-[1.02] border-orange-500 bg-orange-500/15 ring-2 ring-orange-500/30"
                          : "border-slate-800 bg-slate-900 hover:border-slate-600"
                      }`}
                    >
                      <div className="aspect-square bg-slate-950">
                        <CharacterImage
                          character={
                            option.character_name
                          }
                          category={
                            game.category
                          }
                        />
                      </div>

                      <div className="p-4 text-center">
                        <p className="font-black">
                          {
                            option.character_name
                          }
                        </p>

                        {selected && (
                          <p className="mt-2 text-sm font-bold text-orange-400">
                            ✅ Ausgewählt
                          </p>
                        )}
                      </div>
                    </button>
                  );
                }
              )}
            </div>

            <button
              onClick={submitPick}
              disabled={
                !selectedCharacter ||
                submitting
              }
              className="mt-8 w-full rounded-2xl bg-orange-500 px-6 py-5 font-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {submitting
                ? "Wird gewählt..."
                : selectedCharacter
                  ? `${selectedCharacter} wählen`
                  : "Figur auswählen"}
            </button>
          </>
        )}

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-black">
              🔒 Dein Team
            </h2>

            <span className="text-sm font-bold text-slate-500">
              {myPicks.length}/5
            </span>
          </div>

          {myPicks.length === 0 ? (
            <p className="mt-4 text-sm text-slate-500">
              Noch keine Figur gewählt.
            </p>
          ) : (
            <div className="mt-4 space-y-3">
              {myPicks.map(
                (pick) => (
                  <div
                    key={pick.id}
                    className="flex items-center gap-3 rounded-2xl bg-slate-950 p-3"
                  >
                    <div className="h-16 w-16 overflow-hidden rounded-xl">
                      <CharacterImage
                        character={
                          pick.character_name
                        }
                        category={
                          game.category
                        }
                      />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-slate-500">
                        RUNDE{" "}
                        {
                          pick.pick_number
                        }
                      </p>

                      <p className="font-black">
                        {
                          pick.character_name
                        }
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {error && (
          <p className="mt-5 text-center text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}