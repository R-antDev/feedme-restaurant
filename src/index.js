import "./style.css";
import homeContent from "./home";
import menuContent from "./menu";
import contactContent from "./contact";

const content = document.getElementById("content")
const homeButton = document.getElementById("home-button")
const menuButton = document.getElementById("menu-button")
const contactButton = document.getElementById("contact-button")


content.appendChild(homeContent())



homeButton.addEventListener('click', () => {
    content.innerHTML = ""
    contactButton.classList.remove('font-bold')
    menuButton.classList.remove('font-bold')
    homeButton.classList.add('font-bold')
    content.appendChild(homeContent())
})

menuButton.addEventListener('click', () => {
    console.log('menu clicked')
    content.innerHTML = ""
    homeButton.classList.remove('font-bold')
    contactButton.classList.remove('font-bold')
    menuButton.classList.add('font-bold')
    content.appendChild(menuContent())
})

contactButton.addEventListener('click', () => {
    content.innerHTML = ""
    homeButton.classList.remove('font-bold')
    menuButton.classList.remove('font-bold')
    contactButton.classList.add('font-bold')
    content.appendChild(contactContent())
})

const exploreMenuButton = document.querySelector('#explore-menu-button')
exploreMenuButton.addEventListener('click', () => {
    content.innerHTML = ""
    content.appendChild(menuContent())
})