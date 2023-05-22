
<?php
// Connect to the database
$conn = new mysqli("localhost", "root", "", "air_travel_database");

// Check for errors
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve the city names and countries from the database
$result = $conn->query("SELECT DISTINCT City, Country FROM weather_forecast_location_suggestions");

// Store the city names in an array
$cities = array();
while ($row = $result->fetch_assoc()) {
  $cities[] = $row;
}

// Close the database connection
$conn->close();

// Return the city names as a JSON object
echo json_encode($cities);
?>
