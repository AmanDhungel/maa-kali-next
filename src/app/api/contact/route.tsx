import Contact from '@/app/api/model/Contactus.model';
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const contact = new Contact(body);
        await contact.save();
        return new Response(JSON.stringify({ message: "Message sent successfully" }), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Something went wrong" }), {
            status: 500,
        });
    }
}