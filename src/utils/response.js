const { STATUS_CODES } = require('../constants/status-code');

const sendResponse = (res, data = null, message = 'Success', statusCode = STATUS_CODES.SUCCESS) => {
    const response = {
        success: true,
        message,
        ...(data && { data })
    };
    return res.status(statusCode).json(response);
};

const sendResponseError = (res, message = 'Internal Server Error', statusCode = STATUS_CODES.INTERNAL_SERVER_ERROR, errors = null) => {
    const response = {
        success: false,
        message,
        ...(errors && { errors })
    };
    return res.status(statusCode).json(response);
};

module.exports = {
    sendResponse,
    sendResponseError
};

