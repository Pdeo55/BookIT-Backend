const express = require("express");
const {addEvent} = require('../controllers/Event/Add');
const{getEvent}= require("../controllers/Event/Get")
const EventRouter = express.Router();

EventRouter.post("/addEvent",addEvent);
EventRouter.get("/getEvent", getEvent);



module.exports = EventRouter;
