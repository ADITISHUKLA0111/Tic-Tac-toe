export default function Log({ turns }) {
  return (
    <>
      <ol id="log">
        {turns.map((i) => {
          return (
            <li>
              {i.player} selected {i.square.row},{i.square.col}
            </li>
          );
        })}
        {/* <li>
          {turns.length > 0 ? (
            <p>
              {/* {" "} */}
        {/* {turns[0].player} selected {turns[0].square.row},
              {turns[0].square.col}
            </p>
          ) : undefined}
        </li> */}
      </ol>
    </>
  );
}
