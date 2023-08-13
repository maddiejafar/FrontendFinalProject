const hamburgerMenuBtn = document.querySelector(".burger-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuCloseBtn = document.querySelector(".close>img");

hamburgerMenuBtn.addEventListener("click", () => {
    hamburgerMenu.style.top = 0;
})

hamburgerMenuCloseBtn.addEventListener("click", () => {
    hamburgerMenu.style.top = "-520px";
})
