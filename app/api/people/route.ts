import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import People from "@/models/People";

await connectDB(); // Ensure DB is connected

// ✅ GET: Fetch all people
export async function GET() {
  try {
    const people = await People.find({});
    return NextResponse.json(people, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch people" }, { status: 500 });
  }
}

// ✅ POST: Create a new person
export async function POST(req: Request) {
  try {
    const { name, designation, imageUrl } = await req.json();

    if (!name || !designation || !imageUrl) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newPerson = await People.create({ name, designation, imageUrl });

    return NextResponse.json(newPerson, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create person" }, { status: 500 });
  }
}
