import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import ScholarsAwarded from "@/models/ScholarsAwareded";

// Create a new awarded scholar
export async function POST(req: Request) {
  await connectDB();
  try {
    const data = await req.json();
    const newScholar = new ScholarsAwarded(data);
    await newScholar.save();
    return NextResponse.json(newScholar, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Fetch all awarded scholars
export async function GET() {
  await connectDB();
  try {
    const scholars = await ScholarsAwarded.find();
    return NextResponse.json(scholars, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
