import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import GameCard from "../components/GameCard";
import games from "../data/gamesData";

function Home() {
  const [search, setSearch] = useState("");

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-200 text-black">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 pt-20">
        <h1 className="text-6xl font-bold text-gray-900">
          Welcome to
          <span className="text-blue-600"> Mini Game Hub</span>
        </h1>

        <p className="text-gray-600 text-lg mt-6 max-w-2xl">
          Play fun browser games, track scores, and enjoy a
          clean modern gaming experience built with React and
          Tailwind CSS.
        </p>

        <div className="mt-10 w-full">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>

      {/* Games Section */}
      <div className="px-8 md:px-20 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Available Games
          </h2>

          <div className="bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold shadow-lg">
            {filteredGames.length} Games
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-300 py-6 text-center text-gray-600">
        Mini Game Hub © 2026
      </footer>
    </div>
  );
}

export default Home;