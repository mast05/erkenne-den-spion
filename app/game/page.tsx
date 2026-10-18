"use client";

import Image from "next/image";
import SpyQuestionRounds from "../components/SpyQuestionRounds";
import { getCharacterImage, categoryNames } from "../lib/catalog";
import { getCharacterTips } from "../lib/spyHints";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import { dealCharacters } from "../lib/dealData";

type Role = {
  type: "character" | "imposter";
  character?: string;
  tip?: string;
};

type Player = {
  id: string;
  name: string;
  is_host: boolean;
};

type Result = {
  winner: "players" | "imposter";
  votedPlayerName: string;
  votes: {
    voterName: string;
    votedPlayerName: string;
  }[];
};









function getRandomTip(character: string, category: string) {
  const tips = getCharacterTips(character, category);
  return tips.length ? tips[Math.floor(Math.random() * tips.length)] : "Noch kein Tipp verfügbar.";
}



function CharacterImage({
  character,
  category,
}: {
  character: string;
  category: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="flex h-72 w-full items-center justify-center rounded-3xl border border-slate-800 bg-slate-900">
        <div className="text-9xl">❓</div>
      </div>
    );
  }

  return (
    <Image unoptimized width={720} height={720} loading="eager"
      src={getCharacterImage(character, category)}
      alt={character}
      onError={() => setImageError(true)}
      className="mx-auto h-72 w-full object-contain"
    />
  );
}

