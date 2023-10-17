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

//função para limpar input: focus => serve para ficar a barrinha piscando no input 
function limpaInput(){
    inputTarefa.value = ""; 
    inputTarefa.focus();

}

//função para criar botão de apagar item da lista: 
function criaBotaoApagar (li) {
    li.innerText += ' '; // =>  espaço no texto
    const botaoApagar = document.createElement('button'); 
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar'); uma opção para add class;
    botaoApagar.setAttribute('class', 'apagar'); // outra opção para formar uma class 
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);

}

function criaTarefa(textoInput) {
    const li = criaLi();    
    li.innerText = textoInput;
    tarefas.appendChild(li)
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}


//fazer o evento click 
btnTarefa.addEventListener('click',  function(){
    if(!inputTarefa.value) return;
   criaTarefa(inputTarefa.value)
})

//função para apagar :  
document.addEventListener('click', function(e){
    const el = e.target; 

    //se esse botão contem a classe 'apagar'
    if(el.classList.contains('apagar')){
        //do elemento o pai dele será removido()
        el.parentElement.remove(); 
        salvarTarefas();
    }

})

//função para salvar tarefas : 
function salvarTarefas (){
    const listaTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of listaTarefas){
        let  tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

}

//função que vai ler as tarefas e joga-las de volta na ul: 
function adicionarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}

adicionarTarefasSalvas();