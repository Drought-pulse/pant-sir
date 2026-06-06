import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/Officials"; // Import the User model
import connectDB from "@/lib/dbConnect";

export async function POST(req:Request) {
  try {
    // Parse request body
    const { email, password, confirmPassword } = await req.json();

    // Basic validations
    if (!email || !password || !confirmPassword) {
      console.error("Missing required fields:", { email, password, confirmPassword });
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    if (password !== confirmPassword) {
      console.error("Passwords do not match:", { password, confirmPassword });
      return NextResponse.json({ message: "Passwords do not match" }, { status: 400 });
    }

    // Connect to MongoDB
    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.error("User with this email already exists:", email);
      return NextResponse.json({ message: "Email is already in use" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ email, password: hashedPassword });

    // Save user to database
    await newUser.save();

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error during sign-up:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
