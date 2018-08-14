var link = document.querySelector(".item-block");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup-close-button");
var overlay = document.querySelector(".popup-overlay");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  overlay.classList.add("popup-overlay-show");
}); 

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  overlay.classList.remove("popup-overlay-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode ===27) {
    if (popup.classList.contains("popup-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
      overlay.classList.remove("popup-overlay-show");
    }
  }
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  overlay.classList.remove("popup-overlay-show");
});
