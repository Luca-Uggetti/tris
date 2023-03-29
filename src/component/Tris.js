import React, { useState } from "react";
import Square from "./Square";

export const Tris = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const chooseSquare = (Square) => {
    setBoard(
      board.map((value, index) => {
        if (index === Square && value === "") {
          return player;
        }
        return value;
      })
    );
  };

  return (
    <div
      className="board"
      style={{
        width: "500px",
        height: "500px",
        backgroundColor: "black",
        border: "1px solid white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="row"
        style={{
          flex: "33%",
          display: "flex",
          flexDirection: "row",
          border: "2px solid white",
        }}
      >
        <Square value={board[0]} chooseSquare={() => chooseSquare(0)} />
        <Square value={board[1]} chooseSquare={() => chooseSquare(1)} />
        <Square value={board[2]} chooseSquare={() => chooseSquare(2)} />
      </div>
      <div
        className="row"
        style={{
          flex: "33%",
          display: "flex",
          flexDirection: "row",
          border: "2px solid white",
        }}
      >
        <Square value={board[3]} chooseSquare={() => chooseSquare(3)} />
        <Square value={board[4]} chooseSquare={() => chooseSquare(4)} />
        <Square value={board[5]} chooseSquare={() => chooseSquare(5)} />
      </div>
      <div
        className="row"
        style={{
          flex: "33%",
          display: "flex",
          flexDirection: "row",
          border: "2px solid white",
        }}
      >
        <Square value={board[6]} chooseSquare={() => chooseSquare(6)} />
        <Square value={board[7]} chooseSquare={() => chooseSquare(7)} />
        <Square value={board[8]} chooseSquare={() => chooseSquare(8)} />
      </div>
    </div>
  );
};
