import "./App.css";
import { useState } from "react";
import CountIncrement from "./Components/CounterIncrease/CounterIncrease";
import ControledInputField from "./Components/ControlledInputField/ControledInputField";
import ToogleVisibility from "./Components/ToogleVisible/ToogleVisible";
import CharacterCounter from "./Components/CharacterCounter/CharacterCounter";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  return (
    <>
      <CountIncrement />
      <ControledInputField />
      <ToogleVisibility />
      <CharacterCounter />
      <TodoList />{" "}
    </>
  );
}

export default App;
