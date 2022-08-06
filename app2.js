let imagesAreaImages = document.querySelectorAll('.images-area img');
let imagesAreaFirstImage = document.querySelector('.images-area .firstImage');
let previousBtn = document.querySelector('.previous-btn');
let nextBtn = document.querySelector('.next-btn');
let paginationArea = document.querySelector('.pagination-area');
let currentImageCount = 2;
let sliderController;
let createPaginationSpans; 
let mapbox_API = `https://api.mapbox.com/geocoding/v5/mapbox.places/bandar.json?country=bn&proximity=ip&types=place%2Cpostcode%2Caddress&access_token={mapboxToken}`;
let mapBox =  document.querySelector(".mapBox");
let peakHours = document.querySelector(".peak-hours");

// mapboxg1.accessToken = "pk.eyJ1IjoibGVhZjg5MSIsImEiOiJjbDZiYmIxMWsxYXBjM2RwM3g5Y2R5ZTVzIn0._3mYOHsO_qd2XL7DfwbNaA";
// const mapB = new mapboxg1.Map({
//     container: 'map', 
//     style: 'mapbox://styles/leaf891/cl6bldccm000514qnwsj5rdtb',
//     center: [4.9031, 114.9398], 
//     zoom: 7 
// })



// const places = {
//     'type': 'FeatureCollection',
//     'features': [
//     {
//     'type': 'Feature',
//     'properties': {
//     'description': "Ford's Theater",
//     'icon': 'theatre-15'
//     },
//     'geometry': {
//     'type': 'Point',
//     'coordinates': [4.937683543922975, 114.92901856839401]
//     }
//     },
//     {
//     'type': 'Feature',
//     'properties': {
//     'description': 'The Gaslight',
//     'icon': 'theatre-15'
//     },
//     'geometry': {
//     'type': 'Point',
//     'coordinates': [-77.003168, 38.894651]
//     }
//     },
//     {
//     'type': 'Feature',
//     'properties': {
//     'description': "Horrible Harry's",
//     'icon': 'bar-15'
//     },
//     'geometry': {
//     'type': 'Point',
//     'coordinates': [-77.090372, 38.881189]
//     }
//     },
//     {
//     'type': 'Feature',
//     'properties': {
//     'description': 'Bike Party',
//     'icon': 'bicycle-15'
//     },
//     'geometry': {
//     'type': 'Point',
//     'coordinates': [-77.052477, 38.943951]
//     }
//     },
//     {
//     'type': 'Feature',
//     'properties': {
//     'description': 'Rockabilly Rockstars',
//     'icon': 'music-15'
//     },
//     'geometry': {
//     'type': 'Point',
//     'coordinates': [-77.031706, 38.914581]
//     }
//     },
//     {
//     'type': 'Feature',
//     'properties': {
//     'description': 'District Drum Tribe',
//     'icon': 'music-15'
//     },
//     'geometry': {
//     'type': 'Point',
//     'coordinates': [-77.020945, 38.878241]
//     }
//     },
//     {
//     'type': 'Feature',
//     'properties': {
//     'description': 'Motown Memories',
//     'icon': 'music-15'
//     },
//     'geometry': {
//     'type': 'Point',
//     'coordinates': [-77.007481, 38.876516]
//     }
//     }
//     ]
// };

// map.on('load', () => {
//     // Add a GeoJSON source containing place coordinates and information.
//     map.addSource('places', {
//     'type': 'geojson',
//     'data': places
//     });
     
//     map.addLayer({
//     'id': 'poi-labels',
//     'type': 'symbol',
//     'source': 'places',
//     'layout': {
//     'text-field': ['get', 'description'],
//     'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
//     'text-radial-offset': 0.5,
//     'text-justify': 'auto',
//     'icon-image': ['get', 'icon']
//     }
// })});

// Wrapper Fucntions
// Every Click On Buttons
previousBtn.addEventListener('click', previousImage);
nextBtn.addEventListener('click', nextImage);


// Previous Image Function
function previousImage() {
  
  if(currentImageCount === 1){
    return false;
  }else{ 
    currentImageCount--;
    sliderController();

  };
};


