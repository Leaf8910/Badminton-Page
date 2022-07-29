// mapAPI = "AIzaSyBX062GMiRBIyJeDANyEezqtVsqyc4XMaU";
// mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-73.998&zoom=12&size=400x400&key={mapAPI}`;

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 4.9257, lng: 114.9088 },
    zoom: 9,
  });
  new google.maps.Marker({
    position: { lat:4.937672843497303, lng: 114.92899709339773 },
    map: map,
    label: "PK",
    title: "Hello World!",
    draggable: false,
    animation: google.maps.Animation.DROP,
  })
}


window.initMap = initMap;