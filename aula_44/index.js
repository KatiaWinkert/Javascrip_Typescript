// factory function (função fabrica :))

function criaPessoa(nome, sobrenome, a , p ){
    return {
        //objeto retornado : 
        nome, 
        sobrenome,
        // metodo dentro de função: 
        fala(assunto = 'domindo' ){
            return `${this.nome} está ${assunto}.`;
        },
        //objeto
        altura: a, 
        peso: p, 
        // metodo : 
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa("Alejandro", "Roberto", 1.85 , 95)
const p2 = criaPessoa("Lua", "Amada", 1.60, 50)
console.log(p1.imc());
console.log(p2.fala());
