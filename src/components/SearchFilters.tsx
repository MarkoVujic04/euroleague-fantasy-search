import { Input } from "../components/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/select";
import { Label } from "../components/label";
import { Search } from "lucide-react";

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedTeam: string;
  onTeamChange: (value: string) => void;
}

export const SearchFilters = ({
  searchTerm,
  onSearchChange,
  selectedTeam,
  onTeamChange,
}: SearchFiltersProps) => {
  const teams = [
    "All Teams",
    "Real Madrid",
    "FC Barcelona",
    "Anadolu Efes",
    "CSKA Moscow",
    "Olympiacos",
    "Panathinaikos",
    "Fenerbahçe",
    "Bayern Munich",
    "Zalgiris Kaunas",
    "Virtus Bologna"
  ];

  return (
    <div className="bg-card rounded-lg p-6 shadow-elevated border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Search Input */}
        <div className="space-y-2">
          <Label htmlFor="search">Search Players</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              id="search"
              placeholder="Player name..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Team</Label>
          <Select value={selectedTeam} onValueChange={onTeamChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select team" />
            </SelectTrigger>
            <SelectContent>
              {teams.map((team) => (
                <SelectItem key={team} value={team}>
                  {team}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

      </div>
    </div>
  );
};