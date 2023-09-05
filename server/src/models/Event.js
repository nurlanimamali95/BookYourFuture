import mongoose from "mongoose";
import { body } from "express-validator";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: String,

    location: {
      type: String,
      required: true,
    },

    receiverType: [
      {
        type: String,
        required: true,
      },
    ],

    eventType: {
      type: String,
      required: true,
    },

    sessionSlot: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "session", // Reference the Session schema
    },

    group: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "group",
    },

    student: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("event", eventSchema);

export const validateEvent = [
  body("title", "Title must be at least 6 characters")
    .isLength({ min: 6 })
    .isString(),
  body("description").optional().isString(),

  body("location")
    .isIn(["online", "offline"])
    .isString()
    .withMessage("Location must be 'online' or 'offline'"),

  body("receiverType").isIn(["all", "group", "student"]).isArray(),
  body("eventType").isIn("oneDay", "multiplyDay").isString(),
  body("sessionSlot").optional().isArray(),
  body("group").optional().isArray(),
  body("student").optional(),
];

export default Event;
