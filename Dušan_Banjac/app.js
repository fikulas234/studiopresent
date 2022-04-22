// HAMBURGER MENU START

let hamburgerMenu = document.querySelector(".hamburgerMenu");
let menuItemList = document.querySelectorAll(".menuItemList");
let hamburgerMenuState= document.querySelector(".hamburgerMenuState");
let closeMenuIcon= document.querySelector(".closeMenuIcon");
let defaultMenuIcon = document.querySelector(".defaultMenuIcon");

function toggleMenu() {
    if (hamburgerMenu.classList.contains("showMenu")) {
        hamburgerMenu.classList.remove("showMenu");
        closeMenuIcon.style.display = "none";
        defaultMenuIcon.style.display = "block";
    } else {
        hamburgerMenu.classList.add("showMenu");
        closeMenuIcon.style.display = "block";
        defaultMenuIcon.style.display = "none";
    }
}

    hamburgerMenuState.addEventListener("click", toggleMenu);

    menuItemList.forEach( 
        function(menuItemList) { 
          menuItemList.addEventListener("click", toggleMenu);
        }
      )

      // HAMBURGER MENU END





    // HAMBURGER MENU SCROLL VISIBILITY START

    let scrollBtn = document.querySelector(".hamburgerMenuState")

    const refreshButtonVisibility = () => {
    if (document.documentElement.scrollTop > 500) {
        scrollBtn.style.display = "none";
    } else {
        scrollBtn.style.display = "block";
    }
}; 

        refreshButtonVisibility();

        scrollBtn.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
            ocument.body.scrollTop = 0;
});

            document.addEventListener("scroll", (e) => {
            refreshButtonVisibility();
});

// HAMBURGER MENU SCROLL VISIBILITY END