const container = document.querySelector('.container'); // selecionando o container para utilizar dom (manipulando o DOM)

const elementos =[
    {tag: 'p', texto: 'Frase 1'}, //0
    {tag: 'div', texto: 'Frase 2'}, // 1 
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const div = document.createElement('div'); // criando div

for(let i =0 ; i < elementos.length; i++){
    let{ tag , texto } = elementos[i]; // desetroturou o obj
    let tagCriadaP = document.createElement(tag); // cria cada tag do array de objetos
    tagCriadaP.innerText = texto; // incluindo os textos do array de objetos

// - let textoCriado = document.createTextNode(texto); outra opçao para incluir texto
// - tagCriadaP.appendChild(textoCriado); 

    div.appendChild(tagCriadaP); // incluindo as tags na div
    
}

container.appendChild(div); //puxa os elementos criado pela div do js