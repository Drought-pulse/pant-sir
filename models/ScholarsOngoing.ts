// import mongoose, { Schema, Document } from "mongoose";

// interface OngoingScholar extends Document {
//   name: string;
//   title: string;
//   supervisors: string[];
//   yearOfJoining: number;
// }

// const scholarsOngoingSchema = new Schema<OngoingScholar>({
//   name: { type: String, required: true },
//   title: { type: String, required: true },
//   supervisors: [{ type: String, required: true }],
//   yearOfJoining: { type: Number, required: true },
// });

// export default mongoose.models.ScholarsOngoing ||
//   mongoose.model<OngoingScholar>("ScholarsOngoing", scholarsOngoingSchema);


import mongoose, { Schema, Document } from "mongoose";

interface OngoingScholar extends Document {
  name: string;
  title: string;
  supervisors: string[];
  yearOfJoining: number;
  imageUrlOngoing?: string; // Optional field for the image URL
}

const scholarsOngoingSchema = new Schema<OngoingScholar>({
  name: { type: String, required: true },
  title: { type: String, required: true },
  supervisors: [{ type: String, required: true }],
  yearOfJoining: { type: Number, required: true },
  imageUrlOngoing: { type: String, required: false }, // Image URL field
});

export default mongoose.models.ScholarsOngoing ||
  mongoose.model<OngoingScholar>("ScholarsOngoing", scholarsOngoingSchema);
