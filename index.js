function playRound() {
  const computerWeapon = getComputerChoice();
  const playerWeapon = getPlayerChoice();
  console.log("Computer chose " + computerWeapon);
  console.log("You chose " + playerWeapon);
  if (computerWeapon === playerWeapon) {
    console.log("Tie!");
    return "tie";
  } else if (
    (computerWeapon === "rock" && playerWeapon === "paper") ||
    (computerWeapon === "scissors" && playerWeapon === "rock") ||
    (computerWeapon === "paper" && playerWeapon === "scissors")
  ) {
    console.log("You win!");
    return "player";
  } else {
    console.log("Computer wins!");
    return "computer";
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getPlayerChoice() {
  let playerWeapon = prompt("Choose your weapon. Rock, paper, or scissors?");
  return playerWeapon;
}

function game() {
  const totalGames = prompt("How many games do you want to play?");

  let playerScore = 0;
  let computerScore = 0;

  for (let gamesPlayed = 0; gamesPlayed < totalGames; gamesPlayed++) {
    let winner = playRound();
    if (winner === "player") playerScore++;
    if (winner === "computer") computerScore++;
    console.log(`You have played ${gamesPlayed + 1}q number of games`); 
  }

  console.log(
    "The computer has scored " +
      computerScore +
      " and you have scored " +
      playerScore
  );
}

game();

// let gamesPlayed = 0;

// while (gamesPlayed < totalGames) {
//   let winner = playRound();
//   if (winner === "player") playerScore++;
//   if (winner === "computer") computerScore++;
//   gamesPlayed++;
//   console.log("You have played " + gamesPlayed + " number of games");
// }
