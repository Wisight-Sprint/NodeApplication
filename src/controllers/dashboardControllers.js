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

  const localizacaoUsuario = req.query.cidadeServerUsuario
  const tipoLocalizacao = req.query.tipoLocalizacaoServer

  dashboardModel.obterMediaIdade(localizacaoUsuario, tipoLocalizacao)
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

  const localizacaoUsuario = req.query.cidadeServerUsuario
  const tipoLocalizacao = req.query.tipoLocalizacaoServer
  dashboardModel.obterCameraCorporal(localizacaoUsuario, tipoLocalizacao)
    .then(function (response) {
      res.json(response);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao buscar a camera corporal! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });

  console.log(res);

}

function obterTranstorno(req, res) {

  const localizacaoUsuario = req.query.cidadeServerUsuario
  const tipoLocalizacao = req.query.tipoLocalizacaoServer
  dashboardModel.obterTranstorno(localizacaoUsuario, tipoLocalizacao)
    .then(function (response) {
      res.json(response);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao buscar os transtornos! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });

  console.log(res);

}

function obterGenero(req, res) {

  const localizacaoUsuario = req.query.cidadeServerUsuario
  const tipoLocalizacao = req.query.tipoLocalizacaoServer
  dashboardModel.obterGenero(localizacaoUsuario, tipoLocalizacao)
    .then(function (response) {
      res.json(response);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao buscar o genero! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });

  console.log(res);

}

function obterArma(req, res) {

  const localizacaoUsuario = req.query.cidadeServerUsuario
  const tipoLocalizacao = req.query.tipoLocalizacaoServer
  dashboardModel.obterArma(localizacaoUsuario, tipoLocalizacao)
    .then(function (response) {
      res.json(response);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao buscar as armas! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });

  console.log(res);

}

function obterEtnia(req, res) {

  const localizacaoUsuario = req.query.cidadeServerUsuario
  const tipoLocalizacao = req.query.tipoLocalizacaoServer
  dashboardModel.obterEtnia(localizacaoUsuario, tipoLocalizacao)
    .then(function (response) {
      res.json(response);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao buscar as etnias! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });

  console.log(res);

}

function obterFuga(req, res) {

  const localizacaoUsuario = req.query.cidadeServerUsuario
  const tipoLocalizacao = req.query.tipoLocalizacaoServer
  dashboardModel.obterFuga(localizacaoUsuario, tipoLocalizacao)
    .then(function (response) {
      res.json(response);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao buscar as fugas! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });

  console.log(res);

}

function obterVitima(req, res) {

  const localizacaoUsuario = req.query.cidadeServerUsuario
  const tipoLocalizacao = req.query.tipoLocalizacaoServer
  dashboardModel.obterVitima(localizacaoUsuario, tipoLocalizacao)
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

module.exports = {
  obterRegioes,
  obterMediaIdade,
  obterCameraCorporal,
  obterTranstorno,
  obterGenero,
  obterArma,
  obterEtnia,
  obterFuga,
  obterVitima
};