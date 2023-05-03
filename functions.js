var imagen = document.getElementById("image");
var text1 = document.getElementById("text");
var imagen2 = document.getElementById("image2");
var text2 = document.getElementById("text2");


function showandhideText(text) {
    if (text.style.display === "none") {
        text.style.display = "block"
    } else {
        text.style.display = "none";
    }
}

imagen.addEventListener("click", function() { showandhideText(text1); });
imagen2.addEventListener("click", function() { showandhideText(text2); });