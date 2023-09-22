const h1 = document.querySelector('.container h1')
const data = new Date();

//const opcoes = {
//    dateStyle: 'full',
//    timeStyle: 'short'
//}; 

h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});


//function getDiasSemanaTexto (diaSemana){
//    let diaDaSemanatexto;
//
//    switch(diaSemana){
//    case 0:
//        diaDaSemanaTexto = 'Domingo';
//        return diaDaSemanatexto;
//            case 1:
//        diaDaSemanaTexto = 'segunda';
//        return diaDaSemanatexto;
//            case 2:
//        diaDaSemanaTexto = 'Terça';
//        return diaDaSemanatexto;
//            case 3:
//        diaDaSemanaTexto = 'Quarta';
//        return diaDaSemanatexto;
//            case 4:
//        diaDaSemanaTexto = 'Quinta';
//        return diaDaSemanatexto;
//            case 5:
//        diaDaSemanaTexto = 'Sexta';
//        return diaDaSemanatexto;
//            case 6:
//        diaDaSemanaTexto = 'Sabado';
//        return diaDaSemanatexto;
//}
//
//}




//let data = new Date();
//
//let newData = data.toLocaleString('pt-BR', {
//    dateStyle: 'full',
//    timeStyle: 'full',
//});
//console.log(newData);
//h1.innerHTML = getDiasSemanaTexto(data.getDay())