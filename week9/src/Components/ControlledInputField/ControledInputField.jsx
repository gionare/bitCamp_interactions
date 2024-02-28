import React, { useState } from "react";

export default function ControledInputField() {
  const [text, setText] = useState("");
  function handleInput(event) {
    setText(event.target.value);
  }
  return (
    <div>
      <input type="text" onChange={handleInput} />
      <p>Input text: {text}</p>
    </div>
  );
}
