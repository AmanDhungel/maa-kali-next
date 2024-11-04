import User from "../model/User.model";
import { connectDB } from "../controllers/connectDB";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    connectDB();
    try {
        const { username, password,email } = await req.json();
        const userExist = await User.findOne({ email });
        if (userExist) {
            return new Response(
                JSON.stringify({ message: "User already exists" }),
                { status: 400 }
            );
        }
        const saveUser = new User({ username, password, email });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        saveUser.password = hashedPassword;
        await saveUser.save();
        return new Response(JSON.stringify({ message: "User Created Successfully" }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Something went wrong", error: error }), { status: 500 });
    }
}