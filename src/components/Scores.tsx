import React from "react";
import "../App.css";

interface ScoresProp {
  moves: number[][];
  games: number;
  player1Wins: number;
  player2Wins: number;
}

export default function Scores({
  moves,
  games,
  player1Wins,
  player2Wins,
}: ScoresProp) {
  return (
    <div className="scores-container">
      <div
        className={`score player1 ${moves.length % 2 === 0 ? "current" : ""}`}
      >
        <h2>Player1(X)</h2>
        <p>{player1Wins}</p>
      </div>
      <div className="score game-count">
        <h2>Games</h2>
        <p>{games}</p>
      </div>
      <div
        className={`score player2 ${moves.length % 2 === 1 ? "current" : ""}`}
      >
        <h2>Player2(O)</h2>
        <p>{player2Wins}</p>
      </div>
    </div>
  );
}
