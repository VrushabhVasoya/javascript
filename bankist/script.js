"use strict";

///////////////////////////////////////
// Modal window
const header = document.querySelector(".header");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Selectiong Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);
document.getElementById("secrion--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

//Creating & Inserting Element
// .insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We used cookie to improve fumctionality Improvement";
message.innerHTML =
  "We used cookie to improve fumctionality Improvement <button class = 'btn btn-close-cookie'>Got It!</button>";
header.prepend(message); //add element as a first child
// header.append(message); // add element as a last child
// header.append(message.cloneNode(true)); // create a clone of element

// header.before(message); //
// header.after(message); //

document
  .querySelector(".btn-close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

// message.style.backgroundColor = "#37383d";
// message.style.width = "100%";
// console.log(message.style.backgroundColor);
// console.log(message.style.color); //not display because we are added in stylesheet

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// // document.documentElement.style.setProperty("--color-primary", "orangered");

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (e) => {
  const s1Cords = section1.getBoundingClientRect();
  console.log(s1Cords);
  // console.log(e.target.getBoundingClientRect());
  // console.log("x&y", window.pageXOffset, window.pageYOffset);
  // window.scrollTo({
  //   left: s1Cords.left + window.pageXOffset,
  //   top: s1Cords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });
  section1.scrollIntoView({ behavior: "smooth" });
});

// const h1 = document.querySelector("h1");

// const alterh1 = () => {
//   alert("Mouse Enter event Detected :)");

//   h1.removeEventListener("mouseenter", alterh1);
// };
// h1.addEventListener("mouseenter", alterh1);

// // h1.onmouseenter = () => {
// //   alert("onmouseenter :Mouse Enter Detected :)");
// // };

// // rgb(255,255,255);
// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// };

// console.log(randomColor());

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   console.log("Link", e.target, e.currentTarget);
//   this.style.backgroundColor = randomColor();
//   console.log(e.currentTarget == this);
//   e.stopPropagation();
// });
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   console.log("Link", e.target, e.currentTarget);
// });
// document.querySelector(".nav").addEventListener("click", function (e) {
//   console.log("Link", e.target, e.currentTarget);
// });

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", function (e) {
//     console.log(tab.textContent);
//   });
// });

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);
  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//menu fade animation
const nav = document.querySelector(".nav");

const handleHover = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};
nav.addEventListener("mouseover", (e) => {
  handleHover(e, 0.5);
});
nav.addEventListener("mouseout", (e) => {
  handleHover(e, 1);
});

const initialCords = section1.getBoundingClientRect();
console.log(initialCords);
window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  if (window.scrollY > initialCords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

//DOM Life Cycle

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("HTML Parsed & DOM tree built", e);
});

window.addEventListener("load", (e) => {
  console.log("page loaded", e);
});

//this event occurs when user click on close tab button
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  console.log(e);
  e.returnValue = "message";
});
