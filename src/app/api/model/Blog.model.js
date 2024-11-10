import mongoose from "mongoose";

// Define the schema
const BlogSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, 'Title cannot be empty'],
        minLength: 10
    },
    shortDescription: {
        type: String, 
        required: [true, 'Short Description cannot be empty'],
        minLength: 10
    },
    description: {
        type: String, 
        required: [true, 'Description cannot be empty'],
        minLength: 10
    },
    image: {
        type: [], 
        required: [true, 'Image cannot be empty'],
    }
});

// Model definition
const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;
