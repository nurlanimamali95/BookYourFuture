import mongoose from "mongoose";
import { body } from "express-validator";

const sessionSchema = new mongoose.Schema({
  startTime: {
    type: Date,
    required: true,
    unique: true,
  },
  durationInSeconds: {
    type: Number,
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Session = mongoose.model("session", sessionSchema);

export const validateSession = [
  body("startTime", "startTime is required and must be a valid date")
    .exists()
    .isISO8601(), // Validate that it's a valid ISO 8601 date-time string
  body("durationInSeconds").isNumeric(),
];

export default Session;