export default function GamePage() {
  const router = useRouter();

  const [role, setRole] = useState<Role | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [roundId, setRoundId] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [spyPlayerId, setSpyPlayerId] = useState("");
  const [category, setCategory] = useState("");
  const [secretCharacter, setSecretCharacter] = useState("");

  const [votingStarted, setVotingStarted] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [voted, setVoted] = useState(false);
  const [submittingVote, setSubmittingVote] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [roleRevealed, setRoleRevealed] = useState(false);
  const [imposterGuess, setImposterGuess] = useState("");
const [submittingGuess, setSubmittingGuess] = useState(false);
const [guessLocked, setGuessLocked] = useState(false);
const [imposterGuessResult, setImposterGuessResult] = useState<{
  winner: "players" | "imposter";
  guessedCharacter: string;
} | null>(null);

const availableCharacters = dealCharacters
  .filter((character) => character.category === category)
  .map((character) => character.name)
  .sort((a, b) => a.localeCompare(b));
  

  useEffect(() => {
    let mounted = true;

    async function loadGame() {
      try {
        const roomId = sessionStorage.getItem("roomId");
        const currentPlayerId =
          sessionStorage.getItem("playerId");

        if (!roomId || !currentPlayerId) {
          if (mounted) {
            setError(
              "Spieler oder Raum wurde nicht gefunden."
            );
            setLoading(false);
          }

          return;
        }

        // Zuerst Spieler des Raums laden.
        const { data: playerData, error: playersError } =
          await supabase
            .from("players")
            .select("id, name, is_host")
            .eq("room_id", roomId)
            .order("created_at", {
              ascending: true,
            });

        if (!mounted) return;

        if (playersError) {
          console.error(
            "PLAYERS ERROR:",
            playersError
          );

          setError(
            "Die Spieler konnten nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        if (!playerData || playerData.length !== 3) {
          setError(
            "Für dieses Spiel müssen genau 3 Spieler im Raum sein."
          );

          setLoading(false);
          return;
        }

        // Prüfen, ob die ID dieses Tabs wirklich
        // zu einem Spieler in diesem Raum gehört.
        const ownPlayer = playerData.find(
          (player) => player.id === currentPlayerId
        );

        if (!ownPlayer) {
          console.error(
            "SPIELER-ID GEHÖRT NICHT ZUM RAUM:",
            currentPlayerId
          );

          setError(
            "Dieser Tab gehört zu keinem Spieler in diesem Raum."
          );

          setLoading(false);
          return;
        }

        // Es darf nur die aktuell aktive Runde
        // dieses Raumes verwendet werden.
        const { data: round, error: roundError } =
          await supabase
            .from("rounds")
            .select(
              "id, secret_word, spy_player_id, status, category, voting_started_at"
            )
            .eq("room_id", roomId)
            .eq("status", "active")
            .order("created_at", {
              ascending: false,
            })
            .limit(1)
            .maybeSingle();

        if (!mounted) return;

        if (roundError) {
          console.error(
            "ROUND ERROR:",
            roundError
          );

          setError(
            "Die Runde konnte nicht geladen werden."
          );

          setLoading(false);
          return;
        }

        if (!round) {
          setError(
            "Keine aktive Runde gefunden."
          );

          setLoading(false);
          return;
        }

        // Prüfen, ob der gespeicherte Imposter
        // überhaupt einer der drei Spieler ist.
        const spyExists = playerData.some(
          (player) =>
            player.id === round.spy_player_id
        );

        if (!spyExists) {
          console.error(
            "UNGÜLTIGE SPY PLAYER ID:",
            round.spy_player_id
          );

          setError(
            "Der Imposter dieser Runde ist ungültig."
          );

          setLoading(false);
          return;
        }

        // Diesen Tab eindeutig auf die aktuelle Runde setzen.
        sessionStorage.setItem(
          "roundId",
          round.id
        );

        setPlayerId(currentPlayerId);
        setRoundId(round.id);
        setSpyPlayerId(round.spy_player_id);
        setCategory(round.category);
        setSecretCharacter(round.secret_word);
        setGuessLocked(Boolean(round.voting_started_at));
        setVotingStarted(Boolean(round.voting_started_at));
        setPlayers(playerData);

        // WICHTIG:
        // Nur exakt der Spieler, dessen ID
        // der spy_player_id entspricht, ist Imposter.
        const isImposter =
          currentPlayerId === round.spy_player_id;

        

        

        

        if (isImposter) {
  const tipStorageKey = `roundTip:${round.id}`;

  let roundTip = sessionStorage.getItem(tipStorageKey);

  if (!roundTip) {
    roundTip = getRandomTip(
  round.secret_word,
  round.category
);
    sessionStorage.setItem(tipStorageKey, roundTip);
  }

  setRole({
    type: "imposter",
    tip: roundTip,
  });
} else {
  setRole({
    type: "character",
    character: round.secret_word,
  });
}

        setError("");
        setLoading(false);
      } catch (err) {
        console.error(
          "LOAD GAME ERROR:",
          err
        );

        if (mounted) {
          setError(
            "Beim Laden des Spiels ist ein Fehler aufgetreten."
          );

          setLoading(false);
        }
      }
    }

    loadGame();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
  if (!roundId || imposterGuessResult) {
    return;
  }

  let checking = false;

  async function checkImposterGuess() {
    if (checking) return;

    checking = true;

    try {
      const { data, error: roundError } = await supabase
        .from("rounds")
        .select(
          "status, finish_reason, winner_side, imposter_guess, voting_started_at"
        )
        .eq("id", roundId)
        .maybeSingle();

      if (roundError) {
        console.error("IMPOSTER GUESS CHECK ERROR:", roundError);
        return;
      }

      setGuessLocked(Boolean(data?.voting_started_at));
      if (data?.voting_started_at) setVotingStarted(true);

      if (
        data?.status === "finished" &&
        data.finish_reason === "imposter_guess" &&
        (data.winner_side === "players" ||
          data.winner_side === "imposter") &&
        data.imposter_guess
      ) {
        setImposterGuessResult({
          winner: data.winner_side,
          guessedCharacter: data.imposter_guess,
        });
      }
    } finally {
      checking = false;
    }
  }

  checkImposterGuess();

  const interval = setInterval(checkImposterGuess, 1000);

  return () => {
    clearInterval(interval);
  };
}, [roundId, imposterGuessResult]);

  useEffect(() => {
    if (
      !roundId ||
      !votingStarted ||
      result ||
      players.length !== 3
    ) {
      return;
    }

    let checking = false;

    async function checkVotes() {
      if (checking) return;

      checking = true;

      try {
        const { data: votes, error: votesError } =
          await supabase
            .from("votes")
            .select(
              "voter_id, voted_player_id"
            )
            .eq("round_id", roundId);

        if (votesError) {
          console.error(
            "VOTES LOAD ERROR:",
            votesError
          );

          return;
        }

        if (!votes) return;

        setVoted(votes.some((vote) => vote.voter_id === playerId));

        // Falls aus irgendeinem Grund ein Spieler
        // mehrfach abgestimmt hat, zählt nur eine
        // Stimme pro voter_id.
        const votesByPlayer = new Map<
          string,
          string
        >();

        for (const vote of votes) {
          votesByPlayer.set(
            vote.voter_id,
            vote.voted_player_id
          );
        }

        // Erst auswerten, wenn alle 3
        // unterschiedlichen Spieler abgestimmt haben.
        if (votesByPlayer.size < 3) {
          return;
        }

        const counts: Record<string, number> =
          {};

        for (const votedPlayerId of votesByPlayer.values()) {
          counts[votedPlayerId] =
            (counts[votedPlayerId] || 0) + 1;
        }

        let votedPlayerId = "";
        let highestVotes = 0;
        let tie = false;

        for (const [
          id,
          count,
        ] of Object.entries(counts)) {
          if (count > highestVotes) {
            votedPlayerId = id;
            highestVotes = count;
            tie = false;
          } else if (
            count === highestVotes
          ) {
            tie = true;
          }
        }

        const imposterCaught =
          !tie &&
          votedPlayerId === spyPlayerId;

        const votedPlayer = players.find(
          (player) =>
            player.id === votedPlayerId
        );

        const { error: finishError } =
          await supabase
            .from("rounds")
            .update({
              status: "finished",
            })
            .eq("id", roundId);

        if (finishError) {
          console.error(
            "ROUND FINISH ERROR:",
            finishError
          );
        }

const voteDetails = Array.from(
  votesByPlayer.entries()
).map(([voterId, votedId]) => {
  const voter = players.find(
    (player) => player.id === voterId
  );

  const votedPlayer = players.find(
    (player) => player.id === votedId
  );

  return {
    voterName: voter?.name || "Unbekannt",
    votedPlayerName:
      votedPlayer?.name || "Unbekannt",
  };
});

        setResult({
  winner: imposterCaught
    ? "players"
    : "imposter",

  votedPlayerName: tie
    ? "Unentschieden"
    : votedPlayer?.name || "Unbekannt",

  votes: voteDetails,
});
      } catch (err) {
        console.error(
          "CHECK VOTES ERROR:",
          err
        );
      } finally {
        checking = false;
      }
    }

    checkVotes();

    const interval = setInterval(
      checkVotes,
      1500
    );

    return () => {
      clearInterval(interval);
    };
  }, [
    roundId,
    votingStarted,
    result,
    players,
    spyPlayerId,
    playerId,
  ]);

  function returnToLobby() {
  sessionStorage.removeItem("roundId");

  router.push("/lobby");
}

async function submitImposterGuess() {
  if (
    !imposterGuess ||
    !roundId ||
    submittingGuess ||
    guessLocked ||
    role?.type !== "imposter"
  ) {
    return;
  }

  setSubmittingGuess(true);
  setError("");

  try {
    const { data, error: guessError } =
      await supabase.rpc("submit_imposter_guess", {
        p_round_id: roundId,
        p_guessed_character: imposterGuess,
      });

    if (guessError) {
      console.error(
        "IMPOSTER GUESS ERROR:",
        guessError
      );

      // Falls genau gleichzeitig die erste Stimme gespeichert wurde,
      // wird der Tipp einfach gesperrt. Kein Fehlerbildschirm.
      if (
        guessError.message?.includes(
          "Die Abstimmung hat bereits begonnen"
        )
      ) {
        setGuessLocked(true);
        setError("");
        return;
      }

      setError(
        "Dein Tipp konnte nicht gespeichert werden."
      );

      return;
    }

    const guessResult = data?.[0];

    if (
      !guessResult ||
      (guessResult.winning_side !== "players" &&
        guessResult.winning_side !== "imposter")
    ) {
      setError(
        "Das Ergebnis des Tipps konnte nicht geladen werden."
      );
      return;
    }

    setImposterGuessResult({
      winner: guessResult.winning_side,
      guessedCharacter: imposterGuess,
    });
  } catch (err) {
    console.error(
      "SUBMIT IMPOSTER GUESS ERROR:",
      err
    );

    setError(
      "Dein Tipp konnte nicht gespeichert werden."
    );
  } finally {
    setSubmittingGuess(false);
  }
}

  async function submitVote() {
    if (
      !selectedPlayer ||
      !roundId ||
      !playerId ||
      voted ||
      submittingVote
    ) {
      return;
    }

    setSubmittingVote(true);
    setError("");

    try {
      const { error: voteError } =
        await supabase
          .from("votes")
          .insert({
            round_id: roundId,
            voter_id: playerId,
            voted_player_id:
              selectedPlayer,
          });

      if (voteError) {
        console.error(
          "VOTE ERROR:",
          voteError
        );

        setError(
          "Die Abstimmung konnte nicht gespeichert werden."
        );

        setSubmittingVote(false);
        return;
      }

      setVoted(true);
    } catch (err) {
      console.error(
        "SUBMIT VOTE ERROR:",
        err
      );

      setError(
        "Die Abstimmung konnte nicht gespeichert werden."
      );
    } finally {
      setSubmittingVote(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p>Spiel wird vorbereitet...</p>
      </main>
    );
  }

  if (imposterGuessResult) {
    const realSpyName =
  players.find((player) => player.id === spyPlayerId)?.name ||
  "Unbekannt";

  const imposterWon =
    imposterGuessResult.winner === "imposter";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
        <div className="text-center">
          <div className="text-7xl">
            {imposterWon ? "🎯" : "❌"}
          </div>

          <h1 className="mt-6 text-3xl font-black">
            {imposterWon
              ? "Der Imposter gewinnt!"
              : "Der Imposter lag falsch!"}
          </h1>

          <p className="mt-3 text-slate-400">
            Der Imposter hat versucht, die Figur direkt zu erraten.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-red-900 bg-red-950/30 p-5 text-center">
  <p className="text-xs uppercase tracking-widest text-red-400">
    Der Imposter war
  </p>

  <p className="mt-2 text-2xl font-black text-white">
    🕵️ {realSpyName}
  </p>
</div>

<div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-5">
  <p className="text-xs uppercase tracking-widest text-slate-500">
    Getippt
  </p>

  <p className="mt-2 text-xl font-black text-red-400">
    {imposterGuessResult.guessedCharacter}
  </p>
</div>

        <div className="mt-4 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <p className="mb-4 text-xs uppercase tracking-widest text-slate-500">
            Richtige Figur
          </p>

          <CharacterImage
            character={secretCharacter}
            category={category}
          />

          <p className="mt-4 text-center text-2xl font-black">
            {secretCharacter}
          </p>
        </div>

        <div
          className={`mt-5 rounded-2xl p-5 text-center ${
            imposterWon
              ? "bg-red-950/40 text-red-300"
              : "bg-emerald-950/40 text-emerald-300"
          }`}
        >
          <p className="font-black">
            {imposterWon
              ? "🕵️ Imposter gewinnt die Runde"
              : "👥 Die anderen Spieler gewinnen die Runde"}
          </p>
        </div>

        <button
          onClick={returnToLobby}
          className="mt-8 w-full rounded-2xl bg-emerald-500 px-6 py-5 font-bold text-white transition hover:scale-[1.02]"
        >
          🏠 Zurück zur Lobby
        </button>
      </div>
    </main>
  );
}

  if (error && !votingStarted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <div className="text-5xl">
            ⚠️
          </div>

          <p className="mt-5 text-red-400">
            {error}
          </p>
        </div>
      </main>
    );
  }

  if (result) {
  const realSpyName =
    players.find(
      (player) => player.id === spyPlayerId
    )?.name || "Unbekannt";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
        <div className="text-center">
          {result.winner === "players" ? (
            <>
              <div className="text-7xl">
                🎉
              </div>

              <p className="mt-6 text-sm uppercase tracking-widest text-emerald-400">
                Richtig!
              </p>

              <h1 className="mt-3 text-4xl font-black">
                Der Spion wurde erwischt!
              </h1>
            </>
          ) : (
            <>
              <div className="text-7xl">
                🕵️
              </div>

              <p className="mt-6 text-sm uppercase tracking-widest text-red-400">
                Der Spion gewinnt!
              </p>

              <h1 className="mt-3 text-4xl font-black">
                Falsche Entscheidung
              </h1>
            </>
          )}

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-red-900 bg-red-950/20 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Spion
              </p>

              <p className="mt-2 font-black text-red-400">
                {realSpyName}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Gewählt
              </p>

              <p className="mt-2 font-black">
                {result.votedPlayerName}
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Die Figur war
            </p>

            <div className="mt-4 overflow-hidden rounded-2xl bg-slate-950">
              <CharacterImage
                character={secretCharacter}
                category={category}
              />
            </div>

            <p className="mt-5 text-2xl font-black">
              {secretCharacter}
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Abstimmung
            </p>

            <div className="mt-4 space-y-3">
              {result.votes.map((vote, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl bg-slate-950 px-4 py-3"
                >
                  <span className="font-semibold">
                    {vote.voterName}
                  </span>

                  <span className="text-slate-500">
                    →
                  </span>

                  <span className="font-bold text-red-400">
                    {vote.votedPlayerName}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {error && (
            <p className="mt-4 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            onClick={returnToLobby}
            className="mt-8 w-full rounded-2xl bg-emerald-500 px-6 py-5 font-bold text-white transition hover:scale-[1.02]"
          >
            🏠 Zurück zur Lobby
          </button>
        </div>
      </div>
    </main>
  );
}

  if (!votingStarted) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
          <div className="mb-6 text-center">
  <span className="inline-block rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-bold text-slate-300">
    {categoryNames[category] || category}
  </span>
</div>

          {!roleRevealed ? (
  <div className="text-center">
    <div className="text-8xl">🔒</div>

    <h1 className="mt-6 text-3xl font-black">
      Deine Rolle ist verdeckt
    </h1>

    <p className="mt-3 text-slate-400">
      Drücke erst auf den Button, wenn niemand auf deinen Bildschirm schaut.
    </p>

    <button
      onClick={() => setRoleRevealed(true)}
      className="mt-8 w-full rounded-2xl bg-white px-6 py-5 font-bold text-slate-950 transition hover:scale-[1.02]"
    >
      👁️ Rolle anzeigen
    </button>
  </div>
) : (
  <>
          {role?.type === "character" &&
  role.character && (
    <div className="text-center">
      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
        <CharacterImage
          character={role.character}
          category={category}
        />
      </div>

      <p className="mt-8 text-sm uppercase tracking-widest text-slate-400">
        Deine Figur
      </p>

      <h1 className="mt-4 text-4xl font-black">
        {role.character}
      </h1>
    </div>
  )}

          {role?.type ===
            "imposter" && (
            <div className="text-center">
              <div className="mx-auto flex h-72 w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
                <div className="text-9xl">
                  ❓
                </div>
              </div>

              <p className="mt-8 text-sm uppercase tracking-widest text-red-400">
                Achtung
              </p>

              <h1 className="mt-4 text-4xl font-black">
                DU BIST DER IMPOSTER
              </h1>

              <div className="mt-8 rounded-2xl bg-slate-900 p-6">
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Dein Tipp
                </p>

                <p className="mt-3 text-xl font-bold text-slate-300">
                  {role.tip}
                </p>
              </div>
              <div className="mt-5 rounded-2xl border border-red-900 bg-red-950/20 p-5">
  <p className="text-sm font-bold text-red-400">
    🎯 Du kennst die Figur?
  </p>

  <p className="mt-2 text-xs text-slate-400">
    Wenn du dir sicher bist, kannst du die Figur direkt erraten.
  </p>

  <select
    value={imposterGuess}
    onChange={(e) => setImposterGuess(e.target.value)}
    disabled={guessLocked || submittingGuess}
    className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white disabled:cursor-not-allowed disabled:opacity-40"
  >
    <option value="">Figur auswählen...</option>

    {availableCharacters.map((character) => (
      <option key={character} value={character}>
        {character}
      </option>
    ))}
  </select>
  <button
  onClick={submitImposterGuess}
  disabled={!imposterGuess || submittingGuess || guessLocked}
  className="mt-4 w-full rounded-xl bg-red-500 px-4 py-3 font-bold text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-40"
>
  {guessLocked
    ? "🗳️ Abstimmung hat begonnen"
    : submittingGuess
      ? "Tipp wird geprüft..."
      : "🎯 Figur einloggen"}
</button>
</div>
            </div>
          )}


  <SpyQuestionRounds
    roundId={roundId}
    playerId={playerId}
    players={players}
    onVotingStart={setVotingStarted}
  />
</>
)}

        </div>
      </main>
    );
  }

  if (!voted) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-md px-6 py-10">
          <div className="mb-6 text-center">
  <span className="inline-block rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-bold text-slate-300">
    {categoryNames[category] || category}
  </span>
</div>
          <div className="text-center">
            <div className="text-6xl">
              🕵️
            </div>

            <h1 className="mt-5 text-3xl font-black">
              Wer ist der Spion?
            </h1>

            <p className="mt-3 text-slate-400">
              Jeder Spieler gibt jetzt
              seine Stimme ab.
            </p>
          </div>

          {error && (
            <div className="mt-5 rounded-2xl border border-red-900 bg-red-950/40 p-4">
              <p className="text-center text-sm text-red-300">
                {error}
              </p>
            </div>
          )}

          <div className="mt-8 space-y-3">
            {players.map((player) => (
              <button
                key={player.id}
                disabled={
  submittingVote ||
  player.id === playerId
}
                onClick={() =>
                  setSelectedPlayer(
                    player.id
                  )
                }
                className={`w-full rounded-2xl border px-5 py-5 text-left font-bold transition ${
  player.id === playerId
    ? "cursor-not-allowed border-slate-800 bg-slate-950 text-slate-600"
    : selectedPlayer === player.id
      ? "border-emerald-400 bg-emerald-500/20"
      : "border-slate-700 bg-slate-900 hover:border-slate-500"
} disabled:opacity-70`}
              >
                {player.name}

                {player.id ===
                  playerId && (
                  <span className="ml-2 text-xs font-normal text-slate-500">
                    Du
                  </span>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={submitVote}
            disabled={
              !selectedPlayer ||
              submittingVote
            }
            className="mt-6 w-full rounded-2xl bg-red-500 px-6 py-5 font-bold disabled:cursor-not-allowed disabled:opacity-40"
          >
            {submittingVote
              ? "Stimme wird gespeichert..."
              : "🗳️ Abstimmen"}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">
        <div className="text-7xl">
          🗳️
        </div>

        <h1 className="mt-6 text-3xl font-black">
          Stimme abgegeben!
        </h1>

        <p className="mt-3 text-slate-400">
          Warte auf die anderen
          Spieler...
        </p>
      </div>
    </main>
  );
}