
const API_KEY = 'd0eb897d30c94f16af54bddb4448769b';
function exibeNoticias () {
    let divTela = document.getElementById('tela');
    let texto = '';

    let dados = JSON.parse (this.responseText);
    for (i=0; i< 6; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        texto = texto + `
            <div class="box-noticia">
                <img src="${noticia.urlToImage}" alt="">
                <p><span class="titulo">${noticia.title}</span></p>
                <p><span class="creditos">${data.toLocaleDateString ()} - 
                    ${noticia.source.name} - 
                    ${noticia.author}</span></p>
                <p><span class="text">
                ${noticia.description} <a href="${noticia.url}">Leia mais ...</a>
                </span></p>
            </div>            
        `;
    };
    divTela.innerHTML = texto;
}
onload = () => {
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `
    https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=${API_KEY}`);
    xhr.send ();

    var menuSalvos = document.getElementById('menuPesqSalvas');
    for(i=0;i<localStorage.length;i++){
        menuSalvos.innerHTML += `<a class="escolha" onclick="pesqEscolha('${localStorage.getItem(`${i}-LC`)}')">${localStorage.getItem(`${i}-LC`)}</a><br>`;
    }
}
botaoIr.onclick = () => {
    var word = document.getElementById('caixaBusca').value;
    let titleTela = document.getElementById('title-pesquisa');
    if(!word==''){
        let xhr = new XMLHttpRequest ();
        xhr.onload = exibeNoticias;
        xhr.open ('GET', `https://newsapi.org/v2/everything?q=${word}-Brasil&apiKey=${API_KEY}`);
        xhr.send ();
        titleTela.innerHTML = `
        <p class="pesqStyle rounded">Pesquisa: ${word}
        <button class="btn btn-info" onclick="salvarPesquisa()">Salvar</button></p>
        
        `;
    }
    else{
        titleTela.innerHTML = '';
        let xhr = new XMLHttpRequest ();
        xhr.onload = exibeNoticias;
        xhr.open ('GET', `
        https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=${API_KEY}`);
        xhr.send ();
    }

}

function salvarPesquisa(){
    var word = document.getElementById('caixaBusca').value;
    localStorage.setItem(`${posicAtual}-LC`,`${word}`);
    var menuSalvos = document.getElementById('menuPesqSalvas');
    console.log(menuSalvos);
    menuSalvos.innerHTML += `<a class="escolha" onclick="pesqEscolha('${word}')">${localStorage.getItem(`${posicAtual}-LC`)}</a><br>`;
    posicAtual++;
}
function pesqEscolha(escolha){
    console.log(escolha);
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://newsapi.org/v2/everything?q=${escolha}-Brasil&apiKey=${API_KEY}`);
    xhr.send ();

    let titleTela = document.getElementById('title-pesquisa');
    titleTela.innerHTML = `
        <p class="pesqStyle rounded">Pesquisa: ${escolha}</p>
        
        `;
}