import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ score, myPlay, setScore }) => {

  const choices = ["rock", "paper", "scissors"];

const handleClick = (e) => {
  getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
}
choices.forEach(choice => {
  const button = document.createElement('button')
  button.innerHTML = choice
  button.addEventListener('click', handleClick)
  choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':

      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':

      break
    case 'scissorsscissors':
    case 'rockrock':
    case 'paperpaper':

      break
  }
}

  
  return (

  );
};

export default Game;
