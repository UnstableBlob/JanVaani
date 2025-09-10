// lib/cloudinary.js
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function uploadImageBase64(
  base64String,
  folder = "janvaani_reports"
) {
  // base64String = "data:image/jpeg;base64,...."
  const res = await cloudinary.uploader.upload(base64String, {
    folder,
    resource_type: "image",
    transformation: [{ quality: "auto" }],
  });
  return res.secure_url; // return URL
}
