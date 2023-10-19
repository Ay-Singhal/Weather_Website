const apiKey = "4207a44f413f12cbb7d525120f74ef44";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

const weatherIconEl = document.querySelector(".weather-icon")
const weatherEl = document.querySelector(".weather")

async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        weatherEl.style.display = "none"
        return;
    }else{
        document.querySelector(".error").style.display = "none";
        var data = await response.json()
        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main == "Clouds") {
                weatherIconEl.src = "icons/clouds.png";
            }else if (data.weather[0].main == "Clear") {
            weatherIconEl.src = "icons/clear.png";
            }else if (data.weather[0].main == "Rain") {
            weatherIconEl.src = "icons/rain.png";
            }else if (data.weather[0].main == "Drizzle") {
            weatherIconEl.src = "icons/drizzle.png";
            }else if (data.weather[0].main == "Mist") {
            weatherIconEl.src = "icons/mist.png";
            }else if (data.weather[0].main == "Snow") {
            weatherIconEl.src = "icons/snow.png";
            }
            weatherEl.style.display="block"
        }
    }
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})