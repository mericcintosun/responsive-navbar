const hamburgerMenuButton = document.querySelector(".menu-icon");
const hamburgerMenu = document.querySelector(".hamburger-navbar");

hamburgerMenuButton.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("display-passive");
});
