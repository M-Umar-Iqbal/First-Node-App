const Joi = require('joi');

// how can i send all errors at once in the response?

const createUserSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.empty': 'Name should not be empty', // Custom error message
        'any.required': 'Name is required', // Custom error message - this is a default error message from Joi
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Invalid email address', // Custom error message
        'string.empty': 'Email address should not be empty', // Custom error message
        'any.required': 'Email address is required', // Custom error message - this is a default error message from Joi
    }),
    age: Joi.number().integer().min(0).optional().default(0).messages({
        'number.min': 'Age should be greater than 0', // Custom error message
        'any.required': 'Age is required', // Custom error message - this is a default error message from Joi
    }),
    gender: Joi.string().optional().default("").messages({
        'string.empty': 'Gender should not be empty', // Custom error message
        'any.required': 'Gender is required', // Custom error message - this is a default error message from Joi
    }),
    profession: Joi.string().optional().default("").messages({
        'string.empty': 'Profession should not be empty', // Custom error message
        'any.required': 'Profession is required', // Custom error message - this is a default error message from Joi
    }),
    address: Joi.string().optional().default("").messages({
        'string.empty': 'Address should not be empty', // Custom error message
        'any.required': 'Address is required', // Custom error message - this is a default error message from Joi
    }),
    phone: Joi.string().required().messages({
        'string.empty': 'Phone number should not be empty', // Custom error message
        'any.required': 'Phone number is required', // Custom error message - this is a default error message from Joi
    }),
    city: Joi.string().optional().default("").messages({
        'string.empty': 'City should not be empty', // Custom error message
        'any.required': 'City is required', // Custom error message - this is a default error message from Joi
    }),
    state: Joi.string().optional().default("").messages({
        'string.empty': 'State should not be empty', // Custom error message
        'any.required': 'State is required', // Custom error message - this is a default error message from Joi
    }),
    zip: Joi.string().optional().default("").messages({
        'string.empty': 'Zip code should not be empty', // Custom error message
        'any.required': 'Zip code is required', // Custom error message - this is a default error message from Joi
    }),
    country: Joi.string().optional().default("").messages({
        'string.empty': 'Country should not be empty', // Custom error message
        'any.required': 'Country is required', // Custom error message - this is a default error message from Joi
    }),
    website: Joi.string().uri().optional().allow("").default("").messages({
        'string.uri': 'Invalid website URL', // Custom error message
        'string.empty': 'Website should not be empty', // Custom error message
        'any.required': 'Website is required', // Custom error message - this is a default error message from Joi
    }),
    skills: Joi.array().items(Joi.string()).optional().default([]).messages({
        'array.base': 'Skills should be an array', // Custom error message
        'any.required': 'Skills are required', // Custom error message - this is a default error message from Joi
    }),
    hobbies: Joi.array().items(Joi.string()).optional().default([]).messages({
        'array.base': 'Hobbies should be an array', // Custom error message
        'any.required': 'Hobbies are required', // Custom error message - this is a default error message from Joi
    }),
});

const updateUserSchema = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    age: Joi.number().integer().min(0).optional(),
    gender: Joi.string().optional(),
    profession: Joi.string().optional(),
    address: Joi.string().optional(),
    phone: Joi.string().optional(),
    city: Joi.string().optional(),
    state: Joi.string().optional(),
    zip: Joi.string().optional(),
    country: Joi.string().optional(),
    website: Joi.string().uri().optional().allow(""),
    skills: Joi.array().items(Joi.string()).optional(),
    hobbies: Joi.array().items(Joi.string()).optional(),
    isActive: Joi.boolean().optional(),
});

const userIdSchema = Joi.object({
    id: Joi.string().hex().length(24).required(),
});

module.exports = { createUserSchema, updateUserSchema, userIdSchema };