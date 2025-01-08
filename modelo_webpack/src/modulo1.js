//variavel Default pode ter somente um por arquivo (modulo)

export const nome = 'Nino'; 
export const sobreome = 'Fofinho'; 
export const idade = 36; 

 export  function soma (x, y) {
     return x + y ; 
 }

 export default class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome ; 
        this.sobrenome = sobrenome ; 
    }
 }
 
// const cpf = '1235645588'
//para que algo seja oculto na exportação é so nao exportar: ,


// export class Pessoa {
//     constructor (nome , sobrenome) {
//     this.nome = nome ;
//     this.sobrenome = sobrenome ;
//     }
  
// };