"use strict";

// factory function (função fabrica :))
function criaPessoa(nome, sobrenome, a, p) {
  return {
    //objeto retornado : 
    nome: nome,
    sobrenome: sobrenome,
    // metodo dentro de função: 
    fala: function fala(assunto) {
      return "".concat(this.nome, " est\xE1 ").concat(assunto, ".");
    },
    //objeto
    altura: a,
    peso: p,
    // metodo : 
    imc: function imc() {
      var indice = this.peso / Math.pow(this.altura, 2);
      return indice.toFixed(2);
    }
  };
}