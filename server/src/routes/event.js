import express from "express";
import * as eventController from "../controllers/eventController.js";
import checkAuth from "../util/checkAuth.js";
import validationErrorMessage from "../util/validationErrorMessage.js";
import { validateEvent } from "../models/Event.js";

const eventRouter = express.Router();

eventRouter.get("/", eventController.all);
eventRouter.get("/:id", eventController.getOne);

eventRouter.post(
  "/add",
  checkAuth,
  validateEvent,
  validationErrorMessage,
  eventController.add
);

eventRouter.delete("/:id", checkAuth, eventController.remove);

eventRouter.patch(
  "/edit/:id",
  checkAuth,
  validateEvent,
  validationErrorMessage,
  eventController.edit
);

export default eventRouter;
