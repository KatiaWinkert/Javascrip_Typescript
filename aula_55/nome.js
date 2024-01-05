const UmPrototipoEmComum =  {
    nomeCompleto (){
        const nomeCompleto = this.nome + ' ' + this.sobrenome; 
        return nomeCompleto
    },

        nomeInvertido (){
            const nomeInvertido = this.nomeCompleto().split('').reverse().join(''); 
        return nomeInvertido;
        }

}

function Pessoa ( nome, sobrenome) {
    this.nome = nome; 
    this.sobrenome = sobrenome; 
}

function Cliente (nome, sobrenome ) {
    this.nome = nome ; 
    this.sobrenome = sobrenome;
}

Pessoa.prototype = Object.create(UmPrototipoEmComum);
Cliente.prototype = Object.create(UmPrototipoEmComum);

const pessoa = new Pessoa ('Bia', 'Souza'); 
const cliente = new Cliente ('Cliente', 'Qualquer'); 

console.log(pessoa.nomeCompleto);
console.log(pessoa.nomeInvertido); 
console.log(cliente.nomeCompleto);
console.log(cliente.nomeInvertido);
