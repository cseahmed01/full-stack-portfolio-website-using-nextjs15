import { NextResponse } from 'next/server'

export function middleware(req) {
  console.log("Middleware triggered!"); // Check if this log shows up
  console.log("Request Pathname:", req.nextUrl.pathname); // Log the requested path

  const token = req.cookies.get('token')?.value || req.headers.get('authorization')?.split(' ')[1];
  
  console.log("Token:", token); // Log the token value
  
  if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next(); // Allow request to proceed
}

export const config = {
  matcher: ['/dashboard', '/about'],
}
