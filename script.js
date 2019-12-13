var mymap = L.map('map').setView([48.151783, 17.073248], 16);
			L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				id: 'mapbox/streets-v11',
				accessToken: 'pk.eyJ1IjoiYW1hbmVrIiwiYSI6ImNrNDJ2Zzk2MTAxOXUzbW81NGo1NXlvZmUifQ.bzoULL2sqPuK-Q8od8nrow'
			}).addTo(mymap);
			
			var marker = L.marker([48.151783, 17.073248]).addTo(mymap);
			
			var geoJSON = {
			  "type": "FeatureCollection",
			  "features": [
				{
				  "type": "Feature",
				  "description": "Blok E<br>Ústav elektroniky a fotoniky (ÚEF)",
				  "properties": {"party": "p1", "name": "P1"},
				  "geometry": {
					"type": "Polygon",
					"coordinates": [
					  [
						[
						  17.072550058364868,
						  48.153840297249474
						],
						[
						  17.073880434036255,
						  48.153840297249474
						],
						[
						  17.073880434036255,
						  48.153990605765195
						],
						[
						  17.072550058364868,
						  48.153990605765195
						],
						[
						  17.072550058364868,
						  48.153840297249474
						]
					  ]
					]
				  }
				},
				{
				  "type": "Feature",
				  "description": "Blok D<br>Ústav automobilovej mechatroniky (ÚAM)<br>Ústav robotiky a kybernetiky (ÚRK)",
				  "properties": {"party": "p2"},
				  "geometry": {
					"type": "Polygon",
					"coordinates": [
					  [
						[
						  17.07317233085632,
						  48.15333926568372
						],
						[
						  17.074373960494995,
						  48.15333926568372
						],
						[
						  17.074373960494995,
						  48.1534752604496
						],
						[
						  17.07317233085632,
						  48.1534752604496
						],
						[
						  17.07317233085632,
						  48.15333926568372
						]
					  ]
					]
				  }
				},
				{
				  "type": "Feature",
				  "description": "Blok C<br>Výpočtové stredisko (VS)<br>Ústav automobilovej mechatroniky (ÚAM)<br>Ústav robotiky a kybernetiky (ÚRK)",
				  "properties": {"party": "p3"},
				  "geometry": {
					"type": "Polygon",
					"coordinates": [
					  [
						[
						  17.072582244873047,
						  48.15280959842314
						],
						[
						  17.073837518692017,
						  48.15280959842314
						],
						[
						  17.073837518692017,
						  48.15299569835393
						],
						[
						  17.072582244873047,
						  48.15299569835393
						],
						[
						  17.072582244873047,
						  48.15280959842314
						]
					  ]
					]
				  }
				},
				{
				  "type": "Feature",
				  "description": "Blok B<br>Ústav elektrotechniky (ÚE)<br>Ústav multimediálnych informačných a komunikačných technológií (ÚMIKT)",
				  "properties": {"party": "p4"},
				  "geometry": {
					"type": "Polygon",
					"coordinates": [
					  [
						[
						  17.073011398315426,
						  48.15233003010628
						],
						[
						  17.074373960494995,
						  48.15233003010628
						],
						[
						  17.074373960494995,
						  48.15247318529702
						],
						[
						  17.073011398315426,
						  48.15247318529702
						],
						[
						  17.073011398315426,
						  48.15233003010628
						]
					  ]
					]
				  }
				},
				{
				  "type": "Feature",
				  "description": "Blok A<br>Ústav jadrového a fyzikálneho inžinierstva (ÚJFI)<br>Pedagogické oddelenie (PGO)",
				  "properties": {"party": "p5"},
				  "geometry": {
					"type": "Polygon",
					"coordinates": [
					  [
						[
						  17.072550058364868,
						  48.15181466811292
						],
						[
						  17.073880434036255,
						  48.15181466811292
						],
						[
						  17.073880434036255,
						  48.151964982562305
						],
						[
						  17.072550058364868,
						  48.151964982562305
						],
						[
						  17.072550058364868,
						  48.15181466811292
						]
					  ]
					]
				  }
				}
			  ]
			};
			var popup = L.popup();
			L.geoJSON(geoJSON, {
				onEachFeature: function(feature, layer){
					if (feature.properties && feature.description) {
						layer.bindPopup(feature.description);
					}
				}
			}).addTo(mymap);
			marker.bindPopup("Fakulta Elektrotechniky a Informatiky");
			var tramIcon = new L.Icon({
				iconUrl: 'https://img.icons8.com/office/16/000000/tram.png',
				shadowUrl:'',
				iconSize: [30, 30],
				iconAnchor: [10, 30],
				popupAnchor: [1, -35],
				shadowSize: [30, 30]
			});
			var busIcon = new L.Icon({
				iconUrl: 'https://img.icons8.com/plasticine/100/000000/bus.png',
				shadowUrl:'',
				iconSize: [30, 30],
				iconAnchor: [10, 30],
				popupAnchor: [1, -35],
				shadowSize: [30, 30]
			});
			var zastavka1 = L.marker([48.158261, 17.068240], {icon: busIcon}).addTo(mymap);
			zastavka1.bindPopup("Cintorin Slavicie udolie<br>31, 39");
			var zastavka2 = L.marker([48.156483, 17.071468], {icon: busIcon}).addTo(mymap);
			zastavka2.bindPopup("Televizia<br>31, 39");
			var zastavka3 = L.marker([48.154593, 17.074557], {icon: busIcon}).addTo(mymap);
			zastavka3.bindPopup("Zoo<br>31, 39");
			var zastavka4 = L.marker([48.154654, 17.075797], {icon: busIcon}).addTo(mymap);
			zastavka4.bindPopup("Zoo<br>30, 32, 37, 92, 192, N29");
			var zastavka5 = L.marker([48.154053, 17.076928], {icon: busIcon}).addTo(mymap);
			zastavka5.bindPopup("Zoo<br>30, 32, 37, 92, 192, N29");
			var zastavka7 = L.marker([48.148284, 17.072053], {icon: tramIcon}).addTo(mymap);
			zastavka7.bindPopup("Botanicka zahrada<br>X6");
			var zastavka8 = L.marker([48.153756, 17.065461], {icon: busIcon}).addTo(mymap);
			zastavka8.bindPopup("Panorama<br>139");
			var zastavka9 = L.marker([48.158752, 17.063041], {icon: busIcon}).addTo(mymap);
			zastavka9.bindPopup("Grunty<br>139");
			var zastavka10 = L.marker([48.160004, 17.061727], {icon: busIcon}).addTo(mymap);
			zastavka10.bindPopup("Nad internatmy<br>139");
			var zastavka11 = L.marker([48.149756, 17.062921], {icon: tramIcon}).addTo(mymap);
			zastavka11.bindPopup("Molecova<br>X6");
			var zastavka12 = L.marker([48.152927, 17.060411], {icon: tramIcon}).addTo(mymap);
			zastavka12.bindPopup("Jurigovo namestie<br>X6");
			var zastavka8 = L.marker([48.148238, 17.071288], {icon: busIcon}).addTo(mymap);
			zastavka8.bindPopup("Botanicka zahrada<br>29, 32, N29, N33, N34");
					

			L.Routing.control({
				waypoints: [
					L.latLng(),
					L.latLng(48.151653, 17.072414)
				],
				routeWhileDragging: true,
				geocoder: L.Control.Geocoder.nominatim()
			}).addTo(mymap);