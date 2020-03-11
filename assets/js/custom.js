

  // https://www.coordonnees-gps.fr/
  let myMap;
  let token = "pk.eyJ1IjoiYWVkZW4iLCJhIjoiY2s3bmRxbHJpMGNybzNsbTdmcGY4eTBraiJ9.WzahYx7ILIx-4hUOHUnMMQ";
  let zoomLevel = 14;
  let latitude = 47.7147553;
  let longitude = -3.376302;
  function initMap() {
    myMap = L.map('map').setView([latitude, longitude], zoomLevel);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+token+'', {
        maxZoom: 18,
        id: 'mapbox.streets'
    }).addTo(myMap);
  }
  initMap();
