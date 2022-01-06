//CRIAR FUNÇÃO PARA O BOTÃO PEGANDO O addEventListener
document.getElementById('usuario').focus();
document.getElementById("entrar").addEventListener('click', function () {
    let login = document.getElementById("usuario");
    let senha = document.getElementById("senha");

    if (login.value == "admin" && senha.value == "1234") {
        document.getElementById("mensagem").hidden = false;
        document.getElementById("mensagem").innerText = "logado com sucesso!!";
        sessionStorage.setItem("nome", login.value);
        sessionStorage.setItem("senha", senha.value);
        window.location.replace("logado.html");
    }
    else {
        alert('Usuario invalido!!');
        window.location.reload();
        sessionStorage.removeItem("nome");
        sessionStorage.clear();

    }
})