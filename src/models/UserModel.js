const mongoose = require('mongoose');
const { COLLECTIONS } = require('../constants/collections');

const userSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        default: 0,
    },
    gender: {
        type: String,
        default: "",
    },
    profession: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },
    phone: {
        type: String,
        default: "",
    },
    city: {
        type: String,
        default: "",
    },
    state: {
        type: String,
        default: "",
    },
    zip: {
        type: String,
        default: "",
    },
    country: {
        type: String,
        default: "",
    },
    website: {
        type: String,
        default: "",
    },
    skills: {
        type: [String],
        default: [],
    },
    hobbies: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
});

const User = mongoose.model(COLLECTIONS.USERS, userSchema);

module.exports = User;