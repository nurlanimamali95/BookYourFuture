import mongoose from "mongoose";
import { body } from "express-validator";

const groupSchema = new mongoose.Schema(
  {
    numberOfGroupName: {
      type: Number,
      required: true,
    },

    students: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: [],
    },

    status: {
      type: String,
      enum: {
        values: ["active", "inactive"],
      },
    },

    color: String,
  },
  {
    timestamps: true,
  }
);

const Group = mongoose.model("group", groupSchema);

export const validateGroup = [
  body("numberOfGroupName")
    .isLength({ min: 1 })
    .withMessage("Group must have at least 1 digits")
    .matches(/^\d+$/)
    .withMessage("Group must consist of digits only"),
  body("students").optional().isString(),
  body("status").isIn(["active", "inactive"]).isArray(),
  body("color").optional().isString(),
];

export default Group;
