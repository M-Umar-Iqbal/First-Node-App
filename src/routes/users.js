const express = require('express');
const router = express.Router();
const { createUserController, fetchAllUsersController, fetchUserByIdController } = require('../controllers/UserController');

router.get('/fetch-all-users', fetchAllUsersController);
router.post('/create-user', createUserController);
router.get('/get-user-by-id/:id', fetchUserByIdController);

module.exports = router;