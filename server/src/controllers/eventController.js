import { Event as EventModel } from "../models/Event.js";

export const add = async (req, res) => {
  try {
    const newEvent = {
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      receiverType: req.body.receiverType,
      sessionSlot: req.body.sessionSlot || [],
      group: req.body.group || [],
      student: req.body.student || [],
    };

    const event = await EventModel.create(newEvent);

    res.status(200).json({ success: true, eventData: event });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
export const all = async (req, res) => {
  try {
    const { title, groupId, studentId } = req.query;
    const query = {};

    if (title) {
      // Use a regular expression for case-insensitive partial match
      query.title = { $regex: new RegExp(title, "i") };
    }

    if (groupId) {
      query.group = { _id: groupId }; // Assuming `group` is the field storing the group's _id
    }

    if (studentId) {
      query.students = { _id: studentId }; // Assuming `student` is the field storing the student's _id
    }

    const events = await EventModel.find(query)
      .populate("student")
      .populate("sessionSlot")
      .populate("user")
      .populate("group")
      .exec();

    res.status(200).json({ success: true, eventsData: events });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const eventId = req.params.id;

    if (!eventId) {
      return res.status(404).json({
        message: "event not found",
      });
    }

    const event = await EventModel.findById(eventId)
      .populate("student")
      .populate("sessionSlot")
      .populate("user")
      .populate("group")
      .exec();

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }
    res.status(200).json({ success: true, eventData: event });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const eventId = req.params.id;

    EventModel.findByIdAndDelete(
      {
        _id: eventId,
      },
      (err, event) => {
        if (err) {
          return res.status(500).json({
            message: "can`t delete event",
          });
        }
        if (!event) {
          return res.status(404).json({
            message: "event not found",
          });
        }
      }
    );

    if (!eventId) {
      return res.status(404).json({
        message: "event not found",
      });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
export const edit = async (req, res) => {
  try {
    const eventId = req.params.id;

    if (!eventId) {
      return res.status(404).json({
        message: "event not found",
      });
    }

    const updatedEvent = await EventModel.findByIdAndUpdate(
      {
        _id: eventId,
      },
      {
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        receiverType: req.body.receiverType,
        sessionSlot: req.body.sessionSlot || [],
        group: req.body.group || [],
        student: req.body.student || [],
      },
      { new: true } // This option returns the updated document
    );

    res.status(200).json({ success: true, eventData: updatedEvent }); // Send the updatedGroup in the response
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const bookSession = async (req, res) => {
  try {
    const sessionId = req.params.sessionId;
    const studentId = req.body.studentId; // Assuming you send the studentId in the request body
    // Find the event by sessionId and update the sessionSlot with the new studentId

    // Check if the session slot is already booked by the student
    const isAlreadyBooked = await EventModel.exists({
      "sessionSlot._id": sessionId,
      "sessionSlot.student": studentId,
    });

    if (isAlreadyBooked) {
      return res
        .status(400)
        .json({ message: "Student is already booked for this session" });
    }

    const event = await EventModel.findOneAndUpdate(
      { "sessionSlot._id": sessionId },
      { $push: { "sessionSlot.$.student": studentId } },
      { new: true }
    )
      .populate("student")
      .exec();

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ success: true, eventData: event });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const findTimeSlotByStudentId = async (req, res) => {
  try {
    const studentId = req.params.studentId;

    const bookedSlots = await EventModel.find({
      "sessionSlot.student": studentId,
    });

    if (!bookedSlots) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ success: true, bookedSlots });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
