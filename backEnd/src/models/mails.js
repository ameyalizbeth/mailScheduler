const mongoose = require("mongoose");
const validator = require('validator');
const Schema = mongoose.Schema;
const mail = new Schema({
   
    toEmail:[{
        type: String,
        required: true,
        
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                    throw new Error('Email is invalid')
            }
        }
<<<<<<< HEAD
    }] ,
    fromEmail: {
=======
    }],
    fromEmail:{
>>>>>>> 5356174a17455b4ee083d0403ebe24e0431f9314
        type: String,
        required: true,
        
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                    throw new Error('Email is invalid')
            }
        }
    },
    subject: {
        type: String,
       
        
    },
    body: {
        type: String,
        
    },
    schedule: {
        type:String
    },
    dateAndTime: {
        type:String
    },
    category: {
        type:String
    },
    count: {
        type:Number
    }
        
    

    
});

module.exports = mongoose.model('mail', mail);