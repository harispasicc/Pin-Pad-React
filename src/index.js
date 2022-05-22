import React from "react";
// import { render } from "react-dom";
import "./index.css";
import App from "./App";

// render(<App />, document.getElementById("root"));

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
