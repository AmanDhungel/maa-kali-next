import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, 'Title cannot be empty'],
        min:10
    },
    description: {
        type: String, 
        required: [true, 'Description cannot be empty'],
        min:10
    },
    image: {
        type: String, 
        required: [true, 'Image cannot be empty'],
        min:10
    },
})

export const ServiceModel = mongoose.models.ServiceSchema || mongoose.model('Service', ServiceSchema)