function nextImage() {
  if(currentImageCount === imagesAreaImages.length){
    return false;
  }else{ 
    currentImageCount++;
    sliderController();
  };
};


(function createPaginationSpans(){

  for(var i = 0; i < imagesAreaImages.length; i++){
    let paginationSpan = document.createElement('span');
    paginationArea.appendChild(paginationSpan)
  };
})();


(sliderController = function (){
  let paginationCircls = document.querySelectorAll('.pagination-area span');
  removeAllActive(paginationCircls);
  activeButton();

  let currentImageMinusOne = currentImageCount - 1;
  paginationCircls[currentImageMinusOne].classList.add('active');

  imagesAreaFirstImage.style.marginLeft = `-${600 * currentImageMinusOne}px`;
})();

// Remove All Active Class Function
function removeAllActive(targetElement){
  for(var i = 0; i < targetElement.length; i++){
    targetElement[i].classList.remove('active');
  };
};

// Check Active Button Function
function activeButton() {
  currentImageCount === 1 ? 
  // Hide The Previous Button
  previousBtn.classList.add('disabled') : 
  // Else: Show The Previous Button
  previousBtn.classList.remove('disabled');

  currentImageCount === imagesAreaImages.length ? 
  nextBtn.classList.add('disabled') : 
  nextBtn.classList.remove('disabled');
};

// Move Slider Image Every 3 Second 
setInterval(() => {
  if(currentImageCount != imagesAreaImages.length){
    currentImageCount++;
    sliderController();
  }else{ 
    currentImageCount = 1;
    sliderController();
  };
}, 3000);



let peakTime = document.querySelector(".currently-peak");
let dewanTime = document.querySelector(".currently-dewan");
let msTime = document.querySelector(".currently-mscourt");
let centrepoint = document.querySelector(".currently-centrepoint");
let fuzhou = document.querySelector(".currently-fuzhou");
let ganros = document.querySelector(".currently-ganros");
var current = new Date();
var hour = current.getHours();
var day = current.getDay();

console.log(hour);
console.log("current hour " + current.getHours());
console.log("Current day " + current.getDay()); // 0 is Sunday

// used 5 and 22 because truthy flasy operators >=



function sixNine(){
  if (hour > 5 && hour < 22) {
    peakTime.innerHTML = "OPEN";
    peakTime.style.color = "#41af31";
  } else if (hour < 6 || hour > 22){
    peakTime.innerHTML = "CLOSED";
    peakTime.style.color = "red";
  }
  else {
    peakTime.innerHTML = "???"
  }
}

function eightTen(){
  if (hour > 7 && hour < 23) {
    dewanTime.innerHTML = "OPEN";
    msTime.innerHTML = "OPEN";
    dewanTime.style.color = "#41af31";
    msTime.style.color = "#41af31";
  } else if (hour < 8 || hour > 22){
    dewanTime.innerHTML = "CLOSED";
    msTime.innerHTML = "CLOSED";
    dewanTime.style.color = "red";
    msTime.style.color = "red";
  }
  else {
    dewanTime.innerHTML = "???";
    msTime.innerHTML = "???";
  }
}


function sevenTen(){
  if (hour > 6 && hour < 23) {
    fuzhou.innerHTML = "OPEN";
    fuzhou.style.color = "#41af31";
  } else if (hour < 7 || hour > 22){
    fuzhou.innerHTML = "CLOSED";
    fuzhou.style.color = "red";
  }
  else {
    fuzhou.innerHTMl = "???";
  }
}

function sevenTwelve(){
  if (hour > 6 && hour < 25) {
    centrepoint.innerHTML = "OPEN";
    centrepoint.style.color = "#41af31";
  } else if (hour < 7 || hour > 22){
    centrepoint.innerHTML = "CLOSED";
    centrepoint.style.color = "red";
  }
  else {
    centrepoint.innerHTML = "???";
  }
}

function eightNine() {
  if (hour > 7 && hour < 22) {
    ganros.innerHTML = "OPEN";
    ganros.style.color = "#41af31";
  } else if (hour < 8 || hour > 21){
    ganros.innerHTML = "CLOSED";
    ganros.style.color = "red";
  }
}

sevenTwelve()
eightTen()
sevenTen()
sixNine()
eightNine()
openClose()