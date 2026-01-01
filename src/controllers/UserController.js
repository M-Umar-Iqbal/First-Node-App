const UserModel = require('../models/UserModel');
const { createUserSchema, fetchUserByIdSchema } = require('../validators/UserValidator');
const { buildSuccessResponse, buildErrorResponse } = require('../utils/response');
const { STATUS_CODES } = require('../constants/status-code');

const fetchAllUsersController = async (req, res) => {
    const users = await UserModel.find();
    return buildSuccessResponse(res, users, 'Users fetched successfully', STATUS_CODES.SUCCESS);
};

const createUserController = async (req, res) => {
    const { name, email, age, gender, phone, address, city, state, country, zip, hobbies, skills } = req.body;
    // Joi validates the request body against the schema and returns an error if the request body is invalid before further processing
    const { error } = createUserSchema.validate(req.body);
    if (error) {
        return buildErrorResponse(res, error.message, STATUS_CODES.BAD_REQUEST);
    }
    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        return buildErrorResponse(res, 'User already exists', STATUS_CODES.CONFLICT);
    }

    const user = await UserModel.create({ name, email, age, gender, phone, address, city, state, country, zip, hobbies, skills });
    return buildSuccessResponse(res, user, 'User created successfully', STATUS_CODES.CREATED);
};

const fetchUserByIdController = async (req, res) => {
    const { id } = req.params;
    // Joi validates the request params against the schema and returns an error if the request params are invalid before further processing
    const { error } = fetchUserByIdSchema.validate(req.params);
    if (error) {
        return buildErrorResponse(res, error.message, STATUS_CODES.BAD_REQUEST);
    }
    // Check if user exists
    const user = await UserModel.findById(id);
    if (!user) {
        return buildErrorResponse(res, 'User not found', STATUS_CODES.NOT_FOUND);
    }
    return buildSuccessResponse(res, user, 'User fetched successfully', STATUS_CODES.SUCCESS);
};


module.exports = { fetchAllUsersController, createUserController, fetchUserByIdController };