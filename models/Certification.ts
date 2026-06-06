import mongoose, { Schema, Document } from "mongoose";

// Define the interface
export interface ICertification extends Document {
  title: string;
  pdfUrl?: string;
  certificateLink?: string;
}

// Create the schema
const CertificationSchema = new Schema<ICertification>(
  {
    title: { type: String, required: true },
    pdfUrl: { type: String, default: "" },
    certificateLink: { type: String, default: "" },
  },
  { timestamps: true }
);

// Ensure the model is created only once
export default mongoose.models.Certification || mongoose.model<ICertification>("Certification", CertificationSchema);
