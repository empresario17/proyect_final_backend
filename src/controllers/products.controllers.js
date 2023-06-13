const ProductsService = require("../services/products.services")

const createProducts = async(req, res, next) =>{
    try {
       // const {name, description,}
       const body = req.body
       const products = await ProductsService.add(body)
       res.status(201).json(products)
    } catch (error) {
        next(error)
    }
}

module.exports ={
    createProducts,
}