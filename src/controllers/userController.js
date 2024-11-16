const userModel = require("../models/userModel");

//CREATE
function cadastrarUsuario(req, res) {
  let nome = req.body.nomeServer;
  let email = req.body.emailServer;
  let senha = req.body.senhaServer;
  let departamentoId = req.body.departamentoServer;
  let distintivo = req.body.distintivoServer
  let permissao = req.body.permissaoServer
  console.log("Log dentro do controller: " + departamentoId);


  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (departamentoId == undefined) {
    res.status(400).send("O departamento está undefined!");
  } else if (distintivo == undefined) {
    res.status(400).send("O distintivo está undefined!");
  } else if (permissao == undefined) {
    res.status(400).send("O permissao está undefined!");
  } else {
    userModel
      .cadastrarUsuario(nome, email, senha, departamentoId, distintivo, permissao)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao realizar o cadastro", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
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
        nome_usuario: resultadoAutenticar[0].nome,
        departamento_usuario: resultadoAutenticar[0].fk_departamento,
        usuario_id: resultadoAutenticar[0].usuario_id,
        usuario_permissao: resultadoAutenticar[0].permissao,
        pularTutorial: resultadoAutenticar[0].pularTutorial,
        estado_usuario: resultadoAutenticar[0].estado_usuario
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
function atualizarUsuario(req, res) {
  let id = req.body.idServer;
  let nome = req.body.nomeServer;
  let permissao = req.body.permissaoServer;
  let email = req.body.emailServer;
  let senha = req.body.senhaServer;
  let distintivo = req.body.distintivoServer

  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (distintivo == undefined) {
    res.status(400).send("O distintivo está undefined!");
  } else if (permissao == undefined) {
    res.status(400).send("O permissao está undefined!");
  } else if (id == undefined) {
    res.status(400).send("Seu id está undefined!");
  } else {
    userModel
      .atualizarUsuario(id, nome, email, permissao, distintivo, senha)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao realizar a atualização do usuário", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
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

//GET / READ
function buscarUsuarioPorDepartamento(req, res) {
  let fk_departamento = req.params.departamento;
  userModel
    .buscarUsuarioPorDepartamento(fk_departamento)
    .then(function (resultadoBuscarUsuariosPorDepartamento) {
      console.log(`\nResultados encontrados: ${resultadoBuscarUsuariosPorDepartamento.length}`);
      res.json(resultadoBuscarUsuariosPorDepartamento); // Retorna todos os registros
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("\nHouve um erro ao buscar usuários! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function removerTutorialMapa(req, res) {
  let usuario_id = req.params.usuario_id;
  userModel
    .removerTutorialMapa(usuario_id)
    .then(function (removerTutorialMapa) {
      res.json(removerTutorialMapa); // Retorna todos os registros
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("\nHouve um erro ao mudar pularTutorial! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  autenticar,
  cadastrarUsuario,
  atualizarUsuario,
  deletarUsuario,
  buscarUsuarioPorDepartamento,
  removerTutorialMapa
};