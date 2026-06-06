import mongoose from "mongoose";

const PublicationSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Title of the publication (required)
  authors: { type: String, required: true }, // Authors' names (required)
  journal: { type: String, required: true }, // Journal or conference name (required)
  year: { type: Number, required: false }, // Year of publication (optional)
  dois: { type: String, required: false }, // DOI (optional)
  otherInfo: { type: String, required: false }, // Additional details (optional)
  pdfUrl: { type: String, required: false }, // PDF URL (optional)
});

export default mongoose.models.Publication || mongoose.model("Publication", PublicationSchema);