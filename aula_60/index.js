// função fabrica / function factory 

function criaPessoa (nome, sobrenome) {
  const pessoaPrototype = {
     falar(){
        console.log(`Oi eu me chamo ${this.nome}`)
    },
    comer(){
        console.log(`${this.nome}, está comendo`)
    },
    beber(){
        console.log(`${this.nome}, está bebendo `)
    }
  }

  return Object.create(pessoaPrototype, {
    nome: {value: nome},
    sobrenome: {value: sobrenome}
  })
}

const p1 = criaPessoa('Antonio' , 'Silva')
console.log(p1)