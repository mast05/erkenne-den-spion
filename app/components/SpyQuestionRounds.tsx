"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";

type Player = {
  id: string;
  name: string;
  is_host: boolean;
};

type QuestionFlow = {
  round_id: string;
  total_rounds: number;
  player_ids: string[];
  turns: { asker_id: string; answerer_id: string }[];
  current_turn: number;
};

export default function SpyQuestionRounds({
  roundId,
  playerId,
  players,
  onVotingStart,
}: {
  roundId: string;
  playerId: string;
  players: Player[];
  onVotingStart: (started: boolean) => void;
}) {
  const [flow, setFlow] = useState<QuestionFlow | null>(null);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");
  const [advancing, setAdvancing] = useState(false);
  const busy = useRef(false);
  const mounted = useRef(false);

  useEffect(() => {
    let active = true;
    let checking = false;
    let initialized = false;
    mounted.current = true;

    async function load() {
      if (checking) return;
      checking = true;

      try {
        const response = initialized
          ? await supabase
              .from("spy_question_flows")
              .select("round_id, total_rounds, player_ids, turns, current_turn")
              .eq("round_id", roundId)
              .maybeSingle()
          : await supabase.rpc("ensure_spy_question_flow", {
              p_round_id: roundId,
            });

        if (!active) return;
        if (response.error) throw response.error;

        const next = (
          Array.isArray(response.data)
            ? response.data[0]
            : response.data
        ) as QuestionFlow | null;

        if (!next) {
          throw new Error("Der Fragenstand konnte nicht geladen werden.");
        }

        initialized = true;

        setFlow((previous) =>
          previous && previous.current_turn > next.current_turn
            ? previous
            : next
        );

        setError("");

        if (next.current_turn >= next.turns.length) {
          onVotingStart(true);
        }
      } catch (cause) {
        if (active) {
          const message =
            cause && typeof cause === "object" && "message" in cause
              ? String(cause.message)
              : "Der Fragenstand konnte nicht geladen werden.";

          setError(message);
        }
      } finally {
        checking = false;
      }
    }

    void load();

    const interval = window.setInterval(() => void load(), 1000);

    return () => {
      active = false;
      mounted.current = false;
      window.clearInterval(interval);
    };
  }, [roundId, onVotingStart]);

  async function nextQuestion(startVoting = false) {
    if (
      !flow ||
      busy.current ||
      flow.current_turn >= flow.turns.length
    ) {
      return;
    }

    busy.current = true;
    setAdvancing(true);
    setActionError("");

    try {
      const { data, error: rpcError } = startVoting
        ? await supabase.rpc("start_spy_voting", {
            p_round_id: roundId,
          })
        : await supabase.rpc("advance_spy_question_turn", {
            p_round_id: roundId,
            p_expected_turn: flow.current_turn,
          });

      if (!mounted.current) return;
      if (rpcError) throw rpcError;

      const next = (
        Array.isArray(data) ? data[0] : data
      ) as QuestionFlow | null;

      if (!next) {
        throw new Error("Die nächste Frage konnte nicht geladen werden.");
      }

      setFlow((previous) =>
        previous && previous.current_turn > next.current_turn
          ? previous
          : next
      );

      if (next.current_turn >= next.turns.length) {
        onVotingStart(true);
      }
    } catch (cause) {
      if (mounted.current) {
        const message =
          cause && typeof cause === "object" && "message" in cause
            ? String(cause.message)
            : "Die nächste Frage konnte nicht gestartet werden.";

        setActionError(message);
      }
    } finally {
      busy.current = false;
      if (mounted.current) setAdvancing(false);
    }
  }

  const turn = flow?.turns[flow.current_turn];
  const asker = players.find((player) => player.id === turn?.asker_id);
  const answerer = players.find((player) => player.id === turn?.answerer_id);

  const isAsker = turn?.asker_id === playerId;


  const canAdvance = Boolean(turn && isAsker);
  const lastQuestion = flow && flow.current_turn === flow.turns.length - 1;

  return (
    <section
      className="mt-8 rounded-3xl border border-emerald-500/30 bg-slate-900 p-5 text-center"
      aria-label="Fragenrunde"
    >
      <p className="text-sm font-bold uppercase tracking-wider text-emerald-400">
        {flow ? `Frage ${Math.min(flow.current_turn + 1, flow.turns.length)} / ${flow.turns.length}` : "Fragen werden vorbereitet..."}
      </p>

      {turn && (
        <>

          <h2 className="mt-5 text-2xl font-black">
            {asker?.name ?? "Spieler"} fragt{" "}
            {answerer?.name ?? "Mitspieler"}
          </h2>

          <p className="mt-3 text-sm text-slate-300">
            {isAsker
              ? "Du stellst jetzt eine Frage zur Figur. Verrate dabei nicht den Namen!"
              : turn.answerer_id === playerId
                ? "Du beantwortest jetzt die Frage. Lass dir deine Rolle nicht anmerken!"
                : "Höre genau zu: Wer könnte der Spion sein?"}
          </p>

          {canAdvance ? (
            <button
              onClick={() => void nextQuestion()}
              disabled={advancing}
              className="mt-5 w-full rounded-2xl bg-emerald-500 px-5 py-4 font-black text-white transition hover:bg-emerald-400 disabled:opacity-40"
            >
              {advancing
                ? "Wird gespeichert..."
                : lastQuestion
                  ? "Antwort erhalten – zur Abstimmung"
                  : "Antwort erhalten – weiter"}
            </button>
          ) : (
            <p className="mt-5 text-sm text-slate-400">
              Der Fragende bestätigt, sobald die Frage beantwortet wurde.
            </p>
          )}


          <p className="mt-4 text-xs text-slate-500">
            Jeder stellt zwei Fragen. Ihr könnt jederzeit vorher abstimmen.
          </p>

          <button
            onClick={() => void nextQuestion(true)}
            disabled={advancing}
            className="mt-5 w-full rounded-2xl border border-red-500/40 bg-red-500/10 px-5 py-4 font-black text-red-300 transition hover:bg-red-500/20 disabled:opacity-40"
          >
            🗳️ Jetzt zur Abstimmung
          </button>
        </>
      )}

      {(error || actionError) && (
        <p role="alert" className="mt-4 text-sm text-red-300">
          {actionError || error}
        </p>
      )}
    </section>
  );
}