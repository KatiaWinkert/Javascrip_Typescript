class ValidaFormulario {
constructor() {
    this.formulario = document.querySelector('.formulario');
        this.eventos();
     

}
    //metodo que liga eventos ligados ao botão do formulario
    eventos () {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e); 
        }); 
    }

    //metodo que liga eventos ligados ao botão do formulario
    handleSubmit(e) {
        e.preventDefault(); 
        const camposValido = this.camposSaoValidos();

    }

    //esse metodo executa o processo de validar se os campos do formulario foram preenchidos ou nao
    // no for ocorre o processo de checagem se o formulario foi alimentado com a variavel campo
    // caso isso nao tenha ocorrido ele retorna uma mensagem de erro que correspode ao comando if. 
    camposSaoValidos () {
        let valid = true; 

        for(let campo of this.formulario.querySelectorAll('.validar')){
            let label = campo.previousElementSibling.innerHTML;

              if(!campo.value){
                this.criaError(campo, `Campo ${label} não pode estar em branco.`);
                valid = false;
              }
        }
        
    }


    // metodo criarError ele esta acoplado dentro do metodo camposSaoValidos no if, observe o processo.
    criaError (campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg ;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }

}

const valida = new ValidaFormulario(); 