import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, 'Title cannot be empty'],
        min: 10
    },
    title: {
        type: String,
        required: [true, 'Title cannot be empty'],
        min: 10
    },
    description: {
        type: String,
        required: [true, 'Description cannot be empty'],
        min: 10
    },

})

const Service = mongoose.models.Service || mongoose.model('Service', ServiceSchema)

export default Service