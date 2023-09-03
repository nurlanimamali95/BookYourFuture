import express from "express";
import * as sessionController from "../controllers/sessionController.js";
import { validateSession } from "../models/Session.js";
import checkAuth from "../util/checkAuth.js";
import validationErrorMessage from "../util/validationErrorMessage.js";

const sessionRouter = express.Router();

// groupRouter.get("/", groupController.all);
// groupRouter.get("/:id", groupController.getOne);

sessionRouter.post(
  "/add",
  checkAuth,
  validateSession,
  validationErrorMessage,
  sessionController.add
);

// groupRouter.delete("/:id", checkAuth, groupController.remove);
// groupRouter.patch(
//   "/edit/:id",
//   checkAuth,
//   editValidateGroup,
//   validationErrorMessage,
//   groupController.edit
// );

export default sessionRouter;
