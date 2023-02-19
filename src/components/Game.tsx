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

  return (
    <div className="game-container">
      <Board moves={moves} setMoves={setMoves} />
      <Scores moves={moves} />
      <p>{status}</p>
    </div>
  );
}
