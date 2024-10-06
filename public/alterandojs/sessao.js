function validarSessao() {
  let bem_vindo = document.getElementById("bem_vindo");

  if (sessionStorage.NOME_USUARIO != null) {
    bem_vindo.innerHTML = sessionStorage.NOME_USUARIO;
  }
}

function limparSessao() {
  sessionStorage.clear();
  window.location = "../login.html";
}
