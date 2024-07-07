// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  autoplayDisableOnInteraction: true,
  spaceBetween: 9,
  direction: window.innerWidth <= 600 ? "vertical" : "horizontal",
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Get the Swiper container
var swiperContainer = document.querySelector(".mySwiper");

// Pause autoplay on mouseenter
swiperContainer.addEventListener("mouseenter", function () {
  swiper.autoplay.stop();
});

// Resume autoplay on mouseleave
swiperContainer.addEventListener("mouseleave", function () {
  swiper.autoplay.start();
});

window.addEventListener("resize", function () {
  const isMobile = window.innerWidth <= 600;
  swiper.changeDirection(isMobile ? "vertical" : "horizontal");

  let Border = document.querySelector(".project_all");
  if (Border) {
    Border.style.border = isMobile
      ? "none"
      : `4px solid var(--project_all_border_color)`;
    Border.style.borderTop = isMobile
      ? `4px solid var(--project_all_border_color)`
      : "none";
    Border.style.borderBottom = isMobile
      ? `4px solid var(--project_all_border_color)`
      : "none";
  }

  swiper.params.slidesPerView = isMobile ? 1 : 3;
  swiper.update();
});

const tooltips = [
  " asking love",
  " canvas",
  " clock",
  " image",
  " QR code",
  " weather",
  " my info",
  "mess data"
];
const links = [
  "https://your-brain.github.io/LoverBabu/",
  "https://partha-batabyal.github.io/canvas__op/",
  "https://partha-batabyal.github.io/clockNoob/",
  "https://partha-batabyal.github.io/FattyImgFinder/",
  "https://your-brain.github.io/banaloQr/",
  "https://partha-batabyal.github.io/FattyWeather/",
  "https://your-brain.github.io/aboutPartha/",
  "https://partha-batabyal.github.io/messData/",
];

const initSwiperTooltips = () => {
  const swiperSlides = document.querySelectorAll(".swiper-slide");

  swiperSlides.forEach((slide, index) => {
    slide.setAttribute("data-tooltip", tooltips[index]);

    slide.addEventListener("click"||"touchstart"||"ontouchstart", () => {
      slide.removeAttribute("data-tooltip");

      const loader = document.createElement("div");
      loader.classList.add("loaderSwiper");
      loader.classList.add("loader");

      slide.appendChild(loader);



      setTimeout(() => {
        loader.remove();
        window.open(links[index], "_blank");
        slide.setAttribute("data-tooltip", tooltips[index]);
      }, 4000);
    });
  });
};

window.addEventListener("DOMContentLoaded", initSwiperTooltips);
window.addEventListener("resize", initSwiperTooltips);
