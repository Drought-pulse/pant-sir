import mongoose from "mongoose";

const ModelTestSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    unitOutput: { type: String, required: true },
    customer: { type: String, required: true },
    machineType: { type: String, required: true },
    yearOfTest: { 
      type: String, // Change this to String instead of Number
      required: true, 
      match: [/^\d{4}-\d{4}$/, 'Year range must be in the format YYYY-YYYY'] // Regex to match the format "2019-2024"
    },
    remarks: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.models.ModelTest || mongoose.model("ModelTest", ModelTestSchema);
