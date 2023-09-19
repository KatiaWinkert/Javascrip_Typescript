// Função date é uma função contrutora, new sempre que for usado é indicativo de fução contrutora
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// javascript o mes começa a ser contado do 0 ou seja 0 = janeiro por isso o mes de maio é 4 

const data = new Date(2020, 4, 10, 10, 30, 500); // ano, mes, dia, hora, segundos e milesiomo de segundo 
console.log(data.toString())