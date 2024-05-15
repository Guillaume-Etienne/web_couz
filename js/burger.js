// burger / correction bug burger
// la galerie : https://www.cssscript.com/mobile-compatible-responsive-gallery-hesgallery/


// ======================  burger : ===================
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
// var openBtn = document.getElementsByClassName("burger-icon")
var closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener('click', function(event){
  event.preventDefault //pourquoi il ne marche pas lui ?
  openNav()  
})

// openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

// ======================  Correction bug burger (le menu qui ne disparait pas) ===================
let menuElements = document.getElementsByClassName("menuLinks");

for (var i=0; i < menuElements.length; i++) {
  menuElements[i].onclick = function(){      
    sidenav.classList.remove("active")
  }
}