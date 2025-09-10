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

// import { NextResponse } from "next/server";
// import { verifySupabaseToken } from "@/app/lib/supaBaseAdmin";
// import connectDB from "../../lib/mongodb";
// import Report from "../../models/Report";
// import cloudinary from "../../lib/cloudinary";

// // POST - Create new report
// export async function POST(req) {
//   try {
//     const authHeader = req.headers.get("authorization");
//     if (!authHeader) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const token = authHeader.split(" ")[1];
//     const user = await verifySupabaseToken(token);
//     if (!user) {
//       return NextResponse.json({ error: "Invalid token" }, { status: 401 });
//     }

//     // parse FormData
//     const formData = await req.formData();
//     const title = formData.get("title");
//     const description = formData.get("description");
//     const file = formData.get("image");

//     let imageUrl = null;
//     if (file && typeof file === "object") {
//       // convert Blob to buffer
//       const arrayBuffer = await file.arrayBuffer();
//       const buffer = Buffer.from(arrayBuffer);

//       // upload to Cloudinary
//       const uploadRes = await new Promise((resolve, reject) => {
//         const stream = cloudinary.uploader.upload_stream(
//           { folder: "reports" },
//           (err, result) => {
//             if (err) reject(err);
//             else resolve(result);
//           }
//         );
//         stream.end(buffer);
//       });

//       imageUrl = uploadRes.secure_url;
//     }

//     await connectDB();

//     const newReport = await Report.create({
//       title,
//       description,
//       imageUrl,
//       userId: user.id,
//       status: "pending",
//     });

//     return NextResponse.json({ report: newReport }, { status: 201 });
//   } catch (err) {
//     console.error("POST /api/reports error:", err);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }

// // GET - Fetch all reports of logged-in user
// export async function GET(req) {
//   try {
//     const authHeader = req.headers.get("authorization");
//     if (!authHeader) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const token = authHeader.split(" ")[1];
//     const user = await verifySupabaseToken(token);
//     if (!user) {
//       return NextResponse.json({ error: "Invalid token" }, { status: 401 });
//     }

//     await connectDB();
//     const reports = await Report.find({ userId: user.id }).sort({
//       createdAt: -1,
//     });

//     return NextResponse.json({ reports }, { status: 200 });
//   } catch (err) {
//     console.error("GET /api/reports error:", err);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }
