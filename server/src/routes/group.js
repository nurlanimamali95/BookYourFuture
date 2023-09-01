import express from "express";
import * as groupController from "../controllers/groupController.js";
import { validateGroup } from "../models/Group.js";
import checkAuth from "../util/checkAuth.js";
import validationErrorMessage from "../util/validationErrorMessage.js";

const groupRouter = express.Router();

groupRouter.get("/", groupController.all);
groupRouter.post(
  "/add",
  checkAuth,
  validateGroup,
  validationErrorMessage,
  groupController.add
);

groupRouter.delete("/:id", checkAuth, groupController.remove);
// userRouter.put(
//   "/:id",
//   checkAuth,
//   editValidationUser,
//   validationErrorMessage,
//   userController.edit
// );

// userRouter.post(
//   "/change_password",
//   checkAuth,
//   changePasswordValidationUser,
//   verifyOldPassword,
//   validationErrorMessage,
//   userController.changePassword
// );

export default groupRouter;
