import mongoose from "mongoose";

const PeopleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export default mongoose.models.People || mongoose.model("People", PeopleSchema);
