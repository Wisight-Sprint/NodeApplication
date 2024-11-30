const suporteModel = require("../models/suporteModel");

function buscarTodosChamados(req, res) {
    suporteModel
        .buscarTodosChamados()
        .then(function (response) {
            res.json(response);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao buscar os chamados! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });

    console.log(res);
}

function criarChamado(req, res) {
    let usuario_id = req.body.usuario_idServer;
    let assunto = req.body.assuntoServer;
    let descricao = req.body.descricaoServer;
    let fk_departamento = req.body.departamentoServer;

    suporteModel
        .criarChamado(usuario_id, assunto, descricao, fk_departamento)
        .then(function (response) {
            res.json(response);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao criar o chamado! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        })
}

function deletarChamado(req, res) {
    let chamado_id = req.body.chamado_idServer;

    suporteModel
        .deletarChamado(chamado_id)
        .then(function (response) {
            res.json(response);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao deletar o chamado! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        })
}

function responderChamado(req, res) {
    let chamado_id = req.body.chamado_idServer;
    let resposta = req.body.respostaServer;

    suporteModel
        .responderChamado(chamado_id, resposta)
        .then(function (response) {
            res.json(response);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao finalizar o chamado! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        })
}
module.exports = {
    buscarTodosChamados,
    criarChamado,
    deletarChamado,
    responderChamado
};
