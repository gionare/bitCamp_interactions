import React, { useState } from "react";

export default function ColorSwitcher() {
  const [bgColor, setBgColor] = useState("");

  function handleColorChange(event) {
    setBgColor(event.target.value);
  }

  return (
    <div>
      <label htmlFor="color-select">Colors:</label>
      <select name="Colors" id="color-select" onChange={handleColorChange}>
        <option value="">--Please choose an option--</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
      </select>
      <div
        style={{ backgroundColor: bgColor, width: "150px", height: "50px" }}
      ></div>
    </div>
  );
}
