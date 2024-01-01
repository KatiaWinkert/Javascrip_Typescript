// Factory functions / Constructor Functions / Classes 

function criaPessoa (nome, sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa("Nino", "Winkert")
//console.log(p1.nomeCompleto())

function Pessoa(nomed, sobrenomed){
 this.nomed = nomed; 
 this.sobrenomed = sobrenomed;
}

const p2 = new Pessoa("Jheyni", "Winkert")
console.log(p2)