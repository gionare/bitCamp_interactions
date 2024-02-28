import { useState } from "react";

function CountIncrement() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleIncrement}>increase count</button>
      <p>count: {count}</p>
    </div>
  );
}

export default CountIncrement;
