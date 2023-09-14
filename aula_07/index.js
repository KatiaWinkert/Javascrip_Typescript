//Não podemos criar constantes com palavras reservadas
//Contantes precisam ter nomes significativos, 
//Não podemos começar p nome de uma constante com números,
//Não podem conter espaços ou traços, 
//Ultilizamos camelCase, 
//Case-sensitive. 
//Não podemos redeclarar variveis com let, 
//Não utilizae var, utilize const.
// constante é obrigatorio inicializar 
// Constante não tem auteração de valor 



const nome = 'João'
console.log(nome)

const primeiroNumero = 5; 
const segundoNumero = 10; 
const resultado = primeiroNumero * segundoNumero; 
const resultadoDuplicado = resultado * 2; 
let resultadoTriplicado = resultado * 3; 
resultadoTriplicado = resultadoTriplicado + 10;

console.log(resultado, resultadoDuplicado );
console.log(resultadoTriplicado)

console.log(typeof primeiroNumero) //typeof usado para ser o tipo do variavel se é string ou numero (js linguagem tipada)