const { sendResponseError } = require('../utils/response');
const { STATUS_CODES } = require('../constants/status-code');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : err.statusCode || STATUS_CODES.INTERNAL_SERVER_ERROR;
    
    // Prepare error details (only in development)
    const errors = process.env.NODE_ENV === 'production' ? null : {
        stack: err.stack,
        ...(err.errors && { details: err.errors })
    };
    
    sendResponseError(res, err.message || 'Internal Server Error', statusCode, errors);
};

module.exports = { errorHandler };