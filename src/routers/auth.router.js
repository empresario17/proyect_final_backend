const { Router } = require("express");
const { userLogin, verifyEmail } = require("../controllers/auth.controllers");


const authRouter = Router()

authRouter.post('/api/login', userLogin)

authRouter.post('/api/verify', verifyEmail)

module.exports = authRouter