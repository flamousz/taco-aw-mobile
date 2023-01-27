const { decodedToken } = require('../helpers/jwt')
const { User } = require('../models/index')

async function authentication(req, res, next) {
    try {
        let {access_token} = req.headers
        if (!access_token) {
            throw {name: 'Unauthenticated'}
        }
        let payload = decodedToken(access_token) // JWSWebTokenError
        if (!payload) {
            throw {name: 'JWSWebTokenError'}
        }

        let user = await User.findByPk(payload.id)
        if (!user) {
            throw {name: 'Unauthenticated'}
        }
        req.user = {
            id: user.id,
            role: user.role,
            username: user.username
        }
        next()
    } catch (err) {
        next(err)
    }
}


module.exports = {authentication}