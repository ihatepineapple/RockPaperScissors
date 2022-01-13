import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Play from "./components/Play.js";
import Game from "./components/Game.js";

import "./App.css";

function App() {
  const [myPlay, setMyPlay] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <div>
        <Header score={score} />
        <Routes>
          <Route exact path="/" element={<Play setMyPlay={setMyPlay} />} />
          <Route
            exact
            path="/game"
            element={<Game myPlay={myPlay} score={score} setScore={setScore} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
