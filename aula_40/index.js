//setinterval e setTimeof 

// setinterval ela é destinada para o intervalo de tempo em tempos 


function mostraHora (){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

const timer = setInterval(function(){ // função que faz a contagem de horas automaticamente
    console.log(mostraHora());
}, 1000);

//setTimeout só executa uma vez
setTimeout(function(){
    clearInterval(timer); // função que faz a parada das horas 
}, 3000);

setTimeout(function(){
    console.log('Olá mundo!')
}, 5000)