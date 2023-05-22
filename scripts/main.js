

// ********** Start of code below enables the weather condition buttons to be clicked **********
let isButtonClicked = false;
let weatherIcon = null;

$("#tornadoButton").on("click", function() {
    $(this).css("background-color", "red");
    isButtonClicked = true;
    weatherIcon = L.icon({ iconUrl: 'resources/gifs/tornadoGif.gif', iconSize: [100, 100] });
    $("#hailStormButton, #thunderStormButton, #lightningButton, #windButton, #cloudButton, #snowStormButton").css("background-color", ""); // Reset the color of all other buttons
});

$("#hailStormButton").on("click", function() {
    $(this).css("background-color", "red");	
    isButtonClicked = true;
    weatherIcon = L.icon({ iconUrl: 'resources/gifs/hailStormGif.gif', iconSize: [100, 100] });
    $("#tornadoButton, #thunderStormButton, #lightningButton, #windButton, #cloudButton, #snowStormButton").css("background-color", ""); // Reset the color of all other buttons
});

$("#thunderStormButton").on("click", function() {
    $(this).css("background-color", "red");
    isButtonClicked = true;
    weatherIcon = L.icon({ iconUrl: 'resources/gifs/thunderStormGif.gif', iconSize: [100, 100] });
    $("#tornadoButton, #hailStormButton, #lightningButton, #windButton, #cloudButton, #snowStormButton").css("background-color", ""); // Reset the color of all other buttons
});

$("#lightningButton").on("click", function() {
    $(this).css("background-color", "red");
    isButtonClicked = true;
    weatherIcon = L.icon({ iconUrl: 'resources/gifs/lightningGif.gif', iconSize: [100, 100] });
    $("#tornadoButton, #hailStormButton, #thunderStormButton, #windButton, #cloudButton, #snowStormButton").css("background-color", ""); // Reset the color of all other buttons
});

$("#windButton").on("click", function() {
    $(this).css("background-color", "red");
    isButtonClicked = true;
    weatherIcon = L.icon({ iconUrl: 'resources/gifs/windGif.gif', iconSize: [100, 100] });
    $("#tornadoButton, #hailStormButton, #thunderStormButton, #lightningButton, #cloudButton, #snowStormButton").css("background-color", ""); // Reset the color of all other buttons
});

$("#cloudButton").on("click", function() {
    $(this).css("background-color", "red");
    isButtonClicked = true;
    weatherIcon = L.icon({ iconUrl: 'resources/gifs/cloudGif.gif', iconSize: [100, 100] });
    $("#tornadoButton, #hailStormButton, #thunderStormButton, #lightningButton, #windButton, #snowStormButton").css("background-color", ""); // Reset the color of all other buttons
});

$("#snowStormButton").on("click", function() {
    $(this).css("background-color", "red");
    isButtonClicked = true;
    weatherIcon = L.icon({ iconUrl: 'resources/gifs/snowStormGif.gif', iconSize: [100, 100] });
        $("#tornadoButton, #hailStormButton, #thunderStormButton, #lightningButton, #windButton, #cloudButton").css("background-color", ""); // Reset the color of all other buttons
});
// ********** End of code below enables the weather condition buttons to be clicked **********

// ********** Start of code below which uses Map Tiler Cloud API to generate the satellite map ********** 
var map = L.map(
                "map",
                {
                    center: [18.21969986, -77.350448605],
                    crs: L.CRS.EPSG3857,
                    zoom: 6,
                    zoomControl: true,					
                    preferCanvas: false,					
                }
            );                   

// createMap variable below is responsible for creating the satellite map by applying tile layers
// hence why when we zoom in or out you see tiles of the map being formed.   
 
