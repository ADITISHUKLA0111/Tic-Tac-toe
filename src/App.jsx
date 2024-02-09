import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combination.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  // let gameBoard = initialGameBoard;
  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];
  for (const t of gameTurns) {
    const { square, player } = t;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner = null;

  for (let item of WINNING_COMBINATIONS) {
    let squareSymbols = [null, null, null];
    for (let i = 0; i < squareSymbols.length; i++) {
      squareSymbols[i] = gameBoard[item[i].row][item[i].column];
      console.log("squareSymbols");
      console.log(squareSymbols[i]);
    }
    let joinedLine = squareSymbols.join("");
    if (joinedLine === "XXX") {
      winner = "X";
    } else if (joinedLine === "OOO") {
      winner = "O";
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;
  //we have all the turns that we can possibly have and we dont have a winner.
  // hasDraw will have true or false value.

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      // in order to get rid of code duplication we can change this code to ->
      const currentPlayer = deriveActivePlayer(prevTurns);
      // let currentPlayer = "X";
      // if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      //   currentPlayer = "O";
      // }
      const udatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return udatedTurns;
    });
  }
  function handleRestart() {
    setGameTurns([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}

        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
