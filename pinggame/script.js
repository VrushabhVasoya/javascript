"use strict";

const Player0 = document.querySelector(".player--0");
const Player1 = document.querySelector(".player--1");
const scorePlayer0 = document.querySelector("#score--0");
const scorePlayer1 = document.querySelector("#score--1");
const currentScorep0 = document.getElementById("current--0");
const currentScorep1 = document.getElementById("current--1");

const dice = document.querySelector(".dice");

const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newBtn = document.querySelector(".btn--new");

let scores, currentScore, activePlayer, playing;
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  currentScorep0.textContent = 0;
  currentScorep1.textContent = 0;
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  Player0.classList.remove("player--winner");
  Player0.classList.add("player--active");
  Player1.classList.remove("player--winner", "player--active");
};

init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  Player0.classList.toggle("player--active");
  Player1.classList.toggle("player--active");
};

rollBtn.addEventListener("click", function () {
  if (playing) {
    let diceNum = Math.trunc(Math.random() * 6 + 1);
    dice.src = `./images/dice-${diceNum}.png`;
    if (diceNum !== 1) {
      currentScore += diceNum;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

newBtn.addEventListener("click", init);
