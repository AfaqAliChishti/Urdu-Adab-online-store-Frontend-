import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import BookProvider from "./context/BookContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BookProvider>
  </React.StrictMode>
);
