import React, { useEffect, useState } from "react";
import "../App.css";
import { play } from "../play";
import Board from "./Board";
import Scores from "./Scores";

export type status = "PLAYER1" | "PLAYER2" | "DRAW" | "PENDING";
export type moves = number[][];

export default function Game() {
  const [moves, setMoves] = useState<moves>([]);
  const [status, setStatus] = useState<status>();

  useEffect(() => setStatus(play(moves)), [moves]);

  function handleRestart() {
    setMoves([]);
    setStatus("PENDING");
  }

  return (
    <div className="game-container">
      {status !== "PENDING" && (
        <div className="modal-container">
          <div className="modal">
            <div className="status-container">
              <div className="modal-score">
                <p>Player1</p>
                <p>0</p>
              </div>
              <div className="modal-score">
                <p>Games</p>
                <p>0</p>
              </div>
              <div className="modal-score">
                <p>Player2</p>
                <p>0</p>
              </div>
            </div>
            <p>
              Do you want to play
              <br />
              ANOTHER ROUND or RESTART?
            </p>
            <div className="button-container">
              <button type="button" className="another-round">
                ANOTHER ROUND
              </button>
              <button type="button" className="restart" onClick={handleRestart}>
                RESTART
              </button>
            </div>
          </div>
        </div>
      )}
      <Board moves={moves} setMoves={setMoves} />
      <Scores moves={moves} />
    </div>
  );
}
