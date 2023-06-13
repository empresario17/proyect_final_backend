const authRouter = require("./auth.router")
const cartRoutes = require("./cart.routes")
const productsRoutes = require("./product.routes")
const userRouter = require("./user.router")


const apiRouters =(app) =>{
    app.use('/api/v1', userRouter)
    app.use('/api/v1', authRouter)

    app.use('/api/v1',productsRoutes)
    app.use('/api/v1',cartRoutes)
    
}

module.exports = apiRouters