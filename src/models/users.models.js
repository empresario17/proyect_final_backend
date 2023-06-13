const db = require("../utils/database")
const {DataTypes} = require('sequelize')
const bcrypt = require('bcrypt')

const User = db.define("users",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username: {
        type:DataTypes.STRING(50),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(50),
        unique:true,
        allowNull:false,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    avatar:{
        type:DataTypes.STRING
    },
    emailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      role:{
        type:DataTypes.ENUM,
        values: ['ADMIN', 'SELLER', 'USER'],
        defaultValue:"USER",
        allowNull:false
      }
},{
    timestamps:true,
    updatedAt:false,
   hooks:{
    beforeCreate: async (newUser) =>{
        try {
            const salt = await bcrypt.genSalt(10)
            const passwordHash = await bcrypt.hash(newUser.password, salt)
            newUser.password = passwordHash
            
        } catch (error) {
            throw error
        }
    }
   }
})

module.exports = User