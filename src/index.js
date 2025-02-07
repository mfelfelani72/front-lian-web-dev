import React from "react";
import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import App from "./app/containers/app/App.js";
import "../styles/style.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </BrowserRouter>
);
