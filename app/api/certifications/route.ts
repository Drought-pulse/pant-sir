import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import Certification from "@/models/Certification";

await connectDB(); // Ensure MongoDB is connected

// ✅ GET: Fetch all certifications
export async function GET() {
  try {
    const certifications = await Certification.find({});
    return NextResponse.json(certifications, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch certifications" }, { status: 500 });
  }
}

// ✅ POST: Create a new certification
export async function POST(req: Request) {
  try {
    const { title, pdfUrl, certificateLink } = await req.json();

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const newCertification = await Certification.create({ title, pdfUrl, certificateLink });

    return NextResponse.json(newCertification, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create certification" }, { status: 500 });
  }
}
