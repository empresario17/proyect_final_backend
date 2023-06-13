
const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const Product = db.define("products",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name: {
        type:DataTypes.STRING(30),
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    price:{
        type:DataTypes.FLOAT,
        defaultValue:0.0
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"user_id"
    },
    productimg:{
        type:DataTypes.STRING,
        allowNull:false
    },
    
},{
    timestamps:true,
    updatedAt:false,
})

module.exports = Product;