import Service from "@/app/api/model/Service.model";

export async function POST(req: Request){
    try {
        const {title, description, image} = await req.json();
        const newService = new Service({title, description, image});
        await newService.save();
        return new Response(JSON.stringify({message: "Service Created Successfully"}), {status: 201})
    } catch (error) {
        return new Response(JSON.stringify({message: "Something went wrong"}), {status: 500})
    }
}