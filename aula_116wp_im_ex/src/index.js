//import {nome, sobreome, idade, soma, Pessoa} from './modulo1.js'; 
// // const p1 = new Pessoa ('Katia' , 'Winkert');
// console.log(p1)

//sempre que for importado sem chaves você esta importando 
//o Default. Atenção!! o padrão é so um no modulo. 
//importação padrão default - nao fica entre chaves 
// import qualquernome from './modulo1.js'; 
//console.log(qualquernome(5,5))
// importa tudo :
// import * as MeuMundo  from './modulo1.js'; 
// console.log(MeuMundo)

//importando default mais exports normais. 
import Pessoa, {nome, sobreome} from './modulo1.js';

const p1 = new Pessoa (nome, sobreome); 
console.log(p1); 