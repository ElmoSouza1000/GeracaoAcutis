const btnCadastrar = document.querySelector("#btnCadastrar");
const senha = document.querySelector("#cadSenha");
const confirmarSenha = document.querySelector("#cadConfirmarSenha");
const mensagemErro = document.querySelector("#erro");

btnCadastrar.addEventListener("click", (event) =>{
    if(senha.value !== confirmarSenha.value){
        event.preventDefault();
        mensagemErro.textContent = "As senhas não coincidem!";
        return;
    } else{
    window.location.href = "../comunidades.html";
    }
})
