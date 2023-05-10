const Event = require("../../models/event");

const getEvent = async (req, res) => {


  try {
    const getevent = await Event.find();
    res.status(200).json(getevent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEventbyid = async (req, res) => {
     const id=req.params.id 
  try {
    const getevent = await Event.findById(id);
    res.status(200).json(getevent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getEvent,getEventbyid};