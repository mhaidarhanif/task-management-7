import { type Task } from "../types/task";
import { TaskListItem } from "./task-list-item";

type TaskItemsProps = {
  taskItems: Task[];
};

export function TaskList({ taskItems }: TaskItemsProps) {
  return (
    <ul className="space-y-2">
      {taskItems.map((taskItem) => {
        return (
          <li key={taskItem.id}>
            <TaskListItem taskItem={taskItem} />
          </li>
        );
      })}
    </ul>
  );
}
