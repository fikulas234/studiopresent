const ham = document.querySelector('.header-nav .nav-bar .ham');
const nav = document.querySelector('.header-nav .nav-bar nav');

ham.addEventListener('click', () => {
    nav.classList.toggle('nav-toggle');
    ham.classList.toggle('close');
});

