var button_past = document.querySelector(".cat-change__time--past");
var button_future = document.querySelector(".cat-change__time--future");
var image_fat = document.querySelector(".slider__image-fat");
var image_thin = document.querySelector(".slider__image-thin");

button_past.addEventListener("click", function(evt) {
  image_thin.classList.remove("slider_show");
  image_thin.classList.remove("visually-hidden");
  image_fat.classList.remove("visually-hidden");
  image_fat.classList.add("slider_show");
});

button_future.addEventListener("click", function(evt) {
  image_fat.classList.remove("slider_show");
  image_fat.classList.add("visually-hidden");
  image_thin.classList.add("slider_show");
});
