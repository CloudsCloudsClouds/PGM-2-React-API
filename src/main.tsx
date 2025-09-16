import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ModelList from "./components/ModelList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ModelList />
  </StrictMode>,
);
