import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RockPaperScissor from "./pages/RockPaperScissor";
import TicTacToe from "./pages/TicTacToe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rock-paper-scissor" element={<RockPaperScissor />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;