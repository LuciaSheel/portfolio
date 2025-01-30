const weatherJSON = `{
  "location": "Lake Country",
  "forecast": [
      {
          "date": "October 31, 2024",
          "temperature": {
              "high": 8,
              "low": 0
          },
          "condition": "Mainly cloudy"
      },
      {
          "date": "November 1, 2024",
          "temperature": {
              "high": 4,
              "low": 1
          },
          "condition": "Chance of flurries"
      }
  ]
}`;

// Convert JSON string to JS object
let weatherJSObject = JSON.parse(weatherJSON);

// Select weather container
const weatherContainer = document.getElementById("weatherContainer");

// Loop thru forecast data and create HTML elements
weatherJSObject.forecast.forEach(day => {
// Create div for each day's forecast
const forecastDiv = document.createElement("div");
// Add content to inner HTML
forecastDiv.innerHTML = `
<h2>${day.date}</h2>
<p>Condition: ${day.condition}</p>
<p>Temperature: High ${day.temperature.high}°C, Low ${day.temperature.low}°C</p>
`;

// Append forecast div to weather container
weatherContainer.appendChild(forecastDiv);
});