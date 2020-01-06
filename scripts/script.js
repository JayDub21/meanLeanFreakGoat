//this key will work on local and website.
var weatherKey = 'd9370cf81c44dc3900380fcc44da127d';

//when you create the queryURLs, you use var Gkey or var weatherKey to replace where the API key is.

$(document).ready(function () {
    //add var names here
    var submitButton = $("#submitBtn");
    var clearButton = $("#clearBtn");
    var zipcodeInput = $("#zipcodeInput");
    var usState = $("#statesDropdown");
    var usCity = $("#cityInput");
    var mapBox = $("#map");

    //I just wanted to fade the header for fun. --CL
    $(window).on('scroll', function () {
        var header = $(".hero");
        if ($(this).scrollTop() > 50) {
            if (!header.data('faded')) header.data('faded', 1).stop(true).fadeTo(400, 0.2);
        } else if (header.data('faded')) {
            header.data('faded', 0).stop(true).fadeTo(400, 1);
        }
    });

    //when page loads, weather should be default, Austin, TX. This is for current weather! 

    var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=Austin,us&units=imperial&appid=" + weatherKey;
    //We then create an AJAX call for Austin.
    $.ajax({
        url: currentWeather,
        method: "GET"
    }).then(function (response) {
        //Log the queryURL
        console.log(currentWeather);
        //Log the resulting object
        console.log(response);
        //logging to see if query works.
        var cityEl = response.name;
        $("#cityForecast").html("Weather Forecast: " + cityEl);
        //This is for current weather!
        var currentTempEl = response.main.temp;
        console.log(currentTempEl);
        $("#currentTemp").html(currentTempEl + "&deg;F");
        //current weather conditions
        var currentConditionEl = response.weather[0].description;
        $("#currentCondition").text(currentConditionEl);
        //current weather icon
        var iconCode = response.weather[0].id;
        var flowersIcon = "wi wi-owm-" + iconCode;
        console.log(flowersIcon);
        $("#currentIcon").attr('class', flowersIcon);
    });

    // This is for forecast weather!
    var queryWeather = "https://api.openweathermap.org/data/2.5/forecast?q=Austin,us&units=imperial&appid=" + weatherKey;

    $.ajax({
        url: queryWeather,
        method: "GET"
    }).then(function (response) {
        //Log the queryURL
        console.log(queryWeather);

        console.log(response);
        //THESE ARE FOR THE FORECAST!
        var tempEl1 = response.list[0].main.temp;
        console.log(tempEl1);
        $("#day1Temp").html(tempEl1 + "&deg;F");
        var day1ConditionEl = response.list[0].weather[0].description;
        $("#day1Condition").text(day1ConditionEl);
        var day1Icon = response.list[0].weather[0].id;
        var flowersD1Icon = "wi wi-owm-" + day1Icon;
        $("#day1Icon").attr('class', flowersD1Icon);

        var tempEl2 = response.list[8].main.temp;
        $("#day2Temp").html(tempEl2 + "&deg;F");
        var day2ConditionEl = response.list[8].weather[0].description;
        $("#day2Condition").text(day2ConditionEl);
        var day2Icon = response.list[8].weather[0].id;
        var flowersD2Icon = "wi wi-owm-" + day2Icon;
        $("#day2Icon").attr('class', flowersD2Icon);

        var tempEl3 = response.list[17].main.temp;
        $("#day3Temp").html(tempEl3 + "&deg;F");
        var day3ConditionEl = response.list[17].weather[0].description;
        $("#day3Condition").text(day3ConditionEl);
        var day3Icon = response.list[17].weather[0].id;
        var flowersD3Icon = "wi wi-owm-" + day3Icon;
        $("#day3Icon").attr('class', flowersD3Icon);


        var tempEl4 = response.list[26].main.temp;
        $("#day4Temp").html(tempEl4 + "&deg;F");
        var day4ConditionEl = response.list[26].weather[0].description;
        $("#day4Condition").text(day4ConditionEl);
        var day4Icon = response.list[26].weather[0].id;
        var flowersD4Icon = "wi wi-owm-" + day4Icon;
        $("#day4Icon").attr('class', flowersD4Icon);

        var tempEl5 = response.list[35].main.temp;
        $("#day5Temp").html(tempEl5 + "&deg;F");
        var day5ConditionEl = response.list[35].weather[0].description;
        $("#day5Condition").text(day5ConditionEl);
        var day5Icon = response.list[35].weather[0].id;
        var flowersD5Icon = "wi wi-owm-" + day5Icon;
        $("#day5Icon").attr('class', flowersD5Icon);
    });

    //when the page loads, user input is clear/empty.


    //when you click on submit, we will take note of city/state || zip, and radius. THIS DOESN'T WORK YET
    submitButton.click(function () {

        var userCurrentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + (usCity[0].value || zipcodeInput[0].value) + ",us&units=imperial&appid=" + weatherKey;

        $.ajax({
            url: userCurrentWeather,
            method: "GET"
        }).then(function (response) {
            var cityEl = response.name;
            $("#cityForecast").html("Weather Forecast: " + cityEl);
            //This is for current weather!
            var currentTempEl = response.main.temp;
            $("#currentTemp").html(currentTempEl + "&deg;F");

            var currentConditionEl = response.weather[0].description;
            $("#currentCondition").text(currentConditionEl);
            var iconCode = response.weather[0].id;
            var flowersIcon = "wi wi-owm-" + iconCode;
            console.log(flowersIcon);
            $("#currentIcon").attr('class', flowersIcon);
        });

        //using user input City/State or Zip, pull weather data.
        var userInputForecastQuery = "https://api.openweathermap.org/data/2.5/forecast?q=" + (usCity[0].value || zipcodeInput[0].value) + ",us&units=imperial&appid=" + weatherKey;

        $.ajax({
            url: userInputForecastQuery,
            method: "GET"
        }).then(function (response) {
            //THESE ARE FOR THE FORECAST!
            var tempEl1 = response.list[0].main.temp;
            console.log(tempEl1);
            $("#day1Temp").html(tempEl1 + "&deg;F");
            var day1ConditionEl = response.list[0].weather[0].description;
            $("#day1Condition").text(day1ConditionEl);
            var day1Icon = response.list[0].weather[0].id;
            var flowersD1Icon = "wi wi-owm-" + day1Icon;
            $("#day1Icon").attr('class', flowersD1Icon);

            var tempEl2 = response.list[8].main.temp;
            $("#day2Temp").html(tempEl2 + "&deg;F");
            var day2ConditionEl = response.list[8].weather[0].description;
            $("#day2Condition").text(day2ConditionEl);
            var day2Icon = response.list[8].weather[0].id;
            var flowersD2Icon = "wi wi-owm-" + day2Icon;
            $("#day2Icon").attr('class', flowersD2Icon);

            var tempEl3 = response.list[17].main.temp;
            $("#day3Temp").html(tempEl3 + "&deg;F");
            var day3ConditionEl = response.list[17].weather[0].description;
            $("#day3Condition").text(day3ConditionEl);
            var day3Icon = response.list[17].weather[0].id;
            var flowersD3Icon = "wi wi-owm-" + day3Icon;
            $("#day3Icon").attr('class', flowersD3Icon);

            var tempEl4 = response.list[26].main.temp;
            $("#day4Temp").html(tempEl4 + "&deg;F");
            var day4ConditionEl = response.list[26].weather[0].description;
            $("#day4Condition").text(day4ConditionEl);
            var day4Icon = response.list[26].weather[0].id;
            var flowersD4Icon = "wi wi-owm-" + day4Icon;
            $("#day4Icon").attr('class', flowersD4Icon);

            var tempEl5 = response.list[35].main.temp;
            $("#day5Temp").html(tempEl5 + "&deg;F");
            var day5ConditionEl = response.list[35].weather[0].description;
            $("#day5Condition").text(day5ConditionEl);
            var day5Icon = response.list[35].weather[0].id;
            var flowersD5Icon = "wi wi-owm-" + day5Icon;
            $("#day5Icon").attr('class', flowersD5Icon);
        });

        //dropdown option linked to clickable map info -- KI
         $("#stateDropdown").on('submitBtn', function() {
            $("#g5")
         });


        clearButton.on("click", function () {
            $('select option:contains("Select Dropdown")').prop('selected', true);
            usCity[0].value = "";
            zipcodeInput[0].value = "";
        });
    });

});

