//class é a mesma coisa da coisa da função construtora. 

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome; 
        this.sobrenome = sobrenome;
    }

    //Metodos
    falar() {
        console.log(`${this.nome} está falando`);
    } 
   
}

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome; 

}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);

}

//instaciar: a partir do momento que voce
//instancia uma class voce cria um objeto. 
const p1 = new Pessoa('Katia', 'Winkert');
const p2 = new Pessoa2('Dori', 'Aguiar');
