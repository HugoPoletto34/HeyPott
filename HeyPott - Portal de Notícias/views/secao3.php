<script src="scripts/scriptFontes.js"></script>
<script>
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeFontes;
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${API_KEY}`);
    xhr.send();
</script>
<div id="corpoFonte">
        <section class="conted B">
            <p class="rounded title-Categorias">Fonte: Google News (Brasil)</p>
            <div id="telaFonte"></div>
        </section>

        <div class="conted secao rounded">

            
            <p class="rounded title-Categorias">Fontes Brasileiros</p>
            <div class="rounded menu">
            <a class="escolha" href="?pagina=secao1">Blasting News</a><br>
                <a class="escolha" href="?pagina=secao2">Globo</a><br>
                <a class="escolha" href="?pagina=secao3">Google News (Brasil)</a><br>
                <a class="escolha" href="?pagina=secao4">Info-Money</a><br>
            </div>
        </div>
    </div>