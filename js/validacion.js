function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const nombre    = document.getElementById("nombre");
  const apellido  = document.getElementById("apellido");
  const email     = document.getElementById("email");
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  const terminos  = document.getElementById("terminos");
  const regBtn    = document.getElementById("regBtn");

  regBtn.addEventListener("click", function () {
    document.getElementById("alert-success").classList.remove("show");
    document.getElementById("alert-danger").classList.remove("show");

    const campos = [nombre, apellido, email, password1, password2];
    const hayVacios = campos.some(c => c.value.trim() === "");

    const passLarga = password1.value.length >= 6;

    const passIguales = password1.value === password2.value;

    const aceptaTerminos = terminos.checked;

    const esValido = !hayVacios && passLarga && passIguales && aceptaTerminos;

    if (esValido) {
      showAlertSuccess();
    } else {
      showAlertError();
    }
  });
});