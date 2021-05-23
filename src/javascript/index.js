import "../styles/styles.scss";

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
