import Contact from '@/app/api/model/Contactus.model';
import { connectDB } from '../controllers/connectDB';

export async function POST(req: Request) {
    await connectDB();
    try {
        // Check if the request content-type is JSON
        const contentType = req.headers.get('content-type');
        if (contentType !== 'application/json') {
            return new Response(JSON.stringify({ message: "Invalid content type" }), {
                status: 400,
            });
        }

        const { name, phonenumber, message, subject } = await req.json();

        // Check if required fields are present
        if (!name || !phonenumber || !message || !subject) {
            return new Response(JSON.stringify({ message: "All fields are required" }), {
                status: 400,
            });
        }

        // Save the contact message
        const contact = new Contact({ name, phonenumber, message, subject });
        await contact.save();

        return new Response(JSON.stringify({ message: "Message sent successfully" }), {
            status: 200,
        });
    } catch (error) {
        console.error("Error in contact submission:", error);
        return new Response(JSON.stringify({ message: "Something went wrong", error: error.message }), {
            status: 500,
        });
    }
}


export async function GET() {
    try {
        const contact = await Contact.find();
        return new Response(JSON.stringify(contact), {  status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Something went wrong while getting contact", error }), { status: 500 });
    }
}   