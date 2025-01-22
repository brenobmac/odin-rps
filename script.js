function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]; //Picks a random number between 0, 1 or 2.
}

function playRound(player, computer) {
    // Dictionary used for simple winning relation.
    // wins[player] = computer.
    // e.g. rock wins agains scissors.
    let wins = { rock: "scissors", paper: "rock", scissors: "paper" };
    let resultText = document.querySelector("#round-result"); // To change the div value.

    if (wins[player] == computer) {
        resultText.textContent = `Player wins - ${player} beats ${computer}!`; // Changes div result
        return 0;
    } else if (wins[computer] == player) {
        resultText.textContent = `Computer wins - ${computer} beats ${player}!`;
        return 1;
    } else {
        resultText.textContent = "It's a tie!";
        return 2;
    }
}

// Functions to call playRound
// We need to define them because we want to remove them from the buttons later, since
// we can't remove arrow functions directly from the buttons
function rockClick() {
    playRound("rock", getComputerChoice()); //Plays round with rock and computer choice.
}

function paperClick() {
    playRound("paper", getComputerChoice()); //Plays round with paper and computer choice.
}

function scissorClick() {
    playRound("scissors", getComputerChoice()); //Plays round with scissors and computer choice.
}

// Setting up the buttons to play the game instead of old getPlayerChoice function.
function buttonStart() {
    let rockButton = document.querySelector("#rock-button");
    rockButton.addEventListener("click", rockClick);

    let paperButton = document.querySelector("#paper-button");
    paperButton.addEventListener("click", paperClick);

    let scissorButton = document.querySelector("#scissor-button");
    scissorButton.addEventListener("click", scissorClick);
}

// Reset buttons wheh max score for either player is reached.
function buttonReset() {
    let rockButton = document.querySelector("#rock-button");
    rockButton.removeEventListener("click", rockClick);

    let paperButton = document.querySelector("#paper-button");
    paperButton.removeEventListener("click", paperClick);

    let scissorButton = document.querySelector("#scissor-button");
    scissorButton.removeEventListener("click", scissorClick);
}

buttonStart();
