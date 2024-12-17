//class é a mesma coisa da coisa da função construtora. 

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome; 
        this.sobrenome = sobrenome;
    }

    //Metodos
    falar() {
        console.log(`${this.nome} está falando.`);
    } 
    comer(){
        console.log(`${this.nome} está comendo.`);
    } 
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
}

//instaciar: a partir do momento que voce
//instancia uma class voce cria um objeto. 
const p1 = new Pessoa ('Katia', 'Winkert');
console.log(p1)