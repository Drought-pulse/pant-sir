import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import User from "@/models/Officials"; // Import the User model
import connectDB from "@/lib/dbConnect";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "your-secret-key"; // Ensure this is set securely

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Validate required fields
  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required" },
      { status: 400 }
    );
  }

  try {
    // Connect to the database
    await connectDB();

    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user || !user.password) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    // Set cookie options
    const cookieOptions = [
      `auth-token=${token}`,
      `HttpOnly`,
      `Path=/`,
      `Max-Age=${60 * 60}`, // 1 hour expiration
      process.env.NODE_ENV === "production" ? `Secure; SameSite=Strict` : `SameSite=Lax`,
    ].join("; ");

    // Send response with token in cookie
    const response = NextResponse.json(
      { message: "Login successful", user: { email: user.email, role: user.role } },
      { status: 200 }
    );

    response.headers.set("Set-Cookie", cookieOptions);

    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
