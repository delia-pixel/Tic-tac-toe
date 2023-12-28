import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);
  const handleEdition = () => {
    setIsEditing((editing) => !editing);
  };
  const handleChange = (event) => {
    setPlayerName((name) => event.target.value);
  };
  let actualPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    actualPlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {actualPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdition}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
