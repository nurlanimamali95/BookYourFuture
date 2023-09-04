import SessionModel from "../models/Session.js";

export const add = async (req, res) => {
  try {
    await SessionModel.syncIndexes();

    const newSession = {
      startTime: req.body.startTime,
      durationInSeconds: req.body.durationInSeconds,
    };

    const session = await SessionModel.create(newSession);

    res.status(200).json({ success: true, session });
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate key error
      res.status(400).json({ message: "Duplicate time" });
    } else {
      res.status(500).json({ message: "Something went wrong." });
    }
  }
};
export const all = async (req, res) => {
  try {
    const groups = await SessionModel.find()
      .populate("student")
      .populate("user")
      .exec();

    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json({
      message: "something is wrong",
    });
  }
};
export const bookSession = async (req, res) => {
  try {
    const sessionId = req.params.sessionId;
    const studentId = req.body.studentId; // Assuming you receive the student's ID in the request body

    // Find the session by its ID
    const session = await SessionModel.findById(sessionId);

    if (!session) {
      return res.status(404).json({ message: "Session not found." });
    }

    // Update the session to include the student
    session.student = studentId;

    // Save the updated session
    await session.save();

    res.status(200).json({ success: true, session });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
export const remove = async (req, res) => {
  try {
    const sessionId = req.params.id;

    SessionModel.findByIdAndDelete(
      {
        _id: sessionId,
      },
      (err, session) => {
        if (err) {
          return res.status(500).json({
            message: "can`t delete session",
          });
        }
        if (!session) {
          return res.status(404).json({
            message: "session not found",
          });
        }
      }
    );

    if (!sessionId) {
      return res.status(404).json({
        message: "session not found",
      });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({
      message: "something is wrong",
    });
  }
};
