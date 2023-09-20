// Função date é uma função contrutora, new sempre que for usado é indicativo de fução contrutora
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// javascript o mes começa a ser contado do 0 ou seja 0 = janeiro por isso o mes de maio é 4 

//const data = new Date(2020, 4, 10, 10, 30, 500); // ano, mes, dia, hora, segundos e milesiomo de segundo 

//const data = new Date('2023-09-19 19:40:25')
//console.log('Dia', data.getDate())
//console.log('Mês', data.getMonth() + 1)
//console.log('Ano', data.getFullYear())
//console.log('Hora', data.getHours())
//console.log('Min', data.getMinutes())
//console.log('Sec', data.getSeconds())
//console.log('ms', data.getMilliseconds())
//console.log('Dia da semana', data.getDay())
//console.log(data.toString())

function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formaData (data){
const  dia = zeroAesquerda (data.getDate()); 
const mes = zeroAesquerda (data.getMonth() + 1);
const   ano = zeroAesquerda (data.getFullYear());
const   hora = zeroAesquerda (data.getHours());
const   min = zeroAesquerda (data.getMinutes());
const   sec = zeroAesquerda (data.getSeconds());

return`${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}

const data = new Date();
const dataBrasil = formaData(data)
console.log(dataBrasil)