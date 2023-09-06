import EventModel from "../models/Event.js";

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
    res.status(500).json({ message: "Something went wrong." });
  }
};
export const all = async (req, res) => {
  try {
    const { title, groupId } = req.query;
    const query = {};

    if (title) {
      // Use a regular expression for case-insensitive partial match
      query.title = { $regex: new RegExp(title, "i") };
    }

    if (groupId) {
      query.group = groupId; // Assuming `group` is the field storing the group's _id
    }
    console.log("Query:", query);

    const events = await EventModel.find(query)
      .populate("student")
      .populate("sessionSlot")
      .populate("user")
      .populate("group")
      .exec();

    console.log("Events:", events); // Log the retrieved events

    res.status(200).json({ success: true, eventsData: events });
  } catch (err) {
    res.status(500).json({
      message: "something is wrong",
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
      message: "Something is wrong",
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
      message: "something is wrong",
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
      message: "something is wrong",
    });
  }
};
