const PATHNAME = window.location.href;

function myFunction() {
    var navbar = document.getElementById("navbar");
    
    if (navbar.className === "nav-transition") {
        navbar.className += " menu";
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
        document.getElementById("threeline-icon").style.color = "#155263";
    } else {
        navbar.className = "nav-transition";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";
        document.getElementById("threeline-icon").style.textDecoration = "none";
        document.getElementById("threeline-icon").style.color = "#155263";
    }
}