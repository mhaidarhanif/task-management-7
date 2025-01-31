import { initialTaskItems } from "@/data/initial-task-items";
import { Task } from "@/types/task";

export function getTaskItemsStorage() {
  const storedTasks = localStorage.getItem("tasks");

  const parsedTasks = storedTasks ? JSON.parse(storedTasks) : initialTaskItems;

  const transformedTasks = parsedTasks.map((task: Task) => {
    return {
      ...task,
      date: new Date(task.date),
    };
  });

  return transformedTasks;
}

export function setTaskItemsStorage(tasks: Task[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
