function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


document.getElementById("regBtn").addEventListener("click", function(e) {
      e.preventDefault();
    
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass1 = document.getElementById("password1").value;
    let pass2 = document.getElementById("password2").value;
    let terminos = document.getElementById("terminos").checked;

    
    if (
        nombre === "" ||
        email === "" ||
        pass1 === "" ||
        pass2 === "" ||
        pass1.length < 6 ||
        pass1 !== pass2 ||
        !terminos
    ) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
});
