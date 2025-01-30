document.getElementById("weatherForm").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the form from reloading the page
  
  const city = document.getElementById("city").value;
  const apiKey = "421b3628383ae27423a4f06ef912b946";

  // Construct the URL for fetching current weather data
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    // Fetch the current weather data
    const response = await fetch(weatherUrl);
    const weatherData = await response.json();

    // Check if the city was found
    if (weatherData.cod !== 200) {
      document.getElementById("weatherContainer").innerHTML = `<p>City not found.</p>`;
      return;
    }

    // Clear previous results
    const weatherContainer = document.getElementById("weatherContainer");
    weatherContainer.innerHTML = "";

    // Extract and display relevant data
    const temp = weatherData.main.temp;
    const feelsLike = weatherData.main.feels_like;
    const condition = weatherData.weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    // Create and append weather information to the container
    const weatherHTML = `
      <h3>Current Weather in ${city}</h3>
      <p>Condition: ${condition} <img src="${icon}" alt="${condition} icon"></p>
      <p>Temperature: ${temp}°C</p>
      <p>Feels Like: ${feelsLike}°C</p>
    `;
    
    weatherContainer.innerHTML = weatherHTML;
  } catch (error) {
    document.getElementById("weatherContainer").innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
  }
});
