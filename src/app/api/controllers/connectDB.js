import mongoose from "mongoose"

console.log(`process.env.MONGODB_URI: ${process.env.NEXT_PUBLIC_MONGO_URI}`);
export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })        
    } catch (error) {
        console.log(error.message)
    }
}