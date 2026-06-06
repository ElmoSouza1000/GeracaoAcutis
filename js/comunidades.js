fetch("../json/comunidades.json")
    .then(response => response.json())
    .then(dados => {
        const comunidades = document.querySelector(".gridComunidades");
        const htmlGerado = dados.map(comunidade => {
            return `
                    <article class="cardComunidade">
                <img src="${comunidade.imagem}" alt="" class="imagemComunidade">
                <div class="infoComunidade">
                    <span class="tipoComunidade">${comunidade.tipo}</span>
                    <h3>${comunidade.nome}</h3>
                    <p>${comunidade.descricao}</p>
                    <a href="${comunidade.link}" class="btnEnviar">Saiba mais</a>
                </div>
            </article>
        `;
        });
        comunidades.innerHTML = htmlGerado.join('');
    })