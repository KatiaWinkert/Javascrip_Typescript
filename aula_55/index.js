/* Js é basedo em protótipo para passar propriedades e métodos de um objeto para outro. 
Definição de prototipo: 
Protótiipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo
ou molde para futuras produções. 

Todos os objetos tem um referencia interna para um protótipo (_proto_) que vem da propriedade prototype
da função construtora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do 
JS vai tentar encontrar este membro no proprio objeto e depois a cadeia de protótipos é usada até o topo (null) ate encontrar
ou nao tal memnbro.*/


function Pessoa (nome, sobrenome){

    this.nomenome = nome; 
    this.sobrenome = sobrenome;
    this.nomecompleto = () => this.nome + '' + this.sobrenome; 

}

Pessoa.prototype.nomecompleto = function () {
    return this.nome + '' + this.sobrenome; 

}

const pessoa1 = new Pessoa ('Nino', '0') // <= função Construtora
const pessoa2 = new Pessoa ('Joana', 'A')

const data = new Date()

console.dir(pessoa1)
console.dir(pessoa2)