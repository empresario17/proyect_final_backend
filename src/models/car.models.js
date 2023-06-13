const db = require("../utils/database");
const {DataTypes} = require("sequelize");

const Car = db.define("cars",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"user_id"
    },
    totalprice:{
        type:DataTypes.FLOAT,
        defaultValue:0.0
    }
},{
    timestamps:true,
    updatedAt:false
})

module.exports = Car;