import React from "react";
import { BrowserRouter } from "react-router-dom";
import PinPad from "./components/PinPad";

function App() {
  return (
    <BrowserRouter>
      <PinPad />
    </BrowserRouter>
  );
}

export default App;
