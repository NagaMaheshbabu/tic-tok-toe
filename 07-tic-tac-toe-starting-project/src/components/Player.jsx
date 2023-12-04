import { useState } from "react";
export default function Player({ name, symbol }) {
  const [PlayerName, updatedName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function clickHandler() {
    setIsEditing((isEditing) => !isEditing);
  }
  function handleChange(event) {
    updatedName(event.target.value);
  }
  let initialName = <span className="player-name">{PlayerName}</span>;
  if (isEditing) {
    initialName = (
      <input type="text" required value={PlayerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {initialName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
