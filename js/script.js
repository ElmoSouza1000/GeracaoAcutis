const slideAtual = {
    gozosos: 0,
    luminosos: 0,
    dolorosos: 0,
    gloriosos: 0
};

const dias = new Map([
    ["gozosos", "Segunda e Sábado"],
    ["luminosos", "Quinta-feira"],
    ["dolorosos", "Terça e Sexta-feira"],
    ["gloriosos", "Quarta e Domingo"]
]);

const linksDosBotoes = new Map([
    ["gozosos", "/pages/rezar.html?misterio=gozosos"],
    ["luminosos", "/pages/rezar.html?misterio=luminosos"],
    ["dolorosos", "/pages/rezar.html?misterio=dolorosos"],
    ["gloriosos", "/pages/rezar.html?misterio=gloriosos"]
]);

const btnRezar = document.querySelector("#btnRezar");
const diaSemana = document.querySelector("#diaSemana");
const abas = document.querySelectorAll(".aba");
const grupos = document.querySelectorAll(".misterio-grupo");
const botoesMisterio = document.querySelectorAll(".misterio-btn");

btnRezar.href = linksDosBotoes.get("gozosos");

const mudarSlide = (grupo, direcao) => {
    const slides = document.querySelectorAll(`#${grupo} .misterio-slide`);
    slides[slideAtual[grupo]].classList.remove("ativo");
    slideAtual[grupo] = (slideAtual[grupo] + direcao + slides.length) % slides.length;
    slides[slideAtual[grupo]].classList.add("ativo");
};

botoesMisterio.forEach((botao) => {
    botao.addEventListener("click", () => {
        const grupo = botao.dataset.grupo;
        const direcao = Number(botao.dataset.direcao);
        mudarSlide(grupo, direcao);
    });
});

abas.forEach((aba) => {
    aba.addEventListener("click", () => {
        const grupo = aba.dataset.grupo;
        abas.forEach((item) => {
            item.classList.remove("ativa");
        });
        grupos.forEach((item) => {
            item.classList.remove("ativo");
        });
        aba.classList.add("ativa");
        document.querySelector(`#${grupo}`).classList.add("ativo");
        diaSemana.textContent = dias.get(grupo);
        btnRezar.href = linksDosBotoes.get(grupo);
    });
});