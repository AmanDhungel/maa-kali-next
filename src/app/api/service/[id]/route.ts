import { connectDB } from "../../controllers/connectDB";
import Service from "../../model/Service.model";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const blog = await Service.findByIdAndDelete(params.id);

        if (!blog) {
            return new Response(JSON.stringify({ message: "Service not found" }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: "Service Deleted Successfully" }), { 
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