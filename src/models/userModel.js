const database = require("../database/config");

function autenticar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): ",
    email,
    senha
  );
  let instrucaoSql = `
        SELECT usuario_id, nome, cargo, pularTutorial, fk_departamento FROM wisight.usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarUsuario(nome, email, senha, departamentoId, distintivo, cargo) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarUsuario():",
    nome,
    email,
    senha, cargo
  );
  let instrucaoSql = `
        INSERT INTO wisight.usuario VALUES (default, '${nome}', '${email}', '${distintivo}', '${cargo}', '${senha}', false, ${departamentoId});
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarUsuario(usuario_id, usuario_nome, usuario_email, usuario_cargo, usuario_distintivo, usuario_senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarUsuario():",
    usuario_id
  );
  let instrucaoSql = `
        UPDATE usuario SET nome = '${usuario_nome}', email = '${usuario_email}', cargo = '${usuario_cargo}', numero = '${usuario_distintivo}', senha = '${usuario_senha}' WHERE usuario_id = ${usuario_id};
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function deletarUsuario(usuario_id) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletarUsuario():",
    usuario_id
  );
  let instrucaoSql = `
        DELETE FROM usuario WHERE usuario_id = ('${usuario_id}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarUsuarioPorDepartamento(fk_departamento) {
  console.log(
    "ACESSEI O userModel \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUsuarioPorDepartamento(): ",
  );
  let instrucaoSql = `
          SELECT * FROM wisight.usuario WHERE fk_departamento = '${fk_departamento}';
      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function removerTutorialMapa(usuario_id) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function removerTutorialMapa(): "
  );
  let instrucaoSql = `
        UPDATE wisight.usuario SET pularTutorial = true WHERE usuario_id = ${usuario_id};
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  autenticar,
  cadastrarUsuario,
  atualizarUsuario,
  deletarUsuario,
  buscarUsuarioPorDepartamento,
  removerTutorialMapa
};