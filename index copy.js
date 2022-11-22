function playRound() {
  const computerWeapon = getComputerChoice();
  const playerWeapon = getPlayerChoice();
  console.log("Computer chose " + computerWeapon);
  console.log("You chose " + playerWeapon);
  if (computerWeapon === playerWeapon) {
    console.log("Tie!");
    return "tie";
  }
  if (
    (computerWeapon === "rock" && playerWeapon === "paper") ||
    (computerWeapon === "scissors" && playerWeapon === "rock") ||
    (computerWeapon === "paper" && playerWeapon === "scissors")
  ) {
    console.log("You win!");
    return "player";
  }
  console.log("Computer wins!");
  return "computer";
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getPlayerChoice() {
  const rockBtn = document.getElementById("rock")
  const paperBtn = document.getElementById("paper")
  const scissorsBtn = document.getElementById("scissors")
  rockBtn.addEventListener("click", () => {
    console.log("rock")
    return "rock"
  })
  paperBtn.addEventListener("click", () => {
    console.log("paper")
    return "paper"
  })
  scissorsBtn.addEventListener("click", () => {
    console.log("scissors")
    return "scissors"
  })
}

function game() {
  const totalGames = prompt("How many games do you want to play?");

  let playerScore = 0;
  let computerScore = 0;

  for (let gamesPlayed = 0; gamesPlayed < totalGames; gamesPlayed++) {
    let winner = playRound();
    if (winner === "player") playerScore++;
    if (winner === "computer") computerScore++;
    console.log(`You have played ${gamesPlayed + 1} number of games`);
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
