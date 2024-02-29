import react, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
    // console.log(event);
  }
  function handleSubmit() {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    }
  }
  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }
  return (
    <div>
      <ul>
        {todos.map((todoText, index) => (
          <li key={index}>
            {todoText}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Add Todo </button>
    </div>
  );
}
