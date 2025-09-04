import { useEffect, useMemo, useState } from "react";
import { SearchFilters } from "../components/SearchFilters";
import { PlayerCard } from "../components/PlayerCard";
import type { Player } from "../types/Player";
import { fetchPlayers } from "../lib/api";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const abort = new AbortController();
    async function load() {
      try {
        setLoading(true);
        setErr(null);
        const params = {
          team: selectedTeam !== "All Teams" ? selectedTeam : undefined,
          playerName: searchTerm || undefined,
        };
        const data = await fetchPlayers(params);
        setPlayers(data);
      } catch (e: any) {
        setErr(e?.message ?? "Failed to load players");
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => abort.abort();
  }, [searchTerm, selectedTeam]);

  const handleViewDetails = (p: Player) => {
    console.log("view", p.playerName);
  };

  const handleAddToWatchlist = (playerKey: string) => {
    console.log("watch", playerKey);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Your Next Fantasy Star
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Use filters to discover players that fit your strategy and budget
          </p>
        </div>

        <SearchFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedTeam={selectedTeam}
          onTeamChange={setSelectedTeam}
        />

        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground">
              {loading ? "Loading…" : `${players.length} Players Found`}
            </h3>
            {err && <span className="text-sm text-red-500">{err}</span>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {players.map((p) => (
              <PlayerCard
                key={p.playerName}
                player={p}
                onViewDetails={handleViewDetails}
                onAddToWatchlist={handleAddToWatchlist}
              />
            ))}
          </div>

          {!loading && !err && players.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground text-lg">
                No players found. Try adjusting your filters.
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
