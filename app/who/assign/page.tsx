"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { dealCharacters } from "../../lib/dealData";

type WhoGame = {
  id: string;
  category: string;
  status: string;
};

type Assignment = {
  assignment_id: string;
  assigner_player_id: string;
  target_player_id: string;
  target_player_name: string;
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

export default function WhoAssignPage() {
  const router = useRouter();

  const [game, setGame] =
    useState<WhoGame | null>(null);

  const [assignment, setAssignment] =
    useState<Assignment | null>(null);

  const [
    selectedCharacter,
    setSelectedCharacter,
  ] = useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] =
    useState("");

  const characters = useMemo(() => {
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

  const loadAssign =
    useCallback(async () => {
      const roomId =
        sessionStorage.getItem(
          "roomId"
        );

      const playerId =
        sessionStorage.getItem(
          "playerId"
        );

      const whoGameId =
        sessionStorage.getItem(
          "whoGameId"
        );

      if (
        !roomId ||
        !playerId ||
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
            "id, category, status"
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

        const currentGame =
          gameData as WhoGame;

        setGame(currentGame);

        if (
          currentGame.status ===
          "playing"
        ) {
          router.push("/who/game");
          return;
        }

        if (
          currentGame.status ===
          "finished"
        ) {
          router.push("/who/game");
          return;
        }

        const {
          data: assignmentData,
          error: assignmentError,
        } = await supabase.rpc(
          "ensure_who_assignments",
          {
            p_game_id:
              whoGameId,
          }
        );

        if (assignmentError) {
          console.error(
            "WHO ASSIGNMENT LOAD ERROR:",
            assignmentError
          );

          setError(
            assignmentError.message
          );

          setLoading(false);
          return;
        }

        const ownAssignment =
          assignmentData?.[0] as
            | Assignment
            | undefined;

        if (!ownAssignment) {
          setError(
            "Deine Figurenvergabe konnte nicht gefunden werden."
          );

          setLoading(false);
          return;
        }

        /*
         * Prüfen, ob wir bereits
         * eine Figur vergeben haben.
         */
        const {
          data: ownRow,
          error: ownRowError,
        } = await supabase
          .from(
            "who_assignments"
          )
          .select(
            "character_name"
          )
          .eq(
            "game_id",
            whoGameId
          )
          .eq(
            "assigner_player_id",
            playerId
          )
          .maybeSingle();

        if (ownRowError) {
          console.error(
            "WHO OWN ASSIGNMENT ERROR:",
            ownRowError
          );
        }

        setAssignment(
          ownAssignment
        );

        setSubmitted(
          Boolean(
            ownRow?.character_name
          )
        );

        setError("");
        setLoading(false);
      } catch (err) {
        console.error(
          "WHO ASSIGN LOAD ERROR:",
          err
        );

        setError(
          "Beim Laden ist ein Fehler aufgetreten."
        );

        setLoading(false);
      }
    }, [router]);

  useEffect(() => {
    const whoGameId =
      sessionStorage.getItem(
        "whoGameId"
      );

    const playerId =
      sessionStorage.getItem(
        "playerId"
      );

    if (
      !whoGameId ||
      !playerId
    ) {
      router.push("/who");
      return;
    }

    void loadAssign();

    const channel = supabase
      .channel(
        `who-assign-${whoGameId}-${playerId}`
      )

      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "who_games",
          filter: `id=eq.${whoGameId}`,
        },
        (payload) => {
          const next =
            payload.new as {
              status?: string;
            };

          if (
            next.status ===
              "playing" ||
            next.status ===
              "finished"
          ) {
            router.push(
              "/who/game"
            );

            return;
          }

          void loadAssign();
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
          void loadAssign();
        }
      )

      .subscribe();

    /*
     * Kleiner Fallback zusätzlich
     * zu Realtime.
     */
    const interval =
      window.setInterval(
        () => {
          void loadAssign();
        },
        2000
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
    loadAssign,
    router,
  ]);

  async function submitCharacter() {
    if (
      !game ||
      !assignment ||
      !selectedCharacter ||
      submitted ||
      submitting
    ) {
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const {
        data,
        error: submitError,
      } = await supabase.rpc(
        "submit_who_character",
        {
          p_game_id:
            game.id,

          p_character_name:
            selectedCharacter,
        }
      );

      if (submitError) {
        console.error(
          "WHO CHARACTER SUBMIT ERROR:",
          submitError
        );

        setError(
          submitError.message
        );

        return;
      }

      const status =
        data?.[0]
          ?.game_status;

      setSubmitted(true);
      setSelectedCharacter("");

      if (
        status === "playing"
      ) {
        router.push("/who/game");
        return;
      }

      void loadAssign();
    } catch (err) {
      console.error(
        "WHO CHARACTER SUBMIT ERROR:",
        err
      );

      setError(
        "Die Figur konnte nicht gespeichert werden."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-slate-400">
          Figurenvergabe wird
          vorbereitet...
        </p>
      </main>
    );
  }

  if (!game || !assignment) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <p className="text-center text-red-400">
          {error ||
            "Die Figurenvergabe konnte nicht geladen werden."}
        </p>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-8 text-center">
            <div className="text-7xl">
              🔒
            </div>

            <p className="mt-5 text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
              Figur vergeben
            </p>

            <h1 className="mt-3 text-3xl font-black">
              Deine Auswahl ist
              gespeichert
            </h1>

            <p className="mt-4 text-slate-400">
              Deine Figur für{" "}
              <span className="font-bold text-white">
                {
                  assignment.target_player_name
                }
              </span>{" "}
              bleibt geheim.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-950 p-5">
              <div className="text-4xl">
                ⏳
              </div>

              <p className="mt-3 font-bold">
                Warte auf die anderen
                Spieler...
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Sobald alle eine Figur
                vergeben haben, startet
                das Spiel automatisch.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="text-center">
          <div className="text-7xl">
            🎭
          </div>

          <p className="mt-5 text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
            Wer bin ich?
          </p>

          <h1 className="mt-2 text-3xl font-black">
            Du wählst für{" "}
            <span className="text-cyan-300">
              {
                assignment.target_player_name
              }
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-slate-400">
            Wähle heimlich eine Figur
            aus. Der Spieler selbst
            erfährt nicht, welche Figur
            du ausgewählt hast.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {characters.map(
            (character) => {
              const selected =
                selectedCharacter ===
                character;

              return (
                <button
                  key={character}
                  onClick={() =>
                    setSelectedCharacter(
                      character
                    )
                  }
                  disabled={
                    submitting
                  }
                  className={`overflow-hidden rounded-3xl border transition ${
                    selected
                      ? "scale-[1.02] border-cyan-400 bg-cyan-500/15 ring-2 ring-cyan-500/30"
                      : "border-slate-800 bg-slate-900 hover:border-slate-600"
                  }`}
                >
                  <div className="aspect-square bg-slate-950">
                    <CharacterImage
                      character={
                        character
                      }
                      category={
                        game.category
                      }
                    />
                  </div>

                  <div className="p-3">
                    <p className="font-black">
                      {character}
                    </p>

                    {selected && (
                      <p className="mt-2 text-sm font-bold text-cyan-300">
                        ✅ Ausgewählt
                      </p>
                    )}
                  </div>
                </button>
              );
            }
          )}
        </div>

        <div className="sticky bottom-4 mt-8 rounded-3xl border border-slate-800 bg-slate-950/95 p-4 backdrop-blur">
          {selectedCharacter ? (
            <div className="mb-3 text-center">
              <p className="text-sm text-slate-400">
                Deine Auswahl für{" "}
                {
                  assignment.target_player_name
                }
                :
              </p>

              <p className="mt-1 text-xl font-black text-cyan-300">
                {selectedCharacter}
              </p>
            </div>
          ) : (
            <p className="mb-3 text-center text-sm text-slate-500">
              Wähle zuerst eine Figur.
            </p>
          )}

          <button
            onClick={submitCharacter}
            disabled={
              !selectedCharacter ||
              submitting
            }
            className="w-full rounded-2xl bg-cyan-500 px-6 py-5 font-black text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {submitting
              ? "Wird gespeichert..."
              : selectedCharacter
                ? `${selectedCharacter} vergeben`
                : "Figur auswählen"}
          </button>
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