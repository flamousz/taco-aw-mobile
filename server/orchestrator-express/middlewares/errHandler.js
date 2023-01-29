

function errHandler(err, req, res, next) {
    const {status} = err.response
    const { message } = err.response.data;
    res.status(status).json({ status, message });
}

module.exports = errHandler;
