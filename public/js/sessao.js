function validarSessao() {
  let bem_vindo = document.getElementById("bem_vindo");

  if (sessionStorage.NOME_USUARIO != null) bem_vindo.innerHTML = sessionStorage.NOME_USUARIO;
  else limparSessao();
}

function limparSessao() {
  sessionStorage.clear();
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Até logo!",
    background: "#FFF",
    color: "#000",
    showConfirmButton: false,
    timer: 1500,
  });
  setTimeout(() => {
    window.location = "../index.html";
  }, 2000);
}
