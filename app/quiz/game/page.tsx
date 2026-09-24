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



type QuizGame = {

  id: string;

  room_id: string;

  category: string;

  status: string;

  current_round: number;

  total_rounds: number;

};



type QuizRound = {

  id: string;

  game_id: string;

  question_id: string;

  round_number: number;

  status: string;

  started_at: string;

};



type QuizQuestion = {

  id: string;

  category: string;

  question_type:

    | "emoji"

    | "quickfire"

    | "timeline"

    | "true_false"

    | "next_scene";

  prompt: string;

  options: unknown;

  metadata: unknown;

  difficulty: number;

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



type PlayerAnswer = {

  id: string;

  player_id: string;

  answer: unknown;

  is_correct: boolean;

  points: number;

};



type RoundResult = {

  correct_answer: unknown;

  explanation: string | null;

};



type TimelineOption = {

  id: string;

  text: string;

};



type QuestionMetadata = {

  emojis?: string;

};



function getTypeInfo(type: QuizQuestion["question_type"]) {

  if (type === "emoji") {

    return {

      icon: "😀",

      name: "Emoji-Rätsel",

    };

  }



  if (type === "quickfire") {

    return {

      icon: "⚡",

      name: "Schnellfeuer",

    };

  }



  if (type === "timeline") {

    return {

      icon: "🕰️",

      name: "Timeline",

    };

  }



  if (type === "true_false") {

    return {

      icon: "✅",

      name: "Wahr oder Falsch",

    };

  }



  return {

    icon: "🎬",

    name: "Was kommt als Nächstes?",

  };

}



function formatAnswer(

  answer: unknown,

  question: QuizQuestion | null

) {

  if (!question) {

    return "";

  }



  if (

    question.question_type === "true_false"

  ) {

    return answer === true

      ? "Wahr"

      : "Falsch";

  }



  if (

    question.question_type === "timeline" &&

    Array.isArray(answer)

  ) {

    const options =

      Array.isArray(question.options)

        ? (question.options as TimelineOption[])

        : [];



    return answer

      .map((id) => {

        const option = options.find(

          (item) => item.id === id

        );



        return option?.text ?? String(id);

      })

      .join(" → ");

  }



  return String(answer ?? "");

}



export default function QuizGamePage() {

  const router = useRouter();



  const [game, setGame] =

    useState<QuizGame | null>(null);



  const [round, setRound] =

    useState<QuizRound | null>(null);



  const [question, setQuestion] =

    useState<QuizQuestion | null>(null);



  const [players, setPlayers] =

    useState<Player[]>([]);



  const [scores, setScores] =

    useState<Score[]>([]);



  const [playerId, setPlayerId] =

    useState("");



  const [ownAnswer, setOwnAnswer] =

    useState<PlayerAnswer | null>(null);



  const [roundResult, setRoundResult] =

    useState<RoundResult | null>(null);



  const [selectedAnswer, setSelectedAnswer] =

    useState<string>("");



  const [timelineOrder, setTimelineOrder] =

    useState<TimelineOption[]>([]);



  const [loading, setLoading] =

    useState(true);



  const [submitting, setSubmitting] =

    useState(false);



  const [advancing, setAdvancing] =

    useState(false);



  const [error, setError] =

    useState("");



  const timelineRoundRef =

    useRef<string | null>(null);



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



  const typeInfo =

    question

      ? getTypeInfo(

          question.question_type

        )

      : null;



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

          "quizGameId"

        );



      if (

        !roomId ||

        !currentPlayerId ||

        !gameId

      ) {

        router.push("/quiz");

        return;

      }



      try {

        const {

          data: gameData,

          error: gameError,

        } = await supabase

          .from("quiz_games")

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

            "QUIZ GAME LOAD ERROR:",

            gameError

          );



          setError(

            "Das Quiz konnte nicht geladen werden."

          );



          setLoading(false);

          return;

        }



        const currentGame =

          gameData as QuizGame;



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

            "QUIZ PLAYERS ERROR:",

            playerError

          );



          setError(

            "Die Spieler konnten nicht geladen werden."

          );



          setLoading(false);

          return;

        }



        const currentPlayers =

          (playerData ?? []) as Player[];



        const {

          data: scoreData,

          error: scoreError,

        } = await supabase

          .from("quiz_scores")

          .select(

            "player_id, points"

          )

          .eq(

            "game_id",

            gameId

          );



        if (scoreError) {

          console.error(

            "QUIZ SCORES ERROR:",

            scoreError

          );

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

          (scoreData ?? []) as Score[]

        );



        /*

         * Spiel ist fertig:

         * keine weitere Runde laden.

         */

        if (

          currentGame.status ===

          "finished"

        ) {

          setRound(null);

          setQuestion(null);

          setOwnAnswer(null);

          setRoundResult(null);

          setLoading(false);

          setError("");

          return;

        }



        const {

          data: roundData,

          error: roundError,

        } = await supabase

          .from("quiz_rounds")

          .select(

            "id, game_id, question_id, round_number, status, started_at"

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

            "QUIZ ROUND ERROR:",

            roundError

          );

        }



        /*

         * Wenn nach dem Weiterschalten

         * noch keine neue Runde existiert,

         * erzeugt der Host sie.

         */

        if (!roundData) {

          const me =

            currentPlayers.find(

              (player) =>

                player.id ===

                currentPlayerId

            );



          if (me?.is_host) {

            const {

              error:

                ensureError,

            } = await supabase.rpc(

              "ensure_quiz_round",

              {

                p_game_id:

                  gameId,

              }

            );



            if (ensureError) {

              console.error(

                "QUIZ ENSURE ROUND ERROR:",

                ensureError

              );



              setError(

                ensureError.message

              );

            } else {

              window.setTimeout(

                () => {

                  void loadGame();

                },

                250

              );

            }

          }



          setRound(null);

          setQuestion(null);

          setOwnAnswer(null);

          setRoundResult(null);

          setLoading(false);



          return;

        }



        const currentRound =

          roundData as QuizRound;



        const {

          data: questionData,

          error: questionError,

        } = await supabase

          .from("quiz_questions")

          .select(

            "id, category, question_type, prompt, options, metadata, difficulty"

          )

          .eq(

            "id",

            currentRound.question_id

          )

          .maybeSingle();



        if (

          questionError ||

          !questionData

        ) {

          console.error(

            "QUIZ QUESTION ERROR:",

            questionError

          );



          setError(

            "Die Frage konnte nicht geladen werden."

          );



          setLoading(false);

          return;

        }



        const currentQuestion =

          questionData as QuizQuestion;



        const {

          data: answerData,

          error: answerError,

        } = await supabase

          .from(

            "quiz_player_answers"

          )

          .select(

            "id, player_id, answer, is_correct, points"

          )

          .eq(

            "round_id",

            currentRound.id

          )

          .eq(

            "player_id",

            currentPlayerId

          )

          .maybeSingle();



        if (answerError) {

          console.error(

            "QUIZ OWN ANSWER ERROR:",

            answerError

          );

        }



        let result:

          | RoundResult

          | null = null;



        if (

          currentRound.status ===

          "finished"

        ) {

          const {

            data: resultData,

            error: resultError,

          } = await supabase.rpc(

            "get_quiz_round_result",

            {

              p_game_id:

                gameId,

            }

          );



          if (resultError) {

            console.error(

              "QUIZ RESULT ERROR:",

              resultError

            );

          } else if (

            resultData?.[0]

          ) {

            result =

              resultData[0] as RoundResult;

          }

        }



        setRound(

          currentRound

        );



        setQuestion(

          currentQuestion

        );



        setOwnAnswer(

          answerData

            ? (answerData as PlayerAnswer)

            : null

        );



        setRoundResult(

          result

        );



        /*

         * Timeline pro Runde nur EINMAL

         * initialisieren. Realtime und der

         * Fallback laden das Spiel regelmäßig

         * neu – die Reihenfolge darf dabei

         * nicht erneut gemischt werden.

         */

        if (

          currentQuestion.question_type ===

            "timeline" &&

          !answerData &&

          timelineRoundRef.current !==

            currentRound.id

        ) {

          const options =

            Array.isArray(

              currentQuestion.options

            )

              ? (currentQuestion.options as TimelineOption[])

              : [];



          setTimelineOrder(

            [...options].sort(

              () =>

                Math.random() - 0.5

            )

          );



          timelineRoundRef.current =

            currentRound.id;

        }



        setLoading(false);

        setError("");

      } catch (err) {

        console.error(

          "QUIZ LOAD ERROR:",

          err

        );



        setError(

          "Beim Laden des Quiz ist ein Fehler aufgetreten."

        );



        setLoading(false);

      }

    }, [router]);



  useEffect(() => {

    const gameId =

      sessionStorage.getItem(

        "quizGameId"

      );



    if (!gameId) {

      router.push("/quiz");

      return;

    }



    void loadGame();



    const channel =

      supabase

        .channel(

          `quiz-game-${gameId}`

        )

        .on(

          "postgres_changes",

          {

            event: "*",

            schema: "public",

            table: "quiz_games",

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

            table: "quiz_rounds",

            filter: `game_id=eq.${gameId}`,

          },

          () => {

            setSelectedAnswer("");

            void loadGame();

          }

        )

        .on(

          "postgres_changes",

          {

            event: "*",

            schema: "public",

            table: "quiz_scores",

            filter: `game_id=eq.${gameId}`,

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

              "quiz_player_answers",

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

        2500

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



  async function sendAnswer(

    answer: unknown

  ) {

    if (

      !game ||

      !round ||

      !question ||

      ownAnswer ||

      round.status !== "playing" ||

      submitting

    ) {

      return;

    }



    setSubmitting(true);

    setError("");



    try {

      const {

        error: submitError,

      } = await supabase.rpc(

        "submit_quiz_answer",

        {

          p_game_id:

            game.id,

          p_answer:

            answer,

        }

      );



      if (submitError) {

        console.error(

          "QUIZ SUBMIT ERROR:",

          submitError

        );



        setError(

          submitError.message

        );



        return;

      }



      setSelectedAnswer("");



      await loadGame();

    } catch (err) {

      console.error(

        "QUIZ SUBMIT ERROR:",

        err

      );



      setError(

        "Die Antwort konnte nicht gespeichert werden."

      );

    } finally {

      setSubmitting(false);

    }

  }



  function moveTimelineItem(

    index: number,

    direction: -1 | 1

  ) {

    const nextIndex =

      index + direction;



    if (

      nextIndex < 0 ||

      nextIndex >=

        timelineOrder.length

    ) {

      return;

    }



    const next =

      [...timelineOrder];



    const temp =

      next[index];



    next[index] =

      next[nextIndex];



    next[nextIndex] =

      temp;



    setTimelineOrder(next);

  }



  async function nextRound() {

    if (

      !game ||

      !round ||

      !isHost ||

      round.status !== "finished" ||

      advancing

    ) {

      return;

    }



    setAdvancing(true);

    setError("");



    try {

      const {

        error: advanceError,

      } = await supabase.rpc(

        "advance_quiz_round",

        {

          p_game_id:

            game.id,

        }

      );



      if (advanceError) {

        console.error(

          "QUIZ ADVANCE ERROR:",

          advanceError

        );



        setError(

          advanceError.message

        );



        return;

      }



      setSelectedAnswer("");

      setOwnAnswer(null);

      setRoundResult(null);

      setTimelineOrder([]);



      await loadGame();

    } finally {

      setAdvancing(false);

    }

  }



  function newGame() {

    sessionStorage.removeItem(

      "quizGameId"

    );



    router.push(

      "/quiz/lobby"

    );

  }



  if (loading) {

    return (

      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">

        <p className="text-slate-400">

          Quiz wird geladen...

        </p>

      </main>

    );

  }



  if (!game) {

    return (

      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">

        <p className="text-center text-red-400">

          {error ||

            "Das Quiz konnte nicht geladen werden."}

        </p>

      </main>

    );

  }



  /*

   * ENDSCREEN

   */

  if (

    game.status === "finished"

  ) {

    return (

      <main className="min-h-screen bg-slate-950 text-white">

        <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">



          <div className="text-center">

            <div className="text-7xl">

              🏆

            </div>



            <p className="mt-5 text-sm font-black uppercase tracking-[0.25em] text-emerald-400">

              Fandom Quiz beendet

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

                    <p className="text-2xl font-black text-emerald-300">

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

              className="rounded-2xl bg-emerald-500 px-6 py-4 font-black text-slate-950 transition hover:bg-emerald-400"

            >

              🎓 Neues Quiz

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



  if (

    !round ||

    !question ||

    !typeInfo

  ) {

    return (

      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">

        <div className="text-center">

          <div className="text-5xl">

            ⏳

          </div>



          <p className="mt-4 text-slate-400">

            Nächste Frage wird

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



  const normalOptions =

    Array.isArray(question.options)

      ? question.options.filter(

          (item) =>

            typeof item === "string"

        ) as string[]

      : [];



  const metadata =

    question.metadata &&

    typeof question.metadata ===

      "object"

      ? (question.metadata as QuestionMetadata)

      : {};



  return (

    <main className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto max-w-2xl px-6 py-8">



        {/* HEADER */}

        <div className="flex items-center justify-between gap-4">

          <div>

            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">

              🎓 Fandom Quiz

            </p>



            <h1 className="mt-1 text-2xl font-black">

              Runde{" "}

              {game.current_round}/

              {game.total_rounds}

            </h1>

          </div>



          <div className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-center">

            <p className="text-2xl">

              {typeInfo.icon}

            </p>



            <p className="mt-1 text-xs font-bold text-slate-400">

              {typeInfo.name}

            </p>

          </div>

        </div>



        {/* DIFFICULTY */}

        <div className="mt-5 flex gap-1">

          {[1, 2, 3].map(

            (difficulty) => (

              <div

                key={difficulty}

                className={`h-2 flex-1 rounded-full ${

                  difficulty <=

                  question.difficulty

                    ? "bg-emerald-500"

                    : "bg-slate-800"

                }`}

              />

            )

          )}

        </div>



        {/* FRAGE */}

        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-6">



          {question.question_type ===

            "emoji" &&

            metadata.emojis && (

              <div className="mb-6 text-center text-6xl leading-relaxed">

                {metadata.emojis}

              </div>

            )}



          <p className="text-center text-xl font-black leading-relaxed">

            {question.prompt}

          </p>

        </div>



        {/* NOCH NICHT GEANTWORTET */}

        {!ownAnswer &&

          round.status ===

            "playing" && (

            <div className="mt-6">



              {/* TRUE / FALSE */}

              {question.question_type ===

                "true_false" && (

                <div className="grid grid-cols-2 gap-3">

                  <button

                    onClick={() =>

                      void sendAnswer(

                        true

                      )

                    }

                    disabled={

                      submitting

                    }

                    className="rounded-2xl border border-green-500/40 bg-green-500/10 px-5 py-6 text-lg font-black text-green-300 transition hover:bg-green-500/20 disabled:opacity-40"

                  >

                    ✅ Wahr

                  </button>



                  <button

                    onClick={() =>

                      void sendAnswer(

                        false

                      )

                    }

                    disabled={

                      submitting

                    }

                    className="rounded-2xl border border-red-500/40 bg-red-500/10 px-5 py-6 text-lg font-black text-red-300 transition hover:bg-red-500/20 disabled:opacity-40"

                  >

                    ❌ Falsch

                  </button>

                </div>

              )}



              {/* TIMELINE */}

              {question.question_type ===

                "timeline" && (

                <>

                  <p className="mb-3 text-center text-sm text-slate-400">

                    Sortiere von früh nach spät.

                  </p>



                  <div className="space-y-3">

                    {timelineOrder.map(

                      (

                        item,

                        index

                      ) => (

                        <div

                          key={

                            item.id

                          }

                          className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-4"

                        >

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 font-black text-emerald-300">

                            {index + 1}

                          </div>



                          <p className="min-w-0 flex-1 font-bold">

                            {item.text}

                          </p>



                          <div className="flex flex-col gap-1">

                            <button

                              onClick={() =>

                                moveTimelineItem(

                                  index,

                                  -1

                                )

                              }

                              disabled={

                                index ===

                                  0 ||

                                submitting

                              }

                              className="rounded-lg bg-slate-800 px-3 py-1 font-black disabled:opacity-20"

                            >

                              ↑

                            </button>



                            <button

                              onClick={() =>

                                moveTimelineItem(

                                  index,

                                  1

                                )

                              }

                              disabled={

                                index ===

                                  timelineOrder.length -

                                    1 ||

                                submitting

                              }

                              className="rounded-lg bg-slate-800 px-3 py-1 font-black disabled:opacity-20"

                            >

                              ↓

                            </button>

                          </div>

                        </div>

                      )

                    )}

                  </div>



                  <button

                    onClick={() =>

                      void sendAnswer(

                        timelineOrder.map(

                          (item) =>

                            item.id

                        )

                      )

                    }

                    disabled={

                      submitting ||

                      timelineOrder.length ===

                        0

                    }

                    className="mt-4 w-full rounded-2xl bg-emerald-500 px-6 py-5 font-black text-slate-950 transition hover:bg-emerald-400 disabled:opacity-40"

                  >

                    🕰️ Reihenfolge bestätigen

                  </button>

                </>

              )}



              {/* MULTIPLE CHOICE */}

              {question.question_type !==

                "timeline" &&

                question.question_type !==

                  "true_false" && (

                  <>

                    <div className="space-y-3">

                      {normalOptions.map(

                        (option) => {

                          const selected =

                            selectedAnswer ===

                            option;



                          return (

                            <button

                              key={

                                option

                              }

                              onClick={() =>

                                setSelectedAnswer(

                                  option

                                )

                              }

                              disabled={

                                submitting

                              }

                              className={`w-full rounded-2xl border px-5 py-4 text-left font-bold transition ${

                                selected

                                  ? "border-emerald-500 bg-emerald-500/20 text-emerald-200"

                                  : "border-slate-800 bg-slate-900 hover:border-slate-700"

                              }`}

                            >

                              <div className="flex items-center justify-between gap-4">

                                <span>

                                  {

                                    option

                                  }

                                </span>



                                <span>

                                  {selected

                                    ? "✅"

                                    : "›"}

                                </span>

                              </div>

                            </button>

                          );

                        }

                      )}

                    </div>



                    <button

                      onClick={() =>

                        void sendAnswer(

                          selectedAnswer

                        )

                      }

                      disabled={

                        !selectedAnswer ||

                        submitting

                      }

                      className="mt-4 w-full rounded-2xl bg-emerald-500 px-6 py-5 font-black text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"

                    >

                      {submitting

                        ? "Antwort wird geprüft..."

                        : "Antwort abgeben"}

                    </button>

                  </>

                )}

            </div>

          )}



        {/* GEANTWORTET / WARTEN */}

        {ownAnswer &&

          round.status ===

            "playing" && (

            <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900 p-6 text-center">

              <div className="text-4xl">

                ⏳

              </div>



              <p className="mt-3 font-black">

                Antwort abgegeben

              </p>



              <p className="mt-2 text-sm text-slate-400">

                Warte auf die anderen Spieler.

              </p>

            </div>

          )}



        {/* RUNDENERGEBNIS */}

        {round.status ===

          "finished" && (

          <div className="mt-6">



            {ownAnswer && (

              <div

                className={`rounded-3xl border p-6 text-center ${

                  ownAnswer.is_correct

                    ? "border-green-500/30 bg-green-500/10"

                    : "border-red-500/30 bg-red-500/10"

                }`}

              >

                <div className="text-4xl">

                  {ownAnswer.is_correct

                    ? "✅"

                    : "❌"}

                </div>



                <p

                  className={`mt-3 text-xl font-black ${

                    ownAnswer.is_correct

                      ? "text-green-300"

                      : "text-red-300"

                  }`}

                >

                  {ownAnswer.is_correct

                    ? "Richtig!"

                    : "Leider falsch"}

                </p>



                {ownAnswer.is_correct && (

                  <p className="mt-2 text-sm text-green-200">

                    +{ownAnswer.points} Punkte

                  </p>

                )}



                <p className="mt-4 text-sm text-slate-400">

                  Deine Antwort:

                </p>



                <p className="mt-1 font-bold">

                  {formatAnswer(

                    ownAnswer.answer,

                    question

                  )}

                </p>

              </div>

            )}



            {roundResult && (

              <div className="mt-4 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6">

                <p className="text-sm font-bold uppercase tracking-wider text-emerald-400">

                  Richtige Antwort

                </p>



                <p className="mt-3 text-lg font-black">

                  {formatAnswer(

                    roundResult.correct_answer,

                    question

                  )}

                </p>



                {roundResult.explanation && (

                  <p className="mt-4 text-sm leading-relaxed text-slate-300">

                    {

                      roundResult.explanation

                    }

                  </p>

                )}

              </div>

            )}



            {isHost ? (

              <button

                onClick={

                  nextRound

                }

                disabled={

                  advancing

                }

                className="mt-5 w-full rounded-2xl bg-emerald-500 px-6 py-5 font-black text-slate-950 transition hover:bg-emerald-400 disabled:opacity-40"

              >

                {advancing

                  ? "Wird geladen..."

                  : game.current_round >=

                      game.total_rounds

                    ? "🏆 Endstand anzeigen"

                    : "Nächste Frage →"}

              </button>

            ) : (

              <div className="mt-5 rounded-2xl bg-slate-900 p-4 text-center text-sm text-slate-400">

                Warte, bis der Host weitermacht.

              </div>

            )}

          </div>

        )}



        {/* SCORE */}

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

                  <div className="w-8 text-center text-lg font-black text-slate-500">

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



                  <p className="text-xl font-black text-emerald-300">

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