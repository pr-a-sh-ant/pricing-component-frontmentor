"use strict";
const sliderBox = document.querySelector(".switch");

const monthly = document.querySelectorAll(".price-monthly");
const annually = document.querySelectorAll(".price-annually");
sliderBox.addEventListener("click", function (e) {
  if (e.pointerId === 1) {
    console.log("click");
    monthly.forEach((month) => month.classList.toggle("hidden"));
    annually.forEach((month) => month.classList.toggle("hidden"));
  }
});
