const Event = require("../../models/event");

const addEvent = async (req, res) => {
  const { EventName, Date, Venue, Category, fee, OrganizationID } = req.body;

  try {
    const addevent = await Event.create({
      EventName,
      Date,
      Venue,
      Category,
      fee,
      OrganizationID,
    });
    res.status(200).json(addevent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addEvent };
