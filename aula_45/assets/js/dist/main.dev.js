"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function criaCalculadora() {
  return {
    // atributos que são variaveis do obj vao para cima 
    display: document.querySelector('.display'),
    inicia: function inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },
    //tudo que dor metodo vem para baixo 
    pressionaEnter: function pressionaEnter() {
      var _this = this;

      this.display.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
          _this.realizaConta();
        }
      });
    },
    //metodo para limpar display 
    clearDispley: function clearDispley() {
      this.display.value = '';
    },
    realizaConta: function realizaConta() {
      var conta = this.display.value;

      try {
        conta = (_readOnlyError("conta"), eval(conta));

        if (!conta) {
          alert('Conta inválida!');
          return;
        }

        this.display.value = String(conta);
      } catch (error) {
        alert('Conta inválida!');
        return;
      }
    },
    //apagaum é para apagar um numero da calculadora 
    apagaUm: function apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },
    //metodo para incluir evento (adicionar numero para os calculos)
    cliqueBotoes: function cliqueBotoes() {
      var _this2 = this;

      //this > calculadora 
      document.addEventListener('click', function (e) {
        var el = e.target;

        if (el.classList.contains('btn-num')) {
          _this2.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          _this2.clearDispley();
        }

        if (el.classList.contains('btn-del')) {
          _this2.apagaUm();
        }

        if (el.classList.contains('btn-eq')) {
          _this2.realizaConta();
        }
      });
    },
    btnParaDisplay: function btnParaDisplay(valor) {
      this.display.value += valor;
    }
  };
}

var calculadora = criaCalculadora();
calculadora.inicia();