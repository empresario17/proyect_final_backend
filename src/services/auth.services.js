
const jwt = require('jsonwebtoken');

class AuthServices {
    static getToken(payLoad) {
        try {
            const token = jwt.sign(payLoad,"apiecommerce",{
                algorithm: "HS512",
                expiresIn: "1d"
            });
            return token;
        } catch (error) {
            throw error
        }
    }
}

module.exports = AuthServices;