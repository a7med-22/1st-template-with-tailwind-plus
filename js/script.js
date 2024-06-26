let button = document.querySelector("#btn-menu");
let menu = document.querySelector("#mobile-menu");

button.addEventListener("click", () => {
    menu.classList.toggle("hidden")
});