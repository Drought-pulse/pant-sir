import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import Publication from "@/models/Publication";

await connectDB(); // Ensure MongoDB is connected

// ✅ GET: Fetch a single publication by ID
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    // Validate the ID
    if (!id) {
      return NextResponse.json({ error: "Publication ID is required" }, { status: 400 });
    }

    const publication = await Publication.findById(id);

    if (!publication) {
      return NextResponse.json({ error: "Publication not found" }, { status: 404 });
    }

    return NextResponse.json(publication, { status: 200 });
  } catch (error) {
    console.error("Error fetching publication:", error);
    return NextResponse.json({ error: "Failed to fetch publication" }, { status: 500 });
  }
}

// ✅ PUT: Update a publication by ID
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    // Validate the ID
    if (!id) {
      return NextResponse.json({ error: "Publication ID is required" }, { status: 400 });
    }

    const data = await req.json();

    // Validate the request body
    if (!data.title || !data.authors || !data.journal) {
      return NextResponse.json(
        { error: "Title, authors, and journal are required" },
        { status: 400 }
      );
    }

    const updatedPublication = await Publication.findByIdAndUpdate(id, data, { new: true });

    if (!updatedPublication) {
      return NextResponse.json({ error: "Publication not found" }, { status: 404 });
    }

    return NextResponse.json(updatedPublication, { status: 200 });
  } catch (error) {
    console.error("Error updating publication:", error);
    return NextResponse.json({ error: "Failed to update publication" }, { status: 500 });
  }
}

// ✅ DELETE: Delete a publication by ID
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    // Validate the ID
    if (!id) {
      return NextResponse.json({ error: "Publication ID is required" }, { status: 400 });
    }

    const deletedPublication = await Publication.findByIdAndDelete(id);

    if (!deletedPublication) {
      return NextResponse.json({ error: "Publication not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Publication deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting publication:", error);
    return NextResponse.json({ error: "Failed to delete publication" }, { status: 500 });
  }
}