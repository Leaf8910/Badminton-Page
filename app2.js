let imagesAreaImages = document.querySelectorAll('.images-area img');
let imagesAreaFirstImage = document.querySelector('.images-area .firstImage');
let previousBtn = document.querySelector('.previous-btn');
let nextBtn = document.querySelector('.next-btn');
let paginationArea = document.querySelector('.pagination-area');
let currentImageCount = 2;
let sliderController;
let createPaginationSpans;

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

