

<?php
// Connect to database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "worldairports";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve airport data from database
$sql = "SELECT Name, Latitude, Longitude FROM allworldairports";
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