var createMap = L.tileLayer(
				"https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=CdiMS1MdhELT38yjp9wp", // Current Key Being Used 
				//"https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=kDZWCbRGDg66iY7C5PDv", // Most Recent Key (Not Used Yet)               
				//"https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=jDp6KUySwLbwP0TyqVzw", 	// Expired 			
				//"",			
                {"attribution": "Data by \u0026copy; \u003ca target=\"_blank\" href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca target=\"_blank\" href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map);
			
// ********** End of code below which uses Map Tiler Cloud API to generate the satellite map ********** 			

// ********** Start of code below which creates the blue and yellow circle markers and popup box which are used in the map **********
//The circle markers code was initially created in Jupyter in python but was recreated in JS

var create_departure_airport_circle_marker = {
	"bubblingMouseEvents": true, 
	"color": "blue", 
	"dashArray": null, 
	"dashOffset": null, 
	"fill": true, 
	"fillColor": "red", 
	"fillOpacity": 0.2, 
	"fillRule": "evenodd", 
	"lineCap": "round", 
	"lineJoin": "round", 
	"opacity": 1.0, 
	"radius": 5, 
	"stroke": true, 
	"weight": 3
};

var create_arrival_airport_circle_marker = {
	"bubblingMouseEvents": true, 
	"color": "yellow", 
	"dashArray": null, 
	"dashOffset": null, 
	"fill": true, 
	"fillColor": "red", 
	"fillOpacity": 0.2, 
	"fillRule": "evenodd", 
	"lineCap": "round", 
	"lineJoin": "round", 
	"opacity": 1.0, 
	"radius": 5, 
	"stroke": true, 
	"weight": 3
};

var createPopupBox = {"maxWidth": "100%"}	
// ********** End of code below which creates the blue and yellow circle markers and popup box which are used in the map **********

// ********** Start of code below which is the handles all the core functionalities of the entire project **********
// These core functionalities include:  
// 1. Retrieving all the data from the Flight Info & Aircraft Details Table in the "air_travel_database" database 
// 2. Uses the data from the database to plot the airplane markers and airplane icons accordin to their latitude and longitude coordinates 
// 3. Provides the functionality for the weather condition buttons 
// 4. Creates the path that the airplane icons will travel on as well as provide functionality so that they move 
// 5. Provides the click functionality for the airplane icons so that the plane data sidebar comes up 
// 6. Uses the data retrieved from the database and places it into the airplane sidebar
// 7. Provides functionality that makes the airplane icons react to different weather conditions 
// 8. Performs the calculations and movement of the airplane fuel bar so that it generates the correct % of fuel used and fuel remaining 
 

var airports = [];
$.ajax({
    url: 'scripts/process_flightInfo_and_aircraftDetails.php',
    type: 'GET',
    success: function(data) {
        airports = JSON.parse(data);
        for (var i = 0; i < airports.length; i++) { 
			
			
			// Code to plot departure airport latitude and longitude values below:
            let airport_list = airports[i];
            let departure_airport_name = airport_list.departure_airport_name + ",["+ airport_list.departure_airport_country_name + "]";
            let departure_airport_lat_long = [airport_list.departure_airport_latitude, airport_list.departure_airport_longitude];
            //let display_departure_airport_name = `<div">${departure_airport_name}</div>`; 			
			let display_departure_airport_name = `<div style="position: relative; 
															  display: inline-block; 
															  background-color: white; 
															  color: black; 
															  padding: 5px; 
															  border: 5px solid blue; 
															  border-radius: 10px;
															 ">											
													
													${departure_airport_name}
													
													<div style="position: absolute; bottom: -15px; left: 50%; 
													     transform: translateX(-50%); width: 0; height: 0; 
														 border-left: 15px solid transparent; 
														 border-right: 15px solid transparent; 
														 border-top: 15px solid blue;">														 
												    </div>
												  </div>`;		

            let circleMarker = L.circleMarker(departure_airport_lat_long, create_departure_airport_circle_marker).addTo(map);
            let departure_airport_popup_box = L.popup(createPopupBox);
            let popup_departure_airport_content = $(display_departure_airport_name)[0];
            departure_airport_popup_box.setContent(popup_departure_airport_content);
            circleMarker.bindPopup(departure_airport_popup_box);							
			
			// Code to plot arrival airport latitude and longitude values below:
			let arrival_airport_list = airports[i];
            let arrival_airport_name = arrival_airport_list.arrival_airport_name + ",["+ arrival_airport_list.arrival_airport_country_name + "]";
            let arrival_airport_lat_long = [arrival_airport_list.arrival_airport_latitude, arrival_airport_list.arrival_airport_longitude];
            //let display_arrival_airport_name = `<div">${arrival_airport_name}</div>`; 
			let display_arrival_airport_name = `<div style="position: relative;
															display: inline-block; 
															background-color: white; 
															color: black; 
															padding: 5px; 
															border: 5px solid yellow; 
															border-radius: 10px;
														   ">
															 
												    ${arrival_airport_name}
													
												    <div style="position: absolute; bottom: -15px; left: 50%; 
													   transform: translateX(-50%); width: 0; height: 0; 
													   border-left: 15px solid transparent; 
													   border-right: 15px solid transparent; 
													   border-top: 15px solid yellow;"></div>
												    </div>`;		
			
            circleMarker = L.circleMarker(arrival_airport_lat_long, create_arrival_airport_circle_marker).addTo(map);
            let arrival_airport_popup_box = L.popup(createPopupBox);
            let popup_arrival_airport_content = $(display_arrival_airport_name)[0];
            arrival_airport_popup_box.setContent(popup_arrival_airport_content);
            circleMarker.bindPopup(arrival_airport_popup_box);	
			
			   //All the code below is used to:
			   //1. retrieve flight info and airplane details 
			   //2. display them in the airplane sidebar
			   //3. plot airplane icon according to the departure airport location 
			   //4. animate airplane flying from departure location to the arrival location 
			   //5. Amongst other things 			
			
			// ----- flight data variables will be stored down below -----
			let departure_airport_code = airport_list.departure_airport_code;
			let arrival_airport_code = airport_list.arrival_airport_code;			
			
			let departure_airport_city_location = airport_list.departure_airport_city_location; // get the city location for this airport
			let arrival_airport_city_location = airport_list.arrival_airport_city_location; // get the city location for this airport				
			
			let departure_airport_city_time_zone = airport_list.departure_airport_city_time_zone;	
			let arrival_airport_city_time_zone = airport_list.arrival_airport_city_time_zone;	
			
			let great_circle_distance = parseInt(airport_list.distance_between_departing_and_arriving_airports);
			
			let flight_from_and_to; 	

			// ----- flight data calculations for the  -----
				//Scheduled Departure Time
				//Actual Departure Time
				//Scheduled Arrival TIme
				//Estimated Arrival Time
				
				//are done down below: 
			//
			let get_scheduled_departure_time_stamp = airport_list.scheduled_departure_time_stamp = Date.now();// gets current timestamp 
			let date = new Date(get_scheduled_departure_time_stamp);
			
			let date_format_type = { 
			  //year: 'numeric',
			  month: 'long',
			  day: 'numeric',
			  hour: 'numeric',
			  minute: 'numeric',
			  //second: 'numeric',
			  hour12: true
			};
			
			let formatted_date = date.toLocaleString('en-US', date_format_type); // Convert timestamp to a formatted string	
			
			let scheduled_departure_time_stamp = formatted_date; // used to be "var scheduled_departure_time_stamp = airport_list.scheduled_departure_time_stamp;" 
			let actual_departure_time_stamp = scheduled_departure_time_stamp; // Use to be "var actual_departure_time_stamp = airport_list.actual_departure_time_stamp;"
						
			// Parse the average flight time into hours, minutes and seconds
			let average_flight_time = airport_list.flight_time_between_departing_and_arriving_airports.split(':');//use to be "var average_flight_time = airport_list.flight_time_between_departing_and_arriving_airports;"
			let flightTimeHours = parseInt(average_flight_time[0]);
			let flightTimeMinutes = parseInt(average_flight_time[1]);
			let flightTimeSeconds = parseInt(average_flight_time[2]);
			
			// Convert the average flight time to milliseconds
			let averageFlightTimeInMilliseconds = ((flightTimeHours * 60 * 60) + (flightTimeMinutes * 60) + flightTimeSeconds) * 1000;
			
			// Add the average flight time to the scheduled departure time stamp to get the arrival time stamp
			let arrivalTime = new Date(get_scheduled_departure_time_stamp + averageFlightTimeInMilliseconds);
			
			let scheduled_arrival_time_stamp = arrivalTime.toLocaleString('en-US', date_format_type);//use to be "var scheduled_arrival_time_stamp = airport_list.scheduled_arrival_time_stamp;"					
			let	estimated_arrival_time_stamp = scheduled_arrival_time_stamp; // use to be "var	estimated_arrival_time_stamp = airport_list.estimated_arrival_time_stamp;"
			
			// Below the line where you define "estimated_arrival_time_stamp":
			let record_estimated_delayed_arrival_time_stamp = new Date(arrivalTime.getTime());
			record_estimated_delayed_arrival_time_stamp.setHours(record_estimated_delayed_arrival_time_stamp.getHours() + 4);
			record_estimated_delayed_arrival_time_stamp = record_estimated_delayed_arrival_time_stamp.toLocaleString('en-US', date_format_type);
			
			// ----- aircraft details data variables will be stored down below -----
			let aircraft_number = airport_list.aircraft_number;
			
			let aircraft_assigned_airline = airport_list.aircraft_assigned_airline;	

			let aircraft_photo = airport_list.aircraft_photo; 
			
			let aircraft_web_link = airport_list.aircraft_web_link; 
			
			let more_flight_info; 
			
			let aircraft_type = airport_list.aircraft_type; 
			
			let aircraft_serial_number = airport_list.aircraft_serial_number; 
			
			let aircraft_registration_code = airport_list.aircraft_registration_code;
			
			let aircraft_manufactured_date = airport_list.aircraft_manufactured_date;
			
			let aircraft_country_of_registration = airport_list.aircraft_country_of_registration;
			
			let aircraft_country_of_registration_flag = airport_list.aircraft_country_of_registration_flag;		
			
			
			let aircraft_max_altitude = airport_list.aircraft_max_altitude;  
			
			let aircraft_max_cruising_speed = airport_list.aircraft_max_cruising_speed;  
			
			let aircraft_max_travel_range_without_refueling = parseInt(airport_list.aircraft_max_travel_range_without_refueling);
			
			
			let aircraft_size = airport_list.aircraft_size; 
			
			let aircraft_wing_type = airport_list.aircraft_wing_type; 
			
			let aircraft_fuel_capacity = parseInt(airport_list.aircraft_fuel_capacity); 
			
			let aircraft_has_anti_icing_and_de_icing_systems = airport_list.aircraft_has_anti_icing_and_de_icing_systems; 
			
			// ----- aircraft flight data variables will be stored down below -----
	 	
            
			// ----- Flight Data SQUAWK data variables will be stored down below -----
			let aircraft_icao_twenty_four_bit_address =  airport_list.aircraft_icao_twenty_four_bit_address;  
			let aircraft_realtime_latitude;  
			let aircraft_realtime_longitude;  	

			// ------ Recent Flights Data variables will be stored down below 
			let record_flight_arrival_date; 
			let record_flight_route; 
			
            var airplaneIcon = L.icon({ 
                iconUrl: 'resources/icons/airplaneIcon.png',
                iconSize: [30, 30],   // Original size was [30,30]
                //iconAnchor: [-8, 15] // using [15,15] (Original Size) would make it airplane icon line up exactly with the airplane marker 
				                    //assuming icon size (iconSize) is [30,30]                  
            });            
            
            //var airplaneMarker = L.marker(departure_airport_lat_long, {icon: airplaneIcon}).addTo(map); // plots airplane Icons in fixed location (will no longer be used)
			
			//  ********** Starting of code to make the airplaneIcon to move from one flight route to another is down below  **********					
			// the "animationFlightTimeInMilliseconds" variable below was taken from the "averageFlightTimeInMilliseconds" variable but scaled down by 100 			
			let animationFlightTimeInMilliseconds = averageFlightTimeInMilliseconds/250; // This code adjusts the speed that the airplane is flying 
			
			let flight_routes_lat_long = [departure_airport_lat_long,arrival_airport_lat_long];
			let airplaneMarker1 = L.Marker.movingMarker(flight_routes_lat_long, [animationFlightTimeInMilliseconds, animationFlightTimeInMilliseconds], { 
																											
				autostart: true,
				icon: airplaneIcon 				
			}).addTo(map);
			
			//********** TEMP Starting Of Code For First Set Of Weather Conditions **********/			
			//**********Variables for performing the calculations for the fuel capacity bar down below: ********** 			
			//-------------Calculations Before Flying Around Weather Conditions-------------------							
			ayy1 = aircraft_number; // TO BE EVENTUALLY DELETED
			console.log("***Aircraft Number: ***",ayy1);	
			
			ayy2 = great_circle_distance; // TO BE EVENTUALLY DELETED
			console.log("***Distance Between Airports: ***",ayy2);
			
			let percent_of_aircraft_max_travel_range_expected_to_be_travelled_for_journey = (great_circle_distance / aircraft_max_travel_range_without_refueling) * 100;
			console.log("% Of Aircraft Max Travel Range Expected To Be Travelled For Journey:",percent_of_aircraft_max_travel_range_expected_to_be_travelled_for_journey); 
			
			let amount_of_fuel_aircraft_is_expected_to_consume_to_complete_journey_without_any_weather_conditions = (percent_of_aircraft_max_travel_range_expected_to_be_travelled_for_journey/100) * aircraft_fuel_capacity;
			console.log("Amount of fuel Aircraft is expected to consume to complete journey without any weather conditions: ",amount_of_fuel_aircraft_is_expected_to_consume_to_complete_journey_without_any_weather_conditions);
			
			let percent_of_fuel_journey_is_expected_to_consume = (amount_of_fuel_aircraft_is_expected_to_consume_to_complete_journey_without_any_weather_conditions / aircraft_fuel_capacity) * 100; 
			console.log("% Of Fuel Journey Is Expected To Consume: ",percent_of_fuel_journey_is_expected_to_consume);			
			
			//-------------Calculations After Flying Around Weather Conditions-------------------
			let how_much_extra_km_needed_to_fly_around_weather_condition = 1000; 
			console.log("How much KM needed to fly around weather conditions: ",how_much_extra_km_needed_to_fly_around_weather_condition);
			
			let total_distance_travelled_between_departing_and_arriving_airports_after_flying_around_weather_condition = how_much_extra_km_needed_to_fly_around_weather_condition + great_circle_distance; 
			console.log("Total Distance Travelled Between Airports After Flying Around Weather Conditions: ",total_distance_travelled_between_departing_and_arriving_airports_after_flying_around_weather_condition);
			
			let percent_of_aircraft_max_travel_range_actually_travelled_for_journey_after_flying_around_weather_condition = (total_distance_travelled_between_departing_and_arriving_airports_after_flying_around_weather_condition / aircraft_max_travel_range_without_refueling) * 100;
			console.log("% Of Aircraft Max Travel Range Actually Travelled for Journey After flying around weather condition: ",percent_of_aircraft_max_travel_range_actually_travelled_for_journey_after_flying_around_weather_condition);
			
			let amount_of_fuel_aircraft_actually_consumed_after_flying_around_weather_condition_in_order_to_complete_journey = (percent_of_aircraft_max_travel_range_actually_travelled_for_journey_after_flying_around_weather_condition /100) * aircraft_fuel_capacity;
			console.log("Amount of fuel aircraft actually consumed after flying around weather condition in order to complete journey: ",amount_of_fuel_aircraft_actually_consumed_after_flying_around_weather_condition_in_order_to_complete_journey);
			
			let percent_of_fuel_journey_actually_consumed_after_flying_around_weather_condition_in_order_to_complete_journey = (amount_of_fuel_aircraft_actually_consumed_after_flying_around_weather_condition_in_order_to_complete_journey / aircraft_fuel_capacity) * 100;	
			console.log("% Of fuel journey actually consumed after flying around weather condition in order to complete journey: ",percent_of_fuel_journey_actually_consumed_after_flying_around_weather_condition_in_order_to_complete_journey);
			
			let percent_of_extra_fuel_consumed_than_expected = ((amount_of_fuel_aircraft_actually_consumed_after_flying_around_weather_condition_in_order_to_complete_journey - amount_of_fuel_aircraft_is_expected_to_consume_to_complete_journey_without_any_weather_conditions) / amount_of_fuel_aircraft_is_expected_to_consume_to_complete_journey_without_any_weather_conditions) * 100;
			console.log("% Of extra fuel consumed than expected: ",percent_of_extra_fuel_consumed_than_expected);			
			
			// this line of code may not be needed //let percent_of_extra_fuel_consumed = percent_of_fuel_journey_actually_consumed_after_flying_around_weather_condition_in_order_to_complete_journey - percent_of_fuel_journey_is_expected_to_consume; 
			let red_bar_width = (100 - percent_of_fuel_journey_is_expected_to_consume)/100;
			console.log("Red Bar Width: ",red_bar_width);
			
			let orange_bar_width = (100 - red_bar_width)/100;
			console.log("Orange Bar Width: ",orange_bar_width);			
			
			let remaining_fuel_if_no_weather_condition_was_encountered = aircraft_fuel_capacity - amount_of_fuel_aircraft_is_expected_to_consume_to_complete_journey_without_any_weather_conditions;
			console.log("Remaining fuel if no weather condition was encountered: ",remaining_fuel_if_no_weather_condition_was_encountered);
			
			let percent_of_remaining_fuel_if_no_weather_condition_was_encountered = (remaining_fuel_if_no_weather_condition_was_encountered / aircraft_fuel_capacity) * 100;
			console.log("% Of remaining fuel if no weather condition was encountered: ",percent_of_remaining_fuel_if_no_weather_condition_was_encountered);			
			
			let remaining_fuel_if_weather_condition_was_encountered = aircraft_fuel_capacity - amount_of_fuel_aircraft_actually_consumed_after_flying_around_weather_condition_in_order_to_complete_journey;
			console.log("Remaining fuel if weather condition was encountered: ",remaining_fuel_if_weather_condition_was_encountered);
			
			let percent_of_remaining_fuel_if_weather_condition_was_encountered = (remaining_fuel_if_weather_condition_was_encountered / aircraft_fuel_capacity) * 100;
			console.log("% Of Remaining fuel if weather condition was encountered: ",percent_of_remaining_fuel_if_weather_condition_was_encountered);
			
			let total_health_decrease = 100 - percent_of_remaining_fuel_if_no_weather_condition_was_encountered;
			let decrease_per_interval = total_health_decrease / (animationFlightTimeInMilliseconds / 1000); // because setInterval takes time in milliseconds
			
			//********** TEMP Ending Of Code For First Set Of Weather Conditions **********/				
			
			//********** Starting of code used to create polyline between the departure and arrival airports when you click on an airplane marker/icon **********			
			airplaneMarker1.on('click', function(e) {
				var clickedFlightRoute = e.target.options.flightRoute; // get the clicked marker's flight route
				
				
				// Remove any existing polylines on the map
				map.eachLayer(function(layer) {
					if (layer instanceof L.Polyline) {
						map.removeLayer(layer);
					}
				});
				
				
				// Check if polyline already exists and remove it if it does
				if (map.clickedFlightRoute) {
					map.removeLayer(map.clickedFlightRoute);
					delete map.clickedFlightRoute;
				}
				// Otherwise, add new polyline to map and store it as clickedFlightRoute
				else {
					var polyline = L.polyline(clickedFlightRoute, {color: 'magenta', weight: 4}).addTo(map);
					map.clickedFlightRoute = polyline;
					
					// Starting Of Polyline Code           
					polyline.on('click', function (e) { 
						if (isButtonClicked && weatherIcon) {
							
							//********** Starting Of Code For First Set Of Weather Conditions **********					
							var clickedLatLng = e.latlng;
							var clickedLat = parseFloat(clickedLatLng.lat).toFixed(2);
							var clickedLng = parseFloat(clickedLatLng.lng).toFixed(2);
							console.log('Polyline clicked at:', clickedLatLng); // log the clicked position
							console.log('Latitude:', clickedLat, 'Longitude:', clickedLng); // log latitude and longitude separately
							
							var weatherMarker = L.marker(clickedLatLng, { icon: weatherIcon, draggable: true }).addTo(map);					
							if (weatherIcon.options.iconUrl === 'resources/gifs/tornadoGif.gif' || 
								weatherIcon.options.iconUrl === 'resources/gifs/thunderStormGif.gif' || 
								weatherIcon.options.iconUrl === 'resources/gifs/hailStormGif.gif' ||
								weatherIcon.options.iconUrl === 'resources/gifs/lightningGif.gif'								 
								) {							

								map.removeLayer(airplaneMarker1);								
								
								// ********** START OF TEMPLATE BELOW FOR define new coordinates for the white polyline **********
								//var departureAirportLatLong = [10.595, -61.337];                
								//var plotPoint_1 = [10.845,-61.487]; //lat= (weatherConditionLat - 0.25)[= 10.845],long= (weatherConditionLong - 0.25 + 0.10)[= -61.487] 			
								//var plotPoint_2 = [10.945,-61.787];	//lat= (plotPoint_1 lat + 0.1), long= (plotPoint_1 long -0.3) 
								//var plotPoint_3 = [11.360,-61.787]; //lat= (plotPoint_2 lat + 0.415), long= (plotPoint_2 long) 
								//var arrivalAirportLatLong = [18.433, -66.002];
								// ********** END OF TEMPLATE BELOW FOR define new coordinates for the white polyline **********				
												
								var weatherCondition_plotPoint_1_lat  = clickedLat - 0.25;				
								var weatherCondition_plotPoint_1_long = clickedLng - 0.25 + 0.10; 				
								var weatherCondition_plotPoint_2_lat  = weatherCondition_plotPoint_1_lat + 0.10;				
								var weatherCondition_plotPoint_2_long = weatherCondition_plotPoint_1_long - 0.30;				
								var weatherCondition_plotPoint_3_lat  = weatherCondition_plotPoint_2_lat + 0.415;				
								var weatherCondition_plotPoint_3_long = weatherCondition_plotPoint_2_long; 				
								
								// define new coordinates for the white polyline				
								var departureAirportLatLong = departure_airport_lat_long;
								var plotPoint_1 = [weatherCondition_plotPoint_1_lat, weatherCondition_plotPoint_1_long];  			
								var plotPoint_2 = [weatherCondition_plotPoint_2_lat, weatherCondition_plotPoint_2_long];	 
								var plotPoint_3 = [weatherCondition_plotPoint_3_lat, weatherCondition_plotPoint_3_long];                
								var arrivalAirportLatLong = arrival_airport_lat_long;
								
								var flight_routes_lat_long_2 = [departureAirportLatLong, plotPoint_1, plotPoint_2, plotPoint_3, arrivalAirportLatLong];
								
								// add new white polyline at the new location
								var detourPolyline = L.polyline(flight_routes_lat_long_2, { color: 'aqua', weight: 4 }).addTo(map);									 
								
								// Create new airplane marker and start the animation along the new path								
								airplaneMarker2 = L.Marker.movingMarker(flight_routes_lat_long_2, [animationFlightTimeInMilliseconds, 1000, 1000, animationFlightTimeInMilliseconds], {			
									autostart: true,
									icon: airplaneIcon
								}).addTo(map);
								
								//********** Starting of code below is used hover over an airplane marker/icon, if it hovers over it the airplane turns red, if not it goes to original color **********
								var airplaneIconHovered = L.icon({
									iconUrl: 'resources/icons/airplaneIconHovered.png',
									iconSize: [30, 30]
								});
								
								// add the hover effect over airplane icon 
								airplaneMarker2.on('mouseover', function() {
									this.setIcon(airplaneIconHovered);
								});								
								
								// goes back to original airplane icon when not hovered 
								airplaneMarker2.on('mouseout', function() {
									this.setIcon(airplaneIcon);
								});
								//********** Ending of code above is used hover over an airplane marker/icon, if it hovers over it the airplane turns red, if not it goes to original color **********
									
								//********** airplaneAndFlightSidebar for airplane marker 2 
								airplaneMarker2.on('click', function() {				
									airplaneAndFlightSidebar(this);
								});	
								
								// flight data variables will be stored down below	
								// Store the departure airport city location as a data attribute on the marker element
								airplaneMarker2.options.departure_airport_city_location = departure_airport_city_location;
								airplaneMarker2.options.arrival_airport_city_location = arrival_airport_city_location;		
								
								airplaneMarker2.options.departure_airport_code = departure_airport_code;
								airplaneMarker2.options.arrival_airport_code = arrival_airport_code;
								
								airplaneMarker2.options.departure_airport_city_time_zone = departure_airport_city_time_zone; 
								airplaneMarker2.options.arrival_airport_city_time_zone = arrival_airport_city_time_zone; 
								
								airplaneMarker2.options.scheduled_departure_time_stamp = "Scheduled Departure Time:<br>" + scheduled_departure_time_stamp; 
								airplaneMarker2.options.scheduled_arrival_time_stamp = "Scheduled Arrival TIme:<br>" + scheduled_arrival_time_stamp; 
								
								airplaneMarker2.options.actual_departure_time_stamp = "Actual Departure Time:<br>" + actual_departure_time_stamp; 
								airplaneMarker2.options.estimated_arrival_time_stamp = "Estimated Arrival Time:<br>" + estimated_arrival_time_stamp; 		
								
								airplaneMarker2.options.great_circle_distance = "Great Circle Distance: " + great_circle_distance + " KM";			
								
								airplaneMarker2.options.flight_from_and_to = "From: " + airport_list.departure_airport_name + ", " + airport_list.departure_airport_country_name +
																			"<br>To: " + airport_list.arrival_airport_name + ", " + airport_list.arrival_airport_country_name;
								
								airplaneMarker2.options.average_flight_time = "Average Flight Time: " + airport_list.flight_time_between_departing_and_arriving_airports; 			
								
								// aircraft details data variables will be stored down below
								// Store the departure airport city location as a data attribute on the marker element
								airplaneMarker2.options.aircraft_number = "Aircraft Number: " + aircraft_number;
								
								airplaneMarker2.options.aircraft_assigned_airline = aircraft_assigned_airline; 
								
								airplaneMarker2.options.aircraft_photo = aircraft_photo; 
								
								airplaneMarker2.options.aircraft_web_link = aircraft_web_link; 
								
								airplaneMarker2.options.more_flight_info = "More Flight Information On Aircraft #: " + aircraft_number; 
								
								airplaneMarker2.options.aircraft_type = "Aircraft Type: " + aircraft_type; 
								
								airplaneMarker2.options.aircraft_serial_number = "Serial Number: " + aircraft_serial_number; 
								
								airplaneMarker2.options.aircraft_registration_code = "Registration Code: " + aircraft_registration_code; 
								
								airplaneMarker2.options.aircraft_manufactured_date = "Manufactured Date: " + aircraft_manufactured_date; 
								
								airplaneMarker2.options.aircraft_country_of_registration = "Registered In: " + aircraft_country_of_registration;
								
								airplaneMarker2.options.aircraft_country_of_registration_flag = aircraft_country_of_registration_flag;
								
								
								airplaneMarker2.options.aircraft_max_altitude = "Max Altitude: " + aircraft_max_altitude + " Ft"; 
								
								airplaneMarker2.options.aircraft_max_cruising_speed = "Max Cruising Speed: " + aircraft_max_cruising_speed + " Km/h"; 
								
								airplaneMarker2.options.aircraft_max_travel_range_without_refueling = "Max Travel Range Without Refueling: " + aircraft_max_travel_range_without_refueling + " KM"; 
								
								
								airplaneMarker2.options.aircraft_size = "Aircraft Size: " + aircraft_size; 
								
								airplaneMarker2.options.aircraft_wing_type = "Aircraft Wing Type: " + aircraft_wing_type; 
								
								airplaneMarker2.options.aircraft_fuel_capacity = "Fuel Capacity: " + aircraft_fuel_capacity + " US Gallons"; 
								
								airplaneMarker2.options.aircraft_has_anti_icing_and_de_icing_systems = "Aircraft Has Icing And De-Icing Systems: " + aircraft_has_anti_icing_and_de_icing_systems; 
								
								// ----- aircraft flight data variables will be stored down below -----

								
								// ----- Flight Data SQUAWK data variables will be stored down below -----
								airplaneMarker2.options.aircraft_icao_twenty_four_bit_address = "Aircraft ICAO 24 Bit Address: " + aircraft_icao_twenty_four_bit_address;  
								airplaneMarker2.options.aircraft_realtime_latitude = "Aircraft Latitude: " + airport_list.departure_airport_latitude; 
								airplaneMarker2.options.aircraft_realtime_longitude = "Aircraft Longitude: " + airport_list.departure_airport_longitude ; 
								
								// ------ Recent Flights Data variables will be stored down below				
								//airplaneMarker2.options.record_flight_arrival_date = estimated_arrival_time_stamp; 
								//airplaneMarker2.options.record_flight_route = "From: " + airport_list.departure_airport_name + "<br>To: " + airport_list.arrival_airport_name;
								
								
								// ********** Starting of Code below which displays Arrival Location Message When An Airplane Marker Reachces it's destination **********	
																
								airplaneMarker2.on('end', function() {
								  // Displays popup message after playing animation that makes airplane travel from their departure and arrival airports
								  // Creates popup box when airplane marker reaches its arrival destination
								  var popupContent = `<div style="background-color: white; color: black; padding: 5px; border: 5px solid yellow; border-radius: 10px;">
														Arrival Location Reached!
													  </div>`;

								  var popup = L.popup({autoPan: false}).setLatLng(this.getLatLng()).setContent(popupContent).openOn(map);
								  
								  // ------ Recent Flights Data variables will be stored down below
								  airplaneMarker2.options.record_flight_arrival_date = record_estimated_delayed_arrival_time_stamp; 
								  airplaneMarker2.options.record_flight_route = "From: " + airport_list.departure_airport_name + "<br>To: " + airport_list.arrival_airport_name;
								  
								  // Set a timeout to close the popup after 5 seconds (5000 milliseconds)
								  setTimeout(function() {
									map.closePopup(popup);
								  }, 3000);
								});	
								
								
								// ********** Ending of Code above which displays Arrival Location Message When An Airplane Marker Reachces it's destination **********

								//*****Starting Of Code That Right Clicks And Delete Button Pops Up To Delete Aqua Detour Polyline							
								detourPolyline.on('contextmenu', function(e) {					
									// Prevent the default context menu from appearing
									e.originalEvent.preventDefault();					 
											
									var deleteButton = L.DomUtil.create('button', 'delete-button');
									deleteButton.innerHTML = 'Delete';
											
									deleteButton.style.display = 'flex';
									deleteButton.style.position = 'absolute';
									deleteButton.style.backgroundColor = '#dc3545';
									deleteButton.style.color = '#fff';
									deleteButton.style.padding = '8px 16px';
									deleteButton.style.border = 'none';
									deleteButton.style.borderRadius = '4px';
									deleteButton.style.fontSize = '16px';
									deleteButton.style.cursor = 'pointer';
									deleteButton.style.zIndex = '1';

									var deletePopup = L.popup()
										.setLatLng(e.latlng)
										.setContent(deleteButton)
										.openOn(map);

									L.DomEvent.on(deleteButton, 'click', function() {
										map.removeLayer(detourPolyline);
										map.closePopup(deletePopup);
									});
								});
								//*****Ending Of Code That Right Clicks And Delete Button Pops Up To Delete Aqua Detour Polyline							
								
								// Starting Of Fuel Capacity Code for adjusting healthbar colors on map  						
								const canvas = document.createElement("canvas");
								canvas.id = "healthBar-" + i;
								canvas.width = 205;
								canvas.height = 35;		
								canvas.style.display = "flex"; 			
								const context = canvas.getContext("2d");			

								let health = 100;
								const healthBarWidth = 200;
								const healthBarHeight = 30;
								const x = canvas.width / 2 - healthBarWidth / 2;
								const y = canvas.height / 2 - healthBarHeight / 2;

								const healthBar = new HealthBar(x, y, healthBarWidth, healthBarHeight, health, "green");
								
								const frame = function() {
									context.clearRect(0, 0, canvas.width, canvas.height);

									// Draw the red part of the background
									context.fillStyle = "red";                				
									context.fillRect(0, 0, x + healthBarWidth * red_bar_width, canvas.height);

									// Draw the orange part of the background
									context.fillStyle = "orange";   				
									context.fillRect(x + healthBarWidth * red_bar_width, 0, healthBarWidth * orange_bar_width, canvas.height);

									// Show the health bar
									healthBar.show(context);

									requestAnimationFrame(frame);
								};
								frame();

								const decreaseHealth = function() {
									//health -= 1;
									health -= decrease_per_interval;
									healthBar.updateHealth(health);

									if (health <= percent_of_remaining_fuel_if_no_weather_condition_was_encountered) {
										canvas.style.background = "red";					
									}				

									if (health <= percent_of_remaining_fuel_if_weather_condition_was_encountered) {
										clearInterval(intervalId); // Stops the green bar at remainingFuel% this represents the remaining health left
									}
								};
								
								const intervalId = setInterval(decreaseHealth, 1000);
								airplaneMarker2.bindPopup(canvas, {offset: L.point(-67.5, -20)});
								// Ending Of Fuel Capacity Code for adjusting healthbar colors on map
							}// End Of If Statement 
							//********** Ending Of Code For First Set Of Weather Conditions **********
							
							//********** Starting Of Code For Second Set Of Weather Conditions (100% Done)**********
							// Delclare Variable For The Second Set Of Weather Conditions (Strong Winds & Clouds) Down Below 
							//var weatherMarker = L.marker(clickedLatLng, { icon: weatherIcon, draggable: true }).addTo(map);						
							var airplaneCurrentAltitude = Math.floor(Math.random() * (aircraft_max_altitude - 25000 + 1)) + 25000; // Generates Random Altitudes Between 25,000 to aircraft max altitude Ft
							var weatherConditionCurrentAltitude = Math.floor(Math.random() * (43100 - 25000 + 1)) + 25000; // Generates Random Altitudes Between 25,000-41,000 Ft
								
							var airplaneMaxAltitude = aircraft_max_altitude;
							var differenceBetweenAirplaneAndWeatherConditionCurrentAltitude = airplaneCurrentAltitude - weatherConditionCurrentAltitude; 	
							
							var updatedWeatherConditionAltitude = weatherConditionCurrentAltitude + 1000;					 
							var updatedAirplaneHeight1 = airplaneCurrentAltitude + 1000;
							var updatedAirplaneHeight2 = airplaneCurrentAltitude - 1000;
							
							var display_weatherCondition_message = `<div style="border: 2px solid red; 
																		 padding: 10px; 
																		 background-color: red; 
																		 color: white;
																		 ">
																		 
																		 Weather Condition Altitude: ${weatherConditionCurrentAltitude} Ft. 
															</div>`;					
													
							var display_airplane_message1 = `<div style="border: 2px solid red; 
																		 padding: 10px; 
																		 background-color: red; 
																		 color: white;
																		 ">
																		 
																		 Weather Condition Detected!, <br>
																		 Current Airplane Altitude: ${airplaneCurrentAltitude} Ft. 
															</div>`;

							var display_airplane_message2 = `<div style="border: 2px solid blue; 
																		 padding: 10px; 
																		 background-color: blue; 
																		 color: white;
																		 ">
																		 
																		 Max Airplane Altitude: ${airplaneMaxAltitude} Ft.																
															</div>`;
							
							var display_airplane_message3 = `<div style="border: 2px solid blue; 
																		 padding: 10px; 
																		 background-color: blue; 
																		 color: white;
																		 ">
																		 
																		 Difference In Altitude Between Airplane And Weather Condition:, <br>
																		 ${differenceBetweenAirplaneAndWeatherConditionCurrentAltitude} Ft.																
															</div>`;
							
							var display_airplane_message4 = `<div style="border: 2px solid blue; 
																		 padding: 10px; 
																		 background-color: blue; 
																		 color: white;
																		 ">
																		 
																		Continue Flying At Current Airplane Altitude!																
															</div>`;
															
							var display_airplane_message5 = `<div style="border: 2px solid green; 
																		 padding: 10px; 
																		 background-color: green; 
																		 color: white;
																		 ">
																		 
																		 Increasing Airplane Altitude!,<br>
																		 Updated Airplane Altitude Is: ${updatedAirplaneHeight1} Ft.
															</div>`;
							
							var display_airplane_message6 = `<div style="border: 2px solid red; 
																		 padding: 10px; 
																		 background-color: red; 
																		 color: white;
																		 ">
																		 
																		 Decreasing Airplane Altitude!, <br>
																		 Updated Airplane Altitude Is: ${updatedAirplaneHeight2} Ft.
															</div>`;
							
							// If statement for the second set of weather conditions (Strong Winds & Clouds)					
							if (weatherIcon.options.iconUrl === 'resources/gifs/windGif.gif' || weatherIcon.options.iconUrl === 'resources/gifs/cloudGif.gif') {
								weatherMarker.bindPopup(display_weatherCondition_message).openPopup();
								
								// Display messages in sequence
								setTimeout(function() {
									airplaneMarker1.bindPopup(display_airplane_message1, {offset: L.point(-160, 60)}).openPopup();

									setTimeout(function() {
										airplaneMarker1.closePopup();

										setTimeout(function() {
											airplaneMarker1.bindPopup(display_airplane_message3, {offset: L.point(160, 60)}).openPopup(); 
																						//message 3 above was swapped around for message 2 down below as  
																						//it looked better to see the difference between the altitude first before 
																						// the Aircraft Max Altitude
											setTimeout(function() {
												airplaneMarker1.closePopup();

												setTimeout(function() {
													airplaneMarker1.bindPopup(display_airplane_message2, {offset: L.point(160, 60)}).openPopup();

													setTimeout(function() {
														airplaneMarker1.closePopup();

														if (differenceBetweenAirplaneAndWeatherConditionCurrentAltitude >= 1000) {
															setTimeout(function() {
																airplaneMarker1.bindPopup(display_airplane_message4, {offset: L.point(160, 60)}).openPopup();

																setTimeout(function() {
																	airplaneMarker1.closePopup();
																	setTimeout(function() {
																		airplaneMarker1.bindPopup(canvas, {offset: L.point(-67.5, -20)}).openPopup(); // New line of code
																	}, 5000);
																}, 5000);
															}, 5000);
														} else {
															if (updatedWeatherConditionAltitude <= airplaneMaxAltitude) {
																setTimeout(function() {
																	airplaneMarker1.bindPopup(display_airplane_message5, {offset: L.point(160, 60)}).openPopup();

																	setTimeout(function() {
																		airplaneMarker1.closePopup();
																		setTimeout(function() {
																			airplaneMarker1.bindPopup(canvas, {offset: L.point(-67.5, -20)}).openPopup(); // New line of code
																		}, 5000);
																	}, 5000);
																}, 5000);
															} else {
																setTimeout(function() {
																	airplaneMarker1.bindPopup(display_airplane_message6, {offset: L.point(160, 60)}).openPopup();

																	setTimeout(function() {
																		airplaneMarker1.closePopup();
																		setTimeout(function() {
																			airplaneMarker1.bindPopup(canvas, {offset: L.point(-67.5, -20)}).openPopup(); // New line of code
																		}, 5000);
																	}, 5000);
																}, 5000);
															}
														}
													}, 5000);
												}, 5000);
											}, 5000);
										}, 5000);
									}, 5000);
								}, 5000);						
							}
							//********** Ending Of Code For Second Set Of Weather Conditions **********						
							
							//********** Starting Of Code For Third Set Of Weather Conditions (100% Done)**********	
							var display_snowStorm_message1 = `<div style="border: 2px solid red; 
																		 padding: 10px; 
																		 background-color: red; 
																		 color: white;
																		 ">
																		 
																		 Snow Storm Detected!. 
															</div>`;
							
							var display_snowStorm_message2 = `<div style="border: 2px solid red; 
																		 padding: 10px; 
																		 background-color: red; 
																		 color: white;
																		 ">
																		 
																		 Turning On Icing & De-Icing Systems!. 
															</div>`;
															
							if (weatherIcon.options.iconUrl === 'resources/gifs/snowStormGif.gif') {
								weatherMarker.bindPopup(display_snowStorm_message1).openPopup();						
								setTimeout(function() {
									airplaneMarker1.bindPopup(display_snowStorm_message2).openPopup();

									setTimeout(function() {
										airplaneMarker1.closePopup();

										setTimeout(function() {
											airplaneMarker1.bindPopup(canvas, {offset: L.point(-67.5, -20)}).openPopup(); // Your line of code
										}, 3000); // Adjust this delay as needed
									}, 3000);
								}, 3000);						
							}				
							
							//********** Ending Of Code For Third Set Of Weather Conditions **********				
							
							//*****Starting Of Code That Right Clicks And Delete Button Pops Up TO Delete Weather Condition 
							weatherMarker.on('dragend', function(e) {
								var newLatLng = this.getLatLng();
								var newLat = parseFloat(newLatLng.lat).toFixed(2);
								var newLng = parseFloat(newLatLng.lng).toFixed(2);
								console.log('Marker dragged to:', newLatLng); 
								console.log('New Latitude:', newLat, 'New Longitude:', newLng); 
							});
							
							weatherMarker.on('contextmenu', function(e) {					
								// Prevent the default context menu from appearing
								e.originalEvent.preventDefault();					 
								
								var deleteButton = L.DomUtil.create('button', 'delete-button');
								deleteButton.innerHTML = 'Delete';
								
								deleteButton.style.display = 'flex';
								deleteButton.style.position = 'absolute';
								deleteButton.style.backgroundColor = '#dc3545';
								deleteButton.style.color = '#fff';
								deleteButton.style.padding = '8px 16px';
								deleteButton.style.border = 'none';
								deleteButton.style.borderRadius = '4px';
								deleteButton.style.fontSize = '16px';
								deleteButton.style.cursor = 'pointer';
								deleteButton.style.zIndex = '1';

								var deletePopup = L.popup()
									.setLatLng(e.latlng)
									.setContent(deleteButton)
									.openOn(map);

								L.DomEvent.on(deleteButton, 'click', function() {
									map.removeLayer(weatherMarker);
									map.closePopup(deletePopup);
								});
							});
							//*****Ending Of Code That Right Clicks And Delete Button Pops Up TO Delete Weather Condition 
							
							isButtonClicked = false; // Reset the button click state
							weatherIcon = null; // Reset the weather icon
							$("#tornadoButton, #hailStormButton, #thunderStormButton, #lightningButton, #windButton, #cloudButton, #snowStormButton").css("background-color", ""); // Reset the color of all buttons
														
						}
					}); // Ending Of Polyline Code
					
					//*****Starting Of Code That Right Clicks And Delete Button Pops Up To Delete Magenta Polyline							
					polyline.on('contextmenu', function(e) {					
						// Prevent the default context menu from appearing
						e.originalEvent.preventDefault();					 
								
						var deleteButton = L.DomUtil.create('button', 'delete-button');
						deleteButton.innerHTML = 'Delete';
								
						deleteButton.style.display = 'flex';
						deleteButton.style.position = 'absolute';
						deleteButton.style.backgroundColor = '#dc3545';
						deleteButton.style.color = '#fff';
						deleteButton.style.padding = '8px 16px';
						deleteButton.style.border = 'none';
						deleteButton.style.borderRadius = '4px';
						deleteButton.style.fontSize = '16px';
						deleteButton.style.cursor = 'pointer';
						deleteButton.style.zIndex = '1';

						var deletePopup = L.popup()
							.setLatLng(e.latlng)
							.setContent(deleteButton)
							.openOn(map);

						L.DomEvent.on(deleteButton, 'click', function() {
							map.removeLayer(polyline);
							map.closePopup(deletePopup);
						});
					});
					//*****Ending Of Code That Right Clicks And Delete Button Pops Up To Delete Magenta Polyline				
				}// end of else statement 			
			});			
			airplaneMarker1.options.flightRoute = flight_routes_lat_long; // assign flight route to marker options			
			//********** Ending of code above used to create polyline between the departure and arrival airports when you click on an airplane marker/icon **********
			
			//********** Starting of code below is used hover over an airplane marker/icon, if it hovers over it the airplane turns red, if not it goes to original color **********
			var airplaneIconHovered = L.icon({
				iconUrl: 'resources/icons/airplaneIconHovered.png',
				iconSize: [30, 30]
			});
			
			// add the hover effect over airplane icon 
			airplaneMarker1.on('mouseover', function() {
				this.setIcon(airplaneIconHovered);
			});
			
			// goes back to original airplane icon when not hovered 
			airplaneMarker1.on('mouseout', function() {
				this.setIcon(airplaneIcon);
			});
			//********** Ending of code above is used hover over an airplane marker/icon, if it hovers over it the airplane turns red, if not it goes to original color **********	
			
			// ********** Starting of Code below which displays Arrival Location Message When An Airplane Marker Reachces it's destination **********					
			airplaneMarker1.on('end', function() {
			  // Displays popup message after playing animation that makes airplane travel from their departure and arrival airports
			  // Creates popup box when airplane marker reaches its arrival destination
			  var popupContent = `<div style="background-color: white; color: black; padding: 5px; border: 5px solid yellow; border-radius: 10px;">
									Arrival Location Reached!
								  </div>`;

			  var popup = L.popup({autoPan: false}).setLatLng(this.getLatLng()).setContent(popupContent).openOn(map);
			  
			  // ------ Recent Flights Data variables will be stored down below (This is for the plane data sidebar)
			  airplaneMarker1.options.record_flight_arrival_date = estimated_arrival_time_stamp; 
			  airplaneMarker1.options.record_flight_route = "From: " + airport_list.departure_airport_name + "<br>To: " + airport_list.arrival_airport_name;			  

			  // Set a timeout to close the popup after 5 seconds (5000 milliseconds)
			  setTimeout(function() {
				map.closePopup(popup);
			  }, 3000);
			});			
			// ********** Ending of Code above which displays Arrival Location Message When An Airplane Marker Reachces it's destination **********
			
			//function handleAirplaneMarkerClick(marker) {
			function airplaneAndFlightSidebar(marker) {
				const navbar = document.querySelector(".l-navbar");
				if (navbar.style.display === "none") {
					navbar.style.display = "flex";					
				} else {
					navbar.style.display = "none";					
				}				
				
				// ----- flight data variables will be stored down below ----- 				
				document.getElementById("departure-airport-city-location").innerHTML = marker.options.departure_airport_city_location; // Update the departure city location retrieved from the database
				document.getElementById("arrival-airport-city-location").innerHTML = marker.options.arrival_airport_city_location;
				
				document.getElementById("departure-airport-code").innerHTML = marker.options.departure_airport_code;
				document.getElementById("arrival-airport-code").innerHTML = marker.options.arrival_airport_code;
				
				document.getElementById("departure-airport-city-time-zone").innerHTML = marker.options.departure_airport_city_time_zone;
				document.getElementById("arrival-airport-city-time-zone").innerHTML = marker.options.arrival_airport_city_time_zone;
								
				document.getElementById("scheduled-departure-time-stamp").innerHTML = marker.options.scheduled_departure_time_stamp;
				document.getElementById("scheduled-arrival-time-stamp").innerHTML = marker.options.scheduled_arrival_time_stamp;
				document.getElementById("actual-departure-time-stamp").innerHTML = marker.options.actual_departure_time_stamp;
				document.getElementById("estimated-arrival-time-stamp").innerHTML = marker.options.estimated_arrival_time_stamp;			
				
				document.getElementById("great-circle-distance").innerHTML = marker.options.great_circle_distance;
				
				document.getElementById("flight-from-and-to").innerHTML = marker.options.flight_from_and_to;
				
				document.getElementById("average-flight-time").innerHTML = marker.options.average_flight_time;
				
				// ----- aircraft details data variables will be stored down below ----- 
				document.getElementById("aircraft-number").innerHTML = marker.options.aircraft_number;
				
				document.getElementById("aircraft-assigned-airline").innerHTML = marker.options.aircraft_assigned_airline;				
				
				document.getElementById("aircraft-photo").src = marker.options.aircraft_photo; 
				
				document.getElementById("aircraft-web-link").href = marker.options.aircraft_web_link; 			
				
				document.getElementById("more-flight-info").innerHTML = marker.options.more_flight_info;
				
				document.getElementById("aircraft-type").innerHTML = marker.options.aircraft_type;
				
				document.getElementById("aircraft-serial-number").innerHTML = marker.options.aircraft_serial_number;
				
				document.getElementById("aircraft-registration-code").innerHTML = marker.options.aircraft_registration_code;
				
				document.getElementById("aircraft-manufactured-date").innerHTML = marker.options.aircraft_manufactured_date;
				
				document.getElementById("aircraft-country-of-registration").innerHTML = marker.options.aircraft_country_of_registration;
				
				document.getElementById("aircraft-country-of-registration-flag").src = marker.options.aircraft_country_of_registration_flag;
				
				document.getElementById("aircraft-size").innerHTML = marker.options.aircraft_size;  		
				
				document.getElementById("aircraft-wing-type").innerHTML = marker.options.aircraft_wing_type;  
				
				document.getElementById("aircraft-fuel-capacity").innerHTML = marker.options.aircraft_fuel_capacity;  
				
				document.getElementById("aircraft-has-icing-and-de-icing-systems").innerHTML = marker.options.aircraft_has_anti_icing_and_de_icing_systems;  
				
				// ----- aircraft flight data variables will be stored down below -----
				document.getElementById("aircraft-max-altitude").innerHTML = marker.options.aircraft_max_altitude; 
				
				document.getElementById("aircraft-max-cruising-speed").innerHTML = marker.options.aircraft_max_cruising_speed; 
				
				document.getElementById("aircraft-max-travel-range-without-refueling").innerHTML = marker.options.aircraft_max_travel_range_without_refueling;				
							
				// ----- Flight Data SQUAWK data variables will be stored down below ----- 
				document.getElementById("aircraft-icao-twenty-four-bit-address").innerHTML = marker.options.aircraft_icao_twenty_four_bit_address;  
				document.getElementById("aircraft-realtime-latitude").innerHTML = marker.options.aircraft_realtime_latitude; 
				document.getElementById("aircraft-realtime-longitude").innerHTML = marker.options.aircraft_realtime_longitude; 
				
				// ------ Recent Flights Data variables will be stored down below 
				document.getElementById("record-flight-arrival-date").innerHTML = marker.options.record_flight_arrival_date; 
				document.getElementById("record-flight-route").innerHTML = marker.options.record_flight_route; 			
			}			
			
			// ********************Code below allows you to click any airplaneIcon to gain access to the plane data for each individual aircraft ********************
            // Add click event listener to the airplane marker to toggle the sidebar
            airplaneMarker1.on('click', function() {				
				airplaneAndFlightSidebar(this);
				// Update the departure city location retrieved from the database				
				//document.getElementById("departure-airport-city-location").innerHTML = this.options.departure_airport_city_location; 
            });				
			
			// flight data variables will be stored down below	
			// Store the departure airport city location as a data attribute on the marker element
			airplaneMarker1.options.departure_airport_city_location = departure_airport_city_location;
			airplaneMarker1.options.arrival_airport_city_location = arrival_airport_city_location;		
			
			airplaneMarker1.options.departure_airport_code = departure_airport_code;
			airplaneMarker1.options.arrival_airport_code = arrival_airport_code;
			
			airplaneMarker1.options.departure_airport_city_time_zone = departure_airport_city_time_zone; 
			airplaneMarker1.options.arrival_airport_city_time_zone = arrival_airport_city_time_zone; 
			
			airplaneMarker1.options.scheduled_departure_time_stamp = "Scheduled Departure Time:<br>" + scheduled_departure_time_stamp; 
			airplaneMarker1.options.scheduled_arrival_time_stamp = "Scheduled Arrival TIme:<br>" + scheduled_arrival_time_stamp; 
			
			airplaneMarker1.options.actual_departure_time_stamp = "Actual Departure Time:<br>" + actual_departure_time_stamp; 
			airplaneMarker1.options.estimated_arrival_time_stamp = "Estimated Arrival Time:<br>" + estimated_arrival_time_stamp; 		
			
			airplaneMarker1.options.great_circle_distance = "Great Circle Distance: " + great_circle_distance + " KM";			
			
			airplaneMarker1.options.flight_from_and_to = "From: " + airport_list.departure_airport_name + ", " + airport_list.departure_airport_country_name +
														"<br>To: " + airport_list.arrival_airport_name + ", " + airport_list.arrival_airport_country_name;
			
			airplaneMarker1.options.average_flight_time = "Average Flight Time: " + airport_list.flight_time_between_departing_and_arriving_airports; 			
			
			// aircraft details data variables will be stored down below
			// Store the departure airport city location as a data attribute on the marker element
			airplaneMarker1.options.aircraft_number = "Aircraft Number: " + aircraft_number;
			
			airplaneMarker1.options.aircraft_assigned_airline = aircraft_assigned_airline; 
			
			airplaneMarker1.options.aircraft_photo = aircraft_photo; 
			
			airplaneMarker1.options.aircraft_web_link = aircraft_web_link; 
			
			airplaneMarker1.options.more_flight_info = "More Flight Information On Aircraft #: " + aircraft_number; 
			
			airplaneMarker1.options.aircraft_type = "Aircraft Type: " + aircraft_type; 
			
			airplaneMarker1.options.aircraft_serial_number = "Serial Number: " + aircraft_serial_number; 
			
			airplaneMarker1.options.aircraft_registration_code = "Registration Code: " + aircraft_registration_code; 
			
			airplaneMarker1.options.aircraft_manufactured_date = "Manufactured Date: " + aircraft_manufactured_date; 
			
			airplaneMarker1.options.aircraft_country_of_registration = "Registered In: " + aircraft_country_of_registration;
			
			airplaneMarker1.options.aircraft_country_of_registration_flag = aircraft_country_of_registration_flag;
			
			
			airplaneMarker1.options.aircraft_max_altitude = "Max Altitude: " + aircraft_max_altitude + " Ft"; 
			
			airplaneMarker1.options.aircraft_max_cruising_speed = "Max Cruising Speed: " + aircraft_max_cruising_speed + " Km/h"; 
			
			airplaneMarker1.options.aircraft_max_travel_range_without_refueling = "Max Travel Range Without Refueling: " + aircraft_max_travel_range_without_refueling + " KM"; 
			
			
            airplaneMarker1.options.aircraft_size = "Aircraft Size: " + aircraft_size; 
			
			airplaneMarker1.options.aircraft_wing_type = "Aircraft Wing Type: " + aircraft_wing_type; 
			
			airplaneMarker1.options.aircraft_fuel_capacity = "Fuel Capacity: " + aircraft_fuel_capacity + " US Gallons"; 
			
			airplaneMarker1.options.aircraft_has_anti_icing_and_de_icing_systems = "Aircraft Has Icing And De-Icing Systems: " + aircraft_has_anti_icing_and_de_icing_systems; 
			
			// ----- aircraft flight data variables will be stored down below -----

			
			// ----- Flight Data SQUAWK data variables will be stored down below -----
			airplaneMarker1.options.aircraft_icao_twenty_four_bit_address = "Aircraft ICAO 24 Bit Address: " + aircraft_icao_twenty_four_bit_address;  
			airplaneMarker1.options.aircraft_realtime_latitude = "Aircraft Latitude: " + airport_list.departure_airport_latitude; 
			airplaneMarker1.options.aircraft_realtime_longitude = "Aircraft Longitude: " + airport_list.departure_airport_longitude ; 
			
			 // ------ Recent Flights Data variables will be stored down below (This is for the plane data sidebar)				
			//airplaneMarker1.options.record_flight_arrival_date = estimated_arrival_time_stamp; 
			//airplaneMarker1.options.record_flight_route = "From: " + airport_list.departure_airport_name + "<br>To: " + airport_list.arrival_airport_name;
						 
            // Update the airplane iconAnchor value based on the zoom level
            map.on('zoomend', function() { // can also use 'zoom' rather than 'zoomed', 'zoomed' is more efficient tho as it fires once after the user has finished zooming            
                var zoomLevel = map.getZoom();                
                airplaneMarker1.setIcon(airplaneIcon);
				//airplaneIcon.options.iconAnchor = [15 * zoomLevel, 15 * zoomLevel];
            });							
						
			// ********** Starting Of Fuel Capacity Code for adjusting healthbar colors on map 						
			const canvas = document.createElement("canvas");
            canvas.id = "healthBar-" + i;
            canvas.width = 205;
            canvas.height = 35;		
			canvas.style.display = "flex"; 			
            const context = canvas.getContext("2d");			

            let health = 100;
            const healthBarWidth = 200;
            const healthBarHeight = 30;
            const x = canvas.width / 2 - healthBarWidth / 2;
            const y = canvas.height / 2 - healthBarHeight / 2;

            const healthBar = new HealthBar(x, y, healthBarWidth, healthBarHeight, health, "green");
			
            const frame = function() {
                context.clearRect(0, 0, canvas.width, canvas.height);

                // Draw the orange part of the background
                context.fillStyle = "orange";   				
				context.fillRect(x + healthBarWidth * red_bar_width, 0, healthBarWidth * orange_bar_width, canvas.height);

                // Show the health bar
                healthBar.show(context);

                requestAnimationFrame(frame);
            };
            frame();

            const decreaseHealth = function() {                
				health -= decrease_per_interval;
                healthBar.updateHealth(health);				
				
				if (health <= percent_of_remaining_fuel_if_no_weather_condition_was_encountered) {                   	
					clearInterval(intervalId);
                }			
            };			
			
			const intervalId = setInterval(decreaseHealth, 1000);
			airplaneMarker1.bindPopup(canvas, {offset: L.point(-67.5, -20)});			
			// ********** Ending Of Fuel Capacity Code for adjusting healthbar colors on map
			
        }// End Of For Loop 
    },
    error: function(err) {
        // Handle error here
        console.error('An error occurred:', err);
    }
});

// ********** End of code below which is the handles all the core functionalities of the entire project **********