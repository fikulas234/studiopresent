const hamburger = document.querySelector(".burger-nav");
const navMenu = document.querySelector(".float-menu");

const left = document.querySelector(".left-trigger");
const right = document.querySelector(".right-trigger");

const radio1 = document.getElementById("i1");
const radio2 = document.getElementById("i2");
const radio3 = document.getElementById("i3");
const radio4 = document.getElementById("i4");
const radio5 = document.getElementById("i5");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");

const image = document.querySelector(".image")


hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("change");
})


let radio_array = [radio1, radio2, radio3, radio4, radio5];

let radio_length = radio_array.length;
let imgSrc = ["img/image-1.jpg", "img/image-2.jpeg", "img/image-3.jpg", "img/image4.jpg", "img/image5.jpg"];

let i = 0;

radio_array.forEach(
    (item, index) =>
      (item.onclick = () => {
        i = index;
      })
  );

right.onclick = () => {
    i++;
    if (i > radio_length - 1) {
        i = 0;
    }
    console.log(i);
    radio_array[i].checked = true;
    image.style.backgroundImage = `url(${imgSrc[i]})`;
}

left.onclick = () => {
    i--;
    if (i < 0) {
        i = radio_length - 1;
    }
    radio_array[i].checked = true;
    image.style.backgroundImage = `url(${imgSrc[i]})`;
}

