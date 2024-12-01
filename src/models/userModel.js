const database = require("../database/config");
const nodemailer = require("nodemailer");

function autenticar(email, senha) {
  console.log(
    "function autenticar(email, senha): ",
    email,
    senha
  );
  let instrucaoSql = `
    SELECT u.*, d.nome as nomeDepartamento, c.estado, c.cidade FROM wisight.usuario u 
    JOIN departamento d on u.fk_departamento = d.departamento_id
    JOIN cidade_estado c on c.cidade_estado_id = d.fk_cidade_estado
    WHERE email = '${email}' AND senha = '${senha}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarUsuario(nome, email, senha, departamentoId, distintivo, permissao) {
  console.log(
    "function cadastrarUsuario(nome, email, senha, departamentoId, distintivo, permissao):",
    nome, email, senha, departamentoId, distintivo, permissao
  );
  let instrucaoSql = `
        INSERT INTO wisight.usuario VALUES (default, '${nome}', '${email}', '${distintivo}', '${permissao}', '${senha}', false, ${departamentoId});
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarUsuario(id, nome, email, permissao, distintivo, senha) {
  console.log(
    "function atualizarUsuario(id, nome, email, permissao, distintivo, senha):",
    id, nome, email, permissao, distintivo, senha
  );
  let instrucaoSql = `
        UPDATE usuario SET nome = '${nome}', email = '${email}', permissao = '${permissao}', numero = '${distintivo}', senha = '${senha}' WHERE usuario_id = ${id};
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

function buscarUsuarioPorDepartamento(nome_departamento) {
  console.log(
    "ACESSEI O userModel \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUsuarioPorDepartamento(): ",
  );
  let instrucaoSql = `
          SELECT d.nome AS departamento, u.* FROM usuario u
          JOIN wisight.departamento d
          ON d.departamento_id = u.fk_departamento
          WHERE d.nome = '${nome_departamento}';`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarExterno(idUsuario) {
  console.log(
    "function buscarExterno(idUsuario): " + idUsuario,
  );
  let instrucaoSql = `
          SELECT * FROM wisight.usuario WHERE usuario_id = '${idUsuario}';
      `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function removerTutorialMapa(usuario_id) {
  console.log(
    "function removerTutorialMapa(usuario_id): " + usuario_id
  );
  let instrucaoSql = `
        UPDATE wisight.usuario SET pularTutorial = true WHERE usuario_id = ${usuario_id};
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function enviarEmail(de, para, assunto, mensagem) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "",
        pass: "",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: de,
      to: para,
      subject: assunto,
      text: mensagem,
    };
   
    transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(info);
      }
    });
  });
}

module.exports = {
  autenticar,
  cadastrarUsuario,
  atualizarUsuario,
  deletarUsuario,
  buscarUsuarioPorDepartamento,
  buscarExterno,
  removerTutorialMapa,
  enviarEmail
};