// Links to Forest Service & BLM
// Globally naming variables  
var aTag = document.getElementById('link');
var aTag2 = document.getElementById('link2');
var aTag3 = document.getElementById('link3');
var wTag = document.getElementById('wLink');

$(document).ready(function () {

    // WILDERNESS.net - Learn About Wilderness | Appears when ANY state is clicked
    $('#g5').on('click', function () {
        wTag.setAttribute('href', "https://wilderness.net/learn-about-wilderness/default.php");
        wTag.innerText = "US Wilderness Info"
    });
    // Any other links (safety (DOGS MUST YIELD TO HORSE RIDING)) that we want to appear with ALL clicks????


    // ALAKSA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#AK').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/alaska");
        aTag.innerText = "Alaska BLM";
    });

    $('#AK').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/r10");
        aTag2.innerText = "Alaska Forest Service";
    });
    // Some states needed 2 forest service links, so this replaces those with blank strings,
    // and can also be used for other sites helpful to that state.
    $('#AK').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });



    // ALABAMA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#AL').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/office/southeastern-states");
        aTag.innerText = "Alabama BLM";
    });

    $('#AL').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/detail/alabama/home/?cid=STELPRDB5378975");
        aTag2.innerText = "Alabama Forest Service";
    });

    $('#AL').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });



    // ARKANSAS -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#AR').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/blog/2019-08-08/little-rock-arkansas");
        aTag.innerText = "Arkansas BLM";
    });

    $('#AR').on('click', function () {
        aTag2.setAttribute('href', "https://www.arkansasstateparks.com/parks/map");
        aTag2.innerText = "Arkansas Forest Service";
    });

    $('#AR').on('click', function () {
        aTag3.setAttribute('href', "https://www.fs.usda.gov/ouachita/");
        aTag3.innerText = "Arkansas - Ouachita National Forest";
    });



    // ARIZONA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#AZ').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/arizona");
        aTag.innerText = "Arizona BLM";
    });

    $('#AZ').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/tonto/");
        aTag2.innerText = "Arizona Forest Service";
    });

    $('#AZ').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });


    // CALIFORNIA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#CA').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/california");
        aTag.innerText = "Califonia BLM";
    });

    $('#CA').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/detail/r5/about-region/?cid=stelprdb5274212");
        aTag2.innerText = "California Forest Service";
    });

    $('#CA').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });


    // COLORADO -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#CO').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/colorado");
        aTag.innerText = "Colorado BLM";
    });

    $('#CO').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.fed.us/r2/recreation/map/colorado/html-current/colorado-hi-speed-index.shtml");
        aTag2.innerText = "Colorado Forest Service";
    });

    $('#CO').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });


    // CONNECTICUT -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#CT').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/office/northeastern-states");
        aTag.innerText = "Connecticut BLM";
    });

    $('#CT').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.fed.us/ivm/");
        aTag2.innerText = "Connecticut Forest Service";
    });

    $('#CT').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });


    // DELAWARE -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#DE').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/office/northeastern-states");
        aTag.innerText = "Delaware BLM";
    });

    $('#DE').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.fed.us/ivm/");
        aTag2.innerText = "Delaware Forest Service";
    });

    $('#DE').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });


    // FLORIDA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#FL').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/office/southeastern-states");
        aTag.innerText = "Florida BLM";
    });

    $('#FL').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/florida");
        aTag2.innerText = "Florida Forest Service";
    });

    $('#FL').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });



    // GEORGIA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#GA').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/office/southeastern-states");
        aTag.innerText = "Georgia BLM";
    });

    $('#GA').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/conf");
        aTag2.innerText = "Georgia Forest Service";
    });

    $('#GA').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });



    // HAWAI'I -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#HI').on('click', function () {
        aTag.setAttribute('href', "https://camping.ehawaii.gov/camping/welcome.html");
        aTag.innerText = "Hawai'i Camping Reservation System";
    });

    $('#HI').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/detail/r5/about-region/?cid=stelprdb5274212");
        aTag2.innerText = "Hawai'i Forest Service";
    });

    $('#HI').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });



    // IDAHO -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#ID').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/idaho");
        aTag.innerText = "Idaho BLM";
    });

    $('#ID').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/detail/r5/about-region/?cid=stelprdb5274212");
        aTag2.innerText = "Idaho Panhandle Forest Service";
    });

    $('#ID').on('click', function () {
        aTag3.setAttribute('href', "https://www.fs.usda.gov/boise");
        aTag3.innerText = "Idaho Boise Forest Service";
    });



    // ILLINOIS -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#IL').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Illinois BLM";
    });

    $('#IL').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/shawnee");
        aTag2.innerText = "Illinois Forest Service";
    });

    $('#IL').on('click', function () {
        aTag3.setAttribute('href', "https://www.dnr.illinois.gov/Parks/Pages/default.aspx");
        aTag3.innerText = "Illinois State Parks";
    });



    // INDIANA -- On Clicks That Add Links to Anchor Tags:(link, link2, link3, wLink)
    $('#IN').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Indiana BLM";
    });

    $('#IN').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/hoosier/");
        aTag2.innerText = "Indiana Forest Service";
    });

    $('#IN').on('click', function () {
        aTag3.setAttribute('href', "https://www.in.gov/dnr/parklake/");
        aTag3.innerText = "Indiana State Parks";
    });



    // IOWA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#IA').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Iowa BLM";
    });

    $('#IA').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.fed.us/ivm/");
        aTag2.innerText = "Iowa Forest Service";
    });

    $('#IA').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });



    // KANSAS -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#KS').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/new-mexico");
        aTag.innerText = "Kansas BLM";
    });

    $('#KS').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.fed.us/ivm/");
        aTag2.innerText = "Kansas Forest Service";
    });

    $('#KS').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });



    // KENTUCKY -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#KY').on('click', function () {
        aTag.setAttribute('href', "https://www.fs.usda.gov/gwj");
        aTag.innerText = "Kentucky - George Washington & Jefferson NF";
    });

    $('#KY').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/dbnf/");
        aTag2.innerText = "Kentucky - Daniel Boone NF";
    });

    $('#KY').on('click', function () {
        aTag3.setAttribute('href', "https://www.landbetweenthelakes.us/");
        aTag3.innerText = "Kentucky - Land Between the Lakes NF";
    });



    // LOUISIANA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#LA').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Louisiana BLM";
    });

    $('#LA').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/kisatchie");
        aTag2.innerText = "Louisiana - Kisatchie National Forest";
    });

    $('#LA').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });



    // MAINE -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#ME').on('click', function () {
        aTag.setAttribute('href', "https://www.nps.gov/acad/index.htm");
        aTag.innerText = "Maine - Acadia Nationsl Park";
    });

    $('#ME').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/whitemountain");
        aTag2.innerText = "Maine - White Mountain National Forest";
    });

    $('#ME').on('click', function () {
        aTag3.setAttribute('href', "https://www.fs.fed.us/ivm/");
        aTag3.innerText = "National Forest Map";
    });



    // MARYLAND -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#MD').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Maryland BLM";
    });

    $('#MD').on('click', function () {
        aTag2.setAttribute('href', "https://dnr.maryland.gov/Publiclands/Pages/parkmap.aspx");
        aTag2.innerText = "Maryland State Parks";
    });

    $('#MD').on('click', function () {
        aTag3.setAttribute('href', "https://dnr.maryland.gov/Wildlife/Pages/publiclands/home.aspx");
        aTag3.innerText = "Maryland - Wildlife and Heritage Service";
    });



    // MASSACHUSETTS -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#MA').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Massachusetts BLM";
    });

    $('#MA').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.fed.us/ivm/");
        aTag2.innerText = "Massachusetts Natioanal Forest";
    });

    $('#MA').on('click', function () {
        aTag3.setAttribute('href', "https://www.mass.gov/guides/guide-to-recreation-in-state-parks");
        aTag3.innerText = "Massachusetts State Parks";
    });



    // MICHIGAN -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#MI').on('click', function () {
        aTag.setAttribute('href', "https://www.fs.usda.gov/ottawa/");
        aTag.innerText = "Michigan - Ottawa National Forest";
    });

    $('#MI').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/hiawatha");
        aTag2.innerText = "Michigan - Hiawatha National Forest";
    });

    $('#MI').on('click', function () {
        aTag3.setAttribute('href', "https://www.fs.usda.gov/hmnf/");
        aTag3.innerText = "Michigan - Huron-Mainstee National Forest";
    });



    // MINNESOTA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#MN').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Minnesota BLM";
    });

    $('#MN').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/superior/");
        aTag2.innerText = "Minnesota - Superior National Forest";
    });

    $('#MN').on('click', function () {
        aTag3.setAttribute('href', "https://www.fs.usda.gov/chippewa");
        aTag3.innerText = "Minnesota - Chippewa National Forest";
    });



    // MISSISSIPPI -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#MS').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Mississippi BLM";
    });

    $('#MS').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/mississippi/");
        aTag2.innerText = "Mississippi National Forests";
    });

    $('#MS').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });



    // MISSOURI -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#MO').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Missouri BLM";
    });

    $('#MO').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/mtnf");
        aTag2.innerText = "Missouri - Mark Twain NF";
    });

    $('#MO').on('click', function () {
        aTag3.setAttribute('href', "https://mostateparks.com/");
        aTag3.innerText = "Missouri State Parks";
    });



    // MONTANA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#MT').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/montana-dakotas");
        aTag.innerText = "Montana BLM";
    });

    $('#MT').on('click', function () {
        aTag2.setAttribute('href', "https://www.hipcamp.com/discover/montana/national-forests");
        aTag2.innerText = "Montana - National Forests";
    });

    $('#MT').on('click', function () {
        aTag3.setAttribute('href', "https://wildmontana.org/");
        aTag3.innerText = "Montana Wilderness Association";
    });



    // NEBRASKA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#NE').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/montana-dakotas");
        aTag.innerText = "Nebraska BLM";
    });

    $('#NE').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/nebraska");
        aTag2.innerText = "Nebraska - National Forests";
    });

    $('#NE').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });



    // NEVADA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#NV').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/nevada");
        aTag.innerText = "Nevada BLM";
    });

    $('#NV').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/htnf/");
        aTag2.innerText = "Nevada - Humboldt-Toiyabe NF";
    });

    $('#NV').on('click', function () {
        aTag3.setAttribute('href', "http://parks.nv.gov/");
        aTag3.innerText = "Nevada State Parks";
    });


    // NEW HAMPSHIRE -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#NH').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "New Hampshire BLM";
    });

    $('#NH').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/whitemountain");
        aTag2.innerText = "New Hampshire - White Mountain NF";
    });

    $('#NH').on('click', function () {
        aTag3.setAttribute('href', "https://www.fs.fed.us/ivm/");
        aTag3.innerText = "National Forest Map";
    });

    // NEW JERSEY -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#NJ').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "New Jersey BLM";
    });

    $('#NJ').on('click', function () {
        aTag2.setAttribute('href', "https://www.state.nj.us/dep/parksandforests/");
        aTag2.innerText = "New Jersey State Parks";
    });

    $('#NJ').on('click', function () {
        aTag3.setAttribute('href', "https://www.fs.fed.us/ivm/");
        aTag3.innerText = "National Forest Map";
    });



    // NEW MEXICO -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#NM').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/new-mexico");
        aTag.innerText = "New Mexico BLM";
    });

    $('#NM').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.fed.us/sopa/state-level.php?nm");
        aTag2.innerText = "New Mexico Forest Service";
    });

    $('#NM').on('click', function () {
        aTag3.setAttribute('href', "");
        aTag3.innerText = "";
    });



    // NEW YORK -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#NY').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "New York BLM";
    });

    $('#NY').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/main/gmfl/home");
        aTag2.innerText = "New York - Green Mountain & Finger Lakes NF";
    });

    $('#NY').on('click', function () {
        aTag3.setAttribute('href', "https://parks.ny.gov/parks/");
        aTag3.innerText = "North York State Parks";
    });



    // NORTH CAROLINA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#NC').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "North Carolina BLM";
    });

    $('#NC').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/nfsnc/");
        aTag2.innerText = "North Carolina National Forests";
    });

    $('#NC').on('click', function () {
        aTag3.setAttribute('href', "https://www.ncparks.gov/");
        aTag3.innerText = "North Carolina State Parks";
    });



    // NORTH DAKOTA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#ND').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/montana-dakotas");
        aTag.innerText = "North Dakota BLM";
    });

    $('#ND').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/dpg");
        aTag2.innerText = "North Dakota - Dakota Prairie Grasslands";
    });

    $('#ND').on('click', function () {
        aTag3.setAttribute('href', "https://www.parkrec.nd.gov/");
        aTag3.innerText = "North Dakota State Parks";
    });



    // OHIO -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#OH').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Ohio BLM";
    });

    $('#OH').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/wayne/");
        aTag2.innerText = "Ohio - Wayne National Forest";
    });

    $('#OH').on('click', function () {
        aTag3.setAttribute('href', "http://parks.ohiodnr.gov/");
        aTag3.innerText = "Ohio State Parks";
    });



    // OKLAHOMA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#OK').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/new-mexico");
        aTag.innerText = "Oklahoma BLM";
    });

    $('#OK').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/ouachita/");
        aTag2.innerText = "Oklahoma - Ouachita National Forest";
    });

    $('#OK').on('click', function () {
        aTag3.setAttribute('href', "https://www.travelok.com/state-parks");
        aTag3.innerText = "Oklahoma State Parks";
    });



    // OREGON -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#OR').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/oregon-washington");
        aTag.innerText = "Oregon BLM";
    });

    $('#OR').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/detail/r6/home/?cid=fsbdev2_026675#oregon");
        aTag2.innerText = "Oregon National Forests";
    });

    $('#OR').on('click', function () {
        aTag3.setAttribute('href', "https://oregonstateparks.org/");
        aTag3.innerText = "Oregon State Parks";
    });



    // PENNSYLVANIA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#PA').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Pennsylvania BLM";
    });

    $('#PA').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/allegheny/");
        aTag2.innerText = "Pennsylvania - Alleghany National Forest";
    });

    $('#PA').on('click', function () {
        aTag3.setAttribute('href', "https://www.dcnr.pa.gov/StateForests/Pages/default.aspx");
        aTag3.innerText = "Pennsylvania State Forests";
    });



    // RHODE ISLAND -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#RI').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Rhode Island BLM";
    });

    $('#RI').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.fed.us/ivm/");
        aTag2.innerText = "National Forest Map";
    });

    $('#RI').on('click', function () {
        aTag3.setAttribute('href', "http://www.riparks.com/");
        aTag3.innerText = "Rhode Island State Parks";
    });



    // SOUTH CAROLINA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#SC').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "South Carolina BLM";
    });

    $('#SC').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/scnfs");
        aTag2.innerText = "South Carolina - Francis Marion & Sumter NF";
    });

    $('#SC').on('click', function () {
        aTag3.setAttribute('href', "https://southcarolinaparks.com/");
        aTag3.innerText = "South Carolina State Parks";
    });



    // SOUTH DAKOTA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#SD').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/montana-dakotas");
        aTag.innerText = "South Dakota BLM";
    });

    $('#SD').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/blackhills");
        aTag2.innerText = "South Dakota - Black Hills NF";
    });

    $('#SD').on('click', function () {
        aTag3.setAttribute('href', "https://gfp.sd.gov/parks/");
        aTag3.innerText = "South Dakota State Parks";
    });



    // TENNESSEE -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#TN').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Tennessee BLM";
    });

    $('#TN').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/cherokee/");
        aTag2.innerText = "Tennessee - Cherokee National Forest";
    });

    $('#TN').on('click', function () {
        aTag3.setAttribute('href', "https://tnstateparks.com/");
        aTag3.innerText = "Tennessee State Parks";
    });



    // TEXAS -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#TX').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/new-mexico");
        aTag.innerText = "Texas BLM";
    });

    $('#TX').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/texas");
        aTag2.innerText = "Texas National Forests";
    });

    $('#TX').on('click', function () {
        aTag3.setAttribute('href', "https://tpwd.texas.gov/state-parks/");
        aTag3.innerText = "Texas State Parks";
    });



    // UTAH -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#UT').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/utah");
        aTag.innerText = "Utah BLM";
    });

    $('#UT').on('click', function () {
        aTag2.setAttribute('href', "https://utah.com/campgrounds");
        aTag2.innerText = "Utah Campgrounds";
    });

    $('#UT').on('click', function () {
        aTag3.setAttribute('href', "https://stateparks.utah.gov/");
        aTag3.innerText = "Utah State Parks";
    });



    // VERMONT -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#VT').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Vermont BLM";
    });

    $('#VT').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/wps/portal/fsinternet/cs/main/!ut/p/z0/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zijQwgwNHCwN_DI8zPwBcqYKBfkO2oCADIwpjI/?pname=Green%20Mountain-%20Home&navtype=BROWSEBYSUBJECT&ss=110920&pnavid=null&navid=091000000000000&cid=FSE_003853");
        aTag2.innerText = "Vermont - Green Mountain & Finger Lakes NF";
    });

    $('#VT').on('click', function () {
        aTag3.setAttribute('href', "https://vtstateparks.com/");
        aTag3.innerText = "Vermont State Parks";
    });




    // VIRGINIA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#VA').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "Virginia BLM";
    });

    $('#VA').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/gwj");
        aTag2.innerText = "Virginia - George Washington NF";
    });

    $('#VA').on('click', function () {
        aTag3.setAttribute('href', "https://www.dcr.virginia.gov/state-parks/");
        aTag3.innerText = "Virginia State Parks";
    });



    // WASHINGTON -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#WA').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/oregon-washington");
        aTag.innerText = "Washington BLM";
    });

    $('#WA').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/detail/r6/home/?cid=fsbdev2_026675#washington");
        aTag2.innerText = "Washington National Forests";
    });

    $('#WA').on('click', function () {
        aTag3.setAttribute('href', "https://www.parks.wa.gov/");
        aTag3.innerText = "Washington State Parks";
    });



    // WEST VIRGINIA -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#WV').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/about/what-we-manage/eastern-states");
        aTag.innerText = "West Virginia BLM";
    });

    $('#WV').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/mnf");
        aTag2.innerText = "West Virginia - Monongahela NF";
    });

    $('#WV').on('click', function () {
        aTag3.setAttribute('href', "https://www.fs.usda.gov/gwj");
        aTag3.innerText = "West Virginia - George Washington NF";
    });




    // WISCONSIN -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#WI').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/visit/wisconsin-river-islands-in-wisconsin-rapids%20");
        aTag.innerText = "Wisconsin BLM";
    });

    $('#WI').on('click', function () {
        aTag2.setAttribute('href', "https://www.fs.usda.gov/cnnf/");
        aTag2.innerText = "Wisconsin - Chequamegon-Nicolet NF";
    });

    $('#WI').on('click', function () {
        aTag3.setAttribute('href', "https://dnr.wi.gov/topic/parks/");
        aTag3.innerText = "Wisconsin State Parks";
    });



    // WYOMING -- On Clicks That Add Links to Anchor Tag (link, link2, link3, wLink)
    $('#WY').on('click', function () {
        aTag.setAttribute('href', "https://www.blm.gov/wyoming");
        aTag.innerText = "Wyoming BLM";
    });

    $('#WY').on('click', function () {
        aTag2.setAttribute('href', "https://travelwyoming.com/national-forests");
        aTag2.innerText = "Wyoming National Forests";
    });

    $('#WY').on('click', function () {
        aTag3.setAttribute('href', "https://wyoparks.wyo.gov/");
        aTag3.innerText = "Wyoming State Parks";
    });




});
// ^^^ Links to Forest Service & BLM ^^^




// Links to Forest Service and BLM appear when state is clicked



// script for clickable map -- KI
$("path, circle").hover(function (e) {
    $('#info-box').css('display', 'block');
    $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function (e) {
    $('#info-box').css('display', 'none');
});

$(document).mousemove(function (e) {
    $('#info-box').css('top', e.pageY - $('#info-box').height() - 30);
    $('#info-box').css('left', e.pageX - ($('#info-box').width()) / 2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (ios) {
    $('a').on('click touchend', function () {
        var link = $(this).attr('href');
        window.open(link, '_blank');
        return false;
    });
}