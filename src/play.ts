import { status, moves } from "./components/Game";

export function play(moves: moves): status {
  const rows = Array(3).fill(0);
  const cols = Array(3).fill(0);
  let pos = 0;
  let neg = 0;

  for (let i = 0; i < moves.length; i += 2) {
    // Player1's turn
    let [r, c] = moves[i];
    rows[r] += 1;
    cols[c] += 1;
    if (r + c === 2) {
      pos += 1;
    }
    if (r - c === 0) {
      neg += 1;
    }

    if (rows[r] === 3 || cols[c] === 3 || pos === 3 || neg === 3) {
      return "PLAYER1";
    }

    if (i + 1 === moves.length) {
      break;
    }

    // Player1's turn
    [r, c] = moves[i + 1];
    rows[r] -= 1;
    cols[c] -= 1;
    if (r + c === 2) {
      pos -= 1;
    }
    if (r - c === 0) {
      neg -= 1;
    }

    if (rows[r] === -3 || cols[c] === -3 || pos === -3 || neg === -3) {
      return "PLAYER2";
    }
  }

  return moves.length < 9 ? "PENDING" : "DRAW";
}
