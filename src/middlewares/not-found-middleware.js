const { STATUS_CODES } = require('../constants/status-code');

const notFoundMiddleware = (req, res, next) => {
    const error = new Error(`Route ${req.method} ${req.originalUrl} not found`);
    error.statusCode = STATUS_CODES.NOT_FOUND;
    next(error); // Pass error to error handler middleware
};

module.exports = { notFoundMiddleware };