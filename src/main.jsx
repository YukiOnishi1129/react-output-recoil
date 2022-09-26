import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { TodoPage } from "./pages/todo";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <TodoPage />
    </RecoilRoot>
  </React.StrictMode>
);
