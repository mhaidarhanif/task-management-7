import { Card } from "./components/card";

export function App() {
  return (
    <div>
      <header>
        <h1>Task Management</h1>
        <img src="/vite.svg" alt="Logo" />
      </header>

      <Card />
      <p className="read-the-docs">Application to manage tasks. </p>
    </div>
  );
}
