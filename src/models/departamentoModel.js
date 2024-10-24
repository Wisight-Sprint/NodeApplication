const database = require("../database/config");

function buscarDepartamentoPorNome(nome) {
  console.log(
    "ACESSEI O DEPARTAMENTO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDepartamentoPorNome(): ",
    nome
  );
  let instrucaoSql = `
          SELECT departamento_id FROM wisight.departamento WHERE nome = '${nome}';
      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarDepartamentoPorNome,
};
