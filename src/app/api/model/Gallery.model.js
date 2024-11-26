import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    image: {
        type: [String], 
        required: [true, 'Title cannot be empty'],
        minLength: 10
    },
});

const Gallery = mongoose.models.Gallery || mongoose.model('Gallery', gallerySchema);

export default Gallery;

