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
     select AVG(idade) from wisight.vitima;
`
console.log("executando a instrução SQL: \n" + instrucaoSql)

return database.executar(instrucaoSql)

}

module.exports = {
    obterRegioes,
    obterMediaIdade
  };