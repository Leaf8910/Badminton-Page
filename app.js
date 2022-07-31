let map;

function initMap() {
  var options = {
    center: { lat: 4.9257, lng: 114.9088 },
    zoom: 9,
  }
  var map = new google.maps.Map(document.getElementById("map"), options);
  

  new google.maps.Marker({
    position: { lat:4.937598031756774, lng:114.92891128004204 },
    map: map,
    label: "PK",
    title: "Peak BN",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });

  new google.maps.Marker({
    position: { lat:4.911535795832795, lng:114.92294476839389 },
    map: map,
    label: "KKBS",
    title: "KKBS",
    draggable: false,
    animation: google.maps.Animation.DROP,
  });

  // Array of Markers
  var markers = [
  {
    coords:{lat:4.911535795832795, lng:114.92294476839389},
    iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    content: '<h1>KKBS</h1>' 
  },
  {
    coords:{lat:4.98517313794561, lng:114.95324372606468},
    iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    content: '<h1>Fuzhou</h1>' 
  },
  {
    coords:{lat:4.937630098820397, lng:114.929125856746},
    iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    content: '<h1>PeakBN</h1>' 
  }
  ];

  for(var i = 0;i < markers.length;i++){
    // add marker
    addMarker(markers[i]);
  }

 
  function addMarker(props){
    var marker = new google.maps.Marker({
     position: props.coords,
     map: map,
     iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });
    // Check for icon
    if(props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    // Check content 
    if (props.content){
      var infoWindow = new google.maps.InfoWindow({
        content: props.content  
      });
      marker.addEventListener('click', function(){
        infoWindow.open(map, marker);
      })
    }
  }

  addMarker({lat:4.911535795832795, lng:114.92295549722907});
}
 




window.initMap = initMap;