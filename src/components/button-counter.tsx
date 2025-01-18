import { useState } from "react";

export function ButtonCounter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    const newCount = count + 1;
    setCount(newCount);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button
        onClick={handleIncrement}
        className="rounded bg-green-800 p-1 text-xs text-white"
      >
        Increment
      </button>
    </div>
  );
}
