const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();

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