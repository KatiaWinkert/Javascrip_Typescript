// const nome = 'Katia';
// const sobrenome = 'Winkert'; 

// const falaNome = () => {
//     console.log(nome, sobrenome)
// };

 // module.exports.nome = nome; > esta exportando dentro do objeto somente o nome  
// module.exports.sobrenome = sobrenome; > esta exportando dentro do objeto somente o sobrenome
// module.exports.falaNome = falaNome; esta exportando dentro do objeto somente a função 
// A chave exports.nome não precisa ter o nome da variavel poderia ser exports.NOMe, pois ali o que ele esta pegando é 
//somente o valor que seria o "= nome;"  


// const lapis = 'vermelho';
// const caneta= 'azul'; 
// const borracha = 'branca'; 
// const apontador = 'plastico'; 


// const materiais = () => {
//     console.log(lapis, caneta, borracha, apontador )
// }

// module.exports = {
//  lapis,caneta,borracha,apontador, materiais

// };
// exports.nome = nome ; 
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome; 
// this.equalquercoisa = "o que eu quiser" // o this aponta para o module e para o export tambem 

//console.log(exports) // somente exports assim como o module.exports apontas tanto para o modulo como exports  

// class Pessoa {
//     constructor(nome){
//         this.nome = nome
//     }
// };
// //     chave     class > no lugar da class poderia ser uma variavel 
// exports.Pessoa = Pessoa;

class Pessoa {
    constructor(nome){
        this.nome = nome
    }
}

const nome = 'Katia'; 
const sobrenome = 'Winkert'; 

module.exports = {
    nome, sobrenome, Pessoa
} 