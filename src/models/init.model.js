const Car = require("./car.models")
const Order = require("./Order.models")
const Product = require("./products.models")
const ProductInCar = require("./ProductInCart.models")
const ProductInOrder = require("./ProductInOrder.models")
const User = require("./users.models")


const initModels =() => {
    User.hasMany(Order, {foreignKey:"userId"})
    Order.belongsTo(User, {foreignKey:"userId"})

    User.hasMany(Car, {foreignKey:"userId"})
    Car.belongsTo(User, {foreignKey:"userId"})

    User.hasMany(Product,{foreignKey:"userId"})
    Product.belongsTo(User, {foreignKey:"userId"})

    Car.hasMany(ProductInCar, {foreignKey:"carId"})
    ProductInCar.belongsTo(Car, {foreignKey:"carId"})

    Product.hasMany(ProductInCar, {foreignKey:"productId"})
    ProductInCar.belongsTo(Product, {foreignKey:"productId"})

    Product.hasMany(ProductInOrder,{foreignKey:"productId"})
    ProductInOrder.belongsTo(Product, {foreignKey:"productId"})

    Order.hasMany(ProductInOrder, {foreignKey:"orderId"})
    ProductInOrder.belongsTo(Order, {foreignKey:"orderId"})
    
}

module.exports = initModels