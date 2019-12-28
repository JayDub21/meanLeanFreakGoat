//api keys for maps, weather, gov data, etc. are in the config.js. This is for security reasons so API keys don't get stolen.
//WHEN YOU ADD AN API KEY, ADD IT TO CONFIG.JS. 

var Gkey = config.myGKey;

var WeatherKey = config.myWKey;

//when you create the queryURLs, you use var Gkey or var WeatherKey to replace where the API key is.

$(document).ready(function () {
    //add var names here
    var submitButton = $("#submitBtn");
    var cancelButton = $("#cancelBtn");
    var zipcodeInput = $("#zipcodeInput");
    var usState = $("#statesDropdown");
    var usCity = $("#cityInput");

    //when the page loads, everything is clear/empty.


    //when you click on submit, we will take note of city/state || zip, and radius.
    submitButton.click(function () {
        //pull data Google Maps.




        //using use the location from Google maps (radius) to find any public land from the Govt API. 




        //using user input City/State or Zip, pull weather data.

        /*
        https://openweathermap.org/forecast5 use this for 5 day forecast 
        for city/state : api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
        example: api.openweathermap.org/data/2.5/forecast?q=Austin,us&mode=xml

        for zip : api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}
        example: api.openweathermap.org/data/2.5/forecast?zip=94040,us
        */


        //display results in correct divs.


    });
    //when cancel is clicked, the page resets.
    cancelButton.on("click", function () {
        $('select option:contains("Select Dropdown")').prop('selected', true);
        zipcodeInput.val("");
    });

});