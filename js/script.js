const bar = document.querySelector("#bar");
const Menu = document.querySelector("#menu");
const openMenu = function () {
    if (Menu.classList == "hide"){
        Menu.classList.add("show");
        Menu.classList.remove("hide");
    } else {
        Menu.classList.remove("show");
        Menu.classList.add("hide");
    }
}