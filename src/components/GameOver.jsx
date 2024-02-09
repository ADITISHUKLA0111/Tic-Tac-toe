// export default function GameOver({ winner }) {
//   return (
//     <div id="game-over">
//       <h2>Game Over !</h2>
//       <p>{winner} won !</p>
//       <p>
//         <Button>Rematch !</Button>
//       </p>
//     </div>
//   );
// }
export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      {winner && <p>{winner} won </p>}
      {!winner && <p>It's a draw </p>}
      {/*if winner is set show winner won
      if winner is not set meaning winner is null show
      Draw */}
      <h2>
        <button onClick={onRestart}>Rematch !</button>
      </h2>
    </div>
  );
}
