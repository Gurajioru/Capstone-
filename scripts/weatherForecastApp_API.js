
// All the code below is for the displaying and hiding the Weather application 
const wrapper = document.querySelector(".wrapper");
const toggleButton = document.querySelector("#weatherAppIcon");

toggleButton.addEventListener("click", function() {
  if (wrapper.style.display === "none") {
    wrapper.style.display = "flex";
  } else {
    wrapper.style.display = "none";
  }
});

// Create an empty array to store the city names
var cities = [];

// Make an AJAX call to retrieve the city names from the database
$.ajax({
  url: "scripts/process_weather_forecast_location_suggestions.php", // name of PHP script that retrieves data from the database 
  type: "GET",
  dataType: "json",
  success: function(data) {
    // Loop through the returned data and push each city name to the array
    $.each(data, function(index, cityOrCountry) {
      cities.push({        
		name: cityOrCountry.City +  ",  " + cityOrCountry.Country // "City" is the name of a column in the database & 
																 //"Country" is the name of the column in the database that gets the name of the country	
      });
    });
  },
  error: function(xhr, status, error) {
    console.log("Error retrieving city data");
  }
});

let current_city = "";
let current_unit = "c";
let hourly_or_week = "week";

// function to get date and time
function get_date_time() { 

  let now = new Date(),
    hour = now.getHours(),
    minute = now.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // 12 hours format
  hour = hour % 12;
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  let dayString = days[now.getDay()];
  return `${dayString}, ${hour}:${minute}`;
}

const temp = document.getElementById("temp"), 
  humidity_status = document.querySelector(".humidity-status"),
  air_quality = document.querySelector(".air-quality"), 
  air_quality_status = document.querySelector(".air-quality-status"),
  visibility_status = document.querySelector(".visibilty-status"),
  search_form = document.querySelector("#search"),
  search = document.querySelector("#query"),
  celcius_button = document.querySelector(".celcius"),    
  fahrenheit_button = document.querySelector(".fahrenheit"),
  temp_unit = document.querySelectorAll(".temp-unit"),
  hourly_button = document.querySelector(".hourly"),
  week_button = document.querySelector(".week"),
  weather_cards = document.querySelector("#weather-cards");


date = document.getElementById("date-time")
date.innerText = get_date_time();
setInterval(() => {
  date.innerText = get_date_time();
}, 1000);

// function to get public ip address
function get_public_ip_address() { 
  fetch("https://geolocation-db.com/json/", {
    method: "GET",
    headers: {},
  })
    .then((response) => response.json())
    .then((data) => {
      current_city = data.city;
      get_weather_data(data.city, current_unit, hourly_or_week); 
    })
    .catch((err) => {
      console.error(err);
    });
}
get_public_ip_address();

condition = document.getElementById("condition"),
rain = document.getElementById("rain"),
main_icon = document.getElementById("icon"),
current_location  = document.getElementById("location"),
uvIndex = document.querySelector(".uv-index"),
windSpeed = document.querySelector(".wind-speed")
sunRise = document.querySelector(".sun-rise"),  
sunSet = document.querySelector(".sun-set"), 
humidity = document.querySelector(".humidity"),
visibilty = document.querySelector(".visibilty")

