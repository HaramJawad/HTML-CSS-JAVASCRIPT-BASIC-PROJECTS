let cityName = document.getElementById("city-name");
let button = document.getElementById("fetch-data");
let weatherDetails = document.getElementById("weather-Details");
let errorMsg = document.getElementById("error-Msg");
button.addEventListener("click", () => {

  let City = cityName.value.trim();
  let cityPattern = /^[A-Za-z\s]+$/;
  if (!cityPattern.test(City)) {
    errorMsg.innerText = "Please enter a valid city name.";
    return;
  }
  document.getElementById("loading-spinner").style.display = "block";
  let apiUrl = `https://wttr.in/${City}?format=%C+%t+Humidity:%h`;

  fetch(apiUrl)
    .then(response => response.text())
    .then(data => {

      let weatherCondition = data.split(" ")[0];
      let Temp = data.split(" ")[1];
      let Humidity = data.split(" ")[2];
      let Emoji = "";
      if (weatherCondition.includes("Sunny")) {
        Emoji = "🌞";
        bgGradient = "linear-gradient(to bottom, #ffdd44, #ffcc00)";
      }
      else if (weatherCondition.includes("Rain")) {
        Emoji = "🌧";
        bgGradient = "linear-gradient(to bottom, #4a90e2, #0f5ba8)"
      }
      else if (weatherCondition.includes("Cloudy")) {
        Emoji = "☁";
        bgGradient = "linear-gradient(to bottom, #a1a1a1, #595959)"
      }
      else if (weatherCondition.includes("Snow")) {
        Emoji = "❄";
        bgGradient = "linear-gradient(to bottom, #eef5ff, #cce7ff)"
      }
      else if (weatherCondition.includes("Clear")) {
        Emoji = "🌙";
        bgGradient = "linear-gradient(to bottom, #2c3e50, #1c2833)"
      }
      else if (weatherCondition.includes("Partly")) {
        Emoji = "⛅";
        bgGradient = "linear-gradient(to bottom, #bdc3c7, #2c3e50)"
      }
      else if (weatherCondition.includes("Thunderstorm")) {
        Emoji = "⚡";
        bgGradient = "linear-gradient(to bottom, #232526, #414345)"
      }
      else if (weatherCondition.includes("Fog")) {
        Emoji = "🌫";
        bgGradient = "linear-gradient(to bottom, #777, #ccc)"
      }
      else {
        Emoji = "❓";
        bgGradient = "linear-gradient(to bottom, #fff, #ddd)";
      }
      document.querySelector(".main").style.background = bgGradient;
      document.querySelector(".main").style.backdropFilter = "blur(10px)";
      document.getElementById("weather-Details").innerText = `Weather: ${weatherCondition} ${Emoji}\nTemperature: ${Temp}\n ${Humidity}`;
      document.getElementById("loading-spinner").style.display = "none";

    })
    .catch(error => {
      weatherDetails.innerText = "";
      document.getElementById("error-Msg").innerText = `Error Fetching Data.Please try again.`;
      console.error('Error Fetching Data:', error);
      document.getElementById("loading-spinner").style.display = "none";
    })

})
cityName.addEventListener('input', () => {
  if (cityName.value === "")
    weatherDetails.textContent = "";
  errorMsg.textContent = "";
})
cityName.addEventListener('keypress', (event) => {
  if (event.key === "Enter") {
    button.click();
  }
});