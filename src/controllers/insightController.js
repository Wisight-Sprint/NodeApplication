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

  const command = `ssh -i /usr/src/app/NodeApplication/wisight.pem ubuntu@54.173.162.222  'java -jar "${jarPath}" "${insightKey1}" "${insightKey2}" "${mensagem}"'`;

  //const oldCommand = `java -jar ${jarPath} "${insightKey1}" "${insightKey2}" "${mensagem}"`;


  console.log(`testeMensagem ${insightKey1} ${insightKey2} ${mensagem}`)
  exec(command, (stdout) => {

    try {
      res.json({
        success: true,
        message: "Arquivo .jar executado com sucesso",
        output: stdout,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erro ao executar o .jar"
      });
    }
  });
}

function getInsight(req, res) {
  let userInsightKeyServer = req.body.userInsightKeyServer;
  let whereParamServer = req.body.whereParamServer;
  let joinParamServer = req.body.joinParamServer;

  console.log(userInsightKeyServer, whereParamServer, joinParamServer);
  

  insightModel
    .getInsight(userInsightKeyServer, whereParamServer, joinParamServer)
    .then(function (response) {
      if (response.length > 0) {
        console.log();
        
        res.status(200).json(response);
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
