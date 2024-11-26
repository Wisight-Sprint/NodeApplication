const database = require("../database/config");

function criarRelatorio(data, fuga, camera, departamento) {
    console.log(
        "criarRelatorio(data, fuga, camera, departamento): " + data, fuga, camera, departamento
    );
    let instrucaoSql = `
    INSERT INTO wisight.relatorio VALUES
    (default, '${data}', '${fuga}', ${camera}, ${departamento});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRelatorio() {
    console.log(
        "buscarRelatorio(): "
    );
    let instrucaoSql = `
    SELECT relatorio_id FROM relatorio ORDER BY relatorio_id DESC LIMIT 1;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function criarVitima(vitimas, fk) {
    console.log(
        "criarVitima(vitimas): " + vitimas
    );
    for (let i = 0; i < vitimas.length; i++) {
        let instrucaoSql = `
        INSERT INTO vitima VALUES (default, ${vitimas[i].idadeValue}, '${vitimas[i].etniaValue}', '${vitimas[i].generoValue}', '${vitimas[i].armamentoValue}', ${vitimas[i].mentalidadeValue}, ${fk})
        `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        database.executar(instrucaoSql);
    }
}

module.exports = {
    criarRelatorio,
    buscarRelatorio,
    criarVitima
}