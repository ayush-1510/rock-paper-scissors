let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 0; // Draw
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return -1; // User wins
  } else {
    return 1; // Computer wins
  }
};

const updateScores = (result) => {
  if (result === -1) {
    userScore++;
  } else if (result === 1) {
    computerScore++;
  }
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
};

const displayResult = (userChoice, computerChoice, result) => {
  const resultText = document.getElementById("msg");
  if (result === 0) {
    resultText.textContent = `It's a draw! You both chose ${userChoice}.`;
    resultText.style.backgroundColor = "#FFC107"; // Yellow for draw
  } else if (result === -1) {
    resultText.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    resultText.style.backgroundColor = "#4CAF50"; // Green for win
  } else {
    resultText.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    resultText.style.backgroundColor = "#F44336"; // Red for loss
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    updateScores(result);
    displayResult(userChoice, computerChoice, result);
  });
});
