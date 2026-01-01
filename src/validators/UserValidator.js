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
    age: Joi.number().integer().min(0).optional().default(0),
    gender: Joi.string().optional().default(""),
    profession: Joi.string().optional().default(""),
    address: Joi.string().optional().default(""),
    phone: Joi.string().optional().default(""),
    city: Joi.string().optional().default(""),
    state: Joi.string().optional().default(""),
    zip: Joi.string().optional().default(""),
    country: Joi.string().optional().default(""),
    website: Joi.string().uri().optional().allow("").default(""),
    skills: Joi.array().items(Joi.string()).optional().default([]),
    hobbies: Joi.array().items(Joi.string()).optional().default([]),
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

const fetchUserByIdSchema = Joi.object({
    id: Joi.string().hex().length(24).required(),
});

module.exports = { createUserSchema, updateUserSchema, fetchUserByIdSchema };