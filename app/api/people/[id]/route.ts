import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import People from "@/models/People";

export const dynamic = 'force-dynamic';

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

// PUT: Update person by ID
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { name, designation, imageUrl } = await request.json();
    const updatedPerson = await People.findByIdAndUpdate(
      id,
      { name, designation, imageUrl },
      { new: true }
    );
    if (!updatedPerson) {
      return NextResponse.json({ error: "Person not found" }, { status: 404 });
    }
    return NextResponse.json(updatedPerson, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update person" }, { status: 500 });
  }
}

// DELETE: Delete person by ID
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deletedPerson = await People.findByIdAndDelete(id);
    if (!deletedPerson) {
      return NextResponse.json({ error: "Person not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Person deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete person" }, { status: 500 });
  }
}
