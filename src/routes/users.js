const express = require('express');
const router = express.Router();
const { sendResponse } = require('../utils/response');
const { STATUS_CODES } = require('../constants/status-code');

router.get('/get-users', (req, res) => {
    // Example: Fetch users from database
    const users = []; // Replace with actual data
    sendResponse(res, users, 'Users fetched successfully', STATUS_CODES.SUCCESS);
});

module.exports = router;