const AuthServices = require("../services/auth.services");
const UserService = require("../services/user.services");
const transporter = require("../utils/mailer");


const createdUser = async (req, res, next) => {
    try {
        const newUser = req.body
        const result = await UserService.create(newUser)
        res.status(201).send(result)

        const { id, email, username} = result
        const token = await AuthServices.getToken({
            id, email, username
        })

        /*
                await transporter.sendMail({
                    to: result.email,
                    from: "harveynilto@gmail.com",
                    subject:"Verifar su correo",
                    html: `<h1>Welcome ${result.username} to the app</h1>
                    <p>Es necesario que verifique su correo</p>
                    <a href="http://localhost:5173/#/verify?token=${token}" target="_blank"> validar correo </a>`
                })
                */

         console.log(token);

    } catch (error) {
        next(error)
        // res.status(400).json(error)
    }
}

const updateUser = async (req, res, next) => {

    try {
        const { id, password} = req.params
        const { username, avatar } = req.body

        const result = await UserService.update(id, { username, avatar })

        res.status(204).json(result)
    } catch (error) {
        next(error)
    }


    
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await UserService.userAll()
        res.json(users)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createdUser,
    getAllUsers,
    updateUser
}