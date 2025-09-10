// models/Report.model.js
import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String }, // URL of uploaded image (Cloudinary) or data URL fallback
    voiceText: { type: String }, // If you capture voice -> store the transcript here
    userId: { type: String, required: true }, // Supabase user id (sub)
    status: { type: String, default: "pending" }, // pending / verified / resolved etc.
  },
  { timestamps: true }
);

export default mongoose.models.Report || mongoose.model("Report", ReportSchema);
