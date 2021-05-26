<?php

$pagina = 'home';

if(isset($_GET['pagina'])){
    $pagina = addslashes ($_GET['pagina']);
}

//Carrega o header.php

include 'views/header.php';

//Carrega a página escolhida pelo usuário

switch ($pagina){
    case 'secao1':
        include 'views/secao1.php';
        break;
    case 'secao2':
        include 'views/secao2.php';
        break;
    case 'secao3':
        include 'views/secao3.php';
        break;
    case 'secao4':
        include 'views/secao4.php';
        break;
    default:
    include 'views/home.php';
break;
}

//Carrega o footer.php

include 'views/footer.php';
