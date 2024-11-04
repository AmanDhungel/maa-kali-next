import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
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
    author: {
        type: String, 
        required: [true, 'Author cannot be empty'],
        min:10
    },
})

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;