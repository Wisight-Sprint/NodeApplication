const database = require("../database/config");

function buscarTodosChamados() {
    console.log(
        "ACESSEI O SUPORTE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente."
    );
    let instrucaoSql = `
    SELECT u.email, d.nome, c.*, DATE_FORMAT(c.dt_criacao, '%d/%m/%Y') AS dt_criacao FROM wisight.chamados c 
    JOIN usuario u ON usuario_id = fk_usuario
    JOIN departamento d ON c.fk_departamento = d.departamento_id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function criarChamado(usuario_id, assunto, descricao, fk_departamento) {
    console.log(
        "ACESSEI O SUPORTE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente."
    );
    let instrucaoSql = `
    INSERT INTO wisight.chamados VALUES 
    (default, "${assunto}", "${descricao}", "Criado", null, now(), ${usuario_id}, ${fk_departamento});`;
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

function responderChamado(chamado_id, resposta) {
    console.log(
        "ACESSEI O SUPORTE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente."
    );
    let instrucaoSql = `
    UPDATE wisight.chamados SET status_chamado = "Finalizado", resposta = "${resposta}" WHERE chamado_id = ${chamado_id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTodosChamados,
    criarChamado,
    deletarChamado,
    responderChamado
};