const insightModel = require("../models/insightModel");
const { exec } = require("child_process");

const executeJar = (req, res) => {
  const bodyServerName = Object.keys(req.body)[0];
  const valueBodyServer = req.body[bodyServerName];

  if (!valueBodyServer) {
    return res
      .status(400)
      .json({ success: false, message: "Valor não fornecido no body" });
  }

  // const jarPath = "home/ubuntu/AI-JavaApplication-1.0-SNAPSHOT-jar-with-dependencies.jar";
  // Caminho para o arquivo .jar no servidor
  const jarPath = "C:\\Users\\samue\\Desktop\\SPTech-GitHub\\AI-JavaApplication\\target\\AI-JavaApplication-1.0-SNAPSHOT-jar-with-dependencies.jar";

  // Comando para executar o .jar, passando o depId como argumento
  const command = `java -jar ${jarPath} ${valueBodyServer}`;

  // Executa o comando no sistema operacional
  exec(command, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({
        success: false,
        message: "Erro ao executar o .jar"
      });
    }
    if (stderr) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Erro no .jar"
        });
    }

    res.json({
      success: true,
      message: "Arquivo .jar executado com sucesso",
      output: stdout,
    });
    console.log("Arquivo .jar executado com sucesso", stdout)
  });
}

function getInsight(req, res) {
  let userInsightKeyServer = req.body.userInsightKeyServer;
  let whereParamServer = req.body.whereParamServer;
  let joinParamServer = req.body.joinParamServer;

  insightModel
    .getInsight(userInsightKeyServer, whereParamServer, joinParamServer)
    .then(function (response) {
      if (response.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!")
      }
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  executeJar,
  getInsight
};
