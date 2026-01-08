const express = require('express');
const router = express.Router();
const { createUserController, fetchAllUsersController, fetchUserByIdController, updateUserController, deleteUserController } = require('../controllers/UserController');

router.get('/fetch-all-users', fetchAllUsersController);
router.get('/get-user-by-id/:id', fetchUserByIdController);

router.post('/create-user', createUserController);
/* 
PUT VS PATCH
PUT is used to update the entire resource, while PATCH is used to update a part of the resource. If the resource is not found, PUT will create a new resource, while PATCH will return a 404 error.
*/
router.put('/update-user/:id', updateUserController);
router.delete('/delete-user/:id', deleteUserController);

module.exports = router;