const suporteModel = require("../models/suporteModel");

function buscarTodosChamadosAtivos(req, res) {
    suporteModel
        .buscarTodosChamadosAtivos()
        .then(function (response) {
            res.json(response);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao buscar os chamados ativos! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });

    console.log(res);
}

function buscarTodosChamadosFinalizados(req, res) {

    suporteModel
        .buscarTodosChamadosFinalizados()
        .then(function (response) {
            res.json(response);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao buscar os chamados finalizados! Erro: ",
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
    let dt_criacao = req.body.dt_criacaoServer;
    let status_chamado = req.body.status_chamadoServer;
    let respostaInicial = req.body.respostaInicialServer;
    let fk_departamento = req.body.fk_departamentoServer;

    suporteModel
        .criarChamado(usuario_id, assunto, descricao, dt_criacao, status_chamado, respostaInicial, fk_departamento)
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

function atualizarChamado(req, res) {
    let chamado_id = req.body.chamado_idServer;
    let assunto = req.body.assuntoServer;
    let descricao = req.body.descricaoServer;

    suporteModel
        .atualizarChamado(chamado_id, assunto, descricao)
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
module.exports = {
    buscarTodosChamadosAtivos,
    buscarTodosChamadosFinalizados,
    criarChamado,
    deletarChamado,

};
