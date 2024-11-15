import Blog from "@/app/api/model/Blog.model";
import { verifyToken } from "../controllers/verifyToken";
import { connectDB } from "../controllers/connectDB";

export async function POST(req: Request) {
    const verificationResponse = await verifyToken(req);
    if (verificationResponse.status === 401) {
        return verificationResponse; 
      }  
    try {
        await connectDB();
        const body = await req.json();
        const {title, description, shortDescription, image} = await body;
        const newBlog = new Blog({title, description, shortDescription, image});
        await newBlog.save();
        return new Response(JSON.stringify({ message: "Blog Created Successfully" }), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Something went wrong", error }), { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const blog = await Blog.find();
        return new Response(JSON.stringify(blog), {  status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Something went wrong", error }), { status: 500 });
    }
}


