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
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="text-center pt-14">
        <h1 className="text-5xl font-bold">
          Welcome To Mini Game Hub
        </h1>

        <p className="text-slate-400 mt-5 text-lg">
          Play fun games and track scores.
        </p>
      </div>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Home;