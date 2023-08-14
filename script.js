// Sticky Menu
// script.js
var scroll = document.querySelector("header");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header ul li a");

window.onscroll = () => {
  let fromTop = window.scrollY;

  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.offsetHeight;
    let id = section.getAttribute("id");

    if (
      fromTop >= sectionTop - 150 &&
      fromTop < sectionTop + sectionHeight - 150
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(`header ul li a[href="#${id}"]`)
        .classList.add("active");
    }
  });

  if (window.pageYOffset >= scroll.offsetTop) {
    scroll.classList.add("sticky");
  } else {
    scroll.classList.remove("sticky");
  }

};
