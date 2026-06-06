import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import ScholarsAwarded from "@/models/ScholarsAwareded";

// Update an awarded scholar
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  try {
    const updateData = await req.json();
    const updatedScholar = await ScholarsAwarded.findByIdAndUpdate((await params).id, updateData, { new: true });

    if (!updatedScholar) return NextResponse.json({ error: "Scholar not found" }, { status: 404 });

    return NextResponse.json(updatedScholar, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Delete an awarded scholar
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  try {
    const deletedScholar = await ScholarsAwarded.findByIdAndDelete((await params).id);

    if (!deletedScholar) return NextResponse.json({ error: "Scholar not found" }, { status: 404 });

    return NextResponse.json({ message: "Scholar deleted successfully" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
