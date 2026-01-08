const UserModel = require('../models/UserModel');
const { createUserSchema, updateUserSchema, userIdSchema } = require('../validators/UserValidator');
const { buildSuccessResponse, buildErrorResponse } = require('../utils/response');
const { STATUS_CODES } = require('../constants/status-code');

const fetchAllUsersController = async (req, res) => {
    const users = await UserModel.find();
    return buildSuccessResponse(res, users, 'Users fetched successfully', STATUS_CODES.SUCCESS);
};

const createUserController = async (req, res) => {
    const { name, email, age, gender, phone, address, city, state, country, zip, hobbies, skills } = req.body;
    // Joi validates the request body against the schema and returns an error if the request body is invalid before further processing
    const { error: bodyError } = createUserSchema.validate(req.body, { abortEarly: false });
    if (bodyError) return buildErrorResponse(res, bodyError.details.map(detail => detail.message).join(', '), STATUS_CODES.BAD_REQUEST);
    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return buildErrorResponse(res, 'User already exists', STATUS_CODES.CONFLICT);

    const user = await UserModel.create({ name, email, age, gender, phone, address, city, state, country, zip, hobbies, skills });
    return buildSuccessResponse(res, user, 'User created successfully', STATUS_CODES.CREATED);
};

const fetchUserByIdController = async (req, res) => {
    const { id } = req.params;
    // Joi validates the request params against the schema and returns an error if the request params are invalid before further processing
    const { error: paramsError } = userIdSchema.validate(req.params);
    if (paramsError) return buildErrorResponse(res, paramsError.details.map(detail => detail.message).join(', '), STATUS_CODES.BAD_REQUEST);
    // Check if user exists
    const user = await UserModel.findById(id);
    if (!user) return buildErrorResponse(res, 'User not found', STATUS_CODES.NOT_FOUND);
    return buildSuccessResponse(res, user, 'User fetched successfully', STATUS_CODES.SUCCESS);
};

const updateUserController = async (req, res) => {
    const { id } = req.params;

    // Validate the request params
    const { error: paramsError } = userIdSchema.validate(req.params, {
        abortEarly: false
    });

    if(paramsError) return buildErrorResponse(res, paramsError.details.map(detail => detail.message).join(', '), STATUS_CODES.BAD_REQUEST);

    // Validate the request body
    const { error: bodyError } = updateUserSchema.validate(req.body, {
        abortEarly: false
    });

    if(bodyError) return buildErrorResponse(res, bodyError.details.map(detail => detail.message).join(', '), STATUS_CODES.BAD_REQUEST);

    // Update the user
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) return buildErrorResponse(res, 'User with id ' + id + ' not found', STATUS_CODES.NOT_FOUND);
    return buildSuccessResponse(res, user, 'User updated successfully', STATUS_CODES.SUCCESS);
}

const deleteUserController = async (req, res) => {
    const { id } = req.params;

    // Validate the request params
    const { error: paramsError } = userIdSchema.validate(req.params, { abortEarly: false });
    if (paramsError) return buildErrorResponse(res, paramsError.details.map(detail => detail.message).join(', '), STATUS_CODES.BAD_REQUEST);

    // Delete the user
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) return buildErrorResponse(res, 'User not found', STATUS_CODES.NOT_FOUND);
    return buildSuccessResponse(res, user, 'User deleted successfully', STATUS_CODES.SUCCESS);
}


module.exports = { fetchAllUsersController, createUserController, fetchUserByIdController, updateUserController, deleteUserController };