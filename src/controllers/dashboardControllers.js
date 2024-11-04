const dashboardModel = require("../models/dashboardModel");

function obterRegioes(req, res){

    dashboardModel.obterRegioes()
    .then(function (response) {
        res.json(response);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao buscar a cidade ou estado! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });

  console.log(res);

}

function obterMediaIdade(req, res){

    dashboardModel.obterMediaIdade()
    .then(function (response) {
        res.json(response);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao buscar a media idade! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });

  console.log(res);

}


module.exports = {
    obterRegioes,
    obterMediaIdade
  };