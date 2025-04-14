const express = require('express');
const app = express();

//         criar   ler  Atualizar , Deletar
// CRUD -> Create, Read, Update, Delete
//         Post    Get   Put    Delete

//http://meusite.com/ <- GET -> entrega a pagina /
//http://meusite.com/sobre <- GET -> entrega a pagina /sobre
//http://meusite.com/contato <- GET -> entrega a pagina /contato 

app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST"> 
        Nome: <input type="text" name="nome"> 
        <button>Enviar</button></form>`)
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário'); 
})

app.get('/contato', (req, res) => {
    res.send('obrigado por entrar em contato conosco')
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
