const User = require("../models/user")


class userController {
       static async getUser(req, res, next) {
        try {
            let users = await User.getUsers()

            res.status(200).json(users)
        } catch (err) {
            console.log(err);
            // next(err)
            res.status(500).json({message: 'Internal server error'})
        }
       } 

       static async postUser(req, res, next) {
        try {
            let role = 'admin'
            console.log("masuk")
            let { userName, email, password, phoneNumber, address  } = req.body
            let user = await User.postUser({ userName, email, password, phoneNumber, address  } )

            res.status(201).json({
                _id: user.insertedId,
                userName, email, password, phoneNumber, address, role
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({message: 'Internal server error'})
        }
       }

       static async getById(req, res, next) {
        try {
            let {id} = req.params
            let user = await User.getUserById(id )

            res.status(200).json(user)
        } catch (err) {
            console.log(err);
            res.status(500).json({message: 'Internal server error'})
        }
       }

       static async deleteById(req, res, next) {
        try {
            let {id} = req.params
            let user = await User.deleteById(id )

            res.status(200).json({message: `Account has been deleted`})
        } catch (err) {
            console.log(err);
            res.status(500).json({message: 'Internal server error'})
        }
       }
}


module.exports = userController