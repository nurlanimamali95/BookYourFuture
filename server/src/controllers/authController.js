import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const password = req.body.password.toString();
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

    res.status(200).json({ ...userData, token, success: true });
  } catch (err) {
    //eslint-disable-next-line
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
        message: "Error, user not found",
      });
    }
    const isValidPass = await bcrypt.compareSync(
      req.body.password,
      user._doc.passwordHash
    ); // only string

    if (!isValidPass) {
      return res.status(403).json({
        message: "Error, wrong password or email", // check in errors, password or email
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
