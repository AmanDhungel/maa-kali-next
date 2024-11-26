import { connectDB } from "../../controllers/connectDB";
import Blog from "../../model/Blog.model";
import Gallery from "../../model/Gallery.model";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const gallery = await Gallery.findByIdAndDelete(params.id);

        if (!gallery) {
            return new Response(JSON.stringify({ message: "Gallery not found" }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: "Gallery Deleted Successfully" }), { 
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