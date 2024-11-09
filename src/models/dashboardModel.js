const database = require("../database/config");


function obterRegioes(){

    let instrucaoSql = `
    select cidade, estado from wisight.cidade_estado;
    `
    console.log("executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterMediaIdade() {
     let instrucaoSql = `
    SELECT 
    idade as idadeIncidente,
    COUNT(*) AS numero_vitimas,
    (COUNT(*) / (SELECT COUNT(*) FROM wisight.vitima)) * 100 AS porcentagem
    FROM wisight.vitima
    GROUP BY idade
    ORDER BY numero_vitimas DESC
    LIMIT 1;
`
console.log("executando a instrução SQL: \n" + instrucaoSql)

return database.executar(instrucaoSql)

}

function obterCameraCorporal(){

    let instrucaoSql= `
    SELECT 
    ROUND((COUNT(CASE WHEN camera_corporal = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagem
    FROM wisight.relatorio;
    `

    console.log("executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterTranstorno(){

    let instrucaoSql = `
    SELECT 
    ROUND((COUNT(CASE WHEN problemas_mentais = TRUE THEN 1 END) / COUNT(*)) * 100, 2) AS porcentagem
    FROM wisight.relatorio;
    `

    console.log("executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterGenero(){

    let instrucaoSql = `
    SELECT 
    genero as generoIncidente,
    COUNT(*) AS numero_vitimas,
    (COUNT(*) / (SELECT COUNT(*) FROM wisight.vitima)) * 100 AS porcentagem
    FROM wisight.vitima
    GROUP BY genero
    ORDER BY numero_vitimas DESC
    LIMIT 1;
    `

    console.log("executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)


}

function obterArma(){

    let instrucaoSql = `
    SELECT armamento, COUNT(*) AS quantidade
    FROM wisight.vitima
    GROUP BY armamento;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterEtnia() {

    let instrucaoSql = `
    SELECT etnia, COUNT(*) AS quantidade
    FROM wisight.vitima
    GROUP BY etnia;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

function obterFuga() {

    let instrucaoSql = `
    SELECT fuga, COUNT(*) AS quantidade
    FROM wisight.relatorio
    GROUP BY fuga;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql)

    return database.executar(instrucaoSql)

}

module.exports = {
    obterRegioes,
    obterMediaIdade,
    obterCameraCorporal,
    obterTranstorno,
    obterGenero,
    obterArma,
    obterEtnia,
    obterFuga
};