var myImg = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg"
]
var index = 0;
function setImage() {
  var imgSource = document.getElementById("imgDisplay");
  imgSource.src = "pictures/" + myImg[index];
}
function nextSlide() {
  if(index < (myImg.length - 1)) {
    index++;
  }
  else {
    index = 0;
  }
  setImage();
}
function prevSlide() {
  if(index > 0) {
    index--;
  }
  else {
    index = (myImg.length - 1);
  }
  setImage();
}
