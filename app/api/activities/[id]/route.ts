import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import ModelTest from "@/models/Activities";

// Fetch a specific model test by ID
export async function GET(req: Request, { params }: { params:Promise<{ id: string }>}) {
  await connectDB();
  try {
    const test = await ModelTest.findById((await params).id); // No need to await params
    if (!test) {
      return NextResponse.json({ message: "Activities not found" }, { status: 404 });
    }
    return NextResponse.json(test, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Update a model test by ID
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  try {
    const data = await req.json();
    const updatedTest = await ModelTest.findByIdAndUpdate((await params).id, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedTest) {
      return NextResponse.json({ message: "Activities not found" }, { status: 404 });
    }
    return NextResponse.json(updatedTest, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Delete a model test by ID
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }>}) {
  await connectDB();
  try {
    const deletedTest = await ModelTest.findByIdAndDelete((await params).id);
    if (!deletedTest) {
      return NextResponse.json({ message: "Activities not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Activities deleted successfully" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
