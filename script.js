function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]; //Picks a random number between 0, 1 or 2.
}

function playRound(player, computer) {
    // Dictionary used for simple winning relation.
    // wins[player] = computer.
    // e.g. rock wins agains scissors.
    let wins = { rock: "scissors", paper: "rock", scissors: "paper" };

    if (wins[player] === computer) {
        resultText.textContent = `Player wins round - ${player} beats ${computer}!`;
        playerScore += 1;
        playerScoreText.textContent = `Player score: ${playerScore}`;

        // Max score reached
        if (playerScore === 5) {
            resultText.textContent = `Player wins!!!`;
            playerScoreText.textContent += " ♛";
            buttonReset();
        }
    } else if (wins[computer] === player) {
        resultText.textContent = `Computer wins round - ${computer} beats ${player}!`;
        computerScore += 1;
        computerScoreText.textContent = `Computer score: ${computerScore}`;

        // Max score reached
        if (computerScore === 5) {
            resultText.textContent = `Computer wins!!!`;
            computerScoreText.textContent += " ♛";
            buttonReset();
        }
    } else {
        resultText.textContent = "It's a tie!";
    }
}

// Functions to call playRound
// We need to define them because we want to remove them from the buttons later, since
// we can't remove arrow functions directly from the buttons
function rockClick() {
    playRound("rock", getComputerChoice());
}

function paperClick() {
    playRound("paper", getComputerChoice());
}

function scissorClick() {
    playRound("scissors", getComputerChoice());
}

function restartClick() {
    playerScore = 0;
    computerScore = 0;
    resultText.textContent = "No games played yet!";
    playerScoreText.textContent = "Player score: 0";
    computerScoreText.textContent = "Computer score: 0";
    buttonStart();
}

// Setting up the buttons to play the game
function buttonStart() {
    rockButton.addEventListener("click", rockClick);

    paperButton.addEventListener("click", paperClick);

    scissorButton.addEventListener("click", scissorClick);

    restartButton.addEventListener("click", restartClick);
}

// Reset buttons wheh max score for either player is reached.
function buttonReset() {
    rockButton.removeEventListener("click", rockClick);

    paperButton.removeEventListener("click", paperClick);

    scissorButton.removeEventListener("click", scissorClick);
}

// Initial values for scores
let playerScore = 0;
let computerScore = 0;

// Variables to select buttons
let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorButton = document.querySelector("#scissor-button");
let restartButton = document.querySelector("#restart-button");

// Texts in the divs
let resultText = document.querySelector("#round-result");
let playerScoreText = document.querySelector("#player-score");
let computerScoreText = document.querySelector("#computer-score");

buttonStart(playerScore, computerScore);
