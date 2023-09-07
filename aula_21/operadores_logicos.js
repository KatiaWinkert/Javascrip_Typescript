/* 
Operadores logicos
&& -> AND -> E // todas as expressoes precisam ser  verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> Não 
*/

const expressaoAnd = true && true
console.log(expressaoAnd)

const expressaoOr = true || false
console.log(expressaoOr)

const usuario = 'Luiz';  // form que usuario digitou 
const senha = '123456'; // form que usuario digitou


const vaiLogar = usuario === 'Luiz' && senha === '1234567'; 
console.log(vaiLogar)


