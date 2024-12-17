
//Classe pai * 
class DispositivoEletronico  {
    constructor (nome) {
        this.nome = nome ; 
        this.ligado = false ;
        
    }

    ligar () {
        if(this.ligado) {
            console.log(this.nome + 'já ligado')
       return; }
       
       this.ligado = true;
    }

    desligar () {
        if(!this.ligado) {
            console.log(this.nome + 'já desligado')
       return; }
       
       this.ligado = false;
    }

}

//essas duas classes a baixo são classes irmas, uma não herda da outra os paramentros
//classe pai passa sua herança a classes filhas, porém, as filhas nao passam para 
//a classe pai. 

//Classe filha (herda da Classe pai) *
//class que extende a class dispositivo eletronico
class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor , modelo ) {

     // super é o chamar o construtor da classe pai para que ele execute
     // todo o codigo que foi pedido anteriormente    
        super(nome); 
        this.cor = cor ; 
        this.modelo = modelo ; 
    }
    
    
}

//Classe filha (herda da Classe pai) *
class Tablet extends DispositivoEletronico {
    constructor (nome, temWifii) {
        super(nome); 
        this.temWifii = temWifii ;
    }

    ligar () {
        console.log('Oi! Você alterou o metodo ligar.');
    }
}

const s1 = new SmartPhone ('Samsung', 'Preto' , 'S21 Fe')
console.log(s1); 

const t1 = new Tablet('iPad', true);