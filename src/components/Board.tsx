import React, { useState } from "react";
import "../App.css";
import { moves } from "./Game";

interface BoardProps {
  moves: moves;
  setMoves: React.Dispatch<React.SetStateAction<number[][]>>;
}

export default function Board({ moves, setMoves }: BoardProps) {
  const [moves1, setMoves1] = useState<moves>([]);
  const [moves2, setMoves2] = useState<moves>([]);

  function handleClick(r: number, c: number) {
    if (moves.some((move) => move[0] === r && move[1] === c)) {
      return;
    }

    setMoves(moves.concat([[r, c]]));
    if (moves.length % 2 === 0) {
      setMoves1(moves1.concat([[r, c]]));
    } else {
      setMoves2(moves2.concat([[r, c]]));
    }
  }

  function isCellInMoves(r: number, c: number) {
    return moves.some((move) => move[0] === r && move[1] === c);
  }

  function isCellInMoves1(r: number, c: number) {
    return moves1.some((move) => move[0] === r && move[1] === c);
  }

  function isCellInMoves2(r: number, c: number) {
    return moves2.some((move) => move[0] === r && move[1] === c);
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
