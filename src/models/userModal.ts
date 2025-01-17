import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const User = mongoose.models?.User || mongoose.model("User", schema);
