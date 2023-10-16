const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function mostraHora (){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

iniciar.addEventListener('click', function(evento){
    const time = setInterval(function(){
       relogio.innerHTML = `${time}`
    })
});

pausar.addEventListener('click', function(evento){
    alert('Cliquei no pausar.');
});

zerar.addEventListener('click', function(evento){
    alert('Cliquei no zerar.');
});

