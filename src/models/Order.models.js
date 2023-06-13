const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Order = db.define("orders",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    totalprice:{
        type:DataTypes.FLOAT,
        defaultValue:0.0
    },
    orderId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"order_id"
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},{
    timestamps:true,
    updatedAt:false,
   
})

module.exports = Order;