/* eslint-disable */
import { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import cookie from 'cookie';

// Middleware to verify JWT token
export async function verifyToken(req: NextRequest): Promise<any> {
  // Parse cookies from the request headers
  const cookies = cookie.parse(req.headers.get('cookie') || '');
  const token = cookies.token; // Extract the token from cookies

  // Check if token exists
  if (!token) {
    return new Response(
      JSON.stringify({ message: "No token found, please login" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  // Validate the presence of the JWT secret
  if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET is not defined in environment variables.');
    throw new Error('JWT_SECRET is missing');
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    // Verify the token using `jose`
    const { payload } = await jwtVerify(token, secret);
    return payload; // Successfully verified
  } catch (error) {
    console.error('Token verification failed:', error);

    // Return a 403 response for invalid token
    return new Response(
      JSON.stringify({ message: "Invalid token, access denied" }),
      { status: 403, headers: { "Content-Type": "application/json" } }
    );
  }
}
