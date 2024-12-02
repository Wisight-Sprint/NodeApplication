const database = require("../database/config");

function getInsight(userInsightKey, whereParam, joinParam) {
    console.log(
        "ACESSEI O INSIGHTS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente."
    );
    let instrucaoSql = `
    SELECT i.texto_insight FROM wisight.insight i 
    ${joinParam}
    WHERE ${whereParam} = ${userInsightKey} ORDER BY i.insight_id DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    getInsight
};