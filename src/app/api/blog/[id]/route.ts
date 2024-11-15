import { connectDB } from "../../controllers/connectDB";
import Blog from "../../model/Blog.model";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const blog = await Blog.findByIdAndDelete(params.id);

        if (!blog) {
            return new Response(JSON.stringify({ message: "Blog not found" }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: "Blog Deleted Successfully" }), { 
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error('error', error);
        return new Response(JSON.stringify({ message: "Something went wrong", error }), { 
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}