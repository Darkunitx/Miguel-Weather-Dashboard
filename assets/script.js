var apikey = "2329612b90eeda34110cadd2c06ae7c5";
var searchFormEl = document.querySelector('.btn');


function handleSearchFormSubmit() {

    var searchInputVal = document.querySelector('#search-input').value;
    fetch("http://api.openweathermap.org/geo/1.0/direct?q="
        + searchInputVal
        + "&appid="
        + apikey)
        .then((response) => response.json())
        .then((data) => {

            var cityLat = data[0].lat
            var cityLon = data[0].lon
            console.log(cityLat);
            console.log(cityLon);
            console.log(data)


            var today = dayjs();
            $('#currentDate').text(today.format('dddd MMMM D YYYY'));

            var cityName = document.querySelector('#cityName');
            cityName.textContent = data[0].name;

            weatherChecker(cityLat, cityLon);
        });

}


function weatherChecker(lat, lon) {


    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`)
        .then((response) => response.json())
        .then((data) => {

        var currentTemp = document.querySelector('#currentTemp');
        currentTemp.textContent = "Current Temp: " + data.list[0].main.temp;
        
        var currentHumidity = document.querySelector('#currentHumidity');
        currentHumidity.textContent = "Current Humidity: " + data.list[0].main.humidity;

        var currentWindSpeed = document.querySelector('#currentWindSpeed');
        currentWindSpeed.textContent = "Current Wind Speed: " + data.list[0].wind.speed + " miles per hour.";



            console.log("secondApiCall", data)});




}

searchFormEl.addEventListener('click', handleSearchFormSubmit);
