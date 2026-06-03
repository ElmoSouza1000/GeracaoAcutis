var misterio = new URLSearchParams(window.location.search).get('misterio');

var titulos = new Map([
    ['gozosos', "Mistérios Gozosos"],
    ['luminosos', "Mistérios Luminosos"],
    ['dolorosos', "Mistérios Dolorosos"],
    ['gloriosos', "Mistérios Gloriosos"]
]);

if (misterio && titulos.get(misterio)) {
    document.querySelector('#tituloMisterio').textContent = titulos.get(misterio);
    document.querySelector('#video-' + misterio).style.display = 'block';
}

