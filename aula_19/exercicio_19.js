function meuEscopo () {
    const form = document.querySelector('.form'); 
    const resultado = document.querySelector('.resultado');

    const pessoas = []


    function recebeEventForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
    
        console.log(nome.value, sobrenome, peso, altura)
    
        //colocar o valor dentro do array pessoas, ultimo colocado
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
            console.log(pessoas)

            //resultado tem que aparecer no interface html 
        resultado.innerHTML += `<strong>Nome:</strong> ${nome.value}</br><strong>Sobrenome:</strong> ${sobrenome.value}</br>` + `<strong>Peso:</strong> ${peso.value}</br> <strong>Altura:</strong> ${altura.value}</br>`
    }
 form.addEventListener('submit', recebeEventForm);

}
meuEscopo();
   //form.onsubmit = function (evento){
    //    evento.preventDefault();
    //    alert(1);
    //    console.log('enviado')
    //};

    //função para não enviar o formulario 
    //let contador = 1
    //function recebeEventForm (evento) {
    //    evento.preventDefault();
    //   console.log(`Form não foi enviado ${contador}`);
    //    contador++
    //}

   
