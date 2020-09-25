const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
app.use(express.json()); //Permitir o envio de dados via api rests
app.use(cors()); //Podemos passar os domínios que queremos limitar acesso, por padrão o acesso fica livre.
//Iniciando a DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
requireDir('./src/models');

const Product = mongoose.model('Product');

//Rotas

app.use('/api', require('./src/routes'));

app.listen(3001);