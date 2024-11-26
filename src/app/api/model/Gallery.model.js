import mongoose from "mongoose";

const gallery = new mongoose.Schema({
    image: {
        type: [String], 
        required: [true, 'Title cannot be empty'],
        minLength: 10
    },
});

const Gallery = mongoose.models.gallery || mongoose.model('Gallery', gallery);

export default Gallery;
