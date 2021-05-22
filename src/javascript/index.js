import "../styles/styles.scss";

window.onscroll = function () {
  showNavbar();
  elementOpacity("#top");
  elementOpacity("#projects");
  elementOpacity("#contact");
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
  const opacityValue = (100 - scrolledFromTopInPercentage) / 100;
  document.querySelector(element).style.opacity = opacityValue;
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

openMenu();
closeMenu();
