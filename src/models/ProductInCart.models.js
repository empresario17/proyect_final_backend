const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const ProductInCar = db.define("productincars", {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    carId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"car_id"
    },
    productId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"product_id"
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    price:{
        type:DataTypes.FLOAT,
        defaultValue:0.0
    },status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},{
    timestamps:true,
    updatedAt:false,
})

module.exports = ProductInCar