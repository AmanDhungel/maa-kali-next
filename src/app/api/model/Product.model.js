import mongoose from "mongoose"

export const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be empty'],
        minLength: 1
    },
    description: {
        type: String,
        required: [true, 'Description cannot be empty'],
    },
    image: {
        type: [String],
        required: [true, 'Image cannot be empty'],
    },
    price: {
        type: Number,
        required: [true, 'Price cannot be empty'],
    },
    color: {
        type: String,
        required: [true, 'Color cannot be empty'],
    },
})

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema)

export default Product