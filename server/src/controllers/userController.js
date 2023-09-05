import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userMe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    const { passwordHash, ...userData } = user._doc;

    res.status(200).json({ success: true, userData });
  } catch (err) {
    res.status(500).json({
      message: "Something is wrong",
    });
  }
};
export const all = async (req, res) => {
  try {
    const users = await UserModel.find().populate("group").exec();

    if (!users) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const usersWithoutPassword = users.map((user) => {
      const { passwordHash, ...allUsersData } = user._doc;
      return allUsersData;
    });

    res.status(200).json({ success: true, usersData: usersWithoutPassword });
  } catch (err) {
    res.status(500).json({
      message: "what`s wrong",
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!userId) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const user = await UserModel.findById(userId).populate("group").exec();

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Exclude passwordHash from the response
    const { passwordHash, ...userData } = user._doc;

    res.status(200).json({ success: true, userData });
  } catch (err) {
    res.status(500).json({
      message: "Something is wrong",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const userId = req.params.id;

    UserModel.findByIdAndDelete(
      {
        _id: userId,
      },
      (err, user) => {
        if (err) {
          return res.status(500).json({
            message: "can`t delete user",
          });
        }
        if (!user) {
          return res.status(404).json({
            message: "user not found",
          });
        }
      }
    );

    if (!userId) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({
      message: "something is wrong",
    });
  }
};
export const edit = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    // Update user properties
    const {
      firstName,
      lastName,
      phone,
      city,
      street,
      houseNumber,
      zipCode,
      group,
      gitHub,
      linkedIn,
      avatarUrl,
      status,
    } = req.body;

    user.firstName = firstName;
    user.lastName = lastName;
    user.phone = phone;
    user.city = city;
    user.street = street;
    user.houseNumber = houseNumber;
    user.zipCode = zipCode;
    user.group = group;
    user.gitHub = gitHub;
    user.linkedIn = linkedIn;
    user.avatarUrl = avatarUrl;
    user.status = status;

    await user.save();

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({
      message: "something is wrong",
    });
  }
};
export const changePassword = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    const password = req.body.newPassword.toString();
    const salt = await bcrypt.genSalt(10); // salt
    const hash = await bcrypt.hash(password, salt); // hash password

    user.passwordHash = hash;
    await user.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.KEY_JWT_AUTH, // secret code
      { expiresIn: "30d" } // time life token 30 days
    );

    res.status(200).json({ success: true, token });
  } catch (err) {
    res.status(500).json({
      message: "something is wrong",
    });
  }
};
