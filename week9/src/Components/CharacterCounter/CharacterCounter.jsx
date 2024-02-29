import React, { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState();
  function handleTextareaChange(event) {
    setText(event.target.value);
  }
  return (
    <div>
      <textarea
        value={text}
        style={{ width: "250px", height: "70px" }}
        onChange={handleTextareaChange}
        // defaultValue=""
        placeholder="input Characters! to count"
      />
      <p> Charaqter Count is: {text?.length} </p>
    </div>
  );
}
