var form = document.querySelector(".profile__form");
var text = document.querySelector("[name=pet]");
var weight = document.querySelector("[name=weight]");
form.addEventListener("submit", function(evt) {
  if (!text.value || !weight.value) {
    evt.preventDefault();
    text.classList.add("animal__input--error");
    weight.classList.add("animal__input--error");
  }
});
