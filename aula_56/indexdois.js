function Produto (nome, preco){
    this.nome = nome; 
    this.preco = preco; 
}

Produto.prototype.desconto = function (percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto ('camiseta', 50);

//Literal
const p2 = {
    nome: 'Bermuda', 
    preco: 100
}
Object.setPrototypeOf(p2, Produto.prototype)

const p3 = Object.create(Produto.prototype , {
    preco: {
        writable: true, 
        configurable: true, 
        enumerable: true, 
        value: 99.50
    },
    tamanho: {
        writable: true, 
        configurable: true, 
        enumerable: true, 
        value: 42
    }
})

p3.desconto(50);
p2.aumento(50);
p1.desconto(90);
console.log(p1)
console.log(p2)
console.log(p3)