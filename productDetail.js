// Img Carousel

let images = Array.from(document.getElementsByClassName("imgCarousel"));

let mainPhoto = document.getElementById("mainPhoto");

function updateImage(event) {
  let image = event.target;
  mainPhoto.src = image.src;
}

images.forEach((image) => {
  image.addEventListener("click", updateImage);
});
