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
      <div className="space-y-5">
        <header>
          <h1 className="text-3xl font-bold text-blue-700 underline">
            Task Management
          </h1>
        </header>

        <p className="read-the-docs">Application to manage tasks. </p>

        <TaskList taskItems={taskItems} />
      </div>
    </div>
  );
}
