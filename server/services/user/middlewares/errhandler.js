
function errHandler(err, req, res, next) {
    let status = 500;
    let message = "Internal Server Error";

    switch (err.name) {
        case 'Usernotfound':
            status = 404
            message = 'User not found'
            break;
        case 'UsernameCannotbeempty':
            status = 400
            message = 'Username Cannot be empty'
            break;
        case 'EmailCannotbeempty':
            status = 400
            message = 'Email Cannot be empty'
            break;
        case 'PasswordCannotbeempty':
            status = 400
            message = 'Password Cannot be empty'
            break;
        case 'PhoneNumberCannotbeempty':
            status = 400
            message = 'Phone Number Cannot be empty'
            break;
        case 'AddressCannotbeempty':
            status = 400
            message = 'Address Cannot be empty'
            break;
        case 'InvalidEmail':
            status = 400
            message = 'Invalid Email'
            break;
        case 'EmailHasBeenTaken':
            status = 400
            message = 'Email Has Been Taken'
            break;
    
        default:
            break;
    }

    res.status(status).json({ message })
}

module.exports = errHandler