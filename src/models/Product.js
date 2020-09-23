const mongoose = require('mongoose');

//Criando o esquema do produto
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, //Vai guardar a data de criação
    },
});



mongoose.model('Product', ProductSchema);