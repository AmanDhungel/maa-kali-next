import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: [true, 'username is required'],
        min: 10
    },
    email: {
        type: String, 
        required: [true, 'Email is required'],
        min: 10
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    resetPasswordToken: {
        type: String,
        default: ''
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    VerificationToken: {
        type: String,
    },
    isVerificationTokenExpired: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;

