const weatherDiv = document.getElementById("weather");
navigator.geolocation.getCurrentPosition(async (pos) => {
    const { latitude, longitude } = pos.coords;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p>${data.main.temp}°C</p>
    `;
});