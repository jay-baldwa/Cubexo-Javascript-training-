

async function fetchWeatherData() {

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=fc86cbf0e23d9257032b8326f522de97`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data for ${city}: ${error.message}`);
    return null;
  }
}

async function main() {
  const weatherData = await fetchWeatherData();

  if (weatherData) {
    displayWeatherInfo('chennai', weatherData);
  } else {
    console.log(`Failed to fetch data for ${city}`);
  }
}


function displayWeatherInfo(city, data) {
  const container = document.getElementById('weather-container');
  const weatherInfo = `
        <div>
            <h2>${city}</h2>
            <p>Temperature: ${data.main.temp} &deg;C</p>
            <p>Weather: ${data.weather[0].description}</p>
        </div>
        <hr>
    `;
  container.innerHTML += weatherInfo;
}

window.onload = main;