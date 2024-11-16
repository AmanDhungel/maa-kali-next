import { connectDB } from "../controllers/connectDB";
import User from "../model/User.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // Make sure jwt is installed

export async function POST(req: Request) {
  connectDB();
  const body = await req.json();

  try {
    const user = await User.findOne({ email: body.email });
    if (!user)
      return new Response(
        JSON.stringify({ message: "Invalid Email or Password" }),
        { status: 401 }
      );

    const validPassword = await bcrypt.compare(body.password, user.password);
    if (!validPassword)
      return new Response(
        JSON.stringify({ message: "Invalid Email or Password" }),
        { status: 401 }
      );

    // Generate JWT token
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET || "yourSecretKey", 
      { expiresIn: "1h" } 
    );

    // Set the token as a cookie
    const cookieOptions = [
      `token=${token}`,
      'HttpOnly', // Makes it inaccessible to JavaScript (for security)
      'Path=/', // The path where the cookie is accessible
      'Max-Age=3600', // 1 hour in seconds (same as the JWT expiration)
      'SameSite=Strict', // Protects against CSRF
      'Secure' // Ensures the cookie is only sent over HTTPS
    ].join('; ');

    return new Response(
      JSON.stringify({ message: "logged in successfully" }),
      {
        status: 200,
        headers: {
          'Set-Cookie': cookieOptions, // Set the cookie in the response
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Could not login", error: error }),
      { status: 500 }
    );
  }
}
