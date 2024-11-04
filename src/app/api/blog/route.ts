import Blog from "@/app/api/model/Blog.model";
import { verifyToken } from "../controllers/verifyToken";

export async function POST(req: Request) {
    const verificationResponse = await verifyToken(req); 
    if (verificationResponse.status === 401) {
        return verificationResponse; 
      }  
    try {
        const body = await req.json();
        const newBlog = new Blog(body);
        await newBlog.save();
        return new Response(JSON.stringify({ message: "Blog Created Successfully" }), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
}

export async function GET() {
    try {
        const blog = await Blog.find();
        return new Response(JSON.stringify(blog), {  status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
}