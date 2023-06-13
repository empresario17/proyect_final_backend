const { Router } = require("express");
const { userLogin, auth } = require("../controllers/auth.controllers");
const { createProducts } = require("../controllers/products.controllers");
const autentificate = require("../middlewares/auth.middlewares");
const { isAdmin } = require("../middlewares/role.middleware");


const productsRoutes = Router()

productsRoutes.post('/products',autentificate,isAdmin, createProducts)

module.exports = productsRoutes