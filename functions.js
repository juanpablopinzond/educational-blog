var imagen = document.querySelector(".image");
var showtext = document.querySelector(".text");

function showandhideText() {
    if (showtext.style.display === "none") {
        showtext.style.display = "block"
    } else {
        showtext.style.display = "none";
    }
}

imagen.addEventListener("click", showandhideText);

var imagen2 = document.querySelector(".image2");
var showtext2 = document.querySelector(".text2");

function showandhideText2() {
    if (showtext2.style.display === "none") {
        showtext2.style.display = "block"
    } else {
        showtext2.style.display = "none";
    }
}

imagen2.addEventListener("click", showandhideText2);