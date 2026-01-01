const { STATUS_CODES } = require('../constants/status-code');

const buildSuccessResponse = (res, data = null, message = 'Success', statusCode = STATUS_CODES.SUCCESS) => {
    const response = {
        statusCode,
        success: true,
        message,
        ...(data && { data })
    };
    return res.status(statusCode).json(response);
};

const buildErrorResponse = (res, message = 'Internal Server Error', statusCode = STATUS_CODES.INTERNAL_SERVER_ERROR, errors = null) => {
    const response = {
        statusCode,
        success: false,
        message,
        ...(errors && { errors })
    };
    return res.status(statusCode).json(response);
};

module.exports = {
    buildSuccessResponse,
    buildErrorResponse
};

