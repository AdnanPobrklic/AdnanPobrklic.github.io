const navbar = document.querySelector("nav")

const menu = document.getElementById("menu");
menu.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

