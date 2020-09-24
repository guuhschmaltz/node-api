const mongoose = require('mongoose');
const Product = mongoose.model('Product');


module.exports = {

    async store(req, res){
        //Criação
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async index(req, res){
        const products = await Product.find();

        return res.json(products);
    },


};

