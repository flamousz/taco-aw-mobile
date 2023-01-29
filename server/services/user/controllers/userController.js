const User = require("../models/user")


class userController {
       static async getUser(req, res, next) {
        try {
            let users = await User.getUsers()

            res.status(200).json(users)
        } catch (err) {
            next(err)
        }
       } 

       static async postUser(req, res, next) {
        try {
            let role = 'admin'
            let { userName, email, password, phoneNumber, address  } = req.body
            let user = await User.postUser({ userName, email, password, phoneNumber, address  } )

            res.status(201).json({
                _id: user.insertedId,
                userName, email, phoneNumber, address, role
            })
        } catch (err) {
            next(err)
        }
       }

       static async getById(req, res, next) {
        try {
            let {id} = req.params
            let user = await User.getUserById(id )
            if (!user) {
                throw { name: 'Usernotfound' }
            }

            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
       }

       static async deleteById(req, res, next) {
        try {
            let {id} = req.params
            await User.deleteById(id )

            res.status(200).json({message: `Account has been deleted`})
        } catch (err) {
            next(err)
        }
       }
}


module.exports = userController