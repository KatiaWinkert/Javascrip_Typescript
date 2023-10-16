function retornaHora (data){
    if(data && !(data instanceof Date)){ // se a data for enviada e n for uma instancia de date eu lanço o erro
        throw new TypeError('Esperando instancia de Date.');
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR');
}


try {

const data = new Date ('01-01-1970 12:58:12')
const hora = retornaHora();
console.log(hora);

} catch (error) {
  console.log("Data invalida!")   // tratando erro : throw new TypeError('Esperando instancia de Date.');
} finally {
    console.log("Tenha um bom dia.")
}

