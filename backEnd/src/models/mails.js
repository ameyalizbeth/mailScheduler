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
    }],
    fromEmail:{
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
    },
    taskid: {
        type:Number
    }
        
    

    
});

module.exports = mongoose.model('mail', mail);