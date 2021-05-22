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
    document.querySelector(".navbar").style.top = "-50px";
  }
};

const elementOpacity = (element) => {
  const position = document.querySelector(element).getBoundingClientRect();
  const scrolledFromTopInPercentage =
    (Math.abs(position.y) * 100) / position.height;
  const opacityValue = (100 - scrolledFromTopInPercentage) / 100;
  document.querySelector(element).style.opacity = opacityValue;
};
