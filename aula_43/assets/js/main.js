function criaCalculadora() {
    return{
// atributos que são variaveis do obj vao para cima 
        display: document.querySelector('.display'),

       


        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },
//tudo que dor metodo vem para baixo 

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
                
            })

        },


        //metodo para limpar display 
        clearDispley(){
            this.display.value = '';
        },

        realizaConta(){
            const conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = String(conta);
                
            } catch (error) {
                alert('Conta inválida!');                
                return;
            }

        },

        //apagaum é para apagar um numero da calculadora 
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1) 
        },

        //metodo para incluir evento (adicionar numero para os calculos)
        cliqueBotoes(){
            //this > calculadora 
            document.addEventListener('click', e => {
                const el = e.target; 

            if(el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')){
                this.clearDispley()
            }

            if(el.classList.contains('btn-del')){
                this.apagaUm();
            }


            if(el.classList.contains('btn-eq')){
                this.realizaConta()
            }

            }); 
                

        },
btnParaDisplay(valor){
    this.display.value += valor;

} 

    }
}

const calculadora = criaCalculadora();
calculadora.inicia()