import { TaskList } from "./components/task-list";

const taskItems = [
  { id: 1, text: "Makan malam", isCompleted: true },
  { id: 2, text: "Tidur", isCompleted: false },
  { id: 3, text: "Bangun", isCompleted: false },
];

export function App() {
  return (
    <div>
      <header>
        <h1>Task Management</h1>
      </header>

      <p className="read-the-docs">Application to manage tasks. </p>

      <TaskList taskItems={taskItems} />
    </div>
  );
}
