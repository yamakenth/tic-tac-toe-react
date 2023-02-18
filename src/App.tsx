import React from "react";
import "./App.css";
import Game from "./components/Game";

export default function App() {
  return (
    <div className="App">
      <div className="header-container">
        <h1>Tic-Tac-Toe</h1>
      </div>
      <Game />
    </div>
  );
}
