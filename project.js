let colorChange = document.querySelector(".nav-container");
let button = document.querySelector(".btn");
let height = 400;

window.addEventListener("scroll", function () {
  let scroll = window.scrollY;

  if (scroll >= height) {
    colorChange.style.backgroundColor = "white";
    button.style.backgroundColor = "#1a8917";
  } else {
    colorChange.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "#191919";
  }
});
