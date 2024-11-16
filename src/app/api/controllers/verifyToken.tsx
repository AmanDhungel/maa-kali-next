import { NextRequest } from 'next/server'; 
import {jwtVerify} from 'jose';
import cookie from 'cookie';

// Middleware to verify JWT token
export async function verifyToken(req: NextRequest) {
    const cookies = cookie.parse(req.headers.get('cookie') || '');
    const token = await cookies.token; // Extract the token from the cookies
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    if (!token) {
      return new Response(
        JSON.stringify({ message: "No token found, please login" }),
        { status: 401 }
      );
    }

    try {
      const { payload } = await jwtVerify(token, secret);
      return payload; // Successfully verified
    } catch (error) {
      console.error('Token verification failed:', error);
      throw new Error('Invalid token');
    }
}
