var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

function showSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[slideIndex].classList.add("active");
}

function changeSlideback() {
  showSlide(-1);
}

function changeSlide() {
  showSlide(1);
}

function autoSlide() {
  showSlide(1);
}

setInterval(autoSlide, 5000);

