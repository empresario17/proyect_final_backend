const UserService = require("../services/user.services")
const bcrypt = require("bcrypt")
const AuthServices = require("../services/auth.services")
const User = require("../models/users.models") 
const jwt = require("jsonwebtoken")


const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await UserService.getUser(email)

        if (!user) {
            return next({
                status: 404,
                message: "Invalid email",
                error: "User not found"
            })
        }

        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
            return next({
                status: 400,
                message: "The password does not match the user's",
                error: "Invalid password"
            })
        }

        if (!user.emailVerified) {
            return next({
                status: 400,
                message: "User email is not verified",
                error: "Emai verification"
            })
        }

        const { id, username,role } = user
        const token = AuthServices.getToken({ id, username,role })
        res.json({
            id, username, email, role, token
        })

    } catch (error) {
        next(error)
    }

}

const verifyEmail = async (req, res, next) => {
    try {
        const { token } = req.body
        const userData = await jwt.verify(token, "apiecommerce", {
            algorithms: "HS512",
        })

        const user = UserService.getUser(userData.email)

        if (user.emailVerified) {
            return next({
                status: 400,
                message: "User is already verified",
                errorName: "Failed to verify email"
            })
        }

        await UserService.update(userData.id, {
            emailVerified: true
        })

        res.status(204).send()

    } catch (error) {
        next({
            status: 400,
            message: "Invalid or expired token",
            errorName: error
        })
    }
}

module.exports = {
    userLogin,
    verifyEmail
}