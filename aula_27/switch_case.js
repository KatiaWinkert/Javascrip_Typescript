function getDiasSemanaTexto (diaSemana){
    let diaDaSemanatexto;

    switch(diaSemana){
    case 0:
        diaDaSemanaTexto = 'Domingo';
        return diaDaSemanatexto;
            case 1:
        diaDaSemanaTexto = 'segunda';
        return diaDaSemanatexto;
            case 2:
        diaDaSemanaTexto = 'Terça';
        return diaDaSemanatexto;
            case 3:
        diaDaSemanaTexto = 'Quarta';
        return diaDaSemanatexto;
            case 4:
        diaDaSemanaTexto = 'Quinta';
        return diaDaSemanatexto;
            case 5:
        diaDaSemanaTexto = 'Sexta';
        return diaDaSemanatexto;
            case 6:
        diaDaSemanaTexto = 'Sabado';
        return diaDaSemanatexto;
}

}

const data = new Date('1987-04-21 00:00:00')
let diaSemana = data.getDay();
let diaDaSemanaTexto = getDiasSemanaTexto(diaSemana);

console.log( diaSemana, diaDaSemanaTexto)

//switch(diaDaSemana){
//    case 0:
//        diaDaSemanaTexto = 'Domingo';
//        break;
//            case 1:
//        diaDaSemanaTexto = 'segunda';
//        break;
//            case 2:
//        diaDaSemanaTexto = 'Terça';
//        break;
//            case 3:
//        diaDaSemanaTexto = 'Quarta';
//        break;
//            case 4:
//        diaDaSemanaTexto = 'Quinta';
//        break;
//            case 5:
//        diaDaSemanaTexto = 'Sexta';
//        break;
//            case 6:
//        diaDaSemanaTexto = 'Sabado';
//        break;
//}

