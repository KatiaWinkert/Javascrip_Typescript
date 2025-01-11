import geraSenha from './geradores'; 


const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chknumeros = document.querySelector('.chk-numeros');
const chksimbolos = document.querySelector('.chk-simbolos');

const gerarSenha = document.querySelector('.gerar-senha');


//click ação do botão gerar senha
export default ( ) => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()


    });
};

//função gerando senha 
function gera(){
    const senha = geraSenha(
        qtdCaracteres.value, // aqui peca a variavel e o valor que estara no input de cada um 
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chknumeros.checked,
        chksimbolos.checked
    );
    return senha; //retorna o valor de cada input a cima. 
}

