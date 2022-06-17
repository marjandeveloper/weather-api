const weather = document.getElementById("weather")
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPos);
}

function getPos(position) {
    const {latitude, longitude} = position.coords;
    weather.innerHTML = `Latitude: ${latitude} </br> Longitude: ${longitude}`;
}
