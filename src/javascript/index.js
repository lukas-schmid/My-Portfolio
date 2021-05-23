import "../styles/styles.scss";

window.onscroll = function () {
  handleNavbarOpacity();
};

const handleNavbarOpacity = () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY <= 60) {
    const opacity = (window.scrollY * 100) / 60 / 100;
    navbar.style.backgroundColor = "rgba(228,0,0," + opacity + ")";
  } else {
    navbar.style.backgroundColor = "rgba(228,0,0,1)";
  }
};

const openMobileMenu = () => {
  const navbarIcon = document.querySelector(".navbar__icon");
  const mobileMenu = document.querySelector(".navbar__mobile");
  navbarIcon.addEventListener("click", () => {
    mobileMenu.style.transform = "translateX(0%)";
  });
};

const closeMobileMenu = () => {
  const elements = document.querySelectorAll(".close");
  const mobileMenu = document.querySelector(".navbar__mobile");
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      mobileMenu.style.transform = "translateX(100%)";
    });
  });
};

openMobileMenu();
closeMobileMenu();
