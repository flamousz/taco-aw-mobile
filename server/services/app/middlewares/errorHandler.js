async function errorHandler(err, req, res, next) {
     let status = 500;
     let message = "Internal server error";

     switch (err.name) {
          case "Unauthenticated":
               status = 401;
               message = "Unauthenticated";
               break;

          case "JsonWebTokenError":
               status = 401;
               message = "Invalid token";
               break;

          case "NotFound":
               status = 404;
               message = "Data Not Found";
               break;

          case "SequelizeUniqueConstraintError":
          case "SequelizeValidationError":
               status = 400;
               message = err.errors.map((el) => el.message);
               break;

          case "EmailOrPasswordRequired":
               status = 400;
               message = "Email or Password Required";
               break;

          case "InvalidEmailOrPassword":
               status = 401;
               message = "Invalid Email or Password";
               break;

          default:
               break;
     }

     res.status(status).json({ message });
}

module.exports = errorHandler;
