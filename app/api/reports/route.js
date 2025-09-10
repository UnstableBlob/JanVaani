// app/api/reports/route.js
import dbConnect from "../../lib/mongodb";
import Report from "../../models/reportModel.js";
import { verifySupabaseToken } from "../../lib/supaBaseAdmin";
import { NextResponse } from "next/server";
import { uploadImageBase64 } from "../../lib/cloudinary"; // optional

// GET -> return recent reports of the currently authenticated user
export async function GET(req) {
  // Expect Authorization: Bearer <access_token>
  const authHeader = req.headers.get("authorization") || "";
  const accessToken = authHeader.replace("Bearer ", "").trim();

  const user = await verifySupabaseToken(accessToken);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await dbConnect();

  // get reports for this user sorted by createdAt desc (recent first)
  const reports = await Report.find({ userId: user.id })
    .sort({ createdAt: -1 })
    .lean();

  return NextResponse.json({ reports });
}

// POST -> create a new report (must be authenticated)
export async function POST(req) {
  const authHeader = req.headers.get("authorization") || "";
  const accessToken = authHeader.replace("Bearer ", "").trim();

  const user = await verifySupabaseToken(accessToken);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { title, description, imageBase64, imageUrl, voiceText } = body;

  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  await dbConnect();

  let finalImageUrl = imageUrl || null;

  // If client provided a base64 image and Cloudinary is configured, upload it
  if (imageBase64) {
    try {
      if (
        process.env.CLOUDINARY_CLOUD_NAME &&
        process.env.CLOUDINARY_API_KEY &&
        process.env.CLOUDINARY_API_SECRET
      ) {
        finalImageUrl = await uploadImageBase64(imageBase64);
      } else {
        // fallback - store data URL (works but big)
        finalImageUrl = imageBase64;
      }
    } catch (err) {
      console.error("Image upload failed:", err);
      return NextResponse.json(
        { error: "Image upload failed" },
        { status: 500 }
      );
    }
  }

  const newReport = await Report.create({
    title,
    description,
    imageUrl: finalImageUrl,
    voiceText: voiceText || null,
    userId: user.id,
  });

  return NextResponse.json(
    { message: "Report created", report: newReport },
    { status: 201 }
  );
}
