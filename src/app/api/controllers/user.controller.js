import mongoose from "mongoose";
import { connectDB } from "./connectDB"

export const getAllProduct = async() => {
 await connectDB();

}