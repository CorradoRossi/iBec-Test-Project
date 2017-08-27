function initMap() {
   const map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: 43.6615, lng: -70.2553},
     zoom: 15,
     disableDefaultUI: true
   });

   const input = document.getElementById('pac-input');

   const autocomplete = new google.maps.places.Autocomplete(input);
   autocomplete.bindTo('bounds', map);

   const infowindow = new google.maps.InfoWindow();
   const infowindowContent = document.getElementById('infowindow-content');
   infowindow.setContent(infowindowContent);
   const marker = new google.maps.Marker({
     map: map
   });
   marker.addListener('click', () => {
     infowindow.open(map, marker);
   });

   autocomplete.addListener('place_changed', () => {
     infowindow.close();
     const place = autocomplete.getPlace();
     if (!place.geometry) {
       return;
     }

     if (place.geometry.viewport) {
       map.fitBounds(place.geometry.viewport);
     } else {
       map.setCenter(place.geometry.location);
       map.setZoom(15);
     }

     marker.setPlace({
       placeId: place.place_id,
       location: place.geometry.location
     });
     marker.setVisible(true);

     infowindowContent.children['place-name'].textContent = place.name;
     //infowindowContent.children['place-id'].textContent = place.place_id;
     infowindowContent.children['place-address'].textContent = place.formatted_address;
     infowindow.open(map, marker);
   });
 }
