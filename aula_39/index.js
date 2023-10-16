
//try {
    // parte do cod que é executada quando não há erros:
//} catch (error) {
    //par do cod que é executada quando há erros: 
//} finally {
    // será excutado semrpe
//}

try {
    console.log("Abri um arquivo");
    console.log("Manipulou um arquivo e gerou erro!");
    console.log("Fechou arquivo");
} catch (error) {
    console.log("Tratando error");
}finally{
    console.log("Eu sempre serei executado.")
}

