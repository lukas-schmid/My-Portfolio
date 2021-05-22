import "../styles/styles.scss";

window.onscroll = function () {
  showNavbar();
  elementOpacity(".topSection");
  elementOpacity(".projectSection");
  elementOpacity(".contactSection");
};

const showNavbar = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-65px";
  }
};

const elementOpacity = (element) => {
  const position = document.querySelector(element).getBoundingClientRect();
  const scrolledFromTopInPercentage =
    (Math.abs(position.y) * 100) / position.height;
  const opacityValue = 1 - (100 - scrolledFromTopInPercentage) / 100;
  document.querySelector(element).style.backgroundColor =
    "rgba(0,0,0," + opacityValue + ")";
};

function openMenu() {
  document.querySelector(".navbar__icon").addEventListener("click", () => {
    document.querySelector(".sidebarNav").style.transform = "translateX(0%)";
  });
}

function closeMenu() {
  document.querySelector(".sidebarNav__close").addEventListener("click", () => {
    document.querySelector(".sidebarNav").style.transform = "translateX(100%)";
  });
  document.querySelectorAll(".menu-link").forEach((item) => {
    item.addEventListener("click", (event) => {
      document.querySelector(".sidebarNav").style.transform =
        "translateX(100%)";
    });
  });
}

//////// slider test ///////

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//////// slider test //////

window.plusSlides = plusSlides;
window.currentSlide = currentSlide;
openMenu();
closeMenu();
