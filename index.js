function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

let message;

function playRound(playerWeapon) {
  const msgEl = document.getElementById("message");
  const computerWeapon = getComputerChoice();
  let winner;
  if (computerWeapon === playerWeapon) {
    message = "Tie" + "\n";
    msgEl.innerText = message;
    winner = "tie";
  } else if (
    (computerWeapon === "rock" && playerWeapon === "paper") ||
    (computerWeapon === "scissors" && playerWeapon === "rock") ||
    (computerWeapon === "paper" && playerWeapon === "scissors")
  ) {
    message = "You win!" + "\n";
    msgEl.innerText = message;
    winner = "player";
  } else {
    message = "Computer wins!" + "\n";
    msgEl.innerText = message;
    winner = "computer";
  }
  firstToFive(winner);
}

function getComputerChoice() {
  const cmpRockEl = document.querySelector("#cmp-rock");
  const cmpPaperEl = document.querySelector("#cmp-paper");
  const cmpScissorsEl = document.querySelector("#cmp-scissors");
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  if (index === 0) {
    cmpRockEl.classList.add("clicked");
    cmpPaperEl.classList.remove("clicked");
    cmpScissorsEl.classList.remove("clicked");
  } else if (index === 1) {
    cmpPaperEl.classList.add("clicked");
    cmpRockEl.classList.remove("clicked");
    cmpScissorsEl.classList.remove("clicked");
  } else if (index === 2) {
    cmpScissorsEl.classList.add("clicked");
    cmpRockEl.classList.remove("clicked");
    cmpPaperEl.classList.remove("clicked");
  }
  return choices[index];
}

function getPlayerChoice() {
  const rockBtn = document.getElementById("rock");
  const paperBtn = document.getElementById("paper");
  const scissorsBtn = document.getElementById("scissors");
  rockBtn.addEventListener("click", () => {
    scissorsBtn.classList.remove("clicked");
    paperBtn.classList.remove("clicked");
    rockBtn.classList.add("clicked");
    playRound("rock");
  });
  paperBtn.addEventListener("click", () => {
    console.log("paper");
    rockBtn.classList.remove("clicked");
    scissorsBtn.classList.remove("clicked");
    paperBtn.classList.add("clicked");
    playRound("paper");
  });
  scissorsBtn.addEventListener("click", () => {
    rockBtn.classList.remove("clicked");
    paperBtn.classList.remove("clicked");
    scissorsBtn.classList.add("clicked");
    console.log("scissors");
    playRound("scissors");
  });
}

let computerScore = 0;
let playerScore = 0;

async function firstToFive(winner) {
  const msgEl = document.getElementById("message");
  if (winner === "player") {
    playerScore++;
    console.log(playerScore);
    console.log(computerScore);
    message += "You scored " + playerScore + "\n";
    message += "Computer scored " + computerScore + "\n";
    msgEl.innerText = message;
    message = "";
  } else if (winner === "computer") {
    computerScore++;
    console.log(playerScore);
    console.log(computerScore);
    message += "You scored " + playerScore + "\n";
    message += "Computer scored " + computerScore + "\n";
    msgEl.innerText = message;
    message = "";
  } else if (winner === "tie") {
    console.log(playerScore);
    console.log(computerScore);
    message += "You scored " + playerScore + "\n";
    message += "Computer scored " + computerScore + "\n";
    msgEl.innerText = message;
    message = "";
  }
  await delay(1000);
  if (playerScore === 5 || computerScore === 5) {
    alert("Player won" + "\n" + "Would you like to play again?");
    playerScore = 0;
    computerScore = 0;
    console.log(playerScore);
    console.log(computerScore);
    message += "You scored " + playerScore + "\n";
    message += "Computer scored " + computerScore + "\n";
    msgEl.innerText = message;
    message = "";
  }
}

getPlayerChoice();
// firstToFive();

// function game() {
//   const totalGames = prompt("How many games do you want to play?");

//   let playerScore = 0;
//   let computerScore = 0;

//   for (let gamesPlayed = 0; gamesPlayed < totalGames; gamesPlayed++) {
//     let winner = playRound();
//     if (winner === "player") playerScore++;
//     if (winner === "computer") computerScore++;
//     console.log(`You have played ${gamesPlayed + 1} number of games`);
//   }

//   console.log(
//     "The computer has scored " +
//       computerScore +
//       " and you have scored " +
//       playerScore
//   );
// }

// game();

// let gamesPlayed = 0;

// while (gamesPlayed < totalGames) {
//   let winner = playRound();
//   if (winner === "player") playerScore++;
//   if (winner === "computer") computerScore++;
//   gamesPlayed++;
//   console.log("You have played " + gamesPlayed + " number of games");
// }
