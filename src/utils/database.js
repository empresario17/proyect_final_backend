const { Sequelize } = require('sequelize');

const db = new Sequelize({
host: "localhost",
port: 5432,
database: "proyec_final_db",
username: "postgres",
password: "root",
dialect: "postgres",
//dialectOptions: { ssl: { require: true, rejectUnauthorized: false }},

}); 

module.exports = db;