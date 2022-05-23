"use strict";

// Get element
const navbarBtn = document.querySelector("#nav-btn");
const navbar = document.querySelector("#navbar");
const navClose = document.querySelector("#nav-close");

// open navbar
navbarBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

//close navbar
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
