const menu = document.querySelector(".nav-hamburger");
const navBarItems = document.getElementsByClassName('nav-items')[0]

menu.onclick = () =>{
    navBarItems.classList.toggle("active");
}