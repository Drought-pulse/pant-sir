import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware executed");

  // Get the auth token from cookies
  const authToken = request.cookies.get("auth-token")?.value;

  // If authToken is missing and user is trying to access a protected route, redirect to login
  if (!authToken && protectedRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If authToken exists and user is trying to access the login page, redirect to /officialspage
  if (authToken && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/officialspage", request.url));
  }

  // Allow access if no conditions are met
  return NextResponse.next();
}

// Define protected routes that require authentication
const protectedRoutes = [ 
  "/createpeople", 
  "/managepeople",
  "/signup",
  "/scholars-form",
  "/addactivities",
  "/updateactivities",
  "/officialspage",   
  "/createcertifications"  , 
  "/managecertifications" , 
  "/createpublications" , 
  "/managepublications"
  
];

export const config = {
  matcher: ["/login","/createcertifications","/managepublications","/createpublications","/managecertifications","/createpeople","/managepeople", "/signup", "/scholars-form/:path*", "/addactivities", "/updateactivities", "/officialspage"],
};

