const menuOpen = document.querySelectorAll('[data-mobile-menu-target]');
const menuClose = document.querySelectorAll('[data-mobile-menu-close]');
const overlay = document.querySelector('.overlay');


menuOpen.forEach(btn => {
    btn.addEventListener('click', () => {
        const menu = document.querySelector(btn.dataset.mobileMenuTarget);
        openMenu(menu)
    });
});

function openMenu(menu) {
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
    menu.classList.add('fade-in');
    menu.classList.remove('fade-out');
};

 menuClose.forEach(btn => {
     btn.addEventListener('click', () => {
        const menu = document.querySelector(btn.dataset.mobileMenuClose);
        closeMenu(menu)
       
     });
 });

 function closeMenu(menu) {
    overlay.classList.add('fade-out');
    overlay.classList.remove('fade-in');
    menu.classList.add('fade-out');
    menu.classList.remove('fade-in');
};