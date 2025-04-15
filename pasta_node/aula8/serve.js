const express = require('express');
const app = express();

//         criar   ler  Atualizar , Deletar
// CRUD -> Create, Read, Update, Delete
//         Post    Get   Put    Delete

//http://facebook.com/profiles/

app.get('/', (req, res) => {
    res.send(`<form action="/" method="POST"> 
        Nome: <input type="text" name="nome"> 
        <button>Enviar</button></form>`)
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    res.send(req.params)
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário'); 
})



app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
