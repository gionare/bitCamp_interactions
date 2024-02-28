import react, { useState } from "react";

export default function ToogleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }
  return (
    <div>
      <button onClick={handleToggleVisibility}>Show/Hide Text</button>
      {isVisible && <p>Toogle me! </p>}
    </div>
  );
}
