//html references

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const displayResult = document.getElementById("result");

const gameChoices = ["rock", "paper", "scissors"];

 // add event listener to the buttons
 rockBtn.addEventListener("click", () => playGame("rock"));
 paperBtn.addEventListener("click", () => playGame("paper"));
 scissorsBtn.addEventListener("click", () => playGame("scissors"));

 function playGame(playerChoice) {
     const oponentChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
     const result = getResult(playerChoice, oponentChoice);
     displayResult.innerHTML = `You chose ${playerChoice}. Your opponent chose ${oponentChoice}. ${result}`;
 }

 //get result
 function getResult(playerChoice, oponentChoice) {
     if (playerChoice === oponentChoice) {
         return "It's a tie! Play again";
     } else if (
         (playerChoice === 'rock' && oponentChoice === 'scissors') ||
         (playerChoice === 'paper' && oponentChoice === 'rock') ||
         (playerChoice === 'scissors' && oponentChoice === 'paper')
     ) {
         return 'You win!';
     } else {
         return 'Oponent wins!';
     }
 }