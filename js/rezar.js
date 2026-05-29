
// Pega o ?misterio= da URL
var misterio = new URLSearchParams(window.location.search).get('misterio');

// Títulos
var titulos = {
    gozosos: "Mistérios Gozosos",
    luminosos: "Mistérios Luminosos",
    dolorosos: "Mistérios Dolorosos",
    gloriosos: "Mistérios Gloriosos"
};

// Se achou o misterio na URL, mostra o título e o vídeo
if (misterio && titulos[misterio]) {
    document.getElementById('tituloMisterio').textContent = titulos[misterio];
    document.getElementById('video-' + misterio).style.display = 'block';
}

