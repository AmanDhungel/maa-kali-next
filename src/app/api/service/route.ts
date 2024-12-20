import Service from "@/app/api/model/Service.model";
import { verifyToken } from "../controllers/verifyToken";
import { connectDB } from "../controllers/connectDB";

export async function POST(req: Request) {
  await connectDB();
  const verificationResponse = await verifyToken(req);
  if (verificationResponse?.status === 401) {
    return verificationResponse;
  }
  try {
    const { title, description } = await req.json();
    const newService = new Service({ title, description });
    await newService.save();
    return new Response(
      JSON.stringify({ message: "Service Created Successfully" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: `Something went wrong `, error }),
      { status: 500 }
    );
  }
}
export async function GET() {
  await connectDB();
  try {
    const service = await Service.find();
    return new Response(JSON.stringify(service), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: `Something went wrong trying to get service`,
        error,
      }),
      { status: 500 }
    );
  }
}
