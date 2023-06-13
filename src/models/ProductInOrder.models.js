const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const ProductInOrder = db.define("productinorder",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    orderId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"order_id"
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

module.exports = ProductInOrder;