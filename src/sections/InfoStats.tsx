import { TrendingUp, Trophy } from "lucide-react";

export const InfoStats = () => {
    return <section className="py-16 bg-[#d1cece]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600/50 rounded-lg">
                <Trophy className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">18</h3>
              <p className="text-muted-foreground">EuroLeague Teams</p>
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Real-time</h3>
              <p className="text-muted-foreground">Stats Updates</p>
            </div>
          </div>
        </div>
      </section>
}