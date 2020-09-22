const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();


//Iniciando a DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true},
);
requireDir('./src/models');

//Definindo Rotas
//O parâmetro Req simboliza a requisição que estamos fazendo ao servidor
//O parâmetro Res simboliza a resposta
app.get('/', (req, res) =>{
    res.send('HELLO ROCKETSEAT');
});

app.listen(3001);