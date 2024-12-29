//Promises > promessas foi criada para facilitar as callback 


//função rand executa o tempo 
function rand(min , max){

    min *= 1000; 
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min );
}


//função esperaAi, que faz o processo da mensagem e do tempo
// if trata o cacth > Erro 
//setTimeout trata o resolve.
// toUpperCase() > para voltar mensagens em letra maiuscula 
// 

function esperaAi (msg, tempo ) {
    return new Promise(( resolve, reject) => {

        if(typeof msg !== 'string') {
             reject ('cai no error');
             return;
            
        }
        setTimeout(( ) => {
            resolve(msg.toUpperCase() + ' - Recebi a promise');
            return;

    }, tempo );

    });

}

//Promise.all > trabaha com array entrega valor na ordem 
//Promise.race > entrega o primeiro valor > lembrando que se  tiver um valor que nao seja uma promise esse será 
// o primeiro valor a ser enviado e depois as promessa. A primeira questão que ele resolver ele vai te entregar ovalor 
// seja resultado positivo ou error. 
//Promise.resolve
//Promise.reject

// -- exemplo Promise.all 
const promise = [
    'Primeiro valor' ,
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
  //  esperaAi(1000, 1000),
    'Outro Valor'
]; 

Promise.race(promise)
.then(function(valor){
    console.log(valor);
}).catch(function(error){
    console.log(error); 
});