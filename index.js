const menu = document.querySelector('.hamburger');
const ul = document.querySelector(".ul");
const nav = document.querySelector("nav");
const black = document.querySelector(".black")
const grey = document.querySelector(".grey")

menu.addEventListener('click', e => {
    ul.classList.toggle("visible")
    black.classList.toggle("visible")
    grey.classList.toggle("visible")
})