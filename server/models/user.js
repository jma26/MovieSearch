const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema({
    fullName: { type: String, required: [true, 'First name is required'] },
    email: { type: String, required: [true, 'Email is required'], unique: true },
    alias: { type: String, required: [true, 'Alias is required'], unique: true },
    password: { type: String, required: [true, 'Password is required'], minlength: [5, 'Password must be at least 5 characters long']},
    favorites: [{ 
        Title: { type: String },
        Year: { type: Number },
        imdbID: { type: String },
        Poster: { type: String }
    }]
});

let User = mongoose.model('User', UserSchema);