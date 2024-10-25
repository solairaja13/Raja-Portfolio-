function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 11.6342, lng: 78.8785};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Chinnasalem,Tamil Nadu", // Title Location
    });
}