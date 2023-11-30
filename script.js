let val = document.getElementById('menu-resp');
let classe = document.getElementsByClassName('responsivo');
let classes = document.getElementsByClassName('content');
let inp = document.getElementById('buscar').innerText;

console.log(classes)

function menuResponsivo(){
     if (classe.length == 0){
        val.classList.add('responsivo');
     } else if (classe.length > 0) {
        val.classList.remove('responsivo');
     }
}

function buscaPost(){
    for (let i = 0; i > classes.length; i++){
        let texto = classes[i].innerText;

        if (texto === inp.innerText){
            console.log("certo")
        }
    }
    
}