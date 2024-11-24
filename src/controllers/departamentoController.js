const departamentoModel = require("../models/departamentoModel");

function buscarDepartamentoPorNome(req, res) {
  let nome = req.query.departamentoServer;

  departamentoModel.buscarDepartamentoPorNome(nome)
    .then(function (response) {
      res.json(response);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao buscar o departamento_id! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });

  console.log(res);
}

module.exports = {
  buscarDepartamentoPorNome,
};
