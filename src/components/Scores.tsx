import React from "react";
import "../App.css";

export default function Scores() {
  return (
    <div className="scores-container">
      <div className="score player1">
        <h2>Player1(X)</h2>
        <p>0</p>
      </div>
      <div className="score game-count">
        <h2>Games</h2>
        <p>0</p>
      </div>
      <div className="score player2">
        <h2>Player2(O)</h2>
        <p>0</p>
      </div>
    </div>
  );
}
