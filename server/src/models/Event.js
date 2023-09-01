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
      enum: {
        values: ["online", "offline"],
      },
      required: true,
    },

    receiverType: {
      type: String,
      enum: {
        values: ["all", "group", "student"],
      },
      required: true,
    },

    eventType: {
      type: String,
      enum: {
        values: ["oneDay", "multiplyDay"],
      },
      required: true,
    },

    sessionSlot: {
      type: [mongoose.Schema.Types.Session],
    },

    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: true,
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
  body("location").isIn(["online", "offline"]).isArray(),
  body("receiverType").isIn(["oneDay", "multiplyDay"]).isArray(),
  body("sessionSlot").optional().isArray(),
  body("group").optional(),
];

export default Event;
