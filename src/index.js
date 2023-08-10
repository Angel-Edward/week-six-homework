let now = new Date();
console.log(now);
let h2 = document.querySelector("h2");
let hours = now.getHours();
if (hours < 10) {
  hours = "0 ${hours}";
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = "0 ${minutes}";
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
h2.innerHTML = `${day},${hours}:${minutes}`;
function showCity(event) {
  event.preventDefault();

  let cityName = document.querySelector("#city-name");
  let searchInput = document.querySelector("#search-input");
  cityName.innerHTML = searchInput.value;
}

let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", showCity);

let apiKey = "2791627ab7d7d3405";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value} & appid=${apiKey}& units=metric`;
function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("h3");
  temperatureElement.innerHTML = `${response.data.main.h3}`;
  console.log(temperature);
}
axios.get(apiUrl).then(showTemperature);

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "6d1e8e30b5ed19d2791627ab7d7d3405";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  console.log(apiUrl);
}
navigator.geolocation.getCurrentPosition(showPosition);
