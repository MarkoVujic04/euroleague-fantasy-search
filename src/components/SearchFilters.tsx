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
    { label: "All Teams", value: "ALL" },
    { label: "Real Madrid", value: "RMB" },
    { label: "FC Barcelona", value: "BAR" },
    { label: "Anadolu Efes", value: "EFS" },
    { label: "Olympiacos", value: "OLY" },
    { label: "Panathinaikos", value: "PAO" },
    { label: "Fenerbahçe", value: "FEN" },
    { label: "Bayern Munich", value: "BER" },
    { label: "Zalgiris Kaunas", value: "ZAL" },
    { label: "Virtus Bologna", value: "VIR" },
    { label: "Red Star Belgrade", value: "RED" },
    { label: "Paris", value: "PRS" },
  ];


  return (
    <div className="bg-card rounded-lg p-6 shadow-elevated border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <SelectContent
              position="popper"
              side="bottom"
              align="start"
              sideOffset={4}
              avoidCollisions={false}
              className="
                z-[1000]
                w-[--radix-select-trigger-width]
                max-h-60       
                overflow-y-auto 
                bg-orange-600/50
              "
            >
              {teams.map((t) => (
                <SelectItem key={t.value} value={t.value}>
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>

          </Select>
        </div>

      </div>
    </div>
  );
};