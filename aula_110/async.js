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

    setTimeout(( ) => {
        if(typeof msg !== 'string') {
             reject ('cai no error');
             return;
            
        }
        
            resolve(msg.toUpperCase() + ' - Recebi a promise');
            return;

    }, tempo );

    });
}
