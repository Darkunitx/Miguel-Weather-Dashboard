var apikey = "2329612b90eeda34110cadd2c06ae7c5";
var searchFormEl = document.querySelector('#search-input');


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

            weatherChecker(cityLat, cityLon);
        });


    console.log(searchInputVal);


}


function weatherChecker(lat, lon) {


    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`)
        .then((response) => response.json())
        .then((data) => console.log("secondApiCall", data));
}

searchFormEl.addEventListener('click', handleSearchFormSubmit);
