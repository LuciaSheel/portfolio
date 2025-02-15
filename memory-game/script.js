const emoji = ['🍎', '🥦', '🍿', '🍱', '🍪', '🧋', '☕', '🌮'];
let shuffledEmoji = [...emoji, ...emoji]; // Duplicate emoji to make pairs
shuffledEmoji = shuffle(shuffledEmoji); // Shuffle array
const gameContainer = document.getElementById('grid'); // Target grid for styling
const messageDisplay = document.getElementById('message-display');

let flippedCards = [];
let matchedCards = 0;

// Create cards dynamically
shuffledEmoji.forEach(emoji => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = emoji;

  const cardFlipper = document.createElement('div'); // Holds the back and front of card
  cardFlipper.classList.add('card-flipper');

  const cardBack = document.createElement('div'); // Default visible side
  cardBack.classList.add('card-back');
  cardBack.textContent = '↩️';

  const cardFront = document.createElement('div'); // Side that is hidden until flipped
  cardFront.classList.add('card-front');
  cardFront.textContent = emoji;

  cardFlipper.appendChild(cardBack);
  cardFlipper.appendChild(cardFront);
  card.appendChild(cardFlipper);

  card.addEventListener('click', () => flipCard(card)); // Event listener directly on card
  gameContainer.appendChild(card);

});

// Fisher-Yates algorithm for shuffling
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Pick a random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

function flipCard(card) {
  // Prevent clicking more than two cards or re-clicking the same card
  if (card.classList.contains('flipped') || flippedCards.length >= 2) return;

  // Flip the selected card
  card.classList.add('flipped');
  flippedCards.push(card); // Add it to the list of flipped cards

  // If two cards are flipped, check for a match
  if (flippedCards.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  const [firstCard, secondCard] = flippedCards; // Get the two flipped cards
  const name1 = firstCard.dataset.name; // Get the emoji name from data attribute
  const name2 = secondCard.dataset.name;

  if (name1 === name2) {
    // Cards match: Keep them flipped and reset the flippedCards array
    flippedCards = [];
    matchedCards += 2; // Increase match count
    messageDisplay.textContent = 'Good job! 👏';
    messageDisplay.classList.add("show");

    // Check if all cards are matched
    if (matchedCards === shuffledEmoji.length) {
      messageDisplay.textContent = 'Success! 🏆';
      messageDisplay.classList.add("show");
    }
  } else {
    // No match: Flip the cards back after a short delay
    messageDisplay.textContent = 'Try again! ❌';
    messageDisplay.classList.add("show");

    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      flippedCards = []; // Reset flippedCards array
      messageDisplay.textContent = ''; // Clear message
      messageDisplay.classList.remove("show"); // Hide message again
    }, 1000);
  }
}
