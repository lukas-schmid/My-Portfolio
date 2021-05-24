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

const handleShowSections = () => {
  const targets = document.querySelectorAll(".show");
  function handleIntersectionShow(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0px)";
        entry.target.style.opacity = 1;
      } else {
        entry.target.style.transform = "translateY(30px)";
        entry.target.style.opacity = 0;
      }
    });
  }
  const observerShow = new IntersectionObserver(handleIntersectionShow, {
    threshold: 0.01,
  });
  targets.forEach((target) => {
    observerShow.observe(target);
  });
};

const handleHrTagWidth = () => {
  const targets = document.querySelectorAll("hr");
  function handleIntersectionHrWidth(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = "200px";
      } else {
        entry.target.style.width = "65px";
      }
    });
  }

  const observerShow = new IntersectionObserver(handleIntersectionHrWidth, {
    threshold: 1,
  });
  targets.forEach((target) => {
    observerShow.observe(target);
  });
};

openMobileMenu();
closeMobileMenu();
handleShowSections();
handleHrTagWidth();
