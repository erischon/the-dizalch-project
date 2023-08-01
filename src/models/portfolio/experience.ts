import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Internship", "Assignment", "Volunteer", "Other"],
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.models.Experience ||
  mongoose.model("Experience", ExperienceSchema);
