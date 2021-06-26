const mongoose = require("mongoose");
const validator = require('validator');
const Schema = mongoose.Schema;
const user = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                    throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        
    },
    googleUser: {
        type: Boolean,
        required:true
    }
      
        
    

    
});

module.exports = mongoose.model('user', user);