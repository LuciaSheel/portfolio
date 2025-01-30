// Capitalize first letter of Pokemon names
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Fetch data from API
async function fetchPokemonData() {
  try {
    // Fetch some Pokemon
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");

    // Parse response as JSON
    const data = await response.json();

    // Extract list
    const pokemonList = data.results;

    // Fetch data for each Pokemon using its URL
    const pokemonDetails = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const res = await fetch(pokemon.url);

        // Return detailed data as JSON
        return await res.json();
      })
   );

   // Call function to display data in a table
   displayPokemonData(pokemonDetails);

  } catch (error) {
    // Log any errors that occur during fetch process
    console.error("Error fetching Pokemon data:", error);
  }
}

  // Invoke function to start fetching data
  fetchPokemonData();

  // Create dynamic HTML table
function displayPokemonData(pokemonDetails) {
  // Select container where table goes
  const container = document.getElementById("pokemonTableContainer");

  // Create table
  const table = document.createElement("table");

  //Create headers
  const headers = ["Name", "Height", "Weight"];
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  // Populate header row with headers
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header; // Set header text
    headerRow.appendChild(th); // Add header to row
  });

  thead.appendChild(headerRow); // Append header row to table head
  table.appendChild(thead); // Append head to table

  // Create  table body
  const tbody = document.createElement("tbody");

  // Loop thru each Pokemon and create row
  pokemonDetails.forEach((pokemon) => {
    const row = document.createElement("tr");

    // Add capitalized name to row
    const nameCell = document.createElement("td");
    nameCell.textContent = capitalize(pokemon.name); // Set name
    row.appendChild(nameCell); // Add name cell to row

    // Add height to row
    const heightCell = document.createElement("td");
    heightCell.textContent = pokemon.height; // Set height
    row.appendChild(heightCell); // Add height cell to row

    // Add weight
    const weightCell = document.createElement("td");
    weightCell.textContent = pokemon.weight; // Set weight
    row.appendChild(weightCell); // Add weight cell to row

    // Append constructed row to table body
    tbody.appendChild(row);
  });

  // Append body to table
  table.appendChild(tbody);

  // Append table to container in DOM
  container.appendChild(table);
}