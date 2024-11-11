const database = require("../database/config");

function criarMapa() {
    console.log(
        "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): "
    );
    let instrucaoSql = `
    SELECT c.estado,
    COUNT(r.relatorio_id) AS total_relatorios,
    ROUND((COUNT(CASE WHEN camera_corporal = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemCamera,
    ROUND((COUNT(CASE WHEN problemas_mentais = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagemMental
    FROM wisight.relatorio r
    JOIN wisight.departamento d ON r.fk_departamento = d.departamento_id
    JOIN wisight.cidade_estado c ON d.fk_cidade_estado = c.cidade_estado_id
    GROUP BY c.estado;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    criarMapa
}