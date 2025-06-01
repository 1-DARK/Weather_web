document.addEventListener('DOMContentLoaded', () => {
    const city_inp = document.getElementById("city-input");
    const weather_btn = document.getElementById("weather-btn");
    const weather_info = document.getElementById("weather-info");
    const temperature = document.getElementById("temperature");
    const city_name = document.getElementById("city-name");
    const description = document.getElementById("description");
    const error_message = document.getElementById("error-message");
    const loader = document.getElementById("loader");

    // Replace with your OpenWeatherMap API key
    const API_KEY = "YOUR_API_KEY_HERE";

    // Event listener for button click
    weather_btn.addEventListener("click", async () => {
        const city = city_inp.value.trim();
        if (!city) {
            displayInputError("Please enter a city name.");
            return;
        }

        // Show loading spinner
        showLoader();

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeather(weatherData);
        } catch (error) {
            showError("City not found. Please try another city.");
        } finally {
            hideLoader();
        }
    });

    // Fetch weather data from OpenWeatherMap API
    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        return data;
    }

    // Display weather information
    function displayWeather(data) {
        const { name, main, weather } = data;
        city_name.textContent = name;
        temperature.textContent = `Temperature: ${main.temp} °C`;
        description.textContent = `Weather: ${weather[0].description}`;
        weather_info.classList.remove('hidden');
        error_message.classList.add('hidden');
    }

    // Show error message
    function showError(message) {
        weather_info.classList.add('hidden');
        error_message.classList.remove('hidden');
        error_message.textContent = message;
    }

    // Show input error feedback
    function displayInputError(message) {
        alert(message);
    }

    // Show/hide loader functions
    function showLoader() {
        if (loader) loader.classList.remove('hidden');
    }

    function hideLoader() {
        if (loader) loader.classList.add('hidden');
    }

    // Additional helper function: convert Celsius to Fahrenheit
    function convertCelsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    // Additional helper function: capitalize first letter of description
    function capitalizeDescription(desc) {
        return desc.charAt(0).toUpperCase() + desc.slice(1);
    }

    // Example: Use helper functions somewhere if needed (not required but shows more JavaScript)
    function logWeatherData(data) {
        const fahrenheit = convertCelsiusToFahrenheit(data.main.temp);
        console.log(`Temperature in Fahrenheit: ${fahrenheit}°F`);
        console.log(`Description (capitalized): ${capitalizeDescription(data.weather[0].description)}`);
    }

    // Example usage of logging helper
    // This is optional; you can remove if not needed.
    // logWeatherData({main:{temp:22},weather:[{description:"clear sky"}]});
});
