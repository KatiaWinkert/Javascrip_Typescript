const nome = 'Bruna Aparecida';
const sobreNome = "Silva"
const idade = 34; 
const peso = 84; 
const alturaEmM = 1.65; 
let imc; 
imc = peso / (alturaEmM * alturaEmM);

let anoNascimento; 
anoNascimento = 2023 - idade; 

console.log(nome, sobreNome, 'tem', idade, 'anos pesa', peso, 'kg tem', alturaEmM, 'e seu IMC é de', imc, );
console.log(nome, 'nasceu em', anoNascimento);
