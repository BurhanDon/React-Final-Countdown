import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  function handleClick() {
    const inputName = playerName.current.value.trim();
    if (inputName) {
      setEnteredPlayerName(inputName);
      playerName.current.value = "";
    }
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Unknown Player"}</h2>
      <p>
        <input placeholder="Enter Name" type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
