var apikey = "2329612b90eeda34110cadd2c06ae7c5";
var searchFormEl = document.querySelector('.btn');


function handleSearchFormSubmit() {

    var searchInputVal = document.querySelector('#search-input').value;
    fetch("https://api.openweathermap.org/geo/1.0/direct?q="
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

        var dateOne = document.querySelector('#date1');
        var dateTwo = document.querySelector('#date2');
        var dateThree = document.querySelector('#date3');
        var dateFour = document.querySelector('#date4');
        var dateFive = document.querySelector('#date5');
        dateOne.textContent = "Date: " + data.list[8].dt_txt;
        dateTwo.textContent = "Date: " + data.list[16].dt_txt;
        dateThree.textContent = "Date: " + data.list[24].dt_txt;
        dateFour.textContent = "Date: " + data.list[32].dt_txt;
        dateFive.textContent = "Date: " + data.list[39].dt_txt;


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
        humidityOne.textContent = "Humidity: " + data.list[8].main.humidity + " %";
        humidityTwo.textContent = "Humidity: " + data.list[16].main.humidity + " %";
        humidityThree.textContent = "Humidity: " + data.list[24].main.humidity + " %";
        humidityFour.textContent = "Humidity: " + data.list[32].main.humidity + " %";
        humidityFive.textContent = "Humidity: " + data.list[39].main.humidity + " %";

        var currentWindSpeed = document.querySelector('#currentWindSpeed');
        var windSpeedOne = document.querySelector('#windSpeed1');
        var windSpeedTwo = document.querySelector('#windSpeed2');
        var windSpeedThree = document.querySelector('#windSpeed3');
        var windSpeedFour = document.querySelector('#windSpeed4');
        var windSpeedFive = document.querySelector('#windSpeed5');
        currentWindSpeed.textContent = "Current Wind Speed: " + data.list[0].wind.speed + " miles per hour.";
        windSpeedOne.textContent = "Wind Speed: " + data.list[8].wind.speed + " miles per hour.";
        windSpeedTwo.textContent = "Wind Speed: " + data.list[16].wind.speed + " miles per hour.";
        windSpeedThree.textContent = "Wind Speed: " + data.list[24].wind.speed + " miles per hour.";
        windSpeedFour.textContent = "Wind Speed: " + data.list[32].wind.speed + " miles per hour.";
        windSpeedFive.textContent = "Wind Speed: " + data.list[39].wind.speed + " miles per hour.";

        var currentIcon = document.querySelector('#currentIcon');
        var iconOne = document.querySelector('#icon1');
        var iconTwo = document.querySelector('#icon2');
        var iconThree = document.querySelector('#icon3');
        var iconFour = document.querySelector('#icon4');
        var iconFive = document.querySelector('#icon5');
        currentIcon.innerHTML =`Icon: <img src=http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png>`;
        iconOne.innerHTML =`Icon: <img src=http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png>`;
        iconTwo.innerHTML =`Icon: <img src=http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png>`;
        iconThree.innerHTML =`Icon: <img src=http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}.png>`;
        iconFour.innerHTML =`Icon: <img src=http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}.png>`;
        iconFive.innerHTML =`Icon: <img src=http://openweathermap.org/img/wn/${data.list[39].weather[0].icon}.png>`;




            console.log("secondApiCall", data)});




}

searchFormEl.addEventListener('click', handleSearchFormSubmit);
