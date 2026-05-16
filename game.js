let count = 0;
let humanScore = 0;
let ComputerScore = 0;
function humanChoice() {
  let choice = prompt("Please Enter your choice");
  if (count >= 3) {
    return "invalid";
  } else if (
    choice.toLowerCase() !== "rock" &&
    choice.toLowerCase() !== "paper" &&
    choice.toLowerCase() !== "scissors"
  ) {
    alert("Invalid Choice Retry!");
    count++;
    return humanChoice(choice);
  }
  count = 0;
  return choice;
}

function computerChoice() {
  const arr = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * 3);
  return arr[index];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
    alert(`Both chose the same TIE! ${humanScore}-${ComputerScore}.`);
  } else if (humanChoice.toLowerCase() === "rock") {
    if (computerChoice.toLowerCase() === "scissors") {
      humanScore++;
      alert(`You Win Computer chose Scissors! ${humanScore}-${ComputerScore}.`);
    } else {
      ComputerScore++;
      alert(
        `Computer Wins Computer chose Paper! ${humanScore}-${ComputerScore}.`,
      );
    }
  } else if (humanChoice.toLowerCase() === "scissors") {
    if (computerChoice.toLowerCase() === "rock") {
      ComputerScore++;
      alert(
        `Computer Wins Computer chose Rock! ${humanScore}-${ComputerScore}.`,
      );
    } else if (computerChoice.toLowerCase() === "paper") {
      humanScore++;
      alert(`You Win Computer chose Paper! ${humanScore}-${ComputerScore}.`);
    }
  } else if (humanChoice.toLowerCase() === "paper") {
    if (computerChoice.toLowerCase() === "rock") {
      humanScore++;
      alert(`You Win Computer chose Rock! ${humanScore}-${ComputerScore}.`);
    } else if (computerChoice.toLowerCase() === "scissors") {
      ComputerScore++;
      alert(
        `Computer Wins Computer chose Scissors! ${humanScore}-${ComputerScore}.`,
      );
    }
  }
}

function game() {
  let choice;
  alert(
    "Welcome to the game of Rock Paper and Scissors! You are allowed only to choose between any of the above given options.",
  );
  n = prompt("Enter the no of round you want to play:");
  n = Number(n);
  for (let i = 0; i < n; i++) {
    let a = humanChoice();
    if (a != "invalid") {
      playRound(a, computerChoice());
    } else {
      alert("Your choices were all invalid!Exiting Game...");
      return;
    }
  }
  if (humanScore > ComputerScore) {
    alert(`You win ${humanScore} - ${ComputerScore}!`);
  } else {
    alert(`Computer wins ${humanScore}-${ComputerScore}!`);
  }
}

game();
