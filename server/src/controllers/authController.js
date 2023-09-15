import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateRandomPassword, sendEmail } from "../util/password-logic.js";

export const register = async (req, res) => {
  try {
    const password = generateRandomPassword();
    const salt = await bcrypt.genSalt(10); // salt
    const hash = await bcrypt.hash(password, salt); // hash password

    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      passwordHash: hash,
      group: req.body.group || [],
    };

    const user = await UserModel.create(newUser);

    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.KEY_JWT_AUTH, // secret code
      { expiresIn: "30d" } // time life token 30 days
    );

    const { passwordHash, ...userData } = user._doc;

    await sendEmail(
      newUser.email,
      "Welcome to Book You Future",
      `If you want to login in BookYouFuture, please use:
      email: ${newUser.email}, 
      password: ${password}\nBYF Team`
    );

    res.status(200).json({ ...userData, token, success: true });
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
    if (err.code === 11000) {
      // Duplicate key error
      res.status(400).json({ message: "Duplicate email" });
    } else {
      res.status(500).json({ message: "No Auth, sorry error...." });
    }
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const isValidPass = await bcrypt.compareSync(
      req.body.password,
      user._doc.passwordHash
    ); // only string

    if (!isValidPass) {
      return res.status(403).json({
        message: "Wrong password or email", // check in errors, password or email
      });
    }
    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.KEY_JWT_AUTH, // secret code
      { expiresIn: "30d" } // time life token 30 days
    );

    const { passwordHash, ...userData } = user._doc;

    res.status(200).json({ ...userData, token, success: true });
  } catch (err) {
    //eslint-disable-next-line
    console.error(err);
    res.status(500).json({
      message: "No Auth, sorry error....",
    });
  }
};
