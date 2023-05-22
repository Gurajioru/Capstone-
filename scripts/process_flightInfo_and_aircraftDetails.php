

<?php
// Connect to database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "air_travel_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve airport data from database

/*
Template for 7 columns from table 1 and 7 columns from table 2 is down below 

SELECT table1.column1, table1.column2, table1.column3, table1.column4, table1.column5, table1.column6, table1.column7,
       table2.column1, table2.column2, table2.column3, table2.column4, table2.column5, table2.column6, table2.column7
FROM table1
JOIN table2 ON table1.column = table2.column
*/	

$sql = "SELECT 
	   flightInfo.flight_number, 
	   flightInfo.departure_airport_name, 
	   flightInfo.departure_airport_code, 
	   flightInfo.departure_airport_country_name, 
	   flightInfo.departure_airport_city_location, 
	   flightInfo.departure_airport_city_time_zone, 
	   flightInfo.departure_airport_latitude,
	   flightInfo.departure_airport_longitude,	   
	   flightInfo.scheduled_departure_time_stamp,
	   flightInfo.actual_departure_time_stamp,	   
	   flightInfo.arrival_airport_name,
	   flightInfo.arrival_airport_code,
	   flightInfo.arrival_airport_country_name,
	   flightInfo.arrival_airport_city_location,
	   flightInfo.arrival_airport_city_time_zone,
	   flightInfo.arrival_airport_latitude,
	   flightInfo.arrival_airport_longitude,   
	   flightInfo.scheduled_arrival_time_stamp,
	   flightInfo.estimated_arrival_time_stamp,	   
	   flightInfo.distance_between_departing_and_arriving_airports,
	   flightInfo.flight_time_between_departing_and_arriving_airports,   
	   
       aircraftDetails.aircraft_number, 
	   aircraftDetails.aircraft_assigned_airline,
	   aircraftDetails.aircraft_photo,
	   aircraftDetails.aircraft_web_link, 		
	   aircraftDetails.aircraft_type, 
	   aircraftDetails.aircraft_serial_number, 
	   aircraftDetails.aircraft_registration_code, 
	   aircraftDetails.aircraft_manufactured_date,
	   aircraftDetails.aircraft_country_of_registration,
	   aircraftDetails.aircraft_country_of_registration_flag,
	   aircraftDetails.aircraft_icao_twenty_four_bit_address, 
	   aircraftDetails.aircraft_size, 
	   aircraftDetails.aircraft_wing_type, 
	   aircraftDetails.aircraft_fuel_capacity, 
	   aircraftDetails.aircraft_has_anti_icing_and_de_icing_systems,
	   aircraftDetails.aircraft_max_altitude,
	   aircraftDetails.aircraft_max_cruising_speed,
	   aircraftDetails.aircraft_max_travel_range_without_refueling
	   FROM flightInfo
	   JOIN aircraftDetails ON flightInfo.flight_number = aircraftDetails.aircraft_number";

$result = $conn->query($sql);

$airports = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        array_push($airports, $row);
    }
}

echo json_encode($airports);

$conn->close();
?>







