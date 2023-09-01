import GroupModel from "../models/Group.js";

export const add = async (req, res) => {
  try {
    await GroupModel.syncIndexes();

    const newGroup = {
      numberOfGroupName: req.body.numberOfGroupName,
      status: req.body.status,
      students: req.body.students || [],
      color: req.body.color,
      user: req.body.userId,
    };

    const group = await GroupModel.create(newGroup);

    res.status(200).json({ success: true, group });
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate key error
      res.status(400).json({ message: "Duplicate numberOfGroupName" });
    } else {
      console.error(err);
      res.status(500).json({ message: "Something went wrong." });
    }
  }
};

export const all = async (req, res) => {
  try {
    const groups = await GroupModel.find();

    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json({
      message: "something is wrong",
    });
  }
};

// export const getOne = async (req, res) => {
//   try {
//     const userId = req.params.id;

//     if (!userId) {
//       return res.status(404).json({
//         message: "User not found",
//       });
//     }

//     const user = await UserModel.findById(userId);

//     if (!user) {
//       return res.status(404).json({
//         message: "User not found",
//       });
//     }

//     // Exclude passwordHash from the response
//     const { passwordHash, ...userData } = user._doc;

//     res.json(userData);
//   } catch (err) {
//     res.status(500).json({
//       message: "Something is wrong",
//     });
//   }
// };
export const remove = async (req, res) => {
  try {
    const groupId = req.params.id;

    GroupModel.findByIdAndDelete(
      {
        _id: groupId,
      },
      (err, group) => {
        if (err) {
          return res.status(500).json({
            message: "can`t delete group",
          });
        }
        if (!group) {
          return res.status(404).json({
            message: "group not found",
          });
        }
      }
    );

    if (!groupId) {
      return res.status(404).json({
        message: "group not found",
      });
    }

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({
      message: "something is wrong",
    });
  }
};
// export const edit = async (req, res) => {
//   try {
//     const userId = req.params.id;

//     const user = await UserModel.findById(userId);

//     if (!user) {
//       return res.status(404).json({
//         message: "user not found",
//       });
//     }

//     // Update user properties
//     const {
//       firstName,
//       lastName,
//       phone,
//       city,
//       street,
//       houseNumber,
//       zipCode,
//       group,
//       gitHub,
//       linkedIn,
//       avatarUrl,
//       status,
//     } = req.body;

//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.phone = phone;
//     user.city = city;
//     user.street = street;
//     user.houseNumber = houseNumber;
//     user.zipCode = zipCode;
//     user.group = group;
//     user.gitHub = gitHub;
//     user.linkedIn = linkedIn;
//     user.avatarUrl = avatarUrl;
//     user.status = status;

//     await user.save();

//     res.json({ success: true });
//   } catch (err) {
//     res.status(500).json({
//       message: "something is wrong",
//     });
//   }
// };
