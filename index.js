const menu = document.querySelector('.hamburger');
const ul = document.querySelector(".ul");
const nav = document.querySelector("nav");
const black = document.querySelector(".black")
const grey = document.querySelector(".grey")
const darkGrey = document.querySelector(".dark-grey")
const cross = document.querySelector(".cross")

menu.addEventListener('click', e => {
    ul.classList.toggle("visible")
    black.classList.toggle("visible")
    grey.classList.toggle("visible")
    darkGrey.classList.toggle("visible")
    menu.classList.add('hide')
    cross.classList.remove("hide")
})

cross.addEventListener("click", e => {
    ul.classList.toggle("visible")
    black.classList.toggle("visible")
    grey.classList.toggle("visible")
    darkGrey.classList.toggle("visible")
    cross.classList.add("hide")
    menu.classList.remove("hide")
})