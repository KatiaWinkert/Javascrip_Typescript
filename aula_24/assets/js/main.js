// 1° coisa a fazer é parar o envio do form (capturar evento submit)

const form = document.querySelector('#formulario');


//função para para envio de formulario (form)
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso invalido!', false);
        return;
    }

    if(!altura){
        setResultado('Altura invalida!', false);
        return;
    }

    const imc = getIMC(peso, altura); // getUMC simplemente vai calcular o imc
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getNivelImc (imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobre peso', 'Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.9) return nivel[1];
    if(imc < 18.9) return nivel[0];
}

function getIMC (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');// criando paragrafo no html
     return p;                                     // p.classList.add('paragrafo-resultado')//inserindo class do elemento criado
    
}

//função para o envio do resultado:
function setResultado (msg, isValid) {
    const resultado =  document.querySelector('#resultado');
    resultado.innerHTML = '';
   
     const p = criaP();                        //resultado.appendChild(p)//insere o resultado do paragrafo

     if(isValid){
        p.classList.add('paragrafo-resultado');
     } else {
        p.classList.add('bad');
     }

     p.innerHTML = msg;
    resultado.appendChild(p);
}