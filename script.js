console.log("This is weather app");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '90d3170c2cmsh79030fb1639b2a2p1625d8jsn412007095b7b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) => {
    cityName.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response); 
            temparature.innerHTML = `<h3>Temparature : ${response.temp}°C</h3>`;

            max_temp.innerHTML = `<li>Maximum temparature : ${response.max_temp}</li>`;
            min_temp.innerHTML = `<li>Minimum tempareture : ${response.min_temp}</li>`;
            sunrise.innerHTML = `<li>Sunrise : ${response.sunrise}</li>`;
            sunset.innerHTML = `<li>Sunset : ${response.sunset}</li>`;

            cloud_pct.innerHTML = `<li>${response.cloud_pct}</li>`; 
            humidity.innerHTML = `<li>Humidity : ${response.humidity}</li>`;
            wind_degrees.innerHTML = `<li>Wind degrees : ${response.wind_degrees}</li>`;
            wind_speed.innerHTML = `<li>Wind speed : ${response.wind_speed}</li>`;
            // feels_like.innerHTML = `<li>${response.feels_like}</li>`;
            // temp.innerHTML = `<li>${response.temp}</li>`;

        })
        .catch(err => console.error(err));

}


submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(city.value)
})


getWeather("Mumbai"); 