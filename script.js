function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]; //Picks a random number between 0, 1 or 2.
}

function getPlayerChoice() {
  let choice = prompt("Choose between rock, paper or scissors!");
  return choice.toLowerCase(); // For easy comparison
}
