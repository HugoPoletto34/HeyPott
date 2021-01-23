const API_KEY = 'd0eb897d30c94f16af54bddb4448769b';

function exibeFontes() {
    let dados = JSON.parse(this.responseText);
    for (i = 0; i < 10; i++) {
        let noticia = dados.articles[i];
        let data = new Date(noticia.publishedAt);

        telaFonte.innerHTML += `
        <div class="box-noticia">
        <img src="${noticia.urlToImage}" alt="">
        <p><span class="titulo">${noticia.title}</span></p>
        <p><span class="creditos">${data.toLocaleDateString()} - 
            ${noticia.source.name} - 
            ${noticia.author}</span></p>
        <p><span class="text">
        ${noticia.description} <a href="${noticia.url}">Leia mais ...</a>
        </span></p>
    </div>           
    `;
    };
}
