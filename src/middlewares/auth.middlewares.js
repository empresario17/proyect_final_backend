
const jwt = require('jsonwebtoken');

const autentificate = (req,res,next) =>{

    const token = req.headers['auth-token']

    if(!token){
        return ({
            status:401,
            error: "Unauthorized",
            message: "No token provider"
        })
    }

    try {
        const decodec = jwt.verify(token,"apiecommerce",{algorithms: "HS512"})
        req.user = decodec

        next()

    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = autentificate