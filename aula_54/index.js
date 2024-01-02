//getter e setter

// get - obtem o valor 
// set - seta o valor 


function Produto(nome, preco , estoque) {
    this.nome = nome; 
    this.preco = preco; 

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave 
        configurable: false, // configurável ?
            get: function(){
                return estoquePrivado
            }, 
            set: function(valor){
                return estoquePrivado = valor; 
            }
    })
 
}

// factory function ---------------------------------------------------

function criaProduto (nome) {
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('nene', ' ')
            nome = valor; 
        }
    }
}

//const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);    
//p1.estoque = "o valor final "
//console.log(p1.estoque) 

const p2 = criaProduto("Bermuda");
p2.nome = "Bibinhooooo nene" 
console.log(p2.nome)
