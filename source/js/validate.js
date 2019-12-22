var link = document.querySelector(".profile__submit");
var text = document.querySelector("[name=pet]");
var weight = document.querySelector("[name=weight]");
var email = document.querySelector("[name=email]");
var telephone = document.querySelector("[name=telephone]");
var email__icon = document.querySelector(".contact__icon-letter");
var telephone__icon = document.querySelector(".contact__icon-telephone");
link.addEventListener("click", function(evt) {
  if (!text.value) {
    evt.preventDefault();
    text.classList.add("animal__input--error");
  } else {
    text.classList.remove("animal__input--error");
  }
  if (!weight.value) {
    evt.preventDefault();
    weight.classList.add("animal__input--error");
  } else {
    weight.classList.remove("animal__input--error");
  }
  if (!email.value) {
    evt.preventDefault();
    email.classList.add("contact__input--error");
    email__icon.classList.add("contact__icon-letter--error");
  } else {
    email.classList.remove("contact__input--error");
    email__icon.classList.remove("contact__icon-letter--error");
  }
  if (!telephone.value) {
    evt.preventDefault();
    telephone.classList.add("contact__input--error");
    telephone__icon.classList.add("contact__icon-telephone--error");
  } else {
    telephone.classList.remove("contact__input--error");
    telephone__icon.classList.remove("contact__icon-telephone--error");
  }
});
