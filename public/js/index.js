window.onscroll = function () {
    var navbar = document.getElementById("navbar-normal");

    if (window.scrollY > 520) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    var navbar_responsiva = document.getElementById("navbar-responsiva");

    if (window.scrollY > 50) {
        navbar_responsiva.style = 'background-color: #021526';
    } else {
        navbar_responsiva.style = 'background-color: transparent';
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

function showMenu(){
    var menu = document.getElementById("menu");
    var menuButton = document.getElementById("menu-button");
    
    
    menuButton.addEventListener("click", function () {
        console.log("passou aqui2")
        if (menu.style.display == "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    });
}

