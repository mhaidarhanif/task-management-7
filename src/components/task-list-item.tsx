import { Task } from "../types/task";

type TaskItemProps = {
  taskItem: Task;
};

export function TaskListItem({ taskItem }: TaskItemProps) {
  function deleteTask() {
    console.log("Delete task");
  }

  return (
    <div className="flex gap-2">
      {taskItem.isCompleted && <span>✅</span>}
      {!taskItem.isCompleted && <span>▢</span>}

      <div>
        <p className="text-xl font-bold">{taskItem.text}</p>
        <p className="text-sm">
          <time>{taskItem.date.toDateString()}</time>
        </p>
      </div>

      <div className="flex items-center">
        <button
          onClick={deleteTask}
          className="rounded bg-red-800 p-1 text-xs text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
