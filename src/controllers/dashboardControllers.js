const dashboardModel = require("../models/dashboardModel");

function obterTodosOsDados(req, res) {
  let select = req.params.tipoLocal;

  if (select == "Departamento") {
    dashboardModel.obterTodosOsDados()
      .then(function (response) {
        res.json(response);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao buscar as vitimas! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  } else if (select == "Cidade") {
    dashboardModel.obterTodosOsDadosCidade()
      .then(function (response) {
        res.json(response);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao buscar as vitimas! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  } else {
    dashboardModel.obterTodosOsDadosEstado()
      .then(function (response) {
        res.json(response);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao buscar as vitimas! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }

}

module.exports = {
  obterTodosOsDados
};