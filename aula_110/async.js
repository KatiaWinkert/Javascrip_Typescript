//Promises > promessas foi criada para facilitar as callback 


//função rand executa o tempo 
function rand(min=0 , max=3){

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

// esperaAi("Fase 1" , rand())
// .then(valor => { console.log(valor)
//     return esperaAi("fase 2", rand());
// }).then(fase => {
//     console.log(fase);
//     return esperaAi("Fase 3", rand());
// }).then(fase => {
//     console.log('fase');
// }).catch(e => console.log(e))

async function executar() {

    try{
    const fase1 = await esperaAi('fase 1', rand());
    console.log(fase1);

    const fase2 = await esperaAi('fase 2', rand() );
    console.log(fase2);

    const fase3 = await esperaAi('fase 3', rand());
    console.log(fase3);

    console.log('Terminamos a fase:', fase3);
    
} catch(e){
    console.log(e)
}

}

executar()