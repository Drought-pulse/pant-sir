import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import Certification from "@/models/Certification";

// Fetch a specific certification by ID
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  try {
    const certification = await Certification.findById((await params).id); // Await params to get the ID
    if (!certification) {
      return NextResponse.json({ message: "Certification not found" }, { status: 404 });
    }
    return NextResponse.json(certification, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Update a certification by ID
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  try {
    const data = await req.json();
    const updatedCertification = await Certification.findByIdAndUpdate(
      (await params).id, // Await params to get the ID
      data,
      { new: true, runValidators: true } // Apply validation rules
    );

    if (!updatedCertification) {
      return NextResponse.json({ message: "Certification not found" }, { status: 404 });
    }
    return NextResponse.json(updatedCertification, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Delete a certification by ID
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  try {
    const deletedCertification = await Certification.findByIdAndDelete((await params).id); // Await params to get the ID
    if (!deletedCertification) {
      return NextResponse.json({ message: "Certification not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Certification deleted successfully" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}