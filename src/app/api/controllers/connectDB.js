import mongoose from "mongoose"

console.log(`process.env.MONGODB_URI: ${process.env.NEXT_PUBLIC_MONGO_URI}`);
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI)
    } catch (error) {
        console.log('error ', error.message, error)
    }
}