const userModel = require("../models/userModel");

//CREATE
function cadastrarUsuario(req, res) {
  let nome = req.body.nomeServer;
  let email = req.body.emailServer;
  let senha = req.body.senhaServer;
  let departamentoId = req.body.departamentoServer;
  let distintivo = req.body.distintivoServer
  let cargo = req.body.cargoServer
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
  } else if (cargo == undefined) {
    res.status(400).send("O cargo está undefined!");
  } else {
    userModel
      .cadastrarUsuario(nome, email, senha, departamentoId, distintivo, cargo)
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
        usuario_cargo: resultadoAutenticar[0].cargo
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

//UPDATE
function atualizarUsuario(req, res) {
  let id = req.body.idServer;
  let nome = req.body.nomeServer;
  let cargo = req.body.cargoServer;
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
  } else if (cargo == undefined) {
    res.status(400).send("O cargo está undefined!");
  } else if (id == undefined) {
    res.status(400).send("Seu id está undefined!");
  }else {
    userModel
      .atualizarUsuario(id, nome, email, cargo, distintivo, senha)
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

module.exports = {
  autenticar,
  cadastrarUsuario,
  atualizarSenha,
  atualizarUsuario,
  deletarUsuario,
  buscarUsuarioPorDepartamento
};