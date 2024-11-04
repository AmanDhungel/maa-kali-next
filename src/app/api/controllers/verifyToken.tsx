import { NextRequest } from 'next/server'; 
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

// Middleware to verify JWT token
export async function verifyToken(req: NextRequest) {
  try {
    // Parse cookies from the request
    const cookies = cookie.parse(req.headers.get('cookie') || '');
    const token = cookies.token; // Extract the token from the cookies

    if (!token) {
      return new Response(
        JSON.stringify({ message: "No token found, please login" }),
        { status: 401 }
      );
    }

    // Verify the token using the same secret key used to sign it
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "yourSecretKey" // Same secret used when creating the token
    );

    // Token is valid, return decoded token information (for example, user ID)
    return new Response(
      JSON.stringify({ message: "Token is valid", user: decoded }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Invalid or expired token", error: error.message }),
      { status: 401 }
    );
  }
}
