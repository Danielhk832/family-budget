import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NextUiProvider } from "@nextui-org/react";

ReactDOM.render(
  <NextUiProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NextUiProvider>,
  document.getElementById("root")
);
