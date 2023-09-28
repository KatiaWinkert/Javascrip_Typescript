//Escreva uma função que recebe um numero e retorne o seguinte:
//numero é divisivel por 3 = Fizz
//numero é divisivel por 5 = Buzz
//numero é divisivel por 3 e 5 = FizzBuzz
//numero Não é divisivel por 3 e 5 = Retorna o proprio numero
// checar se o numero é realmente um numero = retorna o proprio numero
//use a função com numeros de 0 a 100 

function execFizzBuzz(numero){
    if (typeof numero !== 'number') return numero;
    if(numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
    if(numero % 3 === 0) return "Fizz";
    if(numero % 5 === 0) return "Buzz"; 
   
    return numero
}

for (let i = 0; i <= 100 ; i++){
console.log(i, execFizzBuzz(i))
}