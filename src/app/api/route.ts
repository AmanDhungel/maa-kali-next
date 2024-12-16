import {connectDB} from '@/app/api/controllers/connectDB.js'
import User from '@/app/api/model/User.model.js'

export async function GET(){
    return new Response(JSON.stringify({message : 'hello'}))
}

export async function POST(req: Request) {
    await connectDB();
    try {
        const { name, email, password } = await req.json();
        const newUser = new User({ name, email, password });
        await newUser.save();
        return new Response(JSON.stringify({ message: "User Created Successfully" }), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }

}
