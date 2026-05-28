const slideAtual = {
    gozosos: 0,
    luminosos: 0,
    dolorosos: 0,
    gloriosos: 0
};

// Dias da semana de cada grupo
const dias = {
    gozosos: "Segunda e Sábado",
    luminosos: "Quinta-feira",
    dolorosos: "Terça e Sexta-feira",
    gloriosos: "Quarta e Domingo"
};

const linkDosBotoes = {
    gozosos: "/pages/rezar.html?misterio=gozosos",
    luminosos: "/pages/rezar.html?misterio=luminosos",
    dolorosos: "/pages/rezar.html?misterio=dolorosos",
    gloriosos: "/pages/rezar.html?misterio=gloriosos"
}

// Define o link do botão para o primeiro grupo (gozosos) por padrão
document.getElementById('btnRezar').href = linkDosBotoes['gozosos'];
// Chamada ao clicar < ou >
// grupo = qual grupo (ex: 'gozosos'), direcao = -1 (voltar) ou 1 (avançar)
function mudarSlide(grupo, direcao) {
    const slides = document.querySelectorAll('#' + grupo + ' .misterio-slide');

    // Remove ativo do slide atual
    slides[slideAtual[grupo]].classList.remove('ativo');

    // Calcula o próximo (volta ao início se passar do último)
    slideAtual[grupo] = (slideAtual[grupo] + direcao + slides.length) % slides.length;

    // Ativa o novo slide
    slides[slideAtual[grupo]].classList.add('ativo');
}

// Chamada ao clicar nas abas (Gozosos, Luminosos...)
document.querySelectorAll('.aba').forEach(function(aba) {
    aba.addEventListener('click', function() {
        const grupo = this.dataset.grupo;

        // Remove ativo de todas as abas e grupos
        document.querySelectorAll('.aba').forEach(function(a) { a.classList.remove('ativa'); });
        document.querySelectorAll('.misterio-grupo').forEach(function(g) { g.classList.remove('ativo'); });

        // Ativa a aba e o grupo clicado
        this.classList.add('ativa');
        document.getElementById(grupo).classList.add('ativo');

        // Atualiza o dia da semana
        document.getElementById('diaSemana').textContent = dias[grupo];

        document.getElementById('btnRezar').href = linkDosBotoes[grupo];
       
    });
});