const mongoose = require('mongoose')

//Schema designs. login form creating here

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required and it should be unique"],
        
    },
    password: {
        type: String,
        required: [true, "Passward is required"],
        unique: true,
    },
},{timestamps: true});
