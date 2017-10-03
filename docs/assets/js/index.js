//Create an instance of the Google map and grab coordinates for downtown Portland
//Set disableDefaultUI to true to more closely adhere to design reference provided

function initMap() {
   var map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: 43.6615, lng: -70.2553},
     zoom: 15,
     disableDefaultUI: true
   });

//create instances of places features

   var input = document.getElementById('pac-input');

   var autocomplete = new google.maps.places.Autocomplete(input);
   autocomplete.bindTo('bounds', map);

   var infowindow = new google.maps.InfoWindow();
   var infowindowContent = document.getElementById('infowindow-content');
   infowindow.setContent(infowindowContent);
   var marker = new google.maps.Marker({
     map: map
   });

// Add functionality to the places markers

   marker.addListener('click', function() {
     infowindow.open(map, marker);
   });

   autocomplete.addListener('place_changed', function() {
     infowindow.close();
     var place = autocomplete.getPlace();
     if (!place.geometry) {
       return;
     }

     if (place.geometry.viewport) {
       map.fitBounds(place.geometry.viewport);
     } else {
       map.setCenter(place.geometry.location);
       map.setZoom(15);
     }

// Set the position of the marker using the place id and location.

     marker.setPlace({
       placeId: place.place_id,
       location: place.geometry.location
     });
     marker.setVisible(true);

//commented out place id but left it in case we want to add info to a database

     infowindowContent.children['place-name'].textContent = place.name;
     //infowindowContent.children['place-id'].textContent = place.place_id;
     infowindowContent.children['place-address'].textContent = place.formatted_address;
     infowindow.open(map, marker);
   });
 }
