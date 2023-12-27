// metodo filter (filtrando array):

const numeros = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]; 


//function callbackFilter (valor, indice, array) {
//    return valor > 10; 
//}


//Atenção! filter vai retornar um valor booleano :)
const filtrandoNumeros = numeros.filter(valor => valor > 10);

//console.log(filtrandoNumeros)

// --------------------------------------

const pessoas = [
    {nome:'Luiz', idade: 62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade: 55},
    {nome:'Leticia', idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade: 47},
]

//metodo filter com Callback montado por mim (atividade) :)
const nomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
console.log(nomeGrande)

const idadeMaior = pessoas.filter(obj => obj.idade >= 50)
console.log(idadeMaior)

const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('a');
})
console.log(nomeTerminaComA)
