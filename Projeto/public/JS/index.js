window.onscroll = function () {
    var navbar = document.getElementById("navbar-normal");

    if (window.scrollY > 520) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

// Função do slider de conteúdo do index
let contador = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    proxImagem();
}, 4000)

function proxImagem() {
    contador++;
    if (contador > 4) {
        contador = 1;
    }

    document.getElementById("radio" + contador).checked = true;
}


var menu = document.getElementById("menu");
var menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", function () {

    if (menu.style.display == "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});
