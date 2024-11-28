const dashboardModel = require("../models/dashboardModel");

function obterTodosOsDados(req, res){

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

}

module.exports = {
  obterTodosOsDados
};