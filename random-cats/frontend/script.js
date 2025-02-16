// Select main DOM elements
let getCatImageBtn = document.getElementById("fetchCatButton");
let imagePlaceHolder = document.getElementById("imagePlaceholder");
let loadingImage = document.getElementById("loading");

// Add event listener to fetch a new image with button click
getCatImageBtn.addEventListener("click", fetchCatData);

// Determine backend URL based on environment
const backendURL =
  window.location.hostname === "localhost"
    ? "http://localhost:3001"
    : "https://portfolio-website-two-production.up.railway.app";

// Function to fetch random image from your backend
async function fetchCatData() {
  loadingImage.style.display = "block";

  try {
    let response = await fetch(`${backendURL}/cat-data`); // Dynamic backend URL
    let data = await response.json();

    if (!data || !data[0]) throw new Error("No cats found!");

    const { url } = data[0];

    let image = document.createElement("img");
    image.src = url;
    imagePlaceHolder.replaceChildren(image);
  } catch (error) {
    console.error("Error fetching cat image:", error);
  } finally {
    loadingImage.style.display = "none";
  }
}
