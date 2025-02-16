// Verbose for my own comprehension
// JS document.getElementbyId() and document.querySelectorAll() methods get DOM elements "computer-choice", "human-choice"... by their IDs
// Element is stored in variables for later use
const showComputerChoice = document.getElementById("computer-choice");
const showHumanChoice = document.getElementById("human-choice");
const showWhoWins = document.getElementById("who-wins");
const choiceButtons = document.querySelectorAll("button");
const humanWinsTally = document.getElementById("human-wins");
const computerWinsTally = document.getElementById("computer-wins");

// Choice and result storage variables
let humanChoice;
let computerChoice;
let result;
// Initialize counters for human and computer wins
let humanWins = 0;
let computerWins = 0;

// Capitalize the first letter of a word
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Add event listener for each human choice
choiceButtons.forEach(choiceButton => choiceButton.addEventListener("click", (e) => {
  humanChoice = capitalizeFirstLetter(e.target.id); // Set human choice
  showHumanChoice.innerHTML = humanChoice; // Show human choice
  generateComputerChoice(); // Generate and display computer choice
  getResult(); // Calculate and display who wins
}));

// Generate random computer choice
function generateComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  computerChoice = choices[Math.floor(Math.random() * 3)];
  showComputerChoice.innerHTML = computerChoice; // Display computer choice
}

// Calculate and display result based on all possible choice combinations
// Update the tally
// Determine winner
function getResult() {
  if (computerChoice === humanChoice) {
    result = "It's a tie!";
  } else if (
    (computerChoice === "Rock" && humanChoice === "Scissors") ||
    (computerChoice === "Scissors" && humanChoice === "Paper") ||
    (computerChoice === "Paper" && humanChoice === "Rock")
  ) {
    result = "Computer 🏆💻";
    computerWins++;
    computerWinsTally.innerHTML = computerWins;
  } else {
    result = "Human 🏆🙋‍♂️";
    humanWins++;
    humanWinsTally.innerHTML = humanWins;
  }
  showWhoWins.innerHTML = result; // Display who wins the game
}