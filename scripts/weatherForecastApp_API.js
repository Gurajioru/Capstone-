
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

function get_date_time() {
    // Initialize date object and time variables
    const currentDateTime = new Date();
    let hours = currentDateTime.getHours();
    let minutes = currentDateTime.getMinutes();
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Convert to 12 hour format
    hours = hours % 12;

    // Format hours and minutes to be two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Return current date and time
    return `${dayOfWeek[currentDateTime.getDay()]}, ${hours}:${minutes}`;
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

// Function to fetch public IP address
function get_public_ip_address() {
  fetch("https://geolocation-db.com/json/")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
	  current_city = data.city;
	  get_weather_data(data.city, current_unit, hourly_or_week);
    })
    .catch(function(error) {
      console.error(error);
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
      alert("City not found based on our records in our database");
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
    card.innerHTML =    `<h2 class="day-name">${dayName}</h2>
	
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

// Function to fetch weather icons
function get_icon(condition) {
  switch(condition) {
    case 'partly-cloudy-day':
      return 'resources/weatherAppConditions/partlyCloudyDay.png';
    case 'partly-cloudy-night':
      return 'resources/weatherAppConditions/partlyCloudyNight.png';
    case 'rain':
      return 'resources/weatherAppConditions/rain.png';
    case 'clear-day':
      return 'resources/weatherAppConditions/clearDay.png';
    case 'clear-night':
      return 'resources/weatherAppConditions/clearNight.png';
    default:
      return 'resources/weatherAppConditions/clearDay.png';
  }
}

// Function to get hours from "hh:mm:ss"
function getHour(time) {
  let [hour, min] = time.split(":");
  let period = +hour > 12 ? 'PM' : 'AM';  
  hour = +hour > 12 ? hour - 12 : hour;  
  return `${hour}:${min} ${period}`;
}

// Function to convert time to 12 hour format
function convert_to_12_hour_format(time) {
  let [hour, minute] = time.split(":");
  let period = +hour >= 12 ? 'pm' : 'am';
  
  hour = hour % 12 || 12;
  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;

  return `${hour}:${minute} ${period}`;
}
 
// function to get day name from date
function get_day_name(date) {
  let day = new Date(date);
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return days[day.getDay()];
}

uv_text = document.querySelector(".uv-text")
 
// Function to get UV index status
function measure_uv_index(uvIndex) {  
  if (uvIndex <= 2) return uv_text.innerText = "Low"; 
  if (uvIndex <= 5) return uv_text.innerText = "Moderate"; 
  if (uvIndex <= 7) return uv_text.innerText = "High"; 
  if (uvIndex <= 10) return uv_text.innerText = "Very High"; 
  return uv_text.innerText = "Extreme";   
}

// Function to get humidity status
function update_humidity_status(humidity) {  
  if (humidity <= 30) return humidity_status.innerText = "Low"; 
  if (humidity <= 60) return humidity_status.innerText = "Moderate"; 
  return humidity_status.innerText = "High";  
}

// Function to get visibility status
function update_visibilty_status(visibility) {
  if (visibility <= 0.03) return visibility_status.innerText = "Dense Fog";
  if (visibility <= 0.16) return visibility_status.innerText = "Moderate Fog";
  if (visibility <= 0.35) return visibility_status.innerText = "Light Fog";
  if (visibility <= 1.13) return visibility_status.innerText = "Very Light Fog";
  if (visibility <= 2.16) return visibility_status.innerText = "Light Mist";
  if (visibility <= 5.4)  return visibility_status.innerText = "Very Light Mist";
  if (visibility <= 10.8) return visibility_status.innerText = "Clear Air";
  return visibility_status.innerText = "Very Clear Air";
}

// function to get air quality status
function update_air_quality_status(air_quality) { 
  if (air_quality <= 50) return air_quality_status.innerText = "Air Quality Is Good👍🏿";
  if (air_quality <= 100) return air_quality_status.innerText = "Air Quality Is Moderate🤔";
  if (air_quality <= 150) return air_quality_status.innerText = "Air Quality Is Unhealthy for Sensitive Groups👎🏿";
  if (air_quality <= 200) return air_quality_status.innerText = "Air Quality Is Unhealthy👎🏿";
  if (air_quality <= 250) return air_quality_status.innerText = "Air Quality Is Very Unhealthy👎🏿";  
  return air_quality_status.innerText = "Air Quality Is Hazardous👎🏿";  
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
  var suggestionList,listItem,i,val = this.value;
  if (!val) {
    return false;
  }
  currentFocus = -1;
  suggestionList = document.createElement("ul");
  suggestionList.setAttribute("id", "suggestions");
  this.parentNode.appendChild(suggestionList);
  
  for (i = 0; i < cities.length; i++) {    
    if (cities[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) 
	{
		
      listItem = document.createElement("li");      
      listItem.innerHTML = "<strong>" + cities[i].name.substr(0, val.length) + "</strong>";
      listItem.innerHTML += cities[i].name.substr(val.length);      
      listItem.innerHTML += "<input type='hidden' value='" + cities[i].name + "'>";  
	  
      listItem.addEventListener("click", function (e) {        
        search.value = this.getElementsByTagName("input")[0].value;
        remove_suggestions();
      });
	  
      suggestionList.appendChild(listItem);
	  
    }
  }
});

search.addEventListener("keydown", function (e) {
  let suggestionItems = document.getElementById("suggestions");
  
  if (suggestionItems) {
    suggestionItems = suggestionItems.getElementsByTagName("li");
  }
  
  if (e.keyCode === 40) {
    currentFocus++;
    add_active(suggestionItems);
  } else if (e.keyCode === 38) {
    currentFocus--;
    add_active(suggestionItems);
  } else if (e.keyCode === 13) {
    e.preventDefault();
    if (currentFocus > -1 && suggestionItems) {
      suggestionItems[currentFocus].click();
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