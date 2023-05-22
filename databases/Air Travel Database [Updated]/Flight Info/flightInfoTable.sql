
CREATE TABLE flightInfo(flight_number INT,
						departure_airport_name VARCHAR(100),
						departure_airport_code VARCHAR(10),
						departure_airport_country_name VARCHAR(50),
						departure_airport_city_location VARCHAR(50),
						departure_airport_city_time_zone VARCHAR(20),
						departure_airport_latitude DOUBLE,
						departure_airport_longitude DOUBLE,
						scheduled_departure_time_stamp TIMESTAMP NULL DEFAULT NULL,
						actual_departure_time_stamp TIMESTAMP NULL DEFAULT NULL,
						arrival_airport_name VARCHAR(100),
						arrival_airport_code VARCHAR(10),
						arrival_airport_country_name VARCHAR(50),
						arrival_airport_city_location VARCHAR(50),
						arrival_airport_city_time_zone VARCHAR(20),
						arrival_airport_latitude DOUBLE,
						arrival_airport_longitude DOUBLE,
						scheduled_arrival_time_stamp TIMESTAMP NULL DEFAULT NULL,
						estimated_arrival_time_stamp TIMESTAMP NULL DEFAULT NULL,
						distance_between_departing_and_arriving_airports INT,
						flight_time_between_departing_and_arriving_airports TIME
					   );

INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (1,'Sydney Airport ','SYD','Australia ','Sydney','AEST (UTC +10:00)',-33.939,151.181,'','','Haneda Airport / Tokyo International Airport ','HND/RJTT','Japan','Tokyo','JST (UTC +9:00)',35.555,139.794,'','',7814,'09:45:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (2,'Santiago International Airport/Arturo Merino Benitez International Airport ','SCL','Chile','Pudahuel','CLT (UTC -4:00)',-33.393,-70.785,'','','Keflavík International Airport ','KEF','Iceland','Reykjavík','GMT (UTC +0:00)',63.985,-22.626,'','',11614,'18:20:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (3,'Soekarno–Hatta International Airport','CGK','Indonesia','Jakarta','WIB (UTC +7:00)',-6.113,106.658,'','','Guangzhou Baiyun International Airport ','CAN','China ','Guangzhou','CST (UTC +8:00)',23.387,113.308,'','',3361,'05:10:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (4,'Addis Ababa Bole International Airport ','ADD','Ethiopia ','Addis Ababa','EAT (UTC +3:00)',8.976,38.797,'','','Gdańsk Lech Wałęsa Airport ','GDN','Poland','Gdańsk','CEST (UTC +2:00)',54.376,18.471,'','',5363,'11:40:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (5,'Helsinki Airport ','HEL','Finland ','Helsinki','EEST (UTC +3:00)',60.318,24.976,'','','Umeå Airport ','UME','Sweden','Umeå','CEST (UTC +2:00)',63.791,20.284,'','',457,'01:20:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (6,'Paris Charles de Gaulle Airport ','CDG','France ','Paris','CEST (UTC +2:00)',49.025,2.542,'','','Tromsø Airport ','TOS','Norway','Tromsø','CEST (UTC +2:00)',69.681,18.917,'','',2465,'03:50:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (7,'Indira Gandhi International Airport ','DEL','India ','Delhi','IST (UTC +5:30)',28.542,77.087,'','','Almaty International Airport ','ALA','Kazakhstan','Almaty','ALMT (UTC +6:00)',43.354,77.0434,'','',1646,'03:15:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (8,'Norman Manley International Airport','KIN/MKJP','Jamaica ','Kingston','EST (UTC -5:00)',17.936,-76.788,'','','Miami International Airport ','MIA','United States Of America','Miami','EDT (UTC -4:00)',25.793,-80.291,'','',945,'01:55:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (9,'Cape Town International Airport ','CPT','South Africa ','Cape Town','SAST (UTC +2:00)',-33.972,18.604,'','','Cairo International Airport ','CAI','Egypt','Cairo','EET (UTC +2:00)',30.112,31.414,'','',7252,'09:27:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (10,'Henri Coandă International Airport','OTP','Romania','Otopeni','EEST (UTC +3:00)',44.566,26.099,'','','Riga International Airport','RIX','Latvia ','Riga','EEST (UTC +3:00)',56.922,23.97,'','',1382,'02:30:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (11,'Tocumen International Airport Panama ','PTY','Panama','Panama City','EST (UTC -5:00)',9.061,-79.384,'','','Donald Sangster International Airport ','MBJ/MKJS','Jamaica','Montego Bay','EST (UTC -5:00)',18.503,-77.914,'','',1060,'02:02:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (12,'Hamad International Airport','DOH','Qatar','Doha','AST (UTC +3:00)',25.272,51.619,'','','Kars Harakani Airport ','KSY','Turkey','Kars','TRT (UTC +3:00)',40.563,43.114,'','',1870,'02:42:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (13,'Singapore Changi Airport ','SIN','Singapore','Changi','SST (UTC +8:00)',1.354,103.995,'','','Incheon International Airport ','ICN','South Korea','Seoul','KST (UTC +9:00)',37.471,126.446,'','',4622,'06:30:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (14,'Piarco International Airport ','POS','Trinidad And Tobago','Piarco','AST (UTC -4:00)',10.595,-61.337,'','','Luis Muñoz Marin International Airport ','SJU','Puerto Rico','Carolina','AST (UTC -4:00)',18.433,-66.002,'','',1005,'01:15:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (15,'Istanbul Airport ','IST','Turkey','Istanbul','TRT (UTC +3:00)',41.277,28.727,'','','Berlin Brandenburg Airport ','BER','Germany','Berlin','CEST (UTC +2:00)',52.373,13.507,'','',1689,'02:50:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (16,'Los Angeles International Airport ','LAX','United States Of America ','Los Angeles','PT (UTC -7:00)',33.951,-118.415,'','','Canadian Rockies International Airport ','CYXC/YXC','Canada','British Columbia','MDT (UTC -6:00)',49.6127,-115.782,'','',1942,'02:33:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (17,'Dallas/Fort Worth International Airport ','DFW','United States Of America ','Dallas-Fort Worth Metropolitan Area','CDT (UTC -5:00)',32.898,-97.054,'','','St. Paul Downtown Airport ','STP','United States Of America','Minnesota','CDT (UTC -5:00)',44.934,-93.061,'','',1382,'01:56:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (18,'Palm Beach International Airport ','PBI','United States Of America ','Palm Beach','EDT (UTC -4:00)',26.682,-80.091,'','','John F. Kennedy International Airport ','JFK','United States Of America','New York','ET (UTC -4:00)',40.651,-73.775,'','',1658,'02:45:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (19,'Enrique Adolfo Jiménez International Airport','ONX','Panama','Colón','EST (UTC -5:00)',9.359,-79.867,'','','Frank Paìs International Airport ','HOG','Cuba','Holguín','CDT (UTC -4:00)',20.785,-76.314,'','',1275,'02:46:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (20,'Simón Bolívar International Airport ','CCS','Venezuela','Vargas','VET (UTC -4:00)',10.604,-66.996,'','','Pointe-à-Pitre International Airport','PTP','Guadeloupe','Les Abymes','AST (UTC -4:00)',16.264,-61.529,'','',864,'01:30:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (21,'Aeroparque Internacional Jorge Newbery ','AEP','Argentina','Buenos Aires','ART (UTC -3:00)',-34.559,-58.414,'','','Heathrow Airport ','LHR','England','London','BST (UTC +1:00)',51.477,-0.459,'','',11099,'15:45:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (22,'International Airport of Brasilia / Brasília–President Juscelino Kubitschek International Airport ','BSB','Brazil','Brasília','BRT (UTC -3:00)',-23.429,-46.466,'','','Humberto Delgado Airport / Lisbon Airport ','LIS/LPPT','Portugal','Lisbon','WEST (UTC +1:00)',38.783,-9.134,'','',7288,'09:05:00');
INSERT INTO flightInfo (flight_number,departure_airport_name,departure_airport_code,departure_airport_country_name,departure_airport_city_location,departure_airport_city_time_zone,departure_airport_latitude,departure_airport_longitude,scheduled_departure_time_stamp,actual_departure_time_stamp,arrival_airport_name,arrival_airport_code,arrival_airport_country_name,arrival_airport_city_location,arrival_airport_city_time_zone,arrival_airport_latitude,arrival_airport_longitude,scheduled_arrival_time_stamp,estimated_arrival_time_stamp,distance_between_departing_and_arriving_airports,flight_time_between_departing_and_arriving_airports) VALUES (23,'King Abdulaziz International Airport ','JED','Saudi Arabia','Jeddah','AST (UTC +3:00)',21.688,39.132,'','','Heydar Aliyev International Airport ','GYD','Azerbaijan','Baku','AZT (UTC +4:00)',40.469,50.063,'','',2328,'04:55:00');