const Product = require("../models/products.models");


class ProductsService{
    static async add(body){
        try {
            const product = await Product.create(body);
            return product
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductsService;