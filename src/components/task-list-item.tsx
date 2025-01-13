import { Task } from "../types/task";

type TaskItemProps = {
  taskItem: Task;
};

export function TaskListItem({ taskItem }: TaskItemProps) {
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
    </div>
  );
}
