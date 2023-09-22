const verdadeira = true; 

// let tem escopo de bloco {...bloco}
// var  tem escopo de função. 

let nome = 'Gustavo'; // criando
var nome2 = 'Luiz'; // criando

if(verdadeira){
    let nome = 'Otavio';//criando;
    var nome2 = 'Rogerio'; // redeclarando

    if(verdadeira){
        var nome2 = 'Ronaldo'; // redeclarando
        let nome = 'outra coisa'
        
    }
}
console.log(nome, nome2);