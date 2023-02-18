import React from "react";
import "../App.css";

export default function Board() {
  return (
    <div className="board-container">
      <div className="board">
        {[...Array(3)].map((_, r) => (
          <div key={r} className={`row ${r === 1 ? "middle-row" : ""}`}>
            {[...Array(3)].map((_, c) => (
              <div
                key={`${r}-${c}`}
                className={`cell ${c === 1 ? "middle-col" : ""}`}
              >
                {r === 1 && c === 1 ? "X" : r === 2 && c === 2 ? "O" : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
