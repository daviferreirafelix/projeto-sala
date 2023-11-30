let val = document.getElementById('menu-resp');
let classe = document.getElementsByClassName('responsivo');
let contentClasses = document.getElementsByClassName('content');
let campoBuscas = document.getElementById('buscas');
let classeBusca = document.getElementsByClassName('campo-busca');
let links = document.getElementsByClassName('links-menu-busca');

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
        
        for (let i = 0; i > links.length; i++){
            links[i].style.display = 'block';
        }
    } else if (classeBusca.length > 0){
        campoBuscas.classList.remove('campo-busca');
        for (let i = 0; i > links.length; i++){
            links[i].style.display = 'none';
        }
    }
}