const input = document.querySelector("#rounds");
input.focus();
const modal = document.querySelector("#gameModal");
const form = document.querySelector("form");
const closebtn = document.querySelector(".close");

const humanScore = document.querySelector("#yourScore");
const computerScore = document.querySelector("#computerScore");
const res = document.querySelector("#result");
const output1 = document.createElement("p");
const output2 = document.createElement("p");
const output3 = document.createElement("p");
output1.textContent = "Game has not started!";
output2.textContent = "";
output3.textContent = "";
res.appendChild(output1);
res.appendChild(output2);
res.appendChild(output3);

let totalRounds = 0;
let playedRounds = 0;

function comp() {
  const arr = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return arr[index];
}

function rock_logic(computerChoice) {
  output1.textContent = "You chose rock!";
  output2.textContent = `Computer chose ${computerChoice}!`;
  if (computerChoice.toLowerCase() === "rock") {
    output3.textContent = "TIE!";
  } else if (computerChoice.toLowerCase() === "scissors") {
    humanScore.textContent = String((Number(humanScore.textContent) || 0) + 1);
    output3.textContent = "You Win This Round!";
  } else {
    computerScore.textContent = String(
      (Number(computerScore.textContent) || 0) + 1,
    );
    output3.textContent = "Computer Wins This Round!";
  }
}

function paper_logic(computerChoice) {
  output1.textContent = "You chose paper!";
  output2.textContent = `Computer chose ${computerChoice}!`;
  if (computerChoice.toLowerCase() === "paper") {
    output3.textContent = "TIE!";
  } else if (computerChoice.toLowerCase() === "rock") {
    humanScore.textContent = String((Number(humanScore.textContent) || 0) + 1);
    output3.textContent = "You Win This Round!";
  } else {
    computerScore.textContent = String(
      (Number(computerScore.textContent) || 0) + 1,
    );
    output3.textContent = "Computer Wins This Round!";
  }
}

function scissors_logic(computerChoice) {
  output1.textContent = "You chose scissors!";
  output2.textContent = `Computer chose ${computerChoice}!`;
  if (computerChoice.toLowerCase() === "scissors") {
    output3.textContent = "TIE!";
  } else if (computerChoice.toLowerCase() === "paper") {
    humanScore.textContent = String((Number(humanScore.textContent) || 0) + 1);
    output3.textContent = "You Win This Round!";
  } else {
    computerScore.textContent = String(
      (Number(computerScore.textContent) || 0) + 1,
    );
    output3.textContent = "Computer Wins This Round!";
  }
}

function add_content(rounds) {
  const container = document.querySelector("#el");
  totalRounds = Number(rounds);
  playedRounds = 0;

  humanScore.textContent = "0";
  computerScore.textContent = "0";

  output1.textContent = "Game has started!";
  output2.textContent = "";
  output3.textContent = "";
}

const container = document.querySelector("#el");

container.addEventListener("click", (event) => {
  if (playedRounds >= totalRounds) {
    return;
  }

  const choice = event.target.id;

  const computerChoice = comp();
  if (!event.target.id) {
    return;
  }
  if (choice === "rock") {
    rock_logic(computerChoice);
  } else if (choice === "paper") {
    paper_logic(computerChoice);
  } else if (choice === "scissors") {
    scissors_logic(computerChoice);
  }

  playedRounds++;

  if (playedRounds === totalRounds) {
    if (Number(humanScore.textContent) > Number(computerScore.textContent)) {
      output1.textContent = "YOU WIN THE GAME!";
      output2.textContent = "";
      output3.textContent = "";
    } else if (
      Number(computerScore.textContent) > Number(humanScore.textContent)
    ) {
      output1.textContent = "COMPUTER WINS THE GAME!";
      output2.textContent = "";
      output3.textContent = "";
    } else {
      output1.textContent = "GAME TIED!";
      output2.textContent = "";
      output3.textContent = "";
    }
  }
});
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.querySelector("#rounds");
  const rounds = Number(input.value);
  input.value = "";
  console.log(rounds);

  if (isNaN(rounds) || rounds <= 0) {
    alert("Enter a valid positive number");
    return;
  }
  modal.classList.add("show");
  add_content(rounds);
});

closebtn.addEventListener("click", (event) => {
  modal.classList.remove("show");
});
