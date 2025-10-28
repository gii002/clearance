import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ClearanceProvider } from "./context/ClearanceContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClearanceProvider>
      <App />
    </ClearanceProvider>
  </React.StrictMode>
);
