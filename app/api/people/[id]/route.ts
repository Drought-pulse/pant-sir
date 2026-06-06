import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import People from "@/models/People";

await connectDB(); // Ensure DB is connected

// ✅ PUT: Update a person's details
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const { name, designation, imageUrl } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const updatedPerson = await People.findByIdAndUpdate(
      id,
      { name, designation, imageUrl },
      { new: true } // Return the updated document
    );

    if (!updatedPerson) {
      return NextResponse.json({ error: "Person not found" }, { status: 404 });
    }

    return NextResponse.json(updatedPerson, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update person" }, { status: 500 });
  }
}

// ✅ DELETE: Remove a person from the database
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const deletedPerson = await People.findByIdAndDelete(id);

    if (!deletedPerson) {
      return NextResponse.json({ error: "Person not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Person deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete person" }, { status: 500 });
  }
}
