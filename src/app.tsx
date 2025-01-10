import { Gallery } from "./components/gallery";

export function App() {
  return (
    <div>
      <header>
        <h1>Task Management</h1>
      </header>

      <p className="read-the-docs">Application to manage tasks. </p>

      <Gallery />
    </div>
  );
}
