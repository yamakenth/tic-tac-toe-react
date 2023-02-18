import React from "react";
import "../App.css";
import Board from "./Board";
import Scores from "./Scores";

export default function Game() {
  return (
    <div className="game-container">
      <Board />
      <Scores />
    </div>
  );
}
