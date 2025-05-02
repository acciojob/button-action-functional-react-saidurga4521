import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [value, setvalue] = useState("");
  const display = () => {
    setvalue(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  };
  return (
    <div id="main">
      <button id="click" onClick={display}>
        Click
      </button>
      <p id="para">{value}</p>
    </div>
  );
}

export default App;
