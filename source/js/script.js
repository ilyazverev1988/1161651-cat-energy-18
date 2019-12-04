var navMain = document.querySelector(".header__nav");
var navMenu = document.querySelector(".header__menu");

navMain.classList.remove("header__nav--nojs");

navMenu.addEventListener("click", function() {
  if (navMain.classList.contains("header__nav--closed")) {
    navMain.classList.remove("header__nav--closed");
    navMain.classList.add("header__nav--opened");
  } else {
    navMain.classList.add("header__nav--closed");
    navMain.classList.remove("header__nav--opened");
  }
});
