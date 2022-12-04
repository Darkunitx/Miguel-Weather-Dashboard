$(document).ready(function() {


var apikey = "2329612b90eeda34110cadd2c06ae7c5";
var searchFormEl = document.querySelector('#search-input');


function handleSearchFormSubmit() {
  
    var searchInputVal = document.querySelector('#search-input').value;
    console.log(searchInputVal);


}

handleSearchFormSubmit();



function weatherChecker () {


    fetch("https://api.openweathermap.org/data/2.5/forecast?"
    + "lat=44.7"
    + "&lon=56.576"
     + "&limit=5"
     + "&appid="
     + apikey )
      .then((response) => response.json())
      .then((data) => console.log(data));
}

weatherChecker();

searchFormEl.addEventListener('click', handleSearchFormSubmit);

});
