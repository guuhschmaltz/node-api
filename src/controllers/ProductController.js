const mongoose = require('mongoose');
const Product = mongoose.model('Product');


module.exports = {
    //SELECT
    async index(req, res){
        //const products = await Product.find();
        const { page = 1 } = req.query; //desestruturação para o parâmetro page que temos no GET da api com valor default 1
        const products = await Product.paginate({},{ page, limit: 10});

        return res.json(products);
    },

    //SELECT DETALHADO
    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //CREATE
    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    //UPDATE
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); //Acha o produto e atualiza com a req do body

        return res.json(product);
    },

    //DELETE
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    },
};

