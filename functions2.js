let buttom = document.getElementById("buttom");
let form = document.getElementById("myForm");

buttom.addEventListener("click", function(event) {
    event.preventDefault();
    if (!form.name.value || !form.email.value || !form.comment.value) {
        alert("Porfavor ingresa los datos requeridos");
    } else {
        form.submit(alert("Gracias por tus Comentarios"));
    }
});