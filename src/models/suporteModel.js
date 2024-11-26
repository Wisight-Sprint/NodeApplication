const database = require("../database/config");

function buscarTodosChamadosAtivos() {
    console.log(
        "ACESSEI O SUPORTE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente."
    );
    let instrucaoSql = `
    SELECT * FROM wisight.chamados WHERE status_chamado != 'Finalizado';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTodosChamadosFinalizados() {
    console.log(
        "ACESSEI O SUPORTE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente."
    );
    let instrucaoSql = `
    SELECT * FROM wisight.chamados WHERE status_chamado == 'Finalizado';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function criarChamado(usuario_id, assunto, descricao, dt_criacao, status_chamado, respostaInicial, fk_departamento) {
    console.log(
        "ACESSEI O SUPORTE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente."
    );
    let instrucaoSql = `
    INSERT INTO wisight.chamados VALUES 
    (default, ${assunto}, ${descricao}, ${status_chamado}, ${respostaInicial}, ${dt_criacao}, ${usuario_id}, ${fk_departamento});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarChamado(chamado_id) {
    console.log(
        "ACESSEI O SUPORTE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente."
    );
    let instrucaoSql = `
    DELETE FROM wisight.chamados WHERE chamado_id = ${chamado_id};    
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTodosChamadosAtivos,
    buscarTodosChamadosFinalizados,
    criarChamado,
    deletarChamado
};