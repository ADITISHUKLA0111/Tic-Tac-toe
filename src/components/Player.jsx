import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditting, setIsEditing] = useState(false);
  function handleEditClick() {
    // setIsEditing(!isEditting); -xyz
    //or setIsEditing(isEditting?false:true);

    //Note- xyz is not a great way to update state when state value is based on previous value

    //the right way is below->
    setIsEditing((isEditting) => !isEditting);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let btnCaption = "Edit";
  if (isEditting) {
    btnCaption = "save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditting ? (
          <input
            type="text"
            value={playerName}
            required
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
