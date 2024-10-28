import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'name cannot be empty'],
        min:10
    },
    email:  {
        type: String, 
        required: [true, 'Email is Required'],
        min:10
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    resetPasswordToken:
     {
        type: String,
     },
})

export const User = mongoose.models.UserSchema || mongoose.model('User', UserSchema)

