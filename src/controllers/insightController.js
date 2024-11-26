const insightModel = require("../models/insightModel");
const { exec } = require("child_process");

function executeJar(req, res) {
  const insightKey = req.body.insightKeyServer;
  const mensagem = req.body.mensagemServer;

  if (insightKey == "" || mensagem == "") {
    return res
      .status(400)
      .json({ success: false, message: "Valor não fornecido no body" });
  }

  const jarPath = "home/ubuntu/AI-JavaApplication-1.0-SNAPSHOT-jar-with-dependencies.jar";
  // Caminho para o arquivo .jar no servidor

  //   const command = `sudo docker run --name AI-container \
  //   -e DBHOST=23.23.14.86 \
  //   -e DBPORT=3306 \
  //   -e DBNAME=wisight \
  //   -e DBURL=jdbc:mysql://23.23.14.86:3306/wisight \
  //   -e DBDRIVER=com.mysql.cj.jdbc.Driver \
  //   -e DBUSER=root \
  //   -e DBPASSWORD=wisight123 \
  //   -e INSIGHT_KEY=${valueBodyServer} \
  //   -e INSIGHT_MESSAGE=${mensagem} \
  //   imagem-ia && sudo docker rm AI-container
  // `

  const command = `
  if [ $(sudo docker ps -aq -f name=AI-container) ]; then 
    sudo docker rm -f AI-container; 
  fi; 
  sudo docker run --name AI-container \
  -e DBHOST=3.84.76.96 \
  -e DBPORT=3306 \
  -e DBNAME=wisight \
  -e DBURL=jdbc:mysql://3.84.76.96:3306/wisight \
  -e DBDRIVER=com.mysql.cj.jdbc.Driver \
  -e DBUSER=root \
  -e DBPASSWORD=wisight123 \
  -e INSIGHT_KEY=${insightKey} \
  -e INSIGHT_MESSAGE=${mensagem} \
  imagem-ia && sudo docker rm AI-container
`;


  // LOCAL = const jarPath = "C:\\Users\\samue\\Desktop\\SPTech-GitHub\\AI-JavaApplication\\target\\AI-JavaApplication-1.0-SNAPSHOT-jar-with-dependencies.jar";
  // LOCAL = const command = `java -jar ${jarPath} ${valueBodyServer}`;

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
