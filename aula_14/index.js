//IEEE 754-2008 => padrão que o javascript segue para essa precisão de numeros, casa decimais no caso


let num1 = 0.7; //number
let num2 = 0.1; //number


num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

/*num1 += num2 ; // 0.8
num1 += num2; //0.9
num1 += num2; //1.0
num1 += num2;*/

num1 = Number(num1.toFixed(2))
//num1 = parseFloat(num1.toFixed(2))
console.log(num1)

console.log(Number.isInteger(num1))


//console.log(num1.toString() + num2) => toString transforma o numero em string
//num1 = num1.toString();

// console.log(num1.toString(2)) => colocando o 2 no parentese faz uma representação binaria 

// console.log(num1.toFixed(2)) => coloca limite nas casas de dcimais, usado muito para valores,

// console.log(Number.isInteger(num1)) => retorna se o numero é inteiro. dando resultado de true ou false

/*let temp = num1 * 'olá';
console.log(Number.isNaN(temp))  usado para saber se a conta é invalida pois result foi Nan retorna true ou false,
no caso ele sempre vai retornar verdadeiro se a conta for invalida.  */