import { Button } from "../components/button";
import heroImage from "../assets/images/newHero.jpg";
import { Search, Trophy } from "lucide-react";


export const Hero = () => {
    return <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
            className="absolute inset-0 bg-cover sm:bg-[center_20%] md:bg-[center_25%] lg:bg-[center_20%] opacity-85"
            style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-orange-600/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                EuroLeague Fantasy Search
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Discover, analyze, and track the best EuroLeague players for your fantasy team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 text-white font-bold hover:cursor-pointer">
                    <Search className="h-5 w-5 mr-2" />
                    Start Searching
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white font-bold hover:bg-white/20 hover:cursor-pointer">
                    <Trophy className="h-5 w-5 mr-2" />
                    Learn More
                </Button>
            </div>
        </div>
    </section>
};