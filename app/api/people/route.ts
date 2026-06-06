import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import People from "@/models/People";

await connectDB();

// GET: Fetch person by ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const person = await People.findById(id);
    if (!person) {
      return NextResponse.json({ error: "Person not found" }, { status: 404 });
    }
    return NextResponse.json(person, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch person" }, { status: 500 });
  }
}

// POST: Create a new person
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
