const {http, defaults} = require("../utils");
const errorHandler = (err, req, res, next) => {
    console.log(err.stack);

    res.status(err.statusCode || http.bad.server.misc).json({
        success: false,
        error: err.message || defaults.messages.serverError
    });
};

module.exports = errorHandler;