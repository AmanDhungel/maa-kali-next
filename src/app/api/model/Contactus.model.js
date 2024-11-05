import mongoose from "mongoose";

const ContactUs = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Title cannot be empty'],
        minLength: 10
    },
    phonenumber: {
        type: String, 
        required: [true, 'number is required'],
        minLength: 10,
        maxLength: 10
    },
    subject: {
        type: String,
        required: [true, 'subject is required'],
    },
    message: {
        type: String, 
        required: [true, 'Message cannot be empty'],
    },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactUs);

export default Contact;
