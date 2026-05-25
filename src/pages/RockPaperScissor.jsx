import { useState } from "react";
import Navbar from "../components/Navbar";

import rock from "../assets/games/rock.png";
import paper from "../assets/games/paper.jpg";
import sizzer from "../assets/games/sizzer.jpg";

function RockPaperScissor() {
  const [userScore, setUserScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);
  const [status, setStatus] = useState("Choose your move");

  const choices = ["rock", "paper", "sizzer"];

  const playGame = (userChoice) => {
    const computerChoice =
      choices[Math.floor(Math.random() * 3)];

    if (userChoice === computerChoice) {
      setStatus("Draw Match");
      return;
    }

    if (
      (userChoice === "rock" && computerChoice === "sizzer") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "sizzer" && computerChoice === "paper")
    ) {
      setUserScore(userScore + 1);
      setStatus(`You Win! Computer selected ${computerChoice}`);
    } else {
      setPcScore(pcScore + 1);
      setStatus(`You Lose! Computer selected ${computerChoice}`);
    }
  };

  return (
    <div className="min-h-screen bg-pink-200 text-black">
      <Navbar />

      <h1 className="text-5xl text-center font-bold mt-10">
        Rock Paper Scissor
      </h1>

      <div className="flex justify-center gap-10 mt-16 flex-wrap">
        <button onClick={() => playGame("rock")}>
          <img
            src={rock}
            className="w-40 h-40 rounded-full border-4 border-black hover:scale-110 duration-300"
          />
        </button>

        <button onClick={() => playGame("paper")}>
          <img
            src={paper}
            className="w-40 h-40 rounded-full border-4 border-black hover:scale-110 duration-300"
          />
        </button>

        <button onClick={() => playGame("sizzer")}>
          <img
            src={sizzer}
            className="w-40 h-40 rounded-full border-4 border-black hover:scale-110 duration-300"
          />
        </button>
      </div>

      <div className="flex justify-center gap-20 mt-16 text-3xl font-bold">
        <div>You : {userScore}</div>
        <div>Computer : {pcScore}</div>
      </div>

      <div className="flex justify-center mt-14">
        <div className="bg-black text-white px-8 py-4 rounded-xl text-xl">
          {status}
        </div>
      </div>
    </div>
  );
}

export default RockPaperScissor;