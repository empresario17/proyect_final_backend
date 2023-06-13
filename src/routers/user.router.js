const { Router } = require("express");
const { createdUser, getAllUsers, updateUser } = require("../controllers/user.controllers");
const { createdUserValidator, updateUserValidator } = require("../validators/users.validator");
const upload = require("../middlewares/img.middleware");

const userRouter = Router()

userRouter.post('/users' ,createdUserValidator, createdUser)

userRouter.get('/users', getAllUsers)

userRouter.put('/user/:id', upload.single('file'), updateUserValidator, updateUser)

module.exports = userRouter