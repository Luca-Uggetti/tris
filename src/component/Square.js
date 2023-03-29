import React from "react";

export default function Square({ value, chooseSquare }) {
  return (
    <div
      onClick={chooseSquare}
      style={{
        flex: "33%",
        height: "100%",
        border: "1px solid white",
        display: "grid",
        placeItems: "center",
        fontSize: "30px",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {value}
    </div>
  );
}
