import React from "react";
import "../App.css";
import { moves } from "./Game";

interface BoardProps {
  moves: moves;
  setMoves: React.Dispatch<React.SetStateAction<number[][]>>;
}

export default function Board({ moves, setMoves }: BoardProps) {
  function handleClick(r: number, c: number) {
    if (moves.some((move) => move[0] === r && move[1] === c)) {
      return;
    }

    setMoves(moves.concat([[r, c]]));
  }

  function isCellInMoves(r: number, c: number): boolean {
    return moves.some((move) => move[0] === r && move[1] === c);
  }

  function isCellInMoves1(r: number, c: number): boolean {
    return moves.some(
      (move, i) => move[0] === r && move[1] === c && i % 2 === 0
    );
  }

  function isCellInMoves2(r: number, c: number): boolean {
    return moves.some(
      (move, i) => move[0] === r && move[1] === c && i % 2 === 1
    );
  }

  return (
    <div className="board-container">
      <div className="board">
        {[...Array(3)].map((_, r) => (
          <div key={r} className={`row ${r === 1 ? "middle-row" : ""}`}>
            {[...Array(3)].map((_, c) => (
              <div
                key={`${r}-${c}`}
                className={`
                  cell 
                  ${c === 1 ? "middle-col" : ""}
                  ${isCellInMoves(r, c) ? "disabled" : ""}
                `}
                onClick={() => handleClick(r, c)}
              >
                {isCellInMoves1(r, c) ? "X" : isCellInMoves2(r, c) ? "O" : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
