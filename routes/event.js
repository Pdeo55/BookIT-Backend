const express = require("express");

const {addEvent} = require('../controllers/Event/Add');
const{getEvent,getEventbyid}= require("../controllers/Event/Get")




const EventRouter = express.Router();

EventRouter.post("/addEvent",addEvent);
EventRouter.post("/getEventbyid",getEventbyid);
EventRouter.get("/getEvent", getEvent);

module.exports = EventRouter ;