import { Card, CardContent } from "../components/card";
import { Button } from "../components/button";
import { Eye, Star } from "lucide-react";
import type { Player } from "../types/Player";

type PlayerCardProps = {
  player: Player;
  onViewDetails: (player: Player) => void;
  onAddToWatchlist?: (playerKey: string) => void; 
};

export const PlayerCard = ({ player, onViewDetails, onAddToWatchlist }: PlayerCardProps) => {
  const ppg = player.pts;
  const apg = player.ast;
  const rpg = player.trReb;

  return (
    <Card className="group relative overflow-hidden bg-gradient-card hover:shadow-player-card transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-bold text-lg text-foreground mb-1">{player.playerName}</h3>
            <p className="text-muted-foreground font-medium">{player.team}</p>
          </div>
          {onAddToWatchlist && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onAddToWatchlist(player.playerName)}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Add to watchlist"
            >
              <Star className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4 text-center">
          <div>
            <div className="text-lg font-bold text-foreground">{ppg.toFixed(1)}</div>
            <div className="text-xs text-muted-foreground">PPG</div>
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">{apg.toFixed(1)}</div>
            <div className="text-xs text-muted-foreground">APG</div>
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">{rpg.toFixed(1)}</div>
            <div className="text-xs text-muted-foreground">RPG</div>
          </div>
        </div>

        <Button onClick={() => onViewDetails(player)} className="w-full" variant="outline">
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};
