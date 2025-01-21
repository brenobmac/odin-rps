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

/*
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = Number(prompt("How many rounds would you like to play?"));

    // Will keep running until rounds reach 0.
    while (rounds) {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        let result = playRound(playerChoice, computerChoice);

        if (result == 0) {
            playerScore += 1;
        } else if (result == 1) {
            computerScore += 1;
        } else {
        }

        rounds -= 1;
    }

    console.log(
        `Game over!! Player score - ${playerScore}. Computer score - ${computerScore}.`
    );
}
*/

// Setting up the buttons to play the game instead of old getPlayerChoice function.

let rockButton = document.querySelector("#rock-button");
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice()); //Plays round with rock and computer choice.
});

let paperButton = document.querySelector("#paper-button");
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice()); //Plays round with paper and computer choice.
});

let scissorButton = document.querySelector("#scissor-button");
scissorButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice()); //Plays round with scissors and computer choice.
});
