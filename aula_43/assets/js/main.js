function criaCalculadora() {
    return{
// atributos que são variaveis do obj vao para cima 
        display: document.querySelector('.display'),



        inicia() {
            alert("oi")
        },
//tudo que dor metodo vem para baixo 

        cliqueBotoes(){
            document.addEventListener('click', function(e) {})

        },


    }
}

const calculadora = criaCalculadora()
calculadora.inicia()