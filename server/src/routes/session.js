import express from "express";
import * as sessionController from "../controllers/sessionController.js";
import { validateSession } from "../models/Session.js";
// import checkAuth from "../util/checkAuth.js";
import validationErrorMessage from "../util/validationErrorMessage.js";

const sessionRouter = express.Router();

sessionRouter.get("/all", sessionController.all);

sessionRouter.post(
  "/add",
  // checkAuth,
  validateSession,
  validationErrorMessage,
  sessionController.add
);

sessionRouter.delete(
  "/:id",
  // checkAuth,
  sessionController.remove
);

sessionRouter.post(
  "/:sessionId/bookStudent",
  // checkAuth,
  validationErrorMessage,
  sessionController.bookSession
);

export default sessionRouter;
