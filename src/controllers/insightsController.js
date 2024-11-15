const { exec } = require("child_process");

const executeJar = (req, res) => {
  const depId = req.body.DEPARTAMENTO_USUARIO;

  if (!depId) {
    return res
      .status(400)
      .json({ success: false, message: "DEPARTAMENTO_USUARIO não fornecido" });
  }

  // Caminho para o arquivo .jar no servidor
  const jarPath = "C:\\Users\\samue\\Downloads\\insights.jar";

  // Comando para executar o .jar, passando o depId como argumento
  const command = `java -jar ${jarPath} ${depId}`;

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
};

module.exports = {
  executeJar,
};
