var images = ["taj.jpg", "us.jpg", "dubai.jpg", "eiffel.jpg", "burj.jpg"];

function changeBackground() {
  var image = images[Math.floor(Math.random() * images.length)];
  imageContainer.style.backgroundImage = "url('" + image + "')";
}

var imageContainer = document.getElementById("image");
var changeButton = document.getElementById("changeBtn");
changeButton.addEventListener("click", changeBackground);
