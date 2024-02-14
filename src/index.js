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

const prev = document.getElementById("previous");
const next = document.getElementById("next");

const img1 = document.getElementById("carousel-img-1");
const img2 = document.getElementById("carousel-img-2");
const img3 = document.getElementById("carousel-img-3");
const img4 = document.getElementById("carousel-img-4");
const img5 = document.getElementById("carousel-img-5");

//active the class on click

next.addEventListener('click',() =>{
if (!img1.classList.contains('d-none')){
  indic2.classList.add("active-indic");
  img2.classList.remove("d-none");
  
  indic1.classList.remove("active-indic");
  indic3.classList.remove("active-indic");
  indic4.classList.remove("active-indic");
  indic5.classList.remove("active-indic");
  
  img1.classList.add("d-none");
  img3.classList.add("d-none");
  img4.classList.add("d-none");
  img5.classList.add("d-none");
}


})

indic1.addEventListener("click", () => {
  indic1.classList.add("active-indic");
  img1.classList.remove("d-none");

  indic2.classList.remove("active-indic");
  indic3.classList.remove("active-indic");
  indic4.classList.remove("active-indic");
  indic5.classList.remove("active-indic");

  img2.classList.add("d-none");
  img3.classList.add("d-none");
  img4.classList.add("d-none");
  img5.classList.add("d-none");
});

indic2.addEventListener("click", () => {
  indic2.classList.add("active-indic");
  img2.classList.remove("d-none");

  indic1.classList.remove("active-indic");
  indic3.classList.remove("active-indic");
  indic4.classList.remove("active-indic");
  indic5.classList.remove("active-indic");

  img1.classList.add("d-none");
  img3.classList.add("d-none");
  img4.classList.add("d-none");
  img5.classList.add("d-none");
});

indic3.addEventListener("click", () => {
  indic3.classList.add("active-indic");
  img3.classList.remove("d-none");

  indic1.classList.remove("active-indic");
  indic2.classList.remove("active-indic");
  indic4.classList.remove("active-indic");
  indic5.classList.remove("active-indic");

  img1.classList.add("d-none");
  img2.classList.add("d-none");
  img4.classList.add("d-none");
  img5.classList.add("d-none");
});

indic4.addEventListener("click", () => {
  indic4.classList.add("active-indic");
  img4.classList.remove("d-none");

  indic1.classList.remove("active-indic");
  indic2.classList.remove("active-indic");
  indic3.classList.remove("active-indic");
  indic5.classList.remove("active-indic");

  img1.classList.add("d-none");
  img2.classList.add("d-none");
  img3.classList.add("d-none");
  img5.classList.add("d-none");
});

indic5.addEventListener("click", () => {
  indic5.classList.add("active-indic");
  img5.classList.remove("d-none");

  indic1.classList.remove("active-indic");
  indic2.classList.remove("active-indic");
  indic3.classList.remove("active-indic");
  indic4.classList.remove("active-indic");

  img1.classList.add("d-none");
  img2.classList.add("d-none");
  img3.classList.add("d-none");
  img4.classList.add("d-none");
});
