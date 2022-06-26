const weather = document.getElementById('weather')
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPos)
}

function getPos(position) {
  const { latitude, longitude } = position.coords
  const cityName = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=640ac0c6c2875d638b61f49ab179ab19`
  fetch(cityName)
    .then((response) => response.json())
    .then((data) => console.log(data))
  //   weather.innerHTML = `Latitude: ${latitude} </br> Longitude: ${longitude}`
}
