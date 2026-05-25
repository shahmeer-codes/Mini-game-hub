import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:scale-105 duration-300 shadow-lg">
      <h2 className="text-2xl font-bold text-cyan-400 mb-3">
        {game.title}
      </h2>

      <p className="text-slate-300 mb-6">
        {game.description}
      </p>

      <Link
        to={game.path}
        className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl font-bold"
      >
        Play Game
      </Link>
    </div>
  );
}

export default GameCard;