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
            console.log(today);
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
        var tempOne = document.querySelector('#temp1');
        var tempTwo = document.querySelector('#temp2');
        var tempThree = document.querySelector('#temp3');
        var tempFour = document.querySelector('#temp4');
        var tempFive = document.querySelector('#temp5');
        currentTemp.textContent = "Current Temp: " + data.list[0].main.temp + " Degrees Fahrenheit";
        tempOne.textContent = "Temp: " + data.list[8].main.temp + " Degrees Fahrenheit";
        tempTwo.textContent = "Temp: " + data.list[16].main.temp + " Degrees Fahrenheit";
        tempThree.textContent = "Temp: " + data.list[24].main.temp + " Degrees Fahrenheit";
        tempFour.textContent = "Temp: " + data.list[32].main.temp  + " Degrees Fahrenheit";
        tempFive.textContent = "Temp: " + data.list[39].main.temp  + " Degrees Fahrenheit";
        
        var currentHumidity = document.querySelector('#currentHumidity');
        var humidityOne = document.querySelector('#humidity1');
        var humidityTwo = document.querySelector('#humidity2');
        var humidityThree = document.querySelector('#humidity3');
        var humidityFour = document.querySelector('#humidity4');
        var humidityFive = document.querySelector('#humidity5');
        currentHumidity.textContent = "Current Humidity: " + data.list[0].main.humidity + " %";
        humidityOne.textContent = "Current Humidity: " + data.list[8].main.humidity + " %";
        humidityTwo.textContent = "Current Humidity: " + data.list[16].main.humidity + " %";
        humidityThree.textContent = "Current Humidity: " + data.list[24].main.humidity + " %";
        humidityFour.textContent = "Current Humidity: " + data.list[32].main.humidity + " %";
        humidityFive.textContent = "Current Humidity: " + data.list[39].main.humidity + " %";

        var currentWindSpeed = document.querySelector('#currentWindSpeed');
        currentWindSpeed.textContent = "Current Wind Speed: " + data.list[0].wind.speed + " miles per hour.";



            console.log("secondApiCall", data)});




}

searchFormEl.addEventListener('click', handleSearchFormSubmit);
