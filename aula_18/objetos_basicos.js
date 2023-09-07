//Objetos Basico 
//onjeto literal 
/*const pessoa = {
    nome: 'Luiz', // atibuto : "valor"
    sobrenome: 'Miranda',
    idade: 25

};

const pessoaDois = {
    nome: 'Maria', // atibuto : "valor"
    sobrenome: 'Santos',
    idade: 30

};

console.log(pessoa.nome)
console.log(pessoa.sobrenome)*/
//                          Parametro
function createObject (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
}
//                                  Argumentos /// => Argumentos é o valor que são passados para o parametro  
const vamosDados = createObject ('Luiz', 'Mendonça', 26)
const vamosDadosUm = createObject ('Bento', 'Viana', 26)
const vamosDadosDois = createObject ('Camila', 'Silva', 19)
const vamosDadosTres = createObject ('Mario', 'Beleza', 30)

console.log(vamosDados.nome, vamosDadosDois.nome)