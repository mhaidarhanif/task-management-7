import { type TaskItem } from "../types/task";
import { TaskListItem } from "./task-list-item";

type TaskItemsProps = {
  taskItems: TaskItem[];
};

export function TaskList({ taskItems }: TaskItemsProps) {
  return (
    <ul>
      {taskItems.map((taskItem) => {
        return (
          <TaskListItem
            key={taskItem.id}
            text={taskItem.text}
            isCompleted={taskItem.isCompleted}
          />
        );
      })}
    </ul>
  );
}
