const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

//função para a tarefa ser incluida com enter: 
inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
   criaTarefa(inputTarefa.value); 
    }
})

//função para limpar input: 
function limpaInput(){
    inputTarefa.value = ""; 
    inputTarefa.focus();

}

//função para apagar lista
function criaBotaoApagar (li) {
    li.innerText += ' '; // =>  espaço no texto
    const botaoApagar = document.createElement('button'); 
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar);

}

function criaTarefa(textoInput) {
    const li = criaLi();    
    li.innerText = textoInput;
    tarefas.appendChild(li)
    limpaInput();
}


//fazer o evento click 
btnTarefa.addEventListener('click',  function(){
    if(!inputTarefa.value) return;
   criaTarefa(inputTarefa.value)
})