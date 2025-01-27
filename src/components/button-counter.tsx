import { useState } from "react";
import { Button } from "@/components/ui/button";

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
      <Button onClick={handleIncrement}>Increment</Button>
    </div>
  );
}
