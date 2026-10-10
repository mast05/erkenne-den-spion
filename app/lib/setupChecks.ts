import { supabase } from "./supabase";

export async function checkHostRoom(game: string) {
  const roomId = sessionStorage.getItem("roomId");
  const playerId = sessionStorage.getItem("playerId");
  if (!roomId || !playerId) throw new Error("Raum oder Spieler wurde nicht gefunden.");

  const { data: room, error: roomError } = await supabase
    .from("rooms").select("id").eq("id", roomId).eq("game", game).maybeSingle();
  if (roomError || !room) throw new Error("Dieser Raum gehört nicht zu diesem Spiel.");

  const { data: player, error: playerError } = await supabase
    .from("players").select("is_host").eq("id", playerId).eq("room_id", roomId).maybeSingle();
  if (playerError || !player?.is_host) throw new Error("Nur der Host darf das Spiel starten.");

  const { count, error: countError } = await supabase
    .from("players").select("id", { count: "exact", head: true }).eq("room_id", roomId);
  if (countError || count === null) throw new Error("Die Spielerzahl konnte nicht geprüft werden.");
  if (count < 2 || count > 3) throw new Error("Es müssen 2 oder 3 Spieler im Raum sein.");

  return roomId;
}
