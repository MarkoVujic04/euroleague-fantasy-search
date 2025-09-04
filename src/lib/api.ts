import type { Player } from "../types/Player";

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

export async function fetchPlayers(params?: { team?: string; playerName?: string }) {
    const qs = new URLSearchParams();
    if (params?.team) qs.set("team", params.team);
    if (params?.playerName) qs.set("playerName", params.playerName);

    const res = await fetch(`${BASE_URL}/api/v1/players${qs.toString() ? `?${qs}` : ""}`);
    if (!res.ok) throw new Error(`Failed to fetch players (${res.status})`);
    const data: Player[] = await res.json();
    return data;
}
