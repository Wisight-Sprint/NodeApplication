const insightModel = require("../models/insightModel");
const { exec } = require("child_process");

function executeJar(req, res) {
  const insightKey1 = req.body.insightKeyServer1;
  const insightKey2 = req.body.insightKeyServer2;
  const mensagem = req.body.mensagemServer;

  if (insightKey1 == "" || insightKey2 == "" || mensagem == "") {
    return res
      .status(400)
      .json({ success: false, message: "Valor não fornecido no body" });
  }

  const jarPath = "home/ubuntu/AI-JavaApplication-1.0-SNAPSHOT-jar-with-dependencies.jar";

  // LOCAL = const jarPath = "C:\\Users\\samue\\Desktop\\SPTech-GitHub\\AI-JavaApplication\\target\\AI-JavaApplication-1.0-SNAPSHOT-jar-with-dependencies.jar";
  const command = `java -jar ${jarPath} ${insightKey1} ${insightKey2} ${mensagem}`;

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
