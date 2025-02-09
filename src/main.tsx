import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

import { App } from "./app";
import { AboutRoute } from "./routes/about";
import { LayoutRoute } from "./routes/layout";
import { CounterRoute } from "./routes/counter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutRoute />}>
          <Route index path="/" element={<App />} />
          <Route path="about" element={<AboutRoute />} />
          <Route path="counter" element={<CounterRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
