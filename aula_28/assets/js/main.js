const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString(dataCerta)


//function zeroDataaEsqueda (num){
//    return num >= 10 ? num : `0${num}`;
//}
//
//
//function dataExec (data) {
//
//    const semana = zeroDataaEsqueda(data.getDay());
//    const dia = zeroDataaEsqueda(data.getDate());
//    const mes = zeroDataaEsqueda(data.getMonth());
//    const ano = zeroDataaEsqueda(data.getFullYear());
//    const hora = zeroDataaEsqueda(data.getHours());
//    const min = zeroDataaEsqueda(data.getMinutes());
//
//    return`${semana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`
//}
//
//
//const dataCerta = dataExec(data)
//
