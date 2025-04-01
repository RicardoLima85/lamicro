import React from "react";
import { createRoot } from "react-dom/client";

import "./global/index.css";

import App from "./app";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
