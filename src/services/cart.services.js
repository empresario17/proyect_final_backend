const Car = require("../models/car.models"); 

class CartServices{
    static async add(newcart){
        try {
            const cart = await Car.create(newcart);
            return cart
        } catch (error) {
            throw error
        }
    }
}

module.exports = CartServices;