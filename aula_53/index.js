//defineProperty - defineProperties 

function Produto(nome, preco , estoque) {
    this.nome = nome; 
    this.preco = preco; 

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave 
        value: estoque, // valor 
        writable: true, // pode fazer alteração ? 
        configurable: false // configurável ?
    })

    Object.defineProperties(this, {
        nome:{
            enumerable: true, // mostra a chave 
            value: nome, // valor 
            writable: true, // pode fazer alteração ? 
            configurable: true // configurável ?
        },
        preco:{
            enumerable: true, // mostra a chave 
            value: preco, // valor 
            writable: true, // pode fazer alteração ? 
            configurable: true // configurável ?
        },
    })


}

const p1 = new Produto('Camiseta', 20, 3)