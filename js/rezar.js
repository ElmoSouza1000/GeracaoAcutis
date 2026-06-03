
// Pega o ?misterio= da URL
var misterio = new URLSearchParams(window.location.search).get('misterio');

// Títulos
var titulos = new Map([
    ['gozosos', "Mistérios Gozosos"],
    ['luminosos', "Mistérios Luminosos"],
    ['dolorosos', "Mistérios Dolorosos"],
    ['gloriosos', "Mistérios Gloriosos"]
]);

// Se achou o misterio na URL, mostra o título e o vídeo
if (misterio && titulos.get(misterio)) {
    document.querySelector('#tituloMisterio').textContent = titulos.get(misterio);
    document.querySelector('#video-' + misterio).style.display = 'block';
}

