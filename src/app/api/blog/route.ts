/* eslint-disable */
import { NextRequest } from "next/server";

import Blog from "@/app/api/model/Blog.model";

import { connectDB } from "../controllers/connectDB";
import { verifyToken } from "../controllers/verifyToken";

export async function POST(req: NextRequest) {
  await connectDB();
  const verificationResponse = await verifyToken();
  if (verificationResponse?.status === 401) {
    return verificationResponse;
  }
  try {
    await connectDB();
    const body = await req.json();
    const { title, description, shortDescription, image } = await body;
    const newBlog = new Blog({ title, description, shortDescription, image });
    await newBlog.save();
    return new Response(
      JSON.stringify({ message: "Blog Created Successfully" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const blog = await Blog.find();
    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Something went wrong", error }),
      { status: 500 }
    );
  }
}
