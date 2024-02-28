import react, { useState } from "react";

export default function TodoList() {
  return (
    <div>
      <input type="text" />
      <button>Submit</button>
      <ul>
        <p>Display Todos</p>
        {<li></li>}
      </ul>

      <button className="Delete Todo"> Delete </button>
    </div>
  );
}
