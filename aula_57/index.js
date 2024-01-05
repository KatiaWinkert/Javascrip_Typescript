//Camiseta = Cor , Caneca = material  ; 
// Produto => aumento, desconto; 

function Produto (nome, preco) {
     this.nome = nome ; 
      this.preco = preco;
}


//desconto e aumento no valor do produtos: 
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}; 
Produto.prototype.desconto = function (quantia) {
        this.preco -= quantia; 
}; 

function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco); 
    this.cor = cor; 
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta; 

function Caneca (nome, preco, material, estoque) {
    Produto.call(this, nome, preco); 
    this.material = material ; 

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: false, 
        get: function() {
            return estoque;
        }, 
        set: function(valor){
            if( typeof valor !== 'number') return
            estoque = valor; 
        }
    })

}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca; 

const produto = new Produto ('Generico', 111);
const camiseta = new Camiseta ('Body', 25.90, 'branca');
const caneca = new Caneca ('Caneca', 10, 'plastico', 4)

console.log(produto);
console.log(camiseta);
console.log(caneca)