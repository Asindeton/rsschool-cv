let menuBurger = document.querySelector(".menu_burger");
let headerNav = document.querySelector("header nav");

menuBurger.addEventListener("click", toggleMenuBurger);

function toggleMenuBurger() {
  menuBurger.classList.toggle("burgerActive");
  headerNav.classList.toggle("burgerActive");
}