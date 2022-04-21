const hamburger = document.querySelector(".burger-nav");
const navMenu = document.querySelector(".float-menu");

const left = document.querySelector(".left-trigger")
const right = document.querySelector(".right-trigger")

const pic1 = document.getElementById("i1")
const pic2 = document.getElementById("i2")
const pic3 = document.getElementById("i3")
const pic4 = document.getElementById("i4")
const pic5 = document.getElementById("i5")



hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
})


left.addEventListener("click", () => {
    console.log("bla");
})




