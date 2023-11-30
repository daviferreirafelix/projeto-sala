let val = document.getElementById('menu-resp');
let classe = document.getElementsByClassName('responsivo');
let campoBuscas = document.getElementById('buscas');
let classeBusca = document.getElementsByClassName('campo-busca');
let listaLinks = document.getElementById('listaLinks');
let links = listaLinks.getElementsByTagName('li');
let input = document.getElementById('buscar');
let upperCase = input.value.toUpperCase();

function menuResponsivo(){
     if (classe.length == 0){
        val.classList.add('responsivo');
     } else if (classe.length > 0) {
        val.classList.remove('responsivo');
     }
}

function campoBusca(){
    if (classeBusca.length == 0){
        campoBuscas.classList.add('campo-busca');
        listaLinks.style.display = 'block';
    } else if (classeBusca.length > 0){
        campoBuscas.classList.remove('campo-busca');
        listaLinks.style.display = 'none';
    }
}

function buscaDados(){

}