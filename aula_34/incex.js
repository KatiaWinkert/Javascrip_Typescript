function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}


const min= 1;
const max = 50;

//let rand = random(min, max);
let rand = 10

while(rand !== 10){
 rand = random(min, max)
    console.log(rand)
}

do{
    rand = random(min, max)
    console.log(rand)

}while(rand !== 10)

//const nome = 'katia';
//let i = 0; 
//
//while (i < nome.length) {
//    console.log(nome[i]);
//    i++;
//}
//
//console.log('segue a vida...')


