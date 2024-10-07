const userModel = require("../models/userModel");

//CREATE
function cadastrarUsuario(req, res) {
  let nome = req.body.nomeServer;
  let email = req.body.emailServer;
  let senha = req.body.senhaServer;
  let departamentoId = req.body.departamentoIdServer;

  userModel
    .cadastrarUsuario(nome, email, senha, departamentoId)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("\nHouve um erro ao realizar o cadastro", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

//GET / READ
function autenticar(req, res) {
  let email = req.body.emailServer;
  let senha = req.body.senhaServer;

  userModel
    .autenticar(email, senha)
    .then(function (resultadoAutenticar) {
      console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
      console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);
      res.json({
        usuario_id: resultadoAutenticar[0].usuario_id,
        nome_usuario: resultadoAutenticar[0].nome,
        email_usuario: resultadoAutenticar[0].email,
        departamento_usuario: resultadoAutenticar[0].departamento,
      });
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o login! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

//UPDATE
function atualizarSenha(req, res) {
  let novaSenha = req.body.novaSenhaServer;
  let usuario_id = req.body.usuario_idServer;

  userModel
    .atualizarSenha(novaSenha, usuario_id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao atualizar a senha do usuário ! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

// DELETE
function deletarUsuario(req, res) {
  let usuario_deletar = req.body.usuario_idServer;

  userModel
    .deletarUsuario(usuario_deletar)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("\nHouve um erro ao deletar o usuário", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  autenticar,
  cadastrarUsuario,
  atualizarSenha,
  deletarUsuario,
};
