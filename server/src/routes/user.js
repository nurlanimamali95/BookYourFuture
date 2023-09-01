import express from "express";
import verifyOldPassword from "../util/verifyOldPassword.js";
import * as userController from "../controllers/userController.js";
import {
  editValidationUser,
  changePasswordValidationUser,
} from "../models/User.js";
import checkAuth from "../util/checkAuth.js";
import validationErrorMessage from "../util/validationErrorMessage.js";

const userRouter = express.Router();

userRouter.get("/all", userController.all);
userRouter.get("/", checkAuth, userController.userMe);

userRouter.get("/:id", userController.getOne);
userRouter.delete("/:id", checkAuth, userController.remove);
userRouter.put(
  "/:id",
  checkAuth,
  editValidationUser,
  validationErrorMessage,
  userController.edit
);

userRouter.post(
  "/change_password",
  checkAuth,
  changePasswordValidationUser,
  verifyOldPassword,
  validationErrorMessage,
  userController.changePassword
);

export default userRouter;
