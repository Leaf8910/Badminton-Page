let imagesAreaImages = document.querySelectorAll('.images-area img');
let imagesAreaFirstImage = document.querySelector('.images-area .firstImage');
let previousBtn = document.querySelector('.previous-btn');
let nextBtn = document.querySelector('.next-btn');
let paginationArea = document.querySelector('.pagination-area');
let currentImageCount = 2;
let sliderController;
let createPaginationSpans; 
let peakHours = document.querySelector(".peak-hours");


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




let weather = document.querySelector(".weather");
let cityName = "brunei";
let weatherIcon = document.querySelector(".weather-icon");
let currentTemp = document.querySelector(".current-temp");

//Get the API by City Name
getWeatherByName = (cityName) => {
  weather.innerText = "Loading";
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=6e69e26d2dbce83a2cd91866c8eab755`)
      .then((res) => res.json())
      .then((data) => showWeather(data))
      .catch(() => {
          console.log("weatherError")
      }
  )
};


showWeather = (data) => {
  currentTemp.innerHTML = `${temperature}&#176C`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

window.addEventListener("load", getWeatherByName);