const header = document.querySelector(".header");
const navMenu = document.querySelector(".nav__menu");
const navItems = document.querySelectorAll(".nav__item");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--active");
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("header--active", window.scrollY > 0);
});
