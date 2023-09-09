const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const navMenu = document.querySelector(".nav-bar-menu");
const navLinks = document.querySelectorAll(".nav-link");
const navSearch = document.querySelector(".mobile-menu-search");
const navSearchBar = document.querySelector(".mobile-search-activate");
const navSearchBarClose = document.querySelector(".mobile-search-close");


function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBar.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navSearch.classList.remove("active");
}

function searchMenu() {
    navSearchBar.classList.toggle("active");
}

function closeSearch() {
    navSearchBar.classList.remove("active");
}

hamburger.addEventListener("click", mobileMenu);
navLinks.forEach(n => n.addEventListener("click", closeMenu));
navSearch.addEventListener("click", searchMenu);
navSearchBarClose.addEventListener("click", closeSearch);