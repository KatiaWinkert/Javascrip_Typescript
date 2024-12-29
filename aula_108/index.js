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
function esperaAi (msg, tempo ) {
    return new Promise(( resolve, reject) => {

        if(typeof msg !== 'string') reject (new Error);

        setTimeout(( ) => {
            resolve(msg)
    }, tempo );

    });

}

//then() > resolve ->  A função resolve é chamada quando a operação é concluída com sucesso.
//catch() > reject ->  e a função reject é chamada quando a operação falha. 
//Uma promise é um objeto em JavaScript que representa a conclusão ou falha de uma operação assíncrona. 
//Para criar uma promise, é possível usar a palavra-chave new e passar uma função que recebe dois argumentos: resolve e reject.

esperaAi ('Conexão com o BD', rand(1, 3))
.then(resposta => {
    console.log( resposta);
    return esperaAi ('Buscando dados da BASE', rand(1, 3));
}).then(resposta => {
    console.log(resposta ); 
    return esperaAi (222222, rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi('Exibi dados na tela'); 
}).then(resposta => {
    console.log(resposta);
}).catch( e => {
    console.log('ERRO:', e);
});



