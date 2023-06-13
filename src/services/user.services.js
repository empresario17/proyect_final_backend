const User = require("../models/users.models"); 


class UserService {

    static async userAll() {
        try {
            const users = await User.findAll({
                attributes: ['id', 'username', 'email','role'],
                order: ['id']
            })

            return users
        } catch (error) {
            throw error
        }
    }

    static async create(newUser) {
        try {
            const userCreate = await User.create(newUser);
            return userCreate
        } catch (error) {
            throw error
        }
    }

    static async update(id, data) {
        try {
            const result = await User.update(data, {
                where: { id }
            });

            return result
        } catch (error) {
            throw error
        }
    }

    static async getUser(email) {
        try {
            const user = await User.findOne({
                where: { email }
            })
            return user
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserService;