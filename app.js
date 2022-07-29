mapAPI = "AIzaSyBX062GMiRBIyJeDANyEezqtVsqyc4XMaU";
mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key={mapAPI}`;

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;