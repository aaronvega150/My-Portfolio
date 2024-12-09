window.onload = function(){
window.scrollTo(0,0);}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".three-line-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
}