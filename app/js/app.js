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
//Selectors
const heroText = document.querySelectorAll(".hero__cta__text");
const leftArrow = document.querySelectorAll("[data-left-arrow]");
const rightArrow = document.querySelectorAll("[data-right-arrow]");

//Next-Slide function

rightArrow.forEach((btn) => {
  btn.addEventListener("click", () => {
    const images = document.querySelectorAll(btn.dataset.rightArrow);
    nextSlide(images);
  });
});
let i = 0;
function nextSlide(images) {
  if (i === images.length - 1) {
    images[i].classList.remove("active");
    heroText[i].classList.remove("active");
    i = 0;
    images[i].classList.add("active");
    heroText[i].classList.add("active");
  } else {
    images[i].classList.remove("active");
    heroText[i].classList.remove("active");
    i++;
    images[i].classList.add("active");
    heroText[i].classList.add("active");
  }
}

//Previous-Slide function
leftArrow.forEach((btn) => {
  btn.addEventListener("click", () => {
    const images = document.querySelectorAll(btn.dataset.leftArrow);
    previousSlide(images);
  });
});

function previousSlide(images) {
  if (i === 0) {
    images[i].classList.remove("active");
    heroText[i].classList.remove("active");
    i = 2;
    images[i].classList.add("active");
    heroText[i].classList.add("active");
  } else {
    images[i].classList.remove("active");
    heroText[i].classList.remove("active");
    i--;
    images[i].classList.add("active");
    heroText[i].classList.add("active");
  }
}
