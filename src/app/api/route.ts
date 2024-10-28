import mongoose from "mongoose";

const connectDB = mongoose.connect(process.env.MONGO_URI);

export async function GET(){
    return new Response(JSON.stringify({message : 'hello'}))
}