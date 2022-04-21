const hamburgerMenu = document.querySelector(".hamburgerMenu");
const menuItemList = document.querySelectorAll(".menuItemList");
const hamburgerMenuState= document.querySelector(".hamburgerMenuState");
const closeMenuIcon= document.querySelector(".closeMenuIcon");
const defaultMenuIcon = document.querySelector(".defaultMenuIcon");

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
