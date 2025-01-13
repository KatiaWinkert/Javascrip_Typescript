// para importar no node poce pode umar o caminho absoluto onde vc pega para importação la da pasta raiz, 
//ou então o modo relatico como está no exemplo "const mode1 = require('./mode1')" > Lembrando que no node
//não se usa import  
// const mode1 = require('./mode1');
// console.log(mode1)


//o caminha usado ./ são modulos que nos criamos e chamando pelo ./ nos apontamos o caminho que tem que seguir 
//modulos de configuração do node modules nao precisam ser apontados se quiser usar pode chamar como o exemplo 
//abaixo : 
// const path = require('path');
// const axios = require('axios')
 const {Pessoa} = require('./mode1');
// const mode1 = require('./mode1')

// console.log(mode1);

const p1 = new Pessoa('Cindy'); 
console.log(p1)


//  const p1 = new Pessoa('Nino'); 
//  console.log(p1 )

// //lembrete > Promesi uma then e catch 
// axios('https://stats.cert.br/')
//     .then(response => console.log(response.data))
//     .catch(e => console.log('deu errado!!'))
