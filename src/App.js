import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Play from "./components/Play.js";

import "./App.css";

function App() {
  const [myPlay, setMyPlay] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <div>
        <Header score={score} />
        <Routes>
          <Route exact path="/">
            <Play setMyPlay={setMyPlay} />
          </Route>

          <Route exact path="/game"></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
