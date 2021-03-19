//open & close mobile menu

const menuOpen = document.querySelectorAll("[data-mobile-menu-target]");
const menuClose = document.querySelectorAll("[data-mobile-menu-close]");
const overlay = document.querySelector(".overlay");

menuOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    const menu = document.querySelector(btn.dataset.mobileMenuTarget);
    openMenu(menu);
  });
});

function openMenu(menu) {
  overlay.classList.add("fade-in");
  overlay.classList.remove("fade-out");
  menu.classList.add("fade-in");
  menu.classList.remove("fade-out");
}

menuClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    const menu = document.querySelector(btn.dataset.mobileMenuClose);
    closeMenu(menu);
  });
});

function closeMenu(menu) {
  overlay.classList.add("fade-out");
  overlay.classList.remove("fade-in");
  menu.classList.add("fade-out");
  menu.classList.remove("fade-in");
}

// hero slider
//mobile
const mobileImages = document.querySelectorAll("#mobile--image");
const heroText = document.querySelectorAll(".hero__cta__text");
const leftArrow = document.getElementById("mobile--left--arrow");
const rightArrow = document.getElementById("mobile--right--arrow");

console.log(heroText);
let i = 0;
let x = 0;

leftArrow.addEventListener("click", previousSlide);
rightArrow.addEventListener("click", nextSlide);

function nextSlide() {
  if (i === mobileImages.length - 1) {
    mobileImages[i].classList.remove("active");
    heroText[i].classList.remove("active");
    i = 0;
    mobileImages[i].classList.add("active");
    heroText[i].classList.add("active");
  } else {
    mobileImages[i].classList.remove("active");
    heroText[i].classList.remove("active");
    i++;
    mobileImages[i].classList.add("active");
    heroText[i].classList.add("active");
  }
}

function previousSlide() {
  if (i === 0) {
    mobileImages[i].classList.remove("active");
    heroText[i].classList.remove("active");
    i = 2;
    mobileImages[i].classList.add("active");
    heroText[i].classList.add("active");
  } else {
    mobileImages[i].classList.remove("active");
    heroText[i].classList.remove("active");
    i--;
    mobileImages[i].classList.add("active");
    heroText[i].classList.add("active");
  }
}
