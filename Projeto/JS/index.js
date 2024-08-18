window.onscroll = function() {
    var navbar = document.getElementById("navbar");

    // Ponto de rolagem em que a mudança ocorrerá (50px, por exemplo)
    if (window.scrollY > 660) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};