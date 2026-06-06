// import mongoose, { Schema, Document } from "mongoose";

// interface AwardedScholar extends Document {
//   name: string;
//   title: string;
//   supervisors: string[];
//   yearOfCompletion: number;
//   presentAffiliation: string;
// }

// const scholarsAwardedSchema = new Schema<AwardedScholar>({
//   name: { type: String, required: true },
//   title: { type: String, required: true },
//   supervisors: [{ type: String, required: true }],
//   yearOfCompletion: { type: Number, required: true },
//   presentAffiliation: { type: String, required: true },
// });

// export default mongoose.models.ScholarsAwarded ||
//   mongoose.model<AwardedScholar>("ScholarsAwarded", scholarsAwardedSchema);




import mongoose, { Schema, Document } from "mongoose";

interface AwardedScholar extends Document {
  name: string;
  title: string;
  supervisors: string[];
  yearOfCompletion: number;
  presentAffiliation: string;
  imageUrlAwarded?: string; // Optional field for the image URL
}

const scholarsAwardedSchema = new Schema<AwardedScholar>({
  name: { type: String, required: true },
  title: { type: String, required: true },
  supervisors: [{ type: String, required: true }],
  yearOfCompletion: { type: Number, required: true },
  presentAffiliation: { type: String, required: true },
  imageUrlAwarded: { type: String, required: false }, // Image URL field
});

export default mongoose.models.ScholarsAwarded ||
  mongoose.model<AwardedScholar>("ScholarsAwarded", scholarsAwardedSchema);
