var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("modal-content-show");
if (storage) {
	login.value = storage;
	password.focus();
} else {
	login.focus();
}
});

close.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event) {
if (!(login.value && password.value)) {
	event.preventDefault();
	popup.classList.remove("modal-error");
	popup.classList.add("modal-error");
} else {
	localStorage.setItem("login", login.value);
}
});

window.addEventListener("keydown", function(event) {
if (event.keyCode == 27) {
	if (popup.classList.contains("modal-content-show")) {
		popup.classList.remove("modal-content-show");
	}
}
});

var mapOpen = document.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
var mapCanvas = document.getElementById("map-canvas");

mapOpen.addEventListener("click", function(event) {
event.preventDefault();
mapPopup.classList.add("modal-content-show");
google.maps.event.trigger(mapCanvas, 'resize');
map.setCenter(new LatLng(59.9387942,30.3230833)); 
});


mapClose.addEventListener("click", function(event) {
event.preventDefault();
mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
if (event.keyCode == 27) {
  if (mapPopup.classList.contains("modal-content-show")) {
    mapPopup.classList.remove("modal-content-show");
  }
}
});