import React, { useEffect, useState } from "react";
import "../App.css";
import { play } from "../play";
import Board from "./Board";
import Scores from "./Scores";

export type status = "PLAYER1" | "PLAYER2" | "DRAW" | "PENDING";
export type moves = number[][];

export default function Game() {
  const [moves, setMoves] = useState<moves>([]);
  const [status, setStatus] = useState<status>("PENDING");
  const [games, setGames] = useState<number>(1);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);

  useEffect(() => setStatus(play(moves)), [moves]);
  useEffect(() => {
    if (status === "PLAYER1") {
      setPlayer1Wins(player1Wins + 1);
    } else if (status === "PLAYER2") {
      setPlayer2Wins(player2Wins + 1);
    }
  }, [status]);

  function handleRestart(): void {
    setMoves([]);
    setStatus("PENDING");
    setGames(1);
    setPlayer1Wins(0);
    setPlayer2Wins(0);
  }

  function handleContinue(): void {
    setMoves([]);
    setStatus("PENDING");
    setGames(games + 1);
  }

  return (
    <div className="game-container">
      {status !== "PENDING" && (
        <div className="modal-container">
          <div className="modal">
            <div className="status-container">
              <div className="modal-score">
                <p>Player1</p>
                <p>{player1Wins}</p>
              </div>
              <div className="modal-score">
                <p>Games</p>
                <p>{games}</p>
              </div>
              <div className="modal-score">
                <p>Player2</p>
                <p>{player2Wins}</p>
              </div>
            </div>
            <p>
              Do you want to play
              <br />
              ANOTHER ROUND or RESTART?
            </p>
            <div className="button-container">
              <button
                type="button"
                className="another-round"
                onClick={handleContinue}
              >
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
      <Scores
        moves={moves}
        games={games}
        player1Wins={player1Wins}
        player2Wins={player2Wins}
      />
    </div>
  );
}
