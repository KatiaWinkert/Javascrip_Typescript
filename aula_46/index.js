//metodo splice : 

//             -6      -5         -4       -3      -2      -1
//              0       1          2        3       4       5
const nome = ['Nino', 'Cindy', 'Jheyni', 'Manu', 'Tatu', 'nina']; 

// nomes.splice(indice, delete(atual), elem1, elem2, elem3, elem4, elem5, elem6); 
// pop, push, shfit , unshift 

//const removidos = nome.splice(3 , 1, 'Mel')

//console.log(nome, removidos)

//Unshift : acrecentar como primeiro elemento
//nome.splice(0, 0, 'katia')
//console.log(nome)

//shift :remove o primeiro elemento. 
const removidos = nome.splice(0 ,1)

//pop : remover ultimo elemento
//const removidos = nome.splice(-1, 1)

//push: Acresentar elemento (indice 6)
//const removidos = nome.splice(6, 2 , 'Bianca')
console.log(nome, removidos)