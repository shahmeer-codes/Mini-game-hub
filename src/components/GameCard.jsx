import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 duration-300">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl font-bold text-gray-800">
          {game.title}
        </h2>

        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl text-sm font-bold">
          Game
        </div>
      </div>

      <p className="text-gray-600 text-lg mb-8">
        {game.description}
      </p>

      <Link
        to={game.path}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold inline-block duration-300"
      >
        Play Now
      </Link>
    </div>
  );
}

export default GameCard;