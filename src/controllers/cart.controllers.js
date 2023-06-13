const CartServices = require("../services/cart.services")

const cartCraeted = async (req, res, next) => {
    try {
        const newcart = req.body
        
        console.log(newcart);

        const cartCreate = await CartServices.add(newcart)
        res.status(201).json(cartCreate)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    cartCraeted,
}