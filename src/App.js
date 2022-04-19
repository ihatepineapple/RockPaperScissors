import React, { useState } from "react";
import Header from "./components/Header.js";

import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <div>
        <Header score={score} />
        <div>
          <button>ROCK</button>
          <button>PAPER</button>
          <button>SCISSOR</button>
        </div>
      </div>
    </div>
  );
}

export default App;
