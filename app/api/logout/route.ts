import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";

connectDB();

export async function POST(request: NextRequest) {
  // Clear the auth-token cookie to log out the user
  const response = NextResponse.json({ message: "Logged out" }, { status: 200 });

  response.headers.set(
    "Set-Cookie",
    "auth-token=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax"
  );

  return response;
}
