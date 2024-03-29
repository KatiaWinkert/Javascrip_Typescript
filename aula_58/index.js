// 705.484.450-52 070.987.720-03 - cpf 

/* 
7x 0x 5x  4x   8x   4x  4x  5x  0x 
10  9  8  7    6    5    4   3   2 
70  0  40  28  48   20   16  15  0 

11 - (237 % 11) = 5 
se o numero digito for maior que 9, consideramos 0

7x 0x  5x  4x   8x   4x  4x  5x  0x  5x 
11  10  9  8    7    6    5    4   3   2 
77  0  45  32  56   24   20    20  0   10 = 284 

11 - (237 % 11) = 2  
se o numero digito for maior que 9, consideramos 0


*/ 

function ValidaCpf (cpfEnviado) {
    Object.defineProperty( {
        enumerable : true,     
        get: function {
            return cpfEnviado.replace(/\D+/g, '');
        } 
    })
}

ValidaCpf.prototype.valida = function ( ) {
    if(typeof this.cpfLimpo === 'undefined') return false; // se o cpf der erro retorna falso  
    if(typeof this.cpfLimpo.length !== 11 ) return false; // se o cpf CONSTAR  tamanho maior que 11 digitos falso 
    
    return true
}

const cpf = new ValidaCpf ('705.484.450-52')
