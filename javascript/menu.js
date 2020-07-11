function addMenu(){
  header.innerHTML(`${menu}`);
}

const hamMenu = document.getElementById("ham-menu");
const menuToggler = document.getElementById("logo-nav-organizer");

function toggleMenu(){
  menuToggler.classList.toggle("toggle-menu");

}

hamMenu.addEventListener("click", toggleMenu);