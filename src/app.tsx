import { useState } from "react";
import { TaskList } from "./components/task-list";
import { Task } from "./types/task";

const initialTaskItems: Task[] = [
  { id: 1, text: "Makan malam", isCompleted: true, date: new Date() },
  { id: 2, text: "Tidur", isCompleted: false, date: new Date() },
  { id: 3, text: "Bangun", isCompleted: false, date: new Date() },
];

export function App() {
  const [taskItems, setTaskItems] = useState(initialTaskItems);

  function addTaskItem() {
    const newTaskItem = {
      id: taskItems[taskItems.length - 1].id + 1,
      text: "Tugas baru",
      isCompleted: false,
      date: new Date(),
    };

    const updatedTaskItems = [...taskItems, newTaskItem];

    setTaskItems(updatedTaskItems);
  }

  return (
    <div className="flex justify-center">
      <div className="space-y-8">
        <main className="space-y-5">
          <header>
            <h1 className="text-3xl font-bold text-blue-700 underline">
              Task Management
            </h1>
          </header>

          <p className="read-the-docs">{taskItems.length} tasks</p>

          <div>
            <button
              onClick={addTaskItem}
              className="rounded bg-blue-800 p-1 text-xs text-white"
            >
              Add Task
            </button>
          </div>

          <TaskList taskItems={taskItems} />
        </main>
      </div>
    </div>
  );
}
