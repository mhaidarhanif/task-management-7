import { Task } from "@/types/task";

export const initialTaskItems: Task[] = [
  { id: 1, text: "Makan malam", isCompleted: true, date: new Date() },
  { id: 2, text: "Tidur", isCompleted: false, date: new Date() },
  { id: 3, text: "Bangun", isCompleted: false, date: new Date() },
];
