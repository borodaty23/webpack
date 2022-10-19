import "./style/style.scss";

new Swiper(".channels__swiper", {
  slidesPerView: "auto",
  // centeredSlides: true,
  spaceBetween: 24,
});

new Swiper(".federal__slider", {
  slidesPerView: "auto",
  spaceBetween: 24,
});

new Swiper(".channel__dates", {
  slidesPerView: "auto",
  spaceBetween: 12,
});

let burger = document.querySelector(".header__burger");
let mobMenu = document.querySelector(".header__mobile-menu");
let body = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("header__burger--active");
  mobMenu.classList.toggle("header__mobile-menu--active");
  body.classList.toggle("lock");
});
