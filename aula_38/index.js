//Tratando e lançando erros (try, catch, throw). 

// try - significa tentar = Tente!
// se atente no quesito erro pois não podemos mostrar erros internos para 
//clientes, alem do cliente não entender nada pode se tornar algo inseguro
// então trate o erro para não ser exibido ao usuario final.


function soma(x , y){
    if(typeof x !== 'numer' || typeof y !== 'number'){
        throw new Error('x é y precisam de um numero');
    }
    return x + y;
}

try{
 console.log(soma(1,2));
 console.log(soma("1",2));
 
} catch(error){
   // console.log(error)
   console.log("Ops! tente outra vez.")
}

//try{
//    console.log(ola)
//} catch(error){
//    console.log("não existo")
//    console.log(error)//tratando erro
//}