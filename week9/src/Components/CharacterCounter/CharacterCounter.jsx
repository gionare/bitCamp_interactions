import react, { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState();
  function handleTextareaChange(event) {
    setText(event.target.value);
  }
  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextareaChange}
        defaultValue="Count Characters!"
      />
      <p> Charaqter Count is: {text?.length} </p>
    </div>
  );
}
