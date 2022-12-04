function weatherChecker () {

    var apikey = "2329612b90eeda34110cadd2c06ae7c5";

    fetch("https://api.openweathermap.org/data/2.5/forecast?q="
     + "&appid="
      + apikey )
      .then((response) => response.json())
      .then((data) => console.log(data));
}
weatherChecker();
