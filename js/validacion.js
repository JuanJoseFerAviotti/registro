//verificar si los campos estan vacios
function validarForm() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let terminos = document.getElementById("terminos").checked;
    let error = false;
    if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "" || password1!==password2 || !terminos) {
        error = true;
    }
    if (error) {
        showAlertError();
        return false;
    } else {
        showAlertSuccess();
        return true;
    }
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


// Agregar el evento al botón de registro
let miBoton = document.getElementById("regBtn");
miBoton.addEventListener('click', function() {
  validarForm();
});
