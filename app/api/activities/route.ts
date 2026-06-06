// /app/api/model-tests/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import ModelTest from "@/models/Activities";

// Create a new model test
export async function POST(req: Request) {
  await connectDB();
  try {
    const data = await req.json();
    const newTest = new ModelTest(data);
    await newTest.save();
    return NextResponse.json(newTest, { status: 201 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Fetch all model tests
export async function GET() {
  await connectDB();
  try {
    const tests = await ModelTest.find();
    return NextResponse.json(tests, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}