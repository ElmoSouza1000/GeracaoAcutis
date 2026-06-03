const slideAtual = {
    gozosos:   0,
    luminosos: 0,
    dolorosos: 0,
    gloriosos: 0
};

const dias = new Map([
    ['gozosos',   'Segunda e Sábado'],
    ['luminosos', 'Quinta-feira'],
    ['dolorosos', 'Terça e Sexta-feira'],
    ['gloriosos', 'Quarta e Domingo']
]);

const linkDosBotoes = new Map([
    ['gozosos',   '/pages/rezar.html?misterio=gozosos'],
    ['luminosos', '/pages/rezar.html?misterio=luminosos'],
    ['dolorosos', '/pages/rezar.html?misterio=dolorosos'],
    ['gloriosos', '/pages/rezar.html?misterio=gloriosos']
]);

document.querySelector('#btnRezar').href = linkDosBotoes.get('gozosos');

function mudarSlide(grupo, direcao) {
    const slides = document.querySelectorAll('#' + grupo + ' .misterio-slide');
    slides[slideAtual[grupo]].classList.remove('ativo');
    slideAtual[grupo] = (slideAtual[grupo] + direcao + slides.length) % slides.length;
    slides[slideAtual[grupo]].classList.add('ativo');
}

Array.from(document.querySelectorAll('.aba')).map(function(aba) {
    aba.addEventListener('click', function() {
        const grupo = this.dataset.grupo;

        Array.from(document.querySelectorAll('.aba')).map(function(a) {
            a.classList.remove('ativa');
        });

       
        Array.from(document.querySelectorAll('.misterio-grupo')).map(function(g) {
            g.classList.remove('ativo');
        });

        this.classList.add('ativa');
        document.querySelector('#' + grupo).classList.add('ativo');

        document.querySelector('#diaSemana').textContent = dias.get(grupo);
        document.querySelector('#btnRezar').href = linkDosBotoes.get(grupo);
    });
});