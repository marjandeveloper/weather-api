// Select html elements
const elementSelectCityName = document.querySelector('#city-name')
const elementWeatherTemp = document.querySelector('.weather-temp')
const elementTempNum = document.querySelector('#temp-num')
const celsius = document.querySelector('.celsius')
const fahrenheit = document.querySelector('.fahrenheit')
const elementWeather = document.getElementById('weather')
const elementWindSpeed = document.querySelector('#wind-speed')
const elementDescription = document.querySelector('#description')
const elementIcon = document.querySelector('#icon')

// Check if geolocation exists
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPos)
}

// Get city position
function getPos(position) {
  const { latitude, longitude } = position.coords
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=640ac0c6c2875d638b61f49ab179ab19&units=metric`
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => setData(data))
  //   weather.innerHTML = `Latitude: ${latitude} </br> Longitude: ${longitude}`
}

// Function for setting data
function setData(dataWeather) {
  const countryCode = dataWeather.sys.country
  const windSpeed = dataWeather.wind.speed
  console.log
  console.log(dataWeather, windSpeed)
  const cityName = dataWeather.name
  const description = dataWeather.weather[0].description
  const celSign = '\u2103'
  const fahrSign = '\u2109'
  const weatherCelsiulDegree = `${Math.floor(dataWeather.main.temp)}`
  const weatherFahrenheitDegree = `${Math.floor(
    weatherCelsiulDegree * 1.8 + 32.0
  )}`

  // Set temperature data
  elementSelectCityName.innerHTML = cityName.toUpperCase()
  const iconCode = dataWeather.weather[0].icon
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`
  elementIcon.src = iconUrl
  elementDescription.innerHTML = description
  elementWindSpeed.innerHTML = `${windSpeed} m/s`
  // Init temperature
  elementTempNum.innerHTML = weatherCelsiulDegree
  celsius.innerHTML = celSign
  fahrenheit.innerHTML = fahrSign

  // Change temperature on click
  if (celsius.classList.contains('active')) {
    fahrenheit.style.color = 'rgba(68, 141, 238, 0.6)'
    fahrenheit.style.cursor = 'pointer'
  }

  // Add event click
  fahrenheit.addEventListener('click', () => {
    elementTempNum.innerHTML = weatherFahrenheitDegree
    fahrenheit.style.cursor = 'text'
    fahrenheit.classList.add('active')
    fahrenheit.style.color = 'rgba(68, 141, 238, 1)'
    celsius.classList.remove('active')
    celsius.style.color = 'rgba(68, 141, 238, 0.6)'
    celsius.style.cursor = 'pointer'
  })
  celsius.addEventListener('click', () => {
    elementTempNum.innerHTML = weatherCelsiulDegree
    celsius.style.cursor = 'text'
    celsius.classList.add('active')
    celsius.style.color = 'rgba(68, 141, 238, 1)'
    fahrenheit.classList.remove('active')
    fahrenheit.style.color = 'rgba(68, 141, 238, 0.6)'
    fahrenheit.style.cursor = 'pointer'
  })
}
