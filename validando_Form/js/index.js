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
        const senhaValida = this.senhasSãoValidas();

    }



    senhasSãoValidas(){
        let valid = true; 

            const senha = this.formulario.querySelector('.senha');
            const repetirSenha = this.formulario.querySelector('.repetir-senha')

            if(senha.value !== repetirSenha.value){
                valid = false; 
                this.criaError(senha, 'Campos senha e repetir senha precisam ser iguais.');
                this.criaError(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.')
            }

        return valid;
    }

    //esse metodo executa o processo de validar se os campos do formulario foram preenchidos ou nao.
    // no for 1 ocorre o processo de remover que a mensagem de erro ocorra varias vezes.
    // no for 2 ocorre o processo de checagem se o formulario foi alimentado com a variavel campo.
    // caso isso nao tenha ocorrido ele retorna uma mensagem de erro que correspode ao comando if.

    camposSaoValidos () {
        let valid = true; 

        for (let errorText of this.formulario.querySelectorAll('.error-text') ) {
            errorText.remove()
        }


        for(let campo of this.formulario.querySelectorAll('.validar')){
            let label = campo.previousElementSibling.innerText;

              if(!campo.value){
                this.criaError(campo, `Campo ${label} não pode estar em branco.`);
                valid = false;
              }

              if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false; 
              }

              if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false; 
              }
        }
        
        return valid;
    }


    //validação de usuarios e mensagem de error
    validaUsuario(campo){
        const usuario = campo.value; 
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaError(campo, 'Usuário precisa ter entre 3 a 12 caracteres.')
        }

        // expressão regular: 
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaError(campo, 'Nome de usuário precisa conter apenas letras ou números.')
        }


        return valid; 
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value); 

        if(!cpf.valida()){ 
            this.criaError(campo, 'CPF invalido');   
            return false;        
        }

        return true;

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