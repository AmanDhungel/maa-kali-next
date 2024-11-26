import Service from "@/app/api/model/Service.model";
import { verifyToken } from "../controllers/verifyToken";

export async function POST(req: Request){
    const verificationResponse = await verifyToken(req); 
    if (verificationResponse?.status === 401) {
        return verificationResponse; 
      }  
    try {
        const {title, description} = await req.json();
        const newService = new Service({title, description});
        await newService.save();
        return new Response(JSON.stringify({message: "Service Created Successfully"}), {status: 201})
    } catch (error) {
        return new Response(JSON.stringify({message: "Something went wrong"}), {status: 500})
    }
}
export async function GET(){

    try {
        const service = await Service.find();
        return new Response(JSON.stringify(service), {  status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({message: "Something went wrong trying to get service"}), {status: 500})
    }
}


