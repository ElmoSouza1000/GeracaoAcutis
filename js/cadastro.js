const formulario = document.querySelector("#formCadastro");
const senha = document.querySelector("#cadSenha");
const confirmarSenha = document.querySelector("#cadConfirmarSenha");
const mensagemErro = document.querySelector("#erro");
btnCadastrar.addEventListener("click", (event) => {
    console.log("Clique detectado");
    event.preventDefault();
    if (!formulario.checkValidity()) {
        console.log("Formulário inválido");
        formulario.reportValidity();
        return;
    }

    if (senha.value !== confirmarSenha.value) {
        console.log("Senhas diferentes");
        mensagemErro.textContent = "As senhas não coincidem!";
        return;
    }

    console.log("Tudo certo");
    window.location.href = "../perfil.html";
});