//= require_tree .
const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", function() {
    if (window.scrollY > 180) {
        navbar.style.display = "flex";
    }
    else {
        navbar.style.display = "none";
    }
},false);
