import React, { useState } from "react";
import Header from "./components/Header.js";
import store from "./store";
import { updateScore } from "./store/actions.js";

import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  // .then((data) => {
  //   // Tell the Redux store the data has been fetched
  //   store.dispatch(developersFetched(data));
  function playGame(event) {
    const options = ["rock", "paper", "scissors"];
    console.log(event.target.id);

    const randomPick = options[Math.floor(Math.random() * options.length)];
    console.log(randomPick);

    store.dispatch(updateScore(event.target.id, randomPick));
  }

  return (
    <div className="App">
      <div>
        <Header score={score} />
        <div>
          <button onClick={playGame} id="rock">
            ROCK
          </button>
          <button onClick={playGame} id="paper">
            PAPER
          </button>
          <button onClick={playGame} id="scissors">
            SCISSORS
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
