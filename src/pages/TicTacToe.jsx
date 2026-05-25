import { useState } from "react";
import Navbar from "../components/Navbar";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");

  const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  const checkWinner = (newBoard) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(`${newBoard[a]} Wins`);
      }
    }
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;

    setBoard(newBoard);

    checkWinner(newBoard);

    setTurn(turn === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setWinner("");
    setTurn("X");
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      <h1 className="text-5xl text-center font-bold mt-10">
        Tic Tac Toe
      </h1>

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-3 gap-4">
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="w-28 h-28 bg-orange-400 text-5xl font-bold text-black rounded-xl hover:scale-105 duration-300"
            >
              {cell}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center mt-10 text-3xl font-bold">
        {winner ? winner : `Turn : ${turn}`}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={resetGame}
          className="bg-cyan-500 px-8 py-4 rounded-xl text-xl font-bold hover:bg-cyan-600"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;