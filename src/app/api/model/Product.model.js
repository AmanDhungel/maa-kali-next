
export const ProductSchema = new mongoose.Schema({
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
    image: {
        type: [],
        required: [true, 'Image cannot be empty'],
    },
    price: {
        type: Number,
        required: [true, 'Price cannot be empty'],
        min: 10
    },
    color: {
        type: String,
        required: [true, 'Color cannot be empty'],
        min: 10
    },
})