// JavaScript code for the Rock, Paper, Scissors game

// Initialize variables for game state
let points = 0;
let computerPoints = 0;
let round = 1;
let totalScore = 0;
let timerInterval;
let countdownStarted = false;
let canPlay = true;
let timeLeft = 5;

// Function to update the timer
function updateTimer() {
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        endRound();
    } else {
        document.getElementById('time').textContent = timeLeft;
        timeLeft--;
    }
}

// Function to start the countdown timer
function startCountdown() {
    timeLeft = 5;
    countdownStarted = true;
    timerInterval = setInterval(updateTimer, 1000);
}

// Function to pause the countdown timer
function pauseCountdown() {
    clearInterval(timerInterval);
}

// Function to enable move buttons
function enableMoveButtons() {
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
}

// Function to disable move buttons
function disableMoveButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

// Function to handle player's move
function playGame(playerChoice) {
    if (!canPlay) {
        return;
    }

    pauseCountdown();
    disableMoveButtons();

    timeLeft = 5;

    canPlay = false;

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = getResult(playerChoice, computerChoice);

    document.getElementById('result').innerHTML = `You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`;

    let playerScore = 0;
    let computerScore = 0;

    if (result === 'You win!') {
        playerScore = 10;
        computerScore = 0;
    } else if (result === "It's a tie!") {
        playerScore = 5;
        computerScore = 5;
    } else {
        playerScore = 0;
        computerScore = 10;
    }

    points += playerScore;
    totalScore += playerScore;
    computerPoints += computerScore;

    const newRow = document.getElementById('scoreTable').insertRow();
    newRow.insertCell().textContent = round;
    newRow.insertCell().textContent = playerChoice;
    newRow.insertCell().textContent = computerChoice;
    newRow.insertCell().textContent = result;
    newRow.insertCell().textContent = playerScore;
    newRow.insertCell().textContent = computerScore;

    round++;

    if (round > 12) {
        endGame();
    } else {
        startCountdown();
        enableMoveButtons();
    }
}

// Function to determine the round result
function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        computerPoints += 10;
        return 'Computer wins!';
    }
}

// Function to end the current round
function endRound() {
    countdownStarted = false;
    canPlay = true;

    if (round <= 12) {
        startCountdown();
        enableMoveButtons();
    } else {
        endGame();
    }
}

// Function to end the game
function endGame() {
    document.getElementById('result').textContent = 'Game over!';
    document.getElementById('timer').textContent = 'Game Over';
    disableMoveButtons();
    document.getElementById('start').disabled = false;
    document.getElementById('reset').disabled = false;
    document.getElementById('pause').disabled = true;

    const totalScoreRow = document.getElementById('scoreTable').insertRow();
    totalScoreRow.insertCell().textContent = 'Total Score:';
    totalScoreRow.insertCell().textContent = '';
    totalScoreRow.insertCell().textContent = '';
    totalScoreRow.insertCell().textContent = '';
    totalScoreRow.insertCell().textContent = totalScore;
    totalScoreRow.insertCell().textContent = computerPoints;

    if (points > computerPoints) {
        document.getElementById('result').textContent += ' You win!';
    } else if (points < computerPoints) {
        document.getElementById('result').textContent += ' Computer wins!';
    } else {
        document.getElementById('result').textContent += " It's a tie!";
    }
}

// Function to reset the game
function resetGame() {
    points = 0;
    computerPoints = 0;
    round = 1;
    totalScore = 0;
    timeLeft = 5;
    document.getElementById('points').textContent = points;
    document.getElementById('result').textContent = '';
    document.getElementById('timer').textContent = '5 seconds';
    while (document.getElementById('scoreTable').rows.length > 1) {
        document.getElementById('scoreTable').deleteRow(1);
    }
    enableMoveButtons();
}

// Event listeners for buttons
document.getElementById('start').addEventListener("click", () => {
    document.getElementById('start').disabled = true;
    document.getElementById('reset').disabled = true;
    document.getElementById('pause').disabled = false;
    resetGame();
    enableMoveButtons();
    startCountdown();
});

document.getElementById('pause').addEventListener("click", () => {
    pauseCountdown();
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
    document.getElementById('reset').disabled = false;
    canPlay = true;
});

document.getElementById('reset').addEventListener("click", () => {
    resetGame();
    enableMoveButtons();
});

document.getElementById('rock').addEventListener("click", () => {
    playGame("rock");
});

document.getElementById('paper').addEventListener("click", () => {
    playGame("paper");
});

document.getElementById('scissors').addEventListener("click", () => {
    playGame("scissors");
});
