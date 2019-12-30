//api keys for maps, weather, gov data, etc. are in the config.js. This is for security reasons so API keys don't get stolen.. 
var mapsKey = "AIzaSyCY_qAq37SMtQG_l9NvDHiXLr5A5FlhlZ0";

//this key will only work on local machines. Must have another variable with a Maps API key that is in this script.
var gKey = config.myGKey;

//this key will work on local and website.
var weatherKey = 'd9370cf81c44dc3900380fcc44da127d';

//when you create the queryURLs, you use var Gkey or var WeatherKey to replace where the API key is.

$(document).ready(function () {
    //add var names here
    var submitButton = $("#submitBtn");
    var clearButton = $("#clearBtn");
    var zipcodeInput = $("#zipcodeInput");
    var usState = $("#statesDropdown");
    var usCity = $("#cityInput");
    var mapBox = $("#map");
    var weatherBox = $(".weatherContent");

    //I just wanted to fade the header for fun. --CL
    $(window).on('scroll', function () {
        var header = $(".hero");
        if ($(this).scrollTop() > 50) {
            if (!header.data('faded')) header.data('faded', 1).stop(true).fadeTo(400, 0.2);
        } else if (header.data('faded')) {
            header.data('faded', 0).stop(true).fadeTo(400, 1);
        }
    });

    //when page loads, maps should be default Austin, TX, 50 mile range. THIS DOESN'T WORK YET.
    //https://developers.google.com/maps/documentation/javascript/tutorial


    //when page loads, weather should be default, Austin, TX. This is for current weather! 
    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=Austin,us&units=imperial&appid=" + WeatherKey;
    //We then create an AJAX call for Austin.
    $.ajax({
        url: currentWeather,
        method: "GET"
    }).then(function (response) {
        // Create CODE HERE to Log the queryURL
        console.log(currentWeather);
        // Create CODE HERE to log the resulting object
        console.log(response);
        //logging to see if query works.
        var cityEl = response.name;
        console.log(cityEl);
        $("#cityForecast").append(cityEl);
        //This is for current weather!
        var currentTempEl = response.main.temp;
        console.log(currentTempEl);
        $("#currentTemp").prepend(currentTempEl);
        var currentConditionEl = response.weather[0].description;
        $("#currentCondition").text(currentConditionEl);
    });

    // This is for forecast weather!
    var queryWeather = "https://api.openweathermap.org/data/2.5/forecast?q=Austin,us&units=imperial&appid=" + weatherKey;

    $.ajax({
        url: queryWeather,
        method: "GET"
    }).then(function (response) {
        // Create CODE HERE to Log the queryURL
        console.log(queryWeather);
        // Create CODE HERE to log the resulting object
        console.log(response);
        //logging to see if query works.
        var cityEl = response.city.name;
        console.log(cityEl);
        //THESE ARE FOR THE FORECAST!
        var tempEl1 = response.list[0].main.temp;
        console.log(tempEl1);
        $("#day1Temp").prepend(tempEl1);
        var day1ConditionEl = response.list[0].weather[0].description;
        $("#day1Condition").text(day1ConditionEl);

        var tempEl2 = response.list[8].main.temp;
        $("#day2Temp").prepend(tempEl2);
        var day2ConditionEl = response.list[8].weather[0].description;
        $("#day2Condition").text(day2ConditionEl);

        var tempEl3 = response.list[17].main.temp;
        $("#day3Temp").prepend(tempEl3);
        var day3ConditionEl = response.list[17].weather[0].description;
        $("#day3Condition").text(day3ConditionEl);

        var tempEl4 = response.list[26].main.temp;
        $("#day4Temp").prepend(tempEl4);
        var day4ConditionEl = response.list[26].weather[0].description;
        $("#day4Condition").text(day4ConditionEl);

        var tempEl5 = response.list[35].main.temp;
        $("#day5Temp").prepend(tempEl5);
        var day5ConditionEl = response.list[35].weather[0].description;
        $("#day5Condition").text(day5ConditionEl);
    });
    //when the page loads, user input is clear/empty.


    //when you click on submit, we will take note of city/state || zip, and radius. THIS DOESN'T WORK YET
    submitButton.click(function () {
        //pull data Google Maps.




        //using use the location from Google maps (radius) to find any public land from the Govt API. 
        /* 
        https://catalog.data.gov/dataset/usgs-national-boundary-dataset-nbd-downloadable-data-collectionbc141
        https://catalog.data.gov/dataset/trail-line-and-point-features-u-s-fish-and-wildlife-service
    
        */



        //using user input City/State or Zip, pull weather data.

        /*
        https://openweathermap.org/forecast5 use this for 5 day forecast 
        for city/state : https://api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
        example: https://api.openweathermap.org/data/2.5/forecast?q=Austin,us&units=imperial
    
        for zip : https://api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}
        example: https://api.openweathermap.org/data/2.5/forecast?zip=94040,us
        */


        //display results in correct divs.


        //when clear is clicked, the page resets. DOES NOT WORK!!!
        clearButton.on("click", function () {
            $('select option:contains("Select Dropdown")').prop('selected', true);
            zipcodeInput.val("");
        });
    });

});