import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import ScholarsOngoing from "@/models/ScholarsOngoing";

// export async function POST(req: Request) {
//   await connectDB();
//   try {
//     const data = await req.json();
//     const newScholar = new ScholarsOngoing(data);
//     await newScholar.save();
//     return NextResponse.json(newScholar, { status: 201 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

export async function POST(req: Request) {
  await connectDB();
  try {
    const data = await req.json();
    console.log("Received Data in API:", data); // Debugging log

    const newScholar = new ScholarsOngoing(data);
    await newScholar.save();
    return NextResponse.json(newScholar, { status: 201 });
  } catch (error: any) {
    console.error("Error Saving Scholar:", error); // Log the actual error
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}



// Fetch all ongoing scholars
export async function GET() {
  await connectDB();
  try {
    const scholars = await ScholarsOngoing.find();
    return NextResponse.json(scholars, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
