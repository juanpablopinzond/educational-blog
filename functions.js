var imagen = document.querySelector(".image");



function showandhideText() {
    var showtext = document.querySelector(".text");
    if (showtext.style.display === "none") {
        showtext.style.display = "block"
    } else {
        showtext.style.display = "none";
    }
}

imagen.addEventListener("click", showandhideText);