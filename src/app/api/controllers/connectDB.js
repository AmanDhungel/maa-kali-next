import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI)
    } catch (error) {
        console.log('error ', error.message, error)
    }
}