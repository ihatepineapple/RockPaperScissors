import React from "react";
import { Link } from "react-router-dom";

function Play({ setMyPlay }) {
  const setChoice = (e) => {
    console.log(e.target.dataset.id);
    setMyPlay(e.target.dataset.id);
  };

  return (
    <div>
      <Link to="/game">
        <div data-id="paper" onClick={setChoice} className="icon icon--paper">
          Paper
        </div>
      </Link>
      <Link to="/game">
        <div
          data-id="scissors"
          onClick={setChoice}
          className="icon icon--scissors"
        >
          Scissors
        </div>
      </Link>
      <Link to="/game">
        <div data-id="rock" onClick={setChoice} className="icon icon--rock">
          Rock
        </div>
      </Link>
    </div>
  );
}

export default Play;
