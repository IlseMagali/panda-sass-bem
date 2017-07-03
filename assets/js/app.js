// variables to chance the text depend on the button
var btnClose = document.getElementsByClassName("btn-close");

var origin = document.getElementById("origen");
var extinction = document.getElementById("extinction");
var restore = document.getElementById("restore");

var galleryImage = document.getElementsByClassName("gallery__img");
var length = galleryImage.length;

var textOne = document.getElementById("text-one");
var textTwo = document.getElementById("text-two");

// buttons' events
origin.addEventListener("click", appearOrigin);
extinction.addEventListener("click", appearExtinction);
restore.addEventListener("click", appearImages);

function appearOrigin () {
	if (textOne.style.visibility == "hidden") {
		textOne.style.visibility = "visible";
	} else {
		textOne.style.visibility = "hidden";
	}
}

function appearExtinction () {
	if (textTwo.style.visibility == "hidden") {
		textTwo.style.visibility = "visible";
	} else {
		textTwo.style.visibility = "hidden";
	}
}

for (var i = 0; i < btnClose.length; i++){
		btnClose[i].addEventListener("click", closeImage);
}

function closeImage () {
	this.parentElement.style.display = "none";
}

function appearImages(){
	for (var i = 0; i < length ; i++){
		galleryImage[i].style.display = "flex";
	}
}
