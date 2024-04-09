const queryInput = document.querySelector(".query-input");
const searchButton = document.querySelector(".search-btn");

const API_KEY = "HcXLlHB3JAI1U4BBrhUsC4Mu2Zl9Uhdt1YHYeGj0";

// retrive the Astronomy Picture of the Day
const getAstroData = () => {
    const inputDate = queryInput.value;

    // check if input area is empty or not
    if (inputDate === "") return;
    const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${inputDate}`;
    //https://api.nasa.gov/planetary/apod?api_key=HcXLlHB3JAI1U4BBrhUsC4Mu2Zl9Uhdt1YHYeGj0&date=2011-09-14

    // fetching API Data, send a GET request and response is then converted to JSON format
    fetch(API_URL).then(response => response.json()).then(data => {
        // if data is empty 
        if (!data) return alert(`Request date might be out of date or invalid input`);
        // destructuring assignment from API response
        const { date, explanation, title, url } = data;
        // call getAstroDetails function
        //getAstroDetails(date, explanation, title, url);

        console.log("Date:", date);
        console.log("Explanation:", explanation);
        console.log("Title:", title);
        console.log("URL:", url);

    }).catch(() => {
        alert("An error occurred while fetching the data");
    });
}

/*

    Blow is still from Weather API (I only changed above the block)

*/

// const locationButton = document.querySelector(".location-btn");
// const currentWeatherDiv = document.querySelector(".current-weather");
// const weatherCardsDiv = document.querySelector(".weather-cards");




// const createAstroPic = (cityName, weatherItem, index) => {
//     if(index === 0) { // HTML for the main weather card
//         return `<div class="details">
//                     <h2>${cityName} (${weatherItem.dt_txt.split(" ")[0]})</h2>
//                     <h6>Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
//                     <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
//                     <h6>Humidity: ${weatherItem.main.humidity}%</h6>
//                 </div>
//                 <div class="icon">
//                     <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
//                     <h6>${weatherItem.weather[0].description}</h6>
//                 </div>`;
//     } else { // HTML for the other five day forecast card
//         return `<li class="card">
//                     <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
//                     <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
//                     <h6>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
//                     <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
//                     <h6>Humidity: ${weatherItem.main.humidity}%</h6>
//                 </li>`;
//     }
// }

// const getAstroDetails = (cityName, latitude, longitude) => {
//     const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

//     fetch(WEATHER_API_URL).then(response => response.json()).then(data => {
//         // Filter the forecasts to get only one forecast per day
//         const uniqueForecastDays = [];
//         const fiveDaysForecast = data.list.filter(forecast => {
//             const forecastDate = new Date(forecast.dt_txt).getDate();
//             if (!uniqueForecastDays.includes(forecastDate)) {
//                 return uniqueForecastDays.push(forecastDate);
//             }
//         });

//         // Clearing previous weather data
//         cityInput.value = "";
//         currentWeatherDiv.innerHTML = "";
//         weatherCardsDiv.innerHTML = "";

//         // Creating weather cards and adding them to the DOM
//         fiveDaysForecast.forEach((weatherItem, index) => {
//             const html = createWeatherCard(cityName, weatherItem, index);
//             if (index === 0) {
//                 currentWeatherDiv.insertAdjacentHTML("beforeend", html);
//             } else {
//                 weatherCardsDiv.insertAdjacentHTML("beforeend", html);
//             }
//         });        
//     }).catch(() => {
//         alert("An error occurred while fetching the weather forecast!");
//     });
// }









// const getUserCoordinates = () => {
//     navigator.geolocation.getCurrentPosition(
//         position => {
//             const { latitude, longitude } = position.coords; // Get coordinates of user location
//             // Get city name from coordinates using reverse geocoding API
//             const API_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
//             fetch(API_URL).then(response => response.json()).then(data => {
//                 const { name } = data[0];
//                 getWeatherDetails(name, latitude, longitude);
//             }).catch(() => {
//                 alert("An error occurred while fetching the city name!");
//             });
//         },
//         error => { // Show alert if user denied the location permission
//             if (error.code === error.PERMISSION_DENIED) {
//                 alert("Geolocation request denied. Please reset location permission to grant access again.");
//             } else {
//                 alert("Geolocation request error. Please reset location permission.");
//             }
//         });
// }


searchButton.addEventListener("click", getAstroData);
// queryInput.addEventListener("keyup", e => e.key === "Enter" && getCityCoordinates());



// locationButton.addEventListener("click", getUserCoordinates);