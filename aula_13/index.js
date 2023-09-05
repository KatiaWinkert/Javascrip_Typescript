// sobre strings  

const uva = 'amo "fruta"'; // pode ser usada aspas dentro de aspas simples.
console.log(uva)

console.log("---------------------------------")

let umaString = "Um texto"
// abaixo tipos de concatenação: 
console.log(umaString.concat(" muito importante")) // usando comando concat
console.log(umaString + '  interessante. ') // usano o + depois da variavel 
console.log(`${umaString} belissimo`) // usando template 

console.log("---------------------------------")

//strings são sobre indices, cada caractere dentro do seu valor é um indice. 

//  indice - 01234567
let indic = "Um Carro"

console.log(indic.indexOf('Texto')) // ele da resultado -1 pois o caractere da variavel esta diferente do que foi inicializado 
console.log(indic.indexOf('r', 5)) // procura o caractere e seu indice q foi apontado. 
console.log(indic.lastIndexOf('m')) // ele procura o caracter de tras para frente dando o seu indice. 
console.log(indic.replace('Um', 'Varios'))// Substitui uma palavra por outra.