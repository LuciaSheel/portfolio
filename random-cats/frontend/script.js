// Select main DOM elements
let getCatImageBtn = document.getElementById("fetchCatButton");
let imagePlaceHolder = document.getElementById("imagePlaceholder");
let loadingImage = document.getElementById("loading");
let voteButtons = document.getElementById("voteButtons");
let voteForBtn = document.getElementById("voteFor");
let voteAgainstBtn = document.getElementById("voteAgainst");

let currentCatId; // Variable to store current cat ID for voting

// Add event listener to fetch a new image with button click
getCatImageBtn.addEventListener("click", fetchCatData); // Fetch always returns a promise
  
// Function to fetch random image from The Cat API
async function fetchCatData () {
  loadingImage.style.display = "block"; // Show loading image
  voteButtons.style.display = "none"; // Hide vote buttons while new cat loading

  try {
    let response = await fetch('https://api.thecatapi.com/v1/images/search', {
      headers: {
        "x-api-key": "live_P7ZoaNZnKOND4FucJYHcjIk7BS4ecIQC5UcQgFdjPYLOh1zzPkF9LRkcW044qLy3"
      }
    });

    // Convert response to JSON format
    let data = await response.json();

    // Check if data is received; otherwise, throw custom error
    if (!data || !data[0]) throw new Error("No cats found!")
  
    // Destructure properties from API response
    const {id, url} = data[0];
    currentCatId = id; // Store current cat ID for voting

    // Create new element to display fetched image
    let image = document.createElement('img');
    image.src = url;
  
    // Replace placeholder content with new image instead of stacking up new images
    imagePlaceHolder.replaceChildren(image);

    // Show voting buttons after image loads
    voteButtons.style.display = "block";
  } catch (error) {
    console.error("Error while fetching cat image:", error); // Log any error
  } finally {
    loadingImage.style.display = "none"; // Hide loading image
  }
}

// Event listeners for vote buttons
voteForBtn.addEventListener("click", () => submitVote(1));
voteAgainstBtn.addEventListener("click", () => submitVote(0));

// Function to submit vote to The Cat API
async function submitVote(value) {
  try {
        // Send POST request to endpoint with cat ID and vote value (1 for upvote, 0 for downvote)
        let response = await fetch('https://api.thecatapi.com/v1/votes', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "live_P7ZoaNZnKOND4FucJYHcjIk7BS4ecIQC5UcQgFdjPYLOh1zzPkF9LRkcW044qLy3"
        },
        body: JSON.stringify({
          image_id: currentCatId,
          value: value
        })
      });

      if (response.ok) {
          await fetchVoteResults(); // fetch and display vote results
          alert(value === 1 ? "You voted 👍🏽 Purr! 😻" : "You voted 👎🏽 Hiss! 😾");
      } else {
          console.error("Vote failed to register:", response.statusText); // Log any response error
      }

  } catch (error) {
      console.error("Error submitting vote:", error); // Log any catch error
  }
}

  //For after a vote click, call a function to fetch & display latest vote count
  let upvotesDisplay = document.getElementById("upvotes");
  let downvotesDisplay = document.getElementById("downvotes");

  
// Function to fetch and display vote results
async function fetchVoteResults() {
  try {
      // Send GET request for votes
      let response = await fetch('https://api.thecatapi.com/v1/votes', {
        headers: {
          "x-api-key":"live_P7ZoaNZnKOND4FucJYHcjIk7BS4ecIQC5UcQgFdjPYLOh1zzPkF9LRkcW044qLy3"
        }
      });

      let votes = await response.json(); // Convert response to JSON format
      let upvotes = 0;
      let downvotes = 0;

      // Count (forEach loops thru each vote to count up/down for current cat image)
      votes.forEach(vote => {
        if (vote.image_id === currentCatId) {
          if(vote.value === 1) upvotes++;
          else if (vote.value === 0) downvotes++;
        }
      });

      // Update display
      upvotesDisplay.textContent = `Upvotes: ${upvotes}`;
      downvotesDisplay.textContent = `Downvotes: ${downvotes}`;
  } catch (error) {
      console.error("Vote fetch error:", error);
  }
}

// Call fetchVotesResults after image is loaded, to show current votes
fetchCatButton.addEventListener("click", () => {
  fetchCatData().then(fetchVoteResults);
});


