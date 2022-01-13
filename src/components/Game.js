import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ score, myPlay, setScore }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const [counter, setCounter] = useState(3);

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    if (myPlay === "rock" && house === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myPlay === "rock" && house === "paper") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myPlay === "scissors" && house === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myPlay === "scissors" && house === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myPlay === "paper" && house === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myPlay === "paper" && house === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
    Result();
  }, [house]);

  return (
    <div className="game">
      my choice:{myPlay} <br />
      House choice:{house} <br />
      Result:
      {playerWin === "win" && <h2>You Win</h2>}
      {playerWin === "lose" && <h2>You lose</h2>}
      {playerWin === "draw" && <h2>Draw</h2>}
      <Link to="/" onClick={() => setHouse()}>
        Play Again
      </Link>
    </div>
  );
};

export default Game;
