class ValidaFormulario {
constructor() {
    this.formulario = document.querySelector('.formulario');
        this.eventos();
     

}

    eventos () {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e); 
        }); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        console.log('Formulario não enviado')
    }

}

const valida = new ValidaFormulario(); 