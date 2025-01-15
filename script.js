function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]; //Picks a random number between 0, 1 or 2.
}

function getPlayerChoice() {
  let choice = prompt("Choose between rock, paper or scissors!").toLowerCase();

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
