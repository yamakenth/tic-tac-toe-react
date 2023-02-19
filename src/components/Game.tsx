import React, { useState } from "react";
import "../App.css";
import Board from "./Board";
import Scores from "./Scores";

export default function Game() {
  const [moves, setMoves] = useState<number[][]>([]);

  return (
    <div className="game-container">
      <Board moves={moves} setMoves={setMoves} />
      <Scores />
    </div>
  );
}
