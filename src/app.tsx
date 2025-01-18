import { useState } from "react";
import { TaskList } from "./components/task-list";
import { Task } from "./types/task";

const taskItems: Task[] = [
  { id: 1, text: "Makan malam", isCompleted: true, date: new Date() },
  { id: 2, text: "Tidur", isCompleted: false, date: new Date() },
  { id: 3, text: "Bangun", isCompleted: false, date: new Date() },
];

export function App() {
  return (
    <div className="flex justify-center">
      <div className="space-y-8">
        <main className="space-y-5">
          <header>
            <h1 className="text-3xl font-bold text-blue-700 underline">
              Task Management
            </h1>
          </header>

          <p className="read-the-docs">Application to manage tasks. </p>

          <TaskList taskItems={taskItems} />
        </main>

        <div>
          <ButtonCounter />
        </div>
      </div>
    </div>
  );
}

function ButtonCounter() {
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
