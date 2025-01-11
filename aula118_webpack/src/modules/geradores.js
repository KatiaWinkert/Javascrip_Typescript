
//função rande pega numeros ou letras aleatorios    
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min );

//função que capitura letras para senha pelo fromCharcode 
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));  //gera uma letra maiuscula aleatoriamente 
const geraMinuscula = () => String.fromCharCode(rand(97, 123)); //gera uma letra minuscula aleatoriamente 
const geraNumero = () => String.fromCharCode(rand(48, 58)); //gera um numero aleatoriamente 
const simbolos = ',.;:^~$#@!&*+-=(){}[]%?'; 
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]; //gera um simbolo aleatoriamente 


//Função que gera a senha: 
export default function geraSenha(qtd, maiusculas, minusculas, numeros , simbolos){
    const senhaArray = [];
     qtd = Number(qtd); // a qtd (quantidade de voltas precisa ser numerica) 

    //circuito para pegar a senha
    for(let i = 0; i < qtd; i ++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula()); 
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('').slice(0, qtd); 

    
}


