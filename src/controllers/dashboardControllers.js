const dashboardModel = require("../models/dashboardModel");

function obterRegioes(req, res) {

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

function obterMediaIdade(req, res) {

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

function obterCameraCorporal(req, res) {

  dashboardModel.obterCameraCorporal()
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

function obterTranstorno(req, res) {

  dashboardModel.obterTranstorno()
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

function obterGenero(req, res) {

  dashboardModel.obterGenero()
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

function obterArma(req, res) {

  dashboardModel.obterArma()
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

function obterEtnia(req, res) {

  dashboardModel.obterEtnia()
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

function obterFuga(req, res) {

  dashboardModel.obterFuga()
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
  obterMediaIdade,
  obterCameraCorporal,
  obterTranstorno,
  obterGenero,
  obterArma,
  obterEtnia,
  obterFuga
};