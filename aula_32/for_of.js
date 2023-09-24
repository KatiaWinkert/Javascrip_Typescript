const nome = ['Nino', 'Jheyni', 'Cindy', 'Manu'];

//for classico - Geralmente com interaveis (array ou strings)
//for in - Retorna indice ou chave de obj (string, array ou objeto)
// for of - Retonca valore em sí (iteraveis, array ou strings)


//for (let i = 0 ; i < nome.length ; i++){
//    console.log(nome[i]);
//}

//for(let i in nome){
//    console.log(nome[i])
//}

for(let valor of nome) {
    console.log(valor);
}

nome.forEach(function( valor, indice, array){
    console.log(valor, indice, array)
})