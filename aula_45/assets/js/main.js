//função construtora : 

function Calculadora() {

    this.display = document.querySelector('.display');

this.inicia = () => {  
    this.capturaCliques(); 
    this.capturaEnter();
}; 

this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
        if(e.keyCode !== 13) return;
        this.realizaConta();
    })
}

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target; 
            if(el.classList.contains('btn-num')) this.addNumDisplay(el); // adicionar numero
             if(el.classList.contains('btn-clear')) this.clear(); // limpar numero
              if(el.classList.contains('btn-del')) this.del(); // deletar numero
               if(el.classList.contains('btn-eq')) this.realizaConta(el); // realizar numero
        }); 
        
        }
        // METODOS : 
            this. realizaConta = () => {
                try {
                    const conta = eval(this.display.value); 

                    if(!conta) {
                        alert('Conta invalida!!'); 
                    return;
                    }

                    this.display.value = conta;                     


                } catch (error) {
                    alert('Conta inválida!!');
                    return;
                }
            };




        //se add numero no display, esse elemento tera um valor (metodos)
        this.addNumDisplay = el => {
         this.display.value += el.innerText 
          this.display.focus();
        }; // adicionar numero
        
         this.clear = () => this.display.value = '';  // limpar numero
           this.del = () => this.display.value = this.display.value.slice(0, -1);  // deleta numero
    

}

const calculadora = new Calculadora();
calculadora.inicia();