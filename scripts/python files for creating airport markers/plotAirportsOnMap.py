
import folium
import pandas as pd 

# Read CSV file
data = pd.read_csv("airports.csv")

# Create map
m = folium.Map(location=[data['Latitude'].mean(), data['Longitude'].mean()], zoom_start = 13)

# Add markers for each data point 
for i in range(0, len(data)):
    # "folium.Marker" in the code below creates the regular marker logo
    #folium.Marker([data.iloc[i]['Latitude'], data.iloc[i]['Longitude']], popup = data.iloc[i]['Name']).add_to(m)
    
    # "folium.CircleMarker" code below creates a circle icon that is mapped to the different airport locations 
    folium.CircleMarker([data.iloc[i]['Latitude'], data.iloc[i]['Longitude']],
    radius = 5, 
    color = 'blue',
    fill = True, 
    fill_color = 'red', popup = data.iloc[i]['Name']).add_to(m)    

# Display the map 
m
                   
# Save map to HTML file (See Note Below As Well)
# NOTE: the python code also creates javascript code that is used to plot the circular markers 
# based on the data that was provided by the airports.csv file 
# the javascript code that is created in the index.html file should be move to its own javascript file for easier handing
# of the project code 
# when the line of code below is uncommented the python code sets the map to its default map view
# in order to change this back to the satellite view, we should replace 
# "L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png'" in the html code with 
# "L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=BZd5rvfllJCXFdUy06CY'"

#m.save("map.html")
