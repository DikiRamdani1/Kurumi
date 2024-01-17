const Box1 = document.getElementById("box1")
const Box2 = document.getElementById("box2")

window.addEventListener("scroll", function() {
    const value = window.scrollY

    Box1.style.left = value * 0.082 + "%"
    Box2.style.left = value * -0.082 + "%"
})

const Navbar = document.getElementById("navbar")
window.onscroll = () => {
    Navbar.classList.toggle("sticky", window.scrollY > 625)
}

const CardFoto1 = document.getElementById("card-foto1")
const CardFoto2 = document.getElementById("card-foto2")
const CardFoto3 = document.getElementById("card-foto3")
const CardFoto4 = document.getElementById("card-foto4")
const CardFoto5 = document.getElementById("card-foto5")
const Image1 = document.getElementById("img1")
const Image2 = document.getElementById("img2")
const Image3 = document.getElementById("img3")
const Image4 = document.getElementById("img4")
const Image5 = document.getElementById("img5")
const foto1 = document.getElementById("foto1")
const foto2 = document.getElementById("foto2")
const layarWidth = window.innerWidth

Image1.addEventListener("click", function() {
    CardFoto1.style.width = "100%"
    CardFoto1.style.height = "100%"
    CardFoto1.style.top = "0"
    CardFoto1.style.left = "0"
})

CardFoto1.addEventListener("click", function() {
    CardFoto1.style.width = "0"
    CardFoto1.style.height = "0"
    CardFoto1.style.top = "50%"
    CardFoto1.style.left = "50%"
})

Image2.addEventListener("click", function() {
    CardFoto2.style.width = "100%"
    CardFoto2.style.height = "100%"
    CardFoto2.style.top = "0"
    CardFoto2.style.left = "0"
})

CardFoto2.addEventListener("click", function() {
    CardFoto2.style.width = "0"
    CardFoto2.style.height = "0"
    CardFoto2.style.top = "50%"
    CardFoto2.style.left = "50%"
})

Image3.addEventListener("click", function() {
    CardFoto3.style.width = "100%"
    CardFoto3.style.height = "100%"
    CardFoto3.style.top = "0"
    CardFoto3.style.left = "0"
})

CardFoto3.addEventListener("click", function() {
    CardFoto3.style.width = "0"
    CardFoto3.style.height = "0"
    CardFoto3.style.top = "50%"
    CardFoto3.style.left = "50%"
})

Image4.addEventListener("click", function() {
    CardFoto4.style.width = "100%"
    CardFoto4.style.height = "100%"
    CardFoto4.style.top = "0"
    CardFoto4.style.left = "0"
})

CardFoto4.addEventListener("click", function() {
    CardFoto4.style.width = "0"
    CardFoto4.style.height = "0"
    CardFoto4.style.top = "50%"
    CardFoto4.style.left = "50%"
})

Image5.addEventListener("click", function() {
    CardFoto5.style.width = "100%"
    CardFoto5.style.height = "100%"
    CardFoto5.style.top = "0"
    CardFoto5.style.left = "0"
})

CardFoto5.addEventListener("click", function() {
    CardFoto5.style.width = "0"
    CardFoto5.style.height = "0"
    CardFoto5.style.top = "50%"
    CardFoto5.style.left = "50%"
})

const Sidebar = document.getElementById("sidebar")
const sideNav = document.getElementById("side-nav")

Sidebar.addEventListener("click", () => {
    sideNav.style.height = "100%"
})

sideNav.addEventListener("click", () => {
    sideNav.style.height = "0"
})

const cardTeksAbout = document.getElementById("card-teks-about")
const btnLearnMore = document.getElementById("btn-learn-more")

btnLearnMore.addEventListener("click", () => {
    cardTeksAbout.style.height = "100%"
})

cardTeksAbout.addEventListener("click", () => {
    cardTeksAbout.style.height = "0"
})
