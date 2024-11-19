import { NextResponse } from 'next/server'
import { verifyToken } from '@/app/api/controllers/verifyToken';

export const config = {
  matcher: ['/admin/:path*', '/:path*'],
}

export async function middleware(req: Request) {
    const verificationResponse = await verifyToken(req);
    if (verificationResponse.status === 401 && req.nextUrl.pathname.includes('/admin')) {
        return NextResponse.redirect(new URL('/login', req.url))
      }  else if (verificationResponse.status === 200 && req.nextUrl.pathname === '/login') {
        return NextResponse.redirect(new URL('/admin/blog', req.url))
      }
}


