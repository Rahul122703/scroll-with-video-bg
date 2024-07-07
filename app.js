// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear(); // new

// ********** close links ************

const btm_container = document.querySelector(".btm_container");
const links_container = document.querySelector(".links_container");
const toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", function () {
  const btm_height = btm_container.getBoundingClientRect().height; // new
  const links_container_height = links_container.getBoundingClientRect().height;
  if (links_container_height != btm_height) {
    links_container.style.height = `${btm_height}px`;
  } else {
    links_container.style.height = `0px`;
  }
});

// ********** fixed navbar ***********

const nav_height = document.getElementById("window_nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > nav_height.getBoundingClientRect().height) {
    // new
    nav_height.classList.add("fixed-nav");
  } else {
    nav_height.classList.remove("fixed-nav");
  }

  const top_link = document.querySelector(".top-link");

  if (window.pageYOffset < 500) {
    top_link.classList.add("top_link_hide");
  } else {
    top_link.classList.remove("top_link_hide");
  }
});

// ********** smooth scroll **********
const phone_nav = document.querySelector(".phone_nav");
const scroll_links = document.querySelectorAll(".scroll-link");
scroll_links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const current_nav_height = nav_height.getBoundingClientRect().height;
    const selected_section_name = e.currentTarget.getAttribute("href").slice(1); // new
    const element = document.getElementById(selected_section_name);
    window.scrollTo({
      left: 0,
      top: element.offsetTop - current_nav_height, // new
    });
  });
});
