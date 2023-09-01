import mongoose from "mongoose";
import { body } from "express-validator";

const sessionSchema = new mongoose.Schema({
  startTime: {
    type: Date,
    required: true,
  },
  durationInSeconds: {
    type: Number,
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Session = mongoose.model("session", sessionSchema);

export const validateSession = [
  body("startTime", "startTime is required").isDate(),
  body("durationInSeconds").isNumeric(),
  body("student").optional().isString(),
];

export default Session;
