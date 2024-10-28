import mongoose from "mongoose";

const ContactUs = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Title cannot be empty'],
        min:10
    },
    phonenumber: {
        type: String | Number, 
        required: [true, 'number is required'],
        min:10,
        max:10
    },
    concern: {
        type: String,
        required: [true, 'concern is required'],
    },
    message: {
        type: String, 
        required: [true, 'Message cannot be empty'],
    },
})

export const Contact = mongoose.models.ContactUs || mongoose.model('Contact', ContactUs)