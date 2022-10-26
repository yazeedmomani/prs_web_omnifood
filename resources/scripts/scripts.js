const btn = document.querySelector(".nav__mobile-nav-btn");
const nav = document.querySelector(".nav");

btn.addEventListener("click", function () {
  nav.classList.toggle("nav--open");
});
