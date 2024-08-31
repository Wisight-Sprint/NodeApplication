window.onscroll = function() {
    var navbar = document.getElementById("navbar");

    // Ponto de rolagem em que a mudança ocorrerá (50px, por exemplo)
    if (window.scrollY > 660) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

// Função do slider de contaúdo do index
let contador = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    proxImagem();
}, 2000)

function proxImagem{
    contador++;
    if(contador > 4){
        contador = 1;
    }

    document.getElementById("radio"+contador).checked = true;
}