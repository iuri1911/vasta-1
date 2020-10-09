"use strict";

var modal = document.querySelector(".modal");
var previews = document.querySelectorAll(".galeria img");
var original = document.querySelector(".full-img");
var caption = document.querySelector(".caption");
previews.forEach(function (preview) {
  preview.addEventListener('click', function () {
    modal.classList.add("open");
    original.classList.add("open");
    var originalSrc = preview.getAttribute("src");
    console.log(originalSrc);
    original.src = originalSrc;
    var altText = preview.alt;
    caption.textContent = altText;
  });
});
modal.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});