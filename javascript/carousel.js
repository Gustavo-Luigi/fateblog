
const promoGrid = document.querySelector(".promo-grid");
const promoContainer = document.getElementById("promo-container");
let windowSize;

let carouselPosition = 0;

function carousel(){
  windowSize = window.innerWidth;

  if(windowSize < 960){
    carouselPosition += 100;
    promoGrid.style.transform = `translate(-${carouselPosition}%)`;
  
    if(carouselPosition == 400){
      carouselPosition = 0;
      promoGrid.style.transform = `translate(-${carouselPosition}%)`;

    }
  } else {
    carouselPosition = 0;
    promoGrid.style.transform = `translate(-${carouselPosition}%)`;
  }
}
 
function moveCarousel(){
  movementTimer = setInterval(carousel, 4000);
}

function stopCarousel(){
  clearInterval(movementTimer);
}

moveCarousel();

promoGrid.addEventListener("mouseover", stopCarousel);
promoGrid.addEventListener("mouseleave", moveCarousel);
window.addEventListener("resize", () => {
  windowSize = window.innerWidth;
  if(windowSize > 960) {
    carousel();
    }
  }
);
