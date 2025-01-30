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

// Add event listener for each human choice
choiceButtons.forEach(choiceButton => choiceButton.addEventListener("click", (e) => {
  humanChoice = e.target.id; // Set human choice
  showHumanChoice.innerHTML = humanChoice; // Show human choice
  generateComputerChoice(); // Generate and display computer choice
  getResult(); // Calculate and display who wins
}));

// Generate random computer choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  //console.log(randomNumber) to check if works

  // Map random # to choice
  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice = "Scissors";
  }
  showComputerChoice.innerHTML = computerChoice; // Display computer choice
}


// Calculate and display result based on all possible choice combinations
// Update the tally
// This code could be simplified with else if..else statements
function getResult() {

  if (computerChoice === humanChoice) {
    result = "It's a tie";
  }
  if (computerChoice === "Rock" && humanChoice === "paper") {
    result = "Human 🏆🙋‍♂️";
    humanWins++; // Increment human's tally
    humanWinsTally.innerHTML = humanWins; // Update DOM
  }
  if (computerChoice === "Rock" && humanChoice === "scissors") {
    result = "Computer 🏆💻";
    computerWins++; // Increment computer's tally
    computerWinsTally.innerHTML = computerWins; // Update DOM
  }
  if (computerChoice === "Scissors" && humanChoice === "paper") {
    result = "Computer 🏆💻";
    computerWins++;
    computerWinsTally.innerHTML = computerWins;
  }
  if (computerChoice === "Scissors" && humanChoice === "rock") {
    result = "Human 🏆🙋‍♂️";
    humanWins++;
    humanWinsTally.innerHTML = humanWins;
  }
  if (computerChoice === "Paper" && humanChoice === "rock") {
    result = "Computer 🏆💻";
    computerWins++;
    computerWinsTally.innerHTML = computerWins;
  }
  if (computerChoice === "Paper" && humanChoice === "scissors") {
    result = "Human 🏆🙋‍♂️";
    humanWins++;
    humanWinsTally.innerHTML = humanWins;
  }
  showWhoWins.innerHTML = result; // Display who wins the game
}

// Capitalize the first letter of a word
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Add event listener for each human choice
choiceButtons.forEach(choiceButton => choiceButton.addEventListener("click", (e) => {
  const choice = e.target.id;

  if (choice === "rock") {
    humanChoice = capitalizeFirstLetter("rock");
  } else if (choice === "paper") {
    humanChoice = capitalizeFirstLetter("paper");
  } else if (choice === "scissors") {
    humanChoice = capitalizeFirstLetter("scissors");
  }

  showHumanChoice.innerHTML = humanChoice; // Show human choice
  generateComputerChoice(); // Generate and display computer choice
  getResult(); // Calculate and display who wins
}));