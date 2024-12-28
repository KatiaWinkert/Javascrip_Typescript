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

 //metodo que inibe sequecia numerica 
        ésequência () {
         return this.cpflimpo.charAt(0).repeat(11) === this.cpflimpo;
    } 


        geraNovoCpf(){
            const cpfSemDigitos = this.cpflimpo.slice(0, -2); 
             const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
              const digito2 =  ValidaCPF.geraDigito(cpfSemDigitos + digito1);
              this.novocpf = cpfSemDigitos + digito1 + digito2; 
            
    }

//esse metodo pode se tornar estatico pois ele não utiliza nada da instacia, se você 
//observar ele trabalha com base nos parametros, não utiliza o this.
    static geraDigito (cpfSemDigitos) {
            let total = 0 ; 
             let reverso = cpfSemDigitos.length + 1 ; 

            for(let stringNumerica of cpfSemDigitos){
                total += reverso * Number(stringNumerica); 
                 reverso--; 
            }
            
            const digito = 11 - (total % 11);
            return digito <= 9 ? String(digito) : '0'; 
        
        }

     

    //metodo principal: 
    valida() {
        //se algo for diferebte de cpf retorna falso
        //cpf diferente de string retorna falso
        //se cpf for diferente de 11 caracteres retorna falso.
        //se é sequencia retorna falso 
        if(!this.cpflimpo) return false;
        if(typeof this.cpflimpo !== 'string') return false;
        if(this.cpflimpo.length !== 11) return false; 
        if(this.ésequência()) return false;
        this.geraNovoCpf()       
        console.log(this.novocpf)
        
        return this.novocpf === this.cpflimpo;  
    }

}


//instacia: 
//const valida_cpf = new ValidaCPF('070.987.720-90');
//console.log(valida_cpf.valida())

//if(valida_cpf.valida()) {
 //   console.log('CPF Válido');
//} else {
  //  console.log('CPF Inválido');
//}