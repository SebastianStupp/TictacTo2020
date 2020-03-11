import React from "react";
import Square from "./Square";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const [firstIndex, secondIndex, thirdIndex] = lines[lineIndex];
    const firstSquare = squares[firstIndex];
    const secondSquare = squares[secondIndex];
    const thirdSquare = squares[thirdIndex];

    if (
      firstSquare === secondSquare &&
      secondSquare === thirdSquare &&
      firstSquare !== null
    ) {
      return firstSquare;
    }
  }
  return null;
}

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [turn, setTurn] = React.useState(true);

  const playerWins = turn ? "O" : "X";
  const nextPlayer = !calculateWinner(squares)
    ? "Next Player"
    : "Following Player Wins:";

  const player = turn ? "X" : "O";
  const status = calculateWinner(squares)
    ? `${nextPlayer} ${player}`
    : `${nextPlayer} ${playerWins}`;

  // if (calculateWinner(squares)) {
  //   nextPlayer = "Following Player Wins:";
  // }

  function handleClick(squareIndex) {
    const squaresCopy = squares.slice();
    if (squaresCopy[squareIndex] === null) {
      if (!calculateWinner(squares)) {
        squaresCopy[squareIndex] = player;
        setTurn(!turn);
        setSquares(squaresCopy);
      } else {
        alert("Spiel vorbei");
      }
    }
  }
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
