function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]; //Picks a random number between 0, 1 or 2.
}

function getPlayerChoice() {
    let choice = prompt(
        "Choose between rock, paper or scissors!"
    ).toLowerCase();

    return choice; // For easy comparison
}

function playRound(player, computer) {
    let wins = { rock: "scissors", paper: "rock", scissors: "paper" };

    if (wins[player] == computer) {
        console.log(`Player wins - ${player} beats ${computer}!`);
        return 0;
    } else if (wins[computer] == player) {
        console.log(`Computer wins - ${computer} beats ${player}!`);
        return 1;
    } else {
        console.log("It's a tie!");
        return 2;
    }
}

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

game();
