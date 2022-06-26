const weather = document.getElementById('weather')
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPos)
}

function getPos(position) {
  const { latitude, longitude } = position.coords
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=640ac0c6c2875d638b61f49ab179ab19&lang=sr&units=metric`
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => setData(data))
  //   weather.innerHTML = `Latitude: ${latitude} </br> Longitude: ${longitude}`
}
function setData(dataWeather) {
  const cityName = dataWeather.name
  const description = dataWeather.weather[0].description
  const celSign = '\u2103'
  const celsiulDegree = `${Math.floor(dataWeather.main.temp)}${celSign}`
  console.log(cityName)
  console.log(description)
  console.log(celsiulDegree)
}
