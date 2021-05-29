// Burger menu
let burgerMenu = document.querySelector('.burger-menu');
let nav = document.querySelector('.header__block-nav');
let back = document.querySelector('body');

burgerMenu.onclick = function() {
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
    back.classList.toggle('lock');
}