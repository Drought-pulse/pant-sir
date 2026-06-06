import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import Publication from "@/models/Publication";

await connectDB(); // Ensure MongoDB is connected

// ✅ GET: Fetch all publications
export async function GET() {
  try {
    const publications = await Publication.find({});
    return NextResponse.json(publications, { status: 200 });
  } catch (error) {
    console.error("Error fetching publications:", error); // 🔴 Log the error
    return NextResponse.json({ error: "Failed to fetch publications" }, { status: 500 });
  }
}

// ✅ POST: Create a new publication
export async function POST(req: Request) {
  try {
    const { title, authors, journal, year, dois, otherInfo, pdfUrl } = await req.json();

    // Basic required fields check (year is now optional)
    if (!title || !authors || !journal) {
      return NextResponse.json({ error: "Title, authors, and journal are required" }, { status: 400 });
    }

    // Create the publication with optional year
    const newPublication = await Publication.create({ title, authors, journal, year, dois, otherInfo, pdfUrl });

    return NextResponse.json(newPublication, { status: 201 });
  } catch (error) {
    console.error("Error creating publication:", error); // 🔴 Log the error
    return NextResponse.json({ error: "Failed to create publication" }, { status: 500 });
  }
}