// function to get weather data
function get_weather_data(city, unit, hourly_or_week) {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`,
    {
      method: "GET",
      headers: {},
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let today = data.currentConditions;
      if (unit === "c") {
        temp.innerText = today.temp;
      } else {
        temp.innerText = celcius_to_fahrenheit(today.temp);
      }	  
	  
      current_location.innerText = data.resolvedAddress;
      condition.innerText = today.conditions;
      rain.innerText = "Precipitation - " + today.precip + "%";
      uvIndex.innerText = today.uvindex;
      windSpeed.innerText = today.windspeed;
      measure_uv_index(today.uvindex);
      main_icon.src = get_icon(today.icon);	  
	  
      humidity.innerText = today.humidity + "%";
      update_humidity_status(today.humidity); //
      visibilty.innerText = today.visibility;
      update_visibilty_status(today.visibility);
      air_quality.innerText = today.winddir;
      update_air_quality_status(today.winddir); //
	  
	  
      if (hourly_or_week === "hourly") {
        update_forecast(data.days[0].hours, unit, "day");//
      } else {
        update_forecast(data.days, unit, "week");
      }
      sunRise.innerText = convert_to_12_hour_format(today.sunrise);
      sunSet.innerText = convert_to_12_hour_format(today.sunset);
    })
    .catch((err) => {
      alert("City not found in our database");
    });
}

//function to update Forecast
function update_forecast(data, unit, type) {
  weather_cards.innerHTML = "";
  let day = 0;
  let numCards = 0;
  if (type === "day") {
    numCards = 24;
  } else {
    numCards = 7;
  }
  for (let i = 0; i < numCards; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    let dayName = getHour(data[day].datetime);
    if (type === "week") {
      dayName = get_day_name(data[day].datetime);
    }
    let dayTemp = data[day].temp;
    if (unit === "f") {
      dayTemp = celcius_to_fahrenheit(data[day].temp);
    }
    let iconCondition = data[day].icon;
    let iconSrc = get_icon(iconCondition);
    let temp_unit = "°C";
    if (unit === "f") {
      temp_unit = "°F";
    }
    card.innerHTML = `<h2 class="day-name">${dayName}</h2>
						<div class="card-icon">
						  <img src="${iconSrc}" class="day-icon" alt="" />
						</div>
						<div class="day-temp">
						  <h2 class="temp">${dayTemp}</h2>
						  <span class="temp-unit">${temp_unit}</span>
						</div>`;					
    weather_cards.appendChild(card);
    day++;
  }
}

// function to change weather icons
function get_icon(condition) { 
  if (condition === "partly-cloudy-day") {   
	return "resources/weatherAppConditions/partlyCloudyDay.png";
  } else if (condition === "partly-cloudy-night") {    
	return "resources/weatherAppConditions/partlyCloudyNight.png";
  } else if (condition === "rain") {    
	return "resources/weatherAppConditions/rain.png";
  } else if (condition === "clear-day") {    
	return "resources/weatherAppConditions/clearDay.png";
  } else if (condition === "clear-night") {    
	return "resources/weatherAppConditions/clearNight.png";
  } else {    
	return "resources/weatherAppConditions/clearDay.png";
  }
}

//get hours from hh:mm:ss
function getHour(time) {
  let hour = time.split(":")[0];
  let min = time.split(":")[1];
  if (hour > 12) {
    hour = hour - 12;
    return `${hour}:${min} PM`;
  } else {
    return `${hour}:${min} AM`;
  }
}

// convert time to 12 hour format
function convert_to_12_hour_format(time) { 
  let hour = time.split(":")[0];
  let minute = time.split(":")[1];
  let ampm = hour >= 12 ? "pm" : "am";
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  let strTime = hour + ":" + minute + " " + ampm;
  return strTime;
}

// function to get day name from date
function get_day_name(date) {
  let day = new Date(date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day.getDay()];
}

uv_text = document.querySelector(".uv-text")

// function to get uv index status
function measure_uv_index(uvIndex) {
  if (uvIndex <= 2) {
    uv_text.innerText = "Low";
  } else if (uvIndex <= 5) {
    uv_text.innerText = "Moderate";
  } else if (uvIndex <= 7) {
    uv_text.innerText = "High";
  } else if (uvIndex <= 10) {
    uv_text.innerText = "Very High";
  } else {
    uv_text.innerText = "Extreme";
  }
}

// function to get humidity status
function update_humidity_status(humidity) {
  if (humidity <= 30) {
    humidity_status.innerText = "Low";
  } else if (humidity <= 60) {
    humidity_status.innerText = "Moderate";
  } else {
    humidity_status.innerText = "High";
  }
}

// function to get visibility status
function update_visibilty_status(visibility) { 
  if (visibility <= 0.03) {
    visibility_status.innerText = "Dense Fog";
  } else if (visibility <= 0.16) {
    visibility_status.innerText = "Moderate Fog";
  } else if (visibility <= 0.35) {
    visibility_status.innerText = "Light Fog";
  } else if (visibility <= 1.13) {
    visibility_status.innerText = "Very Light Fog";
  } else if (visibility <= 2.16) {
    visibility_status.innerText = "Light Mist";
  } else if (visibility <= 5.4) {
    visibility_status.innerText = "Very Light Mist";
  } else if (visibility <= 10.8) {
    visibility_status.innerText = "Clear Air";
  } else {
    visibility_status.innerText = "Very Clear Air";
  }
}

// function to get air quality status
function update_air_quality_status(air_quality) {
  if (air_quality <= 50) {
    air_quality_status.innerText = "Good👍🏿";
  } else if (air_quality <= 100) {
    air_quality_status.innerText = "Moderate🤔";
  } else if (air_quality <= 150) {
    air_quality_status.innerText = "Unhealthy for Sensitive Groups👎🏿";
  } else if (air_quality <= 200) {
    air_quality_status.innerText = "Unhealthy👎🏿";
  } else if (air_quality <= 250) {
    air_quality_status.innerText = "Very Unhealthy👎🏿";
  } else {
    air_quality_status.innerText = "Hazardous👎🏿";
  }
}

// function to handle search form
search_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let location = search.value;
  if (location) {
    current_city = location;
    get_weather_data(location, current_unit, hourly_or_week);
  }
});

// function to convert celcius to fahrenheit
function celcius_to_fahrenheit(temp) { 
  return ((temp * 9) / 5 + 32).toFixed(1);
}

var currentFocus;
search.addEventListener("input", function (e) {
  remove_suggestions();
  var a,
    b,
    i,
    val = this.value;
  if (!val) {
    return false;
  }
  currentFocus = -1;
  a = document.createElement("ul");
  a.setAttribute("id", "suggestions");
  this.parentNode.appendChild(a);
  
  for (i = 0; i < cities.length; i++) {    
    if (
      cities[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()
    ) {
      
      b = document.createElement("li");      
      b.innerHTML =
        "<strong>" + cities[i].name.substr(0, val.length) + "</strong>";
      b.innerHTML += cities[i].name.substr(val.length);      
      b.innerHTML += "<input type='hidden' value='" + cities[i].name + "'>";     
      b.addEventListener("click", function (e) {        
        search.value = this.getElementsByTagName("input")[0].value;
        remove_suggestions();
      });
      a.appendChild(b);
    }
  }
});

//execute a function presses a key on the keyboard:
search.addEventListener("keydown", function (e) {
  var x = document.getElementById("suggestions");
  if (x) x = x.getElementsByTagName("li");
  if (e.keyCode == 40) {
    currentFocus++;    
    add_active(x);
  } else if (e.keyCode == 38) {
    currentFocus--;    
    add_active(x);
  }
  if (e.keyCode == 13) {    
    e.preventDefault();
    if (currentFocus > -1) {      
      if (x) x[currentFocus].click();
    }
  }
});

function add_active(x) { 
  if (!x) return false;  
  remove_active(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = x.length - 1; 
  x[currentFocus].classList.add("active");
}

function remove_active(x) {   
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
}

function remove_suggestions() {
  var x = document.getElementById("suggestions");
  if (x) x.parentNode.removeChild(x);
}

fahrenheit_button.addEventListener("click", () => {
  change_unit("f");
});
celcius_button.addEventListener("click", () => {
  change_unit("c");
});

// function to change unit
function change_unit(unit) {//
  if (current_unit !== unit) {
    current_unit = unit;
    temp_unit.forEach((elem) => {
      elem.innerText = `°${unit.toUpperCase()}`;
    });
    if (unit === "c") {
      celcius_button.classList.add("active");
      fahrenheit_button.classList.remove("active");
    } else {
      celcius_button.classList.remove("active");
      fahrenheit_button.classList.add("active");
    }
    get_weather_data(current_city, current_unit, hourly_or_week);
  }
}

hourly_button.addEventListener("click", () => {
  change_time_span("hourly");
});
week_button.addEventListener("click", () => {
  change_time_span("week");
});

// function to change hourly to weekly or vice versa
function change_time_span(unit) { //
  if (hourly_or_week !== unit) {
    hourly_or_week = unit;
    if (unit === "hourly") {
      hourly_button.classList.add("active");
      week_button.classList.remove("active");
    } else {
      hourly_button.classList.remove("active");
      week_button.classList.add("active");
    }
    get_weather_data(current_city, current_unit, hourly_or_week);
  }
}



