//Global Variables

const ham = document.querySelector('.header .nav-bar .ham');
const nav = document.querySelector('.header .nav-bar nav');
var counter = 1;

ham.addEventListener('click', () => {
    nav.classList.toggle('nav-toggle');
    ham.classList.toggle('close');

});



setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if (counter > 4){
        counter = 1;
    }


}, 5000);