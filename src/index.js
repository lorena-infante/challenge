/**
 * File for setting up the environment. Please do not modify.
 */

import "./css/style.css";
import "./js/script";

if (module.hot) {
  module.hot.accept();
}

const indic1 = document.getElementById("one");
const indic2 = document.getElementById("two");
const indic3 = document.getElementById("three");
const indic4 = document.getElementById("four");
const indic5 = document.getElementById("five");

//active the class on click

indic1.addEventListener("click", () => {
  indic1.classList.add("active-indic");

  indic2.classList.remove("active-indic");
  indic3.classList.remove("active-indic");
  indic4.classList.remove("active-indic");
  indic5.classList.remove("active-indic");
});

indic2.addEventListener("click", () => {
  indic2.classList.add("active-indic");

  indic1.classList.remove("active-indic");
  indic3.classList.remove("active-indic");
  indic4.classList.remove("active-indic");
  indic5.classList.remove("active-indic");
});


indic3.addEventListener("click", () => {
  indic3.classList.add("active-indic");

  indic1.classList.remove("active-indic");
  indic2.classList.remove("active-indic");
  indic4.classList.remove("active-indic");
  indic5.classList.remove("active-indic");
});

indic4.addEventListener("click", () => {
  indic4.classList.add("active-indic");

  indic1.classList.remove("active-indic");
  indic2.classList.remove("active-indic");
  indic3.classList.remove("active-indic");
  indic5.classList.remove("active-indic");
});

indic5.addEventListener("click", () => {
  indic5.classList.add("active-indic");

  indic1.classList.remove("active-indic");
  indic2.classList.remove("active-indic");
  indic3.classList.remove("active-indic");
  indic4.classList.remove("active-indic");
});