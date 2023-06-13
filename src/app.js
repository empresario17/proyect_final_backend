
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./utils/database')
const initModels = require('./models/init.model')
const errorHandlerRouter = require('./routers/errorHandler.router')
const apiRouters = require('./routers/index.router')

const PORT = 8000;
const app = express()

initModels()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

db.authenticate()
.then(() =>{
    console.log('Bade de datos conectado');
}).catch(err => console.error(err))

db.sync({alter: true})
.then(() => console.log('Base de datos sincronizada'))
.catch(err => console.error(err))

apiRouters(app)

errorHandlerRouter(app)

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el port ${PORT}`);
})



