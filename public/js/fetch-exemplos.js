// fetch cadastro
function cadastrarUsuario() {
    let email = "email@teste.com"
    let senha = "senhateste"

    //validações

    fetch("users/cadastrarUsuario", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(res => {
        console.log("Response .then cadastrarUsuario: " + res)

        if (res.ok) {
            //cadastro realizado, loading ou mensagem de êxito
        } else {
            res.text().then(texto => {
                throw "Houve um erro ao tentar realizar o cadastro" + texto;
            });
        }
    })
        .catch((res) => {
            console.log("#ERRO, cadastrarUsuario caiu no .catch: " + res);
        });
}

// fetch autenticar
function autenticar() {

    let emailFuncionario = "email@teste.com";
    let senha = "senhateste";

    fetch("/users/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailFuncionario,
            senhaServer: senha
        })

    }).then(res => {
        console.log("Response .then autenticar: " + res)

        if (res.ok) {
            res.json().then(json => {
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;

                setTimeout(() => {
                    window.location = "caminhoPaginaLogado";
                }, 1000); // apenas para exibir o loading

            });

        } else {
            res.text().then(texto => {
                throw "Houve um erro ao autenticar" + texto;
            });
        }

    }).catch((res) => {
        console.log("#ERRO, autenticar caiu no .catch: " + res);
    });

    return false;
}

// fetch atualizar senha
const ID_USUARIO = Number(sessionStorage.getItem("ID_USUARIO"));

function atualizarSenhaDoUsuario() {

    let novaSenha = "teste";

    fetch("users/atualizarSenha", {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: ID_USUARIO,
            novaSenhaServer: novaSenha
        })
    }).then(res => {
        console.log("Response .then atualizarSenhaDoUsuario: " + res)
        if (res.ok) {
            //senha atualizada, loading ou mensagem de êxito
        } else {
            res.text().then(texto => {
                throw "Houve um erro ao atualizar a senha do usuário" + texto;
            });
        }
    }).catch((res) => {
        console.log("#ERRO, atualizarSenhaDoUsuario caiu no .catch: " + res);
    });

}

// fetch deletar usuario
//const ID_USUARIO = Number(sessionStorage.getItem("ID_USUARIO"));
function deletarUsuario() {

    fetch("users/deletarUsuario", {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: ID_USUARIO
        })
    }).then(res => {
        console.log("Response .then deletarUsuario: " + res)
        if (res.ok) {
            //usuario deletado, loading ou mensagem de êxito
        } else {
            res.text().then(texto => {
                throw "Houve um erro ao deletar o usuário" + texto;
            });
        }
    }).catch((res) => {
        console.log("#ERRO, deletarUsuario caiu no .catch: " + res);
    });
}



