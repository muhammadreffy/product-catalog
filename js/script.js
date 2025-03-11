const header = document.querySelector(".header");
const navMenu = document.querySelector(".nav__menu");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--active");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("header--active", window.scrollY > 0);
});
