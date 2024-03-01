import "./App.css";
import "./index.css";
import { useState } from "react";
import CountIncrement from "./Components/CounterIncrease/CounterIncrease";
import ControledInputField from "./Components/ControlledInputField/ControledInputField";
import ToogleVisibility from "./Components/ToogleVisible/ToogleVisible";
import CharacterCounter from "./Components/CharacterCounter/CharacterCounter";
import TodoList from "./Components/TodoList/TodoList";
import ColorSwitcher from "./Components/ColorSwitcher/ColorSwitcher";
import SearchFilter from "./Components/SearchFilter/SearchFilter";
import DragDropList from "./Components/DragDropList/DragDropList";

function App() {
  return (
    <div className="card">
      <CountIncrement />
      <ControledInputField />
      <ToogleVisibility />
      <CharacterCounter />
      <TodoList />
      <ColorSwitcher />
      <SearchFilter />
      <DragDropList />
    </div>
  );
}

export default App;
