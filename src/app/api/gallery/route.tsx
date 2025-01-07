import Gallery from "@/app/api/model/Gallery.model";
import { connectDB } from "../controllers/connectDB";

export async function POST(req: Request) {
  await connectDB();
  try {
    // Check if the request content-type is JSON
    const contentType = req.headers.get("content-type");
    if (contentType !== "application/json") {
      return new Response(JSON.stringify({ message: "Invalid content type" }), {
        status: 400,
      });
    }

    const { image } = await req.json();

    // Check if required fields are present
    if (!image) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        {
          status: 400,
        }
      );
    }

    // Save the contact message
    const gallery = new Gallery({ image });
    await gallery.save();

    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    const gallery = await Gallery.find();
    return new Response(JSON.stringify(gallery), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Something went wrong while getting contact",
        error,
      }),
      { status: 500 }
    );
  }
}
