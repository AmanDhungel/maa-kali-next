import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI)
    } catch (error) {
        NextResponse.error(error)
    }
}