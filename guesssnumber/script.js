"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const checkGuessNumber = (tag) => {
  if (score > 1) {
    displayMessage(tag);
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".score").textContent = 0;
    displayMessage("You Lost the Game");
  }
};

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    displayMessage(" 😆 No Number!");
  } else if (guessNumber == secretNumber) {
    displayMessage(" 🤭 Correct Number ");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }
  } else if (guessNumber != secretNumber) {
    checkGuessNumber(guessNumber > secretNumber ? "To High" : " 🤭 To Low ");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start Guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#fff";
});
