document.querySelector(".hide").onclick = function () {
  console.log("click up");
  document.querySelector(".show").style.display = "flex";
  document.querySelector(".hide").style.display = "none";
  document.querySelector(".hidden_buttons").style.display = "none";
};

document.querySelector(".show").onclick = function () {
  console.log("click show");
  document.querySelector(".show").style.display = "none";
  document.querySelector(".hide").style.display = "flex";
  document.querySelector(".hidden_buttons").style.display = "flex";
};

new Swiper(".swiper-wrapper"),