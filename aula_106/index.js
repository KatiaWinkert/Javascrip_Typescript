//058.128.389-92 070.987.720-90 cpf 

class ValidaCPF{
    constructor(cpfenviado){
        
        // esse processo do objeto abaixo dentro do construtor tem a finalidade de limpar os pontos 
        //do cpf, ou seja, tudo que não for numero será excluído;
        //isso é um objeto 
        Object.defineProperty(this, 'cpflimpo', {
        // para ocultar ou proteger essa propriedade utiliza os comandos a baixo. 
        writable: false,
        enumerable: true,
        configurable: false,
        
            value: cpfenviado.replace(/\D+/g, ''),       

    });

    }

        ésequência () {
        return this.cpflimpo.charAt(0).repeat(11) === this.cpflimpo;
    } 

    //metodo: 
    valida() {
        //se algo for diferebte de cpf retorna falso
        //cpf diferente de string retorna falso
        //se cpf for diferente de 11 caracteres retorna falso. 
        if(!this.cpflimpo) return false;
        if(typeof this.cpflimpo !== 'string') return false;
        if(this.cpflimpo.length !== 11) return false; 
        if(this.ésequência()) return false;       
        
        return 'Cheguei Aqui!';
    }

}


//instacia: 
const valida_cpf = new ValidaCPF('070.987.720-90');
console.log(valida_cpf.valida)