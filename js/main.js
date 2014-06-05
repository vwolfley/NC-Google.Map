var map;
function initialize() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(34.708, -77.959)
  };
  google.maps.visualRefresh=true;
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Load a GeoJSON from the same server as our demo.
  var jsonData = "data/ncVacationData.json";
  map.data.loadGeoJson(jsonData);
  
  var infoWindow = new google.maps.InfoWindow();
  
  for (i = 0; i < jsonData.length; i++) {
    var data = jsonData[i]
    }

    google.maps.event.addListener("click", function(data) {
    infoWindow.setContent(data.Name);
    infoWindow.open(map);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
