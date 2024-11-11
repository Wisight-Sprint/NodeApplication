const apiMapaModel = require("../models/apiMapaModel");

function criarMapa(req, res) {

    apiMapaModel
        .criarMapa()
        .then(function (response) {
            res.json(response);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao criarMapa! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });

    console.log(res);
}

module.exports = {
    criarMapa
};
